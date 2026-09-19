import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const base = (process.env.BASE_URL || 'http://localhost:4320').replace(/\/$/, '');
const output = path.resolve(process.env.QA_OUTPUT || 'scratch/brake-guide-qa');
const route = '/articles/ev-carbon-ceramic-brakes-guide';
const photos = ['porsche-pccb-carbon-ceramic-brakes.jpg', 'brembo-prime-brake-disc.webp', 'brembo-max-slotted-disc.webp', 'brembo-xtra-drilled-disc.webp', 'endless-m6-owner-model3-installed.jpg', 'endless-m6-owner-front-kit.jpg', 'endless-alvell6-official.jpg', 'project-mu-fs6-official.jpg', 'tesla-plaid-carbon-ceramic-kit.jpg', 'doi-inthanon-road-2013.jpg'];
const checks = [];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const width of [360, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    assert.equal((await page.goto(base + route, { waitUntil: 'networkidle' })).status(), 200);
    const article = page.locator('article');
    assert.equal(await article.locator('h1').count(), 1);
    assert.equal(await article.locator('h1').innerText(), 'Carbon Ceramic คุ้มไหม? ก่อนจ่ายหลักแสนอัปเกรดเบรก EV');
    assert.equal(await article.locator('section[id]').count(), 15);
    assert.equal(await article.locator('#faq details').count(), 13);
    assert.ok(await article.locator('#sources a').count() >= 37);
    for (const anchor of await article.locator('nav a[href^="#"]').evaluateAll(links => links.map(a => a.hash))) assert.equal(await article.locator(anchor).count(), 1);
    const schema = await article.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(node => JSON.parse(node.textContent)).find(item => item['@type'] === 'BlogPosting'));
    assert.equal(schema.dateModified, '2026-09-19');
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://evselects.com' + route);
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) assert.equal(await page.locator(selector).getAttribute('content'), schema.description);
    await article.locator('img').evaluateAll(images => images.forEach(image => { image.loading = 'eager'; }));
    await page.waitForFunction(() => [...document.querySelectorAll('article img')].every(image => image.complete && image.naturalWidth > 0));
    const loaded = await article.locator('img').evaluateAll(images => images.map(image => ({ src: image.currentSrc, alt: image.alt })));
    assert.equal(loaded.length, photos.length);
    for (const photo of photos) assert.ok(loaded.some(image => image.src.includes(photo) && image.alt.length > 15), photo);
    await page.screenshot({ path: path.join(output, `top-${width}.png`) });
    const lab = article.getByTestId('brake-energy-lab');
    assert.equal(await lab.getByTestId('kinetic-energy').innerText(), '0.85 MJ');
    assert.equal(await lab.getByTestId('descent-energy').innerText(), '21.58 MJ');
    await page.locator('#brake-speed').focus();
    await page.keyboard.press('End');
    assert.equal(await lab.getByTestId('kinetic-energy').innerText(), '2.17 MJ');
    await page.locator('#brake-regen').focus();
    await page.keyboard.press('End');
    assert.equal(await lab.getByTestId('friction-energy').innerText(), '0.43 MJ');
    await page.locator('#brake-height').focus();
    await page.keyboard.press('Home');
    assert.equal(await lab.getByTestId('descent-energy').innerText(), '2.16 MJ');
    await lab.screenshot({ path: path.join(output, `energy-${width}.png`) });
    const compare = article.getByTestId('brake-brand-compare');
    assert.match(await article.locator('#japan').innerText(), /375 mm/);
    assert.match(await article.locator('#japan').innerText(), /Performance Highland/);
    assert.match(await article.locator('#japan').innerText(), /Advan 20×10.5/);
    assert.match(await article.locator('#japan').innerText(), /เจ้าของรายงาน/);
    assert.match(await article.locator('#carbon-ceramic').innerText(), /150,000–200,000/);
    assert.match(await article.locator('#carbon-ceramic').innerText(), /300,000–400,000 บาท เฉพาะจาน/);
    assert.equal(await article.getByTestId('complete-kit-references').locator('tbody tr').count(), 4);
    assert.equal(await compare.locator('section[data-testid^="score-card-"]').count(), 3);
    assert.equal(await compare.locator('button[data-testid^="score-"]').count(), 9);
    const alignedRings = await compare.getByTestId('comparison-rings').evaluateAll(groups => groups.every(group => {
      const circles = [...group.querySelectorAll('svg')].map(svg => svg.getBoundingClientRect());
      return circles.every(circle => Math.abs(circle.top - circles[0].top) < 1);
    }));
    assert.equal(alignedRings, true, `Score rings must align at ${width}px`);
    const firstRing = compare.getByTestId('score-brembo-performance');
    assert.match(await compare.getByTestId('score-value-brembo-performance').innerText(), /ยังไม่เปิด/);
    await firstRing.focus();
    await page.keyboard.press('Enter');
    assert.equal(await firstRing.getAttribute('aria-expanded'), 'true');
    assert.match(await compare.getByTestId('score-value-brembo-performance').innerText(), /^[1-9]\/10$/);
    assert.equal(await compare.locator('#score-detail-brembo').isVisible(), true);
    await page.keyboard.press('Enter');
    assert.equal(await compare.locator('#score-detail-brembo').isVisible(), false);
    await compare.getByTestId('show-all-scores').click();
    assert.equal(await compare.getByTestId('show-all-scores').isDisabled(), true);
    for (const brand of ['brembo', 'endless', 'carbon-ceramic']) {
      for (const axis of ['performance', 'price', 'dust']) {
        const ring = compare.getByTestId('score-' + brand + '-' + axis);
        assert.match(await compare.getByTestId('score-value-' + brand + '-' + axis).innerText(), /^[1-9]\/10$/);
        await ring.click();
        const detail = compare.locator('#score-detail-' + brand);
        assert.equal(await detail.isVisible(), true);
        assert.ok(await detail.locator('a').count() >= 1, 'Every estimate needs a visible source or owner-case link');
        assert.match(await detail.innerText(), /คะแนนบรรณาธิการ|ความมั่นใจ/);
      }
    }
    for (const brand of ['brembo', 'endless', 'carbon-ceramic']) {
      await compare.getByTestId('filter-' + brand).click();
      assert.equal(await compare.locator('section[data-testid^="score-card-"]').count(), 1);
      assert.equal(await compare.getByTestId('score-card-' + brand).isVisible(), true);
      assert.equal(await compare.getByTestId('filter-' + brand).getAttribute('aria-pressed'), 'true');
    }
    await compare.getByTestId('filter-all').click();
    assert.equal(await compare.locator('section[data-testid^="score-card-"]').count(), 3);
    const method = compare.locator('#score-method');
    await method.locator('summary').click();
    assert.match(await method.innerText(), /ไม่ใช่คะแนนที่ผู้รีวิวให้/);
    assert.match(await method.innerText(), /Carbon Ceramic เป็นวัสดุ/);
    await method.locator('summary').click();
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    await compare.screenshot({ path: path.join(output, `compare-${width}.png`) });
    await article.locator('#japan').screenshot({ path: path.join(output, `japan-${width}.png`) });
    await article.locator('#surface').screenshot({ path: path.join(output, `surface-${width}.png`) });
    const faq = article.locator('#faq details').first();
    await faq.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await faq.getAttribute('open'), '');
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `200% overflow at ${width}`);
    if (width <= 390) {
      const reflow = await compare.getByTestId('comparison-rings').first().evaluate(element => {
        const items = [...element.children].map(item => item.getBoundingClientRect());
        return items.every((item, index) => index === 0 || item.top > items[index - 1].bottom);
      });
      assert.equal(reflow, true, 'Large text must reflow rings vertically, not squeeze labels');
    }
    await compare.screenshot({ path: path.join(output, `compare-${width}-text200.png`) });
    assert.deepEqual(errors, []);
    checks.push({ width, photos: loaded.length, contentAndMetadata: true, energyKeyboardControls: true, threeBrandFiltering: true, nineClickableEditorialScores: true, sourceReasonsAndLimitations: true, overflow: false, text200Overflow: false, runtimeErrors: errors });
    await context.close();
  }
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 900 } });
  const page = await context.newPage();
  assert.equal((await page.goto(base + route)).status(), 200);
  assert.equal(await page.locator('#brake-mass').isVisible(), false);
  assert.equal(await page.getByTestId('show-all-scores').isVisible(), false);
  assert.match(await page.getByTestId('brake-brand-compare').locator('noscript').innerText(), /Performance 8\/10/);
  assert.equal(await page.getByTestId('kinetic-energy').innerText(), '0.85 MJ');
  await page.locator('#faq details').first().locator('summary').click();
  assert.equal(await page.locator('#faq details').first().getAttribute('open'), '');
  const checklist = await context.request.get(base + '/downloads/evselect-brake-shop-checklist.txt');
  assert.equal(checklist.status(), 200);
  assert.match(await checklist.text(), /EVSELECT/);
  await page.goto(base + '/articles');
  const listing = page.locator('a[href="' + route + '"]').filter({ hasText: 'Carbon Ceramic คุ้มไหม?' }).first();
  assert.ok(await listing.count() > 0);
  for (const sensitive of ['/products', '/categories', '/vehicles', '/fitment', '/export', '/api/export/shopee', '/api/export/woo']) assert.equal((await context.request.get(base + sensitive)).status(), 404, sensitive);
  checks.push({ noJavaScriptContentAndFaq: true, listingUpdated: true, checklistAvailable: true, protectedRoutes: 7 });
  await context.close();
  const report = { base, checkedAt: new Date().toISOString(), checks };
  await writeFile(path.join(output, 'results.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
