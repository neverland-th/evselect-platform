import { chromium } from 'playwright';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const base = process.env.BASE_URL || 'https://evselect-platform-edt74n453-evselect-com.vercel.app';
const output = path.resolve(process.env.QA_OUTPUT || 'scratch/skyscraper-baseline');
const route = '/articles/ev-damper-tuning-bump-rebound-guide';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const report = { base, checkedAt: new Date().toISOString(), method: 'Direct HTTP and isolated Edge/Playwright. 390x844, no throttling. Single-run lab observations, not field Core Web Vitals, Google rankings or SEOmatic scores.' };
try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.__lab = { lcp: null, cls: 0 };
    new PerformanceObserver(list => { for (const item of list.getEntries()) window.__lab.lcp = item.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver(list => { for (const item of list.getEntries()) if (!item.hadRecentInput) window.__lab.cls += item.value; }).observe({ type: 'layout-shift', buffered: true });
  });
  const raw = await context.request.get(base + route);
  const html = await raw.text();
  const rawCanonical = html.match(/<link[^>]*rel="canonical"[^>]*>/)?.[0];
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(base + route, { waitUntil: 'networkidle' });
  report.article = await page.evaluate(() => {
    const main = document.querySelector('main article');
    const clone = main.cloneNode(true);
    clone.querySelectorAll('script').forEach(node => node.remove());
    const nav = performance.getEntriesByType('navigation')[0];
    const resources = performance.getEntriesByType('resource');
    return {
      title: document.title, description: document.querySelector('meta[name="description"]')?.content,
      language: document.documentElement.lang, h1: [...document.querySelectorAll('h1')].map(n => n.innerText),
      headings: [...main.querySelectorAll('h2')].map(n => n.innerText), canonical: document.querySelector('link[rel="canonical"]')?.href,
      robotsMeta: document.querySelector('meta[name="robots"]')?.content || null,
      structuredTypes: [...document.querySelectorAll('script[type="application/ld+json"]')].map(n => JSON.parse(n.textContent)['@type']),
      ogImage: document.querySelector('meta[property="og:image"]')?.content,
      contentText: clone.textContent.replace(/\s+/g, ' ').trim(),
      internalLinks: [...main.querySelectorAll('a[href^="/"]')].map(n => n.getAttribute('href')),
      externalSources: [...new Set([...main.querySelectorAll('a[href^="https"]')].map(n => n.href))],
      imageCount: main.querySelectorAll('img').length, radioCount: main.querySelectorAll('input[type="radio"]').length,
      faqCount: main.querySelectorAll('#faq details').length, exampleCount: main.querySelectorAll('#examples details').length,
      lab: { dclMs: nav.domContentLoadedEventEnd, loadMs: nav.loadEventEnd, lcpMs: window.__lab.lcp, observedLayoutShiftSum: window.__lab.cls, firstPartyJsEncodedBytes: resources.filter(r => r.initiatorType === 'script' && r.name.startsWith(location.origin)).reduce((sum, r) => sum + r.encodedBodySize, 0) },
      viewport: { width: innerWidth, height: innerHeight }, overflow: document.documentElement.scrollWidth > innerWidth + 1,
    };
  });
  report.article.contentSha256 = createHash('sha256').update(report.article.contentText).digest('hex');
  await writeFile(path.join(output, 'article-text.txt'), report.article.contentText);
  delete report.article.contentText;
  report.article.http = { status: raw.status(), xRobotsTag: raw.headers()['x-robots-tag'] || null, rawCanonical };
  report.article.errors = errors;
  await page.screenshot({ path: path.join(output, 'mobile-top.png') });
  report.discovery = {};
  for (const file of ['/robots.txt', '/sitemap.xml']) {
    const response = await context.request.get(base + file);
    const text = await response.text();
    report.discovery[file] = { status: response.status(), contentType: response.headers()['content-type'], includesArticle: text.includes(route), excerpt: text.slice(0, 1400) };
  }
  const production = await context.newPage();
  await production.goto('https://evselects.com' + route, { waitUntil: 'domcontentloaded' });
  const productionText = await production.locator('main article').first().textContent();
  report.production = { url: production.url(), title: await production.title(), h1: await production.locator('h1').allTextContents(), articleSha256: createHash('sha256').update(productionText).digest('hex') };
  await context.close();
  await writeFile(path.join(output, 'audit.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
