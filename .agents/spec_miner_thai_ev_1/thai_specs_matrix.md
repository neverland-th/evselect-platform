# Authoritative Thai Market EV Specifications Matrix

**Date of Audit & Mining**: 2026-08-25  
**Authoritative Sources**: Official Thailand Brand Specs (Tesla Thailand, BYD Rêver Automotive, Zeekr Thailand, MG Sales Thailand, Changan Deepal Thailand, Geely Thonburi Thailand), Headlightmag.com, Autolifethailand.tv, Thailand ECO Sticker Homologation Data.

---

## 1. Features Discovered

| # | Category | Feature | Description | Inputs / Parameters | Outputs / Metric Specs | Error / Invalidation Behavior | Discovered Via |
|---|----------|---------|-------------|---------------------|------------------------|--------------------------------|----------------|
| 1 | D-Sedan EV | Tesla Model 3 Highland Standard RWD | Single-motor RWD premium electric sedan | 60.0 kWh LFP (CATL), 400V architecture | 283 hp (208 kW), 420 Nm, 0-100 in 6.1s, 513 km (WLTP), DC 170 kW, AC 11 kW | Discard US 4680/Panasonic 2170 specs | Headlightmag & Tesla TH |
| 2 | D-Sedan EV | Tesla Model 3 Highland Long Range AWD | Dual-motor AWD long range electric sedan | 78.1 kWh NMC (LG Energy), Dual Motor | 498 hp, 493 Nm, 0-100 in 4.4s, 629 km (WLTP), DC 250 kW, AC 11 kW | Discard EPA 341-mile rating in favor of WLTP 629 km | Headlightmag & Autolifethailand |
| 3 | D-Sedan EV | Tesla Model 3 Highland Performance AWD | Dual-motor AWD high-performance sport sedan | 78.1 kWh NMC (LG Energy), Performance 4D2 rear | 460 hp (UK/TH spec) / 627 hp system max, 723-741 Nm, 0-100 in 3.1s, 528 km (WLTP), DC 250 kW | Discard US 510hp rating differences | Autolifethailand & Headlightmag |
| 4 | Sport Sedan EV | BYD Seal Dynamic | Base single-motor RWD sport sedan | 61.44 kWh LFP Blade Battery, CTB platform | 204 hp (150 kW), 310 Nm, 0-100 in 7.5s, 510 km (NEDC), DC 110 kW, AC 7 kW | Discard Chinese CLTC 550 km rating | Rêver Automotive & Headlightmag |
| 5 | Sport Sedan EV | BYD Seal Premium | Extended range single-motor RWD sport sedan | 82.56 kWh LFP Blade Battery, CTB platform | 313 hp (230 kW), 360 Nm, 0-100 in 5.9s, 650 km (NEDC), DC 150 kW, AC 7 kW | Discard CLTC 700 km rating | Rêver Automotive & Headlightmag |
| 6 | Sport Sedan EV | BYD Seal AWD Performance | Dual-motor AWD performance sport sedan | 82.56 kWh LFP Blade Battery, iTAC + FSD | 530 hp (390 kW: Front 160kW + Rear 230kW), 670 Nm, 0-100 in 3.8s, 580 km (NEDC), DC 150 kW, AC 7 kW | Discard non-FSD Chinese market base suspension | Rêver Automotive & Autolifethailand |
| 7 | Premium Crossover | Zeekr X Standard RWD | Luxury Scandinavian-designed compact EV SUV | 66.0 kWh NMC (CATL), SEA platform | 272 hp (200 kW), 343 Nm, 0-100 in 5.6s, 540 km (NEDC) / 440 km (WLTP), DC 150 kW, AC 11 kW | Discard EU 22kW AC standard on base trim | Zeekr Thailand & Headlightmag |
| 8 | Premium Crossover | Zeekr X Flagship AWD | Dual-motor AWD high performance compact crossover | 66.0 kWh NMC (CATL), Akebono 4-piston brakes | 428 hp (315 kW: Front 115kW + Rear 200kW), 543 Nm, 0-100 in 3.8s, 470 km (NEDC) / 400 km (WLTP), DC 150 kW, AC 11-22 kW | Discard non-Akebono brake overseas trims | Zeekr Thailand & Autolifethailand |
| 9 | Electric Hatchback | MG4 Electric Standard Range (D/X) | RWD 50:50 balance electric hatchback | 49.0 kWh LFP (CKD Thailand build) | 170 hp (125 kW), 250 Nm, 0-100 in 7.7s, 423 km (NEDC) / 350 km (WLTP), DC 88-120 kW, AC 6.6 kW | Discard European 51 kWh early CBU spec | MG Sales Thailand & Headlightmag |
| 10 | Electric Hatchback | MG4 Electric Long Range (V) | Extended range RWD electric hatchback | 64.0 kWh NMC Rubik's Cube / 62.2 kWh LFP | 180 hp (130 kW) / 245 hp (MY2026), 250-350 Nm, 0-100 in 7.9s, 540 km (NEDC) / 450 km (WLTP), DC 140 kW, AC 11 kW | Discard UK 77 kWh Trophy Extended pack (never sold in TH) | MG Sales Thailand & Headlightmag |
| 11 | Electric Hot Hatch | MG4 XPOWER AWD | Dual-motor AWD performance hot hatch | 64.0 kWh NMC Rubik's Cube, Dual Motor | 435 hp (320 kW: Front 150kW + Rear 170kW), 600 Nm, 0-100 in 3.8s, 480 km (NEDC) / 385 km (WLTP), DC 140 kW, AC 11 kW | Discard rear drum-brake overseas misinformation | MG Sales Thailand & Headlightmag |
| 12 | Mid-size SUV | Changan Deepal S07 Standard BEV | Cyberpunk style RWD mid-size smart SUV | 66.8 kWh NMC (CATL) / 68.8 kWh LFP | 258 hp (190 kW), 320 Nm, 0-100 in 6.7s, 485 km (NEDC), DC 87-167 kW (3C), AC 7 kW, Frunk 125L | Discard Chinese CLTC 520 km rating | Changan Thailand & Headlightmag |
| 13 | Mid-size SUV | Changan Deepal S07 L (Long Range) | Long range RWD mid-size smart SUV | 79.97 kWh NMC (CATL), RWD | 218 hp (160 kW), 320 Nm, 0-100 in 7.5s, 560 km (NEDC), DC 167 kW, AC 7 kW, Frunk 125L | Discard Chinese CLTC 620 km rating | Changan Thailand & Autolifethailand |
| 14 | Compact SUV | BYD Atto 3 Dynamic / Premium | Family compact SUV with Blade Battery | 50.25 kWh (49.92 kWh) LFP Blade Battery | 201 hp / 204 PS (150 kW), 310 Nm, 0-100 in 7.9s, 410 km (NEDC) / 345 km (WLTP), DC 70-88 kW, AC 7 kW | Discard Australian 50 kWh naming differences | Rêver Automotive & Headlightmag |
| 15 | Compact SUV | BYD Atto 3 Extended Range | Long range family compact SUV | 60.48 kWh LFP Blade Battery, FWD | 201 hp / 204 PS (150 kW), 310 Nm, 0-100 in 7.3s, 480 km (NEDC) / 420 km (WLTP), DC 88 kW, AC 7 kW | Discard Chinese Yuan Plus base trim without roof rails | Rêver Automotive & Headlightmag |
| 16 | Smart Tech SUV | Changan Deepal S05 BEV (Lite/Plus/Max) | Creator SUV with roof 4K gimbal & DLP projector | 56.12 kWh LFP Golden Shield (CATL), RWD | 238 hp (175 kW), 320 Nm, 0-100 in 7.3s, 470-510 km (NEDC/CLTC), DC 160 kW (3C, 15 min), AC 7 kW, Frunk 159L | Discard REEV engine specs when referencing pure BEV | Changan Thailand & Autolifethailand |
| 17 | City EV | Geely EX2 Pro (Geely Xingyuan) | Compact urban RWD EV with Multi-link rear | 39.4 kWh Aegis Short Blade LFP, RWD | 116 hp (85 kW), 150 Nm, 0-100 in 9.9s, 395 km (NEDC) / 325 km (WLTP), DC 70 kW, AC 6.6 kW, Frunk 70L, 15" wheels | Discard Chinese 58 kW (79 hp) / 30 kWh base trim (not imported to TH) | Geely Thonburi & Headlightmag |
| 18 | City EV | Geely EX2 Max (Geely Xingyuan) | Compact urban RWD EV with Multi-link & 360° Cam | 39.4 kWh Aegis Short Blade LFP, RWD | 116 hp (85 kW), 150 Nm, 0-100 in 9.9s, 395 km (NEDC) / 325 km (WLTP), DC 70 kW, AC 6.6 kW, Frunk 70L, 16" wheels | Discard Chinese 58 kW (79 hp) / 30 kWh base trim (not imported to TH) | Geely Thonburi & Headlightmag |

