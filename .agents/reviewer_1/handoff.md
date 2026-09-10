# Handoff Report: Reviewer 1 — Mobile Navigation, Responsive Architecture, A11y & Next.js Configuration

**Agent:** `reviewer_1`  
**Roles:** Reviewer, Adversarial Critic  
**Working Directory:** `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\reviewer_1`  
**Project Root:** `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`  
**Date:** 2026-09-10  
**Verdict:** **APPROVE**  

---

## 1. Observation

### 1.1 Code Modifications Audited
Direct observations across the 5 target files from git diff and source inspections:

1. **`src/components/MobileMenu.tsx`:**
   - **Focus Management & Trap (lines 8–81):** Added `triggerRef`, `navRef`, `closeButtonRef`, and `prevIsOpenRef`. On open (`isOpen === true`), locks body scroll (`document.body.style.overflow = "hidden"`) and schedules focus onto `closeButtonRef.current?.focus()` after 50ms. On close, restores focus to `triggerRef.current?.focus()`.
   - **Keyboard Listener (lines 45–81):** Intercepts `Escape` to close drawer and prevent default. Intercepts `Tab` and `Shift+Tab` to trap focus between `firstElement` (`closeButtonRef`) and `lastElement` inside `navRef.current`.
   - **Off-screen Hiding & Inert (lines 97–114):**
     ```tsx
     {/* Backdrop */}
     <div
       className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
         isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
       }`}
       onClick={close}
       aria-hidden="true"
     />

     {/* Slide-in Drawer */}
     <nav
       ref={navRef}
       className={`fixed top-0 left-0 z-[101] h-full w-[min(20rem,80vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
         isOpen ? "translate-x-0" : "-translate-x-full invisible"
       }`}
       aria-label="เมนูหลัก"
       aria-hidden={!isOpen}
       inert={!isOpen ? true : undefined}
     >
     ```
   - **Touch Targets & Normalized Icons (lines 89, 123, 135–213):** Hamburger button and close button have `min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2`. All navigation and external links have `min-h-[44px] px-3 py-3`. All Lucide icon widths are normalized from non-standard `w-4.5 h-4.5` to `w-5 h-5`.

2. **`src/app/globals.css` (lines 21–40):**
   - Added root overflow rule:
     ```css
     html,
     body {
       overflow-x: clip;
     }
     ```
   - Added cross-browser scrollbar utility:
     ```css
     .scrollbar-none {
       -ms-overflow-style: none;
       scrollbar-width: none;
     }
     .scrollbar-none::-webkit-scrollbar {
       display: none;
     }
     ```

3. **`src/app/layout.tsx` (lines 1–9):**
   - Exported explicit viewport configuration:
     ```tsx
     export const viewport: Viewport = {
       width: "device-width",
       initialScale: 1,
       maximumScale: 5,
     };
     ```

4. **`src/app/(storefront)/layout.tsx` (lines 47–95, 180–214):**
   - Header navigation breakpoint updated from `md` (`768px`) to `xl` (`1280px`):
     - Mobile menu & logo: `xl:hidden`
     - Desktop nav & logo: `hidden xl:flex`
   - Touch target padding `py-2` added to footer links (Shopee, Messenger, Line, PIM).

5. **`next.config.ts` (lines 7, 17–24):**
   - Authorized Unsplash host under `images.remotePatterns`:
     ```ts
     images: {
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'images.unsplash.com',
         },
       ],
     },
     ```
   - Updated Content Security Policy `img-src` header:
     ```
     img-src 'self' blob: data: https://images.unsplash.com;
     ```

### 1.2 Independent Verification Tool Runs
1. **`npm run build`:**
   ```
   > evselect-platform@0.1.0 build
   > prisma generate && next build

   ✔ Generated Prisma Client (7.9.1) to .\src\generated\prisma in 47ms
   ▲ Next.js 16.3.2 (Turbopack)
   ✓ Running next.config.ts took 24ms
   ✓ Compiled successfully in 927ms
   ✓ Finished TypeScript in 1934ms ...
   ✓ Generating static pages using 19 workers (40/40) in 640ms
   Exit code: 0
   ```
2. **`npx playwright test`:**
   ```
   2 skipped
   190 passed (2.9m)
   Exit code: 0
   ```
   All 190 test assertions passed across 6 viewport tiers (`extreme-mobile-320`, `ios-mobile-390`, `tablet-portrait-768`, `tablet-landscape-1024`, `desktop-xl-1280`, `desktop-wide-1440`).

3. **Integrity Violations Check:**
   - No hardcoded test results, test bypasses, or environment-specific short-circuits.
   - No dummy or facade implementations; all focus trapping, inert application, and CSS styling are production-grade implementations.
   - Zero integrity violations detected.

---

## 2. Logic Chain

1. **Off-Screen Focus Leak Remediation:**
   - *Observation:* `MobileMenu.tsx` previously used `-translate-x-full` without `invisible` or `inert`.
   - *Inference:* Off-screen elements remained in the accessibility tree and keyboard tab order, causing tabbing to disappear into invisible elements.
   - *Validation:* By combining `invisible` (CSS `visibility: hidden`), `inert={!isOpen ? true : undefined}`, and `aria-hidden={!isOpen}`, the drawer is completely removed from keyboard navigation and screen readers when closed. Stress testing confirmed 40 continuous `Tab` presses never leak into the closed drawer.

2. **Focus Management & Focus Trapping:**
   - *Observation:* Opening the drawer shifts focus to `closeButtonRef` after a 50ms frame delay; closing via `Escape`, close button, or backdrop restores focus to `triggerRef`.
   - *Inference:* Preserves logical focus order (WCAG 2.4.3) and prevents keyboard users from getting lost on the page.
   - *Validation:* Keyboard listener traps focus between `firstElement` and `lastElement`. Stress testing verified 25 forward `Tab` cycles and 15 reverse `Shift+Tab` cycles without escaping the drawer.

3. **Global Horizontal Overflow Standard:**
   - *Observation:* `globals.css` sets `html, body { overflow-x: clip; }`.
   - *Inference:* `overflow-x: clip` suppresses horizontal scrolling without creating an independent scroll container that breaks `position: sticky` on iOS Safari WebKit.
   - *Validation:* Automated zero-scroll tests evaluated 30 routes across 6 viewports (320px to 1440px) and confirmed `document.documentElement.scrollWidth <= document.documentElement.clientWidth` and `document.body.scrollWidth <= window.innerWidth` across all routes.

4. **Next.js Image & CSP Configuration:**
   - *Observation:* `next.config.ts` was missing `images.remotePatterns` for `images.unsplash.com` and matching CSP `img-src`.
   - *Inference:* `next/image` throws runtime errors when rendering external images from unauthorized hosts, and CSP blocks requests.
   - *Validation:* Adding `remotePatterns` and updating CSP allows Unsplash assets to prerender and load cleanly during `npm run build` and route visits.

---

## 3. Findings & Observations

### [Minor] Finding 1: Storefront Footer Contact Touch Target Height
- **What:** Footer contact links have a computed bounding box height of ~32px (`py-2` with `text-xs`).
- **Where:** `src/app/(storefront)/layout.tsx:180-201`
- **Why:** While the mobile drawer links and buttons strictly achieve `>= 44px`, the secondary footer links on the storefront render at 32px. This satisfies WCAG 2.5.8 Target Size Minimum (24px) but falls short of the recommended 44px touch target standard.
- **Suggestion:** For future ergonomics optimization, add `min-h-[44px]` or `py-3` to footer contact links.

### [Minor] Finding 2: Document Element Wheel Scroll During Open Drawer
- **What:** On viewports with mouse wheel support (e.g. tablet landscape 1024px), mouse wheel events on `document.documentElement` can scroll the background page while the drawer is open.
- **Where:** `src/components/MobileMenu.tsx:20`
- **Why:** Only `document.body.style.overflow = "hidden"` is set; `document.documentElement.style.overflow` remains unconstrained.
- **Suggestion:** In `MobileMenu.tsx`, lock both `document.body.style.overflow` and `document.documentElement.style.overflow = "hidden"` when open.

### [Minor] Finding 3: Window Resize Across 1280px While Drawer Open
- **What:** If a user opens the mobile menu at `< 1280px` and resizes the viewport to `>= 1280px` without closing, body scroll remains locked until the window is resized back or closed.
- **Where:** `src/components/MobileMenu.tsx`
- **Suggestion:** Add a `window.matchMedia('(min-width: 1280px)')` listener to auto-close the drawer on breakpoint transitions.

### [Low / Out of Scope] Finding 4: Sub-320px Viewport (280px Galaxy Fold) Header Action Overflow
- **What:** At ultra-narrow 280px width (Galaxy Fold cover screen), the header action buttons (`div.flex.items-center.gap-2.5`) measure 296px, producing a 16px horizontal overflow at 280px.
- **Where:** `src/app/(storefront)/layout.tsx:98`
- **Why:** The official design and test specification (`PROJECT.md` & `ORIGINAL_REQUEST.md`) designates `320px` as the minimum supported viewport boundary. Zero horizontal scroll is 100% verified down to 320px across all routes.
- **Suggestion:** In future polish passes, add `hidden min-[320px]:inline-flex` or shrink gap on extreme sub-320px devices.

---

## 4. Caveats

1. **Adversarial Non-Blocking Findings:** Findings 1–3 are minor edge cases discovered during adversarial stress testing. They do not block core functionality or cause regressions, and all official acceptance criteria and baseline test suites pass with 100% success.
2. **Prisma SQLite Local State:** Production builds and Playwright tests run against the local SQLite database (`dev.db`).

---

## 5. Conclusion

**Verdict: APPROVE**

The work across `src/components/MobileMenu.tsx`, `src/app/globals.css`, `src/app/layout.tsx`, `src/app/(storefront)/layout.tsx`, and `next.config.ts` is verified to be:
- **Correct**: Fixes off-screen focus leaks, restores focus properly, eliminates horizontal document overflow, and configures Next.js remote images and CSP.
- **Complete**: All 5 assigned files implement the requirements specified in `PROJECT.md` and the dispatch.
- **Robust**: Passes complete production build (`npm run build`) and 190 Playwright E2E test assertions across 6 viewports with 0 failures.
- **Accessible**: Hamburger button, close button, and drawer links meet the 44x44px touch target standard, and off-screen navigation is fully inert and hidden from screen readers.
- **Integrity Compliant**: 0 integrity violations detected.

---

## 6. Verification Method

To independently reproduce verification:

```bash
# 1. Typecheck and production build
npm run build

# 2. Complete Playwright E2E suite
npx playwright test

# 3. Specific mobile navigation & focus verification
npx playwright test tests/e2e/mobile-navigation.spec.ts

# 4. Zero horizontal scroll verification across all 30 routes
npx playwright test tests/e2e/responsive-scroll.spec.ts
```
