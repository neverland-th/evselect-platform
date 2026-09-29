# Home: Thai keyword and content decisions — 29 September 2026

## Scope and evidence limits

User goal: update Home, add useful content and research Thai keywords with Serpstat. Base: production commit `3996905143162dfd7270fd1053a5a93ec3a25c9a`, Vercel `evselect-com/evselect-platform`, observed READY deployment `dpl_HkUfMgnVfeWv8JMRv1obfuy37QZu`. Isolated branch: `codex/homepage-thai-search-2026-09-29`. Do not deploy an older editorial draft or overwrite the concurrent tyre-article worktree.

Serpstat method discovery and parameter schemas succeeded. The credits and domain-region read requests both returned that this authenticated account's plan does not include API access. Both were dispatched before receiving the error; no retries or alternate methods were used after it. No subscription, scan, tracking project or paid upgrade was created. Search volume, keyword difficulty, current rankings and Thai database metrics are **unavailable**, not zero. The user was told this limitation before implementation.

Fallback: public Thai-language search and primary websites, inspected 29 September 2026. This establishes terminology and useful content angles, not demand size or a Thai-localized Google rank. Priority and intent below are editorial judgements based on the site's actual offering, not Serpstat scores. The site currently publishes editorial content and is preparing accessories; it does not offer checkout or confirmed stock.

## Keyword-to-page map

| Cluster / candidate phrases | Reader intent (inferred) | Home treatment / destination |
| --- | --- | --- |
| ของแต่งรถไฟฟ้า, ของแต่ง EV, อุปกรณ์เสริมรถยนต์ไฟฟ้า | Explore upgrades and accessories | Primary Home topic; title, H1, introduction, buying checklist. State pre-launch status. |
| รีวิวรถไฟฟ้า, รีวิวรถ EV, รถ EV สเปกไทย | Research a car before choosing | Intro, featured articles and `/articles`. No made-up current price/specification on Home. |
| โช้คแต่ง, โช้คสตรัทปรับเกลียว, ช่วงล่างรถไฟฟ้า | Understand options and tuning | Damper card plus suspension guide. Prefer the owner's natural Thai terminology over transliterated coilover. |
| รถเด้ง, รถกระด้าง, รถโยน, ใส่โช้คแต่งแล้วไม่นุ่ม | Solve a specific ride complaint | Journey card, checklist and FAQ to the existing damper `#symptoms` section. No guarantee that a purchase fixes it. |
| ยางรถไฟฟ้า, ยาง EV, เลือกยางรถไฟฟ้า | Choose replacement tyres | Guide card and FAQ to the tyre/coilover article; do not make Home compete with a full tyre guide. |
| ยางกินใน, ตั้งศูนย์ล้อ, ตั้งศูนย์หลังโหลดรถ | Diagnose wear and understand installation | Alignment guide and contextual link about before/after alignment readings. No automatic recommendation to buy camber arms. |
| ดูแลแบตเตอรี่รถ EV, ชาร์จ 80 หรือ 100 | Daily EV ownership | Battery article card, using the article's actual chassis illustration and vehicle-specific guidance. |

No keyword-stuffing block, search-volume claim, “best in Thailand”, exact-fit badge, fake review or stock claim was added. No new article route or model picker was invented. Existing `#vehicle-finder`, `#coming-soon`, `#launch`, `#choose-your-path` and `#fitment-assurance` anchors remain.

## Primary public sources

- [Profender: แนะนำโช๊คอัพสำหรับรถไฟฟ้า](https://profender4x4.com/electirc-car-shocks/) — Thai manufacturer language includes รถไฟฟ้า, สตรัทปรับเกลียว, รุ่นรถ and adjustment. Used to confirm terminology, not to copy product prices, fitment or promotional performance claims.
- [Michelin Thailand: เลือกยางรถยนต์ไฟฟ้ารุ่นไหนดี](https://www.michelin.co.th/auto/advice/ev-guide/how-to-chose-tyres-for-electric-cars) — primary-language examples of tyre selection, model/trim distinctions and ownership questions. No fitment table reproduced.
- [Michelin Thailand: รถ EV ต้องใช้ยางเฉพาะจริงหรือ](https://www.michelin.co.th/auto/advice/ev-guide/tyres-for-electric-cars) — supports looking beyond an EV-branded product name; visible external source link accompanies the short FAQ. Actual fitment still requires the vehicle and tyre specifications.
- [EV HERO](https://www.ev-hero.com/) — Thai accessory-market terminology from its own storefront, not independent evidence of demand or product quality. Its generic fitment/leadership claims are not adopted.
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and [Google AI Search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide#build-technical-structure) — clear helpful content, descriptive titles and crawlable contextual links. No promise of indexing, ranking or AI inclusion. The old local knowledge-base path from memory is absent in this current checkout, so the official guide was refreshed directly.

## Implementation boundary

Keep the production layout, typography, colours, owner-supplied logo and existing photograph/banner assets. Improve Home-specific text, add four practical pre-purchase checks, add four native keyboard-operable FAQ disclosures, and define Home-specific metadata rather than changing every page's metadata. The battery card now uses its shared article image instead of an unrelated BYD photo. No new imagery, JS library, database change, robots change, checkout or backend feature.

Internal links remain same-tab; external web sources open a new tab with `noopener noreferrer`. This follows the `evselect-contextual-links` skill. Visible new Home-specific brand text is EVSELECTS and links home; shared navigation and the owner-supplied logo are outside this scoped content patch.

## Verification status

Implementation and pre-publication review passed on 29 September 2026. Production deployment has not yet occurred at the time of this record; local results are not deployment proof.

- Reviewed the complete final rendered Home at `http://127.0.0.1:4339/`, desktop 1440 x 1000 and mobile 390 x 1000. Read every section and all four expanded FAQ answers, and inspected all five content images including the battery chassis and disclosed AI concept banner. Repeated the full reading after the copy/anchor corrections below. No horizontal overflow; all images loaded. Returned to the desktop hero to confirm its responsive image after resizing.
- Keyboard activation opened/closed the native FAQ. The checklist anchor landed 112px below the viewport top; the damper symptoms destination also remained below the sticky header. The final alignment link reached the full article in the same tab, with its H1 visible at approximately 300px. The Michelin source opened a separate tab and preserved Home.
- Final `npm run build` passed: TypeScript, 79 referenced public images, 11 link-policy tests and 43 generated routes. Strict content audit passed across 31 pages and 1,853 links, with no issues or blocked routes. The three sitemap endpoints returned 200 and valid XML (index 1 entry, compatibility index 1 entry, URL sitemap 24 entries).
- Targeted lint passed for the three changed components and the new Home test. `BASE_URL=http://127.0.0.1:4339 node --test scripts/test-homepage-content.mjs` passed all three tests: metadata/headings, useful SSR content/pre-launch state, and contextual-link policy.
- Production was rechecked before release preparation: `evselects.com` still resolved to `dpl_HkUfMgnVfeWv8JMRv1obfuy37QZu`, READY, with no alias error. Recheck again immediately before deploying.

These checks do not establish Google indexing, ranking, search volume, keyword difficulty or Core Web Vitals improvements. Serpstat metrics remain unavailable under the connected plan.

Reader-review correction: shortened the mobile damper anchor to “วิธีเช็กอาการก่อนเปลี่ยนโช้ค”. Its `#symptoms` landing was verified at 112px below the viewport top. The alignment article's existing `#read-report` H2 landed underneath its sticky header, so Home links to the full alignment guide instead; the article itself was not edited. Simplified the FAQ section heading to natural Thai rather than forcing the longer accessory keyword into it.
