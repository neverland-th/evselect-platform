import { defineConfig } from 'playwright/test';
import path from 'node:path';

export default defineConfig({
  testDir: '../tests/analytics',
  outputDir: '../analytics-test-results',
  timeout: 30_000,
  workers: 1,
  reporter: 'list',
  use: { browserName: 'chromium', viewport: { width: 1280, height: 800 } },
  webServer: {
    cwd: path.resolve(__dirname, '..'),
    command: 'node node_modules/next/dist/bin/next start -p 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: false,
    env: { DATABASE_URL: 'postgresql://evselect_preview:preview-build@127.0.0.1:1/evselect_preview?sslmode=disable' },
  },
});
