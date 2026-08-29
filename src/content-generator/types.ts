/**
 * EV Selection Thailand - Domain Model & Type Definitions
 * 
 * Comprehensive TypeScript types covering Thai EV market specifications,
 * CPO charging infrastructure, TOU tariff calculations, fitment accessory catalog,
 * and automated Facebook content generation schemas.
 */

export type Drivetrain = 'RWD' | 'FWD' | 'AWD';
export type VehicleCategory = 'Sedan' | 'SUV' | 'Crossover' | 'Hatchback' | 'MPV' | 'City Car';
export type PostTopic = 'review' | 'comparison' | 'news' | 'heat-guide' | 'charging-guide';
export type GenerationMode = 'rule_based' | 'ai_augmented';
export type ContentTone = 'enthusiast' | 'family' | 'cost_conscious' | 'tech_focused';

/**
 * Technical specifications for an individual Thai-spec vehicle trim/variant
 */
export interface VehicleTrim {
  name: string;
  priceTHB: number;
  batteryKWh: number;
  batteryType: string; // e.g. 'Blade LFP', 'NMC', 'Aegis LFP', 'Magazine LFP'
  rangeNedcKm?: number;
  rangeWltpKm?: number;
  rangeCltcKm?: number;
  realWorldRangeThaiKm: number; // In 35°C–40°C heat with AC at 22°C & highway 110-120 km/h
  powerHp: number;
  powerKw: number;
  torqueNm: number;
  acceleration0to100: number; // In seconds
  topSpeedKmH?: number;
  maxDCSpeedKw: number; // DC Fast Charge kW
  maxACSpeedKw: number; // AC Normal Charge kW (7kW / 11kW / 22kW)
  dcChargeTimeMinutes?: string; // e.g. '30-80% in 28 mins'
  drivetrain: Drivetrain;
  groundClearanceMm?: number;
}

/**
 * Physical vehicle dimensions and cargo capacities
 */
export interface VehicleDimensions {
  lengthMm: number;
  widthMm: number;
  heightMm: number;
  wheelbaseMm: number;
  bootCapacityLiters: number;
  frunkCapacityLiters?: number;
}

/**
 * Verified vehicle asset images mapping to public assets
 */
export interface VehicleImageUrls {
  hero: string;
  exterior?: string;
  interior?: string;
  details?: string;
}

/**
 * Complete specification model for a Thai EV vehicle
 */
export interface VehicleSpec {
  id: string; // e.g. 'byd-seal', 'tesla-model-3-highland'
  brand: string;
  model: string;
  modelYear: string; // e.g. '2024-2026'
  taglineThai: string;
  category: VehicleCategory;
  segmentNameThai: string;
  rating: number; // e.g. 9.1 (out of 10)
  verdictThai: string;
  trims: VehicleTrim[];
  dimensions?: VehicleDimensions;
  prosThai: string[];
  consThai: string[];
  heatPerformanceNotesThai: string;
  suspensionThaiRoadsNotesThai: string;
  chargingExperienceThai: string;
  recommendedAccessories: string[];
  targetAudienceThai: string;
  competitionModels: string[];
  imageUrls: VehicleImageUrls;
  articleSlug?: string;
}

/**
 * Tariff structure for Thai Charge Point Operators (CPOs)
 */
export interface CPOTariff {
  peakRatePerKwh: number;
  offPeakRatePerKwh: number;
  flatRatePerKwh?: number;
  notesThai: string;
}

/**
 * Thai Charge Point Operator (CPO) network metadata
 */
export interface ChargingNetworkInfo {
  id: string;
  name: string;
  operatorThai: string;
  appName: string;
  appDownloadNoteThai: string;
  maxDCSpeedKw: number;
  connectorTypes: ('CCS2' | 'CHAdeMO' | 'Type 2' | 'Tesla Supercharger')[];
  tariffStructure: CPOTariff;
  coverageHighlightsThai: string;
  reliabilityScore: number; // 1-5
  highwayCoverage: 'High' | 'Medium' | 'Urban-Focused' | 'Mall-Focused';
  bookingSupported: boolean;
}

/**
 * Running cost breakdown and comparison between ICE petrol and EV charging regimes
 */
export interface TOUComparison {
  distanceKm: number;
  evEfficiencyKmPerKwh: number;
  iceFuelEconomyKmPerL: number;
  petrolPricePerLiterTHB: number;
  touOffPeakRatePerKwh: number;
  touOnPeakRatePerKwh: number;
  standardTariffRatePerKwh: number;
  publicDCRatePerKwh: number;
  costs: {
    petrolCostTHB: number;
    evHomeTOUOffPeakCostTHB: number;
    evHomeTOUOnPeakCostTHB: number;
    evHomeStandardCostTHB: number;
    evPublicDCCostTHB: number;
  };
  savingsVsPetrol: {
    homeTOUOffPeakSavingsTHB: number;
    homeTOUOffPeakSavingsPercent: number;
    homeStandardSavingsTHB: number;
    homeStandardSavingsPercent: number;
    publicDCSavingsTHB: number;
    publicDCSavingsPercent: number;
  };
  costPerKm: {
    petrol: number;
    evHomeTOUOffPeak: number;
    evHomeTOUOnPeak: number;
    evHomeStandard: number;
    evPublicDC: number;
  };
}

/**
 * EVSELECT 100% Fitment QC Accessory Item
 */
export interface AccessoryItem {
  sku: string;
  nameThai: string;
  category: 'Interior Protection' | 'Heat Defense' | 'Screen & Electronics' | 'Organizers' | 'Charging Gear' | 'Exterior Styling';
  priceTHB: number;
  compatibleVehicleIds: string[]; // ['byd-seal', 'tesla-model-3-highland'] or ['ALL']
  descriptionThai: string;
  benefitsThai: string[];
  materialThai?: string;
  fitmentGuarantee: '100% Verified RHD' | 'Laboratory Tested';
  imageUrl?: string;
  shopeeUrl?: string;
}

/**
 * Metadata accompanying a generated Facebook post
 */
export interface PostMetadata {
  charCount: number;
  hashtags: string[];
  suggestedImages: string[];
  callToActionUrl?: string;
  author?: string;
  targetAudience?: string;
  ratingScore?: number;
}

/**
 * Structure of a generated Facebook post ready for output
 */
export interface GeneratedPost {
  id: string;
  title: string;
  topic: PostTopic;
  vehicleModel?: string;
  compareVehicleModel?: string;
  generatedAt: string;
  mode: GenerationMode;
  contentMarkdown: string;
  plainText: string;
  metadata: PostMetadata;
}

/**
 * CLI and programmatic generation options
 */
export interface GenerationOptions {
  vehicleId?: string;
  compareVehicleId?: string;
  topic?: PostTopic;
  mode?: GenerationMode;
  tone?: ContentTone;
  count?: number;
  outputDir?: string;
  includeAccessories?: boolean;
}
