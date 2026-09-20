import assert from 'node:assert/strict';
import test from 'node:test';
import { inspectPage, internalTarget, parseSitemap, blockingPages, imageIdentity } from './lib/content-links.mjs';

const page = body => `<html><head><title>Test</title><meta name="description" content="EVSELECT"></head><body><main><h1>เรื่องโช้ค</h1>${body}</main></body></html>`;
test('Internal URLs preserve queries and decode fragments; external links stay external', () => {
  assert.deepEqual(internalTarget('https://www.evselects.com/articles?category=reviews#%E0%B9%84%E0%B8%97%E0%B8%A2'), { path: '/articles', query: '?category=reviews', hash: 'ไทย' });
  assert.equal(internalTarget('https://manufacturer.com/specs'), null);
  assert.equal(internalTarget('javascript:alert(1)'), null);
});
test('Meaningful inline anchor is separate from navigation and metadata/alt brand mentions', () => {
  const result = inspectPage(page('<p>ทำความเข้าใจก่อนตั้งค่า อ่าน <a href="/articles/damper"><strong>วิธีปรับ Bump และ Rebound</strong></a> เพื่อแยกอาการรถ</p><a href="/"><span>EVSELECT</span></a><img alt="EVSELECT"><nav><a href="/articles">บทความ</a></nav>'), '/articles/test');
  assert.equal(result.links.filter(l => l.scope === 'contextual-candidate').length, 1);
  assert.equal(result.brands.length, 0);
  assert.deepEqual(result.issues, []);
});
test('Detects generic/empty/nested anchors, heading skips and misdirected brand', () => {
  const result = inspectPage(page('<h3>ข้ามขั้น</h3><p><a href="/contact">ติดต่อ EVSELECT</a></p><a href="/articles">อ่านต่อ</a><a href="/empty"></a><a href="/outer"><a href="/inner">ลิงก์ซ้อน</a></a>'), '/articles/test');
  for (const code of ['generic-anchor', 'empty-anchor', 'nested-anchor', 'heading-skip', 'brand-not-home']) assert.ok(result.issues.some(i => i.code === code), code);
});
test('Same-page TOC and global navigation do not satisfy contextual reading paths', () => {
  const result = inspectPage(page('<nav><a href="/articles/next">อ่านเรื่องโช้ค</a></nav><p>ดูหัวข้อ <a href="#spring">สปริง</a> ภายในบทความนี้</p><h2 id="spring">สปริง</h2>'), '/articles/test');
  assert.ok(result.issues.some(i => i.code === 'no-contextual-link'));
});
test('Rejects malformed XML, wrong namespace, and preview sitemap URLs', () => {
  assert.throws(() => parseSitemap('<urlset><url></urlset>', 'urlset'));
  assert.throws(() => parseSitemap('<urlset xmlns="bad"><url><loc>https://evselects.com/</loc></url></urlset>', 'urlset'));
  assert.throws(() => parseSitemap('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://preview.vercel.app/</loc></url></urlset>', 'urlset'));
  assert.deepEqual(parseSitemap('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://evselects.com/sitemap.xml</loc></sitemap></sitemapindex>', 'sitemapindex'), [{ url: 'https://evselects.com/sitemap.xml', modified: null }]);
});
test('Known issues permitted only on unchanged pages; changed pages and strict mode fail', () => {
  const old = inspectPage(page('<p>EVSELECT</p>'), '/articles/test');
  const baseline = { [old.route]: old.fingerprint };
  assert.equal(blockingPages([old], baseline).length, 0);
  assert.equal(blockingPages([old], baseline, true).length, 1);
  const changed = inspectPage(page('<p>EVSELECT เนื้อหาใหม่</p>'), '/articles/test');
  assert.equal(blockingPages([changed], baseline).length, 1);
});

test('Internal links stay in the same tab; external links require a protected new tab', () => {
  const result = inspectPage(page('<p>อ่านเพิ่มเติมเรื่อง <a href="/articles/next">การปรับโช้ค</a> ก่อนลงมือ</p><a href="https://manufacturer.com" target="_blank">ผู้ผลิต</a><a href="https://www.evselects.com/" target="_blank">EVSELECT</a><a href="mailto:hello@example.com">อีเมล</a>'), '/articles/test');
  assert.equal(result.issues.filter(i => i.code === 'external-not-new-tab').length, 0);
  assert.equal(result.issues.filter(i => i.code === 'internal-new-tab').length, 1);
  assert.deepEqual(result.issues.filter(i => i.code === 'unsafe-new-tab'), [{ code: 'unsafe-new-tab', detail: 'https://manufacturer.com' }]);
});

test('Imported-image cache URLs are portable without ignoring names or alt text', () => {
  const local = '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftein-flex-z.localhash.webp&w=3840&q=75';
  const hosted = '/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Ftein-flex-z.hosthash.webp&w=3840&q=75';
  assert.equal(imageIdentity(local), imageIdentity(hosted));
  assert.equal(imageIdentity('https://external.example' + hosted), 'https://external.example' + hosted);
  assert.notEqual(imageIdentity(hosted), imageIdentity(hosted.replace('tein-flex-z', 'different-product')));
  const a = inspectPage(page(`<img src="${local}" alt="TEIN FLEX Z">`), '/articles/test');
  const b = inspectPage(page(`<img src="${hosted}" alt="TEIN FLEX Z">`), '/articles/test');
  assert.equal(a.fingerprint, b.fingerprint);
  assert.notEqual(a.fingerprint, inspectPage(page(`<img src="${hosted}" alt="Another product">`), '/articles/test').fingerprint);
});
