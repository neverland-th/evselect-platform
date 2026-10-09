import { test, expect } from 'playwright/test';
import { assertZeroHorizontalScroll } from './utils/scroll-diagnostics';
import { publicSiteRoutes, pendingPublicRoutes } from '../../src/lib/public-site-routes';

const STOREFRONT_ROUTES = [
  ...publicSiteRoutes,
  ...pendingPublicRoutes,
  '/articles?category=all&segment=city',
  '/articles?category=all&segment=hatchback',
  '/articles?category=all&segment=sedan',
  '/articles?category=all&segment=suv',
  '/articles?category=guides',
  '/articles?category=reviews',
  '/articles?category=suspension',
];

test.describe('Zero Horizontal Scroll & Responsive Layout Integrity', () => {
  for (const route of STOREFRONT_ROUTES) {
    test(`Route ${route} has zero horizontal overflow across viewport`, async ({ page }, testInfo) => {
      await page.goto(route);
      await assertZeroHorizontalScroll(page, `${route} on project ${testInfo.project.name}`);

      // Explicit direct assertion per DISPATCH contract
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth);

      const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth);
      const windowInnerWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyScrollWidth).toBeLessThanOrEqual(windowInnerWidth);
    });
  }
});
