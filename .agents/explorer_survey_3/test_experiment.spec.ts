import { test, expect } from 'playwright/test';

test('homepage has title and loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/EVSELECT/);
});
