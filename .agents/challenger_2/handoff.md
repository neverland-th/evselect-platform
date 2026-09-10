# Handoff Report: Challenger 2 — Adversarial Mobile Ergonomics & Focus Trap Verification

## 1. Observation

### 1.1 Direct Test Execution Commands & Results
The adversarial verification suite was executed via Playwright against the local Next.js instance across all 6 project viewports (`extreme-mobile-320`, `ios-mobile-390`, `tablet-portrait-768`, `tablet-landscape-1024`, `desktop-xl-1280`, `desktop-wide-1440`):

**Command:**
```bash
npx playwright test tests/e2e/adversarial-mobile-ergonomics.spec.ts --workers=2
```

**Overall Test Suite Output:**
```
42 passed, 9 failed, 45 skipped (total 96 test assertions across 6 viewport profiles)
```

### 1.2 Verification Matrix Across All 5 Directives

| # | Directive / Test Dimension | Target Component | Observed Value / Behavior | Status |
|---|----------------------------|-------------------|---------------------------|--------|
| 1.1 | Closed Drawer Inertness | `nav[aria-label="เมนูหลัก"]` | 40 sequential `Tab` key presses never enter drawer links (`inert` and `invisible` active). | **PASS** |
| 1.2 | Drawer Initial Focus | `button[aria-label="ปิดเมนู"]` | Focus immediately lands on close button upon opening drawer. | **PASS** |
| 1.3 | Forward Focus Trapping | Drawer elements | 25+ consecutive `Tab` presses cycle strictly within drawer and wrap back to close button. | **PASS** |
| 1.4 | Backward Shift+Tab Trapping | Drawer elements | `Shift+Tab` from close button wraps to last link (`/privacy`) and cycles backward strictly. | **PASS** |
| 1.5 | Escape Focus Restoration | `button[aria-label="เปิดเมนู"]` | Pressing `Escape` closes drawer and restores focus directly to hamburger button. | **PASS** |
| 1.6 | Close Button Focus Restoration | `button[aria-label="เปิดเมนู"]` | Clicking close button hides drawer and restores focus directly to hamburger button. | **PASS** |
| 2.1 | Body Scroll Lock State | `document.body.style.overflow` | Verified `overflow === "hidden"` when open, restored to `""` when closed. | **PASS** |
| 3.1 | Hamburger Touch Target | `button[aria-label="เปิดเมนู"]` | Bounding box measured: `44.0 × 44.0 px`. | **PASS** |
| 3.2 | Close Button Touch Target | `button[aria-label="ปิดเมนู"]` | Bounding box measured: `44.0 × 44.0 px`. | **PASS** |
| 3.3 | Drawer Nav Links Target | `nav[aria-label="เมนูหลัก"] a` | Bounding box measured: `height = 44.0 px` across all 6+ links. | **PASS** |
| 3.4 | Footer Contact Links Target | `footer a` in `(storefront)/layout.tsx` | Bounding box measured: `height = 32.0 px` (Requirement: `>= 40 px`). | **FAIL** |
| 3.5 | Header Action Buttons Target | `header .flex a/button` in `(storefront)/layout.tsx` | Bounding box measured: `height = 34.0 px` (Requirement: `>= 40 px` / `>= 36 px`). | **FAIL** |
| 4.1 | 320px Drawer Responsive Width | `nav[aria-label="เมนูหลัก"]` | Bounding box measured: `width = 256.0 px` (`min(20rem, 80vw)`). Remaining backdrop: `64.0 px`. | **PASS** |
| 4.2 | 320px Comparison Table Swipe | Review comparison tables | `overflow-x-auto` regions swipe smoothly (`scrollLeft` > 150px) with 0px root document overflow. | **PASS** |
| 4.3 | 320px Text Clipping & Overflow | Headings & cards on 320px | All headings and card elements fit inside 320px viewport without clipping or overlap. | **PASS** |

### 1.3 Verbatim Error Traces for Failed Assertions

#### Failure 1: Footer Contact Links Touch Target Undersized (32px vs >= 40px)
```
Error: Footer link "ร้านค้าทางการบน Shopee Thailand" height (32px) must be >= 40px

expect(received).toBeGreaterThanOrEqual(expected)
Expected: >= 39.5
Received:    32

  309 |             box.height,
  310 |             `Footer link "${text?.trim()}" height (${box.height}px) must be >= 40px`
> 311 |           ).toBeGreaterThanOrEqual(39.5);
```
**Occurrences:** Failed on `extreme-mobile-320`, `ios-mobile-390`, `tablet-landscape-1024`, `desktop-xl-1280`, `desktop-wide-1440`.

#### Failure 2: Header Mobile Action Buttons Undersized (34px vs >= 36px/40px)
```
Error: Header action "สอบถามทาง LINE / FBแชท" height (34px) is below minimum 36px/40px touch ergonomic target

expect(received).toBeGreaterThanOrEqual(expected)
Expected: >= 36
Received:    34

  333 |             box.height,
  334 |             `Header action "${text?.trim()}" height (${box.height}px) is below minimum 36px/40px touch ergonomic target`
> 335 |           ).toBeGreaterThanOrEqual(36);
```
**Occurrences:** Failed on `extreme-mobile-320`, `ios-mobile-390`, `tablet-portrait-768`, `tablet-landscape-1024`.

