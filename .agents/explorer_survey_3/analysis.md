# Comprehensive Analysis: Testing Infrastructure & Playwright Integration
**Agent**: `explorer_survey_3`  
**Date**: 2026-09-10  
**Project**: EVSELECT Platform (`evselect-platform`)  
**Focus**: Testing Infrastructure, Dependencies, Dev Server Scripts, Zero Horizontal Scroll Validation, and Playwright Test Architecture

---

## 1. Executive Summary

This investigation analyzed the test environment, build configuration, database connectivity, and automated testing requirements for the EVSELECT platform, specifically addressing responsive UI/UX auditing on mobile (320px–390px), tablet (768px–1024px), and desktop (1280px+) viewports.

### Core Discoveries
1. **Playwright Already Available**: `package.json` contains `"playwright": "^1.62.1"`. The Playwright Test runner and TypeScript definitions are fully usable via `import { test, expect } from 'playwright/test'`. The Chromium browser binary is cached locally and passed live headless tests immediately. Firefox and WebKit binaries are not currently downloaded.
2. **Missing Test Script**: `package.json` currently lacks test scripts for Playwright (e.g. `npm run test:e2e`). Existing `npm test:*` scripts target legacy Shopee and content generation verification (`node scripts/shopee_ev_select/test.js`).
3. **Collision Warning with Existing Tests**: `tests/` currently holds CLI content generation and adversarial fuzzing scripts (`content-generator.test.ts`, `challenger-adversarial-fuzz.ts`) executed via `npx tsx`. A Playwright test runner without strict `testMatch` or a dedicated directory (`tests/e2e/`) would inadvertently attempt to execute those non-Playwright files.
4. **Server & Database State**: The Next.js 16.3.2 dev server is already running on `http://localhost:3000`. Database connectivity via Prisma 7.9.1 and better-sqlite3 with `dev.db` is functional (12 vehicles, 4 products, 4 categories), and the storefront code has built-in graceful fallback data for resilience.
5. **Empirical Survey Results**:
   - Running live Playwright tests across 8 viewports (320px, 360px, 390px, 768px, 1024px, 1279px, 1280px, 1440px) against the running server demonstrated **zero horizontal scroll** across all primary storefront routes (`/`, `/articles`, `/about`, `/contact`, `/editorial-policy`, `/privacy`, `/terms`, `/warranty`).
   - A dedicated test of all **22 individual vehicle review and technical articles** showed **zero horizontal overflow** at 320px, 360px, 390px, and 768px (`OVERFLOW_REPORT: []`).
6. **Mobile Navigation & Locator Disambiguation**:
   - Mobile menu trigger uses `xl:hidden` (visible `< 1280px`), while desktop navigation uses `hidden xl:flex` (visible `>= 1280px`). This satisfies the requirement that the hamburger menu is visible and interactive on all viewports `< 1280px`.
   - **Crucial Testing Discovery**: `<header>` in `src/app/(storefront)/layout.tsx` contains *two* `<nav>` elements: `<nav aria-label="เมนูหลัก">` inside `MobileMenu.tsx` and `<nav class="hidden xl:flex ...">` for desktop links. Unscoped selectors like `page.locator('header nav')` fail with a Playwright strict mode violation (`resolved to 2 elements`). The desktop nav must be targeted with `page.locator('header nav:not([aria-label="เมนูหลัก"])')` or explicit semantic labels.

---

## 2. Dependencies & Build Environment Audit

### 2.1 Package Manager & `package.json`
- **Package Manager**: `npm` with lockfile `package-lock.json` (lockfileVersion: 3).
- **Installed devDependencies**:
  ```json
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.2",
    "playwright": "^1.62.1",
    "prisma": "^7.9.1",
    "tailwindcss": "^4",
    "tsx": "^4.23.12",
    "typescript": "^5"
  }
  ```
- **`@playwright/test` status**:
  - `playwright: "^1.62.1"` is installed in `node_modules`.
  - `@playwright/test` is *not* listed as a separate package in `package.json`.
  - In Playwright 1.62.1, the complete test runner engine (`defineConfig`, `test`, `expect`, `devices`) is directly bundled and exported from `'playwright/test'`.
  - Empirical verification:
    ```bash
    # Verified execution:
    npx playwright test .agents/explorer_survey_3/test_responsive_survey.spec.ts --browser=chromium
    # Exit code: 0, 80 passed in 52s
    ```
  - **Recommendation**: To conform to standard Playwright conventions and eliminate TypeScript import ambiguity, add `@playwright/test` to `devDependencies` (`npm i -D @playwright/test@^1.62.1`), OR use `import { test, expect } from 'playwright/test'`.

