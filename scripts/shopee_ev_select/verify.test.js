/**
 * Automated Verification Test Suite for Shopee EV select Automation
 * ทดสอบความถูกต้องระดับ Unit / Integration Tests
 */

import { ShopeeAutomation } from './shopeeAutomation.js';
import { parseArgs } from './index.js';
import { shopProfileData } from './data/shopProfile.js';
import { productListingsData } from './data/productListings.js';
import { shippingPaymentConfigData } from './data/shippingPaymentConfig.js';
import assert from 'assert';

function isThai(text) {
  return /[\u0E00-\u0E7F]/.test(text);
}

async function runVerification() {
  console.log('🧪 Starting Automated Verification Test Suite...\n');
  let passed = 0;
  let total = 0;

  function test(name, fn) {
    total++;
    try {
      fn();
      console.log(`  ✓ ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ✗ ${name}: ${err.message}`);
    }
  }

  async function asyncTest(name, fn) {
    total++;
    try {
      await fn();
      console.log(`  ✓ ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ✗ ${name}: ${err.message}`);
    }
  }

  // 1. Shop Profile Tests
  console.log('1. Shop Profile Tests:');
  test('Shop name must be "EV select"', () => {
    assert.strictEqual(shopProfileData.shopName, 'EV select');
  });

  test('Shop description must be non-empty and in Thai', () => {
    assert.ok(shopProfileData.description.length > 50);
    assert.ok(isThai(shopProfileData.description));
  });

  test('Shop branding guidelines must include logo and banner specs', () => {
    assert.ok(shopProfileData.brandingGuidelines.logo.recommendedDimensions);
    assert.ok(Array.isArray(shopProfileData.brandingGuidelines.banners.recommendedBannersThai));
    assert.ok(shopProfileData.brandingGuidelines.banners.recommendedBannersThai.length >= 3);
  });

  // 2. Product Listings Tests
  console.log('\n2. Product Listings Tests:');
  test('Product listings must contain at least 5 EV products', () => {
    assert.ok(Array.isArray(productListingsData));
    assert.ok(productListingsData.length >= 5);
  });

  test('Every product must have valid Thai title, description, SKU, and price', () => {
    for (const p of productListingsData) {
      assert.ok(p.id, 'Missing product ID');
      assert.ok(p.sku, 'Missing SKU');
      assert.ok(isThai(p.title), `Title not Thai for ${p.sku}`);
      assert.ok(isThai(p.description), `Description not Thai for ${p.sku}`);
      assert.ok(typeof p.pricePromotion === 'number' && p.pricePromotion > 0, `Invalid price for ${p.sku}`);
      assert.ok(p.priceOriginal >= p.pricePromotion, `Original price must be >= Promo price for ${p.sku}`);
      assert.ok(isThai(p.warranty), `Warranty not Thai for ${p.sku}`);
    }
  });

  // 3. Shipping & Payment Config Tests
  console.log('\n3. Shipping & Payment Config Tests:');
  test('Shipping channels must define standard and bulky delivery', () => {
    assert.ok(shippingPaymentConfigData.shippingChannels.standardDelivery.enabled);
    assert.ok(shippingPaymentConfigData.shippingChannels.standardDeliveryBulky.enabled);
    assert.ok(shippingPaymentConfigData.shippingChannels.pickupAddress.province === 'กรุงเทพมหานคร');
  });

  test('Payment methods must define bank account and installment', () => {
    assert.ok(shippingPaymentConfigData.paymentMethods.bankAccount.accountName);
    const installment = shippingPaymentConfigData.paymentMethods.acceptedCustomerPaymentMethods.find(m => m.method.includes('ผ่อนชำระ'));
    assert.ok(installment && installment.enabled);
  });

  test('Tax configuration must define juristic person and VAT registration', () => {
    assert.strictEqual(shippingPaymentConfigData.taxAndInvoicing.vatRegistered, true);
    assert.ok(shippingPaymentConfigData.taxAndInvoicing.taxId.length === 13);
  });

  // 4. ShopeeAutomation Engine Unit & Integration Tests
  console.log('\n4. ShopeeAutomation Engine Tests:');
  test('ShopeeAutomation class can be instantiated with default options', () => {
    const auto = new ShopeeAutomation();
    assert.strictEqual(auto.options.headless, false);
    assert.ok(auto.options.loginUrl.includes('shopee.co.th'));
  });

  test('ShopeeAutomation class handles custom options properly', () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    assert.strictEqual(auto.options.headless, true);
    assert.strictEqual(auto.options.isTestMode, true);
  });

  await asyncTest('ShopeeAutomation can execute test mode pause mechanism and clean up timers', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const start = Date.now();
    const res = await auto.waitForManualVerification({ isTestMode: true, autoProceedAfterMs: 300 });
    const diff = Date.now() - start;
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.mode, 'test_pause_verified');
    assert.ok(diff >= 250, `Expected at least 250ms elapsed, got ${diff}ms`);
  });

  await asyncTest('ShopeeAutomation can launch headless browser and navigate', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true, timeout: 20000 });
    const page = await auto.initBrowser();
    assert.ok(page, 'Browser page should be initialized');
    await auto.close();
  });

  await asyncTest('ShopeeAutomation close method is idempotent and safe to call multiple times', async () => {
    const auto = new ShopeeAutomation({ headless: true });
    await auto.close();
    await auto.close(); // second call should not throw
    assert.strictEqual(auto.browser, null);
    assert.strictEqual(auto.context, null);
    assert.strictEqual(auto.page, null);
  });

  await asyncTest('ShopeeAutomation setupShopProfile handles partial branding overrides without losing defaults', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const res = await auto.setupShopProfile({
      brandingGuidelines: {
        logo: { recommendedDimensions: '400 x 400 px' }
      }
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.shopName, 'EV select');
    assert.strictEqual(res.branding.logo.recommendedDimensions, '400 x 400 px');
    assert.ok(Array.isArray(res.branding.logo.formats), 'Logo formats should be preserved');
    assert.ok(Array.isArray(res.branding.banners.recommendedBannersThai), 'Banners should be preserved');
  });

  await asyncTest('ShopeeAutomation draftInitialListings drafts all 5 products correctly', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const res = await auto.draftInitialListings();
    assert.strictEqual(res.length, productListingsData.length);
    for (const item of res) {
      assert.ok(item.sku);
      assert.ok(item.title);
      assert.ok(item.pricePromotion > 0);
      assert.ok(item.descriptionLength > 0);
    }
  });

  await asyncTest('ShopeeAutomation draftInitialListings safely handles minimal/partial custom products', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const minimalProducts = [
      { title: 'Custom Minimal EV Item', sku: 'CUST-001' }
    ];
    const res = await auto.draftInitialListings(minimalProducts);
    assert.strictEqual(res.length, 1);
    assert.strictEqual(res[0].sku, 'CUST-001');
    assert.strictEqual(res[0].pricePromotion, 0);
  });

  await asyncTest('ShopeeAutomation configureShippingAndPayment outputs correct configuration with partial overrides', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const res = await auto.configureShippingAndPayment({
      shippingChannels: { standardDelivery: { channelName: 'Custom Standard Express' } }
    });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.shipping.standardDelivery.channelName, 'Custom Standard Express');
    assert.ok(res.shipping.standardDeliveryBulky.enabled, 'Standard bulky should be preserved');
    assert.ok(res.payment.bankAccount.accountName, 'Bank account should be preserved');
    assert.ok(res.tax.vatRegistered, 'Tax info should be preserved');
  });

  await asyncTest('ShopeeAutomation configureShippingAndPayment safely handles null / primitive items in couriers, payment methods, and setup guides', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const res = await auto.configureShippingAndPayment({
      shippingChannels: {
        standardDelivery: { supportedCouriers: [null, undefined, 'Custom Courier', { name: 'Object Courier' }] },
        standardDeliveryBulky: { supportedCouriers: [null] }
      },
      paymentMethods: {
        acceptedCustomerPaymentMethods: [null, 'Direct Transfer', { method: 'Custom Method', benefitThai: 'สะดวก' }]
      },
      setupGuideThai: [null, { stepNumber: 99, title: 'Extra Step', url: 'https://example.com', steps: ['99.1 Do something'] }]
    });
    assert.strictEqual(res.success, true);
    assert.ok(res.shipping);
    assert.ok(res.payment);
    assert.ok(res.guides);
  });

  await asyncTest('ShopeeAutomation draftInitialListings handles non-string descriptions and nullish key features safely', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const res = await auto.draftInitialListings([
      { title: 'Edge Case EV Product', description: 123456, keyFeaturesThai: [null, undefined, 'Valid feature'] }
    ]);
    assert.strictEqual(res.length, 1);
    assert.strictEqual(res[0].descriptionLength, 6);
  });

  await asyncTest('ShopeeAutomation initBrowser reuses active browser and context safely', async () => {
    const auto = new ShopeeAutomation({ headless: true, isTestMode: true });
    const page1 = await auto.initBrowser();
    const browser1 = auto.browser;
    const page2 = await auto.initBrowser();
    assert.strictEqual(auto.browser, browser1, 'Browser instance should be reused');
    assert.strictEqual(page1, page2, 'Page instance should be reused');
    await auto.close();
  });

  // 5. CLI Arguments & Edge Cases Tests
  console.log('\n5. CLI Arguments & Edge Cases Tests:');
  test('CLI parseArgs handles valid flags and normalizes action case', () => {
    const parsed = parseArgs(['--username', 'user123', '--password', 'pass456', '--action', 'PRODUCTS', '--headless', '--timeout', '60']);
    assert.strictEqual(parsed.username, 'user123');
    assert.strictEqual(parsed.password, 'pass456');
    assert.strictEqual(parsed.action, 'products');
    assert.strictEqual(parsed.headless, true);
    assert.strictEqual(parsed.pauseTimeoutMs, 60000);
    assert.strictEqual(parsed.errors.length, 0);
  });

  test('CLI parseArgs handles key=value syntax (--key=value)', () => {
    const parsed = parseArgs(['--username=admin_user', '--password=super_secret', '--action=shipping', '--timeout=45', '-t']);
    assert.strictEqual(parsed.username, 'admin_user');
    assert.strictEqual(parsed.password, 'super_secret');
    assert.strictEqual(parsed.action, 'shipping');
    assert.strictEqual(parsed.pauseTimeoutMs, 45000);
    assert.strictEqual(parsed.isTestMode, true);
    assert.strictEqual(parsed.errors.length, 0);
  });

  test('CLI parseArgs detects missing values, invalid actions, and invalid timeout values', () => {
    const missingValue = parseArgs(['--username']);
    assert.ok(missingValue.errors.length > 0, 'Should record error for missing username value');

    const invalidAction = parseArgs(['--action', 'nonexistent_action']);
    assert.ok(invalidAction.errors.length > 0, 'Should record error for invalid action');

    const unknownFlag = parseArgs(['--unknown-flag']);
    assert.ok(unknownFlag.errors.length > 0, 'Should record error for unknown flag');

    const negativeTimeout = parseArgs(['--timeout', '-10']);
    assert.ok(negativeTimeout.errors.length > 0, 'Should record error for negative timeout');

    const nonNumericTimeout = parseArgs(['--timeout=abc']);
    assert.ok(nonNumericTimeout.errors.length > 0, 'Should record error for non-numeric timeout');
  });

  console.log(`\n================================================================================`);
  console.log(`Verification Results: Passed ${passed}/${total} assertions.`);
  console.log(`================================================================================\n`);

  if (passed === total) {
    console.log('✅ ALL VERIFICATION TESTS PASSED SUCCESSFULLY!');
  } else {
    console.error(`❌ SOME TESTS FAILED: ${total - passed} failures`);
    process.exit(1);
  }
}

runVerification();
