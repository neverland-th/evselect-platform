const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  const nav = await page.locator('nav').first();
  console.log('Desktop Nav display:', await nav.evaluate(el => window.getComputedStyle(el).display));

  const btn = await page.locator('button[aria-label=\
เปิดเมนู\]');
  console.log('Btn parent display:', await btn.evaluate(el => window.getComputedStyle(el.parentElement).display));
  
  await browser.close();
})();
