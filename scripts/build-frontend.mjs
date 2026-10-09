import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// This placeholder only satisfies module initialization during a frontend Preview
// build. It never creates a database connection or supplies a production fallback.
export function frontendBuildEnv(source) {
  const env = { ...source };
  if (env.VERCEL_ENV === 'preview' && !env.DATABASE_URL) {
    env.DATABASE_URL = 'postgresql://evselect_preview:preview-build@127.0.0.1:1/evselect_preview?sslmode=disable';
  }
  return env;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = spawnSync('npm', ['run', 'build'], {
    stdio: 'inherit', env: frontendBuildEnv(process.env),
  });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
}
