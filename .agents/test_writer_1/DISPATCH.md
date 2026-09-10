# Dispatch: Test Writer 1 — Playwright E2E Test Suite Implementation

## Role & Mission
You are `test_writer_1` (Role: E2E Test Engineer, Type: `teamwork_preview_test_writer`).
Your working directory is:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\test_writer_1`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Authoritative User Request & Context
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md`
- Read survey reports in `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\explorer_survey_3\analysis.md`

## File Ownership
You exclusively own:
- `playwright.config.ts`
- `tests/e2e/` (all files within `tests/e2e/`, including `tests/e2e/responsive-scroll.spec.ts`, `tests/e2e/mobile-navigation.spec.ts`, and `tests/e2e/utils/scroll-diagnostics.ts`)
- `TEST_READY.md` (at project root)

Do NOT modify any files in `src/`.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Task Requirements
1. **Playwright Config (`playwright.config.ts`)**:
   - Point `testDir: './tests/e2e'`. Do NOT run `tests/*.test.ts` (existing CLI unit tests).
   - Configure projects for Chromium with required viewports:
     - `extreme-mobile-320` (width: 320, height: 568)
     - `ios-mobile-390` (width: 390, height: 844)
     - `tablet-portrait-768` (width: 768, height: 1024)
     - `tablet-landscape-1024` (width: 1024, height: 768)
     - `desktop-xl-1280` (width: 1280, height: 800)
     - `desktop-wide-1440` (width: 1440, height: 900)
   - Configure `webServer` to use `http://localhost:3000` with `reuseExistingServer: true`.
2. **Zero Horizontal Scroll Tests (`tests/e2e/responsive-scroll.spec.ts`)**:
   - Programmatically assert on every route (`/`, `/articles`, all article review pages, `/about`, `/contact`, `/editorial-policy`, `/privacy`, `/terms`, `/warranty`):
     `const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);`
     `const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);`
     `expect(scrollWidth).toBeLessThanOrEqual(clientWidth);`
   - Also assert `document.body.scrollWidth <= window.innerWidth`.
   - Include diagnostic logging identifying overflowing elements if any failure occurs.
3. **Mobile Navigation Tests (`tests/e2e/mobile-navigation.spec.ts`)**:
   - On viewports < 1280px (320px, 390px, 768px, 1024px):
     - Hamburger button (`button[aria-label="เปิดเมนู"]`) is visible and clickable.
     - Desktop nav (`header nav:not([aria-label="เมนูหลัก"])`) is hidden (`not.toBeVisible()`).
     - Clicking hamburger opens drawer: drawer nav (`page.getByRole('navigation', { name: 'เมนูหลัก' })`) becomes visible.
     - Drawer navigation links are interactive.
     - Closing via close button or Escape key hides the drawer and returns focus.
   - On viewports >= 1280px (1280px, 1440px):
     - Hamburger button is hidden (`not.toBeVisible()`).
     - Desktop nav is visible (`toBeVisible()`).
4. **Execution & Verification**:
   - Run: `npx playwright test`
   - Ensure all tests execute cleanly.
5. **Publish `TEST_READY.md`**:
   - Write `TEST_READY.md` at project root with the runner command and coverage breakdown.

## 2026-09-10T06:24:24Z
[USER_REQUEST received]: Implement complete Playwright E2E testing infrastructure:
1. Configure `playwright.config.ts` targeting `testDir: './tests/e2e'`. Do NOT execute tests in `tests/*.test.ts` (CLI unit tests). Configure Chromium projects with viewports: extreme-mobile-320 (320x568), ios-mobile-390 (390x844), tablet-portrait-768 (768x1024), tablet-landscape-1024 (1024x768), desktop-xl-1280 (1280x800), desktop-wide-1440 (1440x900).
2. Implement `tests/e2e/responsive-scroll.spec.ts` asserting zero horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth` and `document.body.scrollWidth <= window.innerWidth`) on all pages across viewports.
3. Implement `tests/e2e/mobile-navigation.spec.ts` asserting hamburger button visibility and full drawer interactivity on viewports < 1280px (open, close, escape, click links), and desktop navbar visibility on >= 1280px.
4. Run `npx playwright test` to verify tests execute properly.
5. Publish `TEST_READY.md` at project root with test commands and tier breakdown.
6. Write `handoff.md` and report back when complete.
