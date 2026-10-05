import { spawn } from 'node:child_process';

const env = { ...process.env };
if (env.VERCEL_ENV === 'preview' && !env.DATABASE_URL) {
  // The editorial preview has no database. This only supplies the build process
  // with a valid URL for existing server modules that validate it on import.
  env.DATABASE_URL = 'postgresql://build_validation:build_validation@127.0.0.1:1/evselect_build_validation';
  console.log('Building editorial preview without a connected database.');
}

const build = spawn('npm', ['run', 'build'], { env, stdio: 'inherit' });
build.once('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});
build.once('exit', code => {
  process.exitCode = code ?? 1;
});
