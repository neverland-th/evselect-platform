const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else results.push(file);
  });
  return results;
}
const files = walk('src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  if (content.includes('shopee.co.th/search?keyword=')) {
    content = content.replace(/https:\/\/shopee\.co\.th\/search\?keyword=\\$\{encodeURIComponent\(product\.sku\)\}/g, 'https://shopee.co.th/product/12345/');
    changed = true;
  }
  
  if (content.includes('m.me?ref=')) {
    content = content.replace(/https:\/\/m\.me\?ref=/g, 'https://m.me/evselects?ref=');
    changed = true;
  }
  
  if (content.includes('line.me')) {
    content = content.replace(/https:\/\/line\.me[^\\'\"\s<]*/g, 'https://lin.ee/evselects');
    changed = true;
  }
  
  if (content.includes('CarExpert')) {
    content = content.replace(/ฉบับสไตล์ CarExpert/g, '');
    content = content.replace(/CarExpert In-Depth Review/g, 'In-Depth Review');
    content = content.replace(/CarExpert /g, '');
    content = content.replace(/ - CarExpert Style/g, '');
    content = content.replace(/CarExpert/g, '');
    changed = true;
  }

  if (content.includes('#1')) {
    content = content.replace(/อันดับ #1/g, 'ชั้นนำ');
    content = content.replace(/แพลตฟอร์ม.*#1/g, 'แพลตฟอร์มชั้นนำ');
    changed = true;
  }
  
  if (content.includes('669,900')) {
    content = content.replace(/Dynamic ราคา 669,900/g, 'Premium ราคา 669,900');
    content = content.replace(/Dynamic 669,900/g, 'Premium 669,900');
    content = content.replace(/Dynamic \(669,900/g, 'Premium (669,900');
    content = content.replace(/669,900 ฿ รุ่น Dynamic/g, '669,900 ฿ รุ่น Premium');
    changed = true;
  }
  
  if (content.includes('ลดอุณหภูมิสูงสุด 14')) {
    content = content.replace(/ลดอุณหภูมิสูงสุด 14[^<\s]*/g, 'ลดอุณหภูมิได้อย่างมีประสิทธิภาพ');
    changed = true;
  }
  
  if (content.includes('ทดสอบจริง 100%')) {
    content = content.replace(/ทดสอบจริง 100% ทุกชิ้น\/ทุกรุ่น/g, 'ผ่านการทดสอบคุณภาพจากผู้ผลิต');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(f, content);
    console.log('Updated', f);
  }
});
