/**
 * Thailand Charging Networks & TOU Electricity Economics Database
 * 
 * Authoritative data on major Thai Charge Point Operators (CPOs),
 * MEA/PEA Time-of-Use (TOU) tariff structures, and running cost calculation models.
 */

import { ChargingNetworkInfo, TOUComparison } from '../types';

/**
 * Major Charge Point Operators (CPOs) across Thailand
 */
export const chargingNetworks: ChargingNetworkInfo[] = [
  {
    id: 'ptt-ev-station-pluz',
    name: 'PTT EV Station PluZ',
    operatorThai: 'บริษัท ปตท. น้ำมันและการค้าปลีก จำกัด (มหาชน) (OR)',
    appName: 'EV Station PluZ',
    appDownloadNoteThai: 'ดาวน์โหลดได้ทั้ง iOS และ Android รองรับการจองหัวชาร์จล่วงหน้า 24 ชม.',
    maxDCSpeedKw: 180,
    connectorTypes: ['CCS2', 'CHAdeMO', 'Type 2'],
    tariffStructure: {
      peakRatePerKwh: 7.7,
      offPeakRatePerKwh: 6.0,
      notesThai: 'On-Peak: จันทร์-ศุกร์ 09:00-22:00 น. | Off-Peak: 22:00-09:00 น. และเสาร์-อาทิตย์ วันหยุดนักขัตฤกษ์ทั้งวัน',
    },
    coverageHighlightsThai: 'ครอบคลุมสถานีบริการน้ำมัน PTT Station กว่า 77 จังหวัดทั่วประเทศ มากกว่า 800 สถานี',
    reliabilityScore: 5,
    highwayCoverage: 'High',
    bookingSupported: true,
  },
  {
    id: 'pea-volta',
    name: 'PEA VOLTA',
    operatorThai: 'การไฟฟ้าส่วนภูมิภาค (PEA)',
    appName: 'PEA VOLTA',
    appDownloadNoteThai: 'แอปหลักสำหรับการเดินทางต่างจังหวัด ครอบคลุมเส้นทางหลวงสายหลักและสำนักงาน กฟภ.',
    maxDCSpeedKw: 120,
    connectorTypes: ['CCS2', 'CHAdeMO', 'Type 2'],
    tariffStructure: {
      peakRatePerKwh: 7.5,
      offPeakRatePerKwh: 6.5,
      notesThai: 'อัตราค่าบริการตามช่วงเวลาของ กฟภ. พร้อมระบบตัดเงินผ่าน Volta Wallet',
    },
    coverageHighlightsThai: 'สถานีชาร์จตามเส้นทางหลวงชนบทและอำเภอหลักทั่วไทย มั่นใจไม่หลุดโครงข่ายไฟฟ้า',
    reliabilityScore: 4,
    highwayCoverage: 'High',
    bookingSupported: true,
  },
  {
    id: 'mea-ev',
    name: 'MEA EV',
    operatorThai: 'การไฟฟ้านครหลวง (MEA)',
    appName: 'MEA EV',
    appDownloadNoteThai: 'เน้นพื้นที่กรุงเทพฯ นนทบุรี สมุทรปราการ และสถานที่ราชการ',
    maxDCSpeedKw: 120,
    connectorTypes: ['CCS2', 'CHAdeMO', 'Type 2'],
    tariffStructure: {
      peakRatePerKwh: 7.5,
      offPeakRatePerKwh: 7.5,
      flatRatePerKwh: 7.5,
      notesThai: 'อัตราเหมาจ่ายคงที่ครอบคลุมพื้นที่เมืองหลวง',
    },
    coverageHighlightsThai: 'ที่ทำการไฟฟ้านครหลวง สวนสาธารณะ และอาคารภาครัฐในเขตนครหลวง',
    reliabilityScore: 4,
    highwayCoverage: 'Urban-Focused',
    bookingSupported: true,
  },
  {
    id: 'elex-by-egat',
    name: 'EleX by EGAT',
    operatorThai: 'การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.)',
    appName: 'EleXA',
    appDownloadNoteThai: 'สถานีไฮสปีดคุณภาพสูงในปั๊ม PT และเขื่อน/ศูนย์การเรียนรู้ กฟผ.',
    maxDCSpeedKw: 150,
    connectorTypes: ['CCS2', 'Type 2'],
    tariffStructure: {
      peakRatePerKwh: 7.7,
      offPeakRatePerKwh: 7.7,
      flatRatePerKwh: 7.7,
      notesThai: 'ระบบเสถียร หัวชาร์จกำลังไฟสูง จ่ายไฟเต็มสเปก',
    },
    coverageHighlightsThai: 'ตั้งอยู่ในสถานีบริการน้ำมัน PT บนทางหลวงสายหลัก และสถานที่ของ กฟผ.',
    reliabilityScore: 5,
    highwayCoverage: 'High',
    bookingSupported: true,
  },
  {
    id: 'ea-anywhere',
    name: 'EA Anywhere',
    operatorThai: 'บริษัท พลังงานบริสุทธิ์ จำกัด (มหาชน)',
    appName: 'EA Anywhere',
    appDownloadNoteThai: 'ครอบคลุมศูนย์การค้าเครือ Central, The Mall และอาคารสำนักงานชั้นนำ',
    maxDCSpeedKw: 150,
    connectorTypes: ['CCS2', 'CHAdeMO', 'Type 2'],
    tariffStructure: {
      peakRatePerKwh: 8.0,
      offPeakRatePerKwh: 7.5,
      notesThai: 'ค่าบริการปรับตามตำแหน่งที่ตั้งและห้างสรรพสินค้า',
    },
    coverageHighlightsThai: 'จุดชาร์จใจกลางเมือง ห้างสรรพสินค้า ศูนย์การค้า และคอมมูนิตี้มอลล์',
    reliabilityScore: 4,
    highwayCoverage: 'Mall-Focused',
    bookingSupported: false,
  },
  {
    id: 'evolt',
    name: 'Evolt Network',
    operatorThai: 'บริษัท อีโวลท์ เทคโนโลยี จำกัด',
    appName: 'Evolt',
    appDownloadNoteThai: 'เหมาะสำหรับจุดหมายปลายทาง โรงแรม รีสอร์ต คอนโดมิเนียม และโรงพยาบาล',
    maxDCSpeedKw: 120,
    connectorTypes: ['CCS2', 'Type 2'],
    tariffStructure: {
      peakRatePerKwh: 8.5,
      offPeakRatePerKwh: 7.5,
      notesThai: 'ให้บริการทั้งตู้ DC Fast Charge และ AC Destination Charger',
    },
    coverageHighlightsThai: 'โรงแรมชั้นนำ โรงพยาบาลเอกชน คอนโดมิเนียม และไลฟ์สไตล์มอลล์',
    reliabilityScore: 4,
    highwayCoverage: 'Urban-Focused',
    bookingSupported: false,
  },
  {
    id: 'altervim',
    name: 'Altervim Super Charge',
    operatorThai: 'บริษัท อัลเทอร์วิม จำกัด (เครือ CP)',
    appName: 'Altervim',
    appDownloadNoteThai: 'สถานีชาร์จในห้าง Lotus’s ไฮเปอร์มาร์เก็ตทั่วประเทศ ชาร์จระหว่างช้อปปิ้ง',
    maxDCSpeedKw: 160,
    connectorTypes: ['CCS2', 'Type 2'],
    tariffStructure: {
      peakRatePerKwh: 7.5,
      offPeakRatePerKwh: 7.5,
      flatRatePerKwh: 7.5,
      notesThai: 'อัตราเดียว 7.5 บาท/หน่วย ชาร์จสะดวกขณะซื้อของเข้าบ้าน',
    },
    coverageHighlightsThai: 'ห้างโลตัส (Lotus’s) กว่า 100 สาขาทั่วประเทศ ทั้งในเมืองและหัวเมืองใหญ่',
    reliabilityScore: 4,
    highwayCoverage: 'Mall-Focused',
    bookingSupported: false,
  },
  {
    id: 'tesla-supercharger',
    name: 'Tesla Supercharger',
    operatorThai: 'Tesla Thailand',
    appName: 'Tesla App',
    appDownloadNoteThai: 'ระบบ Plug & Charge เสียบแล้วชาร์จทันที แสดงสถานะผ่านหน้าจอรถและ Tesla App',
    maxDCSpeedKw: 250,
    connectorTypes: ['Tesla Supercharger', 'CCS2'],
    tariffStructure: {
      peakRatePerKwh: 9.2,
      offPeakRatePerKwh: 7.3,
      notesThai: 'Supercharger V3/V4 กำลังสูงสุด 250 kW จ่ายไฟเร็วกว่าปกติถึง 2 เท่า',
    },
    coverageHighlightsThai: 'ห้าง Central World, Central Rama 9, Central Festival ทั่วประเทศ และจุดยุทธศาสตร์สำคัญ',
    reliabilityScore: 5,
    highwayCoverage: 'Mall-Focused',
    bookingSupported: false,
  },
];

