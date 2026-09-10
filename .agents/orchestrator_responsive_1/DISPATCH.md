## 2026-09-10T06:13:41Z
You are the Project Orchestrator for the EVSELECT platform mobile/responsive UI/UX audit and bug-fix task.

## Authoritative User Request
Read the authoritative user request at:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`

## Your Working Directory
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\orchestrator_responsive_1`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Mission & Key Directives
The user has explicitly requested:
"Use a very large team of agents.
Conduct a comprehensive UI/UX audit and bug-fix pass across the EVSELECT platform, focusing strictly on mobile/responsive design.
Integrity mode: benchmark"

### Requirements:
1. **R1. Responsive UI/UX Audit & Fix**:
   Analyze the platform's layout across mobile, tablet, and desktop viewports. Identify and fix any overflow issues, overlapping elements, missing interactive targets, or broken responsive behaviors.
2. **R2. Programmatic Verification via Playwright**:
   Develop automated UI tests using Playwright to verify layout integrity. The tests must capture extreme mobile widths (320px), standard tablets (768px), and desktop (1280px+).

### Acceptance Criteria:
- Playwright tests are successfully implemented and executed in the project.
- Tests programmatically assert that there is zero horizontal scroll/overflow on mobile and tablet viewports.
- Tests assert that the mobile navigation mechanism (hamburger menu) is visible and fully interactive on viewports < 1280px.
- All Playwright tests pass (0 failures) after fixes are implemented.

## Execution Strategy: Very Large Team of Agents
Decompose this project into parallel subagents according to best practices:
- Multiple Explorers / Auditors across the codebase: audit header, navigation drawer, home page, vehicle finder, specs matrix, articles, footer, tables, images, modals across 320px, 768px, and 1280px+.
- Test Engineers to configure and implement comprehensive Playwright automated test suites asserting zero horizontal scroll (`document.documentElement.scrollWidth <= window.innerWidth` across all pages/routes and viewports) and hamburger menu visibility & interaction on < 1280px.
- Implementers / Fixers to fix any overflow causes (CSS min-width, fixed pixel widths, padding/margin math, tables without horizontal scroll containers, unconstrained flex/grid items, typography wrapping).
- Reviewers / Adversarial Challengers to verify layout integrity under extreme conditions (320px, 360px, 390px, 768px, 1024px, 1280px) and run all Playwright tests to guarantee 0 failures.

Maintain your `plan.md` and `progress.md` continuously in your working directory. When complete, provide your handoff report.
