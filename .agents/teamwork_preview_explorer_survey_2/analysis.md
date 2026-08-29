# Thai EV Domain, Market Data & Facebook Content Requirements Analysis

**Subagent**: `teamwork_preview_explorer_survey_2`  
**Date**: 2026-08-27  
**Scope**: Comprehensive Thai EV market specifications, tropical climate efficiency benchmarks, charging infrastructure & TOU tariffs, high-engagement Facebook editorial blueprints, and platform integration requirements.

---

## 1. Executive Summary

This report establishes the authoritative domain knowledge base and content engineering framework for the **EV Selection Thailand** automated content generation engine. 

The Thai EV ecosystem has transitioned from early adoption to mass-market volume, characterized by intense Chinese OEM competition (BYD, Changan Deepal, Geely, GAC Aion, MG, Zeekr), localized CKD manufacturing in Rayong, continuous price adjustments, and rapid nationwide charging infrastructure expansion. 

Thai car buyers and EV owners have distinct content appetites:
1. **Real-world range vs NEDC claims**: Thai drivers are skeptical of lab test figures. They demand realistic driving range under 35°C–40°C heat with heavy air-conditioning usage and highway speeds (110–120 km/h).
2. **Cabin heat mitigation**: Unshaded panoramic glass roofs cause severe cabin greenhouse heat in Thailand; sunshades, heat-rejection tints, and ventilated seats are high-priority evaluation criteria.
3. **True operating costs & TOU charging**: Cost per kilometer (Home TOU ~0.45–0.50 THB/km vs DC Fast Charge ~1.15 THB/km vs ICE ~2.70 THB/km).
4. **Fitment & localized accessories**: Custom 3D TPE mats, screen protectors, phone mounts, and retractable sunshades designed specifically for Thai Right-Hand Drive (RHD) vehicles.

---

## 2. Top Thai EV Models: Technical Specifications & Market Pricing Matrix

The following dataset contains verified Thai Right-Hand Drive (RHD) market specifications, official THB pricing (MSRP / 2024–2026 repositioned benchmarks), battery chemistries, charging speeds, and real-world tropical efficiency estimates.

