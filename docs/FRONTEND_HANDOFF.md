# EVSELECT Frontend Handoff Document

This document provides a read-only snapshot and handoff reference for ChatGPT/Codex to continue frontend development without altering the backend, inventory, or production environments.

## Repository Information
- **Repository URL**: `https://github.com/neverland-th/evselect-platform.git` (Origin)
- **Production URL**: `https://evselects.com`
- **Deployment Reference**: `https://evselect-platform-8owqyrn5c-evselect-com.vercel.app`
- **Current Handoff Branch**: `chatgpt-frontend-handoff`
- **Base Commit SHA (Rollback Point)**: `22cc781386186a9aa028aa5bba7a43d31deb3c48`
- **Uncommitted/Unpushed Changes**: None (Working tree was clean before branching).

## Project Structure & Architecture
- **Framework**: Next.js (Version `16.3.2` with App Router)
- **Package Manager / Lockfile**: npm (`package-lock.json`)
- **Build Command**: `npm run build` (executes `prisma generate && next build`)
- **Articles & Content Storage**:
  - Articles data: Root-level `posts.json` and `posts.md`
  - Images: `public/images/articles/` and `public/images/reviews/`
- **Frontend/Backend Coupling (Data Layer)**:
  - Database schema: `prisma/schema.prisma` (SQLite via `@prisma/adapter-better-sqlite3`)
  - The frontend accesses the database via Prisma Client generated in `src/generated/prisma`.
  - Client instance is configured at `src/lib/prisma.ts`.

## Environment Variables
*(Note: Values are omitted for security. Do not expose actual `.env` values, passwords, or tokens in source control.)*
- `DATABASE_URL`: Connection string for the SQLite database. Used in `src/lib/prisma.ts`.
- **Note**: No local `.env` file was found in the repository during this snapshot. Variables must be configured via the deployment environment.

## Vercel Deployment Information
- **Vercel Project, Repo, Production Branch & SHA**: **Data unavailable.**
  - *Reason*: Vercel CLI is not linked locally (no `.vercel` folder found, `vercel env ls` returned "Your codebase isn’t linked to a project on Vercel").
  - *How to check*: Verify via Vercel Dashboard or run `vercel link` with appropriate credentials. Do NOT guess these parameters from the URL.

## Route Map
**Storefront Routes (`src/app/(storefront)`):**
- `/` (Home)
- `/about`
- `/articles`
- `/contact`
- `/editorial-policy`
- `/privacy`
- `/product`
- `/terms`
- `/warranty`

**Admin Routes (`src/app/(admin)`):**
- `/categories`
- `/export`
- `/fitment`
- `/products`
- `/vehicles`

## Safe Build/Test Results
- **npm run lint**: Fails with 128 errors and 112 warnings (mostly `@typescript-eslint/no-require-imports`, `react/no-unescaped-entities`, and `next/no-html-link-for-pages`). It's safe to run `npm run lint` or `npm run build` locally to verify changes, but be aware of existing lint errors.
- *Do not attempt to run commands that modify the database or production services.*

## Pending Issues / Observations
- Next.js 16.3.2 is in use. Be aware of any breaking API changes or conventions that differ from older versions. Check `node_modules/next/dist/docs/` if in doubt.
- Prisma 7.9.1 is configured with Better SQLite3 adapter, meaning local schema operations are tied to a local `.db` file. No cloud database migrations should be performed without explicit approval.
