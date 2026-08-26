# Serverless Database & Prisma Resilience Rule

## Context & Problem
When deploying Next.js App Router applications to Serverless environments (e.g., Vercel, AWS Lambda, Cloudflare Pages) where Prisma uses a local SQLite or native binary driver (`better-sqlite3`, `libsqlite3`) in development:
1. Native C++ binary bindings fail to load at runtime on Serverless containers.
2. Unhandled database calls in Server Components (SSR) will cause 500 crashes and failed page builds.

## Universal Rules & Invariants

### 1. Dynamic Client Instantiation
- Never import or instantiate native driver adapters directly at the module root without a fallback.
- In `src/lib/prisma.ts`, wrap the driver adapter requirement in `try/catch`. If unavailable, export a dynamic `Proxy` that rejects calls cleanly without throwing module evaluation errors during serverless initialization.

### 2. Resilient Server Component Queries
- Every database query inside SSR pages (e.g., `src/app/(storefront)/page.tsx`, admin portals, API export routes) MUST be wrapped in a `try/catch` block.
- Always provide a curated, high-quality fallback mock dataset so public visitors and search engine crawlers always receive an HTTP 200 with fully rendered content.

### 3. Build & CI/CD Scripts
- Ensure `package.json` always contains `"postinstall": "prisma generate"`.
- The build command must be `"prisma generate && next build"` to ensure Prisma Client types and queries are properly compiled on remote CI runners.