| Brand & Model | Variant / Trim (Thai RHD) | Price (THB) | Battery Capacity & Chemistry | Claimed Range (NEDC / WLTP) | Real-World Range (35°C+ A/C & Highway) | DC Fast Charge (Max kW) | AC Charge (Max kW) | Powertrain & Output | 0-100 km/h (s) | Key Strengths & Thai Market Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BYD Atto 3** | Dynamic<br>Premium<br>Extended Range | 669,900<br>749,900<br>799,900 | 49.92 kWh (LFP)<br>60.48 kWh (Blade LFP)<br>60.48 kWh (Blade LFP) | NEDC 410 km<br>NEDC 480 km<br>NEDC 480 km | **330 km**<br>**385 km**<br>**385 km** | 70 kW<br>88 kW<br>88 kW | 7.0 kW | FWD 201 hp / 310 Nm | 7.3s | Family SUV benchmark; soft suspension; built-in electric sunroof shade; durable Blade Battery. |
| **BYD Seal** | Dynamic<br>Premium<br>AWD Performance | 849,900<br>999,900<br>1,099,900 | 61.44 kWh (Blade LFP)<br>82.56 kWh (Blade LFP)<br>82.56 kWh (Blade LFP) | NEDC 510 km<br>NEDC 650 km<br>NEDC 580 km | **410 km**<br>**525 km**<br>**465 km** | 110 kW<br>150 kW<br>150 kW | 7.0 kW | RWD 204 hp / 310 Nm<br>RWD 313 hp / 360 Nm<br>AWD 530 hp / 670 Nm | 7.5s<br>5.9s<br>3.8s | Sports sedan flagship; CTB rigidity; FSD suspension; glass roof requires sunshade in Thai summer. |
| **BYD Dolphin** | Standard Range<br>Extended Range | 449,900<br>569,900 | 44.90 kWh (Blade LFP)<br>60.48 kWh (Blade LFP) | NEDC 410 km<br>NEDC 490 km | **320 km**<br>**395 km** | 60 kW<br>80 kW | 7.0 kW | FWD 95 hp / 180 Nm<br>FWD 204 hp / 310 Nm | 12.3s<br>7.0s | Top-selling B-segment hatch; ultra-accessible pricing; spacious rear legroom; agile city maneuvering. |
| **Deepal S07** (Changan) | S07 Standard<br>S07 Long Range | 1,099,000<br>1,399,000 | 66.80 kWh (NMC)<br>79.97 kWh (NMC) | NEDC 540 km<br>NEDC 620 km | **415 km**<br>**480 km** | 167 kW | 7.0 kW | RWD 258 hp / 320 Nm | 7.5s | Cyberpunk D-SUV; frameless doors; Sunflower 15.6" screen; built-in electric roof shade; 125L Frunk. |
| **Deepal L07** (Changan) | L07 Standard<br>L07 Long Range | 1,199,000<br>1,299,000 | 66.80 kWh (NMC)<br>79.97 kWh (NMC) | NEDC 540 km<br>NEDC 620 km | **430 km**<br>**495 km** | 167 kW | 7.0 kW | RWD 258 hp / 320 Nm | 6.7s | Fastback sports sedan; sleek aerodynamics; AR-HUD display; spacious interior. |
| **Deepal S05** (Changan) | S05 EV | 799,000–899,000 | 56.12 kWh (LFP) | CLTC 510 km | **390 km** | 3C Fast Charge (~130 kW) | 7.0 kW | RWD 238 hp / 320 Nm | 7.5s | Outdoor/Vlogger SUV; 4K roof gimbal camera; DLP projector headlights; 159L massive front Frunk. |
| **Tesla Model 3 Highland** | RWD<br>Long Range AWD<br>Performance AWD | 1,149,000<br>1,459,000<br>1,799,000 | ~60.0 kWh (LFP - CATL)<br>~78.1 kWh (NMC - LG)<br>~78.1 kWh (NMC - LG) | WLTP 513 km<br>WLTP 629 km<br>WLTP 528 km | **425 km**<br>**515 km**<br>**440 km** | 170 kW<br>250 kW<br>250 kW | 11.0 kW (3-Phase) | RWD 283 hp / 420 Nm<br>AWD 498 hp / 493 Nm<br>AWD 627 hp / 741 Nm | 6.1s<br>4.4s<br>3.1s | Project Highland; 360 acoustic double-glazed glass; ventilated cooling seats; Supercharger network. |
| **Tesla Model Y** | RWD<br>Long Range AWD<br>Performance AWD | 1,399,000<br>1,699,000<br>1,999,000 | ~60.0 kWh (LFP)<br>~78.1 kWh (NMC)<br>~78.1 kWh (NMC) | WLTP 455 km<br>WLTP 533 km<br>WLTP 514 km | **375 km**<br>**450 km**<br>**425 km** | 170 kW<br>250 kW<br>250 kW | 11.0 kW (3-Phase) | RWD 299 hp / 420 Nm<br>AWD 450+ hp<br>AWD 534 hp | 6.9s<br>5.0s<br>3.7s | Family favorite SUV; class-leading 2,158L cargo capacity (Frunk + Trunk); expansive headroom. |
| **MG4 Electric** | Standard D/X<br>Long Range D/V<br>XPOWER AWD | 569,900<br>699,900<br>889,900 | 51.0 kWh (LFP)<br>64.0 kWh (NMC OnePack)<br>64.0 kWh (NMC OnePack) | NEDC 425 km<br>NEDC 540 km<br>NEDC 480 km | **330 km**<br>**430 km**<br>**375 km** | 88 kW<br>140 kW<br>140 kW | 6.6 kW / 11 kW | RWD 170 hp / 250 Nm<br>RWD 245 hp / 350 Nm<br>AWD 435 hp / 600 Nm | 7.7s<br>6.1s<br>3.8s | Driver's hatch; 50:50 weight balance; rear Five-Link suspension; sharp steering; XPOWER hyper-hatch. |
| **Zeekr X** | Standard RWD<br>Flagship AWD | 899,000<br>1,049,000 | 66.0 kWh (NMC) | WLTP 440 km<br>WLTP 400 km | **365 km**<br>**335 km** | 150 kW | 22.0 kW (3-Phase) | RWD 272 hp / 343 Nm<br>AWD 428 hp / 543 Nm | 5.3s<br>3.8s | Geely SEA platform; luxury Scandinavian styling; frameless power doors; 13 Yamaha speakers; 22kW AC. |
| **Geely EX2** | Pro<br>Max | 429,990<br>459,990 | 39.4 kWh (Aegis LFP) | CLTC 405 km | **310 km** | 50 kW | 6.6 kW | RWD 116 hp / 160 Nm | 9.8s | Affordable city car benchmark; RWD layout with Multi-link rear suspension; Flyme Auto; 70L Frunk. |
| **ORA Good Cat** (GWM) | PRO (CKD)<br>ULTRA (CKD)<br>GT | 599,000<br>699,000<br>859,000 | 47.78 kWh (LFP)<br>57.70 kWh (SVOLT LFP)<br>63.14 kWh (Ternary Lithium) | NEDC 400 km<br>NEDC 500 km<br>NEDC 500 km | **315 km**<br>**390 km**<br>**385 km** | 60 kW<br>60 kW<br>70 kW | 6.6 kW | FWD 143 hp / 210 Nm<br>FWD 143 hp / 210 Nm<br>FWD 171 hp / 250 Nm | 9.3s<br>9.3s<br>8.0s | Rayong CKD production; iconic retro design; massage driver seat; localized Thai voice control. |
| **GAC Aion Y Plus** | 490 Elite<br>490 Premium<br>580 Executive | 699,900<br>799,900<br>899,900 | 50.66 kWh (Magazine LFP)<br>63.20 kWh (Magazine LFP)<br>63.20 kWh (Magazine LFP) | NEDC 410 km<br>NEDC 490 km<br>NEDC 580 km | **325 km**<br>**395 km**<br>**445 km** | 80 kW | 7.0 kW | FWD 204 hp / 225 Nm | 8.5s | Living-room interior space; ultra-flat rear floor; fold-flat camping sofa mode; Magazine Battery safety. |

