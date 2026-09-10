import { test, expect } from 'playwright/test';
import { assertZeroHorizontalScroll } from './utils/scroll-diagnostics';

test.describe('Adversarial Mobile Ergonomics & Focus Trapping Stress Test', () => {
  // Focus Trapping & Drawer Interactivity (Mobile & Tablet: < 1280px)
  test.describe('Focus Trapping & Escape Prevention (< 1280px)', () => {
    test.beforeEach(async ({ page }) => {
      const viewport = page.viewportSize();
      if ((viewport?.width ?? 1280) >= 1280) {
        test.skip();
      }
    });

    test('Off-screen closed drawer is completely inert and never reachable via Tab', async ({ page }) => {
      await page.goto('/');

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).not.toBeVisible();
      await expect(drawer).toHaveAttribute('aria-hidden', 'true');
      await expect(drawer).toHaveAttribute('inert', '');

      // Focus body and press Tab 40 times through the page
      await page.evaluate(() => {
        window.focus();
        document.body.focus();
      });

      for (let step = 0; step < 40; step++) {
        await page.keyboard.press('Tab');
        const isInsideDrawer = await page.evaluate(() => {
          const active = document.activeElement;
          const drawerNav = document.querySelector('nav[aria-label="เมนูหลัก"]');
          return drawerNav ? drawerNav.contains(active) : false;
        });

        expect(
          isInsideDrawer,
          `Tab step ${step}: focus leaked into closed drawer element! Active: ${await page.evaluate(() => document.activeElement?.outerHTML.slice(0, 100))}`
        ).toBe(false);
      }
    });

    test('Opening drawer immediately shifts focus to close button', async ({ page }) => {
      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).toBeVisible();

      // Close button must receive focus automatically
      const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
      await expect(closeBtn).toBeFocused({ timeout: 2000 });
    });

    test('Forward Tab cycling strictly loops within drawer elements (25+ cycles)', async ({ page }) => {
      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).toBeVisible();

      const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
      await expect(closeBtn).toBeFocused();

      // Retrieve all focusable elements inside drawer for strict comparison
      const focusableCount = await page.evaluate(() => {
        const drawerNav = document.querySelector('nav[aria-label="เมนูหลัก"]');
        if (!drawerNav) return 0;
        return drawerNav.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ).length;
      });

      expect(focusableCount).toBeGreaterThanOrEqual(5);

      // Perform 25 Tab presses — every single press MUST remain inside the drawer
      for (let i = 1; i <= 25; i++) {
        await page.keyboard.press('Tab');
        const activeInfo = await page.evaluate(() => {
          const active = document.activeElement;
          const drawerNav = document.querySelector('nav[aria-label="เมนูหลัก"]');
          const isInside = drawerNav ? drawerNav.contains(active) : false;
          return {
            isInside,
            tag: active?.tagName,
            ariaLabel: active?.getAttribute('aria-label'),
            text: active?.textContent?.trim().slice(0, 30),
            href: active?.getAttribute('href'),
          };
        });

        expect(
          activeInfo.isInside,
          `Forward Tab cycle ${i}: focus escaped drawer to <${activeInfo.tag} aria-label="${activeInfo.ariaLabel}"> ${activeInfo.text}`
        ).toBe(true);
      }
    });

    test('Shift+Tab reverse wrapping loops from close button to last interactive link', async ({ page }) => {
      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).toBeVisible();

      const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
      await expect(closeBtn).toBeFocused();

      // From close button (first element), pressing Shift+Tab should wrap to the last interactive link
      await page.keyboard.press('Shift+Tab');

      const activeAfterShiftTab = await page.evaluate(() => {
        const active = document.activeElement;
        const drawerNav = document.querySelector('nav[aria-label="เมนูหลัก"]');
        const isInside = drawerNav ? drawerNav.contains(active) : false;
        const focusable = drawerNav?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const lastEl = focusable ? focusable[focusable.length - 1] : null;
        return {
          isInside,
          isLastElement: active === lastEl,
          text: active?.textContent?.trim().slice(0, 40),
          href: active?.getAttribute('href'),
        };
      });

      expect(activeAfterShiftTab.isInside).toBe(true);
      expect(activeAfterShiftTab.isLastElement, `Expected focus on last element, got: ${activeAfterShiftTab.text} (${activeAfterShiftTab.href})`).toBe(true);

      // Perform 15 more Shift+Tab presses — ensure backward cycling stays inside drawer
      for (let j = 1; j <= 15; j++) {
        await page.keyboard.press('Shift+Tab');
        const isInside = await page.evaluate(() => {
          const drawerNav = document.querySelector('nav[aria-label="เมนูหลัก"]');
          return drawerNav ? drawerNav.contains(document.activeElement) : false;
        });
        expect(isInside, `Backward Shift+Tab cycle ${j}: focus escaped drawer`).toBe(true);
      }
    });

    test('Escape key closes drawer and immediately restores focus to hamburger button', async ({ page }) => {
      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).toBeVisible();

      // Tab twice into drawer links
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      // Press Escape
      await page.keyboard.press('Escape');

      // Drawer must hide
      await expect(drawer).not.toBeVisible();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');

      // Hamburger button must regain focus
      await expect(hamburgerBtn).toBeFocused();
    });

    test('Close button click closes drawer and restores focus to hamburger button', async ({ page }) => {
      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).toBeVisible();

      const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
      await closeBtn.click();

      await expect(drawer).not.toBeVisible();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
      await expect(hamburgerBtn).toBeFocused();
    });
  });

  // Body Scroll Lock Stress Testing
  test.describe('Body Scroll Lock (< 1280px)', () => {
    test.beforeEach(async ({ page }) => {
      const viewport = page.viewportSize();
      if ((viewport?.width ?? 1280) >= 1280) {
        test.skip();
      }
    });

    test('Body overflow is strictly hidden when open and restored when closed', async ({ page }) => {
      await page.goto('/');

      // Verify initial state
      const initialOverflow = await page.evaluate(() => document.body.style.overflow);
      expect(initialOverflow).toBe('');

      // Open drawer
      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      // Verify body style is locked
      const openOverflow = await page.evaluate(() => document.body.style.overflow);
      expect(openOverflow).toBe('hidden');

      // Attempt user scrolling via mouse wheel while drawer is open
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(200);
      const scrollYAfterWheel = await page.evaluate(() => window.scrollY);

      // Also check if documentElement overflow is set or if document still scrolled
      const docElementOverflow = await page.evaluate(() => document.documentElement.style.overflow);

      // Close drawer via Escape
      await page.keyboard.press('Escape');

      // Verify body style is unlocked
      const closedOverflow = await page.evaluate(() => document.body.style.overflow);
      expect(closedOverflow).toBe('');

      // Assert that background cannot be scrolled when drawer is open
      expect(
        scrollYAfterWheel,
        `Page scrolled by ${scrollYAfterWheel}px even though drawer was open! (documentElement overflow was: "${docElementOverflow}")`
      ).toBe(0);
    });
  });

  // Touch Target Bounding Boxes (>= 44x44px or >= 40px)
  test.describe('Touch Target Ergonomics & Bounding Boxes', () => {
    test('Hamburger and close buttons are >= 44x44 px on mobile/tablet', async ({ page }) => {
      const viewport = page.viewportSize();
      if ((viewport?.width ?? 1280) >= 1280) {
        test.skip();
      }

      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      const hamburgerBox = await hamburgerBtn.boundingBox();
      expect(hamburgerBox).not.toBeNull();
      // Allow 0.5px subpixel tolerance
      expect(hamburgerBox!.width).toBeGreaterThanOrEqual(43.5);
      expect(hamburgerBox!.height).toBeGreaterThanOrEqual(43.5);

      // Open drawer to inspect close button
      await hamburgerBtn.click();
      const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
      const closeBox = await closeBtn.boundingBox();
      expect(closeBox).not.toBeNull();
      expect(closeBox!.width).toBeGreaterThanOrEqual(43.5);
      expect(closeBox!.height).toBeGreaterThanOrEqual(43.5);
    });

    test('All drawer links have height >= 44 px', async ({ page }) => {
      const viewport = page.viewportSize();
      if ((viewport?.width ?? 1280) >= 1280) {
        test.skip();
      }

      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).toBeVisible();

      // Query all links inside the drawer
      const links = drawer.locator('a');
      const count = await links.count();
      expect(count).toBeGreaterThanOrEqual(6);

      for (let i = 0; i < count; i++) {
        const link = links.nth(i);
        const text = await link.textContent();
        const box = await link.boundingBox();

        expect(box, `Link "${text?.trim()}" bounding box should exist`).not.toBeNull();
        expect(
          box!.height,
          `Drawer link "${text?.trim()}" height (${box!.height}px) must be >= 44px for finger ergonomics`
        ).toBeGreaterThanOrEqual(43.5);
      }
    });

    test('Storefront footer interactive contact links have height >= 40 px', async ({ page }) => {
      await page.goto('/');

      const footerLinks = page.locator('footer a');
      const count = await footerLinks.count();
      expect(count).toBeGreaterThanOrEqual(3);

      for (let i = 0; i < count; i++) {
        const link = footerLinks.nth(i);
        const text = await link.textContent();
        const box = await link.boundingBox();

        if (box) {
          expect(
            box.height,
            `Footer link "${text?.trim()}" height (${box.height}px) must be >= 40px`
          ).toBeGreaterThanOrEqual(39.5);
        }
      }
    });

    test('Header action buttons (chat, admin switch) meet touch target guidelines on mobile', async ({ page }) => {
      const viewport = page.viewportSize();
      if ((viewport?.width ?? 1280) >= 1280) {
        test.skip();
      }

      await page.goto('/');

      const headerActionLinks = page.locator('header .flex.items-center.gap-2\\.5 a, header .flex.items-center.gap-2\\.5 button');
      const count = await headerActionLinks.count();

      for (let i = 0; i < count; i++) {
        const actionEl = headerActionLinks.nth(i);
        const text = await actionEl.textContent();
        const box = await actionEl.boundingBox();
        if (box) {
          expect(
            box.height,
            `Header action "${text?.trim()}" height (${box.height}px) is below minimum 36px/40px touch ergonomic target`
          ).toBeGreaterThanOrEqual(36);
        }
      }
    });
  });

  // Extreme 320px Viewport Ergonomics (Tables & Responsive Layout)
  test.describe('Extreme 320px Viewport Ergonomics', () => {
    test.beforeEach(async ({ page }) => {
      const viewport = page.viewportSize();
      if (viewport?.width !== 320) {
        test.skip();
      }
    });

    test('Drawer width is strictly responsive min(20rem, 80vw) = 256px on 320px viewport', async ({ page }) => {
      await page.goto('/');

      const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
      await hamburgerBtn.click();

      const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
      await expect(drawer).toBeVisible();

      const drawerBox = await drawer.boundingBox();
      expect(drawerBox).not.toBeNull();

      // 80vw of 320px is 256px
      expect(Math.round(drawerBox!.width)).toBe(256);

      // Remaining 64px is backdrop area accessible for tap-to-dismiss
      const backdropWidth = 320 - drawerBox!.width;
      expect(backdropWidth).toBeGreaterThanOrEqual(60);
    });

    test('Comparison tables swipe horizontally without breaking document width (BYD Seal Review)', async ({ page }) => {
      await page.goto('/articles/byd-seal-review');

      // Assert zero horizontal document scroll first
      await assertZeroHorizontalScroll(page, 'BYD Seal Review at 320px');

      // Locate comparison table regions
      const tableRegions = page.locator('div[role="region"][aria-label*="ตารางเปรียบเทียบ"]');
      const count = await tableRegions.count();
      expect(count).toBeGreaterThanOrEqual(1);

      for (let i = 0; i < count; i++) {
        const region = tableRegions.nth(i);
        const ariaLabel = await region.getAttribute('aria-label');

        // Check region bounds fit within 320px viewport
        const regionBox = await region.boundingBox();
        expect(regionBox).not.toBeNull();
        expect(regionBox!.width).toBeLessThanOrEqual(320);

        // Check inner table has full content width (> 600px)
        const innerTable = region.locator('table');
        const tableBox = await innerTable.boundingBox();
        expect(tableBox).not.toBeNull();
        expect(tableBox!.width).toBeGreaterThanOrEqual(600);

        // Test swipe / horizontal scroll interaction
        const initialScrollLeft = await region.evaluate((el) => el.scrollLeft);
        expect(initialScrollLeft).toBe(0);

        // Scroll 200px right
        await region.evaluate((el) => {
          el.scrollLeft = 200;
        });

        const scrolledLeft = await region.evaluate((el) => el.scrollLeft);
        expect(
          scrolledLeft,
          `Table region "${ariaLabel}" should be scrollable horizontally`
        ).toBeGreaterThanOrEqual(150);

        // Scroll back to start
        await region.evaluate((el) => {
          el.scrollLeft = 0;
        });
      }

      // Re-assert zero document overflow after table interaction
      await assertZeroHorizontalScroll(page, 'BYD Seal Review post table swipe');
    });

    test('Comparison tables swipe horizontally without breaking document width (BYD Atto 3 Review)', async ({ page }) => {
      await page.goto('/articles/byd-atto-3-review');

      await assertZeroHorizontalScroll(page, 'BYD Atto 3 Review at 320px');

      const tableRegions = page.locator('div[role="region"][aria-label*="ตารางเปรียบเทียบ"]');
      const count = await tableRegions.count();
      expect(count).toBeGreaterThanOrEqual(1);

      for (let i = 0; i < count; i++) {
        const region = tableRegions.nth(i);
        const regionBox = await region.boundingBox();
        expect(regionBox!.width).toBeLessThanOrEqual(320);

        await region.evaluate((el) => {
          el.scrollLeft = 180;
        });
        const scrolled = await region.evaluate((el) => el.scrollLeft);
        expect(scrolled).toBeGreaterThanOrEqual(150);
      }
    });

    test('Comparison tables swipe horizontally without breaking document width (Deepal S07 Review)', async ({ page }) => {
      await page.goto('/articles/deepal-s07-review');

      await assertZeroHorizontalScroll(page, 'Deepal S07 Review at 320px');

      const tableRegions = page.locator('div[role="region"][aria-label*="ตารางเปรียบเทียบ"]');
      const count = await tableRegions.count();
      expect(count).toBeGreaterThanOrEqual(1);

      for (let i = 0; i < count; i++) {
        const region = tableRegions.nth(i);
        const regionBox = await region.boundingBox();
        expect(regionBox!.width).toBeLessThanOrEqual(320);

        await region.evaluate((el) => {
          el.scrollLeft = 180;
        });
        const scrolled = await region.evaluate((el) => el.scrollLeft);
        expect(scrolled).toBeGreaterThanOrEqual(150);
      }
    });

    test('No critical text overlapping or clipped elements on 320px homepage', async ({ page }) => {
      await page.goto('/');

      // Check headings and key titles for valid rendering
      const headings = page.locator('h1, h2, h3');
      const hCount = await headings.count();
      expect(hCount).toBeGreaterThanOrEqual(5);

      for (let i = 0; i < hCount; i++) {
        const heading = headings.nth(i);
        const box = await heading.boundingBox();
        if (box) {
          // Every heading must have positive height and width fitting inside 320px
          expect(box.height).toBeGreaterThan(10);
          expect(box.width).toBeLessThanOrEqual(320);
        }
      }
    });
  });
});
