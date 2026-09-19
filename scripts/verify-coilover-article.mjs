import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { chromium } from 'playwright';

const base = process.env.BASE_URL || 'http://localhost:4320';
const route = '/articles/ev-damper-tuning-bump-rebound-guide';
const output = path.resolve(process.env.QA_OUTPUT || 'scratch/coilover-article-qa');
const expectedPhotoSources = {
  tein: 'www.tein.com',
  bilstein: 'performance.bilstein.com',
  ohlins: 'www.ohlins.com',
  bc: 'bcracing-na.com',
  hksS: 'www.hks-power.co.jp',
  hksR: 'www.hks-power.co.jp',
  bangkok: 'commons.wikimedia.org',
  race: 'commons.wikimedia.org',
};
const foundationalAnchors = ['#fitment-before-brand', '#basics', '#types', '#spring-height'];
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const checks = [];
try {
  const asset = await readFile('public/images/articles/kw-coilover-adjustable.avif');
  assert.equal(createHash('sha256').update(asset).digest('hex'), 'fd6d905e4af68433fe918ad9d2c5d41cbda26f8667921e651bf96bff81740dae');
  for (const width of [360, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    assert.equal((await page.goto(base + route, { waitUntil: 'networkidle' })).status(), 200);
    const article = page.locator('main article').first();
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.locator('h1').innerText(), 'ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?');
    assert.ok((await page.title()).includes('โช้คสตรัทปรับเกลียว'));
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://evselects.com' + route);
    const image = article.locator('header figure img');
    await image.evaluate(img => img.decode());
    assert.match(await image.getAttribute('src'), /kw-coilover-adjustable/);
    assert.equal(await image.evaluate(img => getComputedStyle(img).objectFit), 'contain');
    assert.ok(await image.evaluate(img => img.naturalWidth > 0 && img.alt.includes('KW')));
    const data = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(node => JSON.parse(node.textContent)).find(value => value['@type'] === 'BlogPosting'));
    assert.equal(data.author.name, 'EVSELECT');
    assert.equal(data.datePublished, '2026-08-27');
    assert.equal(data.dateModified, '2026-09-19');
    assert.equal(data.headline, await page.locator('h1').innerText());
    assert.equal(data.aggregateRating, undefined);
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    assert.equal(data.description, description);
    assert.ok(description.includes('ตรงรุ่น'), 'Search/share description should lead with the consumer problem');
    assert.equal(await page.locator('meta[property="og:description"]').getAttribute('content'), description);
    assert.equal(await page.locator('meta[name="twitter:description"]').getAttribute('content'), description);
    const breadcrumbs = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(node => JSON.parse(node.textContent)).find(value => value['@type'] === 'BreadcrumbList'));
    assert.equal(breadcrumbs.itemListElement.at(-1).item, 'https://evselects.com' + route);
    const og = await page.locator('meta[property="og:image"]').getAttribute('content');
    assert.match(og, /kw-coilover-adjustable-social\.jpg$/);
    assert.equal(await page.locator('meta[name="twitter:image"]').getAttribute('content'), og);
    const media = await context.request.get(base + new URL(og).pathname);
    assert.equal(media.status(), 200);
    assert.match(media.headers()['content-type'], /image\/jpeg/);
    if (base.startsWith('https://')) assert.equal((await context.request.get(og)).status(), 200);
    const toc = article.getByRole('navigation', { name: 'สารบัญบทความ' });
    const anchors = await toc.locator('a').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
    assert.equal(anchors.length, 21);
    assert.equal(new Set(anchors).size, anchors.length, 'TOC must not contain duplicated anchors');
    for (const anchor of anchors) assert.equal(await article.locator(anchor).count(), 1);
    for (const anchor of foundationalAnchors) {
      assert.ok(anchors.indexOf(anchor) >= 0, `Missing foundational section: ${anchor}`);
      assert.ok(anchors.indexOf(anchor) < anchors.indexOf('#explorer'), `Explain ${anchor} before the Way explorer`);
    }
    assert.deepEqual(anchors.slice(0, foundationalAnchors.length), foundationalAnchors, 'Start with suitability and fundamentals before adjuster options');
    assert.ok(anchors.indexOf('#buying-brief') > anchors.indexOf('#baseline'), 'Turn the baseline evidence into a buying brief');
    assert.ok(anchors.indexOf('#buying-brief') < anchors.indexOf('#toolkit'), 'Explain the buying brief before its downloadable toolkit');
    const sectionOrder = await article.locator('section[id]').evaluateAll(nodes => nodes.map(node => `#${node.id}`));
    assert.deepEqual(sectionOrder.filter(anchor => anchors.includes(anchor)), anchors, 'TOC and reading order must agree');
    assert.equal(await article.locator('#brands table tbody tr').count(), 9);
    const content = await article.textContent();
    const intro = await article.locator('header').innerText();
    assert.ok(intro.includes('ใส่ตรงรุ่น ทำไมยังไม่ถูกใจ?'));
    const quickAnswer = await article.locator('header aside').innerText();
    for (const concept of ['อาการไหนอยากแก้', 'ระยะทำงาน', 'ก่อนเพิ่มจำนวนช่องปรับ']) assert.ok(quickAnswer.includes(concept), `Quick answer must answer the pain point before Ways: ${concept}`);
    assert.equal(await article.getByRole('navigation', { name: 'ทางลัดตามสิ่งที่ต้องการ' }).locator('a').first().getAttribute('href'), '#fitment-before-brand');
    const fitment = await article.locator('#fitment-before-brand').innerText();
    for (const concept of ['Fitment', 'Suitability', 'เจ้าของรถรุ่นเดียวกันสองคน', 'ตัวอย่างสมมติ', 'ไม่ใช่ผลทดลอง']) assert.ok(fitment.includes(concept), `Missing fitment/suitability context: ${concept}`);
    const basics = await article.locator('#basics').innerText();
    for (const concept of ['ยาง', 'สปริง', 'Damper', 'Bump stop', 'ไม่ลดลม']) assert.ok(basics.includes(concept), `Missing system foundation: ${concept}`);
    const travel = await article.locator('#spring-height').innerText();
    for (const concept of ['Spring rate', 'Preload', 'Bump travel', 'Droop']) assert.ok(travel.includes(concept), `Missing suspension travel concept: ${concept}`);
    const wheelRate = article.locator('#wheel-rate-example');
    assert.equal(await wheelRate.getAttribute('open'), null, 'Optional engineering detail should start collapsed');
    await wheelRate.locator('summary').click();
    assert.equal(await wheelRate.getAttribute('open'), '', 'Readers must be able to reveal the worked example');
    const wheelRateText = await wheelRate.innerText();
    for (const concept of ['MR = ระยะยุบสปริง ÷ ระยะยุบล้อ', 'Wheel rate ≈ Spring rate × MR²', '100 N/mm × 1.0²', '100 N/mm × 0.7²', '49 N/mm', 'ตัวเลขสมมติ', 'linear spring', 'ใกล้ ride height', 'ไม่รวม', 'ไม่ใช่สเปกรถ']) assert.ok(wheelRateText.includes(concept), `Missing worked-example definition, result or limit: ${concept}`);
    assert.ok((await wheelRate.locator('a').getAttribute('href')).startsWith('https://eibach.com/'), 'Worked example must link to its engineering source');
    const brief = article.locator('#buying-brief');
    const briefText = await brief.innerText();
    for (const concept of ['โจทย์สมมติ', 'ผู้โดยสาร', 'งบรวม', 'ตั้งศูนย์', 'ระยะทำงาน', 'ต้องยืนยัน']) assert.ok(briefText.includes(concept), `Missing actionable buying-brief field: ${concept}`);
    assert.equal(await brief.locator('a[download]').getAttribute('href'), '/downloads/evselect-coilover-shop-checklist.txt');
    for (const phrase of ['Character', 'ถนนเยอรมันกับถนนไทย', 'จูนได้ ไม่ได้แปลว่าเปลี่ยนนิสัยได้หมด', 'HIPERMAX R', 'Street Comfort']) assert.ok((await article.locator('#character-and-roads').innerText()).includes(phrase));
    const photos = article.locator('figure[data-editorial-photo]');
    assert.equal(await photos.count(), 8);
    assert.deepEqual((await photos.evaluateAll(nodes => nodes.map(node => node.dataset.editorialPhoto))).sort(), Object.keys(expectedPhotoSources).sort());
    for (const figure of await photos.all()) {
      await figure.scrollIntoViewIfNeeded();
      const photo = figure.locator('img');
      await photo.evaluate(img => img.decode());
      assert.ok(await photo.evaluate(img => img.naturalWidth > 0 && img.alt.length > 12));
      assert.equal(await photo.getAttribute('loading'), 'lazy');
      const photoName = await figure.getAttribute('data-editorial-photo');
      const sourceHref = await figure.locator('figcaption a').first().getAttribute('href');
      assert.equal(new URL(sourceHref).protocol, 'https:');
      assert.equal(new URL(sourceHref).hostname, expectedPhotoSources[photoName]);
      assert.equal(await figure.locator('a:has(img)').getAttribute('href'), sourceHref);
    }
    const ohlinsPhoto = article.locator('figure[data-editorial-photo="ohlins"]');
    assert.match(await ohlinsPhoto.locator('img').getAttribute('src'), /ohlins-road-track-tesla/);
    for (const detail of ['Model 3', '2020', 'TES MA10S1']) assert.ok((await ohlinsPhoto.locator('figcaption').innerText()).includes(detail));
    assert.equal(await article.locator('figure a[href="https://creativecommons.org/licenses/by-sa/4.0/"]').count(), 2);
    for (const brand of ['TEIN', 'BC Racing', 'HKS', 'BILSTEIN', 'Öhlins', 'KW']) assert.ok(content.includes(brand));
    for (const stale of ['0.65 - 0.70', 'OptimumG Damper Science', 'EVSELECT Suspension Tuning Division']) assert.equal(content.includes(stale), false);
    for (const concept of ['จำนวนช่องแรงหน่วง', 'ไม่ใช่ความเร็วรถ', 'Preload', 'Bump stop', 'HKS', '2026', 'รหัสเดิม', 'สถานการณ์สมมติ', 'A–B–A']) assert.ok(content.includes(concept), `Missing concept: ${concept}`);
    assert.equal(await article.locator('#explorer input[type="radio"]').count(), 4);
    for (const mode of ['rebound', 'coupled', 'two', 'three']) {
      await article.locator(`#explorer input[value="${mode}"]`).check();
      assert.equal(await article.locator(`#explorer-${mode}`).isVisible(), true);
    }
    await article.locator('#explorer input[value="rebound"]').focus();
    await page.keyboard.press('ArrowRight');
    assert.equal(await article.locator('#explorer input[value="coupled"]').isChecked(), true);
    assert.equal(await article.locator('#examples details').count(), 3);
    for (const example of await article.locator('#examples details').all()) {
      await example.locator('summary').click();
      assert.equal(await example.getAttribute('open'), '');
    }
    assert.equal(await article.locator('#faq details').count(), 10);
    await article.locator('#faq summary').first().click();
    assert.equal(await article.locator('#faq details').first().getAttribute('open'), '');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    await page.evaluate(() => document.documentElement.style.fontSize = '100%');
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: path.join(output, `article-top-${width}.png`) });
    await article.locator('header figure').screenshot({ path: path.join(output, `kw-image-${width}.png`) });
    await article.locator('#brands').scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(output, `comparison-${width}.png`) });
    await toc.locator('a[href="#three-way"]').click();
    assert.equal(new URL(page.url()).hash, '#three-way');
    const table = article.getByRole('region', { name: /ตารางเปรียบเทียบช่องปรับ/ });
    assert.ok(await table.evaluate(node => node.scrollWidth <= node.clientWidth + 1));
    if (width < 640) assert.equal(await table.locator('tbody tr').first().evaluate(node => getComputedStyle(node).display), 'block');
    await article.locator('#explorer').screenshot({ path: path.join(output, `explorer-${width}.png`) });
    await article.locator('#fitment-before-brand').screenshot({ path: path.join(output, `fitment-suitability-${width}.png`) });
    await article.locator('#basics').screenshot({ path: path.join(output, `fundamentals-${width}.png`) });
    await article.locator('#wheel-rate-example').screenshot({ path: path.join(output, `wheel-rate-example-${width}.png`) });
    await article.locator('#buying-brief').screenshot({ path: path.join(output, `buying-brief-${width}.png`) });
    await article.locator('#toolkit').screenshot({ path: path.join(output, `toolkit-${width}.png`) });
    assert.deepEqual(errors, []);
    await article.locator('#character-and-roads').screenshot({ path: path.join(output, `character-roads-${width}.png`) });
    checks.push({ width, h1: 1, tocLinks: anchors.length, foundationsBeforeWays: true, tocMatchesReadingOrder: true, fitmentVsSuitability: true, sameCarDifferentUsersIllustrative: true, springDamperTravelFoundations: true, wheelRateExampleWithAssumptionsAndSource: true, buyingBriefWithChecklist: true, comparisonRows: 9, faq: 10, explorerModes: 4, originalExamples: 3, editorialPhotosDecoded: 8, manufacturerImageLinks: true, ohlinsTeslaImage: true, metadataConsistent: true, imageDecoded: true, overflow: false, zoom200Overflow: false, pageErrors: errors });
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(base, { waitUntil: 'networkidle' });
  const card = page.locator(`a[href="${route}"]`).filter({ has: page.locator('img') });
  assert.equal(await card.count(), 1);
  assert.equal(await card.locator('h3').innerText(), 'ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?');
  await card.scrollIntoViewIfNeeded();
  await card.locator('img').evaluate(img => img.decode());
  assert.match(await card.locator('img').getAttribute('src'), /kw-coilover-adjustable/);
  assert.equal(await card.locator('img').evaluate(img => getComputedStyle(img).objectFit), 'contain');
  await card.screenshot({ path: path.join(output, 'homepage-card.png') });
  await card.locator('..').screenshot({ path: path.join(output, 'homepage-featured.png') });
  await Promise.all([page.waitForURL('**' + route), card.click()]);
  for (const internal of ['/articles', '/articles/ev-tyre-and-coilover-selection-guide', '/articles/shock-absorber-types-monotube-twintube-air-ev']) assert.equal((await context.request.get(base + internal)).status(), 200);
  await page.goto(base + '/articles', { waitUntil: 'networkidle' });
  const catalogCard = page.locator('article').filter({ has: page.locator(`a[href="${route}"]`) });
  assert.equal(await catalogCard.count(), 1);
  await catalogCard.scrollIntoViewIfNeeded();
  await catalogCard.locator('img').evaluate(img => img.decode());
  assert.match(await catalogCard.locator('img').getAttribute('src'), /kw-coilover-adjustable/);
  assert.equal(await catalogCard.locator('img').evaluate(img => getComputedStyle(img).objectFit), 'contain');
  assert.equal((await catalogCard.innerText()).includes('9.7'), false);
  await catalogCard.screenshot({ path: path.join(output, 'catalog-card.png') });
  checks.push({ homepageCard: true, catalogCard: true, originalAvifSha256: true, internalLinks: true });
  await context.close();
  const plainContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const plain = await plainContext.newPage();
  await plain.goto(base + route, { waitUntil: 'load' });
  for (const anchor of [...foundationalAnchors, '#buying-brief', '#wheel-rate-example']) assert.equal(await plain.locator(anchor).isVisible(), true, `Required reading must work without JavaScript: ${anchor}`);
  assert.equal(await plain.locator('#wheel-rate-example').getAttribute('open'), null);
  await plain.locator('#wheel-rate-example summary').click();
  assert.equal(await plain.locator('#wheel-rate-example').getAttribute('open'), '');
  assert.ok((await plain.locator('#wheel-rate-example').innerText()).includes('49 N/mm'));
  await plain.getByRole('navigation', { name: 'ทางลัดตามสิ่งที่ต้องการ' }).locator('a[href="#fitment-before-brand"]').click();
  assert.equal(new URL(plain.url()).hash, '#fitment-before-brand');
  await plain.locator('#explorer input[value="three"]').check();
  assert.equal(await plain.locator('#explorer-three').isVisible(), true);
  await plain.locator('#examples summary').first().click();
  assert.equal(await plain.locator('#examples details').first().getAttribute('open'), '');
  const log = await plainContext.request.get(base + '/downloads/evselect-damper-setup-log.html');
  assert.equal(log.status(), 200);
  assert.match(log.headers()['content-type'], /text\/html/);
  const checklist = await plainContext.request.get(base + '/downloads/evselect-coilover-shop-checklist.txt');
  assert.equal(checklist.status(), 200);
  const checklistText = await checklist.text();
  for (const field of ['ต้องยืนยัน', 'อาการ', 'ยาง', 'โหลด', 'ตั้งศูนย์', 'บูช', 'งบ']) assert.ok(checklistText.includes(field), `Missing workshop brief/checklist field: ${field}`);
  assert.equal((checklistText.match(/^\d+\)/gm) || []).length, 12, 'Preserve the complete 12-point workshop checklist');
  await plain.goto(base + '/downloads/evselect-damper-setup-log.html');
  assert.equal(await plain.locator('script, form').count(), 0);
  await plain.locator('input').first().fill('รถตัวอย่างสำหรับตรวจฟอร์ม');
  assert.equal(await plain.locator('input').first().inputValue(), 'รถตัวอย่างสำหรับตรวจฟอร์ม');
  assert.equal(await plain.locator('meta[name="robots"]').getAttribute('content'), 'noindex, follow');
  assert.equal(await plain.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
  await plain.pdf({ path: path.join(output, 'setup-log-print.pdf'), preferCSSPageSize: true, printBackground: true });
  checks.push({ noJavaScriptFoundationsAndBrief: true, noJavaScriptWheelRateDisclosure: true, noJavaScriptPainPointNavigation: true, noJavaScriptExplorer: true, noJavaScriptExamples: true, downloads: true, workshopChecklistPoints: 12, formEditable: true, formHasNoSubmissionOrScripts: true, printPdfCreated: true });
  await plainContext.close();
  const result = { base, verifiedAt: new Date().toISOString(), checks };
  await writeFile(path.join(output, 'results.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