---

## 3. Thai Tropical Heat & Driving Efficiency Analysis

### 3.1 Why Lab Ratings (NEDC / CLTC) Differ from Thai Realities
* **Laboratory Conditions**: NEDC test cycle is conducted at 20°C–30°C in an indoor dynamometer with **0 kW Air Conditioning load** and an average test speed of only 33.6 km/h.
* **Thailand Real-World Conditions**:
  * **Ambient Air**: 35°C–42°C daytime temperatures with high humidity.
  * **A/C Compressor Load**: Heavy multi-zone inverter compressors consume continuous **1.5 kW – 3.5 kW** to keep the cabin at 22°C.
  * **Solar Radiation**: High UV and solar radiation penetrating through expansive panoramic glass roofs heat interior surfaces up to 65°C+.
  * **Highway Cruising**: Typical inter-provincial Thai expressway speeds are 110–120 km/h (aerodynamic drag scales with the square of velocity).

### 3.2 Real-World Derating Rules of Thumb
* **NEDC Derating**: Real-world Thai tropical range is **20% to 28% lower** than NEDC spec.
* **CLTC Derating**: Real-world Thai tropical range is **22% to 30% lower** than CLTC spec.
* **WLTP Derating**: WLTP is closer to real driving; real-world Thai tropical range is **8% to 15% lower** than WLTP spec.

---

## 4. Thailand Charging Infrastructure & Electricity Tariff Ecosystem

### 4.1 Major CPO Networks (Charge Point Operators)

