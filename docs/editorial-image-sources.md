# Editorial image provenance

The following article photographs are locally hosted so the catalog, article heroes, and social previews use the same asset. Both depict the named model, but neither was taken during EVSELECT testing. The article pages display this distinction beside the image.

| Local file | Original photograph | Photographer | License |
| --- | --- | --- | --- |
| `public/images/editorial/zeekr-7x-photo.jpg` | [Zeekr 7X 011.jpg](https://commons.wikimedia.org/wiki/File:Zeekr_7X_011.jpg) | JustAnotherCarDesigner | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) |
| `public/images/editorial/tesla-model-y-l-photo.jpg` | [Tesla Model Y L 004.jpg](https://commons.wikimedia.org/wiki/File:Tesla_Model_Y_L_004.jpg) | JustAnotherCarDesigner | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) |

Both local files are Wikimedia Commons 1920-pixel thumbnails of the originals. Before publishing new artwork, check its exact model and usage rights, add its source here, and run `npm run verify:images`. The production release check is `npm run verify:images:live -- https://www.evselects.com`.

The six technical articles below previously loaded Wikimedia image URLs directly. Four failed in production because Next.js image optimization did not allow that host. All six now use local copies; each page links to its author, source, and license. CC BY-SA applies to the image and any resized version, which remains under the same license.

| Local file in `public/images/articles/` | Wikimedia Commons source | Author | License |
| --- | --- | --- | --- |
| `wheel-alignment-lada.jpg` | [LADA Vesta Sport, Wheel alignment.jpg](https://commons.wikimedia.org/wiki/File:LADA_Vesta_Sport,_Wheel_alignment.jpg) | Dmitry Racer | CC BY-SA 4.0 |
| `ev-power-inverter-toyota-bz4x.jpg` | [Electric motor Toyota bZ4X Expo 2022 CRI 4894.jpg](https://commons.wikimedia.org/wiki/File:Electric_motor_Toyota_bZ4X_Expo_2022_CRI_4894.jpg) | Mariordo (Mario Roberto Durán Ortiz) | CC BY-SA 4.0 |
| `ev-tyre-michelin-audi.jpg` | [Audi Wheel with Michelin Pilot Sport All Season 4 Tire.jpg](https://commons.wikimedia.org/wiki/File:Audi_Wheel_with_Michelin_Pilot_Sport_All_Season_4_Tire.jpg) | TaurusEmerald | CC BY-SA 4.0 |
| `ev-chassis-volkswagen-id3.jpg` | [Volkswagen ID.3 electric car chassis DSC 0060 (52146930872).jpg](https://commons.wikimedia.org/wiki/File:Volkswagen_ID.3_electric_car_chassis_DSC_0060_(52146930872).jpg) | Bill Abbott | CC BY-SA 2.0 |
| `single-wishbone-suspension.jpg` | [Basic Construction of Single Wishbone Suspension System.jpg](https://commons.wikimedia.org/wiki/File:Basic_Construction_of_Single_Wishbone_Suspension_System.jpg) | Atharv Chandel | CC BY-SA 4.0 |
| `gas-damper-photo.jpg` | [Damper 1.jpg](https://commons.wikimedia.org/wiki/File:Damper_1.jpg) | TEy~commonswiki | CC BY-SA 3.0 |

## Previous carbon ceramic brake cover

`public/images/articles/amg-carbon-ceramic-brake-gold.jpg` is a real photograph of an AMG carbon ceramic brake assembly with a gold caliper, taken at the Geneva Motor Show on 11 March 2011. It replaces the previous cover in the article, catalog, and social metadata.

- Source: [Amg carbon ceramic brake geneva auto show 2011.JPG](https://commons.wikimedia.org/wiki/File:Amg_carbon_ceramic_brake_geneva_auto_show_2011.JPG)
- Photographer: Cheeni
- License: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), retained for this image and its resized versions.
- Local asset: Wikimedia Commons 1920 × 1278 thumbnail, with no retouching or generated elements. The article preserves its aspect ratio; listing cards crop it to their existing frame.
- The visible caption identifies the display assembly and date. This is illustrative editorial photography, not an EVSELECT test, stock item, or claim of compatibility with an EV.

## Premium carbon ceramic brake cover — 19 September 2026

The user requested a more premium real photograph. `public/images/articles/porsche-pccb-carbon-ceramic-brakes.jpg` replaces the AMG cover in the article, article catalog and Open Graph/Twitter metadata. It shows a grey Porsche with PCCB, a yellow-gold caliper and a dark centre-lock wheel. The source explicitly identifies PCCB and credits the photograph to Porsche; this is not identified solely by caliper colour.

- Source: [Porsche Stories — Porsche Ceramic Composite Brakes explained](https://www.porsche.com/stories/innovation/porsche-ceramic-composite-brakes-pccb-explained/), published 5 February 2026.
- Credit: Porsche. The source caption identifies a 911 Turbo S (type 992.2); EVSELECT's caption identifies the brake technology without implying any Thai trim specification or EV compatibility.
- Original image: <https://content-hub.imgix.net/1Q0ABslFM4kuJSaBwhTmd8/1da1747c5bbb6805b8cdb302c0413188/Close-up_of_Porsche_PCCB_ceramic_brakes_showing_yellow_calipers_on_Porsche_911_Turbo_S__type_992.2_?w=1308>
- Local file: JPEG, 1308 × 818 pixels, 107,259 bytes; downloaded unchanged, no generated elements or retouching. SHA-256: `f02c0d1a40b38f9597b41d3da7397d566a9d1410c4abeb847d904bab810875e4`.
- Rights: the Stories page credits Porsche but does not state an open reuse licence. Specific reuse permission for EVSELECT is unconfirmed. Do not label the image Creative Commons, public domain or permission obtained. Porsche Newsroom terms apply to Newsroom material and must not automatically be extended to this Stories asset.
- Editorial context: explanatory illustration with source credit and outbound manufacturer link; not EVSELECT photography, a road test, stocked merchandise or an endorsement. Listing cards use the site's existing image frame; the article retains the image's aspect ratio.
- Release verification must confirm the new asset on both the article and catalog at desktop/mobile sizes and check that social image metadata points to the same file.

## Tesla Model 3 Performance for tyre/coilover guide (2026-09-21)

- Local file: `public/images/editorial/tesla-model-3-performance-2024.png`, Wikimedia 1280 x 640 thumbnail; no retouching.
- Exact file/model: https://commons.wikimedia.org/wiki/File:2024_Tesla_Model_3_Performance_front_view_03.png ; description identifies the 2024 Performance, image dated 24 April 2024.
- Creator: iMoD Official; original video https://www.youtube.com/watch?v=Lr1FdX7Pi5o .
- Licence as recorded on Commons: CC BY 3.0, https://creativecommons.org/licenses/by/3.0/ . Article credits creator, source, licence and resize.
- Viewed the downloaded image before inclusion: grey Highland Performance, front-left three-quarter view, whole vehicle and wheels visible. Does not establish current Thailand specifications or represent an EVSELECT road test.
- Specification evidence is separate: Tesla Thai owner's manual for factory 20-inch front/rear tyre sizes.
