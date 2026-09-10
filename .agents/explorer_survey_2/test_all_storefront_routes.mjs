import { chromium } from 'playwright';

const ALL_STOREFRONT_ROUTES = [
  '/',
  '/articles',
  '/articles/byd-atto-3-review',
  '/articles/byd-seal-review',
  '/articles/deepal-s05-review',
  '/articles/deepal-s07-review',
  '/articles/ev-battery-care',
  '/articles/ev-camber-adjustment-wheel-alignment-guide',
  '/articles/ev-carbon-ceramic-brakes-guide',
  '/articles/ev-damper-tuning-bump-rebound-guide',
  '/articles/ev-horsepower-vs-torque-explained',
  '/articles/ev-performance-driving-techniques',
  '/articles/ev-suspension-tuning-guide',
  '/articles/ev-tyre-and-coilover-selection-guide',
  '/articles/geely-ex2-review',
  '/articles/hybrid-to-ev-chassis-dynamics-transition',
  '/articles/mg4-electric-review',
  '/articles/optimizing-ev-suspension-thai-roads',
  '/articles/shock-absorber-types-monotube-twintube-air-ev',
  '/articles/tesla-model-3-highland-review',
  '/articles/tesla-model-y-l-premium-6-seater-review',
  '/articles/zeekr-009-review',
  '/articles/zeekr-7x-2026-review',
  '/articles/zeekr-x-review',
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
  '/warranty',
  '/product/p1',
];

const VIEWPORTS = [
  { name: '320px', width: 320, height: 568 },
  { name: '375px', width: 375, height: 667 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1280px', width: 1280, height: 800 },
];

async function main() {
  const browser = await chromium.launch();
  const report = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const route of ALL_STOREFRONT_ROUTES) {
      try {
        const response = await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded', timeout: 10000 });
        const status = response ? response.status() : 0;
        await page.waitForTimeout(300);

        const evalResult = await page.evaluate(() => {
          const winW = window.innerWidth;
          const docW = document.documentElement.scrollWidth;
          const bodyW = document.body ? document.body.scrollWidth : 0;

          // Check if any element creates uncontained horizontal scroll outside of overflow wrappers
          let pageHasHScroll = document.documentElement.scrollWidth > window.innerWidth ||
                               document.body.scrollWidth > window.innerWidth;

          // Check for elements that stick out of the viewport and are NOT inside an overflow container
          const uncontainedOverflows = [];
          const allEls = document.querySelectorAll('body *');
          for (const el of allEls) {
            const rect = el.getBoundingClientRect();
            if (rect.right > winW + 2) {
              // Check if inside an overflow container
              let parent = el.parentElement;
              let isContained = false;
              while (parent && parent !== document.body && parent !== document.documentElement) {
                const style = window.getComputedStyle(parent);
                if (style.overflowX === 'auto' || style.overflowX === 'scroll' || style.overflowX === 'hidden' ||
                    style.overflow === 'auto' || style.overflow === 'scroll' || style.overflow === 'hidden') {
                  isContained = true;
                  break;
                }
                parent = parent.parentElement;
              }
              if (!isContained) {
                uncontainedOverflows.push({
                  tag: el.tagName.toLowerCase(),
                  cls: (typeof el.className === 'string' ? el.className : '').split(' ').slice(0, 3).join(' '),
                  rectRight: Math.round(rect.right),
                  excess: Math.round(rect.right - winW)
                });
              }
            }
          }

          // Check hamburger
          const menu = document.querySelector('button[aria-label="เปิดเมนู"]');
          const isMenuVis = menu ? (window.getComputedStyle(menu).display !== 'none' && menu.getBoundingClientRect().width > 0) : false;

          return {
            pageHasHScroll,
            docW,
            bodyW,
            winW,
            uncontainedCount: uncontainedOverflows.length,
            uncontainedOverflows: uncontainedOverflows.slice(0, 3),
            isMenuVis,
          };
        });

        report.push({
          viewport: vp.name,
          route,
          status,
          ...evalResult
        });
      } catch (err) {
        report.push({
          viewport: vp.name,
          route,
          error: err.message
        });
      }
    }
    await context.close();
  }

  await browser.close();
  console.log(JSON.stringify(report, null, 2));
}

main().catch(console.error);
