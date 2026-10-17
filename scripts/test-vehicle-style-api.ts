import assert from 'node:assert/strict';
import test from 'node:test';
import { studioPreview, studioStatus } from '../src/lib/vehicle-style/api';
import { quotaIdentity, quotaResult } from '../src/lib/vehicle-style/quota';

const input = { consent: true, image: 'data:image/png;base64,iVBORw0KGgo=', body: 'custom', bodyCustom: 'olive green' };
const request = (body: unknown = input, origin = 'https://evselects.com') => new Request('https://evselects.com/api/vehicle-style/preview', {
  method: 'POST', headers: { origin, 'Content-Type': 'application/json', 'X-Studio-Request': '1' }, body: JSON.stringify(body),
});
const config = () => ({ code: 'test-only-service-code', ip: '192.0.2.1' });
const unused = async () => ({ reserved: true, remaining: 4, error: '' });

test('Daily identities rotate at Bangkok midnight and do not retain raw IPs', () => {
  const first = quotaIdentity('192.0.2.1', 'test-key', Date.parse('2026-10-18T16:59:59Z'));
  const next = quotaIdentity('192.0.2.1', 'test-key', Date.parse('2026-10-18T17:00:00Z'));
  assert.equal(first.day, '2026-10-18'); assert.equal(next.day, '2026-10-19');
  assert.notEqual(first.visitor, next.visitor); assert.match(first.visitor, /^[a-f0-9]{64}$/);
});

test('Both the global daily cap and one attempt per network are enforced', () => {
  assert.equal(quotaResult({ used: 5, visitors: [] }, 'new').allowed, false);
  assert.equal(quotaResult({ used: 1, visitors: ['same'] }, 'same').allowed, false);
  assert.equal(quotaResult({ used: 1, visitors: ['other'] }, 'new').allowed, true);
});

test('Cross-site requests never reach quota storage or the private service', async () => {
  const response = await studioPreview(request(input, 'https://attacker.test'), { config, reserve: async () => { throw Error('must not reserve'); } });
  assert.equal(response.status, 403);
});

test('Invalid custom colours and missing consent do not reserve paid attempts', async () => {
  for (const body of [{ ...input, bodyCustom: '' }, { ...input, consent: false }, { ...input, wheelDiameter: '99' }]) {
    const response = await studioPreview(request(body), { config, reserve: async () => { throw Error('must not reserve'); } });
    assert.equal(response.status, 400);
  }
});

test('An exhausted quota never calls the image service', async () => {
  const response = await studioPreview(request(), { config, reserve: async () => ({ reserved: false, remaining: 0, error: 'quota reached' }), fetch: async () => { throw Error('must not fetch'); } });
  assert.equal(response.status, 429); assert.equal((await response.json()).code, 'DAILY_LIMIT');
});

test('Missing configuration and failed storage stop before a provider call', async () => {
  assert.equal((await studioPreview(request(), { config: () => null })).status, 503);
  assert.equal((await studioPreview(request(), { config, reserve: async () => { throw Error('database offline'); }, fetch: async () => { throw Error('must not fetch'); } })).status, 503);
});

test('A reserved request streams the result and keeps its service credential private', async () => {
  let reserved = false;
  const response = await studioPreview(request(), { config, reserve: async () => { reserved = true; return unused(); }, fetch: async (url, init) => {
    assert.equal(reserved, true);
    assert.equal(url, 'https://evselects-vehicle-style-evselects-com.vercel.app/api/preview');
    assert.match(new Headers(init?.headers).get('authorization') ?? '', /^Basic /);
    assert.equal(JSON.parse(String(init?.body)).bodyCustom, 'olive green');
    return Response.json({ image: input.image, label: 'Concept preview' });
  } });
  assert.equal(response.status, 200); assert.equal(response.headers.get('www-authenticate'), null);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal((await response.json()).image, input.image);
});

test('Service authentication errors do not prompt public visitors for credentials', async () => {
  const response = await studioPreview(request(), { config, reserve: unused, fetch: async () => new Response('', { status: 401, headers: { 'WWW-Authenticate': 'Basic' } }) });
  assert.equal(response.status, 503); assert.equal(response.headers.get('www-authenticate'), null);
  assert.ok(!(await response.text()).includes('test-only-service-code'));
});

test('Public status exposes quota and readiness only', async () => {
  const response = await studioStatus(new Request('https://evselects.com/api/vehicle-style/status'), { config, read: async () => quotaResult(undefined, 'test'), fetch: async () => Response.json({ ready: true }) });
  assert.equal(response.status, 200);
  const body = await response.json(); assert.equal(body.ready, true); assert.equal(body.remaining, 5);
  assert.ok(!JSON.stringify(body).includes('test-only-service-code'));
});
