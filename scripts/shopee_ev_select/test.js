/**
 * EV select - Shopee Seller Center Automation Test Script (test.js)
 * สคริปต์ทดสอบระบบอัตโนมัติด้วยข้อมูลจำลอง (Dummy Credentials)
 * ตรวจสอบ:
 * 1. การเปิดเบราว์เซอร์จริงด้วย Playwright
 * 2. การกรอกข้อมูลล็อกอินจำลอง
 * 3. กลไกการหยุดรอการยืนยัน Captcha และ SMS OTP (Pause Mechanism)
 * 4. ความถูกต้องของข้อมูลภาษาไทย (คำอธิบายร้านค้า, รายการสินค้า 5 รายการ, การจัดส่ง และการชำระเงิน)
 */

import { ShopeeAutomation } from './shopeeAutomation.js';
import { shopProfileData } from './data/shopProfile.js';
import { productListingsData } from './data/productListings.js';
import { shippingPaymentConfigData } from './data/shippingPaymentConfig.js';

// ตรวจสอบว่ามีตัวอักษรภาษาไทย (Thai Unicode Range \u0E00-\u0E7F)
function containsThai(text) {
  return /[\u0E00-\u0E7F]/.test(text);
}

async function runTest() {
  console.log('\n================================================================================');
  console.log('🧪 [TEST SUITE] เริ่มต้นทดสอบ Shopee Seller Center Automation สำหรับร้าน EV select');
  console.log('================================================================================\n');

  let testPassedCount = 0;
  let testTotalCount = 4;

  // ---------------------------------------------------------------------------
  // Test 1: Data Integrity & Thai Content Verification
  // ---------------------------------------------------------------------------
  console.log('▶ [TEST 1/4] ตรวจสอบความถูกต้องของข้อมูลภาษาไทย (Thai Content & Data Verification)...');
  try {
    // ตรวจสอบชื่อร้าน
    if (shopProfileData.shopName !== 'EV select') {
      throw new Error(`ชื่อร้านค้าไม่ถูกต้อง: คาดหวัง "EV select" แต่ได้ "${shopProfileData.shopName}"`);
    }

    // ตรวจสอบคำอธิบายร้านค้าภาษาไทย
    if (!containsThai(shopProfileData.description) || shopProfileData.description.length < 100) {
      throw new Error('คำอธิบายร้านค้าไม่มีภาษาไทยหรือสั้นเกินไป');
    }

    // ตรวจสอบคำแนะนำโลโก้และแบนเนอร์
    if (!shopProfileData.brandingGuidelines || !shopProfileData.brandingGuidelines.logo || !shopProfileData.brandingGuidelines.banners) {
      throw new Error('ไม่มีข้อมูลคำแนะนำการอัปโหลดโลโก้และแบนเนอร์');
    }

    // ตรวจสอบรายการสินค้าภาษาไทย
    if (!Array.isArray(productListingsData) || productListingsData.length < 3) {
      throw new Error(`จำนวนรายการสินค้าไม่เพียงพอ: พบ ${productListingsData.length} รายการ`);
    }

    for (const [idx, item] of productListingsData.entries()) {
      if (!item.title || !containsThai(item.title)) {
        throw new Error(`สินค้าลำดับที่ ${idx + 1} ไม่มีชื่อภาษาไทย`);
      }
      if (!item.description || !containsThai(item.description)) {
        throw new Error(`สินค้าลำดับที่ ${idx + 1} ไม่มีรายละเอียดภาษาไทย`);
      }
      if (!item.pricePromotion || typeof item.pricePromotion !== 'number') {
        throw new Error(`สินค้าลำดับที่ ${idx + 1} ไม่มีราคาที่ถูกต้อง`);
      }
    }

    // ตรวจสอบข้อมูลขนส่งและการเงิน
    if (!shippingPaymentConfigData.shippingChannels || !shippingPaymentConfigData.paymentMethods) {
      throw new Error('ข้อมูลการตั้งค่าขนส่งหรือการชำระเงินไม่ครบถ้วน');
    }

    console.log('✅ [TEST 1 PASSED] ข้อมูลภาษาไทย (ชื่อร้านค้า, คำอธิบาย, สินค้า, ขนส่ง, การเงิน) ถูกต้องสมบูรณ์ 100%');
    testPassedCount++;
  } catch (err) {
    console.error(`❌ [TEST 1 FAILED] ${err.message}`);
  }

  // ---------------------------------------------------------------------------
  // Test 2 & 3: Browser Launch, Dummy Credentials Input & OTP Pause Mechanism
  // ---------------------------------------------------------------------------
  console.log('\n▶ [TEST 2/4 & 3/4] ทดสอบการเปิดเบราว์เซอร์ Playwright, กรอก Dummy Credentials และกลไก OTP Pause...');
  
  const dummyUsername = 'dummy_evselect_seller_2026';
  const dummyPassword = 'DummySecretPassword!99';

  // ตรวจสอบว่าสามารถรันได้ทั้ง headless หรือ headful ตาม env
  const isHeadless = process.env.HEADLESS === 'true' || process.argv.includes('--headless');

  const automation = new ShopeeAutomation({
    headless: isHeadless,
    isTestMode: true, // โหมดทดสอบจำลอง OTP pause
    timeout: 30000,
    slowMo: 30
  });

  try {
    // 2.1 เปิดเบราว์เซอร์
    console.log('  🌐 กำลังเปิดเบราว์เซอร์ Chromium...');
    await automation.initBrowser();
    console.log('  ✅ [TEST 2 PASSED] เปิดเบราว์เซอร์ Playwright สำเร็จ');
    testPassedCount++;

    // 2.2 เข้าหน้า Login และกรอก Dummy Credentials
    console.log(`  🔑 กำลังนำทางไปหน้าเข้าสู่ระบบและกรอกข้อมูลจำลอง: ${dummyUsername}...`);
    await automation.navigateAndFillLogin(dummyUsername, dummyPassword);
    console.log('  ✅ กรอกข้อมูล Dummy Credentials ลงในฟอร์ม Shopee Seller Center สำเร็จ');

    // 2.3 ตรวจสอบกลไก Pause Mechanism (ทดสอบการหยุดรอจริงเป็นเวลา 2 วินาที)
    console.log('  🛑 กำลังเรียกใช้ฟังก์ชัน waitForManualVerification (OTP / Captcha Pause)...');
    const startTime = Date.now();
    const pauseResult = await automation.waitForManualVerification({ isTestMode: true, autoProceedAfterMs: 2000 });
    const elapsedMs = Date.now() - startTime;
    
    if (!pauseResult || !pauseResult.success) {
      throw new Error('กลไก Pause Mechanism ไม่ตอบสนองตามที่คาดหวัง');
    }

    if (elapsedMs < 1500) {
      throw new Error(`กลไก Pause ไม่ได้หยุดรอจริง: ใช้เวลาเพียง ${elapsedMs}ms`);
    }

    console.log(`  ⏱️ ตรวจสอบระยะเวลาการหยุดรอจริง: ${elapsedMs}ms (ผ่านเกณฑ์ >= 1500ms)`);
    console.log('  ✅ [TEST 3 PASSED] กลไกการหยุดรอ OTP (Pause Mechanism) ทำงานถูกต้องสมบูรณ์');
    testPassedCount++;
  } catch (err) {
    console.error(`❌ [TEST 2/3 FAILED] ${err.message}`);
  } finally {
    await automation.close();
  }

  // ---------------------------------------------------------------------------
  // Test 4: Profile, Listings, and Shipping Configuration Output Execution
  // ---------------------------------------------------------------------------
  console.log('\n▶ [TEST 4/4] ทดสอบการทำงานของฟังก์ชันจัดการโปรไฟล์, ร่างสินค้า และการตั้งค่าขนส่ง/การเงิน...');
  try {
    const headlessAutomation = new ShopeeAutomation({ isTestMode: true, headless: true });
    
    const profileRes = await headlessAutomation.setupShopProfile(shopProfileData);
    if (!profileRes.success || profileRes.shopName !== 'EV select') {
      throw new Error('การประมวลผลโปรไฟล์ร้านค้าไม่สมบูรณ์');
    }

    const listingsRes = await headlessAutomation.draftInitialListings(productListingsData);
    if (!Array.isArray(listingsRes) || listingsRes.length !== productListingsData.length) {
      throw new Error('การประมวลผลรายการสินค้าไม่สมบูรณ์');
    }

    const configRes = await headlessAutomation.configureShippingAndPayment(shippingPaymentConfigData);
    if (!configRes.success) {
      throw new Error('การประมวลผลการตั้งค่าขนส่งและการชำระเงินไม่สมบูรณ์');
    }

    console.log('✅ [TEST 4 PASSED] ฟังก์ชันทั้งหมดทำงานประสานกันได้อย่างถูกต้อง');
    testPassedCount++;
  } catch (err) {
    console.error(`❌ [TEST 4 FAILED] ${err.message}`);
  }

  // ---------------------------------------------------------------------------
  // Summary Report
  // ---------------------------------------------------------------------------
  console.log('\n' + '='.repeat(80));
  console.log(`📊 [สรุปผลการทดสอบ]: ผ่าน ${testPassedCount}/${testTotalCount} รายการทดสอบ`);
  console.log('='.repeat(80));

  if (testPassedCount === testTotalCount) {
    console.log('🎉 ยินดีด้วย! การทดสอบทั้งหมดผ่านการประเมินตามเกณฑ์ Acceptance Criteria ครบถ้วน 100%');
    console.log('='.repeat(80) + '\n');
    process.exit(0);
  } else {
    console.error(`⚠️ มีการทดสอบที่ไม่ผ่านจำนวน ${testTotalCount - testPassedCount} รายการ`);
    console.log('='.repeat(80) + '\n');
    process.exit(1);
  }
}

runTest();
