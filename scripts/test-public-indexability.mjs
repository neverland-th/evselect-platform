import assert from 'node:assert/strict';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { parseSitemap } from './lib/content-links.mjs';

// Test actual built/candidate/live responses, never a source-text fixture.
const base = process.env.BASE_URL;
assert.ok(base, 'Set BASE_URL to the reviewed built server, candidate or live origin');
const origin = 'https://evselects.com';
const published = [
  '/contact',
  '/downloads/evselect-damper-setup-log.html',
  '/editorial-policy',
  '/privacy',
];
const pending = ['/about', '/terms', '/warranty'];
const blockedDirective = /(?:^|[\s,:])(?:noindex|none)(?:[\s,;]|$)/i;

async function get(path) {
  const response = await fetch(new URL(path, base), {
    redirect: 'manual', signal: AbortSignal.timeout(20000),
  });
  assert.equal(response.status, 200, `HTTP 200 for ${path}`);
  return response;
}

async function page(path) {
  const response = await get(path);
  assert.match(response.headers.get('content-type') || '', /text\/html/i);
  const { document } = parseHTML(await response.text());
  return { response, document };
}

for (const path of published) {
  test(`Public page is indexable and self-canonical: ${path}`, async () => {
    const { response, document } = await page(path);
    assert.doesNotMatch(response.headers.get('x-robots-tag') || '', blockedDirective);
    const directives = [...document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[name="bingbot"]')];
    assert.ok(directives.length, 'Explicit robots metadata is present');
    for (const meta of directives) assert.doesNotMatch(meta.getAttribute('content') || '', blockedDirective);
    assert.match(document.querySelector('meta[name="robots"]').getAttribute('content'), /\bindex\b/i);
    assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), origin + path);
    assert.equal(document.querySelectorAll('h1').length, 1);
    assert.ok(document.querySelector('h1').textContent.trim());
    assert.ok(document.querySelector('main').textContent.trim().length > 250, 'Public content is present without client JavaScript');
  });
}

test('Sitemap includes the four published pages but excludes unfinished/private pages', async () => {
  const response = await get('/sitemap.xml');
  assert.match(response.headers.get('content-type') || '', /xml/i);
  const urls = parseSitemap(await response.text(), 'urlset').map(entry => entry.url);
  assert.equal(new Set(urls).size, urls.length, 'No duplicate canonical URLs');
  for (const path of published) assert.ok(urls.includes(origin + path), `Discover ${path}`);
  for (const path of [...pending, '/products', '/export']) assert.ok(!urls.includes(origin + path), `Exclude ${path}`);
  for (const path of ['/sitemap_index.xml', '/sitemap_indexl.xml']) {
    const index = parseSitemap(await (await get(path)).text(), 'sitemapindex');
    assert.deepEqual(index.map(entry => entry.url), [origin + '/sitemap.xml']);
  }
});

test('Robots allows the reported public paths and retains private-route exclusions', async () => {
  const robots = await (await get('/robots.txt')).text();
  assert.match(robots, /^Allow: \/$/im);
  const exclusions = [...robots.matchAll(/^Disallow:\s*(\S+)/gim)].map(match => match[1]);
  assert.ok(!exclusions.includes('/'));
  for (const path of published) assert.ok(!exclusions.some(rule => path.startsWith(rule)), `Crawling allowed for ${path}`);
  for (const path of ['/api/', '/products', '/product/', '/export']) assert.ok(exclusions.includes(path));
  assert.match(robots, /^Sitemap: https:\/\/evselects\.com\/sitemap_index\.xml$/im);
});

test('Unfinished pages retain noindex rather than being opened globally', async () => {
  for (const path of pending) {
    const { document } = await page(path);
    assert.match(document.querySelector('meta[name="robots"]')?.getAttribute('content') || '', /\bnoindex\b/i, path);
  }
});

test('Public setup worksheet still does not submit or persist entered data', async () => {
  const { document } = await page('/downloads/evselect-damper-setup-log.html');
  assert.equal(document.querySelectorAll('script, form').length, 0);
  assert.ok(document.querySelectorAll('input, textarea').length > 20);
  assert.match(document.querySelector('main').textContent, /ไม่บันทึกอัตโนมัติ/);
  assert.ok(document.querySelector('a[href="/articles/ev-damper-tuning-bump-rebound-guide#toolkit"]'));
});
