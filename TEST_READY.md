# E2E Test Suite Specification & Runner Guide (TEST_READY.md)

**Platform:** EVSELECT Thailand (`evselect-platform`)  
**Test Framework:** Playwright 1.62.1  
**Runner Target Directory:** `./tests/e2e`  
**Configuration File:** `playwright.config.ts`  
**Test Isolation:** Completely isolated from legacy CLI unit tests (`tests/*.ts`).

---

## 1. Test Suite Architecture

The E2E testing infrastructure is designed to verify mobile/responsive UI/UX integrity across all supported viewport breakpoints, ensuring:
1. **Zero Horizontal Document Overflow:** No horizontal scrollbar across any route at any viewport width down to 320px.
2. **Responsive Navigation & Drawer Interactivity:** Hamburger menu visible and interactive on viewports `< 1280px`; desktop navigation visible on viewports `>= 1280px`.

### Project Structure
```
evselect-platform/
├── playwright.config.ts             # Global Playwright configuration & webServer
├── tests/
│   ├── e2e/
│   │   ├── responsive-scroll.spec.ts # Zero horizontal scroll validation across 30 routes
│   │   ├── mobile-navigation.spec.ts # Hamburger, drawer interactivity, & desktop nav
│   │   └── utils/
│   │       └── scroll-diagnostics.ts # Reusable assertion with overflowing element locator
│   └── ... (legacy CLI tests preserved in tests/*.ts)
```

---

## 2. Viewport Coverage Tiers

Playwright is configured with 6 Chromium projects covering key responsive boundaries:

| Project Name | Dimensions (W × H) | DPR | Device Profile | Expected Header Mode |
|---|---|---|---|---|
| `extreme-mobile-320` | 320 × 568 px | 2 | Compact/Budget mobile (iPhone SE 1st gen) | Hamburger Drawer (`xl:hidden`) |
| `ios-mobile-390` | 390 × 844 px | 3 | Modern Flagship Mobile (iPhone 12/13/14/15) | Hamburger Drawer (`xl:hidden`) |
| `tablet-portrait-768` | 768 × 1024 px | 2 | iPad Portrait / Standard Tablet | Hamburger Drawer (`xl:hidden`) |
| `tablet-landscape-1024`| 1024 × 768 px | 2 | iPad Landscape / Small Laptop | Hamburger Drawer (`xl:hidden`) |
| `desktop-xl-1280` | 1280 × 800 px | 1 | Tailwind `xl` boundary / Standard Laptop | Desktop Navbar (`hidden xl:flex`) |
| `desktop-wide-1440` | 1440 × 900 px | 1 | Desktop Wide Screen / iMac | Desktop Navbar (`hidden xl:flex`) |

---

## 3. Test Specifications & Coverage

### 3.1 Zero Horizontal Scroll (`tests/e2e/responsive-scroll.spec.ts`)
Programmatically evaluates 30 storefront routes across all 6 viewports (180 assertions):
- **Storefront Home:** `/`
- **Articles Index:** `/articles`
- **Information & Legal:** `/about`, `/contact`, `/editorial-policy`, `/privacy`, `/terms`, `/warranty`
- **22 EV Review & Technical Articles:**
  - `/articles/byd-atto-3-review`
  - `/articles/byd-seal-review`
  - `/articles/deepal-s05-review`
  - `/articles/deepal-s07-review`
  - `/articles/ev-battery-care`
  - `/articles/ev-camber-adjustment-wheel-alignment-guide`
  - `/articles/ev-carbon-ceramic-brakes-guide`
  - `/articles/ev-damper-tuning-bump-rebound-guide`
  - `/articles/ev-horsepower-vs-torque-explained`
  - `/articles/ev-performance-driving-techniques`
  - `/articles/ev-suspension-tuning-guide`
  - `/articles/ev-tyre-and-coilover-selection-guide`
  - `/articles/geely-ex2-review`
  - `/articles/hybrid-to-ev-chassis-dynamics-transition`
  - `/articles/mg4-electric-review`
  - `/articles/optimizing-ev-suspension-thai-roads`
  - `/articles/shock-absorber-types-monotube-twintube-air-ev`
  - `/articles/tesla-model-3-highland-review`
  - `/articles/tesla-model-y-l-premium-6-seater-review`
  - `/articles/zeekr-009-review`
  - `/articles/zeekr-7x-2026-review`
  - `/articles/zeekr-x-review`

**Assertion Contracts:**
```ts
expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(document.documentElement.clientWidth);
expect(document.body.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
```

### 3.2 Mobile Navigation & Drawer Interactivity (`tests/e2e/mobile-navigation.spec.ts`)
Evaluates header adaptation across the 1280px breakpoint:
- **On Viewports < 1280px:**
  - Hamburger button (`button[aria-label="เปิดเมนู"]`) is visible and clickable.
  - Desktop nav (`header nav:not([aria-label="เมนูหลัก"])`) is hidden.
  - Hamburger click opens drawer (`nav[aria-label="เมนูหลัก"]`) with `aria-expanded="true"`.
  - Drawer links (articles, about, privacy) are present and visible.
  - Dismissal via close button (`button[aria-label="ปิดเมนู"]`) hides drawer and sets `aria-expanded="false"`.
  - Dismissal via `Escape` key hides drawer, sets `aria-expanded="false"`, and restores focus to hamburger trigger.
  - Clicking an internal link navigates to target route and closes drawer.
- **On Viewports >= 1280px:**
  - Hamburger button is hidden (`not.toBeVisible()`).
  - Desktop nav is visible (`toBeVisible()`).
  - Desktop links are accessible.

---

## 4. Execution Commands

### Run Full Test Suite
```bash
npx playwright test
```

### Run Specific Test Spec
```bash
# Run only mobile navigation tests
npx playwright test tests/e2e/mobile-navigation.spec.ts

# Run only responsive scroll tests
npx playwright test tests/e2e/responsive-scroll.spec.ts
```

### Run by Viewport Project
```bash
# Extreme mobile (320px)
npx playwright test --project=extreme-mobile-320

# iOS mobile (390px)
npx playwright test --project=ios-mobile-390

# Standard Tablet (768px)
npx playwright test --project=tablet-portrait-768

# Desktop baseline (1280px)
npx playwright test --project=desktop-xl-1280
```

### Interactive UI & HTML Reports
```bash
# Launch interactive Playwright UI runner
npx playwright test --ui

# View HTML test execution report
npx playwright show-report
```

---

## 5. Escalations & Implementation Notes

- **Implementation Bug Discovered in `src/app/(storefront)/articles/page.tsx`:**  
  Articles index includes remote images from `https://images.unsplash.com/` (lines 377, 411, 445, 479, 547, 581, 615), but `images.unsplash.com` is not listed in `next.config.ts` under `images.remotePatterns`. This triggers an unhandled Next.js error when rendering `/articles`.  
  *Escalation Recommendation:* Add `images.unsplash.com` to `remotePatterns` in `next.config.ts`, or replace external image URLs with local paths under `/images/articles/`.
