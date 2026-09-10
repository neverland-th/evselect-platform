const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 320, height: 568 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  const header = await page.locator('header > div').first();
  console.log('Header Box:', await header.boundingBox());

  const leftContainer = await page.locator('header > div > div').first();
  console.log('Left Container Box:', await leftContainer.boundingBox());

  const rightContainer = await page.locator('header > div > div').nth(1);
  console.log('Right Container Box:', await rightContainer.boundingBox());
  
  const btn = await page.locator('button[aria-label=\
เปิดเมนู\]');
  console.log('Button Box:', await btn.boundingBox());

  await browser.close();
})();
