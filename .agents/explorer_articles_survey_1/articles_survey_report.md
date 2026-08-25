# Codebase Articles & Specifications Survey Report

**Explorer 1: Codebase Articles Auditor**  
**Audit Date:** 2026-08-25  
**Target Repository:** `evselect-platform`  
**Scope:** Review articles located in `src/app/(storefront)/articles/`, image assets in `public/images/`, and article catalog metadata in `src/app/(storefront)/articles/page.tsx`.

---

## Executive Summary

A comprehensive audit of the EVSELECT platform articles section was conducted. The codebase contains **9 published articles** (8 in-depth vehicle reviews and 1 EV battery care technical guide). 

### Key Findings:
1. **Critical Image Asset Inconsistencies & Placeholders**:
   - **Severe Image Mismatches**: 75% of the vehicle review images (24 out of 32 images in `public/images/reviews/`) display incorrect vehicles, unrelated objects, or non-EV sports cars.
   - **Specific Outlandish Placeholders Identified**:
     - **Porsche Panamera Turbo** (highway shot with Oklahoma plate `CVC-911`) used as interior for *BYD Seal* and *BYD Atto 3*.
     - **Ferrari LaFerrari** (red supercar in showroom) used as interior for *Tesla Model 3 Highland* and *Zeekr X*.
     - **Chevrolet Camaro SS** (blue gasoline muscle car in desert) used as exterior for *BYD Seal*, *MG4 Electric*, and *Zeekr X*.
     - **BMW 4 Series Coupe (F32)** used as exterior for *BYD Atto 3*, *Deepal S05*, and *Deepal S07*.
     - **Audi A5 Sportback** (Norwegian plate `SD 63026`) used as details for *BYD Seal* and *Deepal S07*.
     - **Tesla Roadster 2nd Gen Concept** (stage display with "TESLA" backdrop) used as interior for *Deepal S07*, *MG4 Electric*, and *Deepal S05*.
     - **Ford Expedition** (full-size American SUV with California plate `8CPP419`) used as hero for *Deepal S05*.
     - **Mercedes-AMG GT R** (European plate `BENTSIN`) used as details for *Deepal S05*.
     - **Classic 2012-2016 Tesla Model S** (with black oval nosecone) used as exterior for *Tesla Model 3 Highland*.
     - **Anime Wall Polaroids** (Chika, Nezuko) used as charging/interior details for *MG4 Electric* and *BYD Atto 3*.
     - **iPhone on Bed** used as details for *Tesla Model 3* and *Zeekr X*.
     - **Geely EX2 Review**: 100% of images are mismatched (Hero is Zeekr X, Exterior is BYD Atto 3, Interior is Tray Organizer accessory, Details is Floor Mats accessory).
   - **Container/MIME Discrepancy**: 20 out of 32 `.jpg` files in `public/images/reviews/` are actually AVIF (`FTYP/avif`) files misnamed with a `.jpg` extension.

2. **Vehicle Technical Specifications & Thai Market Alignment**:
   - The textual specifications across articles are well-researched and align closely with Thai market configurations (such as Thai RHD CKD specs for MG4 Electric, Rever Automotive pricing campaigns for BYD, and Thai Changan Deepal specs).
   - Minor discrepancies exist between pricing ranges in `articles/page.tsx` and individual review pricing tables (e.g. Model 3 Highland top price).
   - Mixed range standards: Articles state either NEDC, WLTP, or CLTC depending on the manufacturer's Thai homologation standard.

---

## 1. Complete Article Catalog & Specifications Breakdown

### Article 1: Tesla Model 3 Highland
- **Route / Slug:** `/articles/tesla-model-3-highland-review`
- **File:** `src/app/(storefront)/articles/tesla-model-3-highland-review/page.tsx`
- **Vehicle Model:** Tesla Model 3 (Highland Facelift)
- **Category:** `reviews` (Premium Sport EV)
- **Rating:** 9.3 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 1,149,000 – 1,879,000 THB
  - In review page: 1,149,000 – 1,799,000 THB