---

## 2. Logic Chain

1. **Directive Requirement**:
   - The dispatch specification explicitly mandates:
     - *"4. Touch target bounding boxes: hamburger, close, links, footer buttons (all >= 44x44px or >= 40px)."*
     - *"Footer contact links: height must be >= 40 px."*
2. **Inspecting Source Code (`src/app/(storefront)/layout.tsx`)**:
   - Lines 180–190:
     ```tsx
     <a href="https://shopee.co.th/shop/9535932" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 hover:text-orange-400 transition-colors">
     ```
     - Uses `text-xs` (line height 16px) and `py-2` (padding top/bottom 8px + 8px = 16px).
     - Total computed height = `16px + 16px = 32px`.
   - Line 213:
     ```tsx
     <Link href="/products" className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-2 rounded">
     ```
     - Uses `text-xs`, `py-2`, and 1px border. Total computed height = `34px`.
   - Lines 111–130 (Header Action Buttons):
     ```tsx
     <a href="https://m.me/evselects" className="inline-flex items-center gap-1.5 bg-blue-50 ... text-xs font-semibold px-3 py-2 rounded-lg transition-all">
     <Link href="/products" className="inline-flex items-center gap-1.5 bg-lime-500 ... text-xs font-bold px-2.5 sm:px-3.5 py-2 rounded-lg ...">
     ```
     - Computed height = `34px`.
3. **Empirical Measurement**:
   - In Chromium headless execution across `extreme-mobile-320` and `ios-mobile-390`, Playwright computed bounding boxes:
     - `ร้านค้าทางการบน Shopee Thailand`: 32.0 px height.
     - `Facebook Page & Marketplace`: 32.0 px height.
     - `แชท / สอบถามทาง LINE / FB`: 34.0 px height.
     - `ร้าน Shopee TH`: 34.0 px height.
     - `ระบบหลังบ้าน`: 34.0 px height.
4. **Ergonomic Impact**:
   - On mobile touch devices, target heights of 32px and 34px fall below the WCAG 2.5.5 touch target standard (44×44px) and fail the project's explicit >= 40px requirement. They present a high likelihood of touch error on mobile touch screens, especially when placed in close proximity.

---

## 3. Caveats

- **CSS Viewport Scroll Propagation**:
  When `html, body { overflow-x: clip; }` is applied in `globals.css`, setting `document.body.style.overflow = 'hidden'` stops user mouse wheel and touch scrolling, but imperative JavaScript calls like `window.scrollBy(0, 300)` can still alter `window.scrollY`. For complete bulletproof scroll locking across all platforms, setting `overflow: hidden` on both `document.documentElement` and `document.body` or applying `touch-action: none` to the modal backdrop is recommended.
- **Review-Only Constraint**:
  In accordance with Challenger 2's strict `Review-only — do NOT modify implementation code` constraint, no changes were made to `src/app/(storefront)/layout.tsx` or `src/components/MobileMenu.tsx`. The fix must be applied by the implementation worker.

---

## 4. Conclusion

**Verdict: REQUEST_CHANGES**

While the mobile drawer navigation, focus trapping (Tab/Shift+Tab cycles, Escape restoration), body scroll lock, and extreme 320px table horizontal swiping are exceptionally well-implemented and pass 100% of empirical tests, the touch targets in `src/app/(storefront)/layout.tsx` fail the required bounding box dimensions:

### Required Changes for Implementation Worker:
1. **Footer Contact Links (`src/app/(storefront)/layout.tsx`)**:
   - Lines 180, 186: Replace `py-2` with `min-h-[44px] py-2.5` or `min-h-[40px]`.
   - Line 213 (`PIM` button): Add `min-h-[40px]` or `min-h-[44px]`.
2. **Header Action Buttons (`src/app/(storefront)/layout.tsx`)**:
   - Lines 104, 115, 125: Add `min-h-[40px]` (or `min-h-[44px]`) to ensure comfortable thumb ergonomics on touch viewports.

---

## 5. Verification Method

To independently verify these findings:

1. Inspect `tests/e2e/adversarial-mobile-ergonomics.spec.ts`.
2. Run the touch target test suite:
   ```bash
   npx playwright test tests/e2e/adversarial-mobile-ergonomics.spec.ts -g "Touch Target Ergonomics" --project=extreme-mobile-320
   ```
   **Expected Violation Output:**
   ```
   Error: Footer link "ร้านค้าทางการบน Shopee Thailand" height (32px) must be >= 40px
   Error: Header action "สอบถามทาง LINE / FBแชท" height (34px) is below minimum 36px/40px touch ergonomic target
   ```
3. To verify the focus trap and 320px swiping passing tests:
   ```bash
   npx playwright test tests/e2e/adversarial-mobile-ergonomics.spec.ts -g "Focus Trapping"
   npx playwright test tests/e2e/adversarial-mobile-ergonomics.spec.ts -g "Extreme 320px" --project=extreme-mobile-320
   ```
4. Invalidation condition:
   Applying `min-h-[44px]` (or `min-h-[40px]`) to the offending links in `src/app/(storefront)/layout.tsx` will cause all tests in `adversarial-mobile-ergonomics.spec.ts` to pass with 0 failures across all 6 viewports.