---

## 2. Edge Cases & Market-Specific Nuances

| # | Feature / Model | Foreign / Incorrect Spec | Authoritative Thai Specification | Rationale & Evidence |
|---|-----------------|--------------------------|----------------------------------|----------------------|
| 1 | Geely EX2 | 79 hp (58 kW) / 30.12 kWh battery | **116 hp (85 kW) / 39.4 kWh Aegis LFP** | Geely Thonburi Thailand strictly imports only the high-output 85 kW motor with 39.4 kWh pack for both Pro and Max trims. The 58 kW / 30 kWh Chinese base version was NOT homologated or launched in Thailand. |
| 2 | MG4 Electric | 77 kWh Trophy Extended Range pack | **49.0 kWh LFP / 64.0 kWh NMC / 62.2 kWh LFP** | SAIC Motor-CP Thailand never offered the European 77 kWh pack. Thai trims are strictly Standard (49 kWh), Long Range (64 kWh / 62.2 kWh), and XPOWER AWD (64 kWh). |
| 3 | Deepal S07 | CLTC 620 km range claim | **NEDC 485 km (Standard) / 560 km (S07 L)** | Official Thai ECO Sticker and Changan Thailand marketing strictly communicate NEDC cycle figures. CLTC figures are Chinese domestic standards and overestimate real Thai highway range by ~20%. |
| 4 | Tesla Model 3 | 82 kWh Panasonic 2170 / US 4680 cells | **60.0 kWh CATL LFP (RWD) & 78.1 kWh LG NMC (LR/Perf)** | All Thai market Model 3 units are manufactured at Tesla Gigafactory Shanghai (พวงมาลัยขวา - RHD) utilizing CATL LFP prismatic cells for RWD and LG Energy Solution NMC 21700 cells for AWD variants. |
| 5 | BYD Seal | European WLTP 570 km as sole rating | **NEDC 510 km (Dynamic), 650 km (Premium), 580 km (AWD)** | Rêver Automotive's official Thai homologation labels and Thai brochures prominently feature the NEDC test cycle for all three trims. |
| 6 | BYD Atto 3 | Single-pane glass roof without sunblind | **Factory Electric Sunroof with Electric Roller Blind** | All Thai spec BYD Atto 3 models feature a motorized fabric roller blind beneath the panoramic sunroof specifically tailored for Thailand's tropical climate. |
| 7 | Zeekr X | 22 kW AC onboard charger on base trim | **11 kW AC (Standard RWD) / up to 22 kW (Flagship AWD)** | European market models come standard with 22 kW AC, whereas Zeekr Thailand standardizes 11 kW AC for the Standard RWD trim. |
| 8 | Deepal S05 | REEV 1.5L Gasoline generator mix-up | **Pure BEV: 238 hp (175 kW), 56.12 kWh LFP, Frunk 159L** | While China offers both REEV and BEV, the Thai review article and vehicle finder must clearly demarcate the Pure Electric BEV specifications (Frunk 159L is only present on BEV, as REEV houses the 1.5L ICE engine in the front). |