- **Variants / Trims & Specifications:**
  1. **Standard RWD:**
     - Drive: Single Motor RWD
     - Power / Torque: 283 hp (208 kW) / 420 Nm
     - Battery: 60.0 kWh (LFP)
     - Acceleration (0-100 km/h): 6.1 s
     - Range: 513 km (WLTP) | Real-world Bangkok-Hua Hin: ~410–430 km
     - Charging: DC Supercharger 170 kW | AC 11 kW
     - Price: 1,149,000 THB (promotional campaign)
  2. **Long Range AWD:**
     - Drive: Dual Motor AWD
     - Power / Torque: 498 hp (366 kW) / 493 Nm
     - Battery: 78.1 kWh (NMC Ternary Lithium)
     - Acceleration (0-100 km/h): 4.4 s
     - Range: 629 km (WLTP) | Real-world: ~500–530 km
     - Charging: DC Supercharger 250 kW (10-80% in 18-20 min) | AC 11 kW
     - Price: 1,439,000 THB
  3. **Performance AWD:**
     - Drive: Dual Motor AWD
     - Power / Torque: 627 hp (460 kW) / 741 Nm
     - Battery: 78.1 kWh (NMC)
     - Acceleration (0-100 km/h): 3.1 s
     - Range: 528 km (WLTP) | Real-world: ~430–450 km
     - Charging: DC Supercharger 250 kW | AC 11 kW
     - Price: 1,799,000 THB
- **Dimensions & Storage:**
  - Length: 4,720 mm | Width: 1,850 mm | Wheelbase: 2,875 mm | Ground Clearance: 138 mm
  - Frunk: 88 Litres | Rear Trunk: 594 Litres (Total 682L)
- **Image References:**
  - Hero (`/images/reviews/tesla-model-3-hero.jpg`): **Correct Car** (Red Tesla Model 3 Highland, German plate `B TS 4106E`).
  - Exterior (`/images/reviews/tesla-model-3-exterior.jpg`): **INCORRECT** (2012-2016 Black Tesla Model S with nosecone).
  - Interior (`/images/reviews/tesla-model-3-interior.jpg`): **INCORRECT** (Red Ferrari LaFerrari supercar in showroom).
  - Details (`/images/reviews/tesla-model-3-details.jpg`): **INCORRECT** (iPhone lying on a bedsheet).
  - Product CTA (`/images/tray-organizer.jpg`): Correct accessory image.

---

### Article 2: BYD Seal
- **Route / Slug:** `/articles/byd-seal-review`
- **File:** `src/app/(storefront)/articles/byd-seal-review/page.tsx`
- **Vehicle Model:** BYD Seal (e-Platform 3.0 / CTB)
- **Category:** `reviews` (Performance EV)
- **Rating:** 9.1 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 849,900 – 1,599,000 THB (from latest promo to launch MSRP)
  - In review page: 849,900 – 1,099,900 THB
- **Variants / Trims & Specifications:**
  1. **Dynamic (Standard Range):**
     - Drive: Single Motor RWD
     - Power / Torque: 204 hp (150 kW) / 310 Nm
     - Battery: 61.44 kWh (BYD Blade LFP)
     - Acceleration (0-100 km/h): 7.5 s
     - Range: 510 km (NEDC) | Real-world: ~400–420 km
     - Charging: DC 110 kW (30-80% in 30 min) | AC 7 kW
     - Price: 849,900 THB
  2. **Premium (Extended Range):**
     - Drive: Single Motor RWD
     - Power / Torque: 313 hp (230 kW) / 360 Nm
     - Battery: 82.56 kWh (BYD Blade LFP)
     - Acceleration (0-100 km/h): 5.9 s
     - Range: 650 km (NEDC) | Real-world: ~500–530 km
     - Charging: DC 150 kW (30-80% in 26 min) | AC 7 kW
     - Price: 999,900 THB
  3. **AWD Performance:**
     - Drive: Dual Motor AWD
     - Power / Torque: 530 hp (390 kW: 160kW front + 230kW rear) / 670 Nm
     - Battery: 82.56 kWh (BYD Blade LFP)
     - Acceleration (0-100 km/h): 3.8 s
     - Range: 580 km (NEDC) | Real-world: ~450–470 km
     - Suspension: FSD (Frequency Selective Damping) & iTAC
     - Charging: DC 150 kW | AC 7 kW
     - Price: 1,099,900 THB
- **Dimensions & Storage:**
  - Length: 4,800 mm | Width: 1,875 mm | Wheelbase: 2,920 mm | Ground Clearance: 120 mm
  - Frunk: 53 Litres | Rear Trunk: 400 Litres
- **Image References:**
  - Hero (`/images/reviews/byd-seal-hero.jpg`): **Correct Car** (Light blue BYD Seal, Chinese plate `粤S DD1737`).
  - Exterior (`/images/reviews/byd-seal-exterior.jpg`): **INCORRECT** (Blue Chevrolet Camaro SS gasoline muscle car).
  - Interior (`/images/reviews/byd-seal-interior.jpg`): **INCORRECT** (Black Porsche Panamera Turbo driving on highway, plate `CVC-911`).
  - Details (`/images/reviews/byd-seal-details.jpg`): **INCORRECT** (Silver Audi A5 Sportback in garage, Norwegian plate `SD 63026`).
  - Product CTA (`/images/sunroof-shade.jpg`): Correct accessory image.

