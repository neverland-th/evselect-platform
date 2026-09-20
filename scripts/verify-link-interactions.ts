import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium, type Page } from 'playwright';
import { publicSiteRoutes, pendingPublicRoutes, supportingPublicRoutes } from '../src/lib/public-site-routes';
import { webLinkProps } from '../src/lib/link-policy';

const base = (process.env.BASE_URL || 'http://127.0.0.1:4327').replace(/\/$/, '');
const output = process.env.QA_OUTPUT || 'scratch/link-interactions';
const evidence: unknown[] = [];

async function checkLinks(page: Page, state: string) {
  const anchors = await page.locator('a:visible').evaluateAll(nodes => nodes.map(node => ({
    href: node.getAttribute('href') || '', text: (node.textContent || node.getAttribute('aria-label') || '').trim(),
    target: node.getAttribute('target'), rel: node.getAttribute('rel') || '',
  })));
  for (const anchor of anchors) {
    const props = webLinkProps(anchor.href);
    if (props.target === '_blank') {
      assert.equal(anchor.target, '_blank', `${state}: external ${anchor.href}`);
      for (const token of ['noopener', 'noreferrer']) assert.ok(anchor.rel.split(/\s+/).includes(token), `${state}: missing ${token}: ${anchor.href}`);
    } else {
      assert.ok(!anchor.target || anchor.target === '_self', `${state}: internal/native target ${anchor.href}`);
    }
    assert.doesNotMatch(anchor.href, /^javascript:/i, `${state}: unsafe link`);
  }
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${state}: horizontal overflow`);
  evidence.push({ url: page.url(), state, anchors });
}

async function main() {
  await mkdir(output, { recursive: true });
  const browser = await chromium.launch({ headless: true, ...(process.platform === 'win32' ? { channel: 'msedge' } : {}) });
  const errors: string[] = [];
  try {
    for (const width of [1440, 390]) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      page.on('pageerror', error => errors.push(error.message));
      for (const route of [...publicSiteRoutes, ...pendingPublicRoutes, ...supportingPublicRoutes]) {
        assert.equal((await page.goto(base + route, { waitUntil: 'networkidle' }))?.status(), 200, route);
        await checkLinks(page, `${width}:${route}:default`);
        await page.locator('main details').evaluateAll(nodes => nodes.forEach(node => node.setAttribute('open', '')));
        await checkLinks(page, `${width}:${route}:details-open`);
      }

      await page.goto(base, { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'เปิดเมนูหลัก', exact: true }).click();
      await checkLinks(page, `${width}:menu-open`);
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => document.querySelector('button[aria-label="เปิดเมนูหลัก"]')?.getAttribute('aria-expanded') === 'false');
      assert.equal(await page.getByRole('button', { name: 'เปิดเมนูหลัก', exact: true }).getAttribute('aria-expanded'), 'false');

      const damper = '/articles/ev-damper-tuning-bump-rebound-guide';
      await page.goto(base + damper, { waitUntil: 'networkidle' });
      const contents = page.getByRole('navigation', { name: 'สารบัญบทความ', exact: true });
      const entries = await contents.locator('a').evaluateAll(nodes => nodes.map(node => {
        const number = node.querySelector('span');
        const range = document.createRange();
        if (number) range.selectNodeContents(number);
        const href = node.getAttribute('href') || '';
        return { href, number: number?.textContent, numberLines: number ? range.getClientRects().length : 0, hasTarget: href.startsWith('#') && !!document.getElementById(href.slice(1)) };
      }));
      assert.ok(entries.length > 0, 'Missing damper table of contents');
      for (const entry of entries) {
        assert.equal(entry.numberLines, 1, `${width}: wrapped contents number ${entry.number}`);
        assert.ok(entry.hasTarget, `${width}: missing contents target ${entry.href}`);
      }
      await contents.screenshot({ path: path.join(output, `damper-contents-${width}.png`) });
      evidence.push({ state: `${width}:damper:contents`, entries });
      for (const value of await page.locator('input[name="damper-mode"]').evaluateAll(nodes => nodes.map(node => (node as HTMLInputElement).value))) {
        const radio = page.locator(`input[name="damper-mode"][value="${value}"]`);
        await radio.check();
        assert.ok(await radio.isChecked());
        const panel = page.locator(`#explorer-${value}`);
        assert.ok(await panel.isVisible());
        await checkLinks(page, `${width}:damper:${value}`);
        await panel.screenshot({ path: path.join(output, `damper-${value}-${width}.png`) });
        evidence.push({ state: `${width}:damper:${value}:text`, text: await panel.innerText() });
      }
      const localAnchor = page.locator('a[href="#explorer"]').first();
      const before = context.pages().length;
      await localAnchor.click();
      assert.equal(new URL(page.url()).hash, '#explorer');
      assert.equal(context.pages().length, before, 'Same-page link created a tab');

      const worksheetLink = page.locator('a[href="/downloads/evselect-damper-setup-log.html"]');
      await worksheetLink.click();
      await page.waitForURL(base + '/downloads/evselect-damper-setup-log.html');
      assert.equal(context.pages().length, before, 'Internal worksheet opened a new tab');
      assert.match(await page.locator('meta[name="robots"]').getAttribute('content') || '', /noindex/);
      assert.equal(await page.locator('form, script').count(), 0, 'Worksheet must remain a local, script-free note-taking aid');
      const vehicleField = page.getByLabel('ยี่ห้อ / รุ่น / ปี / รุ่นย่อย / ตลาดจำหน่าย', { exact: true });
      await vehicleField.fill('ตัวอย่างสำหรับตรวจหน้าฟอร์ม');
      assert.equal(await vehicleField.inputValue(), 'ตัวอย่างสำหรับตรวจหน้าฟอร์ม');
      await checkLinks(page, `${width}:worksheet:filled`);
      await page.getByRole('link', { name: '← กลับคู่มือโช้คสตรัทปรับเกลียว', exact: true }).click();
      await page.waitForURL(base + damper + '#toolkit');
      assert.equal(context.pages().length, before, 'Return from worksheet opened a new tab');
      assert.ok(await page.locator('#toolkit').isVisible());
      await checkLinks(page, `${width}:worksheet:returned-to-toolkit`);

      await page.goto(base + '/articles/ev-suspension-tuning-guide', { waitUntil: 'networkidle' });
      for (const groupName of ['เลือกสภาพการใช้งาน', 'เลือกตัวอย่างโช้ค']) {
        const group = page.getByRole('group', { name: groupName });
        const buttons = group.getByRole('button');
        for (let i = 0; i < await buttons.count(); i++) {
          await buttons.nth(i).click();
          assert.equal(await buttons.nth(i).getAttribute('aria-pressed'), 'true');
          await checkLinks(page, `${width}:basics:${groupName}:${i}`);
          const section = group.locator('..');
          evidence.push({ state: `${width}:basics:${groupName}:${i}:text`, text: await section.innerText() });
          await section.screenshot({ path: path.join(output, `basics-${groupName === 'เลือกสภาพการใช้งาน' ? 'road' : 'brand'}-${i}-${width}.png`) });
        }
      }
      for (const name of ['เด้งต่อหลายครั้ง', 'ในเมืองและคอสะพาน', 'ความสบายของผู้โดยสาร']) await page.getByRole('button', { name, exact: true }).click();
      const brief = page.locator('section[aria-labelledby="damper-brief"]');
      assert.match(await brief.innerText(), /โจทย์ของคุณ:/);
      await checkLinks(page, `${width}:basics:brief-result`);
      evidence.push({ state: `${width}:basics:brief-result:text`, text: await brief.innerText() });
      await brief.screenshot({ path: path.join(output, `basics-brief-${width}.png`) });
      await page.getByRole('button', { name: 'ล้างคำตอบแล้วเลือกใหม่', exact: true }).click();
      assert.doesNotMatch(await brief.innerText(), /โจทย์ของคุณ:/);

      await page.goto(base + '/articles/ev-carbon-ceramic-brakes-guide', { waitUntil: 'networkidle' });
      const scoreButtons = page.locator('button[data-testid^="score-"]');
      for (let i = 0; i < await scoreButtons.count(); i++) {
        const control = scoreButtons.nth(i);
        await control.click();
        assert.equal(await control.getAttribute('aria-expanded'), 'true');
        const region = page.locator(`#${await control.getAttribute('aria-controls')}`);
        const id = await control.getAttribute('data-testid');
        await checkLinks(page, `${width}:${id}`);
        evidence.push({ state: `${width}:${id}:text`, text: await region.innerText() });
        await region.screenshot({ path: path.join(output, `${id}-${width}.png`) });
      }
      const filters = page.locator('button[data-testid^="filter-"]:not([data-testid="filter-all"])');
      await filters.nth(0).click();
      await filters.nth(1).click();
      assert.equal(await page.locator('[data-testid^="score-card-"]').count(), 1);
      assert.ok(await filters.nth(2).isDisabled());
      await page.getByTestId('filter-all').click();
      assert.equal(await page.locator('[data-testid^="score-card-"]').count(), 3);
      await checkLinks(page, `${width}:brakes:filters-restored`);

      // A real internal cross-page fragment click must keep the current tab and find its section.
      await page.goto(base + '/articles/ev-performance-driving-techniques', { waitUntil: 'networkidle' });
      const contextual = page.locator('[data-contextual-reading] a').first();
      const href = await contextual.getAttribute('href');
      await contextual.click();
      await page.waitForURL(base + href);
      assert.equal(context.pages().length, 1);
      assert.ok(await page.locator(new URL(page.url()).hash).isVisible());

      // Real external click: verifies new browsing context and a null opener; source accuracy is reviewed separately.
      await page.goto(base + '/articles/ev-suspension-tuning-guide', { waitUntil: 'networkidle' });
      const outbound = page.getByRole('link', { name: 'อ่านรายละเอียด KW V3 จากแหล่งทางการ', exact: true });
      const popupPromise = context.waitForEvent('page');
      await outbound.click();
      const popup = await popupPromise;
      await popup.waitForLoadState('domcontentloaded');
      assert.match(popup.url(), /^https:\/\/www\.kwsuspensions\.com\//);
      assert.equal(await popup.evaluate(() => window.opener === null), true);
      assert.match(page.url(), /ev-suspension-tuning-guide$/);
      evidence.push({ state: `${width}:actual-external-click`, destination: popup.url(), nullOpener: true, originalTabPreserved: true });
      await popup.close();
      await context.close();
    }
    assert.deepEqual(errors, [], 'Browser runtime errors');
    await writeFile(path.join(output, 'results.json'), JSON.stringify({ base, checkedAt: new Date().toISOString(), states: evidence.length, errors, scope: 'Rendered link attributes, actual tab behavior and interactive states. Manual content/source/image review is separate.', evidence }, null, 2));
    console.log(JSON.stringify({ base, states: evidence.length, errors, output }));
  } finally { await browser.close(); }
}
main().catch(async error => {
  await writeFile(path.join(output, 'failure.json'), JSON.stringify({ message: String(error), evidence }, null, 2));
  console.error(error); process.exitCode = 1;
});
