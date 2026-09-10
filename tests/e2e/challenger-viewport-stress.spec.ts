import { test, expect } from 'playwright/test';

export const ADVERSARIAL_VIEWPORTS = [
  { name: '280px (Galaxy Fold narrow)', width: 280, height: 653 },
  { name: '320px (iPhone SE 1st gen)', width: 320, height: 568 },
  { name: '360px (Samsung Galaxy)', width: 360, height: 800 },
  { name: '375px (iPhone standard)', width: 375, height: 667 },
  { name: '390px (iPhone 13/14/15)', width: 390, height: 844 },
  { name: '412px (Pixel / Galaxy S-series)', width: 412, height: 915 },
  { name: '768px (iPad portrait)', width: 768, height: 1024 },
  { name: '820px (iPad Air portrait)', width: 820, height: 1180 },
  { name: '1024px (iPad landscape)', width: 1024, height: 768 },
  { name: '1279px (Boundary < 1280px)', width: 1279, height: 800 },
  { name: '1280px (Boundary >= 1280px)', width: 1280, height: 800 },
  { name: '1440px (Desktop wide)', width: 1440, height: 900 },
  { name: '1920px (Full HD desktop)', width: 1920, height: 1080 },
];

export const STOREFRONT_ROUTES = [
  '/',
  '/articles',
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
  '/warranty',
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
  '/product/cmt9vn58i000kr8cqoeld55g5',
];

export const ADMIN_ROUTES = [
  '/products',
  '/vehicles',
  '/categories',
  '/fitment',
  '/export',
  '/products/cmt9vn58i000kr8cqoeld55g5',
];

test.describe('Challenger Adversarial Stress Testing — 13 Viewports', () => {
  test.setTimeout(120000);

  test.describe('1. Navigation & Header Breakpoint Mode (1280px)', () => {
    for (const vp of ADVERSARIAL_VIEWPORTS) {
      test(`Navigation contract at ${vp.name} (${vp.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');

        const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
        const desktopNav = page.locator('header nav:not([aria-label="เมนูหลัก"])');

        if (vp.width < 1280) {
          // Assert hamburger is visible
          await expect(
            hamburgerBtn,
            `Expected hamburger button to be visible at ${vp.width}px`
          ).toBeVisible();

          // Assert desktop nav is hidden
          await expect(
            desktopNav,
            `Expected desktop nav to NOT be visible at ${vp.width}px`
          ).not.toBeVisible();

          // Assert hamburger is interactive
          await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
          await hamburgerBtn.click();

          const drawer = page.getByRole('navigation', { name: 'เมนูหลัก' });
          await expect(
            drawer,
            `Expected drawer nav to be visible after click at ${vp.width}px`
          ).toBeVisible();
          await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'true');

          // Close drawer
          const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
          await expect(closeBtn).toBeVisible();
          await closeBtn.click();
          await expect(drawer).not.toBeVisible();
          await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
        } else {
          // Assert hamburger is hidden >= 1280px
          await expect(
            hamburgerBtn,
            `Expected hamburger button to NOT be visible at ${vp.width}px`
          ).not.toBeVisible();

          // Assert desktop nav is visible >= 1280px
          await expect(
            desktopNav,
            `Expected desktop nav to be visible at ${vp.width}px`
          ).toBeVisible();
        }
      });
    }
  });

  test.describe('2. Storefront Zero Horizontal Overflow per Viewport', () => {
    for (const vp of ADVERSARIAL_VIEWPORTS) {
      test(`All 30 storefront routes at ${vp.name} (${vp.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });

        const violations: Array<{
          route: string;
          docScrollWidth: number;
          clientWidth: number;
          bodyScrollWidth: number;
          innerWidth: number;
          offending: any[];
        }> = [];

        for (const route of STOREFRONT_ROUTES) {
          await page.goto(route);
          await page.waitForLoadState('domcontentloaded');

          const diag = await page.evaluate(() => {
            const innerWidth = window.innerWidth;
            const docScrollWidth = document.documentElement.scrollWidth;
            const bodyScrollWidth = document.body.scrollWidth;
            const clientWidth = document.documentElement.clientWidth;

            const overflows = docScrollWidth > clientWidth || bodyScrollWidth > innerWidth;

            const offending: Array<{
              tag: string;
              id: string;
              className: string;
              rectRight: number;
              rectWidth: number;
            }> = [];

            if (overflows) {
              const elements = document.querySelectorAll('*');
              for (const el of elements) {
                const rect = el.getBoundingClientRect();
                if (rect.right > innerWidth + 1) {
                  let p = el.parentElement;
                  let contained = false;
                  while (p && p !== document.body && p !== document.documentElement) {
                    const s = window.getComputedStyle(p);
                    if (['auto', 'scroll', 'hidden', 'clip'].includes(s.overflowX)) {
                      contained = true;
                      break;
                    }
                    p = p.parentElement;
                  }
                  if (!contained) {
                    offending.push({
                      tag: el.tagName.toLowerCase(),
                      id: el.id,
                      className: typeof el.className === 'string' ? el.className.slice(0, 80) : '',
                      rectRight: Math.round(rect.right),
                      rectWidth: Math.round(rect.width),
                    });
                    if (offending.length >= 5) break;
                  }
                }
              }
            }

            return {
              innerWidth,
              clientWidth,
              docScrollWidth,
              bodyScrollWidth,
              overflows,
              offending,
            };
          });

          if (diag.overflows) {
            violations.push({
              route,
              docScrollWidth: diag.docScrollWidth,
              clientWidth: diag.clientWidth,
              bodyScrollWidth: diag.bodyScrollWidth,
              innerWidth: diag.innerWidth,
              offending: diag.offending,
            });
          }
        }

        const msg = `Found ${violations.length} route(s) with horizontal overflow at ${vp.name} (${vp.width}px):\n` +
          JSON.stringify(violations, null, 2);

        expect(violations.length, msg).toBe(0);
      });
    }
  });

  test.describe('3. Admin Routes Zero Horizontal Overflow per Viewport', () => {
    for (const vp of ADVERSARIAL_VIEWPORTS) {
      test(`All 5 admin routes at ${vp.name} (${vp.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });

        const violations: Array<{
          route: string;
          docScrollWidth: number;
          clientWidth: number;
          bodyScrollWidth: number;
          innerWidth: number;
        }> = [];

        for (const route of ADMIN_ROUTES) {
          await page.goto(route);
          await page.waitForLoadState('domcontentloaded');

          const diag = await page.evaluate(() => {
            const innerWidth = window.innerWidth;
            const docScrollWidth = document.documentElement.scrollWidth;
            const bodyScrollWidth = document.body.scrollWidth;
            const clientWidth = document.documentElement.clientWidth;

            const overflows = docScrollWidth > clientWidth || bodyScrollWidth > innerWidth;

            return {
              innerWidth,
              clientWidth,
              docScrollWidth,
              bodyScrollWidth,
              overflows,
            };
          });

          if (diag.overflows) {
            violations.push({
              route,
              docScrollWidth: diag.docScrollWidth,
              clientWidth: diag.clientWidth,
              bodyScrollWidth: diag.bodyScrollWidth,
              innerWidth: diag.innerWidth,
            });
          }
        }

        const msg = `Found ${violations.length} admin route(s) with horizontal overflow at ${vp.name} (${vp.width}px):\n` +
          JSON.stringify(violations, null, 2);

        expect(violations.length, msg).toBe(0);
      });
    }
  });
});
