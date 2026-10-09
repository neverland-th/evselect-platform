import { test, expect } from 'playwright/test';

test.describe('Responsive navigation and drawer interactions', () => {
  test('Desktop links adapt at 1280px; the shared drawer closes and restores focus', async ({ page }) => {
    await page.goto('/');
    const width = page.viewportSize()?.width ?? 1280;
    const trigger = page.getByRole('button', { name: 'เปิดเมนูหลัก', exact: true });
    const desktopArticles = page.locator('header').getByRole('link', { name: 'บทความ EV', exact: true });
    if (width >= 1280) await expect(desktopArticles).toBeVisible();
    else await expect(desktopArticles).toBeHidden();
    await expect(trigger).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await trigger.click();
    const drawer = page.getByRole('dialog', { name: 'เมนูหลัก', exact: true });
    await expect(drawer).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(drawer.getByRole('link', { name: 'บทความและคู่มือ EV', exact: true })).toHaveAttribute('href', '/articles');
    await expect(drawer.getByRole('link', { name: 'นโยบายบทความ', exact: true })).toHaveAttribute('href', '/editorial-policy');
    await drawer.getByRole('button', { name: 'ปิดเมนูหลัก', exact: true }).click();
    await expect(drawer).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
    await trigger.click();
    await expect(drawer).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(drawer).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
  });

  test('Following a drawer link loads the article index and closes the drawer', async ({ page }) => {
    await page.goto('/');
    const trigger = page.getByRole('button', { name: 'เปิดเมนูหลัก', exact: true });
    await trigger.click();
    const drawer = page.getByRole('dialog', { name: 'เมนูหลัก', exact: true });
    await expect(drawer).toBeVisible();
    await drawer.getByRole('link', { name: 'บทความและคู่มือ EV', exact: true }).click();
    await expect(page).toHaveURL(/\/articles$/);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(drawer).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