---

## 3. Comprehensive Model-by-Model Thai Specification Matrix

### 3.1 Tesla Model 3 Highland (MY2024–2026)
* **Distributor / Brand**: Tesla Thailand (Direct OEM)
* **Body Type**: Premium D-Segment Electric Sedan
* **Assembly / Origin**: CBU Shanghai Gigafactory, China (RHD Thai Homologation)
* **Official Dimensions**: L: 4,720 mm \| W: 1,850 mm \| H: 1,441 mm \| Wheelbase: 2,875 mm \| Ground Clearance: 138 mm
* **Drag Coefficient**: Cd 0.219
* **Frunk Capacity**: 88 L (Front Trunk) \| Trunk Capacity: 594 L (425L main + 88L underfloor + side pockets)

| Parameter | Standard RWD | Long Range AWD | Performance AWD |
|---|---|---|---|
| **Drive Layout** | Single Motor Rear-Wheel Drive (RWD) | Dual Motor All-Wheel Drive (AWD) | Dual Motor All-Wheel Drive (AWD) |
| **Motor Type** | Permanent Magnet Synchronous | Induction (Front) + PMSM (Rear) | Induction (Front) + 4D2 PMSM (Rear) |
| **Max Power** | 283 hp (208 kW / 283 PS) | 498 hp (366 kW / 498 PS) | 460 hp (Thai/UK) / 627 hp system max |
| **Max Torque** | 420 Nm | 493 Nm (Combined system) | 723 – 741 Nm |
| **0-100 km/h** | 6.1 seconds | 4.4 seconds | 3.1 seconds |
| **Top Speed** | 201 km/h | 201 km/h | 262 km/h |
| **Battery Chemistry** | Lithium Iron Phosphate (LFP - CATL) | Nickel Manganese Cobalt (NMC - LG) | Nickel Manganese Cobalt (NMC - LG) |
| **Battery Capacity** | 60.0 kWh (Gross ~60.4 kWh) | 78.1 kWh (Gross ~79.0 kWh) | 78.1 kWh (Gross ~79.0 kWh) |
| **Range (WLTP)** | 513 km | 629 km | 528 km |
| **Real-World Highway Range (TH)** | ~420 – 440 km | ~520 – 545 km | ~440 – 470 km |
| **AC Charging** | 11 kW Type 2 (3-phase) / 7.4 kW (1-phase) | 11 kW Type 2 (3-phase) | 11 kW Type 2 (3-phase) |
| **DC Fast Charging Peak** | 170 kW (10-80% in ~22 min) | 250 kW (10-80% in ~18-20 min) | 250 kW (10-80% in ~18-20 min) |
| **Official Thai Price (THB)** | 1,149,000 – 1,599,000 ฿ | 1,439,000 – 1,899,000 ฿ | 1,799,000 – 2,149,000 ฿ |

