import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:4319';
const output = path.resolve('scratch/vehicle-showcase-qa');
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const checks = [];
try {
  for (const width of [360, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(`${base}/#vehicle-finder`, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200);
    const section = page.locator('#vehicle-finder');
    const track = page.locator('#vehicle-showcase-track');
    await section.scrollIntoViewIfNeeded();
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await section.locator('input, select').count(), 0);
    assert.equal(await section.getByRole('group', { name: /จาก 3:/ }).count(), 3);
    await page.getByRole('button', { name: 'รถคันถัดไป' }).click();
    await page.waitForFunction(() => document.querySelector('[aria-label="แสดง Tesla Model 3 Highland"]').getAttribute('aria-current') === 'true');
    await track.focus();
    await page.keyboard.press('ArrowRight');
    await page.waitForFunction(() => document.querySelector('[aria-label="แสดง ZEEKR X"]').getAttribute('aria-current') === 'true');
    await page.getByRole('button', { name: 'รถคันถัดไป' }).click();
    await page.waitForFunction(() => document.querySelector('[aria-label="แสดง DEEPAL S05"]').getAttribute('aria-current') === 'true');
    await page.getByRole('button', { name: 'รถคันก่อนหน้า' }).click();
    await page.waitForFunction(() => document.querySelector('[aria-label="แสดง ZEEKR X"]').getAttribute('aria-current') === 'true');
    for (const label of ['DEEPAL S05', 'Tesla Model 3 Highland', 'ZEEKR X']) {
      await page.getByRole('button', { name: `แสดง ${label}` }).click();
      await page.waitForFunction(name => document.querySelector(`[aria-label="แสดง ${name}"]`).getAttribute('aria-current') === 'true', label);
      const image = section.locator('article').filter({ has: page.getByRole('link', { name: `อ่านรีวิว ${label}`, exact: true }) }).locator('img');
      await image.evaluate(img => img.decode());
      assert.ok(await image.evaluate(img => img.naturalWidth > 0 && img.alt.length > 0));
    }
    await page.getByRole('button', { name: 'แสดง DEEPAL S05' }).click();
    await page.waitForFunction(() => document.querySelector('#vehicle-showcase-track').scrollLeft < 2);
    await section.screenshot({ path: path.join(output, `showcase-${width}.png`) });
    await section.locator('summary').click();
    const modelLinks = await section.getByRole('navigation', { name: 'บทความรถทั้ง 11 รุ่น' }).locator('a').evaluateAll(links => links.map(a => a.getAttribute('href')));
    assert.equal(new Set(modelLinks).size, 11);
    if (width === 1440) {
      for (const route of modelLinks) assert.equal((await context.request.get(base + route)).status(), 200, route);
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    assert.equal(overflow, false);
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1), false);
    await page.evaluate(() => document.documentElement.style.fontSize = '100%');
    await page.getByRole('button', { name: 'แสดง DEEPAL S05' }).click();
    await Promise.all([page.waitForURL('**/articles/deepal-s05-review'), page.getByRole('link', { name: 'อ่านรีวิว DEEPAL S05', exact: true }).click()]);
    assert.deepEqual(errors, []);
    checks.push({ width, images: 3, modelLinks: 11, arrows: true, keyboard: true, wrap: true, navigation: true, overflow: false, zoom200Overflow: false, errors });
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(`${base}/#vehicle-finder`, { waitUntil: 'networkidle' });
  await page.locator('#vehicle-finder').scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  await page.waitForFunction(() => document.querySelector('[aria-label="แสดง Tesla Model 3 Highland"]').getAttribute('aria-current') === 'true', undefined, { timeout: 12000 });
  await page.getByRole('button', { name: 'หยุดสไลด์อัตโนมัติ' }).click();
  assert.equal(await page.getByRole('button', { name: 'เล่นสไลด์อัตโนมัติ' }).count(), 1);
  const pausedModel = await page.locator('[aria-current="true"][aria-controls="vehicle-showcase-track"]').getAttribute('aria-label');
  await page.mouse.move(0, 0);
  await page.waitForTimeout(7500);
  assert.equal(await page.locator('[aria-current="true"][aria-controls="vehicle-showcase-track"]').getAttribute('aria-label'), pausedModel);
  await page.getByRole('button', { name: 'เล่นสไลด์อัตโนมัติ' }).click();
  await page.mouse.move(0, 0);
  await page.waitForFunction(label => document.querySelector('[aria-current="true"][aria-controls="vehicle-showcase-track"]').getAttribute('aria-label') !== label, pausedModel, { timeout: 12000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForFunction(() => !document.querySelector('[data-rotation-control]'));
  assert.equal(await page.getByRole('button', { name: /สไลด์อัตโนมัติ/ }).count(), 0);
  checks.push({ autoplay: true, pause: true, resume: true, reducedMotion: true });
  await context.close();

  const touchContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  const touchPage = await touchContext.newPage();
  await touchPage.goto(`${base}/#vehicle-finder`, { waitUntil: 'networkidle' });
  await touchPage.locator('#vehicle-showcase-track').scrollIntoViewIfNeeded();
  const rect = await touchPage.locator('#vehicle-showcase-track').boundingBox();
  const session = await touchContext.newCDPSession(touchPage);
  const y = Math.max(100, rect.y + 100);
  await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 330, y }] });
  for (let x = 300; x >= 60; x -= 30) await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y }] });
  await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await touchPage.waitForFunction(() => document.querySelector('#vehicle-showcase-track').scrollLeft > 100);
  checks.push({ touchSwipe: true });
  await touchContext.close();
  await writeFile(path.join(output, 'results.json'), JSON.stringify({ base, checkedAt: new Date().toISOString(), checks }, null, 2));
  console.log(JSON.stringify({ success: true, output, checks }, null, 2));
} finally {
  await browser.close();
}