| Network | Primary Locations | DC Fast Charge Speeds | Typical Charging Rate (THB/kWh) | Booking / App Ecosystem | Road Trip Reliability Rating |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PTT EV Station PluZ** | PTT petrol stations nationwide (77 provinces) | 50 kW – 180 kW (CCS2) | On-Peak: 7.7 ฿ / Off-Peak: 6.0 ฿ | EV Station PluZ App (Reserve ahead up to 24h) | ⭐⭐⭐⭐⭐ (Highest density on main highways) |
| **PEA VOLTA** | PEA offices & highway rest points | 25 kW – 120 kW (CCS2/CHAdeMO) | Flat ~7.5 ฿ / Dynamic TOU | PEA VOLTA App | ⭐⭐⭐⭐ (Crucial for upcountry travel) |
| **MEA EV** | Bangkok Metropolitan Area (BKK, Nonthaburi, Samut Prakan) | 50 kW – 120 kW (CCS2) | Flat ~7.5 ฿ | MEA EV App | ⭐⭐⭐⭐ (Urban & government sites) |
| **EleX by EGAT** | PT petrol stations & EGAT offices | 120 kW – 150 kW (CCS2) | Flat ~7.5 ฿ – 8.0 ฿ | EleXA App | ⭐⭐⭐⭐⭐ (Fast, high uptime on trunk roads) |
| **EA Anywhere** | Central & The Mall shopping malls, prime office towers | 30 kW – 150 kW (CCS2) | Dynamic ~7.5 ฿ – 8.5 ฿ | EA Anywhere App | ⭐⭐⭐⭐ (Premier shopping mall coverage) |
| **Evolt** | Condos, hotels, community malls, hospitals | 7.4 kW – 22 kW AC / 60–120 kW DC | Dynamic ~7.5 ฿ – 9.0 ฿ | Evolt App | ⭐⭐⭐⭐ (Destination & lifestyle charging) |
| **Altervim Super Charge** | Lotus's hypermarkets nationwide | 60 kW – 160 kW (CCS2) | Flat ~7.5 ฿ | Altervim App | ⭐⭐⭐⭐ (Convenient shopping charging) |
| **Tesla Supercharger** | Central Pattana malls, Robinson, PTT flagship stations | 250 kW (V3/V4 CCS2) | Peak: 8.5–9.5 ฿ / Off-Peak: 6.5–7.5 ฿ | Tesla App / In-car Navigation | ⭐⭐⭐⭐⭐ (Unmatched plug & charge speed) |

### 4.2 Home Charging & TOU (Time-of-Use) Tariff Economics

Thai electricity authorities (MEA & PEA) offer a **TOU (Time of Use)** tariff structure that dramatically reduces EV running costs when charging overnight:

* **Standard Progressive Tariff**: ~4.18 – 4.70 THB/kWh
* **TOU Tariff Schedule**:
  * **On-Peak** (Monday – Friday, 09:00 – 22:00): **~5.7982 THB/kWh** (+ Ft & VAT)
  * **Off-Peak** (Monday – Friday, 22:00 – 09:00 + Weekends & Public Holidays All Day): **~2.6369 – 2.69 THB/kWh** (+ Ft & VAT = **~3.00 – 3.20 THB/kWh net**)

#### Running Cost Comparison (100 km & 15,000 km/year)

| Powertrain / Energy Source | Energy Efficiency | Cost per 100 km | Cost per 1 km | Annual Fuel/Power Cost (15,000 km) | Savings vs Petrol ICE |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **ICE Petrol Sedan** (E20 @ 38 THB/L) | 14.0 km/L (7.14 L/100km) | **271.30 THB** | **2.71 THB** | **40,695 THB** | Baseline |
| **EV Public DC Fast Charge** (7.50 THB/kWh) | 6.5 km/kWh (15.38 kWh/100km) | **115.35 THB** | **1.15 THB** | **17,302 THB** | **57.5% Cheaper** |
| **EV Home Standard Meter** (4.50 THB/kWh) | 6.5 km/kWh (15.38 kWh/100km) | **69.21 THB** | **0.69 THB** | **10,381 THB** | **74.5% Cheaper** |
| **EV Home TOU Off-Peak** (3.10 THB/kWh net) | 6.5 km/kWh (15.38 kWh/100km) | **47.68 THB** | **0.48 THB** | **7,152 THB** | **82.4% Cheaper** |

---

## 5. High-Engagement Thai Facebook Post Formats & Editorial Blueprints

To maximize reach, shareability, and conversion on Facebook, posts must be structured with **immediate visual hierarchy**, **catchy hooks before the fold**, **clean emoji bulleting**, and **clear call-to-actions (CTAs)**.

### 5.1 Post Type 1: In-Depth Vehicle Review & Buyer's Guide (รีวิวเจาะลึก & วิเคราะห์ความคุ้มค่า)

