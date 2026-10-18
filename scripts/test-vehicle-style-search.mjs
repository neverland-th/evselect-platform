import assert from 'node:assert/strict';
import test from 'node:test';
import { parseHTML } from 'linkedom';

const base = process.env.BASE_URL;
assert.ok(base, 'Set BASE_URL to the built server or deployed origin');
const pages = new Map();
for (const path of ['/', '/vehicle-style', '/vehicle-style/studio']) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const { document } = parseHTML(html);
  const main = document.querySelector('main').cloneNode(true);
  main.querySelectorAll('script,style').forEach(node => node.remove());
  pages.set(path, { document, main });
}
const appId = 'https://evselects.com/vehicle-style#app';

test('Home describes the real application in visible server HTML without executing JavaScript', () => {
  const { document, main } = pages.get('/');
  const summary = main.querySelector('[data-vehicle-style-summary]');
  assert.ok(summary, 'Do not depend on the lazy editor or React payload for app information');
  assert.match(summary.querySelector('h2')?.textContent, /EVSELECTS Vehicle Style.*แอปลองแต่งรถด้วย AI/);
  for (const phrase of ['อัปโหลดรูปรถ', 'สีรถ', 'สีล้อ', 'ดีไซน์ล้อ', 'ก่อน–หลัง', 'ทดลองใช้ฟรี', 'ไม่ต้องกรอก API key หรือรหัสสตูดิโอ', '1 ครั้งต่อเครือข่ายต่อวัน', 'โควตารวม 5 ครั้งต่อวัน', 'Concept preview', '15 MB']) {
    assert.ok(summary.textContent.includes(phrase), phrase);
  }
  for (const element of [summary, ...summary.querySelectorAll('*')]) {
    assert.equal(element.hasAttribute('hidden'), false);
    assert.equal(element.getAttribute('aria-hidden'), null);
    assert.doesNotMatch(element.className, /(?:^|\s)(?:sr-only|hidden)(?:\s|$)/);
  }
  assert.equal(main.querySelector('#vehicle-style').getAttribute('aria-labelledby'), summary.querySelector('h2').id);
  assert.equal(summary.querySelector('a[href="/"]').getAttribute('target'), null);
  assert.ok(summary.querySelector('a[href="/vehicle-style"]'));
  assert.ok(summary.querySelector('a[href="/privacy"]'));
  assert.equal(document.querySelectorAll('h1').length, 1);
});

test('Hero makes the free trial clear while retaining the accessory path, layout and supplied photo', () => {
  const { document } = pages.get('/');
  const hero = document.querySelector('[data-home-hero]');
  assert.match(hero.querySelector('h1').textContent, /แต่งรถ EV.*เห็นภาพก่อนแต่งจริง/s);
  const primary = hero.querySelector('a[href="#vehicle-style"]');
  assert.equal(primary?.textContent.trim(), 'ลองแต่งรถฟรี');
  assert.equal(primary.getAttribute('target'), null);
  assert.equal(hero.querySelector('a[href="#ev-accessories"]')?.textContent.trim(), 'ดูไอเดียของแต่ง');
  assert.match(hero.textContent, /1 ครั้งต่อเครือข่ายต่อวัน.*โควตารวม 5 ครั้งต่อวัน/);
  assert.match(hero.textContent, /ภาพแนวคิดจาก AI ไม่ยืนยันการติดตั้งจริง/);
  assert.ok(hero.querySelector('img')?.getAttribute('src').includes('tesla-model-3-performance-2024'));
  assert.ok(hero.querySelector('a[href="/articles/tesla-model-3-highland-review"] img'));
  assert.ok(hero.nextElementSibling.id === 'vehicle-style', 'The app stays after the existing hero');
  const description = document.querySelector('meta[name="description"]').getAttribute('content');
  for (const topic of ['แต่งรถ EV', 'AI', 'ของแต่ง Tesla', 'ของแต่งรถไฟฟ้า', 'โควตา']) assert.ok(description.includes(topic));
});

