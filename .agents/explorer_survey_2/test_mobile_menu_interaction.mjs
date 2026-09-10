import { chromium } from 'playwright';

async function testMobileMenu() {
  const browser = await chromium.launch();
  const viewports = [
    { name: '320px', width: 320, height: 568 },
    { name: '768px', width: 768, height: 1024 },
    { name: '1279px', width: 1279, height: 800 },
    { name: '1280px', width: 1280, height: 800 }
  ];

  for (const vp of viewports) {
    console.log(`\nTesting Mobile Menu on ${vp.name}...`);
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(300);

    const btn = page.locator('button[aria-label="เปิดเมนู"]');
    const isVis = await btn.isVisible();
    console.log(`- Hamburger button visible: ${isVis}`);

    if (vp.width < 1280) {
      if (!isVis) {
        console.error(`FAIL: Hamburger menu should be visible on ${vp.name}`);
      } else {
        // Click to open
        await btn.click();
        await page.waitForTimeout(350);

        const drawer = page.locator('nav[aria-label="เมนูหลัก"]');
        const drawerVis = await drawer.isVisible();
        const drawerBox = await drawer.boundingBox();
        console.log(`- Drawer opened: ${drawerVis}, width: ${drawerBox?.width}px, x: ${drawerBox?.x}`);

        // Check close button
        const closeBtn = page.locator('button[aria-label="ปิดเมนู"]');
        console.log(`- Close button visible: ${await closeBtn.isVisible()}`);

        // Check drawer links count
        const links = drawer.locator('a');
        const linkCount = await links.count();
        console.log(`- Drawer links count: ${linkCount}`);

        // Close drawer
        await closeBtn.click();
        await page.waitForTimeout(350);
        const drawerAfterCloseBox = await drawer.boundingBox();
        console.log(`- Drawer after close x: ${drawerAfterCloseBox?.x} (should be negative)`);
      }
    } else {
      console.log(`- Desktop nav visible: ${await page.locator('nav').first().isVisible()}`);
    }
    await context.close();
  }

  await browser.close();
}

testMobileMenu().catch(console.error);