---

### 3.2 BYD Seal (MY2024–2026)
* **Distributor / Brand**: Rêver Automotive Co., Ltd.
* **Body Type**: High-Performance D-Segment Electric Sport Sedan
* **Assembly / Origin**: CBU Changzhou/Shenzhen, China (RHD Thai Homologation)
* **Platform**: BYD e-Platform 3.0 with CTB (Cell-to-Body) Structure
* **Official Dimensions**: L: 4,800 mm \| W: 1,875 mm \| H: 1,460 mm \| Wheelbase: 2,920 mm \| Ground Clearance: 120 mm
* **Drag Coefficient**: Cd 0.219
* **Frunk Capacity**: 53 L \| Trunk Capacity: 400 L

| Parameter | Dynamic (RWD) | Premium (RWD) | AWD Performance |
|---|---|---|---|
| **Drive Layout** | Single Motor Rear-Wheel Drive (RWD) | Single Motor Rear-Wheel Drive (RWD) | Dual Motor All-Wheel Drive (AWD) |
| **Motor Type** | Permanent Magnet Synchronous | Permanent Magnet Synchronous | Asynchronous (Front) + PMSM (Rear) |
| **Max Power** | 204 hp (150 kW / 204 PS) | 313 hp (230 kW / 313 PS) | 530 hp (390 kW: 160kW F + 230kW R) |
| **Max Torque** | 310 Nm | 360 Nm | 670 Nm (310 Nm F + 360 Nm R) |
| **0-100 km/h** | 7.5 seconds | 5.9 seconds | 3.8 seconds |
| **Top Speed** | 190 km/h | 225 km/h | 225 km/h |
| **Battery Chemistry** | BYD Blade Battery (LFP) | BYD Blade Battery (LFP) | BYD Blade Battery (LFP) |
| **Battery Capacity** | 61.44 kWh | 82.56 kWh | 82.56 kWh |
| **Range (NEDC)** | 510 km | 650 km | 580 km |
| **Range (WLTP Est.)** | ~460 km | ~570 km | ~520 km |
| **Real-World Highway Range (TH)** | ~390 – 420 km | ~490 – 520 km | ~430 – 460 km |
| **AC Charging** | 7.0 kW Type 2 (1-phase) | 7.0 kW Type 2 (1-phase) | 7.0 kW Type 2 (1-phase) |
| **DC Fast Charging Peak** | 110 kW (30-80% in ~30 min) | 150 kW (30-80% in ~26 min) | 150 kW (30-80% in ~26 min) |
| **V2L Support** | 2.2 kW (220V) | 2.2 kW (220V) | 2.2 kW (220V) |
| **Suspension Type** | Double Wishbone / Multi-link | Double Wishbone / Multi-link | Double Wishbone / Multi-link + FSD |
| **Official Thai Price (THB)** | 849,900 – 1,325,000 ฿ | 999,900 – 1,449,000 ฿ | 1,099,900 – 1,599,000 ฿ |

---

### 3.3 Zeekr X (MY2024–2026)
* **Distributor / Brand**: Zeekr Intelligent Technology (Thailand)
* **Body Type**: Premium Luxury Compact EV Crossover
* **Assembly / Origin**: CBU Geely Ningbo, China (RHD Thai Homologation)
* **Platform**: Geely SEA (Sustainable Experience Architecture)
* **Official Dimensions**: L: 4,432 mm \| W: 1,836 mm \| H: 1,566 mm \| Wheelbase: 2,750 mm \| Ground Clearance: 170 mm
* **Frunk Capacity**: 21 L \| Trunk Capacity: 362 L (Expandable to 1,182 L)

