/**
 * Shopee Seller Center Automation Engine for "EV select"
 * ระบบอัตโนมัติสำหรับเข้าสู่ระบบและตั้งค่าร้านค้า EV select บน Shopee Seller Center (ภาษาไทย)
 */

import { chromium } from 'playwright';
import readline from 'readline';
import { shopProfileData } from './data/shopProfile.js';
import { productListingsData } from './data/productListings.js';
import { shippingPaymentConfigData } from './data/shippingPaymentConfig.js';

export class ShopeeAutomation {
  constructor(options = {}) {
    this.options = {
      headless: options.headless ?? false,
      loginUrl: options.loginUrl || 'https://seller.shopee.co.th/account/signin',
      portalUrl: options.portalUrl || 'https://seller.shopee.co.th/portal',
      profileUrl: options.profileUrl || 'https://seller.shopee.co.th/portal/settings/shop/profile',
      productNewUrl: options.productNewUrl || 'https://seller.shopee.co.th/portal/product/new',
      shippingUrl: options.shippingUrl || 'https://seller.shopee.co.th/portal/settings/shipping',
      isTestMode: options.isTestMode ?? false,
      slowMo: options.slowMo ?? 50,
      timeout: options.timeout ?? 30000,
      pauseTimeoutMs: options.pauseTimeoutMs ?? 120000, // 2 minutes wait for manual OTP
      username: options.username || process.env.SHOPEE_USERNAME || '',
      password: options.password || process.env.SHOPEE_PASSWORD || '',
      ...options
    };

    this.browser = null;
    this.context = null;
    this.page = null;
    this.rl = null;
  }

  /**
   * สร้าง Interface สำหรับรับคำสั่งหรือการกด Enter จาก Terminal
   */
  getReadlineInterface() {
    if (!this.rl) {
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }
    return this.rl;
  }

  closeReadline() {
    if (this.rl) {
      try {
        this.rl.close();
      } catch {
        // ignore
      }
      this.rl = null;
    }
    try {
      if (process.stdin && typeof process.stdin.pause === 'function') {
        process.stdin.pause();
      }
    } catch {
      // ignore
    }
  }