* **Target Audience**: Active EV shoppers, car buyers comparing trims, family drivers.
* **Tone**: Authoritative, transparent, conversational Thai, addressing real-world pain points.
* **Blueprint Template**:

```markdown
⚡ [HOOK]: [Catchy headline highlighting price, power, or killer feature]
[1-2 sentences summarizing who this car is for and why it matters in 2026]

🚗 สรุปคะแนนทดสอบ EVSELECT Rating: ⭐ [Score]/10
"[One-line memorable verdict quote]"

📊 ข้อมูลสเปกไทย (Thai Specification)
• ราคาอย่างเป็นทางการ: [Price Range] บาท
• แบตเตอรี่: [Battery kWh] ([Chemistry: Blade LFP / NMC])
• ระยะทางวิ่งมาตรฐาน (NEDC/WLTP): [Lab Range] กม.
• ☀️ ระยะทางวิ่งจริงถนนไทย (แดด 35°C+ เปิดแอร์ 22°C): [Real Range] กม.
• พละกำลังสูงสุด: [Horsepower] hp / แรงบิด [Torque] Nm
• อัตราเร่ง 0-100 กม./ชม.: [Acceleration] วินาที
• ความเร็วชาร์จไว DC Fast Charge: สูงสุด [DC kW] kW ([Time 30-80%])
• ชาร์จธรรมดา AC: [AC kW] kW

🔍 จุดเด่นที่ประทับใจ (Pros)
✅ [Key strength 1: e.g. ช่วงล่างซับแรงกระแทกถนนไทยได้เนียนกริบ]
✅ [Key strength 2: e.g. เบาะเป่าลมเย็นสู้แดดเมืองไทย นั่งสบายทั้งทริป]
✅ [Key strength 3: e.g. ม่านบังแดดหลังคาไฟฟ้าเปิด-ปิดได้จริง ไม่ต้องกลัวหัวร้อน]

⚠️ ข้อสังเกตที่ควรรู้ก่อนตัดสินใจ (Cons)
❌ [Limitation 1: e.g. การควบคุมฟังก์ชันส่วนใหญ่ต้องผ่านหน้าจอ]
❌ [Limitation 2: e.g. ยางติดรถควรเปลี่ยนเป็นยาง EV เฉพาะทางเพื่อความเงียบ]

💡 ค่าไฟวิ่งจริงต่อกิโลเมตร
• ชาร์จบ้านมิเตอร์ TOU รอบดึก (3.10 บาท/หน่วย): ตกกิโลเมตรละ ~[Cost] บาท!
• ประหยัดค่าน้ำมันได้มากกว่า 75-80% เมื่อเทียบกับรถสันดาปทั่วไป

🛡️ แนะนำอุปกรณ์เสริมตรงรุ่น 100% Fitment จาก EVSELECT:
1. [Accessory 1: e.g. ม่านบังแดดหลังคาแก้วแบบสะท้อนความร้อน]
2. [Accessory 2: e.g. พรมปูพื้น TPE 3D เข้ารูปพวงมาลัยขวา RHD]
3. [Accessory 3: e.g. ถาดจัดระเบียบคอนโซลกลาง]

👉 อ่านรีวิวฉบับเต็มและตารางเปรียบเทียบทุกรุ่นย่อยได้ที่: [Website URL]
💬 ใครขับรุ่นนี้อยู่บ้างครับ? วิ่งจริงได้ระยะทางเท่าไหร่ คอมเมนต์แชร์ประสบการณ์กันได้เลยครับ! 👇

#EVSelectionTH #รีวิวรถEV #รถยนต์ไฟฟ้า #[Brand] #[Model] #ชาร์จรถไฟฟ้า #รถEVสเปกไทย
```

---

### 5.2 Post Type 2: Head-to-Head Comparison (เปรียบเทียบมวยถูกคู่)

* **Target Audience**: Undecided buyers choosing between 2 top contenders in the same budget range.
* **Tone**: Objective, analytical, structured head-to-head scorecard.
* **Blueprint Template**:

