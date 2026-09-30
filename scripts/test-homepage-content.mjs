import assert from 'node:assert/strict';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { inspectPage } from './lib/content-links.mjs';

// Run against the actual built server or live site, not a JSX/source-text fixture.
// BASE_URL=http://127.0.0.1:4339 node --test scripts/test-homepage-content.mjs
const base = process.env.BASE_URL;
assert.ok(base, 'Set BASE_URL to the reviewed local server or production origin');
const response = await fetch(new URL('/', base), { signal: AbortSignal.timeout(20000) });
assert.equal(response.status, 200, 'Home must return HTTP 200');
const html = await response.text();
const { document } = parseHTML(html);
const visibleMain = document.querySelector('main').cloneNode(true);
for (const script of visibleMain.querySelectorAll('script')) script.remove();

test('Home has specific Thai metadata and exactly one matching H1', () => {
  assert.equal(document.title, 'แต่งรถ EV และของแต่งรถไฟฟ้า | EVSELECTS');
  assert.equal(new URL(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).href, 'https://evselects.com/');
  assert.match(document.querySelector('meta[name="description"]')?.getAttribute('content') || '', /ของแต่งรถไฟฟ้า/);
  assert.equal(document.querySelector('meta[property="og:title"]')?.getAttribute('content'), document.title);
  assert.equal(document.querySelectorAll('h1').length, 1);
  assert.match(document.querySelector('h1').textContent, /แต่งรถ EV/);
  assert.doesNotMatch(document.querySelector('meta[name="robots"]')?.getAttribute('content') || '', /noindex/i);
});

test('Useful Home content and all six accessible FAQs are in server HTML', () => {
  assert.equal(document.querySelectorAll('#before-you-buy ol > li').length, 4);
  const faqs = [...document.querySelectorAll('#home-faq details')];
  assert.equal(faqs.length, 6);
  for (const faq of faqs) {
    assert.ok(faq.querySelector('summary h3'), 'Native summary has a descriptive heading');
    assert.ok(faq.querySelector('p')?.textContent.trim().length > 70, 'Answer is present without client JS');
  }
  assert.match(document.querySelector('main').textContent, /ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน/);
  assert.doesNotMatch(visibleMain.textContent, /คอยล์โอเวอร์/);
  assert.ok(document.querySelector('a[href="/articles/ev-battery-care"] img')?.getAttribute('src')?.includes('ev-chassis-volkswagen-id3'));
});

test('Three keyword topics have relevant server-rendered content and real accessory examples', () => {
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  for (const keyword of ['แต่งรถ EV', 'ของแต่ง Tesla', 'ของแต่งรถไฟฟ้า']) {
    assert.ok(description.includes(keyword), `Description accurately covers ${keyword}`);
    assert.ok(visibleMain.textContent.includes(keyword), `Readable main content covers ${keyword}`);
  }
  const upgrades = document.querySelector('#ev-accessories');
  assert.match(upgrades?.querySelector('h2').textContent || '', /ของแต่งรถไฟฟ้า/);
  assert.equal(upgrades.querySelectorAll('img').length, 5, 'Keep the two existing guide photos plus three editorial photos');
  assert.ok(upgrades.querySelector('a[href="/articles/ev-damper-tuning-bump-rebound-guide"]'));
  assert.ok(upgrades.querySelector('a[href="/articles/ev-tyre-and-coilover-selection-guide"]'));

  const tesla = document.querySelector('#tesla-accessories');
  assert.match(tesla?.querySelector('h2').textContent || '', /ของแต่ง Tesla/);
  assert.equal(tesla.querySelectorAll('article').length, 2);
  assert.match(tesla.textContent, /ไม่ใช่รายการสินค้าของเรา/);
  const images = JSON.parse(document.querySelector('script[data-image-metadata]').textContent)['@graph'];
  for (const [asset, source] of [
    ['/images/accessories/tesla-model-3-center-console-trays.jpg', 'https://shop.tesla.com/th_th/product/upgraded-center-console-trays'],
    ['/images/accessories/tesla-model-3-all-weather-liners.jpg', 'https://shop.tesla.com/th_th/product/upgraded-model-3--all-weather-liner-'],
  ]) {
    const image = [...tesla.querySelectorAll('img')].find(img => {
      const src = img.getAttribute('src') || '';
      return src.includes(asset) || src.includes(encodeURIComponent(asset));
    });
    assert.ok(image, `Render real product photo ${asset}`);
    assert.match(image.getAttribute('alt'), /Model 3 รุ่นอัปเกรด/);
    const link = tesla.querySelector(`a[href="${source}"]`);
    assert.equal(link?.getAttribute('target'), '_blank');
    assert.equal(link?.getAttribute('rel'), 'noopener noreferrer');
    const credit = images.find(item => item.contentUrl.endsWith(asset));
    assert.equal(credit?.creditText, 'Tesla Shop');
    assert.equal(credit?.isBasedOn, source);
    assert.equal(credit?.license, undefined, 'Do not invent a reusable image licence');
  }
  assert.doesNotMatch(tesla.textContent, /[0-9][0-9,.]*\s*บาท|สินค้าพร้อมส่ง/);
});

