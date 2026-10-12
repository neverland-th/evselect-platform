import assert from 'node:assert/strict';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { parseSitemap } from './lib/content-links.mjs';

const base = process.env.BASE_URL;
assert.ok(base, 'Set BASE_URL to the actual built or deployed site');
const urls = parseSitemap(await (await fetch(new URL('/sitemap.xml', base))).text(), 'urlset');

test('Every published page has concise metadata and one consistent site name', async () => {
  for (const entry of urls) {
    const route = new URL(entry.url).pathname;
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200, route);
    const { document } = parseHTML(await response.text());
    assert.doesNotMatch(document.title, /\bEVSELECT\b/, route);
    assert.match(document.title, /EVSELECTS/, route);
    // These are editorial display budgets, not Google ranking requirements.
    assert.ok(document.title.length <= 65, `${route}: title ${document.title.length}`);
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    assert.ok(description && description.length <= 160, `${route}: description ${description?.length}`);
    assert.doesNotMatch(description, /\bEVSELECT\b/, route);
    if (!route.endsWith('.html')) {
      assert.equal(document.querySelector('meta[property="og:site_name"]')?.getAttribute('content'), 'EVSELECTS', route);
      assert.equal(document.querySelector('meta[property="og:title"]')?.getAttribute('content'), document.title, route);
      const nodes = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => {
        const json = JSON.parse(s.textContent); return json['@graph'] || [json];
      });
      const identity = nodes.find(n => n['@type'] === 'Organization' && n['@id'] === 'https://evselects.com/#organization');
      assert.equal(identity?.name, 'EVSELECTS', route);
    }
  }
});

test('Home accessory CTA delivers actual interior selection advice, not just vehicle photographs', async () => {
  const { document } = parseHTML(await (await fetch(base)).text());
  const guide = document.getElementById('tesla-interior-guide');
  assert.ok(guide);
  assert.equal(guide.querySelectorAll('ul > li').length, 3);
  for (const topic of ['พรมปูพื้น', 'ถาดคอนโซล', 'ที่เก็บของ', 'พวงมาลัยขวา', 'ไม่ใช่สินค้าที่เราเปิดขาย']) assert.ok(guide.textContent.includes(topic));
  const cta = document.querySelector('#ev-upgrade-map a[href="#tesla-interior-guide"]');
  assert.equal(cta?.textContent.trim(), 'ดูวิธีเลือกของแต่งภายใน Tesla');
  for (const a of guide.querySelectorAll('a[href^="https:"]')) {
    assert.equal(new URL(a.href).hostname, 'shop.tesla.com');
    assert.equal(a.getAttribute('target'), '_blank');
    assert.equal(a.getAttribute('rel'), 'noopener noreferrer');
  }
  assert.equal(document.querySelectorAll('#tesla-accessories article').length, 2, 'Preserve the existing photo card layout');
  assert.equal(document.querySelectorAll('link[rel="stylesheet"]').length, 0, 'Built Home receives styles inline');
  assert.ok(document.querySelector('img[alt="EVSELECTS"]')?.getAttribute('src').includes('logo-evselects'));
});
