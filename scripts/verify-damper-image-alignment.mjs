import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
import { chromium } from 'playwright';

const route = '/articles/ev-damper-tuning-bump-rebound-guide';
const preview = process.env.BASE_URL || 'https://evselect-platform-pyfkr9l7y-evselect-com.vercel.app';
const output = 'scratch/damper-image-alignment';
await mkdir(output, { recursive: true });
const cover = await readFile('public/images/articles/kw-coilover-adjustable.avif');
const social = await readFile('public/images/articles/kw-coilover-adjustable-social.jpg');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const pixels = async bytes => sharp(bytes).resize(256, 144, { fit: 'fill' }).removeAlpha().raw().toBuffer();
const a = await pixels(cover);
const b = await pixels(social);
assert.equal(a.length, b.length);
const meanAbsoluteChannelDifference = a.reduce((sum, value, index) => sum + Math.abs(value - b[index]), 0) / a.length;
assert.ok(meanAbsoluteChannelDifference < 5, 'Social JPEG must depict the supplied AVIF cover');
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const report = { checkedAt: new Date().toISOString(), samePictureCheck: { method: '256x144 RGB mean absolute difference; threshold <5/255', meanAbsoluteChannelDifference, coverSha256: hash(cover), socialSha256: hash(social) }, environments: [] };
try {
  for (const base of [preview, 'https://evselects.com']) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    const response = await page.goto(base + route, { waitUntil: 'networkidle' });
    const data = await page.evaluate(() => {
      const article = document.querySelector('main article');
      return {
        title: document.title,
        firstImage: article.querySelector('img')?.getAttribute('src'),
        ogImage: document.querySelector('meta[property="og:image"]')?.content,
        twitterImage: document.querySelector('meta[name="twitter:image"]')?.content,
        schemaImages: [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(node => { const d = JSON.parse(node.textContent); return d.image || []; }),
        canonical: document.querySelector('link[rel="canonical"]')?.href,
      };
    });
    data.httpStatus = response.status();
    data.xRobotsTag = response.headers()['x-robots-tag'] || null;
    data.assetChecks = [];
    for (const [pathname, expected] of [['/images/articles/kw-coilover-adjustable.avif', cover], ['/images/articles/kw-coilover-adjustable-social.jpg', social]]) {
      const asset = await context.request.get(base + pathname);
      const bytes = await asset.body();
      data.assetChecks.push({ pathname, status: asset.status(), contentType: asset.headers()['content-type'], exactMatch: asset.ok() && hash(bytes) === hash(expected) });
    }
    await page.goto(base, { waitUntil: 'networkidle' });
    const cards = page.locator(`a[href="${route}"]`).filter({ has: page.locator('img') });
    data.homepageCards = await cards.evaluateAll(nodes => nodes.map(node => ({ text: node.innerText, image: node.querySelector('img')?.getAttribute('src') })));
    if (base === preview) {
      assert.equal(data.httpStatus, 200);
      assert.ok(data.firstImage.includes('kw-coilover-adjustable.avif'));
      assert.equal(data.ogImage, base + '/images/articles/kw-coilover-adjustable-social.jpg');
      assert.equal(data.twitterImage, data.ogImage);
      assert.deepEqual(data.schemaImages, [data.ogImage]);
      assert.ok(data.assetChecks.every(item => item.exactMatch));
      assert.equal(data.homepageCards.length, 1);
      assert.ok(data.homepageCards[0].image.includes('kw-coilover-adjustable.avif'));
      await cards.first().scrollIntoViewIfNeeded();
      await cards.first().locator('img').evaluate(img => img.decode());
      await cards.first().screenshot({ path: `${output}/preview-homepage-card.png` });
    }
    report.environments.push({ base, ...data });
    await context.close();
  }
  report.googleSerpVisual = 'Data unavailable: no direct Google SERP visual or Search Console URL inspection verified; public search snippets alone do not prove the thumbnail.';
  await writeFile(`${output}/results.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
