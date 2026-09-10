import { test, expect } from 'playwright/test';

test.describe('Responsive Navigation & Drawer Interactivity', () => {
  test('Storefront header adapts navigation mode according to 1280px breakpoint', async ({ page }) => {
    await page.goto('/');

    const viewport = page.viewportSize();
    const viewportWidth = viewport?.width ?? 1280;
    const isMobileOrTablet = viewportWidth < 1280;

    const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
    const desktopNav = page.locator('header nav:not([aria-label="เมนูหลัก"])');

    if (isMobileOrTablet) {
      // 1. Mobile & Tablet (< 1280px): Hamburger must be visible and desktop nav hidden
      await expect(hamburgerBtn, `Hamburger button must be visible at ${viewportWidth}px`).toBeVisible();
      await expect(desktopNav, `Desktop navigation must be hidden at ${viewportWidth}px`).not.toBeVisible();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');

      // 2. Open drawer via hamburger click
      await hamburgerBtn.click();
      const drawer = page.getByRole('navigation', { name: 'เมนูหลัก' });
      await expect(drawer).toBeVisible();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'true');

      // 3. Verify drawer navigational links exist, are visible, and have valid hrefs
      const articlesLink = drawer.getByRole('link', { name: 'บทความ EV' });
      await expect(articlesLink).toBeVisible();
      await expect(articlesLink).toHaveAttribute('href', '/articles');

      const aboutLink = drawer.getByRole('link', { name: 'เกี่ยวกับ EVSELECT' });
      await expect(aboutLink).toBeVisible();
      await expect(aboutLink).toHaveAttribute('href', '/about');

      const privacyLink = drawer.getByRole('link', { name: 'นโยบายความเป็นส่วนตัว' });
      await expect(privacyLink).toBeVisible();
      await expect(privacyLink).toHaveAttribute('href', '/privacy');

      // 4. Verify closing via close button ('ปิดเมนู' exact match)
      const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
      await expect(closeBtn).toBeVisible();
      await closeBtn.click();

      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
      await expect(drawer).not.toBeVisible();

      // 5. Verify closing via Escape key restores focus
      await hamburgerBtn.click();
      await expect(drawer).toBeVisible();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'true');

      await page.keyboard.press('Escape');
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
      await expect(drawer).not.toBeVisible();

      // Verify focus returned to trigger button
      await expect(hamburgerBtn).toBeFocused();
    } else {
      // Desktop (>= 1280px): Hamburger hidden, desktop nav visible
      await expect(hamburgerBtn, `Hamburger button must be hidden at ${viewportWidth}px`).not.toBeVisible();
      await expect(desktopNav, `Desktop navigation must be visible at ${viewportWidth}px`).toBeVisible();

      // Verify desktop navigation links are accessible
      const desktopArticlesLink = desktopNav.getByRole('link', { name: 'บทความ EV' });
      await expect(desktopArticlesLink).toBeVisible();
      await expect(desktopArticlesLink).toHaveAttribute('href', '/articles');
    }
  });

  test('Drawer link navigation closes drawer properly', async ({ page }) => {
    const viewport = page.viewportSize();
    const viewportWidth = viewport?.width ?? 1280;

    // Only applicable on mobile/tablet viewports
    if (viewportWidth >= 1280) {
      test.skip();
      return;
    }

    await page.goto('/');

    const hamburgerBtn = page.locator('button[aria-label="เปิดเมนู"]');
    await hamburgerBtn.click();

    const drawer = page.getByRole('navigation', { name: 'เมนูหลัก' });
    await expect(drawer).toBeVisible();

    const aboutLink = drawer.getByRole('link', { name: 'เกี่ยวกับ EVSELECT' });
    await aboutLink.click();

    // After clicking internal route, navigation occurs and drawer closes
    await page.waitForURL('**/about');
    await expect(page).toHaveURL(/\/about/);
    await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(drawer).not.toBeVisible();
  });
});
