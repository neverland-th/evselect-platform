const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  const header = await page.locator('header > div').first();
  console.log('Header Box 768:', await header.boundingBox());

  const nav = await page.locator('nav').first();
  console.log('Desktop Nav Box 768:', await nav.boundingBox());

  const btn = await page.locator('button[aria-label=\
เปิดเมนู\]');
  console.log('Mobile Menu Btn count 768:', await btn.count());
  
  await browser.close();
})();
