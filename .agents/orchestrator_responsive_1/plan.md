# Orchestrator Execution Plan: EVSELECT Mobile/Responsive UI/UX Audit & Bug-Fix

## Objectives
1. Perform comprehensive survey and audit of all navigation, pages, components, and layout across 320px, 768px, and 1280px+ viewports.
2. Build and run a comprehensive Playwright test suite asserting:
   - Zero horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`) on all pages across 320px, 768px, 1280px+.
   - Hamburger menu visibility & interactivity for viewports < 1280px.
3. Fix all layout issues, overflow triggers, broken touch targets, and responsive bugs.
4. Verify complete test pass (0 failures) and pass forensic integrity checks.

## Phase Breakdown

### Phase 0: Survey (Top-Level Project Survey)
- Dispatch 3 parallel Explorers:
  - `explorer_survey_1`: Navigation, Header, Drawer, Breakpoints, Footer, Global CSS.
  - `explorer_survey_2`: Page routes, layout containers, vehicle finder, specs matrix, detail views, articles, tables, images, modals.
  - `explorer_survey_3`: Testing infrastructure, existing Playwright setup, Next.js scripts/dev server, test runners.
- Aggregate survey findings into `PROJECT.md § Feature Inventory` and define milestone architecture.

### Phase 1: Dual Track Execution
- **Track A (E2E Testing Track Orchestrator)**:
  - Configure Playwright with extreme mobile (320px), tablet (768px), and desktop (1280px+).
  - Write test specs covering all routes, horizontal scroll checks, and hamburger drawer interaction.
  - Publish `TEST_READY.md`.
- **Track B (Implementation Track Sub-orchestrators)**:
  - Milestone 1: Global Layout, Header, Mobile Navigation Drawer, Breakpoints (<1280px).
  - Milestone 2: Vehicle Finder, Specs Matrix, Detail Views, Tables, Modals, Images across mobile viewports.
  - Milestone 3: Final E2E Playwright Pass & Adversarial Hardening.

### Phase 2: Final Verification & Audit
- Reviewers and Adversarial Challengers verify edge cases (320px, 360px, 390px, 768px, 1024px, 1280px).
- Forensic Auditor verifies genuine implementation and no benchmark cheating.
- Orchestrator handoff.
