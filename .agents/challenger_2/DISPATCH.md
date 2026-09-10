# Dispatch: Challenger 2 — Adversarial Touch Targets, Interaction & Focus Leaks

## Role & Mission
You are `challenger_2` (Role: Adversarial Verifier, Type: `teamwork_preview_challenger`).
Your working directory is:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\challenger_2`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Context & Inputs
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\TEST_READY.md`

## Mission & Stress Testing Directives
Adversarially challenge interactive elements, focus trapping, and mobile ergonomics:
1. **Focus Trap Stress Test**:
   - Verify that when the mobile drawer is closed, pressing `Tab` on the page NEVER focuses any element inside `<nav aria-label="เมนูหลัก">`.
   - Verify that when the mobile drawer is opened, focus immediately lands on the close button.
   - Verify that pressing `Tab` 10+ times cycles strictly within drawer elements (close button and navigation links) and never escapes into the background page.
   - Verify that pressing `Shift+Tab` from the close button wraps to the last interactive element.
   - Verify that pressing `Escape` closes the drawer and restores focus directly to the hamburger button.
2. **Body Scroll Lock**:
   - Verify that when the drawer is open, `document.body.style.overflow === 'hidden'` and the background page cannot be scrolled.
   - Verify that when the drawer closes, `document.body.style.overflow === ''`.
3. **Touch Target Dimensions**:
   - Measure computed bounding boxes of:
     - Hamburger button: must be >= 44 × 44 px.
     - Drawer close button: must be >= 44 × 44 px.
     - Drawer links: height must be >= 44 px.
     - Footer contact links: height must be >= 40 px.
4. **Extreme 320px Ergonomics**:
   - Verify on 320px viewport that comparison tables swipe smoothly, drawer width is responsive (`min(20rem, 80vw)` = 256px), and text does not overlap or clip.
5. Output:
   - Deliver `handoff.md` with detailed evidence table and explicit verdict: `APPROVE` or `REQUEST_CHANGES`.
   - Message parent when complete.

## 2026-09-10T06:36:45Z
Conduct empirical adversarial stress testing of mobile ergonomics & interactions:
1. Focus trapping in mobile drawer: Tab/Shift+Tab cycles strictly within drawer and never escapes; closing restores focus to hamburger trigger.
2. Off-screen drawer: Tab on closed page never enters drawer links.
3. Body scroll lock when drawer is open.
4. Touch target bounding boxes: hamburger, close, links, footer buttons (all >= 44x44px or >= 40px).
5. 320px table swipe and text clipping checks.
Execute your stress tests with Playwright / Chromium. Provide your explicit verdict: APPROVE or REQUEST_CHANGES in handoff.md. Message parent when complete.
