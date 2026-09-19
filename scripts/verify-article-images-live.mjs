import { chromium } from 'playwright';

const baseUrl = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '');
const cases = [
  { route: '/articles', expected: ['zeekr-7x-photo.jpg', 'tesla-model-y-l-photo.jpg'] },
  { route: '/articles/zeekr-7x-2026-review', expected: ['zeekr-7x-photo.jpg'] },
  { route: '/articles/tesla-model-y-l-premium-6-seater-review', expected: ['tesla-model-y-l-photo.jpg'] },
];

const browser = await chromium.launch({ headless: true });
const failures = [];
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
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
      const broken = images.filter((image) => !image.width || !image.height);
      for (const image of broken) failures.push(`${viewport.width}px ${route}: broken ${image.url}`);
      for (const file of expected) {
        if (!images.some((image) => image.url.includes(file) && image.width > 0)) {
          failures.push(`${viewport.width}px ${route}: expected photograph ${file} not rendered`);
        }
      }
      console.log(`${viewport.width}px ${route}: ${images.length} images, ${broken.length} broken`);
    }
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
}