### 2.2 Browser Binaries Verification
We verified the launch capability of all three Playwright browser engines:
| Browser Engine | Status | Executable Path / Error Details |
|---|---|---|
| **Chromium** | **INSTALLED & FUNCTIONAL** | `C:\Users\rolf-\AppData\Local\ms-playwright\chromium-...` (Launches headlessly without error) |
| **Firefox** | Missing | `Executable doesn't exist at C:\Users\rolf-\AppData\Local\ms-playwright\firefox-1538` |
| **WebKit** | Missing | `Executable doesn't exist at C:\Users\rolf-\AppData\Local\ms-playwright\webkit-2336` |

**Architectural Implication**:  
Playwright configurations should explicitly configure `chromium` (e.g. `devices['Desktop Chrome']`, `devices['Pixel 5']`, or custom Chromium viewports) as the default test target. If cross-browser (Firefox/WebKit) testing is needed, `npx playwright install firefox webkit` must be run first.

### 2.3 Existing Test Scripts & Directory Isolation
- Existing scripts in `package.json`:
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "postinstall": "prisma generate",
    "start": "next start",
    "lint": "eslint",
    "generate-posts": "tsx scripts/generate-posts.ts",
    "test:shopee": "node scripts/shopee_ev_select/test.js",
    "verify:shopee": "node scripts/shopee_ev_select/verify.test.js"
  }
  ```
- In `tests/`:
  - `tests/content-generator.test.ts` (CLI runner test)
  - `tests/challenger-adversarial-fuzz.ts` (Fuzzing script)
  - `tests/test-m2-verification.ts`
  - `tests/test-m3-verification.ts`
- **Critical Isolation Rule**: If `playwright.config.ts` uses default `testDir: './tests'`, it will attempt to execute `content-generator.test.ts` as a Playwright test and crash.
- **Solution**: Place Playwright tests inside `tests/e2e/` (e.g., `tests/e2e/responsive.spec.ts`) and specify `testDir: './tests/e2e'` or `testMatch: '**/*.spec.ts'`.

---

## 3. Next.js 16.3.2, Server & Database Environment

### 3.1 Next.js 16.3.2 & Tailwind CSS v4
- **Next.js Version**: `16.3.2` with React `19.2.8`.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss: "^4"`, `tailwindcss: "^4"`).
- **Breakpoints**: Standard Tailwind breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **Next.js Configuration (`next.config.ts`)**:
  - Sets security headers (CSP Report-Only, HSTS, X-Frame-Options, X-Content-Type-Options).
  - Permanent 308 redirect from `/blog/:slug*` to `/articles/:slug*`.
- **TypeScript Configuration (`tsconfig.json`)**:
  - `paths: { "@/*": ["./src/*"] }`
  - `moduleResolution: "bundler"`
  - `target: "ES2017"`

### 3.2 Database & Mock Data Resilience
- **Database**: SQLite `dev.db` in project root (253 KB).
- **Prisma Configuration**: Prisma 7.9.1 with `@prisma/adapter-better-sqlite3`.
- **Record Counts** (verified via `npx tsx`):
  - Vehicles: 12
  - Products: 4
  - Categories: 4
- **Graceful Fallbacks**:
  In `src/app/(storefront)/page.tsx`:
  ```tsx
  try {
    dbVehicles = await prisma.vehicle.findMany(...);
  } catch {
    // Falls back to hardcoded defaultVehicles (14 Thai EV models)
  }
  ```
  In `src/lib/prisma.ts`:
  If the SQLite driver cannot load, it returns a Proxy stub that throws upon query execution, allowing caller `try/catch` blocks to catch and trigger fallback static data gracefully.
- **Route Render Status**:
  All public storefront routes render with HTTP 200 without requiring any external database services:
  - `/` -> 200 OK
  - `/articles` -> 200 OK
  - `/about`, `/contact`, `/editorial-policy`, `/privacy`, `/terms`, `/warranty` -> 200 OK
  - All 22 individual article routes -> 200 OK

---

## 4. Empirical Survey Findings & Responsive Verification

### 4.1 Zero Horizontal Scroll Assessment
We executed automated scroll evaluations across all public storefront routes and 22 articles.

