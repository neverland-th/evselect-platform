# EVSELECT Frontend Handoff Document

This document provides a read-only snapshot and handoff reference for ChatGPT/Codex to continue frontend development without altering the backend, inventory, or production environments.

## Original handoff repository snapshot
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
  - Article routes/content: `src/app/(storefront)/articles/**/page.tsx`. Root `posts.json` and `posts.md` are Facebook content-generator exports, not the article route source.
  - Images: `public/images/articles/` and `public/images/reviews/`
- **Frontend/Backend Coupling (Data Layer)**:
  - Database schema: `prisma/schema.prisma` (SQLite via `@prisma/adapter-better-sqlite3`)
  - The original storefront accessed the database via Prisma Client generated in `src/generated/prisma`. The pre-launch home/product pages no longer query inventory; the shared client and backend remain unchanged.
  - Client instance is configured at `src/lib/prisma.ts`.

## Environment Variables
*(Note: Values are omitted for security. Do not expose actual `.env` values, passwords, or tokens in source control.)*
- `DATABASE_URL`: Connection string for the SQLite database. Used in `src/lib/prisma.ts`.
- **Note**: No local `.env` file was found in the repository during this snapshot. Variables must be configured via the deployment environment.

## Original Vercel CLI snapshot (superseded by verified dashboard mapping below)
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
- `/product/[id]`
- `/terms`
- `/warranty`

**Admin Routes (`src/app/(admin)`):**
- `/categories`
- `/export`
- `/fitment`
- `/products`
- `/vehicles`

## Original baseline build/test notes
- **npm run lint**: Fails with 128 errors and 112 warnings (mostly `@typescript-eslint/no-require-imports`, `react/no-unescaped-entities`, and `next/no-html-link-for-pages`). It's safe to run `npm run lint` or `npm run build` locally to verify changes, but be aware of existing lint errors.
- *Do not attempt to run commands that modify the database or production services.*

## Pending Issues / Observations
- Next.js 16.3.2 is in use. Be aware of any breaking API changes or conventions that differ from older versions. Check `node_modules/next/dist/docs/` if in doubt.
- Prisma 7.9.1 is configured with Better SQLite3 adapter, meaning local schema operations are tied to a local `.db` file. No cloud database migrations should be performed without explicit approval.


## Verified deployment mapping — 2026-09-12 (handoff update v1.1)
- Vercel project: `evselect-com/evselect-platform`.
- Connected Git Repository displayed in Vercel Settings: `evselect/evselect-platform`.
- Production branch tracking: `main`; Preview: all unassigned Git branches.
- Production snapshot: `01c83175d9cb885b2dc8473612b920f6ba441d39`; deployment ID `5n8H7YPBM5YV4uBKSWMx5H5NL24A`; domains `evselects.com` / `www.evselects.com`.
- Blocked production deployment `D6mWdiRhrNUh3LfSPHn6KmQU3jmt`: Vercel cannot match commit email `admin@evselect.com` to a GitHub account. Do not fabricate an author identity or rewrite history to bypass this check.
- Update on 2026-09-13: authenticated GitHub API verification confirms that `neverland-th/evselect-platform` (ID `1345499586`) and the Vercel-connected `evselect/evselect-platform` (ID `1345508118`) are separate repositories. The handoff ZIP matches all 776 source blobs at commit `8da4bee101cb98f28be8ec003054bcbc829eb6c0` in `neverland-th`. The authenticated handoff account can push to `neverland-th`, but only read `evselect`. See `FRONTEND_RELEASE_v1.3.md`; the Vercel source connection still needs resolution before release to the original domain.
- Sources: authenticated Vercel Overview, Settings → Git, Settings → Environments, and the blocked deployment detail page on 2026-09-12.

## Frontend pre-launch changes — patch v1.0
- Home now provides article navigation and vehicle-guide filtering instead of demo products, prices or passed fitments. Existing anchor IDs remain available.
- Product URL routes show a noindex pre-launch page without querying inventory. Backend files, schemas, APIs and inventory logic remain unchanged.
- Header/footer/mobile menu route to articles and confirmed Facebook/Messenger channels. Unverified shop/LINE links and admin navigation were removed from the storefront.
- Sales promotion sections in existing articles use a shared pre-launch notice. Article slugs remain unchanged.
- Missing article images use an explicit editorial placeholder. They are not presented as restored original photography. Social metadata uses the existing raster brand image where a photo was missing.
- Full factual/source verification of existing review bodies and vehicle specifications is a separate unfinished content task; this patch does not certify those claims.
- Local build/lint/route verification results are recorded in `docs/FRONTEND_PATCH_v1.0.md`.
