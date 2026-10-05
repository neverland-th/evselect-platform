import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { createServer } from 'node:net';
import { once } from 'node:events';
import { spawn } from 'node:child_process';

// Check the built HTML, including dynamic routes when BASE_URL is supplied.
const origin = 'https://evselects.com';
const base = '.next/server/app';
let preview = process.env.BASE_URL?.replace(/\/$/, '');
if (process.argv.includes('--build')) {
  const listener = createServer().listen(0, '127.0.0.1');
  await once(listener, 'listening');
  const port = listener.address().port;
  await new Promise(resolve => listener.close(resolve));
  preview = `http://127.0.0.1:${port}`;
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], { stdio: 'ignore' });
  process.once('exit', () => server.kill());
  server.unref();
  let ready = false;
  for (let i = 0; i < 40; i++) {
    assert.equal(server.exitCode, null, 'Preview server must stay running');
    try { if ((await fetch(`${preview}/robots.txt`, { signal: AbortSignal.timeout(1000) })).status === 200) { ready = true; break; } } catch { /* Startup only. */ }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  assert.ok(ready, 'Built preview server is ready');
}
async function readRoute(route, extension = 'html') {
  if (preview) {
    const response = await fetch(preview + route, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, `HTTP status: ${route}`);
    return response.text();
  }
  return readFile(`${base}${route === '/' ? '/index' : route}.${extension}`, 'utf8');
}
const document = async route => parseHTML(await readRoute(route)).document;
const schemas = doc => [...doc.querySelectorAll('script[type="application/ld+json"]')]
  .flatMap(script => { const data = JSON.parse(script.textContent); return data['@graph'] || [data]; });
const date = value => new Date(value).toISOString();

const home = await document('/');
const graph = schemas(home);
const organizations = graph.filter(node => node['@type'] === 'Organization');
const websites = graph.filter(node => node['@type'] === 'WebSite');
assert.equal(organizations.length, 1, 'One homepage organization');
assert.equal(websites.length, 1, 'One homepage website');
const identity = organizations[0];
assert.equal(identity.name, home.querySelector('meta[property="og:site_name"]').content);
assert.equal(identity.url, `${origin}/`);
assert.equal(identity['@id'], `${origin}/#organization`);
assert.equal(websites[0].name, identity.name);
assert.equal(websites[0].publisher['@id'], identity['@id']);
assert.ok(home.querySelector(`a[href="${identity.sameAs[0]}"]`), 'Owned profile is visibly linked');
assert.match(home.querySelector('main').textContent, /ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน/);
assert.ok(!graph.some(node => ['Product', 'Offer', 'Review', 'AggregateRating'].includes(node['@type'])));

const sitemap = await readRoute('/sitemap.xml', 'body');
assert.equal(XMLValidator.validate(sitemap), true, 'Well-formed sitemap XML');
const entries = new XMLParser({ ignoreAttributes: false }).parse(sitemap).urlset.url;
const byUrl = new Map(entries.map(entry => [entry.loc, entry]));
assert.equal(byUrl.size, entries.length, 'No duplicate sitemap URLs');
const articles = (await readdir('src/app/(storefront)/articles', { withFileTypes: true }))
  .filter(entry => entry.isDirectory()).map(entry => `/articles/${entry.name}`);
assert.deepEqual([...byUrl.keys()].filter(url => new URL(url).pathname.startsWith('/articles/')).sort(), articles.map(route => origin + route).sort());

const results = [];
for (const route of ['/', '/articles', ...articles]) {
  const doc = route === '/' ? home : await document(route);
  assert.ok(doc.title.includes(identity.name), `Title identity: ${route}`);
  assert.equal(doc.querySelector('meta[property="og:site_name"]').content, identity.name, `OG identity: ${route}`);
  assert.equal(doc.querySelectorAll('h1').length, 1, `One H1: ${route}`);
  assert.equal(new URL(doc.querySelector('link[rel="canonical"]').href).href, new URL(origin + route).href);
  assert.doesNotMatch(doc.querySelector('meta[name="robots"]')?.content || '', /noindex/i);
  if (!route.startsWith('/articles/')) continue;
  const article = schemas(doc).filter(node => ['Article', 'BlogPosting'].includes(node['@type']));
  assert.equal(article.length, 1, `One article entity: ${route}`);
  const data = article[0];
  for (const role of ['author', 'publisher']) {
    assert.ok(data[role], `${role} exists: ${route}`);
    assert.equal(data[role].name, identity.name, `${role} identity: ${route}`);
    assert.equal(data[role]['@id'], identity['@id'], `${role} identifier: ${route}`);
    assert.equal(data[role].url, identity.url, `${role} URL: ${route}`);
  }
  assert.ok([...doc.querySelectorAll('main p, main span')].some(p => /เรียบเรียง|ผู้เขียน|ผู้จัดทำ/.test(p.textContent)
    && [...p.querySelectorAll('a')].some(a => a.textContent === identity.name && a.getAttribute('href') === '/')), `HTML contains a linked editorial byline: ${route}`);
  assert.ok(byUrl.get(origin + route).lastmod, `Maintained lastmod: ${route}`);
  assert.equal(date(byUrl.get(origin + route).lastmod), date(data.dateModified), `Sitemap matches article dateModified: ${route}`);
  results.push({ route, author: data.author.name, dateModified: data.dateModified, lastmod: byUrl.get(origin + route).lastmod });
}
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), environment: preview || 'local static build', brand: identity.name, articleCount: articles.length, sitemapCount: entries.length, results }, null, 2));
