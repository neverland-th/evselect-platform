const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 320, height: 568 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  const btn = await page.locator('button[aria-label=\
เปิดเมนู\]');
  if (await btn.count() > 0) {
    const box = await btn.boundingBox();
    console.log('Button Box:', box);
    const visible = await btn.isVisible();
    console.log('Is Visible:', visible);
  } else {
    console.log('Button not found');
  }
  await browser.close();
})();
