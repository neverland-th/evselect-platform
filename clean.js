const fs = require('fs');
const path = require('path');

const files = [
    "src/app/(storefront)/articles/ev-horsepower-vs-torque-explained/page.tsx",
    "src/app/(storefront)/articles/ev-battery-care/page.tsx",
    "src/app/(storefront)/articles/ev-carbon-ceramic-brakes-guide/page.tsx",
    "src/app/(storefront)/articles/ev-damper-tuning-bump-rebound-guide/page.tsx",
    "src/app/(storefront)/articles/ev-camber-adjustment-wheel-alignment-guide/page.tsx",
    "src/app/(storefront)/articles/ev-tyre-and-coilover-selection-guide/page.tsx",
    "src/app/(storefront)/articles/optimizing-ev-suspension-thai-roads/page.tsx",
    "src/app/(storefront)/articles/shock-absorber-types-monotube-twintube-air-ev/page.tsx",
    "src/app/(storefront)/articles/hybrid-to-ev-chassis-dynamics-transition/page.tsx",
    "src/app/(storefront)/articles/ev-performance-driving-techniques/page.tsx"
];

const imagesDir = "public/images/reviews";
let existingImages = [];
if (fs.existsSync(imagesDir)) {
    existingImages = fs.readdirSync(imagesDir);
}

for (const filepath of files) {
    if (!fs.existsSync(filepath)) {
        console.log(`Not found: ${filepath}`);
        continue;
    }
    
    let content = fs.readFileSync(filepath, 'utf-8');

    // 1. Replace Branding
    content = content.replace(/CarExpert In-Depth Review/gi, 'EVSELECT Reviews');
    content = content.replace(/สไตล์\s*CarExpert/gi, 'สไตล์ EVSELECT');
    content = content.replace(/CarExpert/gi, 'EVSELECT');
    content = content.replace(/In-Depth Review/g, 'EVSELECT Reviews');

    // 2. Replace Equations
    content = content.replace(/\$\$\s*KE = \\frac\{1\}\{2\}mv\^2\s*\$\$/g, 'พลังงานจลน์แปรผันตามน้ำหนักและความเร็ว (ยิ่งรถหนักและเร็ว ยิ่งต้องใช้เบรกเยอะ)');
    content = content.replace(/<div className="font-mono[^>]*>\s*P\s*=\s*τ\s*(?:×|x|\\times)\s*ω\s*<\/div>/g, '<div className="text-sm sm:text-base text-slate-200 font-bold">กำลัง = แรงบิด × ความเร็วรอบ</div>');
    content = content.replace(/\$\$\s*F = \\mu \\times N\s*\$\$/g, 'แรงยึดเกาะ = ประสิทธิภาพยาง × น้ำหนักกด');
    content = content.replace(/\$\$\s*F = m \\times a\s*\$\$/g, 'แรง = มวล × ความเร่ง');
    
    // Check for <img and <Image tags
    content = content.replace(/<(img|Image)[^>]+(\/?)>/g, (match, tag, selfClose) => {
        const srcMatch = match.match(/src=(?:\{"?|'|")([^"'\*\}]+)(?:"\}?|'|")/);
        const altMatch = match.match(/alt=["']([^"']*)["']/);
        
        if (srcMatch) {
            const src = srcMatch[1];
            const filename = src.split('/').pop();
            if (!existingImages.includes(filename) && !src.startsWith('http')) {
                const alt = altMatch ? altMatch[1] : "ภาพประกอบ";
                return `<div className="w-full h-64 bg-slate-200 flex items-center justify-center rounded-2xl border border-slate-300 my-8"><span className="text-slate-500 font-medium">ภาพประกอบ: ${alt}</span></div>`;
            }
        }
        return match;
    });

    fs.writeFileSync(filepath, content, 'utf-8');
}

console.log("Done");