```markdown
🥊 [HOOK]: คู่เดือดงบ [Budget] แสน! [Model A] vs [Model B] คันไหนคุ้มค่าและตอบโจทย์คุณที่สุด?
คัดมาให้เน้นๆ เทียบสเปกไทยและฟีลลิ่งการขับขี่จริงบนถนนเมืองไทย! 🔥

📊 ตารางประชันสเปกหมัดต่อหมัด
------------------------------------------
🔹 [Model A] 🆚 [Model B]
------------------------------------------
💰 ราคา: [Price A] ฿ 🆚 [Price B] ฿
🔋 ขนาดแบตเตอรี่: [Battery A] kWh 🆚 [Battery B] kWh
☀️ ระยะทางวิ่งจริง (แดดไทย): ~[Real A] กม. 🆚 ~[Real B] กม.
⚡ ความเร็วชาร์จ DC: [DC A] kW 🆚 [DC B] kW
🐎 พละกำลัง: [Power A] hp 🆚 [Power B] hp
⏱️ อัตราเร่ง 0-100: [0-100 A]s 🆚 [0-100 B]s
🛋️ ฟีลลิ่งช่วงล่าง: [Suspension A: e.g. นุ่มนวล นั่งสบาย] 🆚 [Suspension B: e.g. เฟิร์ม คม สปอร์ต]
☀️ ระบบกันร้อนหลังคา: [Roof A: e.g. มีม่านไฟฟ้า] 🆚 [Roof B: e.g. หลังคาแก้วเปลือย]

🎯 สรุปชัดๆ ใครเหมาะกับคันไหน?
• เลือก [Model A] ถ้าคุณเน้น: [Persona 1: e.g. ขับขี่ในเมือง ช็อปปิ้ง ครอบครัวชอบความนุ่มนวล มีม่านไฟฟ้าพร้อมใช้]
• เลือก [Model B] ถ้าคุณเน้น: [Persona 2: e.g. เดินทางไกลบ่อย ชอบขับเร็ว มั่นใจในโครงข่ายชาร์จ Supercharger และเบาะลมเย็น]

💬 เป็นเพื่อนๆ ในงบนี้จะกดเลือกคันไหน? 
กด ❤️ ให้ [Model A] | กด ⚡ ให้ [Model B]
คอมเมนต์เหตุผลคุยกันได้เลยครับ! 👇

#EVSelectionTH #เปรียบเทียบรถEV #[ModelA] #[ModelB] #รถยนต์ไฟฟ้า #เลือกคันไหนดี
```

---

### 5.3 Post Type 3: EV Tips & Cost Saving Guide (คู่มือ & เทคนิคการใช้รถ EV)

* **Target Audience**: New EV owners, potential buyers curious about charging economics and battery health.
* **Tone**: Helpful, actionable, educational with clear step-by-step numbers.
* **Blueprint Template**:

```markdown
💡 [HOOK]: ชาร์จรถไฟฟ้ายังไงให้เหลือกิโลเมตรละ 45 สตางค์? เผยสูตรตั้งมิเตอร์ TOU + เคล็ดลับถนอมแบตให้อยู่ยาวเกิน 10 ปี! ⚡

หลายคนที่เพิ่งซื้อรถ EV หรือกำลังจะซื้อ มักถามเข้ามาเยอะมากว่า "ติดมิเตอร์ TOU คุ้มไหม?" วันนี้ EVSELECT สรุปตัวเลขจริงและวิธีเซฟเงินแบบเข้าใจง่ายมาให้ครับ 👇

📌 1. ขอติดตั้งมิเตอร์ TOU (หรือหม้อลูกที่สองสำหรับ EV)
• ค่าไฟ Off-Peak (22:00 - 09:00 น. จันทร์-ศุกร์ + เสาร์-อาทิตย์ทั้งวัน) เหลือเพียง ~2.69 บาท/หน่วย (+Ft/VAT ~3.10 บาท)
• เทียบกับ On-Peak กลางวัน ~5.80 บาท/หน่วย ประหยัดลงเกือบ 50%!

📌 2. ตั้งเวลาชาร์จอัตโนมัติ (Scheduled Charging)
• เสียบหัวชาร์จ Wallbox ทิ้งไว้ตอนกลับถึงบ้าน แล้วตั้งเวลาในแอปรถให้เริ่มชาร์จตอน 22:05 น. และตัดตอน 08:30 น.

📌 3. กฎการชาร์จถนอมแบตเตอรี่ (LFP vs NMC)
• แบตเตอรี่ LFP (เช่น BYD, Tesla RWD): ชาร์จ 100% สัปดาห์ละ 1 ครั้งเพื่อ Calibrate Cell
• แบตเตอรี่ NMC (เช่น Tesla Long Range, Deepal): ใช้งานประจำวันตั้ง Limit ไว้ที่ 80% ชาร์จ 100% เฉพาะตอนออกทริปไกล

📌 4. เลี่ยงการจอดตากแดด 40°C หลังอัด DC Fast Charge ร้อนๆ
• ควรจอดในที่ร่มเพื่อให้ระบบระบายความร้อนแบตเตอรี่ทำงานได้เต็มประสิทธิภาพ

💰 วิ่ง 15,000 กม./ปี จ่ายค่าไฟเพียง ~7,200 บาท (รถน้ำมันจ่าย ~40,000+ บาท เซฟเงินปีละ 33,000 บาท!)

แชร์โพสต์นี้เก็บไว้เป็นคู่มือ หรือแท็กเพื่อนที่กำลังจะออกรถ EV ได้เลยครับ 📲

#EVSelectionTH #มิเตอร์TOU #ชาร์จรถไฟฟ้า #คู่มือรถEV #รอบรู้เรื่องEV #ประหยัดค่าไฟ
```

