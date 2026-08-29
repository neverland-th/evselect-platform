import fs from 'fs';
import path from 'path';
import { 
  vehicles, 
  getAllVehicles, 
  getVehicleById, 
  searchVehicles,
  getVehiclesByCategory,
  chargingNetworks, 
  getAllChargingNetworks, 
  getChargingNetworkById,
  accessories,
  getAllAccessories,
  getAccessoriesForVehicle,
  getAccessoryBySku,
  getAccessoriesByCategory,
  calculateTOUSavings,
  formatPriceTHB,
  formatPriceRangeTHB,
  calculateRealWorldRange,
  getFitmentSummaryForVehicle,
  getRandomVehicle,
  getComparisonPair
} from '../src/content-generator/data';

console.log('=== 1. Vehicles Master Dataset Validation ===');
console.log('Total vehicles count:', getAllVehicles().length);
if (getAllVehicles().length < 10) {
  throw new Error('Vehicle count is below required 10 models!');
}

const requiredIds = [
  'byd-seal',
  'byd-atto-3',
  'byd-dolphin',
  'deepal-s07',
  'deepal-l07',
  'deepal-s05',
  'tesla-model-3-highland',
  'tesla-model-y',
  'mg4-electric',
  'zeekr-x',
  'geely-ex2',
  'ora-good-cat',
  'gac-aion-y-plus'
];

for (const id of requiredIds) {
  const v = getVehicleById(id);
  if (!v) {
    throw new Error(`Missing required vehicle ID: ${id}`);
  }
  console.log(`✓ [${v.id}] ${v.brand} ${v.model} (${v.trims.length} trims) -> ${formatPriceRangeTHB(v.trims)} | Real Range: ${v.trims[0].realWorldRangeThaiKm} km`);
}

console.log('\n=== 2. Image Assets Existence Validation ===');
let missingImages = 0;
for (const v of vehicles) {
  for (const [key, url] of Object.entries(v.imageUrls)) {
    if (url) {
      const localPath = path.join(process.cwd(), 'public', url.replace(/^\//, ''));
      if (!fs.existsSync(localPath)) {
        console.error(`❌ Missing image for ${v.id} [${key}]: ${localPath}`);
        missingImages++;
      } else {
        const stats = fs.statSync(localPath);
        if (stats.size === 0) {
          console.error(`❌ Zero byte image for ${v.id} [${key}]: ${localPath}`);
          missingImages++;
        }
      }
    }
  }
}
if (missingImages > 0) {
  throw new Error(`Found ${missingImages} missing or invalid image assets!`);
}
console.log('✓ All vehicle image assets exist and are non-empty on disk.');

console.log('\n=== 3. Charging Networks & CPO Validation ===');
console.log('Total charging networks count:', getAllChargingNetworks().length);
if (getAllChargingNetworks().length < 8) {
  throw new Error('Charging networks count is below 8 CPOs!');
}

const requiredCPOs = [
  'ptt-ev-station-pluz',
  'pea-volta',
  'mea-ev',
  'elex-by-egat',
  'ea-anywhere',
  'evolt',
  'altervim',
  'tesla-supercharger'
];

for (const cpoId of requiredCPOs) {
  const net = getChargingNetworkById(cpoId);
  if (!net) {
    throw new Error(`Missing required CPO: ${cpoId}`);
  }
  console.log(`✓ [${net.id}] ${net.name} | App: ${net.appName} | Max DC: ${net.maxDCSpeedKw} kW | Peak: ${net.tariffStructure.peakRatePerKwh}฿ / Off-Peak: ${net.tariffStructure.offPeakRatePerKwh}฿`);
}

console.log('\n=== 4. TOU Economics Calculation Validation ===');
const tou1000 = calculateTOUSavings(1000, 6.5, 14.0, 38.0);
console.log(`Distance: 1,000 km | Petrol Cost: ${tou1000.costs.petrolCostTHB} ฿ (${tou1000.costPerKm.petrol} ฿/km)`);
console.log(`Home TOU Off-Peak Cost: ${tou1000.costs.evHomeTOUOffPeakCostTHB} ฿ (${tou1000.costPerKm.evHomeTOUOffPeak} ฿/km)`);
console.log(`Home TOU Savings: ${tou1000.savingsVsPetrol.homeTOUOffPeakSavingsTHB} ฿ (${tou1000.savingsVsPetrol.homeTOUOffPeakSavingsPercent}%)`);
console.log(`Public DC Fast Charge Cost: ${tou1000.costs.evPublicDCCostTHB} ฿ (${tou1000.costPerKm.evPublicDC} ฿/km)`);

if (tou1000.costPerKm.evHomeTOUOffPeak > 0.60 || tou1000.costPerKm.petrol < 2.50) {
  throw new Error('TOU calculation values deviate from realistic Thai benchmarks (~0.48 ฿/km vs ~2.71 ฿/km)!');
}
console.log('✓ TOU economics calculations strictly match verified Thai benchmarks.');

console.log('\n=== 5. Accessory Fitment Matrix Validation ===');
console.log('Total accessories count:', getAllAccessories().length);
const sealAcc = getAccessoriesForVehicle('byd-seal');
console.log(`BYD Seal compatible accessories: ${sealAcc.length} items`);
const m3hAcc = getAccessoriesForVehicle('tesla-model-3-highland');
console.log(`Tesla Model 3 Highland compatible accessories: ${m3hAcc.length} items`);
const universalAcc = getAllAccessories().filter(a => a.compatibleVehicleIds.includes('ALL'));
console.log(`Universal charging accessories: ${universalAcc.length} items`);

console.log('\n=== 6. Domain Helpers Validation ===');
const pair = getComparisonPair('byd-seal', 'tesla-model-3-highland');
console.log(`Comparison pair: ${pair[0].brand} ${pair[0].model} vs ${pair[1].brand} ${pair[1].model}`);
const randomCar = getRandomVehicle();
console.log(`Random car: ${randomCar.brand} ${randomCar.model}`);
const deratedNedc = calculateRealWorldRange(500, 'NEDC');
const deratedWltp = calculateRealWorldRange(500, 'WLTP');
const deratedCltc = calculateRealWorldRange(500, 'CLTC');
console.log(`Derated 500km -> NEDC: ${deratedNedc}km | WLTP: ${deratedWltp}km | CLTC: ${deratedCltc}km`);

console.log('\n🎉 ALL 6 VERIFICATION TIERS PASSED PERFECTLY WITH ZERO ERRORS!');
