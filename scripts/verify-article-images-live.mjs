import { chromium } from 'playwright';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const baseUrl = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '');
const articleDir = path.join(process.cwd(), 'src/app/(storefront)/articles');
const articleRoutes = readdirSync(articleDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => `/articles/${entry.name}`);
const cases = [
  { route: '/', expected: [] },
  { route: '/articles', expected: ['zeekr-7x-photo.jpg', 'tesla-model-y-l-photo.jpg', 'porsche-pccb-carbon-ceramic-brakes.jpg'] },
  ...articleRoutes.map((route) => ({
    route,
    expected: route.endsWith('zeekr-7x-2026-review') ? ['zeekr-7x-photo.jpg']
      : route.endsWith('tesla-model-y-l-premium-6-seater-review') ? ['tesla-model-y-l-photo.jpg']
      : route.endsWith('ev-carbon-ceramic-brakes-guide') ? ['porsche-pccb-carbon-ceramic-brakes.jpg', 'endless-m6-owner-model3-installed.jpg', 'endless-m6-owner-front-kit.jpg', 'endless-alvell6-official.jpg', 'project-mu-fs6-official.jpg', 'tesla-plaid-carbon-ceramic-kit.jpg'] : [],
  })),
  ...['/about', '/contact', '/editorial-policy', '/privacy', '/terms', '/warranty']
    .map((route) => ({ route, expected: [] })),
];

const browser = await chromium.launch({ headless: true });
const failures = [];
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    let imageCount = 0;
    for (const { route, expected } of cases) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
      if (response?.status() !== 200) {
        failures.push(`${viewport.width}px ${route}: HTTP ${response?.status() ?? 'no response'}`);
        continue;
      }

      await page.locator('img').evaluateAll((images) => images.forEach((image) => { image.loading = 'eager'; }));
      await page.waitForFunction(() => [...document.images].every((image) => image.complete), null, { timeout: 30000 });
      const images = await page.locator('img').evaluateAll((nodes) => nodes.map((image) => ({
        url: image.currentSrc || image.src,
        width: image.naturalWidth,
        height: image.naturalHeight,
      })));
      imageCount += images.length;
      const broken = images.filter((image) => !image.width || !image.height);
      for (const image of broken) failures.push(`${viewport.width}px ${route}: broken ${image.url}`);
      for (const file of expected) {
        if (!images.some((image) => image.url.includes(file) && image.width > 0)) {
          failures.push(`${viewport.width}px ${route}: expected photograph ${file} not rendered`);
        }
      }
    }
    console.log(`${viewport.width}px: ${cases.length} routes, ${imageCount} image instances checked`);
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
}
