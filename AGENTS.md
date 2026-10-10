<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Base44 sandbox environment (development)

Run the app with the sandbox compose file, never the repo's own commands directly:

```bash
docker compose -f docker-compose.base44.yml up -d --build   # start
docker compose -f docker-compose.base44.yml logs -f web      # logs
```

Non-obvious findings worth knowing before touching this setup:

- **Stack**: Next.js 16 (App Router, Turbopack dev) + React 19 + Tailwind v4, data layer
  Prisma 7 with `@prisma/adapter-better-sqlite3`. There is **no Dockerfile** in the repo,
  so the compose service uses a plain `node:22` image with the working tree bind-mounted
  and `next dev` running for live reload (`WATCHPACK_POLLING=true` for bind mounts).
- **Database**: SQLite, no migrations directory is committed, so startup runs
  `prisma db push` against `DATABASE_URL=file:/data/dev.db`. Use an **absolute** path —
  a relative `file:./dev.db` resolves differently for the Prisma CLI (schema-relative)
  than for the better-sqlite3 driver adapter (cwd-relative). The DB lives on the
  `db-data` volume, outside the repo, so it survives container recreates.
- **Empty database is fine**: storefront home/products fall back to curated starter data
  and admin screens catch DB errors, so the site renders before any data exists.
- **Prisma 7 config**: `prisma.config.ts` reads `process.env.DATABASE_URL` and imports
  `dotenv/config`; `dotenv` is only a transitive dependency, so don't remove it from the
  lockfile. `npm ci` triggers `postinstall: prisma generate` (output `src/generated/prisma`,
  gitignored — regenerated on every container start).
- **External services (optional)**: `GEMINI_API_KEY`/`GOOGLE_API_KEY` is used only by the
  offline `npm run generate-posts` script, and `SHOPEE_USERNAME`/`SHOPEE_PASSWORD` only by
  `scripts/shopee_ev_select/`. None of them are needed for the app itself to boot or serve.
- **Preview origin**: `allowedDevOrigins` in `next.config.ts` is set only when
  `BASE44_PREVIEW_MODE=1`, from `BASE44_PUBLIC_HOST_SUFFIX`. With the flag unset the config
  keeps its original behavior. The preview proxy handles iframe headers; leave the app's
  `X-Frame-Options` / CSP as they are.
- **Verification**: `curl -fsS http://localhost:3000/` should return the Thai storefront
  HTML (HTTP 200) and the container log shows Turbopack compiling routes.
- **Playwright E2E** (`tests/e2e`, `playwright.config.ts`) is the project's own test suite;
  it needs browsers installed and its own web server, so it is not wired into the sandbox
  compose.