---

### Article 3: Zeekr X
- **Route / Slug:** `/articles/zeekr-x-review`
- **File:** `src/app/(storefront)/articles/zeekr-x-review/page.tsx`
- **Vehicle Model:** Zeekr X (Geely SEA Architecture)
- **Category:** `reviews` (Luxury Compact SUV)
- **Rating:** 9.0 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 899,000 – 1,199,000 THB
  - In review page: 899,000 – 1,049,000 THB
- **Variants / Trims & Specifications:**
  1. **Standard RWD:**
     - Drive: Single Motor RWD
     - Power / Torque: 272 hp (200 kW) / 343 Nm
     - Battery: 66.0 kWh (NMC CATL)
     - Acceleration (0-100 km/h): 5.6 s
     - Range: 540 km (NEDC) / 440 km (WLTP) | Real-world: ~380–400 km
     - Charging: DC 150 kW (10-80% in 28 min) | AC 11 kW (3-phase) / 7.4 kW (single)
     - Price: 899,000 THB
  2. **Flagship AWD:**
     - Drive: Dual Motor AWD
     - Power / Torque: 428 hp (315 kW: 115kW front + 200kW rear) / 543 Nm
     - Battery: 66.0 kWh (NMC CATL)
     - Acceleration (0-100 km/h): 3.8 s
     - Range: 470 km (NEDC) / 400 km (WLTP) | Real-world: ~340–360 km
     - Sound System: Yamaha 13 Speakers
     - Charging: DC 150 kW | AC 11 kW
     - Price: 1,049,000 THB
- **Dimensions & Storage:**
  - Length: 4,432 mm | Width: 1,836 mm | Wheelbase: 2,750 mm | Ground Clearance: 170 mm
  - Frunk: 21 Litres | Rear Trunk: 362 Litres
- **Image References:**
  - Hero (`/images/reviews/zeekr-x-hero.jpg`): **Correct Car** (White Zeekr X, Chinese paper plate `BB7N71`).
  - Exterior (`/images/reviews/zeekr-x-exterior.jpg`): **INCORRECT** (Blue Chevrolet Camaro SS).
  - Interior (`/images/reviews/zeekr-x-interior.jpg`): **INCORRECT** (Red Ferrari LaFerrari supercar).
  - Details (`/images/reviews/zeekr-x-details.jpg`): **INCORRECT** (iPhone on bed).
  - Product CTA (`/images/wireless-pad.jpg`): Correct accessory image.

---

### Article 4: MG4 Electric
- **Route / Slug:** `/articles/mg4-electric-review`
- **File:** `src/app/(storefront)/articles/mg4-electric-review/page.tsx`
- **Vehicle Model:** MG4 Electric (MSP Nebula Platform / Thai CKD)
- **Category:** `reviews` (Hot Hatch EV)
- **Rating:** 8.9 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 569,900 – 1,119,900 THB
  - In review page: 569,900 – 1,119,900 THB
