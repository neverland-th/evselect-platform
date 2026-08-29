/**
 * EV Selection Thailand - Data Catalog & Domain Module Index
 * 
 * Centralized barrel export of all Thai EV data catalogs, charging network data,
 * accessory fitment matrices, and domain calculation helper functions.
 */

export * from './vehicles';
export * from './charging';
export * from './accessories';

import { VehicleSpec, VehicleTrim } from '../types';
import { vehicles, getVehicleById } from './vehicles';
import { chargingNetworks, getChargingNetworkById } from './charging';
import { accessories, getAccessoriesForVehicle } from './accessories';

/**
 * Formats a number as a Thai currency string (e.g. 1,149,000 บาท)
 */
export function formatPriceTHB(price: number): string {
  return `${price.toLocaleString('th-TH')} บาท`;
}

/**
 * Returns formatted price range across all trims of a vehicle
 */
export function formatPriceRangeTHB(trims: VehicleTrim[]): string {
  if (!trims || trims.length === 0) return 'N/A';
  const prices = trims.map((t) => t.priceTHB).sort((a, b) => a - b);
  if (prices.length === 1 || prices[0] === prices[prices.length - 1]) {
    return formatPriceTHB(prices[0]);
  }
  return `${prices[0].toLocaleString('th-TH')} – ${prices[prices.length - 1].toLocaleString('th-TH')} บาท`;
}

/**
 * Calculates estimated real-world tropical range under 35°C–40°C Thai weather with A/C
 * 
 * Derating factors based on empirical Thai automotive data:
 * - NEDC: -22% to -25%
 * - CLTC: -23% to -26%
 * - WLTP: -12% to -15%
 */
export function calculateRealWorldRange(
  labRangeKm: number,
  ratingStandard: 'NEDC' | 'WLTP' | 'CLTC' = 'NEDC'
): number {
  let deratingFactor = 0.78; // Default NEDC ~22% loss
  if (ratingStandard === 'WLTP') {
    deratingFactor = 0.86; // WLTP ~14% loss
  } else if (ratingStandard === 'CLTC') {
    deratingFactor = 0.76; // CLTC ~24% loss
  }
  return Math.round(labRangeKm * deratingFactor);
}

/**
 * Provides a comprehensive fitment package recommendation for a given vehicle
 */
export function getFitmentSummaryForVehicle(vehicleId: string) {
  const vehicle = getVehicleById(vehicleId);
  const matchedAccessories = getAccessoriesForVehicle(vehicleId);

  return {
    vehicleId,
    vehicleName: vehicle ? `${vehicle.brand} ${vehicle.model}` : vehicleId,
    totalAvailableItems: matchedAccessories.length,
    accessories: matchedAccessories,
    hasRoofSunshade: matchedAccessories.some((a) => a.category === 'Heat Defense'),
    hasTpeMats: matchedAccessories.some((a) => a.category === 'Interior Protection'),
    hasScreenProtector: matchedAccessories.some((a) => a.category === 'Screen & Electronics'),
  };
}

/**
 * Helper to get random vehicle from the catalog
 */
export function getRandomVehicle(): VehicleSpec {
  const randomIndex = Math.floor(Math.random() * vehicles.length);
  return vehicles[randomIndex];
}

/**
 * Formats a clean Thai automotive vehicle full name (avoiding brand/model word duplication)
 */
export function getVehicleFullName(v: VehicleSpec): string {
  const brandWords = v.brand.trim().split(/\s+/);
  const modelWords = v.model.trim().split(/\s+/);
  if (modelWords[0].toLowerCase() === brandWords[brandWords.length - 1].toLowerCase()) {
    return `${v.brand} ${modelWords.slice(1).join(' ')}`.trim();
  }
  if (v.model.toLowerCase().startsWith(v.brand.toLowerCase())) {
    return v.model;
  }
  return `${v.brand} ${v.model}`.trim();
}

/**
 * Helper to get two distinct vehicles for head-to-head comparison
 */
export function getComparisonPair(vehicleIdA?: string, vehicleIdB?: string): [VehicleSpec, VehicleSpec] {
  const vA = (vehicleIdA ? getVehicleById(vehicleIdA) : undefined) || vehicles[0]; // Default: BYD Seal
  let vB = (vehicleIdB ? getVehicleById(vehicleIdB) : undefined);

  if (!vB || vB.id === vA.id) {
    // Pick first compatible competitor
    const competitorId = vA.competitionModels && vA.competitionModels.length > 0
      ? vehicles.find((v) => vA.competitionModels.some((c) => v.model.toLowerCase().includes(c.toLowerCase())))?.id
      : undefined;

    if (competitorId && competitorId !== vA.id) {
      vB = getVehicleById(competitorId);
    }

    // Fallback if still same or undefined
    if (!vB || vB.id === vA.id) {
      vB = vehicles.find((v) => v.id !== vA.id) || vehicles[1];
    }
  }

  return [vA, vB];
}