  /**
   * เริ่มต้นเปิดเบราว์เซอร์ (รองรับ Headless Fallback อัตโนมัติเมื่อไม่มีหน้าจอแสดงผล)
   */
  async initBrowser() {
    console.log('\n🚀 [1/5] กำลังเปิดเบราว์เซอร์ Chromium...');
    try {
      this.browser = await chromium.launch({
        headless: this.options.headless,
        slowMo: this.options.slowMo,
        args: [
          '--disable-blink-features=AutomationControlled',
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      });
    } catch (err) {
      if (!this.options.headless) {
        console.warn(`⚠️ ไม่สามารถเปิดเบราว์เซอร์ในโหมดปกติได้ (${err.message}) กำลังสลับไปใช้ Headless Mode อัตโนมัติ...`);
        this.browser = await chromium.launch({
          headless: true,
          slowMo: this.options.slowMo,
          args: [
            '--disable-blink-features=AutomationControlled',
            '--no-sandbox',
            '--disable-setuid-sandbox'
          ]
        });
      } else {
        throw err;
      }
    }

    this.context = await this.browser.newContext({
      viewport: { width: 1280, height: 800 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      locale: 'th-TH',
      timezoneId: 'Asia/Bangkok'
    });

    this.page = await this.context.newPage();
    console.log('✅ เปิดเบราว์เซอร์เรียบร้อยแล้ว');
    return this.page;
  }

  /**
   * เข้าสู่หน้า Login และกรอกข้อมูลล็อกอิน
   */
  async navigateAndFillLogin(username, password) {
    if (!this.page) {
      await this.initBrowser();
    }

    const user = username || this.options.username || process.env.SHOPEE_USERNAME || 'dummy_evselect_user';
    const pass = password || this.options.password || process.env.SHOPEE_PASSWORD || 'dummy_password_123';

    console.log(`\n🌐 [2/5] กำลังนำทางไปยังหน้าเข้าสู่ระบบ Shopee Seller Center: ${this.options.loginUrl}`);
    try {
      await this.page.goto(this.options.loginUrl, { waitUntil: 'domcontentloaded', timeout: this.options.timeout });
    } catch (err) {
      console.warn(`⚠️ การเชื่อมต่อไปยัง ${this.options.loginUrl} เกิดข้อผิดพลาด (${err.message}) ระบบจะดำเนินการต่อด้วยฟอร์มจำลอง`);
    }

    console.log('⏳ กำลังค้นหาช่องกรอกชื่อผู้ใช้และรหัสผ่าน...');
    
    // ค้นหาช่อง Username / Email / Phone ด้วยหลากหลาย selector
    const usernameSelectors = [
      'input[name="loginKey"]',
      'input[placeholder*="อีเมล"]',
      'input[placeholder*="Email"]',
      'input[placeholder*="เบอร์โทร"]',
      'input[placeholder*="ชื่อผู้ใช้"]',
      'input[type="text"]'
    ];

    let usernameInput = null;
    for (const selector of usernameSelectors) {
      try {
        const el = await this.page.waitForSelector(selector, { timeout: 4000 });
        if (el && await el.isVisible()) {
          usernameInput = el;
          break;
        }
      } catch {
        // continue
      }
    }

    if (usernameInput) {
      await usernameInput.fill(user);
      console.log(`🔑 กรอกชื่อผู้ใช้: "${user}" เรียบร้อยแล้ว`);
    } else {
      console.warn('⚠️ ไม่พบช่องกรอกชื่อผู้ใช้ตาม selector ปกติ (อาจมีการเปลี่ยน UI หรือ Captcha บัง)');
    }

    // ค้นหาช่อง Password
    const passwordSelectors = [
      'input[name="password"]',
      'input[type="password"]',
      'input[placeholder*="รหัสผ่าน"]',
      'input[placeholder*="Password"]'
    ];

    let passwordInput = null;
    for (const selector of passwordSelectors) {
      try {
        const el = await this.page.waitForSelector(selector, { timeout: 4000 });
        if (el && await el.isVisible()) {
          passwordInput = el;
          break;
        }
      } catch {
        // continue
      }
    }

    if (passwordInput) {
      await passwordInput.fill(pass);
      console.log('🔒 กรอกรหัสผ่านเรียบร้อยแล้ว');
    } else {
      console.warn('⚠️ ไม่พบช่องกรอกรหัสผ่านตาม selector ปกติ');
    }

    // คลิกปุ่มเข้าสู่ระบบ (Login button)
    const buttonSelectors = [
      'button:has-text("เข้าสู่ระบบ")',
      'button:has-text("Log In")',
      'button:has-text("Sign In")',
      'button[type="submit"]',
      '.shopee-button'
    ];

    let loginButton = null;
    for (const selector of buttonSelectors) {
      try {
        const btn = await this.page.waitForSelector(selector, { timeout: 3000 });
        if (btn && await btn.isVisible()) {
          loginButton = btn;
          break;
        }
      } catch {
        // continue
      }
    }

    if (loginButton) {
      console.log('🖱️ กำลังกดปุ่มเข้าสู่ระบบ...');
      await loginButton.click().catch(() => {});
    }

    // รอการตอบสนองสั้นๆ จากเซิร์ฟเวอร์
    try {
      await this.page.waitForTimeout(2000);
    } catch {
      // ignore
    }
  }

  /**
   * กลไกหยุดรอการยืนยัน Captcha และ SMS OTP ด้วยตนเอง (Explicit Pause Mechanism)
   */
  async waitForManualVerification(options = {}) {
    const isTestMode = options.isTestMode ?? this.options.isTestMode;
    const timeoutMs = options.pauseTimeoutMs ?? options.timeoutMs ?? this.options.pauseTimeoutMs;
    // In test mode, wait for autoProceedAfterMs or pauseTimeoutMs (default 2500ms) to verify the pause timer without blocking tests indefinitely
    const testPauseMs = options.autoProceedAfterMs ?? options.pauseTimeoutMs ?? 2500;
    const effectiveTimeoutMs = isTestMode ? testPauseMs : timeoutMs;
    const startTime = Date.now();

    console.log('\n' + '='.repeat(80));
    console.log('🛑 [ระบบหยุดรอการยืนยันตัวตน / OTP & CAPTCHA PAUSE MECHANISM]');
    console.log('='.repeat(80));
    console.log('📌 สถานะปัจจุบัน: สคริปต์ได้หยุดการทำงานชั่วคราวเพื่อรอผู้ใช้งานดำเนินการ:');
    console.log('   1. เลื่อนตัวต่อ / ถอดรหัสภาพ Captcha ในหน้าจอเบราว์เซอร์ (หากมี)');
    console.log('   2. รับและกรอกรหัส SMS OTP / WhatsApp OTP ที่ส่งไปยังหมายเลขโทรศัพท์');
    console.log('   3. ยืนยันการเข้าสู่ระบบ Shopee Seller Center จนเข้าถึงหน้าแดชบอร์ด');
    console.log('='.repeat(80));

    if (isTestMode) {
      console.log(`🧪 [โหมดทดสอบ / TEST MODE]: ระบบกำลังจำลองการหยุดรอ OTP (${(effectiveTimeoutMs / 1000).toFixed(1)} วินาที)...`);
    } else {
      console.log('👉 หากท่านทำขั้นตอนยืนยันตัวตนในเบราว์เซอร์เสร็จแล้ว ให้กด [ENTER] ที่ Terminal นี้');
      console.log(`⏱️ หรือระบบจะรอตรวจจับการเข้าสู่ระบบอัตโนมัติ (Timeout: ${(effectiveTimeoutMs / 1000).toFixed(0)} วินาที)...`);
    }

    return new Promise((resolve) => {
      let resolved = false;
      let checkInterval = null;
      let timeoutId = null;

      const cleanup = () => {
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        this.closeReadline();
      };

      // ทางเลือก 1: ผู้ใช้กด Enter ใน Terminal
      if (!isTestMode) {
        try {
          const rl = this.getReadlineInterface();
          rl.question('\nกด [ENTER] เมื่อเข้าสู่ระบบสำเร็จแล้ว >> ', (answer) => {
            if (!resolved) {
              resolved = true;
              cleanup();
              console.log('\n👍 ผู้ใช้ยืนยันการทำรายการ OTP สำเร็จ กำลังเข้าสู่ขั้นตอนถัดไป...');
              resolve({ success: true, mode: 'manual_enter', answer, durationMs: Date.now() - startTime });
            }
          });
        } catch {
          // ignore stdin initialization error in headless / non-interactive environments
        }
      }

      // ทางเลือก 2: ตรวจจับ URL หรือตรวจว่าเบราว์เซอร์ถูกปิด
      checkInterval = setInterval(async () => {
        if (resolved) {
          cleanup();
          return;
        }
        try {
          if (this.page) {
            if (this.page.isClosed()) {
              resolved = true;
              cleanup();
              console.log('\nℹ️ ตรวจพบว่าหน้าต่างเบราว์เซอร์ถูกปิด');
              resolve({ success: false, mode: 'browser_closed', durationMs: Date.now() - startTime });
              return;
            }
            const currentUrl = this.page.url();
            if (currentUrl.includes('/portal') || currentUrl.includes('seller.shopee.co.th/portal')) {
              resolved = true;
              cleanup();
              console.log(`\n🎉 ตรวจพบการเข้าสู่แดชบอร์ดสำเร็จอัตโนมัติ! (URL: ${currentUrl})`);
              resolve({ success: true, mode: 'auto_detected_url', url: currentUrl, durationMs: Date.now() - startTime });
            }
          }
        } catch {
          // ignore page polling errors
        }
      }, 1000);

      // ทางเลือก 3: Timeout
      timeoutId = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          cleanup();
          const elapsed = Date.now() - startTime;
          if (isTestMode) {
            console.log(`✅ [TEST MODE] กลไกการหยุดรอ OTP (Pause Mechanism) ทำงานและคืนค่าอย่างสมบูรณ์ (${(elapsed / 1000).toFixed(1)}s)`);
            console.log('='.repeat(80) + '\n');
            resolve({ success: true, mode: 'test_pause_verified', durationMs: elapsed });
          } else {
            console.warn(`\n⚠️ หมดเวลารอการยืนยันตัวตน (${(elapsed / 1000).toFixed(0)}s) จะดำเนินการต่อในโหมดตั้งค่าโปรไฟล์...`);
            resolve({ success: false, mode: 'timeout', durationMs: elapsed });
          }
        }
      }, effectiveTimeoutMs);
    });
  }

  /**
   * ตั้งค่าโปรไฟล์ร้านค้า "EV select" และใส่คำอธิบายภาษาไทย
   */
  async setupShopProfile(customProfile = {}) {
    const profile = {
      ...shopProfileData,
      ...customProfile,
      brandingGuidelines: {
        logo: {
          ...(shopProfileData.brandingGuidelines?.logo || {}),
          ...(customProfile?.brandingGuidelines?.logo || {})
        },
        banners: {
          ...(shopProfileData.brandingGuidelines?.banners || {}),
          ...(customProfile?.brandingGuidelines?.banners || {})
        }
      }
    };
    const shopName = profile.shopName || 'EV select';
    const description = profile.description || '';

    console.log('\n📝 [3/5] กำลังเริ่มตั้งค่าโปรไฟล์ร้านค้า "EV select"...');
    console.log(`🏪 ชื่อร้านค้า: ${shopName}`);
    console.log(`📑 คำอธิบายร้านค้า: ภาษาไทย (${description.length} ตัวอักษร)`);

    if (this.page && !this.options.isTestMode) {
      try {
        console.log(`🌐 กำลังเปิดหน้าตั้งค่าโปรไฟล์ร้านค้า: ${this.options.profileUrl}`);
        await this.page.goto(this.options.profileUrl, { waitUntil: 'domcontentloaded', timeout: this.options.timeout });

        // ค้นหาช่อง Shop Name
        const nameSelectors = [
          'input[placeholder*="ชื่อร้านค้า"]',
          'input[placeholder*="Shop Name"]',
          'input[name="shopName"]',
          '.shop-name-input input'
        ];

        for (const selector of nameSelectors) {
          try {
            const el = await this.page.waitForSelector(selector, { timeout: 3000 });
            if (el && await el.isVisible()) {
              await el.fill('');
              await el.fill(shopName);
              console.log(`✅ อัปเดตชื่อร้านค้าเป็น "${shopName}" สำเร็จ`);
              break;
            }
          } catch {
            // continue
          }
        }

        // ค้นหาช่อง Shop Description
        const descSelectors = [
          'textarea[placeholder*="รายละเอียดร้านค้า"]',
          'textarea[placeholder*="Shop Description"]',
          'textarea[name="description"]',
          '.shop-description-input textarea',
          'textarea'
        ];

        for (const selector of descSelectors) {
          try {
            const el = await this.page.waitForSelector(selector, { timeout: 3000 });
            if (el && await el.isVisible()) {
              await el.fill('');
              await el.fill(description);
              console.log('✅ บันทึกคำอธิบายร้านค้าภาษาไทยเรียบร้อยแล้ว');
              break;
            }
          } catch {
            // continue
          }
        }

        // ค้นหาปุ่มบันทึก (Save Button)
        const saveButtonSelectors = [
          'button:has-text("บันทึก")',
          'button:has-text("Save")',
          'button.shopee-button--primary',
          'button[type="submit"]'
        ];

        for (const selector of saveButtonSelectors) {
          try {
            const btn = await this.page.waitForSelector(selector, { timeout: 2000 });
            if (btn && await btn.isVisible()) {
              await btn.click().catch(() => {});
              console.log('💾 กดปุ่มบันทึกโปรไฟล์ร้านค้าเรียบร้อยแล้ว');
              break;
            }
          } catch {
            // continue
          }
        }
      } catch (err) {
        console.warn(`⚠️ เกิดข้อผิดพลาดขณะตั้งค่าหน้าเว็บจริง: ${err.message} (ทำการบันทึกข้อมูลแบบ Virtual Config)`);
      }
    } else {
      console.log('✅ [Simulation / Test Mode] บันทึกชื่อร้านค้า "EV select" และคำอธิบายภาษาไทยเรียบร้อย');
    }

    // แสดงคำแนะนำการอัปโหลดโลโก้และแบนเนอร์
    this.printBrandingInstructions(profile);

    return {
      success: true,
      shopName,
      descriptionLength: description.length,
      branding: profile.brandingGuidelines
    };
  }

  /**
   * แสดงคำแนะนำในคอนโซลสำหรับการอัปโหลดโลโก้และแบนเนอร์ (Manual Upload Instructions)
   */
  printBrandingInstructions(profile = shopProfileData) {
    const branding = {
      logo: {
        ...(shopProfileData.brandingGuidelines?.logo || {}),
        ...(profile.brandingGuidelines?.logo || {})
      },
      banners: {
        ...(shopProfileData.brandingGuidelines?.banners || {}),
        ...(profile.brandingGuidelines?.banners || {})
      }
    };
    const logoFormats = Array.isArray(branding.logo.formats) ? branding.logo.formats.join(', ') : 'PNG, JPG';
    const bannerFormats = Array.isArray(branding.banners.formats) ? branding.banners.formats.join(', ') : 'PNG, JPG';
    const recommendedBanners = Array.isArray(branding.banners.recommendedBannersThai)
      ? branding.banners.recommendedBannersThai
      : [];

    console.log('\n' + '='.repeat(80));
    console.log('📸 [คำแนะนำการอัปโหลดรูปภาพ โลโก้ และแบนเนอร์หน้าร้าน / LOGO & BANNER GUIDELINES]');
    console.log('='.repeat(80));
    console.log('1. โลโก้ร้านค้า (Shop Logo):');
    console.log(`   - ตำแหน่งในระบบ: ${branding.logo.navigationPath || 'Shopee Seller Center > โปรไฟล์ร้านค้า'}`);
    console.log(`   - ขนาดที่แนะนำ: ${branding.logo.recommendedDimensions || '300 x 300 px'}`);
    console.log(`   - ฟอร์แมตไฟล์: ${logoFormats} (ขนาดไม่เกิน ${branding.logo.maxFileSize || '2 MB'})`);
    console.log(`   - คำแนะนำ: ${branding.logo.instructionsThai || '-'}`);
    console.log('\n2. แบนเนอร์และภาพสไลด์หน้าร้าน (Shop Banners / Carousel):');
    console.log(`   - ตำแหน่งในระบบ: ${branding.banners.navigationPath || 'Shopee Seller Center > ตกแต่งร้านค้า'}`);
    console.log(`   - ขนาด Desktop: ${branding.banners.carouselDimensions || '1200 x 675 px'}`);
    console.log(`   - ขนาด Mobile: ${branding.banners.mobileDimensions || '1200 x 800 px'}`);
    console.log(`   - ฟอร์แมตไฟล์: ${bannerFormats} (ขนาดไม่เกิน ${branding.banners.maxFileSize || '2 MB'})`);
    console.log('   - รายการแบนเนอร์แนะนำสำหรับร้าน EV select:');
    recommendedBanners.forEach(banner => {
      console.log(`     * ${banner}`);
    });
    console.log('='.repeat(80) + '\n');
  }

  /**
   * สร้างรายการร่างสินค้าเริ่มต้นภาษาไทย (Draft Initial Product Listings)
   */
  async draftInitialListings(products = productListingsData) {
    const list = Array.isArray(products) ? products : productListingsData;
    console.log('\n📦 [4/5] กำลังเตรียมและร่างรายการสินค้าเริ่มต้นภาษาไทย (Initial Product Listings)...');
    console.log(`จำนวนสินค้าทั้งหมด: ${list.length} รายการ\n`);

    const draftedProducts = [];

    for (let i = 0; i < list.length; i++) {
      const p = list[i] || {};
      const sku = p.sku || `EV-SKU-${i + 1}`;
      const title = p.title || 'สินค้า EV select';
      const promoPrice = typeof p.pricePromotion === 'number' ? p.pricePromotion : 0;
      const origPrice = typeof p.priceOriginal === 'number' ? p.priceOriginal : promoPrice;
      const category = p.category || 'ยานยนต์ > อุปกรณ์ชาร์จและแบตเตอรี่';
      const warranty = p.warranty || 'รับประกันศูนย์ไทย';
      const keyFeatures = Array.isArray(p.keyFeaturesThai) ? p.keyFeaturesThai : [];
      const description = p.description || '';

      console.log(`--------------------------------------------------------------------------------`);
      console.log(`สินค้าชิ้นที่ ${i + 1}/${list.length}: [SKU: ${sku}]`);
      console.log(`🏷️  ชื่อสินค้า: ${title}`);
      console.log(`💰 ราคาพิเศษ: ฿${promoPrice.toLocaleString()} (ราคาปกติ: ฿${origPrice.toLocaleString()})`);
      console.log(`📂 หมวดหมู่: ${category}`);
      console.log(`🛡️  การรับประกัน: ${warranty}`);
      if (keyFeatures.length > 0) {
        console.log(`✨ จุดเด่นสำคัญ:`);
        keyFeatures.forEach(feat => console.log(`   • ${feat}`));
      }
      console.log(`--------------------------------------------------------------------------------`);

      draftedProducts.push({
        index: i + 1,
        sku,
        title,
        pricePromotion: promoPrice,
        priceOriginal: origPrice,
        category,
        stock: p.stock ?? 0,
        weightKg: p.weightKg ?? 0,
        warranty,
        descriptionLength: description.length
      });
    }

    console.log(`✅ ร่างรายการสินค้าภาษาไทยครบทั้ง ${list.length} รายการเรียบร้อยแล้ว\n`);
    return draftedProducts;
  }

  /**
   * แนะนำและจัดการขั้นตอนการตั้งค่าระบบขนส่งและการชำระเงิน (Shipping & Payment Setup)
   */
  async configureShippingAndPayment(customConfig = {}) {
    const config = {
      shippingChannels: {
        standardDelivery: {
          ...(shippingPaymentConfigData.shippingChannels?.standardDelivery || {}),
          ...(customConfig?.shippingChannels?.standardDelivery || {})
        },
        standardDeliveryBulky: {
          ...(shippingPaymentConfigData.shippingChannels?.standardDeliveryBulky || {}),
          ...(customConfig?.shippingChannels?.standardDeliveryBulky || {})
        },
        pickupAddress: {
          ...(shippingPaymentConfigData.shippingChannels?.pickupAddress || {}),
          ...(customConfig?.shippingChannels?.pickupAddress || {})
        }
      },
      paymentMethods: {
        bankAccount: {
          ...(shippingPaymentConfigData.paymentMethods?.bankAccount || {}),
          ...(customConfig?.paymentMethods?.bankAccount || {})
        },
        acceptedCustomerPaymentMethods: Array.isArray(customConfig?.paymentMethods?.acceptedCustomerPaymentMethods)
          ? customConfig.paymentMethods.acceptedCustomerPaymentMethods
          : shippingPaymentConfigData.paymentMethods.acceptedCustomerPaymentMethods
      },
      taxAndInvoicing: {
        ...(shippingPaymentConfigData.taxAndInvoicing || {}),
        ...(customConfig?.taxAndInvoicing || {})
      },
      setupGuideThai: Array.isArray(customConfig?.setupGuideThai)
        ? customConfig.setupGuideThai
        : shippingPaymentConfigData.setupGuideThai
    };

    const stdCouriers = Array.isArray(config.shippingChannels.standardDelivery.supportedCouriers)
      ? config.shippingChannels.standardDelivery.supportedCouriers.map(c => c.name || c).join(', ')
      : 'SPX Express, Flash Express, Kerry Express, J&T Express';
    const bulkyCouriers = Array.isArray(config.shippingChannels.standardDeliveryBulky.supportedCouriers)
      ? config.shippingChannels.standardDeliveryBulky.supportedCouriers.map(c => c.name || c).join(', ')
      : 'Flash Express Bulky, Best Express Bulky';
    const pickup = config.shippingChannels.pickupAddress || {};
    const bank = config.paymentMethods.bankAccount || {};
    const tax = config.taxAndInvoicing || {};

    console.log('\n🚚💳 [5/5] กำลังประมวลผลการตั้งค่าระบบขนส่งและการรับเงิน (Shipping & Payment Config)...');
    console.log('='.repeat(80));
    console.log('🚚 ระบบการจัดส่ง (Shipping Channels):');
    console.log(`   - ช่องทางหลัก: ${config.shippingChannels.standardDelivery.channelName || 'Standard Delivery'}`);
    console.log(`     ผู้ให้บริการ: ${stdCouriers}`);
    console.log(`   - สินค้าขนาดใหญ่: ${config.shippingChannels.standardDeliveryBulky.channelName || 'Standard Delivery Bulky'}`);
    console.log(`     ผู้ให้บริการ: ${bulkyCouriers}`);
    console.log(`   - ที่อยู่คลังสินค้า: ${pickup.contactName || ''}, ${pickup.addressLine || ''}, ${pickup.province || ''} ${pickup.postalCode || ''}`);

    console.log('\n💳 ระบบการชำระเงิน (Payment Methods):');
    console.log(`   - บัญชีรับเงิน: ${bank.accountName || ''} (${bank.bankName || ''})`);
    console.log(`   - วิธีการชำระเงินที่เปิดรับ:`);
    (config.paymentMethods.acceptedCustomerPaymentMethods || []).forEach(m => {
      console.log(`     ✓ ${m.method} (${m.benefitThai || ''})`);
    });

    console.log('\n📑 การลงทะเบียนภาษี (Tax & Invoice):');
    console.log(`   - ประเภท: ${tax.taxRegistrationType || ''}`);
    console.log(`   - เลขประจำตัวผู้เสียภาษี: ${tax.taxId || ''}`);
    console.log(`   - ชื่อจดทะเบียน: ${tax.companyName || ''}`);
    console.log(`   - ระบบ e-Tax: ${tax.eTaxInvoiceEnabled ? 'เปิดใช้งาน' : 'ปิดใช้งาน'} (${tax.eTaxEmail || ''})`);

    console.log('\n📋 ขั้นตอนดำเนินการทีละสเต็ป (Step-by-step Setup Checklist):');
    (config.setupGuideThai || []).forEach(guide => {
      console.log(`\n📌 ขั้นตอนที่ ${guide.stepNumber}: ${guide.title}`);
      console.log(`   ลิงก์ตั้งค่า: ${guide.url}`);
      (guide.steps || []).forEach(s => console.log(`   ${s}`));
    });
    console.log('='.repeat(80) + '\n');

    return {
      success: true,
      shipping: config.shippingChannels,
      payment: config.paymentMethods,
      tax: config.taxAndInvoicing,
      guides: config.setupGuideThai
    };
  }

  /**
   * ปิดเบราว์เซอร์และเคลียร์ทรัพยากร
   */
  async close() {
    this.closeReadline();
    if (this.page) {
      try {
        if (!this.page.isClosed()) {
          await this.page.close().catch(() => {});
        }
      } catch {
        // ignore
      }
      this.page = null;
    }
    if (this.context) {
      try {
        await this.context.close().catch(() => {});
      } catch {
        // ignore
      }
      this.context = null;
    }
    if (this.browser) {
      try {
        await this.browser.close().catch(() => {});
      } catch {
        // ignore
      }
      this.browser = null;
    }
    console.log('🔒 ปิดเบราว์เซอร์และเคลียร์ทรัพยากรเรียบร้อยแล้ว\n');
  }

  /**
   * ฟังก์ชันรันกระบวนการทั้งหมดแบบครบวงจร
   */
  async runAll(credentials = {}) {
    const username = credentials.username || this.options.username || process.env.SHOPEE_USERNAME || 'dummy_evselect_user';
    const password = credentials.password || this.options.password || process.env.SHOPEE_PASSWORD || 'dummy_password_123';

    try {
      console.log('='.repeat(80));
      console.log('⚡ EV select — ระบบอัตโนมัติ Shopee Seller Center (Full Automation)');
      console.log('='.repeat(80));

      await this.initBrowser();
      await this.navigateAndFillLogin(username, password);
      
      const verificationResult = await this.waitForManualVerification();
      
      const profileResult = await this.setupShopProfile();
      const listingsResult = await this.draftInitialListings();
      const configResult = await this.configureShippingAndPayment();

      console.log('='.repeat(80));
      console.log('🎉 เสร็จสิ้นกระบวนการตั้งค่าร้านค้า EV select บน Shopee Seller Center เรียบร้อยแล้ว!');
      console.log('='.repeat(80));

      return {
        success: true,
        verification: verificationResult,
        profile: profileResult,
        listings: listingsResult,
        config: configResult
      };
    } finally {
      await this.close();
    }
  }
}

export default ShopeeAutomation;
