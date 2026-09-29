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

test('Home has specific Thai metadata and exactly one matching H1', () => {
  assert.equal(document.title, 'EVSELECTS | ของแต่งรถไฟฟ้า รีวิวรถ EV และคู่มือแต่งรถ');
  assert.equal(new URL(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).href, 'https://evselects.com/');
  assert.match(document.querySelector('meta[name="description"]')?.getAttribute('content') || '', /ของแต่งรถไฟฟ้า/);
  assert.equal(document.querySelector('meta[property="og:title"]')?.getAttribute('content'), document.title);
  assert.equal(document.querySelectorAll('h1').length, 1);
  assert.match(document.querySelector('h1').textContent, /ของแต่งรถไฟฟ้า/);
  assert.doesNotMatch(document.querySelector('meta[name="robots"]')?.getAttribute('content') || '', /noindex/i);
});

test('Useful Home content and all five accessible FAQs are in server HTML', () => {
  assert.equal(document.querySelectorAll('#before-you-buy ol > li').length, 4);
  const faqs = [...document.querySelectorAll('#home-faq details')];
  assert.equal(faqs.length, 5);
  for (const faq of faqs) {
    assert.ok(faq.querySelector('summary h3'), 'Native summary has a descriptive heading');
    assert.ok(faq.querySelector('p')?.textContent.trim().length > 70, 'Answer is present without client JS');
  }
  assert.match(document.querySelector('main').textContent, /ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน/);
  assert.doesNotMatch(document.querySelector('main').textContent, /คอยล์โอเวอร์/);
  assert.ok(document.querySelector('a[href="/articles/ev-battery-care"] img')?.getAttribute('src')?.includes('ev-chassis-volkswagen-id3'));
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
  assert.match(section.querySelector('figcaption').textContent, /TaurusEmerald/);
  assert.match(section.querySelector('figcaption').textContent, /CC BY-SA 4.0/);
  assert.doesNotMatch(section.textContent, /[0-9][0-9,.]*\s*บาท/);
});

test('Home retains existing anchors, adds contextual links and obeys tab policy', () => {
  const page = inspectPage(html, '/');
  assert.deepEqual(page.issues, []);
  const destinations = new Set(page.links.filter(link => link.scope === 'contextual-candidate').map(link => link.target.path));
  assert.ok(destinations.size >= 4, 'Contextual body links support at least four relevant guides');
  for (const id of ['vehicle-finder', 'coming-soon', 'launch', 'choose-your-path', 'fitment-assurance', 'ev-upgrade-guides', 'compare-ev-tyre-prices', 'before-you-buy', 'home-faq']) {
    assert.ok(document.getElementById(id), `Preserve destination #${id}`);
  }
  for (const link of page.links.filter(link => link.target?.path === '/' && link.target.hash)) {
    assert.ok(document.getElementById(link.target.hash), `Resolve ${link.href}`);
  }
  const source = document.querySelector('a[href="https://www.michelin.co.th/auto/advice/ev-guide/tyres-for-electric-cars"]');
  assert.equal(source?.getAttribute('target'), '_blank');
  assert.equal(source?.getAttribute('rel'), 'noopener noreferrer');
});
