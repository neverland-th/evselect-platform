import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import { resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import nextEnv from '@next/env';
import pg from 'pg';

// node >= 22.13. Read-only source; writes require --apply and an empty destination.
const [sourceArgument, mode] = process.argv.slice(2);
assert(sourceArgument && ['--apply', '--verify-only'].includes(mode),
  'Usage: node scripts/migrate-sqlite-to-postgres.mjs <backup.sqlite> --apply|--verify-only');
nextEnv.loadEnvConfig(process.cwd());
assert(process.env.DATABASE_URL_UNPOOLED, 'DATABASE_URL_UNPOOLED is required.');
const databaseUrl = new URL(process.env.DATABASE_URL_UNPOOLED);
assert(['postgres:', 'postgresql:'].includes(databaseUrl.protocol), 'Destination must be PostgreSQL.');
databaseUrl.searchParams.set('sslmode', 'verify-full');
// Prisma DateTime columns are timestamp(3), interpreted as UTC on every machine.
pg.types.setTypeParser(1114, value => new Date(`${value.replace(' ', 'T')}Z`));
pg.defaults.parseInputDatesAsUTC = true;
const destination = new pg.Client({ connectionString: databaseUrl.toString(), connectionTimeoutMillis: 15_000 });
const source = new DatabaseSync(resolve(sourceArgument), { readOnly: true });
const tableNames = ['Category', 'Vehicle', 'Product', 'Batch', 'Fitment'];
const quote = name => `"${name.replaceAll('"', '""')}"`;
const rowsByTable = new Map();
const canonical = rows => JSON.stringify(rows.map(row => Object.fromEntries(
  Object.entries(row).sort(([a], [b]) => a.localeCompare(b)).map(([key, value]) =>
    [key, value instanceof Date ? value.toISOString() : value]),
)).sort((a, b) => String(a.id).localeCompare(String(b.id))));
const digest = rows => createHash('sha256').update(canonical(rows)).digest('hex');

try {
  assert.deepEqual(source.prepare('PRAGMA integrity_check').all().map(row => row.integrity_check), ['ok']);
  assert.equal(source.prepare('PRAGMA foreign_key_check').all().length, 0, 'Source has broken foreign keys.');
  const sourceTables = source.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'").all().map(row => row.name);
  assert.deepEqual(sourceTables.sort(), [...tableNames].sort(), 'Unexpected source tables; do not silently omit data.');

  for (const table of tableNames) {
    const fields = source.prepare(`PRAGMA table_info(${quote(table)})`).all();
    const dates = new Set(fields.filter(field => /DATE|TIME/i.test(field.type)).map(field => field.name));
    const rows = source.prepare(`SELECT * FROM ${quote(table)} ORDER BY id`).all().map(row =>
      Object.fromEntries(Object.entries(row).map(([key, value]) => {
        if (value === null || !dates.has(key)) return [key, value];
        const parsed = new Date(value);
        assert(!Number.isNaN(parsed.valueOf()), `Invalid date in ${table}.${key}`);
        return [key, parsed];
      })));
    rowsByTable.set(table, { fields, rows });
  }

  await destination.connect();
  await destination.query('BEGIN ISOLATION LEVEL SERIALIZABLE');
  await destination.query("SET LOCAL TIME ZONE 'UTC'");
  if (mode === '--apply') {
    await destination.query(`LOCK TABLE ${tableNames.map(quote).join(', ')} IN ACCESS EXCLUSIVE MODE`);
  }

  const report = [];
  for (const table of tableNames) {
    const { fields, rows } = rowsByTable.get(table);
    const targetColumns = await destination.query(
      "SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY column_name", [table]);
    assert.deepEqual(targetColumns.rows.map(row => row.column_name).sort(), fields.map(field => field.name).sort(), `Schema mismatch: ${table}`);
    if (mode === '--apply') {
      const existing = await destination.query(`SELECT COUNT(*)::int AS count FROM ${quote(table)}`);
      assert.equal(existing.rows[0].count, 0, `Destination ${table} is not empty. Refusing to overwrite data.`);
      for (const row of rows) {
        const columns = Object.keys(row);
        await destination.query(
          `INSERT INTO ${quote(table)} (${columns.map(quote).join(', ')}) VALUES (${columns.map((_, i) => `$${i + 1}`).join(', ')})`,
          columns.map(column => row[column]));
      }
    }
    const remote = await destination.query(`SELECT * FROM ${quote(table)} ORDER BY id`);
    assert.equal(canonical(remote.rows), canonical(rows), `Data mismatch: ${table}`);
    report.push({ table, rows: rows.length, sha256: digest(rows), verifiedEveryField: true });
  }

  if (mode === '--apply') {
    await destination.query('SAVEPOINT write_probe');
    const probeId = `migration-probe-${randomUUID()}`;
    await destination.query('INSERT INTO "Category" (id, name, "createdAt", "updatedAt") VALUES ($1, $2, NOW(), NOW())', [probeId, probeId]);
    const probe = await destination.query('SELECT id FROM "Category" WHERE id=$1', [probeId]);
    assert.equal(probe.rows[0]?.id, probeId);
    await destination.query('ROLLBACK TO SAVEPOINT write_probe');
    const removed = await destination.query('SELECT COUNT(*)::int AS count FROM "Category" WHERE id=$1', [probeId]);
    assert.equal(removed.rows[0].count, 0);
  }
  await destination.query('COMMIT');
  console.log(JSON.stringify({ mode, source: resolve(sourceArgument), tables: report, totalRows: report.reduce((sum, row) => sum + row.rows, 0), writeReadRollbackVerified: mode === '--apply' }, null, 2));
} catch (error) {
  await destination.query('ROLLBACK').catch(() => {});
  console.error(error instanceof assert.AssertionError ? error.message.split('\n')[0] : `Migration failed (${error?.code || error?.name || 'unknown error'}). No partial import was committed.`);
  process.exitCode = 1;
} finally {
  source.close();
  await destination.end().catch(() => {});
}
