# Suspension guide and information pages — rendered draft review

Date: 2026-09-21. Checkout `releases/evselect-coilover-skyscraper-2026-09-19`, branch `codex/brake-complete-kits-2026-09-19`, changes based on `cf34b34`. No push or production deployment is claimed.

## Exact scope and views

Read the entire final rendered main content, in order, of these local pages in actual Chrome (browser 2, tab 306882993):

- http://127.0.0.1:3117/articles/ev-suspension-tuning-guide
- http://127.0.0.1:3117/about
- http://127.0.0.1:3117/contact
- http://127.0.0.1:3117/editorial-policy
- http://127.0.0.1:3117/privacy
- http://127.0.0.1:3117/terms
- http://127.0.0.1:3117/warranty

Views: 1440 × 1000 CSS pixels desktop, 390 × 844 mobile. Inspected every paragraph, list, heading, caption, source anchor and reading link on the final versions. The suspension page has two editorial images; both were inspected individually, full frame, in both layouts. The information pages have no main-content images; existing header/footer logos and shared navigation were visible. Mobile header logo remains too small within its frame and is a separate open shared-layout issue. No new content was changed after this reading.

Version identifiers: suspension page SHA-256 `30b4a3b55260e3896c8baa8fb8d8821706584f7aa0d2b144f040b3ae2dd3bbd6`; `InformationPage.tsx` SHA-256 `4caac5005a44a81de187df679a95308216352a807d5e575374316f3256c2c7be`. Information-page bodies are captured by this Git checkpoint, not only by the shared component hash.

## Reader findings and resulting changes

- The old suspension page promised a definitive brand winner and presented unsupported road-load percentages, prices, independent click counts, presets and a lifestyle-to-brand quiz. It also falsely implied an engineering team and 100% fitment QC. Read the old rendered controls and removed that content, including its now-unused two components, rather than retaining it behind a disclaimer.
- The replacement opens with an identifiable driving complaint and leads through symptoms, basic damping terminology, product-specific examples, questions before purchase and controlled comparison after installation. It does not diagnose a fault from a phrase like “ย้วย” alone. It links the detailed damper explanation rather than repeating its graphs.
- Verified product distinctions against manufacturer pages below. KW V3 is 12 low-speed compression/16 low-speed rebound; Öhlins TES MA10S1 is a single 25-click adjuster affecting both directions; BC BR is 30 simultaneous compression/rebound clicks. H-Drive's Euro and the illustrated BMW M2 Euro R are explicitly different examples. Do not infer current Highland or Thai EV fitment from these generic/foreign examples.
- No claimed comparative road test, numeric brand rating, blanket price, universal click preset or warranty promise remains in the suspension page. The after-installation section starts at low speed and refers to the actual kit manual; no recommendation to use public roads as a track remains.
- Tesla's 2024 Performance photo is fully visible with the existing iMoD Official / CC BY 3.0 credit and illustrative-fitment limitation. The owner-supplied KW overview is fully visible with a caption identifying its source and limits; it does not label all pictured products V3. The low-resolution gas-damper photo was inspected during research but was not added.
- Desktop: both symptom cards and all four brand cards are readable in two columns. Mobile: cards stack in order; headings wrap without clipping; source links wrap within the card. No table, hidden chart, FAQ or quiz remains on this page.
- The six information pages previously showed the same generic legal-review placeholder. About/contact/editorial guidance now tell a first-time visitor what the site offers, how to ask a question and the editorial standard. Privacy, terms and warranty state their incomplete/pre-launch status. No business entity, address, stock, payment facility, response-time guarantee or completed legal policy was invented.
- All information pages use one H1 and major H2 sections. Their green reading panel has descriptive article/home links. The contact page explicitly names the external Facebook destinations. No contact form or submission was added.

## Source evidence checked

- KW V3: https://www.kwsuspensions.com/us-en/products/street-performance/v3-coilovers
- Öhlins TES MA10S1, Model 3 2020 selection: https://www.ohlins.com/en-us/automotive/road-and-track/tesla-model-3-model-y-road-and-track-set?v=tesla-model-3-2020
- Öhlins Road & Track owner manual, linked from that product: https://www.ohlins.com/storage/7AC688BED0B27E53064F094EF615E1B088E4D8FEA94635A5D2ECCC5FB1894053/b31b9618ad354b438a407241ceb64a6d/pdf/media/d60188c2ea574151aad35b903c54e441/OM_07451-01_7_R_T.pdf
- BC Racing BR: https://shop.bcracing-na.com/pages/br-series
- H-Drive examples: https://www.hdrive-racing.com/videocarsuse
- Tesla tyre manual linked in the previously reviewed tyre guide: https://www.tesla.com/ownersmanual/model3/th_th/GUID-FDDB10EF-FFA9-46EB-B8CC-03614AE92B6B.html
- Image provenance already recorded in `docs/editorial-image-sources.md`.

## Interaction and technical evidence

- Activated the suspension-to-damper link in Chrome and confirmed destination URL plus H1 `ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?`. Activated its tyre link and confirmed URL plus H1 `เลือกยางและคอยล์โอเวอร์ EV อย่างไร ให้รับทั้งน้ำหนักและแรงม้า`.
- Initial offscreen click/navigation checks returned too early, and one URL wait timed out during local navigation. Reobserved the visible control, used keyboard activation and verified the eventual destination in a later observation; do not count the early stale response as success.
- About's contact link and editorial-policy's correction link both opened `/contact`. Contact DOM confirms `/` for the visible brand, `https://m.me/evselects`, `https://www.facebook.com/evselects`, `/articles` and `/` for the reading links. No Facebook message was sent and no external posting is claimed.
- Activated the visible EVSELECT link in About's main content and confirmed `/` with H1 `เริ่มจากรถของคุณ แล้วค่อยตัดสินใจ`. Reset the temporary viewport override after review.
- Browser DOM confirmed suspension desktop 1440 × 1000, both images loaded, one H1 and ordered H2/H3. Mobile information-page checks each had one H1 and no horizontal document overflow. The six information pages retain `noindex, follow`.
- Changed-file ESLint passed. Production build passed; 72 referenced public images exist. Fresh HTTP inventories cover 30 routes: all 200, one H1 each, no descending heading skips, no unknown route/missing fragment and no page without a main-content internal link.

## Still open before full-site release

Nineteen routes still have unlinked/misdirected visible brand text. Other affected pages still need complete reader review, including client-only states. Known unsupported test/lab labels on legacy pages need individual review. The Porsche Stories carbon-ceramic cover still lacks confirmed EVSELECT reuse permission. Mobile header logo is visually too small. All-site completion, external-link accuracy and production verification are not established by the checks above.
