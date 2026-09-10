const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 320, height: 568 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  
  const svg = await page.locator('button[aria-label=\
เปิดเมนู\] svg');
  const svgHtml = await svg.evaluate(el => el.outerHTML);
  console.log('SVG HTML:', svgHtml);

  await browser.close();
})();
