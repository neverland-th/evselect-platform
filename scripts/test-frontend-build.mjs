import assert from 'node:assert/strict';
import test from 'node:test';
import { frontendBuildEnv } from './build-frontend.mjs';

test('Preview without credentials receives only an isolated build placeholder', () => {
  const source = { VERCEL_ENV: 'preview', NEXT_PUBLIC_SITE_URL: 'https://evselects.com' };
  const env = frontendBuildEnv(source);
  const placeholder = new URL(env.DATABASE_URL);
  assert.equal(placeholder.hostname, '127.0.0.1');
  assert.equal(placeholder.port, '1');
  assert.equal(source.DATABASE_URL, undefined);
  assert.equal(env.NEXT_PUBLIC_SITE_URL, source.NEXT_PUBLIC_SITE_URL);
});

test('An existing Preview connection value is preserved', () => {
  const source = { VERCEL_ENV: 'preview', DATABASE_URL: 'existing-preview-value' };
  assert.deepEqual(frontendBuildEnv(source), source);
});

test('Production never receives a placeholder, even when credentials are missing', () => {
  assert.deepEqual(frontendBuildEnv({ VERCEL_ENV: 'production' }), { VERCEL_ENV: 'production' });
  const source = { VERCEL_ENV: 'production', DATABASE_URL: 'existing-production-value' };
  assert.deepEqual(frontendBuildEnv(source), source);
});

test('Local and custom environments never receive a placeholder', () => {
  for (const source of [{}, { VERCEL_ENV: 'development' }, { VERCEL_ENV: 'staging' }]) {
    assert.deepEqual(frontendBuildEnv(source), source);
  }
});