/**
 * Standard baseline economic constants for Thai market
 */
export const THAI_ECONOMIC_DEFAULTS = {
  petrolPricePerLiterTHB: 38.0, // E20 / Gasohol 95 benchmark
  iceFuelEconomyKmPerL: 14.0, // 14 km/L (~7.14 L/100km)
  evEfficiencyKmPerKwh: 6.5, // 6.5 km/kWh (~15.38 kWh/100km)
  touOffPeakRatePerKwh: 3.1, // Net Off-Peak (Base ~2.69 + Ft + VAT)
  touOnPeakRatePerKwh: 5.8, // Net On-Peak (Base ~5.80 + Ft + VAT)
  standardTariffRatePerKwh: 4.5, // Progressive home tariff average
  publicDCRatePerKwh: 7.5, // Average public CPO DC Fast Charge
  annualAverageDistanceKm: 15000, // Standard Thai annual driving distance
};

/**
 * Calculates comprehensive TOU electricity savings compared with petrol ICE
 * 
 * @param distanceKm Total distance in kilometers (default: 1,000 km)
 * @param evEfficiencyKmPerKwh EV energy efficiency (km/kWh, default: 6.5)
 * @param iceFuelEconomyKmPerL ICE petrol economy (km/L, default: 14.0)
 * @param petrolPricePerLiterTHB Petrol price in THB/L (default: 38.00)
 */
