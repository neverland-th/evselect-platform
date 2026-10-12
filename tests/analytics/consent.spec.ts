import { expect, test, type Page } from 'playwright/test';
import { CONSENT_MAX_AGE_MS, CONSENT_STORAGE_KEY } from '../../src/lib/analytics';

const id = 'G-ST95SE5T38';
const now = new Date('2026-10-12T12:00:00Z');
const origin = 'https://evselects.com';

// A deliberately small Google-tag double observes the disable flag and emits
// intercepted requests. It does not claim to reproduce Enhanced Measurement.
const googleDouble = `(() => {
  let id;
  const send = (name, params) => {
    if (!id || window['ga-disable-' + id]) return;
    fetch('https://www.google-analytics.com/g/collect?' + new URLSearchParams({
      tid: id, en: name, payload: JSON.stringify(params || {})
    }));
  };
  const layer = window.dataLayer = window.dataLayer || [];
  const process = args => {
    if (args[0] === 'config') { id = args[1]; send('page_view', args[2]); }
    if (args[0] === 'event') send(args[1], args[2]);
  };
  const push = layer.push;
  layer.push = function(...commands) { commands.forEach(process); return push.apply(this, commands); };
  layer.forEach(process);
  for (const method of ['pushState', 'replaceState']) {
    const original = history[method];
    history[method] = function(...args) {
      const result = original.apply(this, args);
      send('page_view', { page_location: location.href });
      return result;
    };
  }
  setInterval(() => send('user_engagement'), 1000);
})();`;

async function harness(page: Page, consent?: { analytics: boolean; updatedAt: number }) {
  const scripts: string[] = [];
  const hits: URL[] = [];
  await page.clock.install({ time: now });
  if (consent) await page.addInitScript(({ key, record }) => {
    if (!sessionStorage.getItem('analytics-seeded')) {
      localStorage.setItem(key, JSON.stringify({ version: 1, ...record }));
      sessionStorage.setItem('analytics-seeded', 'true');
    }
  }, { key: CONSENT_STORAGE_KEY, record: consent });
  await page.context().route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.hostname === 'www.googletagmanager.com') {
      scripts.push(url.href);
      await route.fulfill({ contentType: 'application/javascript', body: googleDouble });
    } else if (url.hostname.endsWith('.google-analytics.com') || url.hostname.endsWith('.analytics.google.com')) {
      hits.push(url);
      await route.fulfill({ status: 204, headers: { 'access-control-allow-origin': origin } });
    } else if (url.origin === origin || url.hostname === 'evselect-analytics-preview.vercel.app') {
      // The browser uses a production hostname, but all application requests stay local.
      const response = await route.fetch({ url: `http://127.0.0.1:3100${url.pathname}${url.search}` });
      await route.fulfill({ response });
    } else if (url.origin === 'http://127.0.0.1:3100') {
      await route.continue();
    } else {
      await route.abort();
    }
  });
  return { scripts, hits };
}

const banner = (page: Page) => page.locator('section[aria-labelledby="cookie-banner-title"]');
const configs = (hits: URL[]) => hits.filter(url => url.searchParams.get('en') === 'page_view');

test.afterEach(async ({ page }) => {
  await page.context().unrouteAll({ behavior: 'ignoreErrors' });
});

test('unknown/rejected consent and direct private entries produce no analytics traffic', async ({ page }) => {
  const traffic = await harness(page);
  await page.goto(`${origin}/privacy`);
  await expect(banner(page)).toBeVisible();
  await banner(page).getByRole('button').nth(0).click();
  await page.reload();
  await page.clock.fastForward(5000);
  expect(traffic.scripts).toHaveLength(0);
  expect(traffic.hits).toHaveLength(0);
  for (const path of ['/product/customer-id', '/fitment', '/fitment/edit']) {
    await page.goto(origin + path);
    await page.clock.fastForward(1000);
  }
  expect(traffic.scripts).toHaveLength(0);
  expect(traffic.hits).toHaveLength(0);
});

test('granted consent loads one existing tag and filters custom location and intent data', async ({ page }) => {
  const traffic = await harness(page, { analytics: true, updatedAt: now.getTime() });
  await page.goto(`${origin}/privacy?utm_source=facebook&utm_medium=paid_social&utm_campaign=next_launch_2026&email=private%40example.com#private`);
  await expect.poll(() => configs(traffic.hits).length).toBe(1);
  expect(traffic.scripts).toHaveLength(1);
  expect(traffic.scripts[0]).toContain(`id=${id}`);
  const config = JSON.parse(configs(traffic.hits)[0].searchParams.get('payload')!);
  expect(config.page_location).toBe(`${origin}/privacy?utm_source=facebook&utm_medium=paid_social&utm_campaign=next_launch_2026`);
  await page.locator('a[href="https://m.me/evselects"]').first().dispatchEvent('click');
  await expect.poll(() => traffic.hits.filter(url => url.searchParams.get('en') === 'messenger_click').length).toBe(1);
  expect(traffic.hits.map(url => url.href).join('\n')).not.toMatch(/private|email|message=/);
});

