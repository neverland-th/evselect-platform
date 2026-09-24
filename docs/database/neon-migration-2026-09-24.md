# EVSELECT: SQLite to Neon Free migration

Date: 2026-09-24 (Asia/Bangkok). Authorized by the owner's request to choose a free Vercel database and migrate existing data.

## Database choice and limits

- Provider: Neon PostgreSQL, Vercel Marketplace native integration.
- Resource: `evselect-db` (`store_wnXSWpVxLYbKD9ZI`), Neon project `delicate-bar-01823807`.
- Explicit billing plan: **Free**, `free_v3`. No paid upgrade, top-up, overage enablement, or paid add-on was requested or performed.
- Region: `iad1` / US East, colocated with the existing Vercel functions.
- Connected Vercel project: `evselect-platform`, **production only**. Development and preview are not automatically granted this production database.
- The current Free plan has finite storage and compute allowances. Neon documents 0.5 GB storage and 100 CU-hours per project; free service is not unlimited. Check the provider before changing plans: https://neon.com/blog/building-patterns-unlocked-by-scale-to-zero
- Turso Free offers more storage and an easier SQLite migration, but Neon was selected for PostgreSQL/Prisma support, the existing account integration, and the relational catalog schema. Existing data is only 253,952 bytes, so storage size does not constrain this migration.

## Source, backup and integrity

- Source: `C:/Users/rolf-/.gemini/antigravity/scratch/evselect-platform/dev.db`.
- Backup: `C:/Users/rolf-/.gemini/antigravity/backups/evselect-neon-migration-2026-09-24/source.sqlite`.
- Source SHA-256: `B312D1DF197F5EE1D3E226A2033831DA57DC6325CF066FE90BEDF92EFDF07E3A`.
- SQLite backup SHA-256: `14E439EF86784820FDDEE03B0A273EC4F03994777EEB3F69FB2B1DF32E42B3B3`.
- Source and online-backup logical content SHA-256 both equal `45a179078ed6b93ce81f1a2b9f8b5414fc73ae1a1d0250e0321dfcbd08778724`. SQLite's backup API can change file headers, so file-byte hashes are not expected to match.
- Both files passed `PRAGMA integrity_check` and had no foreign-key violations. Other checked release copies of `dev.db` were zero-byte files.
- Original source remains intact. Credentials and backup data are excluded from Git and deployment uploads.

| Table | Rows imported | Canonical SHA-256 after UTC timestamp normalization |
|---|---:|---|
| Category | 4 | `95484e1671c0d49788fd8bfdfe6f42a958a0efbe8f7271846f58a99f47e398d4` |
| Vehicle | 12 | `0621cd9f1513e29cae89bdd570014e550b425fc9fb2013172a45b21e20013306` |
| Product | 4 | `36ea05de86f9d13ff7598f0aff685dc380f6f504e8ffdcf7a980effe400755ee` |
| Batch | 4 | `89493d82c279c06ef23fdc7ffb5a253af5826c042dbc2dcfe204238e81ffb8ba` |
| Fitment | 9 | `3ff09078b843caf0f52a9b00efd6f2cb69c34e26492f079a7a632fa4217d41c3` |

Total: **33 records**, every source field compared with PostgreSQL after import. IDs, nulls, prices, timestamps and relationships preserved. Imported status/fitment values are historical data, not new verification of product availability or compatibility.

## Implementation

- Based on the exact production source commit `5ad51265a04a811b19699ff574bee3acb91dc210`, in isolated branch `codex/neon-free-migration-2026-09-24`.
- Prisma provider changed to PostgreSQL; `@prisma/adapter-pg` replaces the local SQLite adapter and mock proxy.
- Runtime uses the pooled `DATABASE_URL`; Prisma migrations/import use `DATABASE_URL_UNPOOLED`. TLS certificate verification is enforced by the runtime and importer.
- `prisma.config.ts` loads Next.js environment files. The migration is explicit, not automatically applied on every build.
- `scripts/migrate-sqlite-to-postgres.mjs` defaults to no operation without an explicit mode. `--apply` requires an empty destination, locks the tables, imports and verifies within one transaction, and rolls back on any mismatch. `--verify-only` compares without changing data.
- `scripts/verify-database-connection.ts` exercises the real app's Prisma client, joined relationships and a write/read transaction intentionally rolled back. Its timeout allows testing from a remote development machine.
- `/api/health/database` requires a server-side bearer token, returns only table counts and status, and is not cached. Missing or invalid credentials return 404 before accessing the database. The token is not public and is never written into source.
- Legacy product detail URLs are now covered by the existing pre-launch route block so connecting the historical catalog does not publish it. Admin and export routes remain blocked.
- Articles remain source-controlled files; this database migration does not move article content into a CMS or change published content.
- Next.js, its env package and ESLint config were patched to 16.3.6 after npm reported critical advisories for the old Next.js version. The current dependency audit still reports four high entries in Prisma CLI's dependency tree; no major downgrade or unrelated Prisma rewrite was performed.

## Validation before production switch

- Schema migration applied; Prisma reports no schema difference.
- All 33 records matched every field after commit.
- Raw PostgreSQL and real Prisma write/read/rollback checks passed; nine joined fitments preserve their full relationship chain.
- Build, TypeScript, 73 image-reference checks, 11 content-link tests and strict 31-page/1,645-link audit passed.
- Desktop (1440 px) and mobile (390 px) homepage/article-index smoke checks: HTTP 200, no horizontal overflow, no broken visible images, no page errors.
- Authenticated local database health returned counts 4/12/4/4/9.
- Production deployment and final live checks: pending at this checkpoint; see completion record below.

## Recovery and future use

- Pre-migration production rollback deployment: `dpl_ANG8BJvUtFVn5rfmm4K7pUNdb9Ve` / `evselect-platform-olxhu91kw-evselect-com.vercel.app`.
- Keep both the original SQLite source and backup. Rolling back the frontend does not delete the imported Neon data.
- Before future development, use an isolated database/branch and matching environment. Do not copy production credentials into public client variables or share the production database with automatic preview writes.
- Pull production environment variables only for authorized maintenance, and never commit the resulting `.env.local`.
- To compare the unchanged source with the destination again: `node scripts/migrate-sqlite-to-postgres.mjs <backup.sqlite> --verify-only`.
- Migrate future schema changes with reviewed Prisma migrations. Do not rerun the initial import into a nonempty database.
