import assert from 'node:assert/strict';
import test from 'node:test';
import { inspectPage, internalTarget, parseSitemap, blockingPages, imageIdentity } from './lib/content-links.mjs';
import { buildLinkGraph } from './lib/link-graph.mjs';

const page = body => `<html><head><title>Test</title><meta name="description" content="EVSELECT"></head><body><main><h1>เรื่องโช้ค</h1>${body}</main></body></html>`;

test('Editorial headers and footers inside main are content, not site navigation', () => {
  const result = inspectPage(page('<header><p>เริ่มจาก <a href="/articles/guide">คู่มือช่วงล่าง</a> ก่อนเลือกรุ่น</p></header><footer><p>ลองอ่าน <a href="/articles/tyres">วิธีเลือกยาง</a> ก่อนซื้อชุดใหม่</p></footer><nav><p>เลือก <a href="/articles/menu">เมนูบทความ</a> ที่นี่</p></nav>'), '/articles/test');
  assert.deepEqual(result.links.map(link => link.inline), [true, true, false]);
  assert.equal(result.links.filter(link => link.scope === 'contextual-candidate').length, 2);
});

test('Graph separates discovery from contextual incoming and deduplicates source pages', () => {
  const pages = [
    inspectPage(page('<nav><a href="/articles/a">บทความ A</a></nav>'), '/'),
    inspectPage(page('<p>อ่าน <a href="/articles/b">บทความ B</a> เพื่อเข้าใจเพิ่ม</p><p>ทบทวน <a href="/articles/b">เรื่อง B</a> ก่อนเลือก</p><p>ดูภาพจาก <a href="/#vehicle-style">แอปแต่งรถฟรี</a> ก่อนตัดสินใจ</p>'), '/articles/a'),
    inspectPage(page('<nav><a href="/articles/a">กลับบทความ A</a></nav>'), '/articles/b'),
  ];
  const required = [{ source: '/articles/a', destination: '/', hash: 'vehicle-style' }];
  const graph = buildLinkGraph(pages, pages.map(p => p.route), required);
  const b = graph.nodes.find(n => n.route === '/articles/b');
  assert.deepEqual(b.contextualArticleSources, ['/articles/a']);
  assert.equal(b.depthFromHome, 2);
  assert.equal(b.bodyDepthFromHome, null);
  assert.equal(graph.appEntryLinks.length, 1);
  assert.equal(graph.missingRequiredPaths.length, 0);
  assert.ok(graph.warnings.some(w => w.route === '/articles/a' && w.code === 'no-contextual-incoming'));
  assert.equal(buildLinkGraph(pages, pages.map(p => p.route), [{ ...required[0], hash: 'wrong' }]).missingRequiredPaths.length, 1);
});

test('Navigation and nofollow links cannot satisfy reviewed inline reading paths', () => {
  const result = inspectPage(page('<nav><a href="/articles/b">เรื่อง B</a></nav><p>ลองอ่าน <a href="/articles/c" rel="nofollow">เรื่อง C</a> ก่อนเลือก</p>'), '/articles/a');
  const paths = ['b', 'c'].map(slug => ({ source: result.route, destination: '/articles/' + slug }));
  assert.equal(buildLinkGraph([result], [result.route], paths).missingRequiredPaths.length, 2);
});

test('Noindex body destinations are reported except for the intentionally noindex studio', () => {
  const source = inspectPage(page('<p>อ่าน <a href="/pending">หน้านี้</a> หรือใช้ <a href="/vehicle-style/studio">สตูดิโอ</a> เพื่อดูภาพ</p>'), '/');
  const hidden = route => ({ ...inspectPage(page(''), route), robots: 'noindex, follow' });
  const graph = buildLinkGraph([source, hidden('/pending'), hidden('/vehicle-style/studio')], ['/']);
  assert.deepEqual(graph.warnings.filter(w => w.code === 'body-link-to-noindex').map(w => w.detail), ['/pending']);
});

test('Generic full-review labels are flagged despite descriptive card links elsewhere', () => {
  const result = inspectPage(page('<a href="/articles/a">อ่านรีวิวฉบับเต็ม</a><a href="/articles/b">อ่านบทความฉบับเต็ม</a>'), '/articles');
  assert.equal(result.issues.filter(i => i.code === 'generic-anchor').length, 2);
});
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

test('Homepage brand links and downloads do not stand in for contextual article links', () => {
  const result = inspectPage(page('<p>บทความนี้จัดทำโดย <a href="/">EVSELECT</a> สำหรับคนใช้รถ</p><p>ส่งให้ร้านได้จาก <a href="/downloads/checklist.txt">เช็กลิสต์ก่อนซื้อโช้ค</a> ที่เตรียมไว้</p>'), '/articles/test');
  assert.ok(result.issues.some(i => i.code === 'no-contextual-link'));
  assert.equal(result.links.filter(l => l.scope === 'contextual-candidate').length, 0);
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
