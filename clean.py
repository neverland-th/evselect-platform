import re
import os

files = [
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
]

images_dir = "public/images/reviews"
existing_images = os.listdir(images_dir) if os.path.exists(images_dir) else []

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Not found: {filepath}")
        continue
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Replace Branding
    content = re.sub(r'CarExpert In-Depth Review', 'EVSELECT Reviews', content, flags=re.IGNORECASE)
    content = re.sub(r'สไตล์\s*CarExpert', 'สไตล์ EVSELECT', content, flags=re.IGNORECASE)
    content = re.sub(r'CarExpert', 'EVSELECT', content, flags=re.IGNORECASE)
    content = re.sub(r'In-Depth Review', 'EVSELECT Reviews', content)

    # 2. Replace Equations
    content = re.sub(r'\$\$\s*KE = \\frac{1}{2}mv\^2\s*\$\$', 'พลังงานจลน์แปรผันตามน้ำหนักและความเร็ว (ยิ่งรถหนักและเร็ว ยิ่งต้องใช้เบรกเยอะ)', content)
    content = re.sub(r'<div className="font-mono[^>]*>\s*P\s*=\s*τ\s*(?:×|x|\\times)\s*ω\s*</div>', '<div className="text-sm sm:text-base text-slate-200">กำลัง = แรงบิด × ความเร็วรอบ</div>', content)
    content = re.sub(r'\$\$\s*F = \\mu \\times N\s*\$\$', 'แรงยึดเกาะ = ประสิทธิภาพยาง × น้ำหนักกด', content)
    content = re.sub(r'\$\$\s*F = m \\times a\s*\$\$', 'แรง = มวล × ความเร่ง', content)
    
    # Also simplify the specific text around it if there are any other lingering equations.
    # We will rely on these regexes.
    
    # Check for <img and <Image tags
    def img_replacer(match):
        full_tag = match.group(0)
        src_match = re.search(r'src=(?:\{"?|\'|")([^"\'\}]+)(?:"\}?|\'|")', full_tag)
        alt_match = re.search(r'alt=["\']([^"\']*)["\']', full_tag)
        
        if src_match:
            src = src_match.group(1)
            filename = src.split('/')[-1]
            if filename not in existing_images and not src.startswith('http'):
                alt = alt_match.group(1) if alt_match else "ภาพประกอบ"
                return f'<div className="w-full h-64 bg-slate-200 flex items-center justify-center rounded-2xl border border-slate-300 my-8"><span className="text-slate-500 font-medium">ภาพประกอบ: {alt}</span></div>'
        return full_tag
        
    content = re.sub(r'<(img|Image)[^>]+>', img_replacer, content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Done")
