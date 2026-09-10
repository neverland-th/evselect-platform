import { test, expect } from 'playwright/test';
import { assertZeroHorizontalScroll } from './utils/scroll-diagnostics';

const STOREFRONT_ROUTES = [
  // Primary storefront entry points
  '/',
  '/articles',

  // Information & Legal pages
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
  '/warranty',

  // All 22 Vehicle Review & Technical Editorial Articles
  '/articles/byd-atto-3-review',
  '/articles/byd-seal-review',
  '/articles/deepal-s05-review',
  '/articles/deepal-s07-review',
  '/articles/ev-battery-care',
  '/articles/ev-camber-adjustment-wheel-alignment-guide',
  '/articles/ev-carbon-ceramic-brakes-guide',
  '/articles/ev-damper-tuning-bump-rebound-guide',
  '/articles/ev-horsepower-vs-torque-explained',
  '/articles/ev-performance-driving-techniques',
  '/articles/ev-suspension-tuning-guide',
  '/articles/ev-tyre-and-coilover-selection-guide',
  '/articles/geely-ex2-review',
  '/articles/hybrid-to-ev-chassis-dynamics-transition',
  '/articles/mg4-electric-review',
  '/articles/optimizing-ev-suspension-thai-roads',
  '/articles/shock-absorber-types-monotube-twintube-air-ev',
  '/articles/tesla-model-3-highland-review',
  '/articles/tesla-model-y-l-premium-6-seater-review',
  '/articles/zeekr-009-review',
  '/articles/zeekr-7x-2026-review',
  '/articles/zeekr-x-review',
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