test('Tyre price guidance gives an actionable comparison without pretending to sell', () => {
  const section = document.querySelector('#compare-ev-tyre-prices');
  assert.ok(section?.querySelector('h2'));
  assert.equal(section.querySelectorAll('ol > li').length, 3);
  for (const phrase of ['พิกัดรับน้ำหนัก', 'พิกัดความเร็ว', 'ภาษี', 'ถ่วงล้อ', 'รับประกัน', 'ใบเสนอราคา', 'ไม่ใช่ใบเสนอขาย']) {
    assert.ok(section.textContent.includes(phrase), `Cover ${phrase}`);
  }
  assert.ok(section.querySelector('a[href="/articles/ev-tyre-and-coilover-selection-guide"]'));
  assert.ok(section.querySelector('a[href="/articles/ev-camber-adjustment-wheel-alignment-guide"]'));
  assert.ok(section.querySelector('figure img[width="1920"][height="1920"]'));
  assert.equal(section.querySelector('figcaption'), null, 'No visible image caption');
  const images = JSON.parse(document.querySelector('script[data-image-metadata]').textContent)['@graph'];
  const photo = images.find(image => image.contentUrl.endsWith('/ev-tyre-michelin-audi.jpg'));
  assert.equal(photo.creator.name, 'TaurusEmerald');
  assert.equal(photo.license, 'https://creativecommons.org/licenses/by-sa/4.0/');
  assert.ok(document.querySelector('footer a[href="/image-credits"]'), 'Accessible credits without under-image text');
  assert.doesNotMatch(section.textContent, /[0-9][0-9,.]*\s*บาท/);
});

test('EV upgrade guide replaces the cartoon with credited photos and keeps readable HTML and three paths', async () => {
  const map = document.querySelector('#ev-accessories #ev-upgrade-map');
  assert.ok(map, 'Infographic is inside the existing accessories section');
  assert.equal(map.getAttribute('aria-labelledby'), 'ev-upgrade-map-heading');
  assert.equal(map.querySelector('h3').textContent, 'เริ่มจากสิ่งที่ใช้จริง');
  assert.equal(map.querySelectorAll('h4').length, 3);
  assert.equal(map.querySelectorAll('ol').length, 2);
  assert.match(map.textContent, /ไม่ใช่การยืนยันว่าอุปกรณ์ในภาพใช้ได้กับรถทุกคัน/);
  assert.equal(map.querySelectorAll('img').length, 3);
  assert.doesNotMatch(map.outerHTML, /ev-upgrade-car\.svg|bg-slate-900/, 'Do not retain the cartoon or oversized navy panel');
  const links = [...map.querySelectorAll('ol a')];
  assert.deepEqual(links.map(link => link.getAttribute('href')), [
    '#tesla-accessories',
    '/articles/ev-tyre-and-coilover-selection-guide',
    '/articles/ev-damper-tuning-bump-rebound-guide#symptoms',
  ]);
  for (const link of links) assert.equal(link.getAttribute('target'), null, 'Internal links stay in this tab');
  const metadata = JSON.parse(document.querySelector('script[data-image-metadata]').textContent)['@graph'];
  for (const [index, asset, credit, source] of [
    [0, '/images/accessories/tesla-model-3-center-console-trays.jpg', 'Tesla Shop', 'https://shop.tesla.com/th_th/product/upgraded-center-console-trays'],
    [1, '/images/articles/ev-tyre-michelin-audi.jpg', 'TaurusEmerald', 'https://commons.wikimedia.org/wiki/File:Audi_Wheel_with_Michelin_Pilot_Sport_All_Season_4_Tire.jpg'],
    [2, '/images/articles/damper-guide/tein-flex-z.webp', 'TEIN', 'https://www.tein.com/products/flex_z.html'],
  ]) {
    const photo = map.querySelectorAll('img')[index];
    const src = photo.getAttribute('src') || '';
    const importedName = asset.split('/').at(-1).replace(/\.[^.]+$/, '');
    assert.ok(src.includes(asset) || src.includes(encodeURIComponent(asset)) || src.includes(`%2F${importedName}.`), `Render the actual ${credit} photo`);
    assert.ok(photo.getAttribute('alt')?.length > 20, 'Photo has descriptive, factual alt text');
    assert.ok(photo.getAttribute('sizes'), 'Serve responsive image sizes instead of the full original');
    const image = metadata.find(item => item['@id'] === `https://evselects.com${asset}#image`);
    assert.equal(image?.creditText, credit);
    assert.equal(image?.isBasedOn, source);
    const assetResponse = await fetch(new URL(src, base), { signal: AbortSignal.timeout(20000) });
    assert.equal(assetResponse.status, 200);
    assert.match(assetResponse.headers.get('content-type') || '', /^image\//);
  }
  assert.equal(map.querySelector('figcaption'), null, 'Credits are available separately, not under each photo');
});

test('Home retains existing anchors, adds contextual links and obeys tab policy', () => {
  const page = inspectPage(html, '/');
  assert.deepEqual(page.issues, []);
  const destinations = new Set(page.links.filter(link => link.scope === 'contextual-candidate').map(link => link.target.path));
  assert.ok(destinations.size >= 4, 'Contextual body links support at least four relevant guides');
  for (const id of ['vehicle-finder', 'coming-soon', 'launch', 'choose-your-path', 'fitment-assurance', 'ev-upgrade-guides', 'compare-ev-tyre-prices', 'before-you-buy', 'home-faq', 'ev-accessories', 'tesla-accessories']) {
    assert.ok(document.getElementById(id), `Preserve destination #${id}`);
  }
  for (const link of page.links.filter(link => link.target?.path === '/' && link.target.hash)) {
    assert.ok(document.getElementById(link.target.hash), `Resolve ${link.href}`);
  }
  const source = document.querySelector('a[href="https://www.michelin.co.th/auto/advice/ev-guide/tyres-for-electric-cars"]');
  assert.equal(source?.getAttribute('target'), '_blank');
  assert.equal(source?.getAttribute('rel'), 'noopener noreferrer');
});
