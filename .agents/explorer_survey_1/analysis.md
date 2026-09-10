# Architecture Analysis Report: Navigation, Breakpoints & Global Layout

**Platform:** EVSELECT Thailand (Thai EV E-commerce & Automotive Editorial)  
**Investigator:** `explorer_survey_1`  
**Date:** 2026-09-10  
**Scope:** Header, Navbar, Mobile Drawer, Breakpoints (<1280px), Global Layout, CSS, Viewport Meta, Footer, Overlays  

---

## 1. Executive Summary

A comprehensive structural audit was conducted on the EVSELECT platform's navigation, breakpoint hierarchy, and global layout architecture. 

### Key Findings:
1. **Breakpoint Compliance (< 1280px)**: The platform correctly utilizes Tailwind's `xl` breakpoint (`1280px`). Specifically, `xl:hidden` is applied to the mobile hamburger menu (`<MobileMenu />`) and mobile logo, while `hidden xl:flex` is applied to desktop navigation links. On viewports `< 1280px` (including 320px mobile, 768px tablet, 1024px tablet landscape, and up to 1279px), the mobile hamburger menu is visible and active, directly satisfying the user acceptance criterion.
2. **Mobile Drawer Accessibility & Focus Leak (CRITICAL A11Y DEFECT)**:
   - When the mobile drawer is closed, it is positioned off-screen using `transition-transform -translate-x-full` (`src/components/MobileMenu.tsx:55-57`), but **remains active in the DOM and tab order** without `inert`, `visibility: hidden`, or `aria-hidden="true"`. Keyboard users will tab through invisible links, and screen readers will announce off-screen drawer items.
   - When open, the drawer does **not trap focus**; pressing Tab eventually tabs out of the drawer and into the background page content.
   - Background page content (`<main>`) is **not marked `inert`** while the drawer is open.
   - The hamburger button lacks `aria-controls="mobile-nav-drawer"`.
3. **Touch Target Dimensions**:
   - The hamburger trigger button (`p-2 -ml-2 mr-2`, icon `20x20px`) and close button have an effective target size of ~36x36px, below the WCAG 2.5.5 recommended minimum of 44x44px.
   - Footer links in `src/app/(storefront)/layout.tsx:180-200` have a line height of ~16px with no vertical padding, creating high mis-tap risk on touchscreens.
4. **Global CSS & Viewport Configuration**:
   - `src/app/layout.tsx` lacks an explicit `export const viewport: Viewport` definition (Next.js 14/15 standard).
   - `src/app/globals.css:25` applies `overflow-x: hidden;` directly to `body`. This can break `position: sticky` on child elements (like the sticky header) in iOS Safari / WebKit engines. The modern CSS best practice is `overflow-x: clip;`.
   - `src/components/VehicleFilter.tsx:298` references `scrollbar-none`, but `.scrollbar-none` is never defined in `globals.css` or Tailwind configuration.
5. **Horizontal Overflow Analysis**:
   - Storefront homepage and editorial review pages wrap specification tables and SVG infographics in `overflow-x-auto`.
   - Hero sections and filter cards utilize `overflow-hidden`.
   - On 320px mobile viewports, the storefront header fits tightly (~272px used out of 288px available content width).
   - In contrast, the Admin layout (`src/app/(admin)/layout.tsx:13`) uses a fixed `w-64` (256px) sidebar with no mobile collapse or drawer mechanism, which collapses the main admin content into a 64px unusable strip on 320px viewports.

---

## 2. Header & Desktop Navigation Architecture