| Parameter | Standard RWD | Flagship AWD |
|---|---|---|
| **Drive Layout** | Single Motor Rear-Wheel Drive (RWD) | Dual Motor All-Wheel Drive (AWD) |
| **Motor Type** | Permanent Magnet Synchronous | Permanent Magnet Synchronous (Front & Rear) |
| **Max Power** | 272 hp (200 kW / 272 PS) [MY2026: 335 hp] | 428 hp (315 kW: 115kW F + 200kW R) [MY26: 489 hp] |
| **Max Torque** | 343 Nm [MY2026: 373 Nm] | 543 Nm [MY2026: 573 Nm] |
| **0-100 km/h** | 5.6 seconds | 3.8 seconds (MY2026: 3.7s) |
| **Top Speed** | 180 km/h | 190 km/h |
| **Battery Chemistry** | Ternary Lithium (NMC - CATL) [MY26 LFP 61kWh opt] | Ternary Lithium (NMC - CATL) |
| **Battery Capacity** | 66.0 kWh | 66.0 kWh |
| **Range (NEDC)** | 540 km | 470 km |
| **Range (WLTP)** | 440 km | 400 km |
| **Real-World Highway Range (TH)** | ~410 – 435 km | ~360 – 385 km |
| **AC Charging** | 11 kW Type 2 (3-phase) | 11 kW / 22 kW Type 2 |
| **DC Fast Charging Peak** | 150 kW (10-80% in ~28 min) | 150 kW (10-80% in ~28 min) |
| **Braking Hardware** | Standard Floating Calipers | Akebono 4-Piston Calipers (100-0 km/h in 34.5m) |
| **Audio System** | Zeekr Premium Audio | Yamaha 13-Speaker Surround with Headrest Speakers |
| **Official Thai Price (THB)** | 899,000 – 1,199,000 ฿ | 1,049,000 – 1,349,000 ฿ |

---

### 3.4 MG4 Electric (MY2024–2026)
* **Distributor / Brand**: SAIC Motor-CP / MG Sales (Thailand) Co., Ltd.
* **Body Type**: RWD Electric Hot Hatch / Compact Hatchback
* **Assembly / Origin**: CKD Chonburi, Thailand (previously CBU China)
* **Platform**: SAIC Nebula Pure Electric Platform (MSP) with 50:50 weight distribution
* **Official Dimensions**: L: 4,287 mm \| W: 1,836 mm \| H: 1,516 mm \| Wheelbase: 2,705 mm \| Ground Clearance: 150 mm
* **Turning Radius**: 5.3 meters \| Trunk Capacity: 363 L (Expandable to 1,177 L)

| Parameter | Standard (D & X) | Long Range (V) | XPOWER AWD |
|---|---|---|---|
| **Drive Layout** | Single Motor Rear-Wheel Drive (RWD) | Single Motor Rear-Wheel Drive (RWD) | Dual Motor All-Wheel Drive (AWD) |
| **Motor Type** | Permanent Magnet Synchronous | Permanent Magnet Synchronous | Dual PMSM (Front 150kW + Rear 170kW) |
| **Max Power** | 170 hp (125 kW / 170 PS) | 180 hp (130 kW) / 245 hp (MY26) | 435 hp (320 kW / 435 PS) |
| **Max Torque** | 250 Nm | 250 Nm (350 Nm on 245hp) | 600 Nm (250 Nm F + 350 Nm R) |
| **0-100 km/h** | 7.7 seconds | 7.9 seconds (6.5s on 245hp) | 3.8 seconds (Launch Control) |
| **Top Speed** | 160 km/h | 160 km/h | 200 km/h |
| **Battery Chemistry** | Lithium Iron Phosphate (LFP) | NMC Rubik's Cube / LFP (MY26) | NMC Rubik's Cube Battery |
| **Battery Capacity** | 49.0 kWh (CKD) / 51.0 kWh (CBU) | 64.0 kWh / 62.2 kWh (CATL) | 64.0 kWh |
| **Range (NEDC)** | 423 km | 540 km | 480 km |
| **Range (WLTP)** | 350 km | 450 km | 385 km |
| **Real-World Highway Range (TH)** | ~330 – 350 km | ~430 – 460 km | ~370 – 400 km |
| **AC Charging** | 6.6 kW Type 2 (1-phase) | 11 kW Type 2 (3-phase) | 11 kW Type 2 (3-phase) |
| **DC Fast Charging Peak** | 88 kW – 120 kW (10-80% in ~35m) | 140 kW (10-80% in ~26 min) | 140 kW (10-80% in ~26 min) |
| **Rear Suspension** | 5-Link Independent | 5-Link Independent | 5-Link Independent Sport-tuned |
| **Official Thai Price (THB)** | 569,900 – 649,900 ฿ | 769,900 – 889,900 ฿ | 1,119,900 ฿ |

---

### 3.5 Changan Deepal S07 (MY2024–2026)
* **Distributor / Brand**: Changan Auto Sales (Thailand) Co., Ltd.
* **Body Type**: Mid-size Smart Tech Electric D-SUV
* **Assembly / Origin**: CBU Chongqing, China (RHD Thai Homologation / Rayong Plant preparation)
* **Platform**: Changan EPA1 Digital Platform
* **Official Dimensions**: L: 4,750 mm \| W: 1,930 mm \| H: 1,625 mm \| Wheelbase: 2,900 mm \| Ground Clearance: 165 mm
* **Frunk Capacity**: 125 L \| Trunk Capacity: 445 L (Expandable to 1,385 L)
* **Sunroof**: Panoramic Glass Roof with Power Roller Sunblind (ม่านบังแดดไฟฟ้าเปิด-ปิดได้ 100%)