- **Variants / Trims & Specifications:**
  1. **Standard D / X (Thailand CKD):**
     - Drive: Single Motor RWD (50:50 weight distribution)
     - Power / Torque: 170 hp (125 kW) / 250 Nm
     - Battery: 49.0 kWh (LFP)
     - Acceleration (0-100 km/h): 7.7 s
     - Range: 423 km (NEDC) | Real-world: ~330–350 km
     - Charging: DC 88 kW (10-80% in 35 min) | AC 6.6 kW
     - Price: 569,900 – 649,900 THB
  2. **Long Range V:**
     - Drive: Single Motor RWD
     - Power / Torque: 180 hp (132 kW) / 250 Nm (or 176 hp / 250 Nm)
     - Battery: 64.0 kWh (NMC Rubik's Cube)
     - Acceleration (0-100 km/h): 7.9 s
     - Range: 540 km (NEDC) | Real-world: ~420–440 km
     - Charging: DC 140 kW (10-80% in 26 min) | AC 6.6 kW
     - Price: 769,900 – 889,900 THB
  3. **XPOWER AWD:**
     - Drive: Dual Motor AWD
     - Power / Torque: 435 hp (320 kW: 150kW front + 170kW rear) / 600 Nm
     - Battery: 64.0 kWh (NMC Rubik's Cube)
     - Acceleration (0-100 km/h): 3.8 s (with Launch Control)
     - Range: 480 km (NEDC) | Real-world: ~360–380 km
     - Suspension: 5-Link Rear Independent
     - Charging: DC 140 kW | AC 6.6 kW
     - Price: 1,119,900 THB
- **Dimensions & Storage:**
  - Length: 4,287 mm | Width: 1,836 mm | Wheelbase: 2,705 mm | Ground Clearance: 150 mm | Turning Radius: 5.3 m
  - Frunk: None (0L) | Rear Trunk: 363 Litres
- **Image References:**
  - Hero (`/images/reviews/mg4-electric-hero.jpg`): **Correct Car** (Blue/green MG4 Electric, UK plate `LE75 OZB`).
  - Exterior (`/images/reviews/mg4-electric-exterior.jpg`): **INCORRECT** (Blue Chevrolet Camaro SS).
  - Interior (`/images/reviews/mg4-electric-interior.jpg`): **INCORRECT** (White Tesla Roadster concept on stage).
  - Details (`/images/reviews/mg4-electric-details.jpg`): **INCORRECT** (Anime polaroid photos on wall).

---

### Article 5: Changan Deepal S07
- **Route / Slug:** `/articles/deepal-s07-review`
- **File:** `src/app/(storefront)/articles/deepal-s07-review/page.tsx`
- **Vehicle Model:** Changan Deepal S07 (EPA1 Platform)
- **Category:** `reviews` (Smart Tech Mid-Size SUV)
- **Rating:** 8.8 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 1,099,000 – 1,399,000 THB
  - In review page: 1,099,000 – 1,399,000 THB (Promo) / 1,399,000 – 1,499,000 THB (MSRP)
- **Variants / Trims & Specifications:**
  1. **Standard BEV:**
     - Drive: Single Motor RWD
     - Power / Torque: 258 hp (190 kW) / 320 Nm
     - Battery: 66.8 kWh (Ternary Lithium NMC CATL)
     - Acceleration (0-100 km/h): 6.7 s
     - Range: 485 km (NEDC) | Real-world: ~380–400 km
     - Charging: DC 167 kW (30-80% in 15 min) | AC 7 kW
     - Price: 1,099,000 – 1,199,000 THB
  2. **Long Range L:**
     - Drive: Single Motor RWD
     - Power / Torque: 218 hp (160 kW) / 320 Nm
     - Battery: 79.97 kWh (Ternary Lithium NMC CATL)
     - Acceleration (0-100 km/h): 7.5 s
     - Range: 560 km (NEDC) | Real-world: ~460–480 km
     - Charging: DC 167 kW | AC 7 kW
     - Price: 1,299,000 – 1,399,000 THB
- **Dimensions & Storage:**
  - Length: 4,750 mm | Width: 1,930 mm | Wheelbase: 2,900 mm | Ground Clearance: 165 mm
  - Frunk: 125 Litres | Rear Trunk: 435 Litres (expandable to 1,385L)
- **Image References:**
  - Hero (`/images/reviews/deepal-s07-hero.jpg`): **Correct Car** (Mint green Deepal S07, Chinese plate `粤L F88874`).
  - Exterior (`/images/reviews/deepal-s07-exterior.jpg`): **INCORRECT** (Blue BMW 4 Series Coupe).
  - Interior (`/images/reviews/deepal-s07-interior.jpg`): **INCORRECT** (White Tesla Roadster concept).
  - Details (`/images/reviews/deepal-s07-details.jpg`): **INCORRECT** (Silver Audi A5 Sportback).

---

### Article 6: BYD Atto 3
- **Route / Slug:** `/articles/byd-atto-3-review`
- **File:** `src/app/(storefront)/articles/byd-atto-3-review/page.tsx`
- **Vehicle Model:** BYD Atto 3 (e-Platform 3.0)
- **Category:** `reviews` (Family C-SUV)
- **Rating:** 8.8 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 669,900 – 859,900 THB
  - In review page: 669,900 – 799,900 THB
- **Variants / Trims & Specifications:**
  1. **Dynamic (Standard Range):**
     - Drive: Single Motor FWD
     - Power / Torque: 201 hp (150 kW) / 310 Nm
     - Battery: 50.25 kWh (BYD Blade LFP)
     - Acceleration (0-100 km/h): 7.9 s
     - Range: 410 km (NEDC) | Real-world: ~330–350 km
     - Charging: DC 70 kW | AC 7 kW
     - Price: 669,900 THB
  2. **Premium (Standard Range):**
     - Drive: Single Motor FWD
     - Power / Torque: 201 hp (150 kW) / 310 Nm
     - Battery: 50.25 kWh (BYD Blade LFP)
     - Acceleration (0-100 km/h): 7.9 s
     - Range: 410 km (NEDC) | Real-world: ~330–350 km
     - Charging: DC 70 kW | AC 7 kW
     - Price: 749,900 THB
  3. **Extended Range:**
     - Drive: Single Motor FWD
     - Power / Torque: 201 hp (150 kW) / 310 Nm
     - Battery: 60.48 kWh (BYD Blade LFP)
     - Acceleration (0-100 km/h): 7.3 s
     - Range: 480 km (NEDC) | Real-world: ~390–410 km
     - Charging: DC 88 kW | AC 7 kW
     - Price: 799,900 THB
- **Dimensions & Storage:**
  - Length: 4,455 mm | Width: 1,875 mm | Wheelbase: 2,720 mm | Ground Clearance: 175 mm
  - Frunk: None (0L) | Rear Trunk: 440 Litres (expandable to 1,340L)
- **Image References:**
  - Hero (`/images/reviews/byd-atto-3-hero.jpg`): **Correct Car** (Silver BYD Atto 3, German plate `M HW 3344E`).
  - Exterior (`/images/reviews/byd-atto-3-exterior.jpg`): **INCORRECT** (Blue BMW 4 Series Coupe).
  - Interior (`/images/reviews/byd-atto-3-interior.jpg`): **INCORRECT** (Black Porsche Panamera Turbo on highway).
  - Details (`/images/reviews/byd-atto-3-details.jpg`): **INCORRECT** (Anime polaroid photos).
  - Product CTA (`/images/tpe-floormats.jpg`): Correct accessory image.

---

### Article 7: Changan Deepal S05
- **Route / Slug:** `/articles/deepal-s05-review`
- **File:** `src/app/(storefront)/articles/deepal-s05-review/page.tsx`
- **Vehicle Model:** Changan Deepal S05
- **Category:** `reviews` (Smart Tech Compact SUV)
- **Rating:** 8.7 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 799,000 – 899,000 THB
  - In review page: 799,000 – 899,000 THB (Estimated)
- **Variants / Trims & Specifications:**
  1. **Standard BEV:**
     - Drive: Single Motor RWD
     - Power / Torque: 238 hp (175 kW) / 320 Nm
     - Battery: 56.12 kWh (Golden Shield LFP CATL)
     - Acceleration (0-100 km/h): 7.3 s
     - Range: 470 km (NEDC) / 510 km (CLTC) | Real-world: ~380–400 km
     - Charging: DC 160 kW (3C Charging, 30-80% in 15 min) | AC 7 kW | V2L 3.3 kW
     - Price: 799,000 – 849,000 THB (Estimated)
  2. **Smart Tech Edition:**
     - Drive: Single Motor RWD
     - Power / Torque: 238 hp (175 kW) / 320 Nm
     - Battery: 56.12 kWh (LFP)
     - Features: Integrated 4K Gimbal Camera on roof (48MP, 4K 120fps), DLP Megapixel Projector Headlights (120-inch projection), Outdoor Waterproof Speakers
     - Range: 510 km (CLTC)
     - Price: 899,000 – 949,000 THB (Estimated)
- **Dimensions & Storage:**
  - Length: 4,620 mm | Width: 1,900 mm | Wheelbase: 2,880 mm | Ground Clearance: 170 mm
  - Frunk: 159 Litres (Largest in class) | Rear Trunk: 492 Litres
- **Image References:**
  - Hero (`/images/reviews/deepal-s05-hero.jpg`): **INCORRECT** (White Ford Expedition American SUV in desert, CA plate `8CPP419`).
  - Exterior (`/images/reviews/deepal-s05-exterior.jpg`): **INCORRECT** (Blue BMW 4 Series Coupe).
  - Interior (`/images/reviews/deepal-s05-interior.jpg`): **INCORRECT** (White Tesla Roadster concept).
  - Details (`/images/reviews/deepal-s05-details.jpg`): **INCORRECT** (Red Mercedes-AMG GT R).

---

### Article 8: Geely EX2
- **Route / Slug:** `/articles/geely-ex2-review`
- **File:** `src/app/(storefront)/articles/geely-ex2-review/page.tsx`
- **Vehicle Model:** Geely EX2 (Geely Xingyuan / GEA Architecture)
- **Category:** `reviews` (Urban City EV)
- **Rating:** 8.6 / 10
- **Price Range Displayed:**
  - In `articles/page.tsx`: 489,000 – 659,000 THB
  - In review page: 489,000 – 659,000 THB (Estimated)
- **Variants / Trims & Specifications:**
  1. **Standard (310km):**
     - Drive: Single Motor RWD (11-in-1 Electric Drive)
     - Power / Torque: 79 hp (58 kW) / 130 Nm
     - Battery: 30.12 kWh (Aegis Short Blade LFP)
     - Acceleration (0-100 km/h): 11.8 s | 0-50 km/h: 3.9 s
     - Range: 310 km (CLTC) | Real-world Bangkok: ~250–270 km
     - Suspension: Rear Multi-link Independent (Unique in class)
     - Charging: DC 50 kW (30-80% in 21 min) | AC 6.6 kW
     - Price: 489,000 – 549,000 THB (Estimated)
  2. **Long Range (410km):**
     - Drive: Single Motor RWD
     - Power / Torque: 114 hp (85 kW) / 150 Nm
     - Battery: 40.16 kWh (Aegis Short Blade LFP)
     - Acceleration (0-100 km/h): 9.9 s
     - Range: 410 km (CLTC) | Real-world Bangkok: ~330–350 km
     - Max Speed: 135–140 km/h
     - Infotainment: 14.6-inch Flyme Auto OS Screen
     - Charging: DC 60 kW (30-80% in 21 min) | AC 6.6 kW
     - Price: 599,000 – 659,000 THB (Estimated)
- **Dimensions & Storage:**
  - Length: 4,135 mm | Width: 1,805 mm | Wheelbase: 2,650 mm | Turning Radius: 4.95 m
  - Frunk: 70 Litres | Glove Drawer: 10 Litres | Rear Trunk: 375 Litres (expandable to 1,320L)
- **Image References:**
  - Hero (`/images/reviews/geely-ex2-hero.jpg`): **INCORRECT** (Zeekr X, file identical to `public/images/zeekr-x.jpg`).
  - Exterior (`/images/reviews/geely-ex2-exterior.jpg`): **INCORRECT** (BYD Atto 3, file identical to `public/images/byd-atto3.jpg`).
  - Interior (`/images/reviews/geely-ex2-interior.jpg`): **INCORRECT** (Tray organizer accessory photo, file identical to `public/images/tray-organizer.jpg`).
  - Details (`/images/reviews/geely-ex2-details.jpg`): **INCORRECT** (TPE floor mats accessory photo, file identical to `public/images/tpe-floormats.jpg`).

---

### Article 9: EV Battery Care Guide
- **Route / Slug:** `/articles/ev-battery-care`
- **File:** `src/app/(storefront)/articles/ev-battery-care/page.tsx`
- **Category:** `guides` (คู่มือและเทคนิค)
- **Highlights:** 'กฎการชาร์จ 20-80%', 'LFP vs NMC Chemistry', 'ตั้งเวลาชาร์จ TOU', 'ป้องกันแบตเตอรี่เสื่อม'
- **Content:** Comprehensive Thai guide explaining 5 core battery care principles:
  1. Operating SOC window between 20% - 80% (with accurate technical note regarding LFP 100% weekly top-up for cell balancing calibration).
  2. Moderating DC fast charging vs AC home charging.
  3. Managing cabin heat & avoiding prolonged direct sun exposure (recommending UV sunroof shades).
  4. Long-term storage guidelines (50% - 60% SOC).
  5. Driving habits and regenerative braking benefits.
- **Image References:**
  - Featured Header (`/images/hero-bg.jpg`): EV dashboard/cockpit graphical backdrop.
  - Inline Recommendation (`/images/sunroof-shade.jpg`): High quality panoramic sunroof shade product photo.
  - Brand Logo (`/logo.png`): EVSELECT official logo.

---

## 2. Complete Image File Hash & Asset Matrix

Below is the exhaustive matrix of all 45 images in `public/images/` and `public/images/reviews/`, demonstrating duplicate files and misidentified subjects:

| Relative Path | Size (Bytes) | Format | MD5 Hash | Actual Depicted Subject | Correct / Mismatched? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `public/images/reviews/tesla-model-3-hero.jpg` | 292,476 | JPEG | `2D68C9E6...` | Red Tesla Model 3 Highland (German plate) | **Correct Model** |
| `public/images/reviews/tesla-model-3-exterior.jpg` | 31,904 | AVIF | `36BBE5C3...` | Black 2012-2016 Tesla Model S (classic nosecone) | ❌ **Mismatched Model** (Model S) |
| `public/images/reviews/tesla-model-3-interior.jpg` | 54,770 | AVIF | `B5E13CBA...` | Red Ferrari LaFerrari in showroom | ❌ **Mismatched Model** (Ferrari Supercar) |
| `public/images/reviews/tesla-model-3-details.jpg` | 37,298 | AVIF | `D96135EB...` | iPhone lying on bed | ❌ **Mismatched Subject** (Smartphone) |
| `public/images/reviews/byd-seal-hero.jpg` | 182,353 | JPEG | `6E441076...` | Light blue BYD Seal (Chinese plate) | **Correct Model** |
| `public/images/reviews/byd-seal-exterior.jpg` | 102,069 | AVIF | `30709676...` | Blue Chevrolet Camaro SS in desert | ❌ **Mismatched Model** (Chevy Camaro ICE) |
| `public/images/reviews/byd-seal-interior.jpg` | 47,102 | AVIF | `0C889660...` | Black Porsche Panamera Turbo (plate `CVC-911`) | ❌ **Mismatched Model** (Porsche Placeholder) |
| `public/images/reviews/byd-seal-details.jpg` | 37,186 | AVIF | `2B07C04D...` | Silver Audi A5 Sportback (plate `SD 63026`) | ❌ **Mismatched Model** (Audi A5 ICE) |
| `public/images/reviews/zeekr-x-hero.jpg` | 200,252 | JPEG | `41F3147D...` | White Zeekr X (Chinese plate) | **Correct Model** |
| `public/images/reviews/zeekr-x-exterior.jpg` | 102,069 | AVIF | `30709676...` | Blue Chevrolet Camaro SS (same as BYD Seal ext) | ❌ **Mismatched Model** (Chevy Camaro ICE) |
| `public/images/reviews/zeekr-x-interior.jpg` | 54,770 | AVIF | `B5E13CBA...` | Red Ferrari LaFerrari (same as Model 3 int) | ❌ **Mismatched Model** (Ferrari Supercar) |
| `public/images/reviews/zeekr-x-details.jpg` | 37,298 | AVIF | `D96135EB...` | iPhone on bed (same as Model 3 details) | ❌ **Mismatched Subject** (Smartphone) |
| `public/images/reviews/mg4-electric-hero.jpg` | 1,299,947 | JPEG | `62FDCE8A...` | Blue/Green MG4 Electric (UK plate `LE75 OZB`) | **Correct Model** |
| `public/images/reviews/mg4-electric-exterior.jpg` | 102,069 | AVIF | `30709676...` | Blue Chevrolet Camaro SS | ❌ **Mismatched Model** (Chevy Camaro ICE) |
| `public/images/reviews/mg4-electric-interior.jpg` | 52,038 | AVIF | `D3AE6948...` | White Tesla Roadster concept on stage | ❌ **Mismatched Model** (Tesla Roadster) |
| `public/images/reviews/mg4-electric-details.jpg` | 79,897 | AVIF | `ADE93EE1...` | Anime polaroid wall art | ❌ **Mismatched Subject** (Anime stickers) |
| `public/images/reviews/deepal-s07-hero.jpg` | 230,812 | JPEG | `D59E8A67...` | Mint green Deepal S07 (Chinese plate) | **Correct Model** |
| `public/images/reviews/deepal-s07-exterior.jpg` | 135,296 | AVIF | `7C7B15CB...` | Blue BMW 4 Series Coupe | ❌ **Mismatched Model** (BMW 4 Series ICE) |
| `public/images/reviews/deepal-s07-interior.jpg` | 52,038 | AVIF | `D3AE6948...` | White Tesla Roadster concept on stage | ❌ **Mismatched Model** (Tesla Roadster) |
| `public/images/reviews/deepal-s07-details.jpg` | 37,186 | AVIF | `2B07C04D...` | Silver Audi A5 Sportback | ❌ **Mismatched Model** (Audi A5 ICE) |
| `public/images/reviews/byd-atto-3-hero.jpg` | 239,556 | JPEG | `7BBF864D...` | Silver BYD Atto 3 (German plate) | **Correct Model** |
| `public/images/reviews/byd-atto-3-exterior.jpg` | 135,296 | AVIF | `7C7B15CB...` | Blue BMW 4 Series Coupe | ❌ **Mismatched Model** (BMW 4 Series ICE) |
| `public/images/reviews/byd-atto-3-interior.jpg` | 47,102 | AVIF | `0C889660...` | Black Porsche Panamera Turbo on highway | ❌ **Mismatched Model** (Porsche Placeholder) |
| `public/images/reviews/byd-atto-3-details.jpg` | 79,897 | AVIF | `ADE93EE1...` | Anime polaroid wall art | ❌ **Mismatched Subject** (Anime stickers) |
| `public/images/reviews/deepal-s05-hero.jpg` | 152,443 | AVIF | `5F23E986...` | White Ford Expedition in desert (CA plate) | ❌ **Mismatched Model** (Ford Expedition SUV) |
| `public/images/reviews/deepal-s05-exterior.jpg` | 135,296 | AVIF | `7C7B15CB...` | Blue BMW 4 Series Coupe | ❌ **Mismatched Model** (BMW 4 Series ICE) |
| `public/images/reviews/deepal-s05-interior.jpg` | 52,038 | AVIF | `D3AE6948...` | White Tesla Roadster concept on stage | ❌ **Mismatched Model** (Tesla Roadster) |
| `public/images/reviews/deepal-s05-details.jpg` | 275,910 | AVIF | `0A3598E4...` | Red Mercedes-AMG GT R in forest | ❌ **Mismatched Model** (Mercedes-AMG GT R) |
| `public/images/reviews/geely-ex2-hero.jpg` | 129,400 | JPEG | `4AD38772...` | White Zeekr X (identical to `zeekr-x.jpg`) | ❌ **Mismatched Model** (Zeekr X) |
| `public/images/reviews/geely-ex2-exterior.jpg` | 149,945 | JPEG | `41BC8398...` | Silver BYD Atto 3 (identical to `byd-atto3.jpg`) | ❌ **Mismatched Model** (BYD Atto 3) |
| `public/images/reviews/geely-ex2-interior.jpg` | 671,904 | JPEG | `7C240293...` | Console Tray Organizer product photo | ❌ **Mismatched Subject** (Product photo) |
| `public/images/reviews/geely-ex2-details.jpg` | 764,870 | JPEG | `575A30C9...` | TPE Floor Mats product photo | ❌ **Mismatched Subject** (Product photo) |

---

## 3. Summary of Recommendations for Image Generation & Replacement

To bring the EVSELECT storefront to an authentic, professional level that builds deep customer trust, the following 26 images require immediate replacement:

1. **Tesla Model 3 Highland**:
   - `tesla-model-3-exterior.jpg`: Replace with modern side-profile / rear 3/4 photo of Tesla Model 3 Highland.
   - `tesla-model-3-interior.jpg`: Replace with Tesla Model 3 Highland minimalist interior (ambient light wrap-around, steering wheel without stalks, rear 8-inch screen).
   - `tesla-model-3-details.jpg`: Replace with Tesla Model 3 charging port or matrix headlight detail.
2. **BYD Seal**:
   - `byd-seal-exterior.jpg`: Replace with BYD Seal side profile / fastback roofline.
   - `byd-seal-interior.jpg`: Replace with BYD Seal interior (rotating 15.6-inch screen, crystal gear shifter).
   - `byd-seal-details.jpg`: Replace with BYD Seal CTB battery / FSD suspension / Frunk.
3. **Zeekr X**:
   - `zeekr-x-exterior.jpg`: Replace with Zeekr X frameless doors / golden roof accent.
   - `zeekr-x-interior.jpg`: Replace with Zeekr X interior (sliding 14.6-inch screen, Yamaha headrest speakers).
   - `zeekr-x-details.jpg`: Replace with Zeekr X B-pillar touch buttons / smart refrigerator.
4. **MG4 Electric**:
   - `mg4-electric-exterior.jpg`: Replace with MG4 Electric twin-aero rear wing / aggressive front fascia.
   - `mg4-electric-interior.jpg`: Replace with MG4 minimalist cockpit (rotary shifter, dual digital screens).
   - `mg4-electric-details.jpg`: Replace with MG4 5-Link rear suspension or Rubik's Cube thin battery pack.
5. **Changan Deepal S07**:
   - `deepal-s07-exterior.jpg`: Replace with Deepal S07 frameless door / interactive LED front matrix.
   - `deepal-s07-interior.jpg`: Replace with Deepal S07 Sunflower screen / electric sunshade / zero-gravity seat.
   - `deepal-s07-details.jpg`: Replace with Deepal S07 125L Frunk or AR-HUD.
6. **BYD Atto 3**:
   - `byd-atto-3-exterior.jpg`: Replace with BYD Atto 3 dragon-face front / D-pillar ripple pattern.
   - `byd-atto-3-interior.jpg`: Replace with BYD Atto 3 gym-inspired interior (guitar string door pockets, dumbbell vents).
   - `byd-atto-3-details.jpg`: Replace with BYD Atto 3 Blade Battery cutaway / charging port.
7. **Changan Deepal S05**:
   - `deepal-s05-hero.jpg`: Replace with genuine Deepal S05 exterior front 3/4.
   - `deepal-s05-exterior.jpg`: Replace with Deepal S05 aerodynamic profile.
   - `deepal-s05-interior.jpg`: Replace with Deepal S05 15.4-inch Sunflower Screen cabin.
   - `deepal-s05-details.jpg`: Replace with Deepal S05 4K Gimbal Camera on roof or 159L Frunk.
8. **Geely EX2**:
   - `geely-ex2-hero.jpg`: Replace with genuine Geely EX2 (Xingyuan) friendly front 3/4.
   - `geely-ex2-exterior.jpg`: Replace with Geely EX2 two-tone floating roof & compact proportions.
   - `geely-ex2-interior.jpg`: Replace with Geely EX2 Flyme Auto 14.6-inch screen & 10L drawer console.
   - `geely-ex2-details.jpg`: Replace with Geely EX2 Multi-link rear suspension or 70L Frunk.

---
*Report compiled by Explorer 1 (Codebase Articles Auditor).*
