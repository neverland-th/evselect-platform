# BRIEFING — 2026-08-25T08:54:00+07:00

## Mission
Generate and replace all 27 invalid / placeholder / mismatched images across `public/images/reviews/` and `public/images/deepal-s05.jpg` with authentic, high-quality, model-accurate exterior, interior, detail, and hero images.

## 🔒 My Identity
- Archetype: worker
- Roles: implementer, specialist
- Working directory: c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_image_assets_1
- Original parent: f32fc6b1-74c3-4825-823a-576f36bd98a4
- Milestone: M2 (Image Assets Generation & Replacement)

## 🔒 Key Constraints
- Exclusively own all image files in `public/images/reviews/` and `public/images/deepal-s05.jpg`.
- DO NOT modify any `.tsx` or `.ts` files in `src/app/`.
- Maintain genuine implementations and high visual accuracy for Thai EV models.

## Current Parent
- Conversation ID: f32fc6b1-74c3-4825-823a-576f36bd98a4
- Updated: 2026-08-25T08:54:00+07:00

## Task Summary
- **What to build**: Generate/replace all 27 defective image files:
  1. `public/images/reviews/deepal-s05-hero.jpg` — Changan Deepal S05 3/4 front hero with roof camera
  2. `public/images/reviews/geely-ex2-hero.jpg` — Geely EX2 (Xingyuan) 3/4 front urban hero
  3. `public/images/reviews/tesla-model-3-exterior.jpg` — Tesla Model 3 Highland C-shaped taillights & rear 3/4
  4. `public/images/reviews/byd-seal-exterior.jpg` — BYD Seal ocean aesthetics sport sedan side profile
  5. `public/images/reviews/byd-atto-3-exterior.jpg` — BYD Atto 3 wave D-pillar ripple SUV side rear
  6. `public/images/reviews/deepal-s07-exterior.jpg` — Deepal S07 star-flame taillights & coupe SUV side rear
  7. `public/images/reviews/deepal-s05-exterior.jpg` — Deepal S05 side aerodynamic profile & flush handles
  8. `public/images/reviews/geely-ex2-exterior.jpg` — Geely EX2 compact 5-door EV city hatchback
  9. `public/images/reviews/mg4-electric-exterior.jpg` — MG4 Electric Volcano Orange twin-aero wing & Cygnus rear
  10. `public/images/reviews/zeekr-x-exterior.jpg` — Zeekr X golden roof accent & frameless doors
  11. `public/images/reviews/tesla-model-3-interior.jpg` — Tesla Model 3 Highland wrap-around ambient light & stalkless wheel
  12. `public/images/reviews/byd-seal-interior.jpg` — BYD Seal rotating 15.6" screen & crystal gear selector
  13. `public/images/reviews/byd-atto-3-interior.jpg` — BYD Atto 3 gym dumbbell vents & guitar strings cockpit
  14. `public/images/reviews/deepal-s07-interior.jpg` — Deepal S07 Sunflower screen & AR-HUD luxury cabin
  15. `public/images/reviews/deepal-s05-interior.jpg` — Deepal S05 15.4" Sunflower screen & dual wireless charger
  16. `public/images/reviews/geely-ex2-interior.jpg` — Geely EX2 Flyme Auto screen & 10L drawer console
  17. `public/images/reviews/mg4-electric-interior.jpg` — MG4 Electric floating rotary gear console & sports wheel
  18. `public/images/reviews/zeekr-x-interior.jpg` — Zeekr X Yamaha headrest speakers & sliding screen
  19. `public/images/reviews/tesla-model-3-details.jpg` — Tesla Supercharger stall plugged into Highland charge port
  20. `public/images/reviews/byd-seal-details.jpg` — BYD Seal double U-headlights & front aerodynamics
  21. `public/images/reviews/byd-atto-3-details.jpg` — BYD Atto 3 wave ripple D-pillar & ATTO 3 badge
  22. `public/images/reviews/deepal-s07-details.jpg` — Deepal S07 star-flame taillights & S07 badge
  23. `public/images/reviews/deepal-s05-details.jpg` — Deepal S05 roof 4K Gimbal Camera & aero silhouette
  24. `public/images/reviews/geely-ex2-details.jpg` — Geely EX2 10L pull-out passenger drawer console
  25. `public/images/reviews/mg4-electric-details.jpg` — MG4 Electric twin-aero wing & Cygnus cross-hatch lights
  26. `public/images/reviews/zeekr-x-details.jpg` — Zeekr X Yamaha headrest surround speakers & rose gold accents
  27. `public/images/deepal-s05.jpg` — Authentic Changan Deepal S05 top-level thumbnail
- **Success criteria**: 100% genuine model-accurate imagery across all 32 review image slots + top-level image, zero duplicate SHA256 hashes, zero AVIF format mismatches (100% standard JPEG), clean `tsc` and `next build`.

## Key Decisions Made
- Used `generate_image` tool with precise prompt specifications for each model and aspect ratio (16:9 for review photos).
- Converted and verified all files as standard high-quality progressive JPEGs with valid JPEG headers.
- Verified cryptographic uniqueness: all 32 review images have distinct SHA256 hashes.

## Quality Status
- **Build/test result**: `npx tsc --noEmit` passed (0 errors), `npm run build` passed (20/20 static pages).
- **Lint status**: Clean.
- **Images generated/modified**: 27 files replaced, all 32 review images verified.

## Artifact Index
- `.agents/worker_image_assets_1/handoff.md` — Final handoff report