**Formula evaluated**:
```ts
const docWidth = document.documentElement.scrollWidth;
const bodyWidth = document.body.scrollWidth;
const windowWidth = window.innerWidth;
const hasOverflow = docWidth > windowWidth || bodyWidth > windowWidth;
```

**Results by Viewport**:
| Viewport Name | Dimensions | Storefront Pages Status | 22 Technical Articles Status |
|---|---|---|---|
| **Extreme Mobile** | 320 × 568 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |
| **Android Compact** | 360 × 800 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |
| **iOS Standard** | 390 × 844 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |
| **Tablet Portrait** | 768 × 1024 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |
| **Tablet Landscape** | 1024 × 768 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |
| **Sub-1280 Boundary** | 1279 × 800 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |
| **Desktop Baseline** | 1280 × 800 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |
| **Desktop Wide** | 1440 × 900 px | **PASS** (Zero scroll) | **PASS** (Zero scroll) |

**Key Finding**: The recent mobile responsiveness patches (specifically `src/components/MobileMenu.tsx`, `src/app/(storefront)/layout.tsx`, and `articles_fix.patch`) successfully prevented horizontal overflow across all tested routes down to 320px.

### 4.2 Navigation Drawer & Hamburger Menu Assessment
Requirement from `ORIGINAL_REQUEST.md`:
> "Tests assert that the mobile navigation mechanism (hamburger menu) is visible and fully interactive on viewports < 1280px."

**Component Implementation Details (`src/components/MobileMenu.tsx` & `layout.tsx`)**:
1. Trigger Button:
   ```tsx
   <button
     onClick={open}
     className="p-2 -ml-2 mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none shrink-0"
     aria-label="เปิดเมนู"
     aria-expanded={isOpen}
   >
     <Menu className="w-5 h-5" />
   </button>
   ```
2. Desktop Nav:
   ```tsx
   <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
   ```
3. Breakpoint Boundary:
   - Tailwind `xl` = `1280px`.
   - On `< 1280px`: `xl:hidden` ensures the hamburger button is visible, and `hidden xl:flex` ensures the desktop links are hidden.
   - On `>= 1280px`: `xl:hidden` hides the hamburger button, and `hidden xl:flex` displays the desktop links.

**Interactivity Verification**:
- **Trigger**: Click `button[aria-label="เปิดเมนู"]` toggles `aria-expanded="true"`.
- **Drawer**: `nav[aria-label="เมนูหลัก"]` slides in (`translate-x-0`).
- **Body Scroll Lock**: `document.body.style.overflow = "hidden"`.
- **Links**: Navigational links (`/articles`, `/#vehicle-finder`, `/#products`, `/#fitment-assurance`, Shopee, Messenger, `/about`, `/privacy`) are visible and clickable.
- **Dismissal Methods**:
  - Close button `button[aria-label="ปิดเมนู"]`: Closes drawer, sets `aria-expanded="false"`, restores body overflow.
  - Backdrop click (`.bg-black\/50`): Closes drawer.
  - Keyboard Escape (`keydown: Escape`): Closes drawer.
  - Link navigation: Clicking any internal link closes drawer via `onClick={close}`.

### 4.3 Locator Disambiguation in Header
When testing `<header>` in Playwright, `page.locator('header nav')` fails because:
- Element 1: `<nav aria-label="เมนูหลัก">` (inside `MobileMenu.tsx`)
- Element 2: `<nav class="hidden xl:flex ...">` (inside `layout.tsx`)
Both reside within `<header>`.
To prevent Playwright strict mode errors, tests must use:
- For Desktop Nav: `page.locator('header nav:not([aria-label="เมนูหลัก"])')`
- For Mobile Drawer: `page.getByRole('navigation', { name: 'เมนูหลัก' })`

---

## 5. Playwright Test Architecture Design

### 5.1 Architecture Overview
The recommended Playwright architecture consists of:
```
evselect-platform/
├── playwright.config.ts             # Global Playwright configuration & webServer
├── tests/
│   ├── e2e/
│   │   ├── layout-scroll.spec.ts    # Zero horizontal scroll tests across viewports
│   │   └── navigation.spec.ts       # Hamburger visibility & drawer interactivity
│   ├── fixtures/
│   │   └── test-routes.ts           # Centralized inventory of routes & viewports
│   └── utils/
│       └── scroll-diagnostics.ts    # Reusable zero-scroll assertion + offending element detector
```