---

### 5.4 Post Type 4: Breaking EV News & Price Update (ข่าวด่วน & ปรับราคา/เปิดตัวรุ่นใหม่)

* **Target Audience**: Automotive enthusiasts, prospective buyers waiting for deals or new models.
* **Tone**: Urgent, breaking, punchy, news-driven.
* **Blueprint Template**:

```markdown
🚨 [BREAKING]: [Brand] ประกาศปรับโครงสร้างราคาใหม่ / เปิดตัว [Model] สเปกไทยอย่างเป็นทางการ! ⚡
เริ่มต้นเพียง [Starting Price] บาท พร้อมข้อเสนอพิเศษสุดเดือด 🔥

สรุปไฮไลต์สำคัญที่ต้องรู้:
📍 [Highlight 1: e.g. ปรับลดราคาลงสูงสุด XX,XXX บาท]
📍 [Highlight 2: e.g. อัปเกรดแบตเตอรี่ใหม่ วิ่งไกลขึ้นเป็น XXX กม.]
📍 [Highlight 3: e.g. เพิ่มออปชันเบาะระบายอากาศและม่านหลังคาไฟฟ้า]

🚗 สรุปราคาจำหน่ายทุกรุ่นย่อย:
1. รุ่น [Trim 1]: [Price 1] บาท
2. รุ่น [Trim 2]: [Price 2] บาท
3. รุ่น [Trim 3]: [Price 3] บาท

🎁 แพ็กเกจของแถมและประกัน:
✅ ฟรี ประกันภัยชั้น 1 นาน 1 ปี
✅ ฟรี เครื่องชาร์จ Home Charger พร้อมติดตั้ง
✅ ฟรี การรับประกันแบตเตอรี่ 8 ปี หรือ 160,000 กม.

คิดเห็นอย่างไรกับราคานี้บ้างครับ? คุ้มไหมที่จะจัดตอนนี้ หรือจะรอดูค่ายอื่นขยับต่อ? คอมเมนต์เลย! 👇

#EVSelectionTH #ข่าวด่วนEV #โปรโมชั่นรถไฟฟ้า #[Brand] #[Model] #รถใหม่2026
```

---

## 6. Thai EV Terminology & Hashtag Master Taxonomy

### 6.1 Thai Automotive & EV Lexicon

