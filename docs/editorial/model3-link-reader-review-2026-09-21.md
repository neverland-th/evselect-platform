# Tesla Model 3 — renewed link and reader review

Local draft URL: `http://127.0.0.1:3117/articles/tesla-model-3-highland-review`. Reviewed 2026-09-21 on branch `codex/brake-complete-kits-2026-09-19`, after `8ee9120`. Final page SHA-256: `eb178f72103f4bcddbdda9d6ba8e737a4a70dca028c6fc0db4578cd1d81f95c7`.

This checkpoint corrects five external anchors: image source and licence, the acceleration-measurement source, Supercharging and home-charging guidance. They now use `target="_blank" rel="noopener noreferrer"` and screen-reader new-tab text. No specifications, price data, images, titles or dates were changed. The full specification set still carries its explicit **14 September 2026** check date; this review does not claim it was freshly revalidated in full.

## Complete rendered review

- Used actual Chrome profile Evselect.com and tab 306882993 at **1440 × 1000 CSS px desktop** and **390 × 844 CSS px mobile**, confirmed in the rendered DOM. Read the introduction, model/year explanation, all 14 specification rows across all four trims, all four footnotes, four trim cards, chassis/tyre/brake links, charging guidance, used-car section, all five reference entries and the shared footer in both views.
- Inspected the full sole article photograph and its caption/licence in both views. It shows the complete red Model 3 Highland in Germany in 2024; the caption names Alexander-93 / Alexander Migl, Wikimedia Commons and CC BY-SA 4.0, and warns that equipment can differ from current Thai cars. The photo loaded without destructive cropping.
- On mobile, the first capture after resizing briefly retained an old scroll position. It was not used as evidence of the opening. The opening was read in the following stable capture, and the full image/credit area was revisited explicitly to cover the intervening caption.
- Actually scrolled the 1000 px specification table horizontally through all four trims, both its upper and lower rows, and the final spanning battery-data note. Read every cell; restored horizontal position to zero afterward. Measured container width was 349 px with zero document-wide horizontal overflow. The mobile table requires horizontal movement; this remains a layout limitation, not a stacked-table redesign.
- The opening explains the buying comparison rather than claiming a vehicle test. The dated scope distinguishes the three rear-drive variants from Performance AWD and from the older Long Range AWD. The footnotes distinguish estimated range, rollout and peak charging from measured real-world results. Four trim cards state practical considerations without inventing test findings.
- The related reading section gives relevant next steps for tyres, damper behavior and brake costs. The charging section avoids inferring battery chemistry or a universal daily 100% target from the RWD badge. The used-car section explains why model year and actual equipment matter.
- No FAQs, graphs or accordion states exist in this page. The unchanged Share button was not used to publish or transmit anything during this review.

## Actual navigation and supporting checks

- Activated `Tesla เรื่อง Supercharging`: a separate tab 306883138 opened `https://www.tesla.com/th_th/support/charging/supercharging`. The rendered source has H1 `ซูเปอร์ชาร์จ` and describes battery size/age, state of charge, ambient temperature and vehicle configuration as charging-rate factors. Closed the source tab.
- Activated the contextual tyre/coilover link: the original tab reached `/articles/ev-tyre-and-coilover-selection-guide` with its matching H1. Returned to Model 3 afterward.
- Final DOM: one H1, the article photograph loaded, no document overflow, and all **11 external article links** use the required new-tab/security attributes. Internal links remain relative and in the same tab.
- Changed-file ESLint and `git diff --check` passed. The refreshed 31-route link inventory now flags only Carbon Ceramic's **91** tab-policy occurrences, reduced from 96 before this page. Seventeen routes still need brand-home link corrections. This is not a complete site-wide contextual-link review.
- Temporary viewport override was reset. No deployment occurred. The current tree still has three unexpectedly deleted referenced images (MG4 hero and two ENDLESS owner photographs), with clarification pending; they were not included in this commit. Remaining editorial/image checks and release verification are still required.
