import { spawnSync } from 'node:child_process';

const env = { ...process.env };
if (env.VERCEL_ENV === 'preview' && !env.DATABASE_URL) {
  env.DATABASE_URL = 'postgresql://evselect_preview:preview-build@127.0.0.1:1/evselect_preview?sslmode=disable';
}
const result = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', env });
if (result.error) throw result.error;
process.exit(result.status ?? 1);
