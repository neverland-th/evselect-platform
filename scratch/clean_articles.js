const fs = require('fs');
const path = require('path');

// 1. Fix src/content-generator/data/vehicles.ts
const vehiclesPath = path.join(__dirname, '../src/content-generator/data/vehicles.ts');
if (fs.existsSync(vehiclesPath)) {
  let vContent = fs.readFileSync(vehiclesPath, 'utf8');

  // Fix Model 3 Performance AWD
  vContent = vContent.replace(
    /name:\s*'Performance AWD'[\s\S]*?powerHp:\s*627[\s\S]*?torqueNm:\s*741/,
    (match) => {
      console.log("Found Model 3 Performance in vehicles.ts, updating specs...");
      return match
        .replace(/powerHp:\s*627/, 'powerHp: 460')
        .replace(/powerKw:\s*461/, 'powerKw: 338')
        .replace(/torqueNm:\s*741/, 'torqueNm: 723')
        .replace(/topSpeedKmH:\s*261/, 'topSpeedKmH: 262')
        .replace(/batteryKWh:\s*78\.1/, 'batteryKWh: 75.0');
    }
  );

  // Fix Model 3 Long Range AWD batteryKWh
  vContent = vContent.replace(
    /name:\s*'Long Range AWD',\s*priceTHB:\s*1459000,\s*batteryKWh:\s*78\.1/,
    "name: 'Long Range AWD',\n        priceTHB: 1459000,\n        batteryKWh: 75.0"
  );

  fs.writeFileSync(vehiclesPath, vContent, 'utf8');
  console.log("Updated vehicles.ts successfully.");
}

// 2. Clean up all articles in src/app/(storefront)/articles
const articlesDir = path.join(__dirname, '../src/app/(storefront)/articles');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Fix Takeaway header: <Award className="w-4 h-4" /> / EVSELECT Final Takeaway -> <Award className="w-4 h-4" /> EVSELECT Final Takeaway
      if (content.includes('/ EVSELECT Final Takeaway')) {
        content = content.replace(/\/\s*EVSELECT Final Takeaway/g, 'EVSELECT Final Takeaway');
        changed = true;
      }
      if (content.includes('CarExpert / EVSELECT Final Takeaway')) {
        content = content.replace(/CarExpert \/ EVSELECT Final Takeaway/g, 'EVSELECT Final Takeaway');
        changed = true;
      }
      if (content.includes('CAREXPERT / EVSELECT FINAL TAKEAWAY')) {
        content = content.replace(/CAREXPERT \/ EVSELECT FINAL TAKEAWAY/g, 'EVSELECT FINAL TAKEAWAY');
        changed = true;
      }
      if (content.includes('CAREXPERT / EVSELECT Final Takeaway')) {
        content = content.replace(/CAREXPERT \/ EVSELECT Final Takeaway/g, 'EVSELECT Final Takeaway');
        changed = true;
      }

      // Fix (Pros & Cons - Style) -> (จุดเด่น & ข้อสังเกต)
      if (content.includes('(Pros & Cons - Style)')) {
        content = content.replace(/\(Pros & Cons - Style\)/g, '(จุดเด่น & ข้อสังเกต)');
        changed = true;
      }
      if (content.includes('(Pros &amp; Cons - Style)')) {
        content = content.replace(/\(Pros &amp; Cons - Style\)/g, '(จุดเด่น &amp; ข้อสังเกต)');
        changed = true;
      }

      // Fix "สไตล์ วิเคราะห์ความคุ้มค่า" -> "เจาะลึกวิเคราะห์ความคุ้มค่า"
      if (content.includes('สไตล์ วิเคราะห์ความคุ้มค่า')) {
        content = content.replace(/สไตล์ วิเคราะห์ความคุ้มค่า/g, 'เจาะลึกวิเคราะห์ความคุ้มค่า');
        changed = true;
      }

      // Fix any remaining CarExpert occurrences
      if (/carexpert/i.test(content)) {
        content = content.replace(/CarExpert /gi, '');
        content = content.replace(/CarExpert/gi, 'EVSELECT');
        changed = true;
      }

      // Specifically in tesla-model-3-highland-review, ensure Thai specs:
      if (entry.name === 'page.tsx' && fullPath.includes('tesla-model-3-highland-review')) {
        // Battery 78.1 -> 75.0 (Thai official spec)
        if (content.includes('78.1 kWh')) {
          content = content.replace(/78\.1 kWh/g, '75.0 kWh');
          changed = true;
        }
        if (content.includes('627 hp')) {
          content = content.replace(/627 hp/g, '460 hp');
          changed = true;
        }
        if (content.includes('627 แรงม้า')) {
          content = content.replace(/627 แรงม้า/g, '460 แรงม้า');
          changed = true;
        }
        if (content.includes('741 Nm')) {
          content = content.replace(/741 Nm/g, '723 Nm');
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Cleaned: ${path.relative(articlesDir, fullPath)}`);
      }
    }
  }
}

processDir(articlesDir);
console.log("All articles processed.");
