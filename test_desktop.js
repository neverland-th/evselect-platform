const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1024, height: 768 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  const btn = await page.locator('button[aria-label=\
เปิดเมนู\]');
  console.log('Button count:', await btn.count());
  if (await btn.count() > 0) {
    console.log('Is Visible:', await btn.isVisible());
  }
  
  await browser.close();
})();
