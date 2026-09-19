import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { chromium } from 'playwright';
import { pendingPublicRoutes, publicSiteRoutes, siteOrigin } from '../src/lib/public-site-routes';
import { brakeArticle } from '../src/lib/brake-article';

async function main() {
  const base = (process.env.BASE_URL || 'http://localhost:4320').replace(/\/$/, '');
  const publishedArticles = readdirSync('src/app/(storefront)/articles', { withFileTypes: true })
    .filter(entry => entry.isDirectory()).map(entry => `/articles/${entry.name}`).sort();
  assert.deepEqual(publicSiteRoutes.filter(route => route.startsWith('/articles/')).sort(), publishedArticles, 'Every article must have an explicit sitemap entry');
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext();
    const parser = await context.newPage();
    const response = await context.request.get(base + '/sitemap.xml');
    assert.equal(response.status(), 200);
    assert.match(response.headers()['content-type'], /xml/);
    const xml = await response.text();
    const entries = await parser.evaluate(xml => {
      const doc = new DOMParser().parseFromString(xml, 'application/xml');
      if (doc.querySelector('parsererror')) throw new Error('Malformed sitemap XML');
      return [...doc.querySelectorAll('url')].map(entry => ({
        url: entry.querySelector('loc')?.textContent,
        modified: entry.querySelector('lastmod')?.textContent,
      }));
    }, xml);
    assert.deepEqual(entries.map(entry => entry.url).sort(), publicSiteRoutes.map(route => siteOrigin + route).sort());
    assert.equal(new Set(entries.map(entry => entry.url)).size, entries.length);
    assert.equal(entries.find(entry => entry.url === brakeArticle.url)?.modified, brakeArticle.updatedAt);
    const robotsResponse = await context.request.get(base + '/robots.txt');
    assert.equal(robotsResponse.status(), 200);
    assert.match(robotsResponse.headers()['content-type'], /text\/plain/);
    const robots = await robotsResponse.text();
    assert.match(robots, /^User-Agent: \*$/im);
    assert.match(robots, /^Allow: \/$/im);
    assert.doesNotMatch(robots, /^Disallow: \/$/im);
    assert.match(robots, /^Sitemap: https:\/\/evselects\.com\/sitemap\.xml$/im);
    for (const blocked of ['/api/', '/products', '/product/', '/categories', '/vehicles', '/fitment', '/dealers', '/export', '/competitors']) {
      assert.ok(robots.split(/\r?\n/).some(line => line === `Disallow: ${blocked}`), blocked);
    }
    const checks = [];
    for (const route of [...publicSiteRoutes, ...pendingPublicRoutes]) {
      const result = await context.request.get(base + route);
      assert.equal(result.status(), 200, route);
      assert.doesNotMatch(result.headers()['x-robots-tag'] || '', /noindex/i, route);
      const head = await parser.evaluate(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return {
          canonical: doc.querySelector('link[rel="canonical"]')?.getAttribute('href'),
          robots: doc.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
        };
      }, await result.text());
      assert.equal(new URL(head.canonical || '').href, new URL(siteOrigin + route).href, `Canonical for ${route}`);
      if ((pendingPublicRoutes as readonly string[]).includes(route)) assert.match(head.robots, /noindex/, route);
      else assert.doesNotMatch(head.robots, /noindex/, route);
      checks.push({ route, status: 200, canonical: head.canonical, indexedInSitemap: (publicSiteRoutes as readonly string[]).includes(route) });
    }
    console.log(JSON.stringify({ base, checkedAt: new Date().toISOString(), sitemapUrls: entries.length, pendingExcluded: pendingPublicRoutes.length, robots: true, checks }, null, 2));
  } finally { await browser.close(); }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