test('near-expiry open tab stops traffic, reloads, deletes owned cookies and offers consent again', async ({ page }) => {
  const traffic = await harness(page, { analytics: true, updatedAt: now.getTime() - CONSENT_MAX_AGE_MS + 10_000 });
  await page.goto(`${origin}/privacy`);
  await expect.poll(() => configs(traffic.hits).length).toBe(1);
  await page.evaluate(() => { document.cookie = 'evselect_ga=test; Path=/'; document.cookie = 'unrelated=keep; Path=/'; });
  await page.clock.fastForward(10_001);
  await expect(banner(page)).toBeVisible();
  const count = traffic.hits.length;
  await page.clock.fastForward(5000);
  expect(traffic.hits).toHaveLength(count);
  expect(traffic.scripts).toHaveLength(1);
  expect(await page.evaluate(() => document.cookie)).not.toContain('evselect_ga=');
  expect(await page.evaluate(() => document.cookie)).toContain('unrelated=keep');
  await banner(page).getByRole('button').nth(1).click();
  await expect.poll(() => configs(traffic.hits).length).toBe(2);
  expect(traffic.scripts).toHaveLength(2);
});

for (const event of ['focus', 'visibilitychange']) {
  test(`suspended tab stops traffic on ${event} at expiry`, async ({ page }) => {
    const traffic = await harness(page, { analytics: true, updatedAt: now.getTime() });
    await page.goto(`${origin}/privacy`);
    await expect.poll(() => configs(traffic.hits).length).toBe(1);
    await page.clock.setSystemTime(now.getTime() + CONSENT_MAX_AGE_MS);
    await page.evaluate(event => (event === 'focus' ? window : document).dispatchEvent(new Event(event)), event);
    await expect(banner(page)).toBeVisible();
    const count = traffic.hits.length;
    await page.clock.fastForward(5000);
    expect(traffic.hits).toHaveLength(count);
    expect(traffic.scripts).toHaveLength(1);
  });
}

for (const method of ['pushState', 'replaceState'] as const) {
  test(`${method} pauses before private history traffic and public reload restarts only once`, async ({ page }) => {
    const traffic = await harness(page, { analytics: true, updatedAt: now.getTime() });
    await page.goto(`${origin}/privacy`);
    await expect.poll(() => configs(traffic.hits).length).toBe(1);
    await page.evaluate(method => history[method]({}, '', '/fitment/edit'), method);
    await page.clock.fastForward(2000);
    expect(configs(traffic.hits)).toHaveLength(1);
    expect(traffic.hits.map(url => url.href).join('\n')).not.toContain('fitment');
    await page.goto(`${origin}/privacy`);
    await expect.poll(() => configs(traffic.hits).length).toBe(2);
    expect(traffic.scripts).toHaveLength(2);
  });
}

test('granted direct private entry and local hostname still load no tag', async ({ page }) => {
  const traffic = await harness(page, { analytics: true, updatedAt: now.getTime() });
  for (const path of ['/product/customer-id', '/fitment']) await page.goto(origin + path);
  await page.goto('http://127.0.0.1:3100/privacy');
  await expect(banner(page)).toBeHidden();
  await page.clock.fastForward(2000);
  await page.goto('https://evselect-analytics-preview.vercel.app/privacy');
  await expect(banner(page)).toBeHidden();
  await page.clock.fastForward(2000);
  expect(traffic.scripts).toHaveLength(0);
  expect(traffic.hits).toHaveLength(0);
  // The real Next proxy currently returns 404 on these routes; the pure initializer
  // tests also cover the exclusion if that proxy is later removed.
});

test('cross-tab withdrawal stops both open pages without a denied-consent ping', async ({ page }) => {
  const traffic = await harness(page, { analytics: true, updatedAt: now.getTime() });
  await page.goto(`${origin}/privacy`);
  await expect.poll(() => configs(traffic.hits).length).toBe(1);
  const other = await page.context().newPage();
  await other.clock.install({ time: now });
  await other.goto(`${origin}/privacy`);
  await expect.poll(() => configs(traffic.hits).length).toBe(2);
  const reloads = Promise.all([
    page.waitForEvent('framenavigated', frame => frame === page.mainFrame()),
    other.waitForEvent('framenavigated', frame => frame === other.mainFrame()),
  ]);
  await other.evaluate(key => {
    localStorage.setItem(key, JSON.stringify({ version: 1, analytics: false, updatedAt: Date.now() }));
    window.dispatchEvent(new Event('evselect:consent-changed'));
  }, CONSENT_STORAGE_KEY);
  await reloads;
  await Promise.all([page.waitForLoadState('domcontentloaded'), other.waitForLoadState('domcontentloaded')]);
  await expect.poll(() => page.evaluate(() => window.evselectAnalyticsId)).toBeUndefined();
  await expect.poll(() => other.evaluate(() => window.evselectAnalyticsId)).toBeUndefined();
  const count = traffic.hits.length;
  await page.clock.fastForward(5000);
  await other.clock.fastForward(5000);
  expect(traffic.hits).toHaveLength(count);
  expect(traffic.scripts).toHaveLength(2);
});
