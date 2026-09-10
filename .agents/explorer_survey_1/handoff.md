# Handoff Report: Navigation, Breakpoint Logic & Global Layout Architecture

**Agent:** `explorer_survey_1`  
**Role:** Codebase Explorer  
**Task:** Responsive Navigation & Global Layout Audit  
**Date:** 2026-09-10  
**Status:** Complete  

---

## 1. Observation

Direct code observations with verbatim quotes, file paths, and line numbers:

### Observation 1: Breakpoint Switch Between Desktop and Mobile Navigation
- **File:** `src/components/MobileMenu.tsx`, Line 33
  ```tsx
  <div className="xl:hidden flex items-center shrink-0">
  ```
- **File:** `src/app/(storefront)/layout.tsx`, Lines 47, 50, 62, 76
  ```tsx
  Line 47: <MobileMenu />
  Line 50: <div className="xl:hidden relative w-28 sm:w-36 h-9 sm:h-10 overflow-hidden rounded-lg bg-white p-1 flex items-center justify-center border border-slate-200 shadow-xs transition-all duration-300 group-hover:border-lime-500">
  Line 62: <div className="hidden xl:flex relative w-44 lg:w-52 h-12 lg:h-14 overflow-hidden rounded-xl bg-white p-1.5 items-center justify-center border border-slate-200 shadow-xs transition-all duration-300 group-hover:border-lime-500 group-hover:shadow-md group-hover:scale-[1.02]">
  Line 76: <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
  ```
- **Context:** Tailwind CSS breakpoint `xl` is defined as `1280px` (`@media (min-width: 1280px)`). The mobile menu wrapper and mobile logo have `xl:hidden`. The desktop logo and desktop `<nav>` have `hidden xl:flex`.

