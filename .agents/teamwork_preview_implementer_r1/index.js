#!/usr/bin/env node
/**
 * EV select - Shopee Seller Center CLI Runner
 * สคริปต์หลักสำหรับเรียกใช้งาน Automation จาก Command Line
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { ShopeeAutomation } from './shopeeAutomation.js';
import { shopProfileData } from './data/shopProfile.js';
import { productListingsData } from './data/productListings.js';
import { shippingPaymentConfigData } from './data/shippingPaymentConfig.js';

export function parseArgs(argv = process.argv.slice(2)) {
  const options = {
    username: process.env.SHOPEE_USERNAME || '',
    password: process.env.SHOPEE_PASSWORD || '',
    headless: false,
    isTestMode: false,
    action: 'all',
    pauseTimeoutMs: 120000,
    errors: []
  };

  const validActions = ['all', 'login', 'profile', 'products', 'shipping'];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--username' || arg === '-u') {
      if (i + 1 >= argv.length || argv[i + 1].startsWith('-')) {
        options.errors.push('กรุณาระบุชื่อผู้ใช้หลังพารามิเตอร์ --username / -u');
      } else {
        options.username = argv[++i];
      }
    } else if (arg === '--password' || arg === '-p') {
      if (i + 1 >= argv.length || argv[i + 1].startsWith('-')) {
        options.errors.push('กรุณาระบุรหัสผ่านหลังพารามิเตอร์ --password / -p');
      } else {
        options.password = argv[++i];
      }
    } else if (arg === '--headless') {
      options.headless = true;
    } else if (arg === '--test' || arg === '-t') {
      options.isTestMode = true;
    } else if (arg === '--action' || arg === '-a') {
      if (i + 1 >= argv.length || argv[i + 1].startsWith('-')) {
        options.errors.push('กรุณาระบุขั้นตอนการทำงานหลังพารามิเตอร์ --action / -a (all, login, profile, products, shipping)');
      } else {
        const rawAction = argv[++i];
        const normalizedAction = (rawAction || '').toLowerCase().trim();
        if (!validActions.includes(normalizedAction)) {
          options.errors.push(`ไม่รู้จักขั้นตอนการทำงาน "${rawAction}" (ตัวเลือกที่รองรับ: ${validActions.join(', ')})`);
        } else {
          options.action = normalizedAction;
        }
      }
    } else if (arg === '--timeout') {
      if (i + 1 >= argv.length || argv[i + 1].startsWith('-')) {
        options.errors.push('กรุณาระบุระยะเวลา timeout เป็นตัวเลขวินาทีหลัง --timeout');
      } else {
        const sec = parseInt(argv[++i], 10);
        if (!isNaN(sec) && sec > 0) {
          options.pauseTimeoutMs = sec * 1000;
        } else {
          options.errors.push('ค่า timeout ต้องเป็นตัวเลขจำนวนเต็มบวก');
        }
      }
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      return { ...options, helpRequested: true };
    } else {
      options.errors.push(`ไม่รู้จักตัวเลือกคำสั่ง "${arg}" (พิมพ์ --help เพื่อดูวิธีใช้งาน)`);
    }
  }

  return options;
}

export function printHelp() {
  console.log(`
================================================================================
⚡ EV select — Shopee Seller Center Automation CLI ⚡
================================================================================
คำสั่งใช้งาน:
  node index.js [ตัวเลือก]

ตัวเลือก (Options):
  -u, --username <string>   ชื่อผู้ใช้, อีเมล หรือเบอร์โทรศัพท์สำหรับเข้าสู่ระบบ Shopee
  -p, --password <string>   รหัสผ่านสำหรับเข้าสู่ระบบ Shopee
  --headless                เปิดเบราว์เซอร์แบบเบื้องหลัง (Headless Mode)
  -t, --test                รันในโหมดทดสอบด้วยข้อมูลจำลอง (Test Mode with Dummy Data)
  --timeout <seconds>       กำหนดระยะเวลารอ OTP ก่อน Timeout (วินาที)
  -a, --action <string>     เลือกขั้นตอนการทำงาน:
                              - all      : รันทุกขั้นตอนตั้งแต่ล็อกอินจนถึงตั้งค่าเสร็จสิ้น (ค่าเริ่มต้น)
                              - login    : เฉพาะขั้นตอนล็อกอินและทดสอบ OTP Pause
                              - profile  : เฉพาะขั้นตอนแสดงและตั้งค่าโปรไฟล์ร้านค้า
                              - products : เฉพาะขั้นตอนแสดงรายการร่างสินค้าภาษาไทย
                              - shipping : เฉพาะขั้นตอนแสดงการตั้งค่าขนส่งและการรับเงิน
  -h, --help                แสดงคู่มือการใช้งานนี้

ตัวอย่างการใช้งาน:
  node index.js --username "my_shopee_seller" --password "mypassword123"
  node index.js --test
  node index.js --action products
================================================================================
`);
}

export async function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);

  if (options.helpRequested) {
    return 0;
  }

  if (options.errors && options.errors.length > 0) {
    for (const err of options.errors) {
      console.error(`❌ ข้อผิดพลาด: ${err}`);
    }
    process.exitCode = 1;
    return 1;
  }

  console.log('⚡ กำลังเริ่มต้นระบบอัตโนมัติ Shopee Seller Center สำหรับร้าน "EV select"...');
  
  const automation = new ShopeeAutomation({
    headless: options.headless,
    isTestMode: options.isTestMode,
    pauseTimeoutMs: options.pauseTimeoutMs,
    username: options.username,
    password: options.password
  });

  // Graceful shutdown handling for signals
  let isShuttingDown = false;
  const signalHandler = async (sig) => {
    if (isShuttingDown) return;
    isShuttingDown = true;
    console.log(`\n🛑 ตรวจพบสัญญาณ ${sig} กำลังปิดการทำงานและเคลียร์ทรัพยากรอย่างปลอดภัย...`);
    await automation.close();
    process.exit(130);
  };

  const sigintListener = () => signalHandler('SIGINT');
  const sigtermListener = () => signalHandler('SIGTERM');

  process.once('SIGINT', sigintListener);
  process.once('SIGTERM', sigtermListener);

  try {
    if (options.action === 'profile') {
      await automation.setupShopProfile(shopProfileData);
    } else if (options.action === 'products') {
      await automation.draftInitialListings(productListingsData);
    } else if (options.action === 'shipping') {
      await automation.configureShippingAndPayment(shippingPaymentConfigData);
    } else if (options.action === 'login') {
      await automation.initBrowser();
      await automation.navigateAndFillLogin(options.username, options.password);
      await automation.waitForManualVerification({ isTestMode: options.isTestMode });
      await automation.close();
    } else if (options.action === 'all') {
      await automation.runAll({
        username: options.username,
        password: options.password
      });
    }
    return 0;
  } catch (err) {
    console.error(`❌ เกิดข้อผิดพลาดในการทำงาน: ${err.message}`);
    process.exitCode = 1;
    return 1;
  } finally {
    process.removeListener('SIGINT', sigintListener);
    process.removeListener('SIGTERM', sigtermListener);
    await automation.close();
  }
}

// Entrypoint detection
const isDirectRun = Boolean(
  process.argv[1] &&
  (path.resolve(process.argv[1]) === fileURLToPath(import.meta.url) ||
   path.basename(process.argv[1]) === 'index.js')
);

if (isDirectRun) {
  main().then((code) => {
    if (code !== 0 && process.exitCode === 0) {
      process.exitCode = code;
    }
  });
}
