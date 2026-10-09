import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import { inspectPage, parseSitemap } from './lib/content-links.mjs';
import { publicSiteRoutes, siteOrigin } from '../src/lib/public-site-routes';

const base = (process.env.BASE_URL || '').replace(/\/$/, '');
assert.ok(base, 'Set BASE_URL to the deployment under review');
const preview = new URL(base).hostname.endsWith('.vercel.app');
const filters = [
  '/articles?category=all&segment=city', '/articles?category=all&segment=hatchback',
  '/articles?category=all&segment=sedan', '/articles?category=all&segment=suv',
  '/articles?category=guides', '/articles?category=reviews', '/articles?category=suspension',
];
const downloads = ['/downloads/evselect-brake-shop-checklist.txt', '/downloads/evselect-coilover-shop-checklist.txt'];
const routes = [...publicSiteRoutes, ...filters, ...downloads];
const responses = new Map<string, { status: number; type: string; robotsHeader: string; text: string }>();
for (let offset = 0; offset < routes.length; offset += 6) {
  await Promise.all(routes.slice(offset, offset + 6).map(async route => {
    const response = await fetch(base + route, { signal: AbortSignal.timeout(30000), redirect: 'manual' });
    responses.set(route, {
      status: response.status, type: response.headers.get('content-type') || '',
      robotsHeader: response.headers.get('x-robots-tag') || '', text: await response.text(),
    });
  }));
}
const pages = [...publicSiteRoutes, ...filters].map(route => {
  const response = responses.get(route)!;
  assert.equal(response.status, 200, route);
  assert.match(response.type, /text\/html/, route);
  if (!preview) assert.doesNotMatch(response.robotsHeader, /noindex/i, route);
  const { document } = parseHTML(response.text);
  const page = inspectPage(response.text, route.split('?')[0]);
  assert.deepEqual(page.issues, [], `Content/link/heading policy: ${route}`);
  assert.equal(document.querySelectorAll('h1').length, 1, route);
  assert.ok(document.querySelector('meta[name="description"]')?.getAttribute('content'), `Description: ${route}`);
  assert.equal(new URL(page.canonical).href, new URL(siteOrigin + route.split('?')[0]).href, `Canonical: ${route}`);
  assert.doesNotMatch(page.robots, /noindex/i, route);
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map(node => JSON.parse(node.textContent!));
  if (!route.startsWith('/downloads/')) assert.ok(schemas.length, `JSON-LD: ${route}`);
  return { ...page, status: response.status, robotsHeader: response.robotsHeader, schemaBlocks: schemas.length };
});
const byRoute = new Map(pages.map(page => [page.route, page]));
const extraTargets = [...new Set(pages.flatMap(page => page.links.flatMap(link => {
  if (!link.target) return [];
  const target = link.target.path + link.target.query;
  return responses.has(target) || responses.has(link.target.path) ? [] : [target];
})))];
for (let offset = 0; offset < extraTargets.length; offset += 6) {
  await Promise.all(extraTargets.slice(offset, offset + 6).map(async route => {
    const response = await fetch(base + route, { signal: AbortSignal.timeout(30000), redirect: 'manual' });
    responses.set(route, { status: response.status, type: response.headers.get('content-type') || '', robotsHeader: '', text: '' });
    await response.body?.cancel();
  }));
}
for (const page of pages) {
  for (const link of page.links) {
    if (!link.target) continue;
    const target = link.target.path + link.target.query;
    const destination = byRoute.get(link.target.path);
    const response = responses.get(target) || responses.get(link.target.path);
    assert.ok(response, `Unverified internal destination: ${page.route} -> ${link.href}`);
    assert.equal(response.status, 200, `Internal link: ${page.route} -> ${link.href}`);
    if (link.target.hash && destination) assert.ok(destination.ids.includes(link.target.hash), `Fragment: ${page.route} -> ${link.href}`);
  }
}
for (const route of downloads) {
  const response = responses.get(route)!;
  assert.equal(response.status, 200, route);
  assert.ok(response.text.length > 100, `Download body: ${route}`);
}
const sitemapResponse = await fetch(base + '/sitemap.xml', { signal: AbortSignal.timeout(30000) });
assert.equal(sitemapResponse.status, 200);
const sitemap = parseSitemap(await sitemapResponse.text(), 'urlset');
assert.deepEqual(sitemap.map(entry => entry.url).sort(), publicSiteRoutes.map(route => new URL(siteOrigin + route).href).sort());
const robotsResponse = await fetch(base + '/robots.txt', { signal: AbortSignal.timeout(30000) });
assert.equal(robotsResponse.status, 200);
assert.match(await robotsResponse.text(), /^Sitemap: https:\/\/evselects\.com\/sitemap\.xml$/im);
const output = process.env.AUDIT_OUTPUT || 'scratch/release-http.json';
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify({
  base, checkedAt: new Date().toISOString(), preview, checkedURLs: routes.length,
  sitemapURLs: sitemap.length, pages: pages.map(page => ({
    route: page.route, title: page.title, canonical: page.canonical, robots: page.robots,
    status: page.status, robotsHeader: page.robotsHeader, schemaBlocks: page.schemaBlocks,
    headings: page.headings, issues: page.issues,
    internalLinksVerified: page.links.filter(link => link.target).length,
    imageCount: page.images.length,
  })), extraTargets: extraTargets.map(route => ({route, status: responses.get(route)!.status})),
  downloads: downloads.map(route => ({ route, status: responses.get(route)!.status })),
  note: 'HTTP, metadata, parseable JSON-LD and internal-link checks; not a rendered reader review or indexing result.',
}, null, 2));
console.log(JSON.stringify({ base, checkedURLs: routes.length, extraTargets: extraTargets.length, sitemapURLs: sitemap.length, output, passed: true }));
