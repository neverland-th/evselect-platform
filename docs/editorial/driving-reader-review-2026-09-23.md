# EV driving guide — final draft reader review, 23 September 2026

## Reason for correction

The catalogue promised advanced circuit-driving techniques, while its destination used a childlike story and unsupported grip arithmetic, universal rear-only Regen and an absolute prohibition on braking while steering. The old catalogue's laboratory name and 9.5 score did not establish a test. Replaced these with a scoped everyday-driving guide using the Tesla Model 3 Thailand-market owner manual and Bosch's braking explanation. The route is unchanged.

## Final version actually read

- URL: `http://127.0.0.1:3117/articles/ev-performance-driving-techniques`, Codex In-app Browser tab 7.
- Desktop approximately 1280 × 720: read every line sequentially in overlapping 540 px scrolls from the opening through the complete footer. Inspected the full car photograph and both source/licence labels individually.
- Mobile 390 × 720, DPR 2: read the same complete content in overlapping 504 px scrolls. Final document width 390, height 5196 and scroll offset 4476. One H1; four body H2 sections. The capture repeats a header strip below the emulated viewport; overlapping views covered all actual text. No horizontal document overflow.
- Read the complete changed catalogue card in desktop and mobile views: full photo, badge, credit, title, unclipped short excerpt, both highlights, model/manual qualification, date and article CTA. Clicked the title and confirmed the correct article heading and route.
- No FAQ, chart, table or disclosure remains in this shorter guide. The complete affected content was read after the final edit; there were no subsequent article edits in this pass.

## Reader observations

The opening now addresses someone new to EV throttle response, rather than promising racing skill in five minutes. It explains why lifting the accelerator is not a substitute for being ready to brake. Model-specific claims are explicitly scoped; the article does not claim that every EV has the same Regen levels or driven axle. ABS emergency instructions follow the named manual, with traction/hydroplaning limits retained. Track Mode is clearly confined to experienced closed-circuit use. The final links offer the relevant next explanation rather than an unrelated shopping CTA. The pre-launch notice remains explicit.

The actual photograph shows a grey 2024 Model 3 Performance front three-quarter view with the wheels visible. Caption and card identify it as a model illustration, not a team test. The full image remains visible in both layouts. It reuses the existing iMoD Official photograph, licensed CC BY 3.0, without a new download or retouch. Exact Commons record and licence were refreshed: `https://commons.wikimedia.org/wiki/File:2024_Tesla_Model_3_Performance_front_view_03.png`.

## Source and navigation evidence

Refreshed the five primary sources stored in `src/lib/driving-article.ts`: Tesla's Thailand-market braking/stopping, acceleration, traction-control and Track Mode manual pages, plus Bosch regenerative braking systems. These support the scoped Regen limitations, ABS pressure/no-pumping instruction, Chill/Insane distinction, normal traction-control use and closed-circuit Track Mode boundary. They do not establish EVSELECT driving tests or measured improvement.

Actually clicked all five contextual internal links and confirmed same-tab destination content: power/torque, hybrid-to-EV, battery care, tyre/coilover selection and Carbon Ceramic. The accessible article presents source and licence links as opening a new tab. New-tab UI activation is a separate shared-browser release check, not claimed here from attributes alone.

## Validation and release boundary

TypeScript and changed-file ESLint passed. Image verification passed 82 references. Refreshed link inventory covers 31 routes without missing main-content links, broken targets, brand-link findings, tab-policy findings or nested anchors. Heading inventory passes 42 views including 11 catalogue filters. `git diff --check` passed. These supplement the reading above; they are not a production release.

- Page SHA-256: `524fd83c427f4ee70379118139de1f36b5e0c0bdc49b7ce6384b1496125dd169`.
- Data SHA-256: `efd00e543bf1c979751b94d3b596648785d4d8070dac07114fd2e127ac9e12b6`.
- Photograph SHA-256: `f041c22e816dd5372e3755922e868376435416788ff64edfc27158b2cb34d03a`.

Full catalogue, remaining source/rights and shared interaction checks, production build/deployment and live verification remain open. No push, deployment or social submission occurred in this pass. The 33 unrelated existing deletions were untouched.