### 2.1 File Location & Container Structure
- **File:** `src/app/(storefront)/layout.tsx` (Lines 24–132)
- **Component Hierarchy:**
  ```
  StorefrontLayout (src/app/(storefront)/layout.tsx)
  ├── Announcement Bar (lines 25–40) [bg-slate-900]
  └── Sticky Header (lines 43–132) [header.sticky.top-0.z-50]
      └── Container (line 44) [max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8]
          ├── Left: Mobile Menu & Logos (lines 46–73)
          │   ├── <MobileMenu /> (line 47) [xl:hidden]
          │   └── <Link href="/"> (lines 48–72)
          │       ├── Mobile Logo (lines 50–59) [xl:hidden, w-28 sm:w-36]
          │       └── Desktop Logo (lines 62–71) [hidden xl:flex, w-44 lg:w-52]
          ├── Center: Desktop Navigation Menu (lines 75–95) [hidden xl:flex]
          └── Right: Action CTAs (lines 97–130)
              ├── Shopee Store Link (lines 100–108) [hidden sm:inline-flex]
              ├── Facebook / Line Chat (lines 111–120) [inline-flex]
              └── Admin Portal Switch (lines 123–129) [inline-flex]
  ```

### 2.2 Top Announcement Bar
- **Location:** `src/app/(storefront)/layout.tsx:25–40`
- **Classes:** `bg-slate-900 border-b border-slate-800 text-xs py-2.5 px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-white`
- **Responsive Behavior:**
  - On mobile (`< 640px`): `flex-col`. The subtitle `" — ทดสอบจริงบนรถ EV สเปกไทย"` is hidden via `hidden sm:inline`, and the three feature bullets are hidden via `hidden md:inline`. Only the badge and `"การันตี Fitment ตรงรุ่น 100%"` render, preventing any text wrapping or vertical crowding.
  - Zero risk of horizontal overflow.

### 2.3 Sticky Header Bar
- **Location:** `src/app/(storefront)/layout.tsx:43–44`
- **Classes:** `sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/90 shadow-xs`
- **Dimensions:** Height is `h-16` (64px) on mobile, `sm:h-20` (80px) on desktop.
- **Horizontal Space Budget on 320px Viewport:**
  - Viewport: 320px
  - Container padding: `px-4` (16px left + 16px right) = 32px
  - Available width: 288px
  - Left group (Hamburger ~36px + Gap 4px + Logo 112px): ~152px
  - Center gap: 8px (`gap-2`)
  - Right group (FB Chat button ~68px + Gap 10px + Admin icon-only ~34px): ~112px
  - Total used width: 152 + 8 + 112 = 272px <= 288px
  - **Result:** Header fits without clipping or overflow at 320px width.

### 2.4 Desktop Navigation Links
- **Location:** `src/app/(storefront)/layout.tsx:76–95`
- **Classes:** `hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600`
- **Links List:**
  1. `/#vehicle-finder` — "เลือกรุ่นรถ (Vehicle Finder)" with `Car` icon
  2. `/#products` — "สินค้าตรงรุ่น (Catalog)"
  3. `/#fitment-assurance` — "มาตรฐานการทดสอบ (QC)" with `ShieldCheck` icon
  4. `/#ecosystem` — "รุ่นรถที่รองรับ"
  5. `/articles` — "บทความ EV" with `Sparkles` icon

---

## 3. Breakpoint Logic Inspection (< 1280px Requirement)

### 3.1 Authoritative Requirement
User Acceptance Criteria explicitly states:
> *"Tests assert that the mobile navigation mechanism (hamburger menu) is visible and fully interactive on viewports < 1280px."*

### 3.2 Implemented Breakpoint Classes
| Element | File & Line | CSS Classes | Visibility < 1280px | Visibility >= 1280px |
|---|---|---|:---:|:---:|
| Mobile Menu Wrapper | `src/components/MobileMenu.tsx:33` | `xl:hidden flex items-center shrink-0` | **VISIBLE** | HIDDEN |
| Mobile Logo Image | `src/app/(storefront)/layout.tsx:50` | `xl:hidden relative w-28 sm:w-36 ...` | **VISIBLE** | HIDDEN |
| Desktop Logo Image | `src/app/(storefront)/layout.tsx:62` | `hidden xl:flex relative w-44 ...` | HIDDEN | **VISIBLE** |
| Desktop Navigation Bar | `src/app/(storefront)/layout.tsx:76` | `hidden xl:flex items-center gap-6 ...` | HIDDEN | **VISIBLE** |

