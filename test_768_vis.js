const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  const nav = await page.locator('nav').first();
  console.log('Desktop Nav Visible:', await nav.isVisible());

  const btn = await page.locator('button[aria-label=\
เปิดเมนู\]');
  console.log('Mobile Menu Btn Visible:', await btn.isVisible());
  
  await browser.close();
})();
