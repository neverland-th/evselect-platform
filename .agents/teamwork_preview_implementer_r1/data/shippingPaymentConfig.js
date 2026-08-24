/**
 * EV select - Shipping & Payment Configuration & Setup Guide (Thai)
 * ข้อมูลการตั้งค่าระบบขนส่ง การชำระเงิน และการลงทะเบียนภาษีร้านค้าภาษาไทย
 */

export const shippingPaymentConfigData = {
  // 1. การตั้งค่าระบบขนส่ง (Shipping Settings)
  shippingChannels: {
    standardDelivery: {
      channelName: "Standard Delivery (ส่งธรรมดาในประเทศ)",
      enabled: true,
      supportedCouriers: [
        { name: "SPX Express", codEnabled: true, dropOffAvailable: true, pickupAvailable: true },
        { name: "Flash Express", codEnabled: true, dropOffAvailable: true, pickupAvailable: true },
        { name: "Kerry Express / KEX", codEnabled: true, dropOffAvailable: true, pickupAvailable: true },
        { name: "J&T Express", codEnabled: true, dropOffAvailable: true, pickupAvailable: true }
      ],
      descriptionThai: "รองรับสินค้าขนาดปกติและน้ำหนักไม่เกิน 20 กก. เช่น เครื่องชาร์จพกพา สายชาร์จ หัวแปลง และอุปกรณ์เสริม",
      daysToShip: 2 // ระยะเวลาเตรียมจัดส่งปกติ (วัน)
    },
    standardDeliveryBulky: {
      channelName: "Standard Delivery Bulky (ส่งสินค้าขนาดใหญ่)",
      enabled: true,
      supportedCouriers: [
        { name: "Flash Express Bulky", codEnabled: false },
        { name: "Best Express Bulky", codEnabled: false }
      ],
      descriptionThai: "สำหรับสินค้าที่มีขนาดใหญ่พิเศษหรือน้ำหนักมาก เช่น เครื่องชาร์จ Wallbox พร้อมเสาติดตั้งเหล็ก",
      daysToShip: 2
    },
    pickupAddress: {
      contactName: "EV select Warehouse (คลังสินค้าหลัก)",
      phone: "02-123-4567",
      addressLine: "99/88 ซอยสุขุมวิท 63 แขวงคลองตันเหนือ เขตวัฒนา",
      province: "กรุงเทพมหานคร",
      district: "วัฒนา",
      subdistrict: "คลองตันเหนือ",
      postalCode: "10110",
      isDefaultPickup: true,
      isDefaultReturn: true
    }
  },

  // 2. การตั้งค่าระบบชำระเงิน (Payment Settings)
  paymentMethods: {
    bankAccount: {
      bankName: "ธนาคารกสิกรไทย (Kasikornbank - KBANK)",
      accountName: "บริษัท อีวี ซีเล็คท์ จำกัด (EV select Co., Ltd.)",
      accountNumberMasked: "XXX-X-XX456-7",
      purpose: "บัญชีรับเงินและถอนเงิน Shopee Seller Balance",
      verificationStatus: "พร้อมส่งเอกสารยืนยันตัวตน (Ready for KYC Verification)"
    },
    acceptedCustomerPaymentMethods: [
      {
        method: "QR พร้อมเพย์ (PromptPay QR)",
        enabled: true,
        benefitThai: "ไม่มีค่าธรรมเนียมเพิ่มเติม ลูกค้าชำระเงินสะดวกผ่าน Mobile Banking ทุกธนาคาร"
      },
      {
        method: "บัตรเครดิต / บัตรเดบิต (Credit / Debit Card)",
        enabled: true,
        benefitThai: "รองรับ Visa, Mastercard, JCB, UnionPay เพิ่มความมั่นใจในการชำระเงิน"
      },
      {
        method: "โปรแกรมผ่อนชำระ 0% (Special 0% Installment Plan)",
        enabled: true,
        termsMonths: [3, 6, 10],
        participatingBanks: ["KBANK", "SCB", "BBL", "Krungsri", "KTC", "TTB"],
        benefitThai: "ช่วยเพิ่มยอดขายสินค้ามูลค่าสูง เช่น เครื่องชาร์จ Wallbox 7.4kW/22kW และ Portable Charger"
      },
      {
        method: "SPayLater (ช้อปก่อนจ่ายทีหลัง)",
        enabled: true,
        benefitThai: "ขยายฐานลูกค้ากลุ่มวัยทำงานและผู้ใช้รถยนต์ไฟฟ้าที่ต้องการความคล่องตัวทางการเงิน"
      },
      {
        method: "ShopeePay / Shopee Coins",
        enabled: true,
        benefitThai: "รับสิทธิประโยชน์ส่วนลดและโค้ดส่งฟรีจาก Shopee"
      },
      {
        method: "เก็บเงินปลายทาง (Cash on Delivery - COD)",
        enabled: true,
        benefitThai: "สร้างความไว้วางใจสำหรับลูกค้าใหม่ที่สั่งซื้ออุปกรณ์เสริมและสายชาร์จ"
      }
    ]
  },

  // 3. ข้อมูลการลงทะเบียนภาษีและเอกสารนิติบุคคล (Tax & Business Invoice)
  taxAndInvoicing: {
    taxRegistrationType: "นิติบุคคล (Juristic Person / Corporate)",
    taxId: "0105567001234",
    companyName: "บริษัท อีวี ซีเล็คท์ จำกัด",
    vatRegistered: true,
    eTaxInvoiceEnabled: true,
    eTaxEmail: "tax@evselect.co.th",
    requiredDocumentsThai: [
      "สำเนาหนังสือรับรองการจดทะเบียนนิติบุคคล (อายุไม่เกิน 6 เดือน)",
      "สำเนา ภ.พ.20 (ใบทะเบียนภาษีมูลค่าเพิ่ม)",
      "สำเนาหน้าสมุดบัญชีธนาคารในนามบริษัท",
      "สำเนาบัตรประชาชนกรรมการผู้มีอำนาจลงนาม"
    ]
  },

  // 4. ขั้นตอนการตั้งค่าแบบละเอียดในระบบ Shopee Seller Center (Step-by-step Setup Guide)
  setupGuideThai: [
    {
      stepNumber: 1,
      title: "การตั้งค่าขนส่ง (Shipping Settings)",
      url: "https://seller.shopee.co.th/portal/settings/shipping",
      steps: [
        "1.1 เข้าสู่เมนู การตั้งค่าการจัดส่ง (Shipping Setting)",
        "1.2 เปิดใช้งาน Standard Delivery และเลือกบริษัทขนส่งหลัก (SPX Express, Flash, Kerry)",
        "1.3 เปิดใช้งาน Standard Delivery Bulky สำหรับสินค้ากล่องใหญ่เกิน 20 กก.",
        "1.4 ตรวจสอบและบันทึกที่อยู่คลังสินค้าต้นทางสำหรับการเข้ารับพัสดุ (Pickup Address)"
      ]
    },
    {
      stepNumber: 2,
      title: "การผูกบัญชีธนาคารและการรับเงิน (Bank Account & Payment)",
      url: "https://seller.shopee.co.th/portal/finance/wallet/cards",
      steps: [
        "2.1 เข้าสู่เมนู บัญชีธนาคาร / บัตร (Bank Accounts / Cards)",
        "2.2 คลิก เพิ่มบัญชีธนาคาร (Add Bank Account)",
        "2.3 กรอกชื่อบัญชีและเลขที่บัญชีของบริษัท อีวี ซีเล็คท์ จำกัด",
        "2.4 รหัส OTP จะถูกส่งไปยังเบอร์โทรศัพท์ที่ลงทะเบียนเพื่อยืนยันความปลอดภัย",
        "2.5 เข้าสู่เมนู การชำระเงิน และเปิดใช้งานระบบผ่อนชำระ 0% (Installment)"
      ]
    },
    {
      stepNumber: 3,
      title: "การลงทะเบียนใบกำกับภาษีอิเล็กทรอนิกส์ (e-Tax Invoice Registration)",
      url: "https://seller.shopee.co.th/portal/settings/shop/tax",
      steps: [
        "3.1 เข้าสู่เมนู ข้อมูลภาษี (Tax Information)",
        "3.2 เลือกประเภท นิติบุคคล และกรอกเลขประจำตัวผู้เสียภาษี 13 หลัก",
        "3.3 อัปโหลดสำเนา ภ.พ.20 และหนังสือรับรองบริษัท",
        "3.4 เปิดฟังก์ชัน e-Tax Invoice เพื่อส่งใบกำกับภาษีให้ลูกค้าอัตโนมัติผ่านอีเมล"
      ]
    }
  ]
};

export default shippingPaymentConfigData;
