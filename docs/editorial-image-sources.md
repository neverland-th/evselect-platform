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
