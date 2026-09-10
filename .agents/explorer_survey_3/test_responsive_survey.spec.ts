import { test, expect } from 'playwright/test';

const ROUTES = [
  '/',
  '/articles',
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
  '/warranty',
  '/articles/byd-atto-3-review',
  '/articles/tesla-model-3-highland-review',
];

const VIEWPORTS = [
  { name: 'extreme-mobile-320', width: 320, height: 568 },
  { name: 'android-mobile-360', width: 360, height: 800 },
  { name: 'ios-mobile-390', width: 390, height: 844 },
  { name: 'tablet-portrait-768', width: 768, height: 1024 },
  { name: 'tablet-landscape-1024', width: 1024, height: 768 },
  { name: 'below-xl-boundary-1279', width: 1279, height: 800 },
  { name: 'desktop-xl-1280', width: 1280, height: 800 },
  { name: 'desktop-wide-1440', width: 1440, height: 900 },
];

test.describe('Responsive Survey & Overflow Detection', () => {
  for (const vp of VIEWPORTS) {
    test.describe(`Viewport ${vp.name} (${vp.width}x${vp.height})`, () => {
      for (const route of ROUTES) {
        test(`Route ${route} has zero horizontal scroll`, async ({ page }) => {
          await page.setViewportSize({ width: vp.width, height: vp.height });
          await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded' });
          await page.waitForTimeout(500); // Allow layout/hydration

          const scrollCheck = await page.evaluate(() => {
            const docWidth = document.documentElement.scrollWidth;
            const bodyWidth = document.body.scrollWidth;
            const windowWidth = window.innerWidth;
            const docScrolls = docWidth > windowWidth;
            const bodyScrolls = bodyWidth > windowWidth;
            
            // Find offending elements if overflow exists
            const offendingElements: string[] = [];
            if (docScrolls || bodyScrolls) {
              const allElements = document.querySelectorAll('*');
              for (const el of allElements) {
                const rect = el.getBoundingClientRect();
                if (rect.right > windowWidth + 1) { // 1px threshold for rounding
                  const tag = el.tagName.toLowerCase();
                  const cls = typeof el.className === 'string' ? el.className.slice(0, 50) : '';
                  const id = el.id ? `#${el.id}` : '';
                  offendingElements.push(`${tag}${id}.${cls} (right: ${Math.round(rect.right)}, width: ${Math.round(rect.width)})`);
                  if (offendingElements.length >= 5) break;
                }
              }
            }

            return {
              windowWidth,
              docWidth,
              bodyWidth,
              hasOverflow: docScrolls || bodyScrolls,
              offendingElements
            };
          });

          if (scrollCheck.hasOverflow) {
            console.warn(`[OVERFLOW DETECTED] Route: ${route} @ ${vp.width}px. docWidth: ${scrollCheck.docWidth}, bodyWidth: ${scrollCheck.bodyWidth}, windowWidth: ${scrollCheck.windowWidth}. Offenders:`, scrollCheck.offendingElements);
          }

          expect(scrollCheck.docWidth, `Doc width ${scrollCheck.docWidth} must be <= window width ${scrollCheck.windowWidth} on ${route} (${vp.name})`).toBeLessThanOrEqual(scrollCheck.windowWidth);
          expect(scrollCheck.bodyWidth, `Body width ${scrollCheck.bodyWidth} must be <= window width ${scrollCheck.windowWidth} on ${route} (${vp.name})`).toBeLessThanOrEqual(scrollCheck.windowWidth);
        });
      }

      // Test mobile menu visibility and interaction on viewports < 1280
      test(`Navigation controls on ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });

        const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
        const desktopNav = page.locator('header nav:not([aria-label="เมนูหลัก"])');

        if (vp.width < 1280) {
          // Expect hamburger visible and desktop nav hidden
          await expect(hamburgerBtn).toBeVisible();
          await expect(desktopNav).toBeHidden();

          // Interactivity test: Click to open drawer
          await hamburgerBtn.click();
          const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
          await expect(drawer).toBeVisible();
          await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'true');

          // Check drawer links exist and are clickable
          const articlesLink = drawer.locator('a:has-text("บทความ EV")');
          await expect(articlesLink).toBeVisible();

          // Test close button
          const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
          await expect(closeBtn).toBeVisible();
          await closeBtn.click();
          await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
        } else {
          // Expect hamburger hidden and desktop nav visible
          await expect(hamburgerBtn).toBeHidden();
          await expect(desktopNav).toBeVisible();
        }
      });
    });
  }
});
