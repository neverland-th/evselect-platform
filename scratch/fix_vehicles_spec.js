const fs = require('fs');
const file = 'src/content-generator/data/vehicles.ts';
let content = fs.readFileSync(file, 'utf8');

// Replace Model 3 Performance AWD block
const oldPerf = `      {
        name: 'Performance AWD',
        priceTHB: 1799000,
        batteryKWh: 78.1,
        batteryType: 'NMC (LG Chem)',
        rangeWltpKm: 528,
        realWorldRangeThaiKm: 440,
        powerHp: 627,
        powerKw: 461,
        torqueNm: 741,
        acceleration0to100: 3.1,
        topSpeedKmH: 261,
        maxDCSpeedKw: 250,
        maxACSpeedKw: 11.0,
        dcChargeTimeMinutes: '10-80% ใน 27 นาที',
        drivetrain: 'AWD',
        groundClearanceMm: 128,
      },`;

const newPerf = `      {
        name: 'Performance AWD',
        priceTHB: 1799000,
        batteryKWh: 75.0,
        batteryType: 'NMC (LG Chem)',
        rangeWltpKm: 528,
        realWorldRangeThaiKm: 440,
        powerHp: 460,
        powerKw: 338,
        torqueNm: 723,
        acceleration0to100: 3.1,
        topSpeedKmH: 262,
        maxDCSpeedKw: 250,
        maxACSpeedKw: 11.0,
        dcChargeTimeMinutes: '10-80% ใน 27 นาที',
        drivetrain: 'AWD',
        groundClearanceMm: 128,
      },`;

// Replace Model 3 Long Range AWD battery
const oldLR = `      {
        name: 'Long Range AWD',
        priceTHB: 1459000,
        batteryKWh: 78.1,`;

const newLR = `      {
        name: 'Long Range AWD',
        priceTHB: 1459000,
        batteryKWh: 75.0,`;

content = content.replace(/\r\n/g, '\n');
const normalizedOldPerf = oldPerf.replace(/\r\n/g, '\n');
const normalizedOldLR = oldLR.replace(/\r\n/g, '\n');

if (content.includes(normalizedOldPerf)) {
  content = content.replace(normalizedOldPerf, newPerf.replace(/\r\n/g, '\n'));
  console.log("Successfully replaced Performance AWD");
} else {
  console.log("Warning: normalizedOldPerf not found!");
}

if (content.includes(normalizedOldLR)) {
  content = content.replace(normalizedOldLR, newLR.replace(/\r\n/g, '\n'));
  console.log("Successfully replaced Long Range AWD");
} else {
  console.log("Warning: normalizedOldLR not found!");
}

fs.writeFileSync(file, content, 'utf8');
console.log("Written vehicles.ts");
