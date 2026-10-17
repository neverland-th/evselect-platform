import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { parseSitemap } from './lib/content-links.mjs';

// Run against the built server and again after deployment:
// BASE_URL=http://127.0.0.1:4367 node --test scripts/test-llms.mjs
const base = process.env.BASE_URL;
assert.ok(base, 'Set BASE_URL to the built or live origin');
const canonicalOrigin = 'https://evselects.com';
const expected = await readFile(new URL('../public/llms.txt', import.meta.url), 'utf8');

async function get(path, method = 'GET') {
  const response = await fetch(new URL(path, base), {
    method, redirect: 'manual', signal: AbortSignal.timeout(20000),
  });
  assert.equal(response.status, 200, `${method} ${path} returns HTTP 200 without redirects`);
  return response;
}

const fileResponse = await get('/llms.txt');
const content = await fileResponse.text();
const entries = [...content.matchAll(/^- \[([^\]\n]+)\]\((https:\/\/[^)\s]+)\): (.+)$/gm)];

test('llms.txt serves the reviewed UTF-8 Markdown index, not an HTML fallback', async () => {
  assert.match(fileResponse.headers.get('content-type') || '', /^text\/plain;\s*charset=utf-8$/i);
  assert.equal(content, expected, 'The reviewed file is actually served by this deployment');
  assert.equal((content.match(/^# /gm) || []).length, 1);
  assert.match(content, /^# EVSELECTS\r?\n\r?\n> /);
  assert.match(content, /^## Optional$/m);
  assert.ok(entries.length >= 15 && entries.length <= 25, 'Keep the index curated');
  assert.ok(Buffer.byteLength(content, 'utf8') < 16000, 'Do not bundle entire articles');
  assert.doesNotMatch(content, /<html|<script|\uFFFD|localhost|vercel\.app|\/api\/|\.env|C:\\/i);
  const head = await get('/llms.txt', 'HEAD');
  assert.equal(head.headers.get('content-type'), fileResponse.headers.get('content-type'));
});

test('Every curated link is a unique canonical public URL with a descriptive Thai anchor', async () => {
  const sitemap = parseSitemap(await (await get('/sitemap.xml')).text(), 'urlset');
  const published = new Set(sitemap.map(entry => entry.url));
  const seen = new Set();
  // Small batches avoid creating an unnecessary burst against production.
  for (let offset = 0; offset < entries.length; offset += 4) {
    await Promise.all(entries.slice(offset, offset + 4).map(async ([, label, href, description]) => {
      const url = new URL(href);
      assert.equal(url.origin, canonicalOrigin);
      assert.equal(url.search + url.hash, '');
      assert.ok(!seen.has(href), `No duplicate ${href}`);
      seen.add(href);
      assert.ok(label.length >= 6 && description.length > 20, `Useful link description for ${href}`);
      assert.doesNotMatch(label, /^(คลิกที่นี่|อ่านต่อ)$/);
      assert.ok(published.has(href) || url.pathname === '/sitemap_index.xml', `Published destination ${href}`);
      const response = await get(url.pathname);
      assert.doesNotMatch(response.headers.get('x-robots-tag') || '', /\b(noindex|none)\b/i);
      if (url.pathname.endsWith('.xml')) return;
      assert.match(response.headers.get('content-type') || '', /text\/html/i);
      const { document } = parseHTML(await response.text());
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      assert.ok(canonical, `Canonical is present for ${href}`);
      assert.equal(new URL(canonical).href, url.href);
      assert.doesNotMatch(document.querySelector('meta[name="robots"]')?.getAttribute('content') || '', /\b(noindex|none)\b/i);
      assert.ok(document.querySelector('main')?.textContent.trim().length > 150);
    }));
  }
});

test('Home and article entry points expose discovery without changing security headers', async () => {
  for (const path of ['/', '/articles', '/articles/ev-damper-tuning-bump-rebound-guide']) {
    const response = await get(path);
    assert.match(response.headers.get('link') || '', /<\/llms\.txt>;\s*rel="describedby"/);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    assert.match(response.headers.get('content-security-policy') || '', /upgrade-insecure-requests/);
  }
});

test('The summary preserves current pre-launch status and does not replace crawl controls', async () => {
  const home = await (await get('/')).text();
  assert.match(home, /ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน/);
  assert.match(content, /ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน/);
  assert.match(content, /ไม่ใช่ทุกบทความเป็นผลทดสอบของทีมงาน/);
  const robots = await (await get('/robots.txt')).text();
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Disallow: \/api\/$/m);
  assert.doesNotMatch(robots, /^Disallow: \/llms\.txt$/m);
  const sitemap = await (await get('/sitemap.xml')).text();
  assert.ok(!sitemap.includes('/llms.txt'), 'The human-page sitemap stays focused on canonical pages');
});
