const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  const nav = await page.locator('nav').first();
  const navDisplay = await nav.evaluate(el => window.getComputedStyle(el).display);
  console.log('Nav display:', navDisplay);

  const btn = await page.locator('button[aria-label=\
เปิดเมนู\]');
  const btnDisplay = await btn.evaluate(el => window.getComputedStyle(el).display);
  console.log('Btn display:', btnDisplay);

  const btnParentDisplay = await btn.evaluate(el => window.getComputedStyle(el.parentElement).display);
  console.log('Btn Parent display:', btnParentDisplay);
  
  await browser.close();
})();
