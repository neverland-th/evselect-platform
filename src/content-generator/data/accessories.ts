/**
 * EVSELECT Genuine Accessory Fitment Matrix
 * 
 * Catalog of 100% QC Verified Right-Hand Drive (RHD) accessories,
 * heat-protection gear, interior protection, and home charging equipment.
 */

import { AccessoryItem } from '../types';

export const accessories: AccessoryItem[] = [
  // 1. Panoramic Glass Roof Sunshades (Heat Defense)
  {
    sku: 'EVS-SUN-SEAL-SILVER',
    nameThai: 'ม่านบังแดดหลังคาแก้ว Nano-Silver Reflex ตรงรุ่น BYD Seal',
    category: 'Heat Defense',
    priceTHB: 1290,
    compatibleVehicleIds: ['byd-seal'],
    descriptionThai: 'ม่านบังแดดโครงสปริงแบบ 2 ชั้น เคลือบสารสะท้อนรังสี UV และอินฟราเรด ติดตั้งเข้ารูปกับขอบหลังคาแก้ว BYD Seal แนบสนิท ไม่หย่อนคล้อย',
    benefitsThai: [
      'ลดอุณหภูมิห้องโดยสารลงได้ถึง 10-15°C ขณะจอดตากแดด',
      'ช่วยให้แอร์รถยนต์เย็นเร็วขึ้น ประหยัดพลังงานแบตเตอรี่',
      'เนื้อผ้าตาข่ายความหนาแน่นสูง ไม่บดบังทัศนวิสัยเมื่อมองจากภายใน',
      'พับเก็บง่ายในถุงซิปพกพา สะดวกเมื่อต้องการรับแสง',
    ],
    materialThai: 'High-Density Mesh Fabric + Nano-Silver UV Reflective Layer',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/sunroof-shade.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/byd-seal-sunroof-shade',
  },
  {
    sku: 'EVS-SUN-M3H-SILVER',
    nameThai: 'ม่านบังแดดหลังคาแก้ว Dual-Layer Reflex ตรงรุ่น Tesla Model 3 Highland',
    category: 'Heat Defense',
    priceTHB: 1390,
    compatibleVehicleIds: ['tesla-model-3-highland'],
    descriptionThai: 'ม่านบังแดดตรงรุ่นสำหรับ Model 3 Highland แยกชิ้นหน้า-หลัง เข้ารูปตามแนวหลังคาแก้วแบบ 100% ไม่มีแสงเล็ดลอดตามมุม',
    benefitsThai: [
      'ป้องกันความร้อนสะสมที่ศีรษะคนขับและผู้โดยสารตอนหลัง',
      'ลดการทำงานหนักของคอมเพรสเซอร์แอร์ในสภาพอากาศ 40°C',
      'คลิปล็อกแบบปรับปรุงใหม่ ไม่ทำให้ขอบยางกระจกเป็นรอย',
    ],
    materialThai: 'Dual-Layer Heat Insulation with Manganese Steel Frame',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/sunroof-shade.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/tesla-model-3-highland-sunshade',
  },
  {
    sku: 'EVS-SUN-MY-SILVER',
    nameThai: 'ม่านบังแดดหลังคาแก้ว UV-Reflex ตรงรุ่น Tesla Model Y',
    category: 'Heat Defense',
    priceTHB: 1490,
    compatibleVehicleIds: ['tesla-model-y'],
    descriptionThai: 'ม่านกันแดดไซส์ใหญ่พิเศษเข้ารูปกระจกบานเดี่ยวของ Model Y ป้องกันแดดเผาห้องโดยสารขนาดใหญ่ได้อย่างมีประสิทธิภาพ',
    benefitsThai: [
      'คลุมเต็มพื้นที่กระจกพาโนรามา ไม่หย่อนตัวตรงกลาง',
      'สะท้อนรังสี UV ได้ 99% และรังสีความร้อน 85%',
    ],
    materialThai: 'Nano Titanium Silver UV Blocking Coating',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/sunroof-shade.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/tesla-model-y-sunshade',
  },
  {
    sku: 'EVS-SUN-ZEEKR-X',
    nameThai: 'ม่านบังแดดกระจกหลังคาตรงรุ่น Zeekr X (RHD Spec)',
    category: 'Heat Defense',
    priceTHB: 1290,
    compatibleVehicleIds: ['zeekr-x'],
    descriptionThai: 'ม่านบังแดดสำหรับ Zeekr X ดีไซน์โมเดิร์นเข้ากับห้องโดยสารสไตล์สแกนดิเนเวีย ล็อกแน่นหนา',
    benefitsThai: [
      'ลดความร้อนสะสมบนหลังคา ช่วยให้แอร์เย็นฉ่ำรวดเร็ว',
      'เนื้อผ้าพรีเมียมสีเข้ากับโทนเพดานรถ',
    ],
    materialThai: 'Reflective Thermal Mesh Fabric',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/sunroof-shade.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/zeekr-x-sunshade',
  },

  // 2. All-Weather 3D TPE Floor Mats (Interior Protection)
  {
    sku: 'EVS-MAT-SEAL-RHD',
    nameThai: 'ชุดพรมปูพื้น TPE 3D ยางพรีเมียม ไร้กลิ่น ตรงรุ่น BYD Seal (พวงมาลัยขวา)',
    category: 'Interior Protection',
    priceTHB: 2890,
    compatibleVehicleIds: ['byd-seal'],
    descriptionThai: 'พรมยาง TPE หล่อขึ้นรูป 3 มิติ สแกนด้วยเลเซอร์จากพื้นรถ BYD Seal พวงมาลัยขวาสเปกไทยแท้ ขอบยกสูงกันน้ำหกและคราบโคลน 100%',
    benefitsThai: [
      'ผลิตจากยาง TPE แท้ 100% ไร้กลิ่นสารเคมี ปลอดสารพิษ ทนความร้อนเมืองไทย',
      'ขอบยกสูงดักจับทราย น้ำฝน และคราบกาแฟ ไม่ให้ซึมลงพรมกำมะหยี่เดิม',
      'ทำความสะอาดง่าย เพียงฉีดน้ำล้างแล้วเช็ดแห้งใน 5 นาที',
      'ออกแบบปุ่มล็อกตรงตำแหน่งพรมเดิม ไม่เลื่อนไถลขัดแป้นคันเร่ง/เบรก',
    ],
    materialThai: 'Pure Thermoplastic Elastomer (TPE) Grade Medical Safe',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/tpe-floormats.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/byd-seal-tpe-floormat',
  },
  {
    sku: 'EVS-MAT-M3H-RHD',
    nameThai: 'ชุดพรมปูพื้น TPE 3D เลเซอร์สแกน ตรงรุ่น Tesla Model 3 Highland (RHD)',
    category: 'Interior Protection',
    priceTHB: 2990,
    compatibleVehicleIds: ['tesla-model-3-highland'],
    descriptionThai: 'พรม TPE เกรดพรีเมียมสำหรับ Model 3 Highland เข้ารูปแนวคอนโซลและที่พักเท้าพวงมาลัยขวาอย่างสมบูรณ์แบบ',
    benefitsThai: [
      'พื้นผิวลายสปอร์ตเสริมความสวยงามให้ห้องโดยสารมินิมอล',
      'ไม่บวม ไม่เสียรูปทรง แม้จอดตากแดดจัด 40°C เป็นเวลานาน',
      'ล็อกแน่นสนิท ปลอดภัยสูงสุดในการขับขี่',
    ],
    materialThai: 'High-Purity All-Weather TPE',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/tpe-floormats.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/tesla-model-3-highland-tpe-floormat',
  },
  {
    sku: 'EVS-MAT-ATTO3-RHD',
    nameThai: 'ชุดพรม TPE 3D ขอบสูงกันน้ำ ตรงรุ่น BYD Atto 3 (พวงมาลัยขวา)',
    category: 'Interior Protection',
    priceTHB: 2690,
    compatibleVehicleIds: ['byd-atto-3'],
    descriptionThai: 'พรมยาง TPE สำหรับครอบครัว เข้ารูปแนวเบาะหน้าและแถวหลังแบบไร้รอยต่อ',
    benefitsThai: [
      'ป้องกันเศษขนมและของเหลวหกเลอะสำหรับครอบครัวที่มีเด็กเล็ก',
      'ทนทาน ไม่เปื่อยยุ่ย ใช้งานได้ยาวนานกว่า 5 ปี',
    ],
    materialThai: 'Eco-Friendly TPE Material',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/tpe-floormats.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/byd-atto3-tpe-floormat',
  },
  {
    sku: 'EVS-MAT-S07-RHD',
    nameThai: 'ชุดพรมปูพื้น TPE 3D ตรงรุ่น Changan Deepal S07 (RHD)',
    category: 'Interior Protection',
    priceTHB: 2890,
    compatibleVehicleIds: ['deepal-s07'],
    descriptionThai: 'พรมปูพื้นสเปกตรงรุ่น Deepal S07 สแกน 3D ครอบคลุมแถวหน้าและแถวหลัง',
    benefitsThai: [
      'ดีไซน์ดุดันเข้ากับความล้ำสมัยของห้องโดยสาร Deepal',
      'ปกป้องพรมเดิมจากการเหยียบย่ำในฤดูฝน',
    ],
    materialThai: 'Heavy-Duty Waterproof TPE',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/tpe-floormats.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/deepal-s07-tpe-floormat',
  },
  {
    sku: 'EVS-MAT-MG4-RHD',
    nameThai: 'ชุดพรมปูพื้น TPE 3D สปอร์ต ตรงรุ่น MG4 Electric (RHD)',
    category: 'Interior Protection',
    priceTHB: 2590,
    compatibleVehicleIds: ['mg4-electric'],
    descriptionThai: 'พรมเข้ารูปสำหรับสายซิ่ง MG4 กระชับส้นเท้า ไม่ลื่นเวลาเหยียบคันเร่งเข้าโค้ง',
    benefitsThai: [
      'พื้นผิวกันลื่นพิเศษ เสริมความมั่นใจในการควบคุมรถ',
      'ล้างทำความสะอาดง่าย ไร้กลิ่นอับชื้น',
    ],
    materialThai: 'Sport-Texture TPE',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/tpe-floormats.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/mg4-tpe-floormat',
  },
  {
    sku: 'EVS-MAT-EX2-RHD',
    nameThai: 'ชุดพรมปูพื้น TPE 3D ตรงรุ่น Geely EX2 (Xingyuan)',
    category: 'Interior Protection',
    priceTHB: 2290,
    compatibleVehicleIds: ['geely-ex2'],
    descriptionThai: 'พรมตรงรุ่นสำหรับ Geely EX2 ซิตี้คาร์ไฟฟ้า พอดีทุกซอกมุมห้องโดยสาร',
    benefitsThai: [
      'ขนาดกะทัดรัด น้ำหนักเบา ถอดล้างสะดวก',
      'ราคาประหยัด คุ้มค่า คุณภาพเกินราคา',
    ],
    materialThai: 'Lightweight TPE Polymer',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/tpe-floormats.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/geely-ex2-tpe-floormat',
  },

  // 3. Screen Protectors (Screen & Electronics)
  {
    sku: 'EVS-SCR-SEAL-156',
    nameThai: 'ฟิล์มกระจกนิรภัย 9H แบบด้านตัดแสงสะท้อน สำหรับจอหมุน BYD Seal (15.6 นิ้ว)',
    category: 'Screen & Electronics',
    priceTHB: 690,
    compatibleVehicleIds: ['byd-seal'],
    descriptionThai: 'ฟิล์มกระจก 9H เคลือบด้าน AG (Anti-Glare) ออกแบบสำหรับจอควบคุมกลางขนาด 15.6 นิ้ว ของ BYD Seal โดยเฉพาะ',
    benefitsThai: [
      'ตัดแสงสะท้อนจากแดดภายนอก มองจอได้ชัดเจนแม้ยามแดดจัด',
      'ป้องกันรอยนิ้วมือและคราบมัน สัมผัสลื่นมือ ไม่หน่วงทัชสกรีน',
      'ป้องกันรอยขีดข่วนจากเล็บและกุญแจ',
    ],
    materialThai: '9H Tempered Glass with Anti-Glare Matte Coating',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/screen-protector.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/byd-seal-matte-screen-protector',
  },
  {
    sku: 'EVS-SCR-M3H-DUAL',
    nameThai: 'ชุดฟิล์มกระจก 9H จอหน้า 15.4" + จอหลัง 8" ตรงรุ่น Tesla Model 3 Highland',
    category: 'Screen & Electronics',
    priceTHB: 890,
    compatibleVehicleIds: ['tesla-model-3-highland'],
    descriptionThai: 'ชุดฟิล์มกระจกคู่สำหรับจอหน้าและจอผู้โดยสารแถวหลังของ Model 3 Highland ตัดขอบ 2.5D โค้งมนเนียนตา',
    benefitsThai: [
      'ปกป้องทั้งหน้าจอหลักและหน้าจอหลังของเด็กๆ แถวสอง',
      'ความคมชัดระดับ HD พร้อมชั้นเคลือบ Hydrophobic กันคราบน้ำมัน',
    ],
    materialThai: '9H Ultra-Clear AGC Japanese Glass',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/screen-protector.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/tesla-model-3-highland-dual-screen-protector',
  },
  {
    sku: 'EVS-SCR-S07-SUNFLOWER',
    nameThai: 'ฟิล์มกระจก 9H หน้าจอหมุน Sunflower 15.6 นิ้ว ตรงรุ่น Deepal S07',
    category: 'Screen & Electronics',
    priceTHB: 750,
    compatibleVehicleIds: ['deepal-s07'],
    descriptionThai: 'ฟิล์มกระจกนิรภัยสำหรับจอ Sunflower ทัชสกรีนแม่นยำ ไม่รบกวนระบบหันจออัตโนมัติ',
    benefitsThai: [
      'เคลือบสารลดรอยนิ้วมือ ทนทานต่อการเช็ดทำความสะอาด',
      'ตัดขอบมุมมน ไม่บาดนิ้วขณะเลื่อนปรับจอ',
    ],
    materialThai: '9H Matte Tempered Glass',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/screen-protector.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/deepal-s07-screen-protector',
  },

  // 4. Organizers & Cabin Convenience
  {
    sku: 'EVS-ORG-SEAL-TRAY',
    nameThai: 'ถาดจัดระเบียบคอนโซลกลาง 2 ชั้น ซิลิโคนกันลื่น ตรงรุ่น BYD Seal',
    category: 'Organizers',
    priceTHB: 490,
    compatibleVehicleIds: ['byd-seal'],
    descriptionThai: 'ถาดเก็บของเสริมใต้ที่พักแขน แบ่งช่องใส่นาฬิกา คีย์การ์ด เหรียญ และแว่นตาอย่างเป็นระเบียบ',
    benefitsThai: [
      'เพิ่มพื้นที่ใช้สอยคอนโซลกลางอีก 100%',
      'แผ่นรองซิลิโคนซับเสียง ไม่มีเสียงของกลิ้งกระทบขณะเลี้ยวหรือเบรก',
    ],
    materialThai: 'ABS Engineering Plastic + Food-Grade Silicone Mat',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/tray-organizer.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/byd-seal-center-console-tray',
  },
  {
    sku: 'EVS-PAD-WIRELESS-SILICONE',
    nameThai: 'แผ่นซิลิโคนกันลื่นแท่นชาร์จไร้สาย Dual Wireless Pad ตรงรุ่น Tesla Model 3/Y',
    category: 'Organizers',
    priceTHB: 390,
    compatibleVehicleIds: ['tesla-model-3-highland', 'tesla-model-y'],
    descriptionThai: 'แผ่นซิลิโคนวางบนแท่นชาร์จไร้สาย กันฝุ่นสะสม และกันโทรศัพท์ลื่นหลุดตำแหน่งชาร์จขณะเข้าโค้งแรง',
    benefitsThai: [
      'บางพิเศษ ไม่ขัดขวางกำลังการจ่ายไฟไร้สาย 15W',
      'ล้างน้ำทำความสะอาดง่าย ไม่ทิ้งคราบเหนียว',
    ],
    materialThai: 'Heat-Resistant Soft Silicone',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/wireless-pad.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/tesla-wireless-charging-mat',
  },

  // 5. Home Charging Equipment & Wallboxes
  {
    sku: 'EVS-CHG-WALLBOX-7KW',
    nameThai: 'EVSELECT Smart Wallbox Charger 7.4kW Type 2 (WiFi/Bluetooth & RFID)',
    category: 'Charging Gear',
    priceTHB: 18500,
    compatibleVehicleIds: ['ALL'],
    descriptionThai: 'เครื่องชาร์จรถยนต์ไฟฟ้าติดผนังสำหรับบ้านพักอาศัย ระบบไฟ 1 เฟส 32A มาตรฐานความปลอดภัย มอก. พร้อมระบบตัดไฟรั่ว RCD Type A + 6mA DC ในตัว',
    benefitsThai: [
      'รองรับการตั้งเวลาชาร์จช่วงค่าไฟถูก TOU (22:00-09:00 น.) อัตโนมัติผ่านสมาร์ทโฟน',
      'ปลอดภัยสูงสุดด้วยระบบป้องกันไฟกระชาก ไฟตก ไฟเกิน และความร้อนสะสม',
      'กันน้ำกันฝุ่นมาตรฐาน IP65 ติดตั้งภายนอกอาคารได้ ทนแดดทนฝนเมืองไทย',
      'รับประกันศูนย์ไทย 2 ปีเต็ม พร้อมทีมช่างสำรวจหน้างานและติดตั้งตามหลัก MEA/PEA',
    ],
    materialThai: 'Flame-Retardant Polycarbonate + IP65 Waterproof Shell',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/hero-bg.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/smart-wallbox-7kw-ev-charger',
  },
  {
    sku: 'EVS-CHG-PORTABLE-32A',
    nameThai: 'สายชาร์จพกพาอัจฉริยะ ปรับกระแสไฟได้ 8A-32A Type 2 (พร้อมหัวแปลงชูโก้)',
    category: 'Charging Gear',
    priceTHB: 8900,
    compatibleVehicleIds: ['ALL'],
    descriptionThai: 'สายชาร์จพกพาสำหรับสายเดินทางและแคมปิ้ง หน้าจอ LCD แสดงสถานะแรงดันไฟ กระแสไฟ และพลังงานสะสมแบบ Realtime',
    benefitsThai: [
      'ปรับระดับกระแสไฟได้ 8A, 10A, 13A, 16A, 32A ตามขนาดเบรกเกอร์ของสถานที่',
      'สายยาว 5 เมตร ยางหุ้ม TPU คุณภาพสูง ทนการเหยียบทับของล้อรถ',
      'แถมฟรีหัวแปลงปลั๊กบ้านสำหรับฉุกเฉินและกระเป๋าเก็บกันกระแทก',
    ],
    materialThai: 'TPU High Flexibility Cable + IP66 Control Box',
    fitmentGuarantee: '100% Verified RHD',
    imageUrl: '/images/hero-bg.jpg',
    shopeeUrl: 'https://shopee.co.th/evselect/portable-ev-charger-32a',
  },
];

/**
 * Returns all accessories in the database
 */
export function getAllAccessories(): AccessoryItem[] {
  return accessories;
}

/**
 * Returns accessories compatible with a specific vehicle ID
 * (Includes universal accessories marked with 'ALL')
 */
export function getAccessoriesForVehicle(vehicleId: string): AccessoryItem[] {
  const normalizedId = vehicleId.toLowerCase();
  return accessories.filter(
    (item) => item.compatibleVehicleIds.includes('ALL') || item.compatibleVehicleIds.includes(normalizedId)
  );
}

/**
 * Retrieves an accessory by its SKU code
 */
export function getAccessoryBySku(sku: string): AccessoryItem | undefined {
  return accessories.find((item) => item.sku.toLowerCase() === sku.toLowerCase());
}

/**
 * Filters accessories by category
 */
export function getAccessoriesByCategory(category: string): AccessoryItem[] {
  return accessories.filter((item) => item.category.toLowerCase() === category.toLowerCase());
}
