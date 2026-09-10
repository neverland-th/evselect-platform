import { chromium } from 'playwright';

const VIEWPORTS = [
  { name: '320px (iPhone SE 1st)', width: 320, height: 568 },
  { name: '375px (iPhone SE 2nd/3rd)', width: 375, height: 667 },
  { name: '390px (iPhone 12/13/14)', width: 390, height: 844 },
  { name: '768px (iPad Mini/Portrait)', width: 768, height: 1024 },
  { name: '1024px (iPad Pro/Landscape)', width: 1024, height: 768 },
  { name: '1279px (Below XL breakpoint)', width: 1279, height: 800 },
  { name: '1280px (XL breakpoint / Desktop)', width: 1280, height: 800 },
];

const ROUTES = [
  '/',
  '/articles',
  '/articles/zeekr-7x-2026-review',
  '/articles/byd-atto-3-review',
  '/articles/ev-suspension-tuning-guide',
  '/articles/ev-camber-adjustment-wheel-alignment-guide',
  '/about',
  '/vehicles',
  '/products',
  '/categories',
  '/fitment',
  '/export',
];

async function run() {
  const browser = await chromium.launch();
  const results = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const route of ROUTES) {
      const url = `http://localhost:3000${route}`;
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
        await page.waitForTimeout(500);

        const metrics = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const docScrollWidth = docEl.scrollWidth;
          const docClientWidth = docEl.clientWidth;
          const bodyScrollWidth = body ? body.scrollWidth : 0;
          const bodyClientWidth = body ? body.clientWidth : 0;
          const winWidth = window.innerWidth;

          // Find elements causing horizontal overflow
          const overflowingElements = [];
          const allEls = document.querySelectorAll('*');
          for (const el of allEls) {
            const rect = el.getBoundingClientRect();
            // check if element extends past right edge by more than 1px
            if (rect.right > winWidth + 1) {
              const tag = el.tagName.toLowerCase();
              const cls = (typeof el.className === 'string' ? el.className : '').split(' ').slice(0, 3).join(' ');
              const id = el.id ? `#${el.id}` : '';
              overflowingElements.push({
                tag,
                id,
                cls,
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                overflowAmount: Math.round(rect.right - winWidth),
              });
            }
          }

          // Check hamburger menu button
          const menuBtn = document.querySelector('button[aria-label="เปิดเมนู"]');
          let menuVisible = false;
          let menuBox = null;
          if (menuBtn) {
            const r = menuBtn.getBoundingClientRect();
            menuBox = { x: r.x, y: r.y, width: r.width, height: r.height };
            const style = window.getComputedStyle(menuBtn);
            menuVisible = style.display !== 'none' && style.visibility !== 'hidden' && r.width > 0 && r.height > 0;
          }

          return {
            winWidth,
            docScrollWidth,
            docClientWidth,
            bodyScrollWidth,
            bodyClientWidth,
            hasDocOverflow: docScrollWidth > winWidth,
            overflowingElements: overflowingElements.slice(0, 5),
            totalOverflowingEls: overflowingElements.length,
            menuVisible,
            menuBox,
          };
        });

        results.push({
          viewport: vp.name,
          width: vp.width,
          route,
          ...metrics,
        });
      } catch (err) {
        results.push({
          viewport: vp.name,
          width: vp.width,
          route,
          error: err.message,
        });
      }
    }
    await context.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

run().catch(console.error);