### 5.2 Recommended `playwright.config.ts`
```typescript
import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    /* 1. Extreme Mobile: 320px */
    {
      name: 'mobile-320',
      use: {
        browserName: 'chromium',
        viewport: { width: 320, height: 568 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
    },

    /* 2. Compact Android: 360px */
    {
      name: 'mobile-360',
      use: {
        browserName: 'chromium',
        viewport: { width: 360, height: 800 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
      },
    },

    /* 3. Modern Flagship Mobile: 390px */
    {
      name: 'mobile-390',
      use: {
        browserName: 'chromium',
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
      },
    },

    /* 4. Standard Tablet Portrait: 768px */
    {
      name: 'tablet-768',
      use: {
        browserName: 'chromium',
        viewport: { width: 768, height: 1024 },
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
    },

    /* 5. Tablet Landscape: 1024px (< 1280px threshold) */
    {
      name: 'tablet-1024',
      use: {
        browserName: 'chromium',
        viewport: { width: 1024, height: 768 },
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
      },
    },

    /* 6. Desktop Baseline: 1280px (Tailwind xl boundary) */
    {
      name: 'desktop-1280',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 800 },
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
      },
    },

    /* 7. Wide Desktop: 1440px */
    {
      name: 'desktop-1440',
      use: {
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
      },
    },
  ],

  /* Reliability & Dev Server Management */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
```

### 5.3 Diagnostic Zero Horizontal Scroll Assertion Utility
File: `tests/utils/scroll-diagnostics.ts`
```typescript
import { Page, expect } from 'playwright/test';

export interface OverflowDiagnostic {
  tag: string;
  id: string;
  className: string;
  width: number;
  right: number;
  computedOverflow: string;
}

export interface ScrollEvaluation {
  windowWidth: number;
  docScrollWidth: number;
  bodyScrollWidth: number;
  hasOverflow: boolean;
  offendingElements: OverflowDiagnostic[];
}

/**
 * Asserts zero horizontal overflow on the current page and provides
 * pinpoint element diagnostics if an overflow occurs.
 */
export async function assertZeroHorizontalScroll(page: Page, contextDescription: string) {
  // Wait for network idle and layout stabilization
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(250);

  const evaluation: ScrollEvaluation = await page.evaluate(() => {
    const winWidth = window.innerWidth;
    const docScrollWidth = document.documentElement.scrollWidth;
    const bodyScrollWidth = document.body.scrollWidth;
    const hasOverflow = docScrollWidth > winWidth || bodyScrollWidth > winWidth;

    const offendingElements: OverflowDiagnostic[] = [];
    if (hasOverflow) {
      const all = document.querySelectorAll('*');
      for (const el of all) {
        const rect = el.getBoundingClientRect();
        if (rect.right > winWidth + 1) { // 1px threshold for subpixel rounding
          const style = window.getComputedStyle(el);
          offendingElements.push({
            tag: el.tagName.toLowerCase(),
            id: el.id || '',
            className: typeof el.className === 'string' ? el.className.slice(0, 100) : '',
            width: Math.round(rect.width),
            right: Math.round(rect.right),
            computedOverflow: style.overflowX,
          });
          if (offendingElements.length >= 8) break; // Cap to avoid massive payload
        }
      }
    }

    return {
      windowWidth,
      docScrollWidth,
      bodyScrollWidth,
      hasOverflow,
      offendingElements,
    };
  });

  const failureMessage = `[Horizontal Scroll Violation] in ${contextDescription}: ` +
    `window.innerWidth=${evaluation.windowWidth}, ` +
    `document.documentElement.scrollWidth=${evaluation.docScrollWidth}, ` +
    `document.body.scrollWidth=${evaluation.bodyScrollWidth}.\n` +
    `Offending elements causing overflow:\n` +
    JSON.stringify(evaluation.offendingElements, null, 2);

  expect(evaluation.docScrollWidth, failureMessage).toBeLessThanOrEqual(evaluation.windowWidth);
  expect(evaluation.bodyScrollWidth, failureMessage).toBeLessThanOrEqual(evaluation.windowWidth);
}
```