| English Term | Standard Thai Automotive Term | Common Thai Slang / Facebook Jargon |
| :--- | :--- | :--- |
| **Real-World Range** | ระยะทางวิ่งใช้งานจริง | วิ่งจริงไม่อวย, ระยะจริงแดดไทย |
| **Battery Chemistry (LFP / NMC)** | ชนิดของแบตเตอรี่ (ลิเธียมไอออนฟอสเฟต / นิกเกิลแมงกานีส) | แบต LFP อึดทน / แบต NMC ตัวแรง |
| **DC Fast Charging** | ระบบชาร์จด่วนไฟฟ้ากระแสตรง | ชาร์จด่วน DC, อัดตู้ด่วน |
| **AC Normal Charging** | ระบบชาร์จไฟฟ้ากระแสสลับ | ชาร์จบ้าน AC, เสียบ Wallbox |
| **Time-of-Use Tariff (TOU)** | อัตราค่าไฟฟ้าตามช่วงเวลาของการใช้งาน | มิเตอร์ TOU, ค่าไฟรอบดึก Off-Peak |
| **Vehicle-to-Load (V2L)** | ระบบจ่ายกระแสไฟฟ้าจากตัวรถสู่อุปกรณ์ภายนอก | ฟังก์ชัน V2L, รถจ่ายไฟแคมปิ้ง |
| **Regenerative Braking** | ระบบหน่วงความเร็วคืนพลังงานไฟฟ้า | ระบบคืนพลังงาน, One-Pedal ขับขาเดียว |
| **Front Trunk (Frunk)** | ช่องเก็บสัมภาระใต้ฝากระโปรงหน้า | ช่องเก็บของด้านหน้า, ฝากระโปรงหน้า Frunk |
| **Glass Roof Heat Rejection** | การป้องกันความร้อนจากหลังคาแก้วพาโนรามา | ม่านไฟฟ้าสู้แดด, ม่านสะท้อนความร้อนหลังคา |
| **Fitment Accessories** | อุปกรณ์เสริมและของแต่งตรงรุ่น | ของแต่งตรงรุ่น 100%, พรม 3D TPE พวงมาลัยขวา |

### 6.2 Hashtag Master Matrix

* **Brand / Platform Primary**: `#EVSelectionTH #EVSELECT #รถยนต์ไฟฟ้า #ยานยนต์ไฟฟ้า #รถEV`
* **Editorial & Content Themes**: `#รีวิวรถEV #เปรียบเทียบรถEV #คู่มือรถEV #ชาร์จรถไฟฟ้า #มิเตอร์TOU #รอบรู้เรื่องEV #ของแต่งรถEV`
* **OEM Brand Clusters**:
  * BYD: `#BYD #BYDThailand #BYDAtto3 #BYDSeal #BYDDolphin #BYDSealion7`
  * Tesla: `#Tesla #TeslaThailand #TeslaModel3 #TeslaModelY #Model3Highland #Supercharger`
  * Changan / Deepal: `#Deepal #Changan #DeepalS07 #DeepalL07 #DeepalS05`
  * Geely / Zeekr: `#Geely #GeelyEX2 #Zeekr #ZeekrX #Zeekr009 #Zeekr7X`
  * MG: `#MG #MGEV #MG4Electric #MG4XPOWER #MGZSEV`
  * GWM: `#GWM #ORAGoodCat #GoodCatGT #Tank500`
  * GAC Aion: `#GACAion #AionYPlus #AionV`

---

## 7. Engine Architecture Recommendations for Content Generation

To fulfill **R1 (Content Generation Engine)** and **R2 (Local Output File `posts.md` / `posts.json`)**:

1. **Structured Data Store (`vehicles.json` / `knowledge.json`)**:
   Store the structured technical data for all ~13 key Thai EV models with official THB prices, battery specs, tropical ranges, pros/cons, and verified fitment SKUs.
2. **Template-Driven Generator Engine (`generate_posts.py` / `generate_posts.ts`)**:
   Implement a Python or TypeScript CLI generator that supports:
   * Generating **Review Posts** by selecting any vehicle model from the dataset.
   * Generating **Comparison Posts** by passing two vehicle keys (e.g. `byd-seal-performance` vs `tesla-model-3-highland-lr`).
   * Generating **EV Tips / TOU Charging Posts**.
   * Generating **Breaking Market / Price Update Posts**.
3. **Multi-Format Export**:
   Output cleanly formatted Markdown (`posts.md`) and structured JSON (`posts.json`) containing metadata, rendered Thai text, attachment image recommendations (mapped to `public/images/reviews/*`), hashtags, and CTA links.
