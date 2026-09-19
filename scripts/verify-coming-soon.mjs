import assert from 'node:assert/strict';
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:4325';
const output = path.resolve(process.env.QA_OUTPUT || 'scratch/coming-soon-qa');
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const checks = [];
try {
  for (const width of [360, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(`${base}/#coming-soon`, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    const banner = page.locator('#coming-soon');
    await banner.scrollIntoViewIfNeeded();
    await banner.locator('img').evaluate(img => img.decode());
    assert.ok(await banner.locator('img').evaluate(img => img.naturalWidth > 0));
    assert.match(await banner.innerText(), /ของแต่ง EV/);
    assert.equal((await banner.locator('h2').innerText()).replace(/\s+/g, ' ').trim(), 'ของแต่ง EV ที่คุณต้องมี!');
    assert.doesNotMatch(await banner.innerText(), /ที่อยากให้รอดู/);
    assert.match(await banner.innerText(), /COMING SOON/);
    assert.match(await banner.innerText(), /ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน/);
    assert.match(await banner.innerText(), /สร้างด้วย AI/);
    assert.equal(await page.locator('#vehicle-showcase-track, #vehicle-finder input, #vehicle-finder select').count(), 0);
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.getByText('ค้นหาบทความตามรุ่นรถ', { exact: true }).count(), 0);
    assert.equal(await banner.getByRole('link', { name: 'ติดตามข่าวเปิดตัว' }).getAttribute('href'), 'https://www.facebook.com/evselects');
    assert.equal(await banner.getByRole('link', { name: 'อยากได้ของแต่งอะไร บอกเราได้' }).getAttribute('href'), '/contact');
    await banner.getByRole('link', { name: 'ติดตามข่าวเปิดตัว' }).focus();
    assert.equal(await banner.getByRole('link', { name: 'ติดตามข่าวเปิดตัว' }).evaluate(a => a === document.activeElement), true);
    await page.keyboard.press('Tab');
    assert.equal(await banner.getByRole('link', { name: 'อยากได้ของแต่งอะไร บอกเราได้' }).evaluate(a => a === document.activeElement), true);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    await page.evaluate(() => document.activeElement?.blur());
    await banner.screenshot({ path: path.join(output, `banner-${width}.png`) });
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    await banner.screenshot({ path: path.join(output, `banner-${width}-text200.png`) });
    await page.evaluate(() => document.documentElement.style.fontSize = '100%');
    await banner.getByRole('link', { name: 'อยากได้ของแต่งอะไร บอกเราได้' }).click();
    await page.waitForURL('**/contact');
    assert.deepEqual(errors, []);
    checks.push({ width, imageDecoded: true, removedFinder: true, keyboard: true, contactNavigation: true, overflow: false, text200Overflow: false, errors });
    await context.close();
  }
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${base}/#coming-soon`);
  assert.equal(await page.locator('#coming-soon a').count(), 2);
  await page.locator('#coming-soon').scrollIntoViewIfNeeded();
  await page.locator('#coming-soon img').evaluate(img => img.decode());
  const reviews = await context.request.get(`${base}/articles?category=reviews`);
  assert.equal(reviews.status(), 200);
  assert.match(await reviews.text(), /รีวิวรถยนต์ไฟฟ้าทั้งหมด/);
  const routes = (await readdir('src/app/(storefront)/articles', { withFileTypes: true })).filter(e => e.isDirectory()).map(e => `/articles/${e.name}`);
  for (const route of [...routes, '/contact', '/editorial-policy']) {
    assert.equal((await context.request.get(base + route)).status(), 200, route);
  }
  for (const route of ['/products', '/categories', '/vehicles', '/fitment', '/export', '/api/export/shopee', '/api/export/woo']) {
    assert.equal((await context.request.get(base + route)).status(), 404, route);
  }
  const asset = await context.request.get(`${base}/images/launch/evselect-coming-soon.webp`);
  assert.equal(asset.status(), 200);
  assert.match(asset.headers()['content-type'], /image\/webp/);
  assert.ok((await asset.body()).length < 150000);
  checks.push({ noJavaScript: true, publicRoutes: routes.length + 2, sensitiveRoutesProtected: 7, imageBytes: (await asset.body()).length });
  await context.close();
  await writeFile(path.join(output, 'results.json'), JSON.stringify({ base, checkedAt: new Date().toISOString(), checks }, null, 2));
  console.log(JSON.stringify({ base, checks, output }, null, 2));
} finally {
  await browser.close();
}