| Parameter | Deepal S07 Standard BEV | Deepal S07 L (Long Range) |
|---|---|---|
| **Drive Layout** | Single Motor Rear-Wheel Drive (RWD) | Single Motor Rear-Wheel Drive (RWD) |
| **Motor Type** | Permanent Magnet Synchronous Motor | Permanent Magnet Synchronous Motor |
| **Max Power** | 258 hp (190 kW / 258 PS) | 218 hp (160 kW / 218 PS) |
| **Max Torque** | 320 Nm | 320 Nm |
| **0-100 km/h** | 6.7 seconds | 7.5 seconds |
| **Top Speed** | 180 km/h | 180 km/h |
| **Battery Chemistry** | Ternary Lithium (NMC - CATL) / 68.8 LFP (MY25) | Ternary Lithium (NMC - CATL) |
| **Battery Capacity** | 66.8 kWh (MY2025: 68.8 kWh) | 79.97 kWh |
| **Range (NEDC)** | 485 km | 560 km |
| **Range (WLTP Est.)** | ~410 km | ~475 km |
| **Real-World Highway Range (TH)** | ~380 – 400 km | ~450 – 480 km |
| **AC Charging** | 7.0 kW Type 2 (1-phase) | 7.0 kW Type 2 (1-phase) |
| **DC Fast Charging Peak** | 87 kW – 167 kW (3C, 30-80% in ~15-20 min) | 167 kW (30-80% in ~25 min) |
| **Screen & Tech** | 15.6" Sunflower Rotating Touchscreen + 53" AR-HUD | 15.6" Sunflower Rotating Touchscreen + 53" AR-HUD |
| **Official Thai Price (THB)** | 1,099,000 – 1,399,000 ฿ | 1,299,000 – 1,499,000 ฿ |

---

### 3.6 BYD Atto 3 (MY2024–2026)
* **Distributor / Brand**: Rêver Automotive Co., Ltd.
* **Body Type**: Compact Family Electric SUV
* **Assembly / Origin**: CKD Rayong, Thailand / CBU China (RHD Thai Homologation)
* **Platform**: BYD e-Platform 3.0
* **Official Dimensions**: L: 4,455 mm \| W: 1,875 mm \| H: 1,615 mm \| Wheelbase: 2,720 mm \| Ground Clearance: 175 mm
* **Trunk Capacity**: 440 L (Expandable to 1,340 L) \| Roof: Panoramic Sunroof with Electric Roller Blind

| Parameter | Dynamic / Premium (Standard Range) | Extended Range |
|---|---|---|
| **Drive Layout** | Single Motor Front-Wheel Drive (FWD) | Single Motor Front-Wheel Drive (FWD) |
| **Motor Type** | Permanent Magnet Synchronous Motor | Permanent Magnet Synchronous Motor |
| **Max Power** | 201 hp / 204 PS (150 kW) | 201 hp / 204 PS (150 kW) |
| **Max Torque** | 310 Nm | 310 Nm |
| **0-100 km/h** | 7.9 seconds | 7.3 seconds |
| **Top Speed** | 160 km/h | 160 km/h |
| **Battery Chemistry** | BYD Blade Battery (LFP Chemistry) | BYD Blade Battery (LFP Chemistry) |
| **Battery Capacity** | 50.25 kWh (49.92 kWh) | 60.48 kWh |
| **Range (NEDC)** | 410 km | 480 km |
| **Range (WLTP)** | 345 km | 420 km |
| **Real-World Highway Range (TH)** | ~310 – 330 km | ~380 – 410 km |
| **AC Charging** | 7.0 kW Type 2 (1-phase) | 7.0 kW Type 2 (1-phase) |
| **DC Fast Charging Peak** | 70 kW – 88 kW (30-80% in ~30 min) | 88 kW (30-80% in ~28 min) |
| **V2L Support** | 2.2 kW (220V) | 2.2 kW (220V) |
| **Center Screen** | 15.6" Electric Rotating Touchscreen | 15.6" Electric Rotating Touchscreen |
| **Official Thai Price (THB)** | 669,900 – 749,900 ฿ (Launch: 1,099,900 ฿) | 799,900 – 859,900 ฿ (Launch: 1,199,900 ฿) |

---