### 3.3 Tailwind CSS v4 Breakpoint Mapping
In Tailwind CSS v4 (configured via `@import "tailwindcss";`), default media query breakpoints are:
- `sm`: `640px` (`@media (width >= 40rem)`)
- `md`: `768px` (`@media (width >= 48rem)`)
- `lg`: `1024px` (`@media (width >= 64rem)`)
- `xl`: `1280px` (`@media (width >= 80rem)`)
- `2xl`: `1536px` (`@media (width >= 96rem)`)

**Verification Conclusion:**
- For any viewport width in the range `[0px, 1279.98px]`, `xl:hidden` does NOT trigger, so the hamburger menu remains displayed.
- Desktop navigation links have `hidden xl:flex`, meaning they remain `display: none` until `1280px`.
- Therefore, the breakpoint cutoff is **strictly 1280px**, perfectly aligning with the user acceptance criteria.

### 3.4 Inconsistency / Dead Class Detection
- In `src/app/(storefront)/layout.tsx:62`:
  `<div className="hidden xl:flex relative w-44 lg:w-52 h-12 lg:h-14 ...">`
  Because `hidden xl:flex` hides this element on any screen below 1280px, the `lg:w-52` and `lg:h-14` classes (targeting 1024px) are evaluated simultaneously with `xl` upon becoming visible. The element never renders at `w-44` (it immediately renders at `w-52`).

---

## 4. Mobile Drawer Architecture & Deep Interaction Audit

### 4.1 Component Source Code
- **File:** `src/components/MobileMenu.tsx` (168 lines)
- **Export:** `default function MobileMenu()`

### 4.2 State Machine & Event Listeners
```typescript
const [isOpen, setIsOpen] = useState(false);
const open = useCallback(() => setIsOpen(true), []);
const close = useCallback(() => setIsOpen(false), []);

// Lock body scroll when drawer is open
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => { document.body.style.overflow = ""; };
}, [isOpen]);

// Close on Escape key
useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };
  if (isOpen) window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [isOpen, close]);
```

### 4.3 Detailed Element Inspection & Defects

#### A. Hamburger Trigger Button (`MobileMenu.tsx:35–42`)
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
- **Strengths:** Has `aria-label="เปิดเมนู"` and dynamic `aria-expanded={isOpen}`.
- **Defects:**
  1. **Touch Target Size:** `p-2` with `w-5 h-5` (20x20px icon) gives an overall box of 36x36px. With negative margin `-ml-2`, the effective tap area is under 44x44px.
  2. **Accessibility Outline:** `focus:outline-none` suppresses default browser focus rings without adding a replacement `focus-visible:ring-2 focus-visible:ring-lime-500` ring.
  3. **Missing `aria-controls`:** Should link to the drawer's ID (e.g. `aria-controls="mobile-drawer-nav"`).

#### B. Backdrop Overlay (`MobileMenu.tsx:45–51`)
```tsx
<div
  className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  onClick={close}
  aria-hidden="true"
/>
```
- **Strengths:** Smooth opacity transition (300ms), `pointer-events-none` when inactive prevents ghost clicks, `aria-hidden="true"` prevents assistive tech confusion.

