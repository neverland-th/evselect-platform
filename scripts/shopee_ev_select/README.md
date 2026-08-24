# EV select — Shopee Seller Center Automation Platform
ระบบอัตโนมัติสำหรับเข้าสู่ระบบและตั้งค่าร้านค้า "EV select" บน Shopee Seller Center (ภาษาไทย)

## 📌 ภาพรวมโครงการ (Overview)
โปรเจกต์นี้ถูกพัฒนาขึ้นโดยใช้ **Node.js** ร่วมกับ **Playwright** เพื่ออำนวยความสะดวกในการเข้าสู่ระบบ Shopee Seller Center (ประเทศไทย) และตั้งค่าร้านค้า **EV select** แบบอัตโนมัติ ครอบคลุมตั้งแต่การกรอกรหัสผ่าน, การหยุดรอรับ OTP/Captcha ด้วยตนเอง, การอัปเดตโปรไฟล์ร้านค้าภาษาไทย, การร่างรายการสินค้า EV คุณภาพสูง 5 รายการ, และการตั้งค่าระบบขนส่ง/การเงินอย่างเป็นระบบ

---

## 🚀 ฟีเจอร์หลัก (Key Features)

### 1. Automation Script & OTP/Captcha Pause Mechanism (R1)
- เปิดเบราว์เซอร์ Chromium อัตโนมัติ (รองรับทั้ง Headful และ Headless mode)
- นำทางไปยังหน้าเข้าสู่ระบบ Shopee Seller Center (`https://seller.shopee.co.th/account/signin`)
- กรอกชื่อผู้ใช้และรหัสผ่านอัตโนมัติ
- **มีกลไกหยุดรอการยืนยันตัวตน (Explicit Pause Mechanism)**:
  - แสดงกล่องข้อความและคำแนะนำภาษาไทยในหน้า Terminal ชัดเจน
  - หยุดรอให้ผู้ใช้เลื่อนภาพ Captcha หรือกรอกรหัส SMS/WhatsApp OTP ในเบราว์เซอร์
  - รองรับการกด `[ENTER]` เพื่อดำเนินการต่อ หรือตรวจจับการเข้าถึงหน้าแดชบอร์ด (`/portal`) โดยอัตโนมัติ

### 2. Shop Profile Setup & Thai Description (R2)
- นำทางไปยังหน้าตั้งค่าโปรไฟล์ร้านค้า (`https://seller.shopee.co.th/portal/settings/shop/profile`)
- อัปเดตชื่อร้านค้าเป็น **"EV select"**
- ใส่คำอธิบายร้านค้าภาษาไทยฉบับสมบูรณ์ (ครอบคลุมรายละเอียดสินค้า EV Charger, Wallbox, สายชาร์จ, การรับประกันศูนย์ไทย 2 ปี, การออกใบกำกับภาษี และเวลาทำการ)
- แสดงคำแนะนำในคอนโซลสำหรับการอัปโหลด **โลโก้ (300x300 px)** และ **แบนเนอร์หน้าร้าน (1200x675 px)** พร้อมข้อความแนะนำ 5 สไลด์

### 3. Initial Product Listings & Config (R3)
- ร่างรายการสินค้า EV ภาษาไทย 5 รายการ พร้อมชื่อสินค้า, ราคาโปรโมชั่น, สเปกทางเทคนิค, และการรับประกัน:
  1. `เครื่องชาร์จรถยนต์ไฟฟ้าพกพา EV select Portable Charger 16A/32A Type 2 (฿8,900)`
  2. `เครื่องชาร์จ EV ติดผนัง EV select Wallbox 7.4kW / 22kW Type 2 (฿18,500)`
  3. `หัวแปลงชาร์จรถยนต์ไฟฟ้า EV select Type 2 to GB/T Adapter 32A (฿2,490)`
  4. `สายชาร์จรถยนต์ไฟฟ้า EV select Type 2 to Type 2 EV Charging Cable 22kW (฿4,200)`
  5. `ที่แขวนสายชาร์จและที่เก็บหัวชาร์จ EV select Cable & Plug Holster Type 2 (฿590)`
- ระบบแนะนำและจำลองการตั้งค่าขนส่ง (Standard Delivery, Bulky Delivery, ที่อยู่คลังสินค้า)
- ระบบแนะนำการผูกบัญชีธนาคาร, การเปิดระบบผ่อนชำระ 0%, SPayLater, และการลงทะเบียนใบกำกับภาษี e-Tax

---

## 📁 โครงสร้างไฟล์ (File Structure)

```
scripts/shopee_ev_select/
├── data/
│   ├── shopProfile.js              # ข้อมูลโปรไฟล์ร้านค้า, คำอธิบายภาษาไทย, และคำแนะนำโลโก้/แบนเนอร์
│   ├── productListings.js          # ข้อมูลร่างสินค้าภาษาไทย 5 รายการพร้อมสเปกและราคา
│   └── shippingPaymentConfig.js    # ข้อมูลการตั้งค่าระบบขนส่ง การเงิน และ e-Tax
├── shopeeAutomation.js             # Engine คลาสหลักสำหรับควบคุม Playwright และกลไก OTP Pause
├── index.js                        # CLI Entry point สำหรับสั่งงานผ่าน Command Line
├── test.js                         # Test script สำหรับทดสอบด้วย Dummy Credentials ตาม Acceptance Criteria
├── verify.test.js                  # Automated Unit/Integration Test Suite
└── README.md                       # เอกสารคู่มือการใช้งานภาษาไทย
```

---

## 🛠️ วิธีการติดตั้งและรันสคริปต์ (Installation & Usage)

### 1. ติดตั้ง Dependencies (หากยังไม่ได้ติดตั้ง)
```bash
npm install playwright
npx playwright install chromium
```

### 2. รันการทดสอบ (Test Script)
ทดสอบระบบด้วย Dummy Credentials เพื่อตรวจสอบกลไกการหยุดรอ OTP และความถูกต้องของข้อมูลภาษาไทย:
```bash
node scripts/shopee_ev_select/test.js
```
หรือรันแบบ Headless:
```bash
node scripts/shopee_ev_select/test.js --headless
```

### 3. รันสคริปต์ใช้งานจริง (Production Automation)
```bash
# รันทุกขั้นตอน
node scripts/shopee_ev_select/index.js --username "your_shopee_username" --password "your_password"

# รันเฉพาะขั้นตอนดูรายการสินค้า
node scripts/shopee_ev_select/index.js --action products

# รันเฉพาะขั้นตอนดูการตั้งค่าขนส่งและการชำระเงิน
node scripts/shopee_ev_select/index.js --action shipping

# รันเฉพาะขั้นตอนดูโปรไฟล์ร้านค้าและคำแนะนำแบนเนอร์
node scripts/shopee_ev_select/index.js --action profile
```
