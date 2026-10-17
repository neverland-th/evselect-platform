import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import { spawn, type ChildProcess } from 'node:child_process';
import { createServer } from 'node:net';
import { once } from 'node:events';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { inspectPage, parseSitemap, blockingPages } from './lib/content-links.mjs';
import { publicSiteRoutes, pendingPublicRoutes, supportingPublicRoutes, siteOrigin } from '../src/lib/public-site-routes';

const args = new Set(process.argv.slice(2));
let base = (process.env.BASE_URL || 'http://127.0.0.1:4327').replace(/\/$/, '');
const output = process.env.AUDIT_OUTPUT || 'scratch/content-link-audit.json';
let server: ChildProcess | undefined;
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function get(route: string) {
  return fetch(base + route, { signal: AbortSignal.timeout(20000), redirect: 'manual' });
}

async function startBuiltServer() {
  const listener = createServer();
  listener.listen(0, '127.0.0.1');
  await once(listener, 'listening');
  const address = listener.address();
  assert.ok(address && typeof address !== 'string');
  const port = address.port;
  await new Promise<void>(resolve => listener.close(() => resolve()));
  base = `http://127.0.0.1:${port}`;
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], { stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
  let logs = '';
  server.stdout?.on('data', chunk => { logs = (logs + chunk).slice(-4000); });
  server.stderr?.on('data', chunk => { logs = (logs + chunk).slice(-4000); });
  let spawnError: Error | undefined;
  server.on('error', error => { spawnError = error; });
  for (let i = 0; i < 120; i++) {
    if (spawnError) throw spawnError;
    if (server.exitCode !== null) throw new Error(`Audit server exited: ${logs}`);
    try { if ((await get('/robots.txt')).status === 200) return; } catch { /* Startup only. */ }
    await delay(250);
  }
  throw new Error(`Audit server did not become ready: ${logs}`);
}

