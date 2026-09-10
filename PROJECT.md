# Project: EVSELECT Mobile/Responsive UI/UX Audit & Bug-Fix

## Architecture
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling**: Tailwind CSS v4 + `@tailwindcss/postcss`
- **Database / ORM**: SQLite (`dev.db`) + Prisma ORM 7.9.1
- **Testing**: Playwright 1.62.1 (Chromium headless engine)
- **Viewport System**:
  - Breakpoint boundary: `xl` = `1280px`
  - Mobile & Tablet: `< 1280px` (280px, 320px, 360px, 390px, 412px, 768px, 820px, 1024px, 1279px) -> Hamburger Menu (`MobileMenu.tsx`)
  - Desktop: `>= 1280px` (1280px, 1440px, 1920px) -> Desktop Navbar (`layout.tsx`)
- **Horizontal Overflow Standard**:
  `document.documentElement.scrollWidth <= window.innerWidth && document.body.scrollWidth <= window.innerWidth` across all routes.

## Feature Inventory
Every feature identified during the Survey phase mapped to its assigned milestone:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Playwright E2E Runner Config | Configure `playwright.config.ts` isolated to `tests/e2e/` with Chromium projects and dev server integration | M_TEST | survey_3 |
| 2 | Playwright Zero-Scroll Assertions | Automated tests across all routes asserting zero horizontal document overflow at 320px, 768px, 1280px+ | M_TEST | survey_3, request |
| 3 | Playwright Hamburger Navigation Assertions | Automated tests asserting hamburger menu is visible and fully interactive on viewports < 1280px, and hidden >= 1280px | M_TEST | survey_3, request |
| 4 | Mobile Drawer Focus & Inert Fix | Fix off-screen focus leak and missing focus trap in `MobileMenu.tsx` using `invisible` / `inert` when closed | M1 | survey_1 |
| 5 | Touch Target & Token Normalization | Enlarge hamburger/close buttons and drawer links to >= 44px; replace non-standard `w-4.5 h-4.5` with `w-5 h-5` | M1 | survey_1 |
| 6 | Global CSS & Viewport Metadata | Change `body { overflow-x: hidden }` to `overflow-x: clip`, define `.scrollbar-none`, add `export const viewport: Viewport` | M1 | survey_1 |
| 7 | Storefront Footer Touch Targets | Add touch target padding (`min-h-[44px] py-2.5`) to contact and footer links in `(storefront)/layout.tsx` | M1 | survey_1 |
| 8 | Admin Responsive Sidebar & Layout | Make admin sidebar responsive (collapsible drawer on mobile/tablet < 1024px) in `(admin)/layout.tsx` | M2 | survey_2 |
| 9 | Admin Data Table Horizontal Scroll | Replace `overflow-hidden` with `overflow-x-auto` on admin table wrappers | M2 | survey_2 |
| 10 | Admin Creation Forms Responsive Wrap | Add `flex-wrap` to admin forms so input fields wrap gracefully on mobile viewports | M2 | survey_2 |
| 11 | 100% E2E Playwright Pass & Audit | Execute full Playwright test suite (0 failures), adversarial edge-case stress testing, and forensic audit | M3 | survey_3, request |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M_TEST | E2E Testing Track | Playwright config, zero-scroll test specs, navigation specs (`tests/e2e/`), `TEST_READY.md` | none | **DONE** |
| M1 | Navigation & Global Layout Fixes | `MobileMenu.tsx`, `globals.css`, `layout.tsx`, touch targets, focus trap, viewport | none | **DONE** |
| M2 | Admin Platform Responsive Hardening | Admin layout sidebar, table wrappers (`overflow-x-auto`), form wrapping | none | **DONE** |
| M3 | Final Verification & Forensic Audit | Run 100% Playwright tests, adversarial verification (Challenger), forensic audit (Auditor) | M_TEST, M1, M2 | **DONE** |

## Interface Contracts
### Storefront Navigation ↔ Viewport
- Viewport width `< 1280px`:
  - Hamburger button (`button[aria-label="เปิดเมนู"]`) MUST be visible and clickable.
  - Desktop nav (`header nav:not([aria-label="เมนูหลัก"])`) MUST be hidden (`not.toBeVisible()`).
  - Clicking hamburger button opens drawer: drawer navigation (`nav[aria-label="เมนูหลัก"]`) becomes visible and interactive.
  - Escape key or close button (`button[aria-label="ปิดเมนู"]`) closes the drawer and restores focus.
- Viewport width `>= 1280px`:
  - Hamburger button MUST be hidden (`not.toBeVisible()`).
  - Desktop nav MUST be visible (`toBeVisible()`).

### Document Overflow Contract
- On any rendered route (`/`, `/articles`, `/articles/*`, `/about`, `/contact`, etc.):
  - `document.documentElement.scrollWidth <= window.innerWidth`
  - `document.body.scrollWidth <= window.innerWidth`
  - Zero uncontained overflowing elements beyond viewport width down to 280px.

## Code Layout
- `playwright.config.ts`: Playwright root configuration
- `tests/e2e/`: E2E Playwright test specs (`*.spec.ts`)
- `tests/e2e/utils/`: Helper utilities (e.g. `scroll-diagnostics.ts`)
- `src/components/MobileMenu.tsx`: Mobile navigation hamburger and drawer
- `src/app/globals.css`: Global styles, scroll utilities, root overflow rules
- `src/app/layout.tsx`: Root HTML layout, font configurations, viewport metadata
- `src/app/(storefront)/layout.tsx`: Storefront header, footer, navigation integration
- `src/app/(admin)/layout.tsx`: Admin portal shell, sidebar navigation
- `next.config.ts`: Remote patterns and security headers