test('Both public pages describe one consistently identified WebApplication, without made-up reviews', () => {
  const applications = [];
  for (const path of ['/', '/vehicle-style']) {
    const { document, main } = pages.get(path);
    const scripts = document.querySelectorAll('script[data-vehicle-style-schema]');
    assert.equal(scripts.length, 1, path);
    const graph = JSON.parse(scripts[0].textContent);
    assert.equal(graph['@context'], 'https://schema.org');
    const app = graph['@graph'].find(node => node['@type'] === 'WebApplication');
    assert.equal(app['@id'], appId);
    assert.equal(app.name, 'EVSELECTS Vehicle Style');
    assert.equal(app.url, 'https://evselects.com/vehicle-style');
    assert.equal(app.publisher['@id'], 'https://evselects.com/#organization');
    assert.equal(app.applicationCategory, 'DesignApplication');
    assert.equal(app.inLanguage, 'th-TH');
    assert.equal(app.isAccessibleForFree, true);
    assert.equal(app.offers.price, 0);
    assert.equal(app.offers.priceCurrency, 'THB');
    assert.match(app.offers.description, /1 ครั้งต่อเครือข่ายต่อวัน.*โควตารวม 5 ครั้งต่อวัน/);
    assert.match(app.description, /Concept preview.*ไม่ยืนยัน/);
    assert.ok(app.featureList.length >= 4);
    assert.equal(app.aggregateRating, undefined);
    assert.equal(app.review, undefined);
    assert.equal(app.screenshot, undefined, 'Do not call a car demonstration photo an app screenshot');
    assert.ok(main.textContent.includes('ทดลองใช้ฟรี'), 'Free-trial terms are visible, not schema-only');
    const page = graph['@graph'].find(node => node['@type'] === 'WebPage');
    assert.equal((path === '/' ? page.mentions : page.mainEntity)['@id'], appId);
    applications.push(app);
  }
  assert.deepEqual(applications[0], applications[1]);
});

test('Public guide agrees with original-upload limits, app capabilities and daily trial terms', () => {
  const { document, main } = pages.get('/vehicle-style');
  assert.match(document.title, /แอปลองแต่งรถด้วย AI.*ทดลองใช้ฟรี/);
  assert.match(main.textContent, /JPG, PNG และ WebP สูงสุด 15 MB ระบบย่อภาพก่อนส่งให้ AI/);
  assert.doesNotMatch(main.textContent, /10 MB|ฟรีไม่จำกัด|ต้องขอรหัสสตูดิโอจากทีมงาน/);
  for (const phrase of ['1 ครั้งต่อเครือข่ายต่อวัน', 'โควตารวม 5 ครั้งต่อวัน', 'รีเซ็ตตามวันในประเทศไทย']) assert.ok(main.textContent.includes(phrase));
  const app = JSON.parse(document.querySelector('script[data-vehicle-style-schema]').textContent)['@graph'].find(node => node['@type'] === 'WebApplication');
  for (const feature of app.featureList) assert.ok(main.textContent.includes(feature));
  assert.equal(main.querySelector('a[href="/vehicle-style/studio"]').getAttribute('target'), null);
  assert.ok(main.querySelector('a[href="/#vehicle-style"]'));
});

test('Public pages stay indexable while the duplicate interactive studio retains noindex', async () => {
  for (const path of ['/', '/vehicle-style']) {
    const { document } = pages.get(path);
    assert.doesNotMatch(document.querySelector('meta[name="robots"]')?.getAttribute('content') || '', /noindex|nosnippet/);
    assert.equal(new URL(document.querySelector('link[rel="canonical"]').getAttribute('href')).href, new URL(path, 'https://evselects.com').href);
  }
  const studio = pages.get('/vehicle-style/studio').document;
  assert.match(studio.querySelector('meta[name="robots"]').getAttribute('content'), /noindex/);
  const sitemap = await (await fetch(new URL('/sitemap.xml', base))).text();
  assert.ok(sitemap.includes('<loc>https://evselects.com/vehicle-style</loc>'));
  assert.ok(!sitemap.includes('<loc>https://evselects.com/vehicle-style/studio</loc>'));
});