export function calculateTOUSavings(
  distanceKm: number = 1000,
  evEfficiencyKmPerKwh: number = THAI_ECONOMIC_DEFAULTS.evEfficiencyKmPerKwh,
  iceFuelEconomyKmPerL: number = THAI_ECONOMIC_DEFAULTS.iceFuelEconomyKmPerL,
  petrolPricePerLiterTHB: number = THAI_ECONOMIC_DEFAULTS.petrolPricePerLiterTHB
): TOUComparison {
  const kwhUsed = distanceKm / evEfficiencyKmPerKwh;
  const petrolLitersUsed = distanceKm / iceFuelEconomyKmPerL;

  // Running costs in THB
  const petrolCostTHB = Math.round(petrolLitersUsed * petrolPricePerLiterTHB * 100) / 100;
  const evHomeTOUOffPeakCostTHB = Math.round(kwhUsed * THAI_ECONOMIC_DEFAULTS.touOffPeakRatePerKwh * 100) / 100;
  const evHomeTOUOnPeakCostTHB = Math.round(kwhUsed * THAI_ECONOMIC_DEFAULTS.touOnPeakRatePerKwh * 100) / 100;
  const evHomeStandardCostTHB = Math.round(kwhUsed * THAI_ECONOMIC_DEFAULTS.standardTariffRatePerKwh * 100) / 100;
  const evPublicDCCostTHB = Math.round(kwhUsed * THAI_ECONOMIC_DEFAULTS.publicDCRatePerKwh * 100) / 100;

  // Cost per km
  const costPerKm = {
    petrol: Math.round((petrolCostTHB / distanceKm) * 100) / 100,
    evHomeTOUOffPeak: Math.round((evHomeTOUOffPeakCostTHB / distanceKm) * 100) / 100,
    evHomeTOUOnPeak: Math.round((evHomeTOUOnPeakCostTHB / distanceKm) * 100) / 100,
    evHomeStandard: Math.round((evHomeStandardCostTHB / distanceKm) * 100) / 100,
    evPublicDC: Math.round((evPublicDCCostTHB / distanceKm) * 100) / 100,
  };

  // Savings vs Petrol
  const homeTOUOffPeakSavingsTHB = Math.round((petrolCostTHB - evHomeTOUOffPeakCostTHB) * 100) / 100;
  const homeStandardSavingsTHB = Math.round((petrolCostTHB - evHomeStandardCostTHB) * 100) / 100;
  const publicDCSavingsTHB = Math.round((petrolCostTHB - evPublicDCCostTHB) * 100) / 100;

  const homeTOUOffPeakSavingsPercent = Math.round(((petrolCostTHB - evHomeTOUOffPeakCostTHB) / petrolCostTHB) * 1000) / 10;
  const homeStandardSavingsPercent = Math.round(((petrolCostTHB - evHomeStandardCostTHB) / petrolCostTHB) * 1000) / 10;
  const publicDCSavingsPercent = Math.round(((petrolCostTHB - evPublicDCCostTHB) / petrolCostTHB) * 1000) / 10;

  return {
    distanceKm,
    evEfficiencyKmPerKwh,
    iceFuelEconomyKmPerL,
    petrolPricePerLiterTHB,
    touOffPeakRatePerKwh: THAI_ECONOMIC_DEFAULTS.touOffPeakRatePerKwh,
    touOnPeakRatePerKwh: THAI_ECONOMIC_DEFAULTS.touOnPeakRatePerKwh,
    standardTariffRatePerKwh: THAI_ECONOMIC_DEFAULTS.standardTariffRatePerKwh,
    publicDCRatePerKwh: THAI_ECONOMIC_DEFAULTS.publicDCRatePerKwh,
    costs: {
      petrolCostTHB,
      evHomeTOUOffPeakCostTHB,
      evHomeTOUOnPeakCostTHB,
      evHomeStandardCostTHB,
      evPublicDCCostTHB,
    },
    savingsVsPetrol: {
      homeTOUOffPeakSavingsTHB,
      homeTOUOffPeakSavingsPercent,
      homeStandardSavingsTHB,
      homeStandardSavingsPercent,
      publicDCSavingsTHB,
      publicDCSavingsPercent,
    },
    costPerKm,
  };
}

/**
 * Returns all registered Thai charging networks
 */
export function getAllChargingNetworks(): ChargingNetworkInfo[] {
  return chargingNetworks;
}

/**
 * Retrieves a charging network by ID
 */
export function getChargingNetworkById(id: string): ChargingNetworkInfo | undefined {
  return chargingNetworks.find((net) => net.id.toLowerCase() === id.toLowerCase());
}
