# Home image replacements — review deployment

Application commit: `64ac4a9`.

The user's placement clarification was to replace images in their existing positions, without adding a vehicle row or moving the suspension slot.

- First infographic slot: Tesla Model 3 Performance (2024).
- Existing two vehicle/accessory cards: Tesla Model Y L and white ZEEKR X Flagship AWD (2024).
- Existing TEIN slot: BC Racing ZR.
- Layout, section anchors, card counts and unrelated imagery remain unchanged. Related card text, links, alt text and attribution were updated to match the photos.

## Verification

- Production build, content/link checks, image metadata checks and build-time attribution validation passed.
- Homepage regression checks passed 6/6 against both the local built server and the review deployment.
- Rendered review of all four replacement image positions and related card text at 1440px and 390px passed. Mobile revised first FAQ was checked; no horizontal overflow or visible broken images in the inspected view.
- Review deployment `dpl_4mawK7Ldvb2UQ9aHrpevNNmtaMuP` is READY at https://evselect-platform-dfvti1hs0-evselect-com.vercel.app/ . It uses the production environment with `--skip-domain`; it was not promoted to the public domain.
- After deployment, `evselects.com` still resolved to deployment `dpl_Fh8djHnuze2DjeFzRWcPMudS4q9x` (the previous public release).

## Image provenance boundaries

The existing Model 3, Model Y L and ZEEKR X Commons source pages were checked for model identity and their CC BY 3.0, CC0 and CC BY-SA 4.0 notices respectively. Attribution is registered on the site's image-credit page. The BC Racing ZR image is the existing article asset, cross-checked with the manufacturer's ZR page; no new reuse permission is claimed. Unused Tesla Shop photos were removed from the active credit registry but their asset files were retained.

Screenshots: `scratch/home-replacement-photos-desktop.png` and `scratch/home-replacement-cars-desktop.png` (local review artifacts, not production assets).