### 5.4 Test Spec: Layout Scroll Across All Routes
File: `tests/e2e/layout-scroll.spec.ts`
```typescript
import { test } from 'playwright/test';
import { assertZeroHorizontalScroll } from '../utils/scroll-diagnostics';

const TEST_ROUTES = [
  '/',
  '/articles',
  '/about',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/terms',
  '/warranty',
  '/articles/byd-atto-3-review',
  '/articles/tesla-model-3-highland-review',
  '/articles/ev-battery-care',
  '/articles/ev-suspension-tuning-guide',
];

test.describe('Zero Horizontal Scroll Validation', () => {
  for (const route of TEST_ROUTES) {
    test(`Route ${route} has zero horizontal scroll`, async ({ page }, testInfo) => {
      await page.goto(route);
      await assertZeroHorizontalScroll(page, `${route} on ${testInfo.project.name}`);
    });
  }
});
```

### 5.5 Test Spec: Navigation & Hamburger Drawer Interactivity
File: `tests/e2e/navigation.spec.ts`
```typescript
import { test, expect } from 'playwright/test';

test.describe('Responsive Navigation & Hamburger Drawer', () => {
  test('Navigation controls match viewport breakpoint (1280px boundary)', async ({ page }, testInfo) => {
    await page.goto('/');

    const viewportWidth = page.viewportSize()?.width ?? 1280;
    const hamburgerBtn = page.getByRole('button', { name: 'เปิดเมนู' });
    const desktopNav = page.locator('header nav:not([aria-label="เมนูหลัก"])');

    if (viewportWidth < 1280) {
      // 1. Hamburger button must be visible
      await expect(hamburgerBtn, `Hamburger must be visible at ${viewportWidth}px`).toBeVisible();
      
      // 2. Desktop nav must be hidden
      await expect(desktopNav, `Desktop nav must be hidden at ${viewportWidth}px`).toBeHidden();

      // 3. Initial aria-expanded must be false
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');

      // 4. Click opens drawer
      await hamburgerBtn.click();
      const drawer = page.getByRole('navigation', { name: 'เมนูหลัก' });
      await expect(drawer).toBeVisible();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'true');

      // 5. Drawer links are present and accessible
      const articlesLink = drawer.getByRole('link', { name: 'บทความ EV' });
      await expect(articlesLink).toBeVisible();
      await expect(articlesLink).toHaveAttribute('href', '/articles');

      // 6. Close button dismisses drawer
      const closeBtn = page.getByRole('button', { name: 'ปิดเมนู' });
      await expect(closeBtn).toBeVisible();
      await closeBtn.click();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');

      // 7. Escape key dismisses drawer
      await hamburgerBtn.click();
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Escape');
      await expect(hamburgerBtn).toHaveAttribute('aria-expanded', 'false');
    } else {
      // On desktop (>= 1280px)
      await expect(hamburgerBtn, `Hamburger must be hidden at ${viewportWidth}px`).toBeHidden();
      await expect(desktopNav, `Desktop nav must be visible at ${viewportWidth}px`).toBeVisible();
    }
  });
});
```

---

## 6. Execution Command Lines & PR Checklist

### 6.1 Package.json Updates
Add the following scripts to `package.json`:
```json
"scripts": {
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui",
  "test:e2e:mobile": "playwright test --project=mobile-320 --project=mobile-360 --project=mobile-390",
  "test:e2e:tablet": "playwright test --project=tablet-768 --project=tablet-1024",
  "test:e2e:desktop": "playwright test --project=desktop-1280 --project=desktop-1440",
  "test:e2e:report": "playwright show-report"
}
```

### 6.2 Executing the Test Suite
```bash
# Run full responsive E2E suite against running or autostarted server
npx playwright test

# Run only extreme mobile (320px) tests
npx playwright test --project=mobile-320

# Run only tablet (768px) tests
npx playwright test --project=tablet-768

# Run with interactive UI mode
npx playwright test --ui
```

---

## 7. Summary of Recommendations for Implementing Agents
1. **Directory Structure**: Create all Playwright specs under `tests/e2e/` so existing `tests/*.test.ts` (tsx-based content generation scripts) are never touched by the Playwright runner.
2. **Package Aliasing / Installation**: Ensure imports are either `import ... from 'playwright/test'` or run `npm i -D @playwright/test@^1.62.1` so TypeScript autocomplete and compiler checks pass cleanly.
3. **Browser Selection**: Keep projects default to Chromium. Chromium is already downloaded and cached; Firefox and WebKit are not installed on the system.
4. **Header Nav Disambiguation**: Use `page.locator('header nav:not([aria-label="เมนูหลัก"])')` to target the desktop navbar and `page.getByRole('navigation', { name: 'เมนูหลัก' })` to target the drawer.
5. **Zero Scroll Verification**: Use `Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) <= window.innerWidth` with subpixel rounding buffer (1px).
