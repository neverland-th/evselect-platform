# Explorer Survey 3 Dispatch: Testing Infrastructure & Playwright Setup

## Role & Mission
You are `explorer_survey_3` (Role: Codebase Explorer).
Your working directory is:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\explorer_survey_3`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Authoritative User Request
Read:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`

## Your Focus Area
Investigate the testing infrastructure, dependencies, dev server scripts, and Playwright integration requirements:
1. **Current Dependencies & Scripts**:
   - Inspect `package.json`, package manager (npm / pnpm / yarn), installed devDependencies.
   - Check if `@playwright/test` is already installed, or what setup is needed.
   - Check scripts (`dev`, `build`, `start`, `test`).
2. **Next.js & Build Environment**:
   - Check Next.js version, configuration (`next.config.*`), TypeScript configuration (`tsconfig.json`).
   - Check database dependencies (Prisma, SQLite, PostgreSQL, mock data) and whether routes require a running database or can render static/mock data for testing.
3. **Playwright Test Architecture Design**:
   - How should Playwright be configured (`playwright.config.ts`)?
   - What viewports must be covered? (Criteria: extreme mobile 320px, standard tablet 768px, desktop 1280px+; plus 360px, 390px, 1024px if relevant).
   - How to programmatically test zero horizontal scroll across all routes:
     `document.documentElement.scrollWidth <= window.innerWidth` (and `window.innerWidth >= document.body.scrollWidth`).
   - How to test hamburger menu visibility and interactivity on viewports < 1280px (asserting visible, clickable, opens drawer, links clickable, closes).
   - How tests can run reliably against Next.js (e.g. `webServer` config in `playwright.config.ts` or pre-started server).
4. **Deliverable**:
   - Produce a detailed report in `analysis.md` and `handoff.md` inside your working directory.
   - Provide exact Playwright config recommendations, test file structure, command lines, and prerequisites.

## 2026-09-10T06:14:26Z
Investigate testing infrastructure, dependencies, dev server scripts, and Playwright integration requirements.
1. Inspect package.json, package manager, devDependencies. Check if @playwright/test is already installed or what setup/packages are needed.
2. Check Next.js version, configuration (next.config.*), TypeScript configuration, database dependencies (Prisma, SQLite, PostgreSQL, mock data) and if routes can render static/mock data for testing.
3. Design Playwright test architecture:
   - Configuration (playwright.config.ts) for extreme mobile 320px, tablet 768px, desktop 1280px+ (and 360px, 390px, 1024px).
   - Method to programmatically assert zero horizontal scroll across all routes: document.documentElement.scrollWidth <= window.innerWidth.
   - Method to assert hamburger menu visibility and interactivity on viewports < 1280px (asserting visible, clickable, opens drawer, links clickable, closes).
   - How tests run reliably (webServer config or command line execution).
