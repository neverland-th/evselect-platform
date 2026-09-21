# Homepage reader review and Carbon Ceramic interaction checkpoint

Date: 2026-09-21. Checkout: `releases/evselect-coilover-skyscraper-2026-09-19`, branch `codex/brake-complete-kits-2026-09-19`, based on `6e7038d` plus the scoped changes below. These are local draft checks, not a production deployment or a full-site approval.

## Homepage: final reader review completed for this version

URL: http://127.0.0.1:3117/ . Actual Chrome browser 2, tab 306882993. Read the complete rendered page at **1440 × 1000 CSS px desktop** and **390 × 844 CSS px mobile**, including the shared header and footer. Revisited the mobile journey heading and the complete launch banner to fill gaps caused by delayed screenshot updates. Temporary viewport override was reset afterwards.

Changes:

- Linked the visible brand in ComingSoonBanner, PrelaunchPanel and the editorial-policy paragraph to `/`.
- Changed the contact CTA from `ติดต่อ EVSELECT` to `ติดต่อทีมงาน`, preserving its `/contact` destination and avoiding a brand anchor that goes somewhere other than home.
- Corrected the lead Tesla image alt text to identify the red Model 3 Highland at a German show in 2024; it does not claim that this image establishes the Performance trim.

Reader observations:

- The opening promises help with the reader's next decision. The three journey cards distinguish choosing an EV, investigating an existing car's symptoms and following the future product launch. Their headings, descriptions and CTA text are readable in both layouts.
- Read all three featured article cards, the full coming-soon banner, all three system-guide cards, all three preparation steps, the editorial/contact cards and the entire footer. The current pre-launch status and no-orders/no-payment wording remain clear.
- Inspected all five main-content images individually in each layout: the lead red Tesla, the Tesla article thumbnail, KW coilovers, the blue car used for the battery-care article and the covered-car launch concept. All loaded. The mobile lead image has a tighter crop and cuts part of the front bumper, but the subject and overlaid title remain identifiable. The article thumbnail shows more of the car. The covered-car image is explicitly labelled an AI concept rather than a product for sale. This visual check is not a new independent licensing audit of every existing image.
- One H1 is present; section H2s contain relevant H3 cards. No document-level horizontal overflow was found at the inspected mobile viewport. There are no article tables, score charts or FAQ disclosures on this page.
- Clicked the coming-soon banner's EVSELECT link: same tab returned to `/`. Clicked `เลือกเรื่องที่อยากรู้` from that page: same tab navigated to `/#choose-your-path`, with the target starting about 112 CSS px below the viewport top, clear of the sticky header. Read the target eyebrow, title and cards.
- Clicked the final `ติดต่อทีมงาน` CTA: same tab opened `/contact` with H1 `ติดต่อทีมงาน` and the actual Facebook contact choices. No contact form or enquiry was submitted.
- All three visible brand links inside `main` resolve to `/`; the refreshed site inventory reports no homepage brand-link flags or nested anchors.

Reviewed source SHA-256:

| File | Hash |
| --- | --- |
| `src/app/(storefront)/page.tsx` | `b455cc514426665966b713269cdeb05686592a5f6c3b25dde76e59d02ab0e787` |
| `src/components/ComingSoonBanner.tsx` | `d9eb5584f528274d86bc5416fdaca668ff08f4e0112c137557b879022821695b` |
| `src/components/PrelaunchPanel.tsx` | `9669b2ffcfcdfeaebabb9e8fd9d691afcebb067ff65491a1fb82514889995508` |

## Carbon Ceramic: focused interaction check only; full renewed reader review pending

URL: http://127.0.0.1:3117/articles/ev-carbon-ceramic-brakes-guide#brand-compare . Changed source, credit and product-table links to protected new tabs. The score-source helper classifies resolved destinations: `#japan` and `#carbon-ceramic` remain same-page links, while external sources use `_blank` with `noopener noreferrer`. External score links also announce their new-tab behavior to screen readers.

- At desktop 1440 × 1000, clicked all nine score rings: Performance, price and dust for Brembo, ENDLESS and Carbon Ceramic. Each exposed its own correct score heading and explanation; all three cards can remain expanded simultaneously. Inspected the desktop explanation layouts and opened the methodology disclosure.
- At mobile 390 × 844, clicked all nine rings and verified each button's expanded state and corresponding score heading. Inspected the section opening, controls and Carbon Ceramic dust explanation/source layout. This is a functional and focused visual check, **not** a complete mobile rereading of the article or all score explanations.
- The rendered hierarchy is H2 section → H3 comparison introduction → H4 product/material option → H5 opened score explanation. Removing Brembo and ENDLESS left Carbon Ceramic with the same correct hierarchy; the final remaining option cannot be removed. `เทียบครบ 3` restored all three cards. No page-width overflow was found at the inspected mobile viewport.
- Opened ENDLESS MX72 from the methodology sources: a separate tab loaded the official ENDLESS MX72 URL and page title while the article remained open. Closed only that test tab. Clicked the methodology's owner-case link: the article stayed in its original tab and scrolled to `#japan`, with its heading visible below the sticky header.
- The two ENDLESS owner images were visibly available through the existing optimized image URLs in this browser session, despite their original files still being marked deleted in the working tree. This does **not** resolve missing source assets or prove a clean build/deployment can serve them. Do not mistake cached/optimized delivery for restoration of the originals.
- The complete final article, all other images, tables, FAQs and changed reference areas still require renewed desktop/mobile reader review before publication. The unresolved Porsche Stories reuse permission also remains open. Earlier full-article review records do not certify this newer source version.

Draft source SHA-256:

| File | Hash |
| --- | --- |
| `src/app/(storefront)/articles/ev-carbon-ceramic-brakes-guide/page.tsx` | `95c0dbaa1b162f14fb8813d42a643b37e22247571c29a36b5b15e7804f020612` |
| `src/components/articles/BrakeBrandCompare.tsx` | `e0601d11e52b46de21b8ef2e46aa39237c96739d6d755ffefd9d5504115b5638` |
| `src/components/articles/BrakeKitReferences.tsx` | `6ccf96a28e1cfa9857cfd078073eb26e737e9aa20ca0529d1fc238e1e2ff4a0e` |

## Supporting checks and remaining scope

- Fresh 31-route local heading check: all 200, exactly one H1 each, no empty headings and no descending level skips in main/article markup. This does not independently prove semantic parentage or every client state on every page.
- Fresh link inventory: no missing known internal routes/fragments, no nested anchors and no tab-policy flags. All 31 routes have main-content internal links. **Sixteen routes still have visible brand-link issues**; useful contextual relevance and full reader reviews also remain open.
- ESLint passed for the six changed TSX files; `git diff --check` passed. A fresh `npm run verify:images` returned exit 1 for `mg4-electric-hero.jpg`, `endless-m6-owner-model3-installed.jpg` and `endless-m6-owner-front-kit.jpg`. The last production build remains blocked at this source-image verification step; it was not repeated while the same files remain missing. Their deletion is not part of this change set and has not been committed or restored.
- No production deployment or full-site SEO certification is claimed. The active goal remains incomplete.