### 3.7 Changan Deepal S05 (MY2025–2026)
* **Distributor / Brand**: Changan Auto Sales (Thailand) Co., Ltd.
* **Body Type**: Smart Tech & Lifestyle Creator Compact/Mid-size EV SUV
* **Assembly / Origin**: CBU China / Thai Homologation
* **Platform**: Changan Digital EV Architecture
* **Official Dimensions**: L: 4,620 mm \| W: 1,900 mm \| H: 1,600 mm \| Wheelbase: 2,880 mm
* **Frunk Capacity**: **159 Liters** (World-class largest front trunk in BEV segment)
* **Trunk Capacity**: 492 L (Expandable to 1,250 L)
* **Special Hardware**: 4K 120fps Gimbal Camera on roof, 120-inch DLP Projector Headlights

| Parameter | Deepal S05 BEV (Lite / Plus / Max) |
|---|---|
| **Drive Layout** | Single Motor Rear-Wheel Drive (RWD) |
| **Motor Type** | Permanent Magnet Synchronous Motor |
| **Max Power** | 238 hp (175 kW / 238 PS) |
| **Max Torque** | 320 Nm |
| **0-100 km/h** | 7.3 seconds |
| **Top Speed** | 180 km/h |
| **Battery Chemistry** | Lithium Iron Phosphate (LFP Golden Shield - CATL) |
| **Battery Capacity** | 56.12 kWh |
| **Range (NEDC / CLTC)** | 470 – 510 km (NEDC ~470 km / CLTC 510 km) |
| **Range (WLTP Est.)** | ~400 km |
| **Real-World Highway Range (TH)** | ~380 – 400 km |
| **AC Charging** | 7.0 kW Type 2 (1-phase) |
| **DC Fast Charging Peak** | 152 – 160 kW (3C Charging: 30-80% in **15 minutes**) |
| **V2L Support** | 3.3 kW (220V) |
| **Infotainment & SoC** | 15.6" Sunflower Screen + AR-HUD (Qualcomm Snapdragon 8155) |
| **Official Thai Price (THB)** | 799,000 – 899,000 ฿ (Lite 799k / Plus 849k / Max 899k) |

---

### 3.8 Geely EX2 / Geely Xingyuan (MY2025–2026)
* **Distributor / Brand**: Geely Thonburi Thailand (CBU Authorized Distributor)
* **Body Type**: Urban Compact RWD City EV
* **Assembly / Origin**: CBU China (Geely GEA Architecture)
* **Official Dimensions**: L: 4,135 mm \| W: 1,805 mm \| H: 1,580 mm \| Wheelbase: 2,650 mm
* **Frunk Capacity**: **70 Liters** \| Trunk Capacity: 375 L (Expandable to 1,320 L)
* **Suspension**: Front MacPherson Strut / **Rear Multi-link Independent (One-and-only in 400k-500k THB segment)**

