const { chromium } = require('playwright');

const articles = [
  "byd-atto-3-review",
  "byd-seal-review",
  "deepal-s05-review",
  "deepal-s07-review",
  "ev-battery-care",
  "ev-camber-adjustment-wheel-alignment-guide",
  "ev-carbon-ceramic-brakes-guide",
  "ev-damper-tuning-bump-rebound-guide",
  "ev-horsepower-vs-torque-explained",
  "ev-performance-driving-techniques",
  "ev-suspension-tuning-guide",
  "ev-tyre-and-coilover-selection-guide",
  "geely-ex2-review",
  "hybrid-to-ev-chassis-dynamics-transition",
  "mg4-electric-review",
  "optimizing-ev-suspension-thai-roads",
  "shock-absorber-types-monotube-twintube-air-ev",
  "tesla-model-3-highland-review",
  "tesla-model-y-l-premium-6-seater-review",
  "zeekr-009-review",
  "zeekr-7x-2026-review",
  "zeekr-x-review"
];

const viewports = [320, 360, 390, 768];

(async () => {
  const browser = await chromium.launch();
  const overflows = [];

  for (const w of viewports) {
    const context = await browser.newContext({ viewport: { width: w, height: 800 } });
    const page = await context.newPage();

    for (const slug of articles) {
      const url = `http://localhost:3000/articles/${slug}`;
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 5000 });
        await page.waitForTimeout(300);

        const check = await page.evaluate(() => {
          const docW = document.documentElement.scrollWidth;
          const bodyW = document.body.scrollWidth;
          const winW = window.innerWidth;
          let offending = null;

          if (docW > winW || bodyW > winW) {
            for (const el of document.querySelectorAll('*')) {
              const r = el.getBoundingClientRect();
              if (r.right > winW + 1) {
                offending = {
                  tag: el.tagName.toLowerCase(),
                  cls: (el.className || '').toString().slice(0, 40),
                  right: Math.round(r.right),
                  width: Math.round(r.width)
                };
                break;
              }
            }
          }

          return { docW, bodyW, winW, offending };
        });

        if (check.docW > check.winW || check.bodyW > check.winW) {
          overflows.push({ width: w, slug, ...check });
        }
      } catch (err) {
        overflows.push({ width: w, slug, error: err.message });
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('OVERFLOW_REPORT:', JSON.stringify(overflows, null, 2));
})();
