import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { publicSiteRoutes, pendingPublicRoutes, supportingPublicRoutes } from '../src/lib/public-site-routes';

// Capture evidence for a real reader review; never generates a "review passed" flag.
async function main() {
  const base = process.env.BASE_URL || 'http://127.0.0.1:4327';
  const output = process.env.QA_OUTPUT || 'scratch/link-reader-review';
  const only = process.env.REVIEW_ROUTES?.split(',');
  const routes = only || [...publicSiteRoutes, ...pendingPublicRoutes, ...supportingPublicRoutes];
  const browser = await chromium.launch({ headless: true, ...(process.platform === 'win32' ? { channel: 'msedge' } : {}) });
  try {
    for (const width of [1440, 390]) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      for (const route of routes) {
        const folder = path.join(output, route === '/' ? 'home' : route.replaceAll('/', '_').slice(1), String(width));
        await mkdir(folder, { recursive: true });
        const page = await context.newPage();
        await page.goto(base + route, { waitUntil: 'networkidle' });
        // Details are deliberately opened for complete reading; interactive widgets are reviewed separately.
        await page.locator('main details').evaluateAll(nodes => nodes.forEach(n => n.setAttribute('open', '')));
        await page.evaluate(async () => {
          for (const image of document.querySelectorAll('main img')) {
            image.setAttribute('loading', 'eager');
            try { await (image as HTMLImageElement).decode(); } catch { /* Recorded below. */ }
          }
          await document.fonts.ready;
        });
        const text = await page.locator('main').innerText();
        await writeFile(path.join(folder, 'rendered-text.txt'), text);
        await page.screenshot({ path: path.join(folder, 'full-page.png'), fullPage: true, animations: 'disabled' });
        if (process.env.REVIEW_TILES === '1') {
          // Real browser viewports with overlap keep Thai text readable for manual review.
          await page.setViewportSize({ width, height: 1400 });
          const bottom = await page.evaluate(() => Math.max(0, document.documentElement.scrollHeight - innerHeight));
          const positions = [...new Set([...Array.from({ length: Math.floor(bottom / 1200) + 1 }, (_, n) => n * 1200), bottom])];
          for (let i = 0; i < positions.length; i++) {
            await page.evaluate(y => window.scrollTo(0, y), positions[i]);
            await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
            await page.screenshot({ path: path.join(folder, `view-${String(i + 1).padStart(2, '0')}.png`), animations: 'disabled' });
          }
          await page.setViewportSize({ width, height: 1000 });
        }
        const media = page.locator('main img, main svg');
        const images = [];
        for (let i = 0; i < await media.count(); i++) {
          const item = media.nth(i);
          const box = await item.boundingBox();
          if (!box || box.width < 120 || box.height < 70 || !(await item.isVisible())) continue;
          await item.scrollIntoViewIfNeeded();
          const record = await item.evaluate(n => ({ tag: n.tagName, src: n.getAttribute('src'), alt: n.getAttribute('alt'), caption: n.closest('figure')?.querySelector('figcaption')?.textContent || '', decoded: !(n instanceof HTMLImageElement) || (n.complete && n.naturalWidth > 0) }));
          const imageFile: string = `image-${String(images.length + 1).padStart(2, '0')}.png`;
          await item.screenshot({ path: path.join(folder, imageFile), animations: 'disabled' });
          images.push({ ...record, file: imageFile });
        }
        await writeFile(path.join(folder, 'evidence.json'), JSON.stringify({ url: base + route, width, checkedAt: new Date().toISOString(), characters: text.length, images, reviewStatus: 'Captured only. Awaiting actual line-by-line and image inspection.' }, null, 2));
        console.log(JSON.stringify({ route, width, characters: text.length, images: images.length, failedImages: images.filter(i => !i.decoded).length }));
        await page.close();
      }
      await context.close();
    }
  } finally { await browser.close(); }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