### Observation 2: Mobile Drawer Lifecycle & Focus State
- **File:** `src/components/MobileMenu.tsx`, Lines 7–31, 35–42, 45–59
  ```tsx
  Line 8:  const [isOpen, setIsOpen] = useState(false);
  Line 14: useEffect(() => {
             if (isOpen) {
               document.body.style.overflow = "hidden";
             } else {
               document.body.style.overflow = "";
             }
             return () => { document.body.style.overflow = ""; };
           }, [isOpen]);
  Line 24: useEffect(() => {
             const handleKey = (e: KeyboardEvent) => {
               if (e.key === "Escape") close();
             };
             if (isOpen) window.addEventListener("keydown", handleKey);
             return () => window.removeEventListener("keydown", handleKey);
           }, [isOpen, close]);
  Line 35: <button
             onClick={open}
             className="p-2 -ml-2 mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none shrink-0"
             aria-label="เปิดเมนู"
             aria-expanded={isOpen}
           >
  Line 45: <div
             className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
               isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
             }`}
             onClick={close}
             aria-hidden="true"
           />
  Line 54: <nav
             className={`fixed top-0 left-0 z-[101] h-full w-[min(20rem,80vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
               isOpen ? "translate-x-0" : "-translate-x-full"
             }`}
             aria-label="เมนูหลัก"
           >
  ```
- **Context:** When `isOpen` is `false`, the `<nav>` is placed at `-translate-x-full`. It has no `inert`, no `visibility: hidden`, and no `aria-hidden="true"`. Furthermore, when `isOpen` is `true`, no focus is moved into the drawer, `<main>` is not marked `inert`, and focus is not trapped.

### Observation 3: Touch Target Sizes and CSS Utility Tokens in Drawer
- **File:** `src/components/MobileMenu.tsx`, Lines 37, 67, 81, 89, 97, 105, 120, 129, 145, 153
  ```tsx
  Line 37: className="p-2 -ml-2 mr-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none shrink-0"
  Line 67: className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
  Line 81: <Sparkles className="w-4.5 h-4.5 text-lime-600" />
  Line 89: <Car className="w-4.5 h-4.5 text-slate-500" />
  Line 97: <ShoppingBag className="w-4.5 h-4.5 text-slate-500" />
  Line 105: <ShieldCheck className="w-4.5 h-4.5 text-slate-500" />
  Line 120: className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors text-sm font-medium"
  Line 129: className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium"
  Line 145: className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium"
  Line 153: className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium"
  ```
- **Context:** `p-2` with `w-5 h-5` icon yields ~36x36px bounding boxes. Secondary drawer links use `py-2.5` yielding ~38px height. Classes `w-4.5 h-4.5` are non-standard Tailwind tokens.

### Observation 4: Global CSS, Viewport Meta & Overflow Properties
- **File:** `src/app/layout.tsx`, Lines 16–34, 41–48
  ```tsx
  export const metadata: Metadata = { ... };
  // Notice: No export const viewport: Viewport exists.
  export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="th" className={`${promptFont.variable} ${geistMono.variable} antialiased`}>
        <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
          {children}
        </body>
      </html>
    );
  }
  ```
- **File:** `src/app/globals.css`, Lines 21–26
  ```css
  body {
    background: #ffffff;
    color: #0f172a;
    font-family: var(--font-thai), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
  }
  ```
- **File:** `src/components/VehicleFilter.tsx`, Line 298
  ```tsx
  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
  ```
  (No `.scrollbar-none` rule is defined in `globals.css`).

### Observation 5: Footer & Admin Layouts
- **File:** `src/app/(storefront)/layout.tsx`, Lines 140–230
  - Footer uses `grid grid-cols-1 md:grid-cols-4 gap-10`. Links in lines 180–200 are styled as `className="flex items-center gap-2 hover:text-orange-400 transition-colors"` with text-xs (line-height ~16px) and zero vertical padding.
- **File:** `src/app/(admin)/layout.tsx`, Lines 11–13
  ```tsx
  <div className="flex h-screen bg-gray-100 text-gray-900 overflow-hidden font-sans">
    {/* Sidebar */}
    <aside className="w-64 bg-zinc-950 text-zinc-200 border-r border-zinc-800 flex flex-col shrink-0">
  ```
  The sidebar has fixed `w-64` (256px) with no mobile toggle or collapse.

---

## 2. Logic Chain

1. **Evaluation of Breakpoint Logic vs. Acceptance Criteria:**
   - From Observation 1, the mobile navigation elements use `xl:hidden` and desktop elements use `hidden xl:flex`.
   - In Tailwind CSS v4, `xl` maps to `1280px`.
   - Any viewport width `< 1280px` (e.g. 320px, 768px, 1024px, 1279px) renders the mobile hamburger button and suppresses desktop navigation.
   - Any viewport width `>= 1280px` renders the desktop navigation links and suppresses the hamburger menu.
   - Therefore, the requirement that the hamburger menu must be visible and interactive on viewports `< 1280px` is structurally satisfied by the current breakpoint selection.

2. **Evaluation of Mobile Drawer Accessibility & Focus Trapping:**
   - From Observation 2, the drawer `<nav>` relies solely on `isOpen ? "translate-x-0" : "-translate-x-full"`.
   - Because `-translate-x-full` only alters visual coordinates and does not remove the element from the accessibility tree or keyboard focus sequence, interactive child elements (`<a>`, `<button>`, `<Link>`) inside `<nav>` remain focusable via keyboard `Tab` even while visually hidden.
   - When the user presses `Tab` from the page content while the drawer is closed, focus navigates off-screen into the closed drawer.
   - Furthermore, when the drawer is open, focus is not constrained to the drawer, allowing `Tab` navigation to escape into background `<main>` elements.
   - Therefore, a critical accessibility defect exists in `src/components/MobileMenu.tsx` that must be addressed by adding `invisible` / `inert` when closed, and implementing focus trap + background `inert` when open.

3. **Evaluation of Touch Targets & Sizing Tokens:**
   - From Observation 3, the hamburger and close buttons use `p-2` with `20px` icons (~36px square), and secondary links use `py-2.5` (~38px height).
   - Both fall short of the standard 44x44px touch target guidelines established by WCAG 2.5.5 and Google Lighthouse.
   - Classes `w-4.5 h-4.5` are not standard Tailwind utility classes and risk rendering unconstrained icons depending on PostCSS configuration.

4. **Evaluation of Viewport Meta, Global CSS & Sticky Header Interaction:**
   - From Observation 4, `src/app/layout.tsx` lacks `export const viewport: Viewport`.
   - In Next.js 15, omitting explicit viewport configuration relies on fallback headers and triggers warnings in strict auditing tools.
   - `src/app/globals.css` applies `overflow-x: hidden;` to `body`.
   - In WebKit and Blink rendering engines, `overflow: hidden` on `body` establishes a separate clipping box, which frequently cancels or detaches `position: sticky` on child elements (like the storefront header at `src/app/(storefront)/layout.tsx:43`).
   - Changing `overflow-x: hidden` to `overflow-x: clip;` retains horizontal overflow clipping while preserving `position: sticky` context.

5. **Evaluation of Layouts & Horizontal Overflow:**
   - From Observation 1, on 320px screens, the header uses ~272px out of 288px available width.
   - From Observation 4 and 5, wide tables in review articles have `overflow-x-auto` wrappers preventing document scrollbar spill.
   - From Observation 5, the Admin portal layout does not support mobile viewports (< 768px) due to an unconstrained 256px fixed sidebar.

---

## 3. Caveats

1. **Admin Platform Scope:** The audit examined `src/app/(admin)/layout.tsx` and noted its fixed 256px sidebar. The primary user request focuses on the public EVSELECT platform (storefront, vehicle finder, articles, mobile drawer). If the admin portal is also expected to be audited for mobile responsiveness, responsive sidebar collapse logic will be required.
2. **Browser Engine Variance for `position: sticky`:** While Chromium handles `overflow-x: hidden` on `body` gracefully in most desktop versions, iOS WebKit (Safari on iPhone) is historically known to disable `position: sticky` when any ancestor has `overflow-x: hidden`. Testing on actual mobile Safari or via WebKit emulation is recommended.
3. **No External Headless UI / Radix Dependencies:** The project does not currently import `@radix-ui/react-dialog` or `headlessui`. The drawer focus trap should either use native DOM focus management or lightweight React hooks to avoid adding heavy external dependencies.

---

## 4. Conclusion

1. **Breakpoint Verification:** The platform uses `xl:hidden` and `hidden xl:flex` which accurately shifts between mobile hamburger and desktop navigation at **1280px**. The acceptance criterion for hamburger menu visibility `< 1280px` is met.
2. **Drawer Bugs:** `src/components/MobileMenu.tsx` requires immediate remediation for:
   - Off-screen focus leak (add `invisible` or `inert={!isOpen ? true : undefined}` and `aria-hidden={!isOpen}`).
   - Focus trapping inside the drawer when open, and marking background `<main>` as `inert`.
   - Expanding touch targets of hamburger button, close button, and secondary links to >= 44px.
   - Replacing non-standard `w-4.5 h-4.5` classes with `w-5 h-5`.
3. **Global CSS & Viewport:**
   - Replace `body { overflow-x: hidden; }` with `html, body { overflow-x: clip; }` in `src/app/globals.css`.
   - Add explicit `export const viewport: Viewport` in `src/app/layout.tsx`.
   - Define `.scrollbar-none` utility in `src/app/globals.css`.
4. **Footer:** Add `py-2` touch-target padding to footer contact links in `src/app/(storefront)/layout.tsx`.

---

## 5. Verification Method

To independently verify all findings and validate subsequent fixes:

1. **Verify Breakpoint Behavior at Critical Viewport Widths:**
   Run Playwright tests asserting:
   - At `width: 320px`: Hamburger button is visible (`toBeVisible()`), desktop nav is hidden (`not.toBeVisible()`).
   - At `width: 768px`: Hamburger button is visible, desktop nav is hidden.
   - At `width: 1024px`: Hamburger button is visible, desktop nav is hidden.
   - At `width: 1279px`: Hamburger button is visible, desktop nav is hidden.
   - At `width: 1280px`: Hamburger button is hidden (`not.toBeVisible()`), desktop nav is visible (`toBeVisible()`).

2. **Verify Zero Horizontal Scrollbar at Extreme Mobile Widths (320px, 375px, 768px):**
   Execute in Playwright:
   ```typescript
   const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
   const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
   expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
   ```

3. **Verify Focus Management and Drawer Trapping:**
   - When drawer is closed, assert that pressing `Tab` on the page does not focus any link inside the mobile drawer.
   - When drawer is opened, assert that focus moves into the drawer, and pressing `Tab` cycles within drawer links without jumping into background content.
   - Assert pressing `Escape` closes the drawer and restores focus to the hamburger button.

4. **Verify Build & Type Safety:**
   - Execute: `npm run build`
   - Expect: Exit code 0, 0 compilation or linting errors.