async function main() {
  if (args.has('--build')) await startBuiltServer();
  const noindexRoutes: readonly string[] = [...pendingPublicRoutes, ...supportingPublicRoutes];
  const routes = [...publicSiteRoutes, ...noindexRoutes];
  const articles = (await readdir('src/app/(storefront)/articles', { withFileTypes: true }))
    .filter(e => e.isDirectory()).map(e => `/articles/${e.name}`).sort();
  assert.deepEqual(publicSiteRoutes.filter(r => r.startsWith('/articles/')).sort(), articles, 'Article route missing from sitemap allowlist');
  const pages: ReturnType<typeof inspectPage>[] = [];
  for (const route of routes) {
    const response = await get(route);
    assert.equal(response.status, 200, `Public page ${route}`);
    assert.doesNotMatch(response.headers.get('x-robots-tag') || '', /noindex/i, route);
    const page = inspectPage(await response.text(), route);
    assert.ok(page.canonical, `Missing canonical: ${route}`);
    assert.equal(new URL(page.canonical).href, new URL(siteOrigin + route).href, `Canonical ${route}`);
    if (noindexRoutes.includes(route)) assert.match(page.robots, /noindex/i, route);
    else assert.doesNotMatch(page.robots, /noindex/i, route);
    pages.push(page);
  }
  const byRoute = new Map(pages.map(p => [p.route, p]));
  const catalog = byRoute.get('/articles');
  assert.ok(catalog, 'Article catalog was not audited');
  const catalogRoutes = new Set(catalog.links.flatMap(link => link.target ? [link.target.path] : []));
  for (const route of articles) {
    if (!catalogRoutes.has(route)) catalog.issues.push({ code: 'missing-catalog-article', detail: route });
  }
  const extraTargets = new Map<string, number>();
  for (const page of pages) {
    for (const link of page.links) {
      if (!link.target) continue;
      const { path: target, query, hash } = link.target;
      let destination = byRoute.get(target);
      const requestPath = target + query;
      if (!destination || query) {
        if (!extraTargets.has(requestPath)) {
          const response = await get(requestPath);
          extraTargets.set(requestPath, response.status);
          if (!destination && response.status === 200 && response.headers.get('content-type')?.includes('text/html')) {
            destination = inspectPage(await response.text(), target);
            byRoute.set(target, destination);
            // Discovered HTML destinations must be audited too, not only return 200.
            pages.push(destination);
          }
        }
        if (extraTargets.get(requestPath) !== 200) page.issues.push({ code: 'broken-target', detail: `${link.text} → ${link.href} (${extraTargets.get(requestPath)})` });
      }
      if (hash && destination && !destination.ids.includes(hash)) page.issues.push({ code: 'missing-hash', detail: `${link.text} → ${link.href}` });
      if (destination) link.destinationTitle = destination.title;
    }
  }
  const incoming = new Map(publicSiteRoutes.map(route => [route as string, [] as string[]]));
  for (const page of pages) for (const link of page.links) {
    if (link.target && link.target.path !== page.route && incoming.has(link.target.path)) incoming.get(link.target.path)!.push(page.route);
  }
  for (const page of pages) if (page.route.startsWith('/articles/') && !incoming.get(page.route)?.length) page.issues.push({ code: 'orphan-article', detail: 'No incoming internal link from audited pages' });
  // Destination changes must invalidate legacy allowances even if the source HTML is unchanged.
  for (const page of pages) page.fingerprint = createHash('sha256').update(JSON.stringify([page.fingerprint, page.issues])).digest('hex');

  const sitemapChecks: Record<string, unknown> = {};
  for (const route of ['/sitemap_index.xml', '/sitemap_indexl.xml', '/sitemap.xml']) {
    const response = await get(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get('content-type') || '', /xml/, route);
    assert.doesNotMatch(response.headers.get('x-robots-tag') || '', /noindex/i, route);
    const entries = parseSitemap(await response.text(), route === '/sitemap.xml' ? 'urlset' : 'sitemapindex');
    const expected = route === '/sitemap.xml' ? publicSiteRoutes.map(r => siteOrigin + r) : [siteOrigin + '/sitemap.xml'];
    assert.deepEqual(entries.map(e => e.url).sort(), expected.sort(), route);
    assert.equal(new Set(entries.map(e => e.url)).size, entries.length, 'Duplicate sitemap entries');
    sitemapChecks[route] = { status: 200, entries: entries.length };
  }
  const robotsResponse = await get('/robots.txt');
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /^Sitemap: https:\/\/evselects\.com\/sitemap_index\.xml$/im);
  assert.match(robots, /^Sitemap: https:\/\/evselects\.com\/sitemap\.xml$/im);
  assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/im);
  let baseline: { fingerprints: Record<string, string> } = { fingerprints: {} };
  try { baseline = JSON.parse(await readFile('scripts/content-link-baseline.json', 'utf8')); }
  catch (error) { if (!args.has('--report-only')) throw error; }
  const blockers = blockingPages(pages, baseline.fingerprints, args.has('--strict'));
  const summary = {
    pages: pages.length, published: publicSiteRoutes.length, pendingNoindex: pendingPublicRoutes.length, supportingNoindex: supportingPublicRoutes.length,
    links: pages.reduce((sum, p) => sum + p.links.length, 0),
    internalLinks: pages.reduce((sum, p) => sum + p.links.filter(l => l.target).length, 0),
    contextualCandidates: pages.reduce((sum, p) => sum + p.links.filter(l => l.scope === 'contextual-candidate').length, 0),
    issueCounts: pages.flatMap(p => p.issues).reduce((counts, issue) => ({ ...counts, [issue.code]: (counts[issue.code] || 0) + 1 }), {} as Record<string, number>),
    blockerRoutes: blockers.map((p: ReturnType<typeof inspectPage>) => p.route),
    baselinePolicy: args.has('--strict') ? 'Strict: every finding blocks publication. No legacy exceptions.' : 'Historical compatibility mode: only unchanged fingerprints may retain documented legacy findings.',
  };
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, JSON.stringify({ base, checkedAt: new Date().toISOString(), scope: 'All public SSR anchors plus contextual candidates; not proof of semantic relevance, external fact checking, browser states or reader review.', summary, sitemapChecks, pages }, null, 2));
  const csvCell = (value: string) => `"${value.replace(/^[=+@-]/, match => `'${match}`).replaceAll('"', '""')}"`;
  const csvRows = [['source', 'anchor', 'destination', 'scope', 'destinationTitle', 'target', 'rel'],
    ...pages.flatMap(page => page.links.filter(link => link.target).map(link => [page.route, link.text || link.label, link.href, link.scope, link.destinationTitle, link.openTarget, link.rel]))];
  await writeFile(output.replace(/\.json$/, '') + '-internal-links.csv', '\uFEFF' + csvRows.map(row => row.map(csvCell).join(',')).join('\n'));
  console.log(JSON.stringify({ ...summary, output, sitemapChecks }, null, 2));
  if (!args.has('--report-only') && blockers.length) throw new Error('Contextual-link gate failed. Inspect the report; do not regenerate the baseline to bypass review.');
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (server && server.exitCode === null) {
    server.kill();
    await Promise.race([once(server, 'exit'), delay(3000)]);
    if (server.exitCode === null) server.kill('SIGKILL');
  }
});
