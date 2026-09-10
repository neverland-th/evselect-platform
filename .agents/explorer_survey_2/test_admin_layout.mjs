import { chromium } from 'playwright';

async function testAdmin() {
  const browser = await chromium.launch();
  const viewports = [
    { name: '320px', width: 320, height: 568 },
    { name: '375px', width: 375, height: 667 },
    { name: '768px', width: 768, height: 1024 },
    { name: '1280px', width: 1280, height: 800 },
  ];

  for (const vp of viewports) {
    console.log(`\n=== VIEWPORT ${vp.name} ===`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    await page.goto('http://localhost:3000/vehicles', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const data = await page.evaluate(() => {
      const aside = document.querySelector('aside');
      const main = document.querySelector('main');
      const table = document.querySelector('table');
      const tableWrapper = table ? table.parentElement : null;
      const form = document.querySelector('form');

      return {
        viewportWidth: window.innerWidth,
        aside: aside ? {
          width: aside.offsetWidth,
          rect: aside.getBoundingClientRect(),
          display: window.getComputedStyle(aside).display
        } : null,
        main: main ? {
          width: main.offsetWidth,
          clientWidth: main.clientWidth,
          scrollWidth: main.scrollWidth,
          rect: main.getBoundingClientRect()
        } : null,
        table: table ? {
          width: table.offsetWidth,
          scrollWidth: table.scrollWidth,
          rect: table.getBoundingClientRect()
        } : null,
        tableWrapper: tableWrapper ? {
          overflowX: window.getComputedStyle(tableWrapper).overflowX,
          overflow: window.getComputedStyle(tableWrapper).overflow,
          width: tableWrapper.offsetWidth,
          scrollWidth: tableWrapper.scrollWidth
        } : null,
        form: form ? {
          flexWrap: window.getComputedStyle(form).flexWrap,
          width: form.offsetWidth,
          scrollWidth: form.scrollWidth
        } : null
      };
    });

    console.log(JSON.stringify(data, null, 2));
    await page.close();
  }

  await browser.close();
}

testAdmin().catch(console.error);