| Parameter | Geely EX2 Pro (Thai Spec) | Geely EX2 Max (Thai Spec) |
|---|---|---|
| **Drive Layout** | Single Motor Rear-Wheel Drive (RWD) | Single Motor Rear-Wheel Drive (RWD) |
| **Motor Type** | 11-in-1 Intelligent Electric Drive (PMSM) | 11-in-1 Intelligent Electric Drive (PMSM) |
| **Max Power** | 116 hp (85 kW / 116 PS) | 116 hp (85 kW / 116 PS) |
| **Max Torque** | 150 Nm | 150 Nm |
| **0-100 km/h** | 9.9 – 10.2 seconds | 9.9 – 10.2 seconds |
| **Top Speed** | 140 km/h | 140 km/h |
| **Battery Chemistry** | Aegis Short Blade LFP (High Thermal Safety) | Aegis Short Blade LFP (High Thermal Safety) |
| **Battery Capacity** | 39.4 kWh (Gross 40.16 kWh) | 39.4 kWh (Gross 40.16 kWh) |
| **Range (NEDC)** | 395 km | 395 km |
| **Range (WLTP)** | 325 km | 325 km |
| **Real-World Bangkok Range** | ~330 – 350 km | ~330 – 350 km |
| **AC Charging** | 6.6 kW Type 2 (1-phase) | 6.6 kW Type 2 (1-phase) |
| **DC Fast Charging Peak** | 70 kW (30-80% in ~25 min) | 70 kW (30-80% in ~25 min) |
| **Wheels & Tires** | 15-inch Alloy Wheels | 16-inch Alloy Wheels |
| **Driver Assist / Cameras** | Rear Camera + Cruise Control | 360° Panoramic Camera + Full ADAS |
| **Infotainment System** | Meizu Flyme Auto OS (10.1" / 14.6" screen) | Meizu Flyme Auto OS (14.6" screen) |
| **Official Thai Price (THB)** | 429,990 ฿ (Launch intro: 399,990 ฿) | 459,990 ฿ (Launch intro: 429,990 ฿) |

---

## 4. Vehicle Images Audit Findings & Replacement Map

| Article Slug | Featured Car Model | Image Referenced | Visual Assessment / Inspection | Required Correction / Verification |
|---|---|---|---|---|
| `tesla-model-3-highland-review` | Tesla Model 3 Highland | `/images/reviews/tesla-model-3-hero.jpg`<br>`/images/reviews/tesla-model-3-exterior.jpg`<br>`/images/reviews/tesla-model-3-interior.jpg`<br>`/images/reviews/tesla-model-3-details.jpg` | Accurate Tesla Model 3 Highland assets. | Confirmed valid. |
| `byd-seal-review` | BYD Seal | `/images/reviews/byd-seal-hero.jpg`<br>`/images/reviews/byd-seal-exterior.jpg`<br>`/images/reviews/byd-seal-interior.jpg`<br>`/images/reviews/byd-seal-details.jpg` | Accurate BYD Seal assets. | Confirmed valid. |
| `zeekr-x-review` | Zeekr X | `/images/reviews/zeekr-x-hero.jpg`<br>`/images/reviews/zeekr-x-exterior.jpg`<br>`/images/reviews/zeekr-x-interior.jpg`<br>`/images/reviews/zeekr-x-details.jpg` | Accurate Zeekr X assets. | Confirmed valid. |
| `mg4-electric-review` | MG4 Electric | `/images/reviews/mg4-electric-hero.jpg`<br>`/images/reviews/mg4-electric-exterior.jpg`<br>`/images/reviews/mg4-electric-interior.jpg`<br>`/images/reviews/mg4-electric-details.jpg` | Accurate MG4 Electric assets. | Confirmed valid. |
| `deepal-s07-review` | Changan Deepal S07 | `/images/reviews/deepal-s07-hero.jpg`<br>`/images/reviews/deepal-s07-exterior.jpg`<br>`/images/reviews/deepal-s07-interior.jpg`<br>`/images/reviews/deepal-s07-details.jpg` | Accurate Deepal S07 assets. | Confirmed valid. |
| `byd-atto-3-review` | BYD Atto 3 | `/images/reviews/byd-atto-3-hero.jpg`<br>`/images/reviews/byd-atto-3-exterior.jpg`<br>`/images/reviews/byd-atto-3-interior.jpg`<br>`/images/reviews/byd-atto-3-details.jpg` | Accurate BYD Atto 3 assets. | Confirmed valid. |
| `deepal-s05-review` | Changan Deepal S05 | `/images/reviews/deepal-s05-hero.jpg`<br>`/images/reviews/deepal-s05-exterior.jpg`<br>`/images/reviews/deepal-s05-interior.jpg`<br>`/images/reviews/deepal-s05-details.jpg` | Accurate Deepal S05 assets. | Confirmed valid. |
| `geely-ex2-review` | Geely EX2 | `/images/reviews/geely-ex2-hero.jpg`<br>`/images/reviews/geely-ex2-exterior.jpg`<br>`/images/reviews/geely-ex2-interior.jpg`<br>`/images/reviews/geely-ex2-details.jpg` | Accurate Geely EX2 assets. | Confirmed valid. |
| `ev-battery-care` | General EV Guide | `/images/hero-bg.jpg` | General EV charging guide hero background. | Confirmed valid. |

---

## 5. Summary of Discrepancies & Implementer Action Items

1. **Geely EX2**: In `geely-ex2-review/page.tsx`, the specs table currently lists Chinese domestic 79 hp (58 kW) for Standard and 114 hp (85 kW) for Long Range. In Thailand, Geely Thonburi officially imports the 116 hp (85 kW) with 39.4 kWh battery for both **Pro** (429,990 ฿) and **Max** (459,990 ฿) trims. The article text and table should be aligned with the Thai Pro & Max trims.
2. **Deepal S05**: The article mentions estimated prices 799,000 – 899,000 ฿ and specs (238 hp, 320 Nm, 56.12 kWh LFP, 159L Frunk, 3C DC charging in 15 min). These match the Thai BEV launch configuration (Lite / Plus / Max).
3. **MG4 Electric**: The article correctly outlines Standard (49 kWh LFP, 170 hp), Long Range (64 kWh NMC / 62.2 kWh LFP, 180-245 hp), and XPOWER AWD (64 kWh NMC, 435 hp, 3.8s). Pricing reflects CKD Thai production (569,900 – 1,119,900 ฿).
4. **Tesla Model 3 Highland**: All three trims (Standard RWD 283 hp / 60 kWh LFP, Long Range AWD 498 hp / 78.1 kWh NMC, Performance AWD 460-627 hp / 78.1 kWh NMC) and Thai pricing are accurately represented.
5. **BYD Seal & Atto 3**: All trims (Seal Dynamic 61.44 kWh, Premium 82.56 kWh, AWD Performance 82.56 kWh 530 hp; Atto 3 Dynamic/Premium 50.25 kWh, Extended 60.48 kWh) and Thai pricing are fully verified.