#### C. Slide-In Navigation Panel (`MobileMenu.tsx:54–59`)
```tsx
<nav
  className={`fixed top-0 left-0 z-[101] h-full w-[min(20rem,80vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
  aria-label="เมนูหลัก"
>
```
- **Dimensions:** `w-[min(20rem,80vw)]`. On 320px screens: 80vw = 256px. On screens >= 400px: capped at 20rem (320px). Leaves a 20% backdrop peek affordance for tap-to-dismiss.
- **Critical Defects:**
  1. **Off-Screen Focus Leak (High Priority Accessibility Bug):**
     When `isOpen === false`, the `<nav>` is off-screen via CSS transform (`-translate-x-full`), but is **still fully present in the DOM tab order**. It does not have `inert`, `visibility: hidden`, or `pointer-events-none`. A user navigating via keyboard `Tab` or screen reader will focus on hidden drawer links before reaching the page content!
     *Fix:* When closed, apply `invisible` (`visibility: hidden`) or `inert={!isOpen ? true : undefined}` and `aria-hidden={!isOpen}`.
  2. **No Focus Trap / Trapping Mechanism:**
     When opened, focus is neither directed into the drawer (e.g. to the close button or first link), nor is focus constrained inside the drawer. Pressing `Tab` cycles past the drawer footer into background page content.
  3. **No Inertness on Background Content:**
     When the drawer is open, `<main>` in the background should be marked `inert` to prevent keyboard and screen reader interaction with background elements.

#### D. Navigation Links & Touch Targets (`MobileMenu.tsx:74–158`)
- **Main Section Links (Lines 76–107):**
  - "บทความ EV" (`/articles`): `py-3 px-3` -> Height ~48px. **Meets 44px standard.**
  - "ค้นหารถ (Vehicle Finder)" (`/#vehicle-finder`): `py-3 px-3` -> Height ~48px. **Meets 44px standard.**
  - "หมวดหมู่สินค้า" (`/#products`): `py-3 px-3` -> Height ~48px. **Meets 44px standard.**
  - "มาตรฐาน QC ทดสอบ" (`/#fitment-assurance`): `py-3 px-3` -> Height ~48px. **Meets 44px standard.**
- **Secondary Section Links (Lines 116–157):**
  - Shopee Link: `py-2.5 px-3` -> Height ~38px. **Slightly below 44px.**
  - Messenger Link: `py-2.5 px-3` -> Height ~38px. **Slightly below 44px.**
  - About Link (`/about`): `py-2.5 px-3` -> Height ~38px. **Slightly below 44px.**
  - Privacy Link (`/privacy`): `py-2.5 px-3` -> Height ~38px. **Slightly below 44px.**
  *Recommendation:* Increase padding from `py-2.5` to `py-3` to standardize all tap targets to >= 44px.
- **Dismiss on Navigate:** Every link has `onClick={close}`, ensuring seamless mobile navigation when selecting any destination.
- **Invalid Tailwind Icon Classes (Lines 81, 89, 97, 105):**
  - `className="w-4.5 h-4.5 text-..."`
  - Tailwind CSS does not include `4.5` in its default spacing scale (`4` is 16px, `5` is 20px). These should be standardized to `w-5 h-5` or `w-[18px] h-[18px]`.

---

## 5. Global CSS, Viewport Configuration & Root Wrappers

### 5.1 Root Layout (`src/app/layout.tsx`)
```tsx
import type { Metadata } from "next";
import { Prompt, Geist_Mono } from "next/font/google";
import "./globals.css";

const promptFont = Prompt({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
  variable: "--font-thai",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { ... };

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

#### Viewport Meta Tag Inspection:
- **Observation:** `src/app/layout.tsx` exports `metadata`, but does **NOT export `viewport`**.
- In Next.js 14 and 15, `viewport` is separated from `metadata`:
  ```typescript
  import type { Metadata, Viewport } from "next";

  export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: "#ffffff",
  };
  ```
- Adding explicit viewport configuration guarantees reliable mobile zoom prevention and ensures automated audit tools (Lighthouse / Playwright) detect standard viewport tags.

### 5.2 Global CSS (`src/app/globals.css`)
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --brand-lime: #65a30d;
  --brand-lime-hover: #4d7c0f;
  --brand-dark: #f8fafc;
  --brand-card: #ffffff;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-thai), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: var(--font-geist-mono);
  --color-lime-primary: #65a30d;
  --color-lime-accent: #84cc16;
}

body {
  background: #ffffff;
  color: #0f172a;
  font-family: var(--font-thai), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
}
```

#### The `overflow-x: hidden` Anti-Pattern on `body`:
- Line 25 sets `overflow-x: hidden` on `body`.
- **Architectural Risk:** In CSS specifications, setting `overflow-x: hidden` on `body` causes modern rendering engines (especially iOS WebKit) to establish a new scroll container context, which frequently breaks `position: sticky` on descendant elements (such as `<header className="sticky top-0 ...">`).
- **Modern Solution:**
  Use `overflow-x: clip;` on `html, body`:
  ```css
  html, body {
    overflow-x: clip;
  }
  ```
  `overflow: clip` prevents horizontal spillover without creating an independent scroll container, fully preserving `position: sticky` behavior across all mobile platforms.

#### Missing Utility Class `.scrollbar-none`:
- `src/components/VehicleFilter.tsx:298` uses `className="... scrollbar-none"`.
- `globals.css` does not define `.scrollbar-none`.
- *Fix:* Add to `globals.css`:
  ```css
  @layer utilities {
    .scrollbar-none {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
  }
  ```

---

## 6. Layouts, Grids & Horizontal Overflow Risk Assessment

### 6.1 Storefront Homepage (`src/app/(storefront)/page.tsx`)
1. **Hero Section (Lines 238–340):**
   - Wrapper has `overflow-hidden`. Background image uses `fill` inside `absolute inset-0 pointer-events-none`.
   - Grid of 4 trust pillars (`grid grid-cols-2 md:grid-cols-4 gap-3`):
     - On 320px screen: 2 columns, each ~138px wide. Content fits cleanly with icons `w-10 h-10` and text `text-xs font-bold`.
2. **Vehicle Finder Card (`src/components/VehicleFilter.tsx:152–295`):**
   - Card has `overflow-hidden`. Dropdowns grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`) stacks into a single full-width column on mobile.
   - Selected vehicle pill has `flex-wrap` preventing overflow.
3. **Fitment Assurance Section (Lines 348–466):**
   - Outer card has `overflow-hidden`. Grid `grid-cols-1 lg:grid-cols-12` stacks vertically on mobile.
4. **Supported Thai EV Models Grid (Lines 469–588):**
   - Grid `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4`: 1 column on mobile, 2 on sm, 5 on lg. Zero overflow.
5. **Multi-Channel CTA Banner (Lines 591–622):**
   - Buttons use `w-full sm:w-auto` stacked vertically on mobile.

### 6.2 Editorial Review & Guide Pages
- Across 14 article pages, large data tables and SVG infographics are present:
  - Tables: `w-full text-left text-sm text-slate-700 min-w-[700px]`
  - SVGs: `w-full min-w-[700px] h-auto`
- **Assessment:**
  Every wide table and SVG is wrapped in an `overflow-x-auto` container (e.g. `src/app/(storefront)/articles/byd-atto-3-review/page.tsx:312`). This isolates horizontal scrolling to the data table and prevents viewport-level overflow.

### 6.3 Admin Portal Layout (`src/app/(admin)/layout.tsx`)
- **Location:** `src/app/(admin)/layout.tsx:11–105`
- **Structure:**
  ```tsx
  <div className="flex h-screen bg-gray-100 text-gray-900 overflow-hidden font-sans">
    {/* Sidebar */}
    <aside className="w-64 bg-zinc-950 text-zinc-200 border-r border-zinc-800 flex flex-col shrink-0">
      ...
    </aside>
    {/* Main Admin Area */}
    <main className="flex-1 overflow-auto bg-gray-50 text-gray-900">
      {children}
    </main>
  </div>
  ```
- **Severe Mobile Layout Defect:**
  On a 320px viewport:
  - `<aside>` has fixed `w-64` (256px) and `shrink-0`.
  - `<main>` receives `320px - 256px = 64px` width.
  - The admin platform is currently completely broken on mobile viewports.
  - *Recommendation:* Add responsive drawer toggle (`hidden md:flex` for desktop aside, slide-over drawer for mobile).

---

## 7. Footer, Overlays, Modals & Action Buttons

### 7.1 Storefront Footer (`src/app/(storefront)/layout.tsx:140–230`)
- **Structure:**
  - 4-column responsive grid: `grid grid-cols-1 md:grid-cols-4 gap-10`.
  - On mobile (`< 768px`): Stacks into a clean single column with 40px spacing between sections.
  - Brand logo container: `w-48 h-14` (192px), well within 320px.
  - Bottom bar: `flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500`.
- **Defects:**
  - In Column 3 ("ช่องทางการสั่งซื้อและติดต่อ"), links (Shopee, Facebook Page, LINE, PIM) lack vertical padding. Line height is ~16px, making them hard to tap on mobile without mis-tapping adjacent links.
  - *Recommendation:* Wrap links with `py-2` and `inline-flex` to expand touch targets to >= 40px height.

### 7.2 Modals & Overlays
- No modal dialogs exist in the storefront; the only overlay is the mobile navigation drawer backdrop.

### 7.3 Floating Action Buttons (FAB) & Back-to-Top
- Currently **absent**.
- Because editorial review articles span 1,100+ lines of content (over 15 screen heights on mobile), users must scroll extensively to return to top navigation.
- *Recommendation:* Implement an optional floating "Back to Top" button (`fixed bottom-6 right-6 z-40`) visible on scroll.

---

## 8. Prioritized Defect & Recommendation Matrix

| ID | Location / File | Current Behavior | Severity | Recommended Fix |
|---|---|---|:---:|---|
| **D1** | `src/components/MobileMenu.tsx:55–57` | Off-screen drawer (`-translate-x-full`) remains in DOM tab order when closed; keyboard/screen-reader users tab into hidden links. | **HIGH** (A11y) | Add `aria-hidden={!isOpen}` and `inert={!isOpen ? true : undefined}`, or toggle `invisible` when closed (`${isOpen ? "translate-x-0 visible" : "-translate-x-full invisible"}`). |
| **D2** | `src/components/MobileMenu.tsx:7–31` | When drawer opens, focus is not moved into the drawer, background `<main>` is not marked `inert`, and focus is not trapped inside the drawer. | **HIGH** (A11y) | Implement focus management: set `main.inert = isOpen`, shift focus to close button upon open, trap Tab inside drawer, restore focus to trigger on close. |
| **D3** | `src/components/MobileMenu.tsx:35–42` | Hamburger button effective tap area is ~36x36px with `focus:outline-none` removing focus ring. Missing `aria-controls`. | **MEDIUM** | Add `min-h-[44px] min-w-[44px]`, `focus-visible:ring-2 focus-visible:ring-lime-500`, and `aria-controls="mobile-navigation-drawer"`. |
| **D4** | `src/components/MobileMenu.tsx:81, 89, 97, 105` | Uses non-standard Tailwind class `w-4.5 h-4.5`. | **LOW** | Replace with standard `w-5 h-5` or `w-[18px] h-[18px]`. |
| **D5** | `src/app/globals.css:25` | `body { overflow-x: hidden; }` can break `position: sticky` on iOS Safari. | **MEDIUM** | Replace with `html, body { overflow-x: clip; }`. |
| **D6** | `src/app/layout.tsx` | Missing explicit `export const viewport: Viewport` definition. | **MEDIUM** | Export `viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#ffffff' }`. |
| **D7** | `src/app/(storefront)/layout.tsx:180–200` | Footer contact and navigation links have ~16px height with no touch target padding. | **MEDIUM** | Add `py-2` to footer link anchor elements to ensure >= 44px tap target height. |
| **D8** | `src/components/VehicleFilter.tsx:298` | Uses `scrollbar-none` utility which is not defined in CSS. | **LOW** | Define `.scrollbar-none` in `src/app/globals.css` utilities. |
| **D9** | `src/app/(admin)/layout.tsx:13` | Sidebar is fixed `w-64` with no mobile responsive drawer, breaking mobile layout (< 768px). | **MEDIUM** | Add responsive toggle button and collapsible mobile drawer for admin sidebar. |
