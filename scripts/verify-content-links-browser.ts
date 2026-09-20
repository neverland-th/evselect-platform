import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { publicSiteRoutes, pendingPublicRoutes } from '../src/lib/public-site-routes';
import { inspectPage } from './lib/content-links.mjs';

const base = process.env.BASE_URL || 'http://127.0.0.1:4327';
const output = process.env.QA_OUTPUT || 'scratch/content-links-browser';
async function main() {
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.platform === 'win32' ? { channel: 'msedge' } : {}) });
const results = [];
try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    for (const route of [...publicSiteRoutes, ...pendingPublicRoutes]) {
      const page = await context.newPage();
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      assert.equal(response?.status(), 200, route);
      const visibleAnchors = await page.locator('a:visible').evaluateAll(anchors => anchors.map(a => ({
        text: (a.textContent || '').replace(/\s+/g, ' ').trim(), href: a.getAttribute('href'), target: a.getAttribute('target'), rel: a.getAttribute('rel'),
      })));
      const parsed = inspectPage(await page.content(), route);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      // Audit is structural; no claim of full line-by-line editorial or image review.
      if (['/', '/articles/ev-damper-tuning-bump-rebound-guide'].includes(route)) {
        await page.screenshot({ path: path.join(output, `${route === '/' ? 'home' : 'damper'}-${width}.png`), fullPage: false });
        if (route === '/') {
          const banner = page.locator('#coming-soon');
          await banner.scrollIntoViewIfNeeded();
          await banner.screenshot({ path: path.join(output, `banner-${width}.png`) });
        }
      }
      results.push({ route, width, visibleAnchors, structuralIssues: parsed.issues, overflow, errors });
      await page.close();
    }
    await context.close();
  }
  await writeFile(path.join(output, 'results.json'), JSON.stringify({ base, checkedAt: new Date().toISOString(), scope: 'Browser-rendered visible anchors and structural checks, not full editorial review.', results }, null, 2));
  console.log(JSON.stringify({ base, pages: results.length, pageErrors: results.filter(r => r.errors.length).map(r => ({ route: r.route, errors: r.errors })), overflow: results.filter(r => r.overflow).map(r => ({ route: r.route, width: r.width })), output }, null, 2));
} finally { await browser.close(); }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
