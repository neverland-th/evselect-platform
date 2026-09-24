export type BrakeComparisonProduct = {
  id: string; name: string; part: string;
  pistons: number; diameterMm: number; thicknessMm: number;
  construction: string; vehicle: string; fitmentNote: string;
  contents: string; pad: string; price: number; currency: 'USD' | 'JPY';
  priceNote: string; source: string; technicalSource: string; wheelSource: string;
  authority: string; dustNote: string;
};

// Exact new front kits, not pad-only, rotor-only or untraceable mixed kits.
// Native-market prices checked 2026-09-19; not Thai landed/installed quotations.
export const brakeComparisonProducts: BrakeComparisonProduct[] = [
  {
    id: 'ap-essex-9561', name: 'AP Racing by Essex 9561', part: '20.01.10013',
    pistons: 6, diameterMm: 380, thicknessMm: 36, construction: 'จานเหล็ก 2 ชิ้น Floating · J Hook · 72 ช่องลม',
    vehicle: 'Tesla Model 3 ตามรายการ Essex',
    fitmentNote: 'แคตตาล็อกระบุล้อ OEM 20 นิ้ว แต่คู่มือติดตั้งเตือน off-road use only แม้หน้าสินค้าใช้ชื่อ Road ต้องขอคำชี้แจงจาก Essex และตรวจปี รุ่นย่อยกับ template โดยเฉพาะ Highland และล้อแต่ง',
    contents: 'คาลิเปอร์คู่หน้า จานคู่พร้อมดุมกลาง ผ้า Ferodo DS2500 ขายึด สายเบรก และอุปกรณ์ติดตั้งตามคู่มือชุด',
    pad: 'Ferodo DS2500', price: 5249, currency: 'USD',
    priceNote: 'ราคาชุดหน้าในสหรัฐฯ ไม่เลือกบริการ bedding เพิ่ม $100; ภาษีและค่าขนส่งตามปลายทางต้องขอแยก',
    source: 'https://www.essexparts.com/essex-designed-ap-racing-radi-cal-competition-brake-kit-front-cp9562380mm-tesla-model-3',
    technicalSource: 'https://www.essexparts.com/storage/wysiwyg/20-99-00012.pdf',
    wheelSource: 'https://www.essexparts.com/storage/wysiwyg/1916.pdf',
    authority: 'Essex อยู่ในรายชื่อ Distributor ของ AP Racing; ชุดนี้ออกแบบและจำหน่ายในชื่อ AP Racing by Essex',
    dustNote: 'Data unavailable: ไม่มีผลวัดฝุ่น DS2500 ด้วยวิธีเดียวกับอีกสามชุด จึงไม่ให้คะแนนจากชื่อแบรนด์',
  },
  {
    id: 'brembo-gt-m', name: 'Brembo GT | M', part: '1N1.9076A2 · จานเจาะรู / แดง / FM1000',
    pistons: 6, diameterMm: 380, thicknessMm: 34, construction: 'คาลิเปอร์ Cast Monobloc · จานเหล็ก 2 ชิ้น Floating',
    vehicle: 'Tesla Model 3 AWD / RWD ตามรายการ Race Technologies',
    fitmentNote: 'แหล่งข้อมูลเตือนรุ่น Performance ว่าล้อขยับออก 4.5 mm ต้องยืนยันปี/รุ่นและระยะเคลียร์ใหม่ ไม่เหมารวม Highland',
    contents: 'คาลิเปอร์คู่หน้า จานคู่ประกอบดุมกลาง ผ้า FM1000 ขายึด Brembo สาย Goodridge และอุปกรณ์ติดตั้ง',
    pad: 'Brembo FM1000', price: 4895, currency: 'USD',
    priceNote: 'ราคาตัวเลือกมาตรฐานใน Race Technologies; เปลี่ยนลายจานหรือผ้าอาจเปลี่ยนราคา ภาษีและขนส่งตามปลายทางต้องขอแยก',
    source: 'https://www.racetechnologies.com/products/brembo-gt-m-front-brake-system-6-piston-caliper-2-piece-disc-18-model-3-awd-18-model-3-rwd-1',
    technicalSource: 'https://www.racetechnologies.com/products/brembo-gt-m-front-brake-system-6-piston-caliper-2-piece-disc-18-model-3-awd-18-model-3-rwd-1',
    wheelSource: 'https://www.racetechnologies.com/cdn/shop/files/1Nx.9076A_DRW.png?v=1782767898',
    authority: 'Brembo ระบุ Race Technologies เป็นคู่ค้าด้านการจำหน่ายในเอกสารปี 2012; ราคาชุดนี้อ้างอิงหน้าสินค้าของ Race Technologies',
    dustNote: 'Data unavailable: ไม่มีค่าฝุ่นจากการทดสอบร่วมกับอีกสามชุด จำนวนพอตไม่ได้ใช้ทำนายฝุ่น',
  },
  {
    id: 'endless-alvell6', name: 'ENDLESS ALVELL6', part: 'FIYIXGH40W',
    pistons: 6, diameterMm: 380, thicknessMm: 34, construction: 'คาลิเปอร์ 6 พอต · จานเหล็ก 2 ชิ้น',
    vehicle: 'Alphard / Vellfire 40 · AGH40/45, AAHH40/45, TAHA40/45',
    fitmentNote: 'ชุดอ้างอิงญี่ปุ่นสำหรับ Alphard/Vellfire ไม่ใช่ M6 ในรถเจ้าของ และไม่ใช่รหัสชุด Tesla',
    contents: 'คาลิเปอร์คู่หน้า จานคู่ ผ้า MX72 สายเบรก และขายึดตามชุด ALVELL6',
    pad: 'ENDLESS MX72 · รูปทรง RCP120', price: 602800, currency: 'JPY',
    priceNote: '¥602,800 รวมภาษีญี่ปุ่น / ¥548,000 ก่อนภาษี; ไม่ใช่ราคาไทยพร้อมติดตั้ง',
    source: 'https://www.endless-sport.co.jp/products/brake_caliper/BrakeCaliper_Carlist/toyota/TOYOTA_Alphard40.html',
    technicalSource: 'https://www.endless-sport.co.jp/products/brake_caliper/index_Alvel6.html',
    wheelSource: 'https://www.endless-sport.co.jp/brake_caliper/car_list/paper_pattern/AV6-1.pdf',
    authority: 'ราคาและรหัสชุดจากตารางรถของ ENDLESS Japan โดยตรง',
    dustNote: 'MX72 ไม่ใช่คำรับรองว่าฝุ่นน้อยที่สุด; Data unavailable สำหรับผลวัดข้ามชุดด้วยเงื่อนไขเดียวกัน',
  },
  {
    id: 'project-mu-fs6', name: 'Project μ FS6', part: 'FS6-T127C',
    pistons: 6, diameterMm: 380, thicknessMm: 32, construction: 'คาลิเปอร์ Forged · จานเหล็ก 2 ชิ้น 8 ร่องตรง',
    vehicle: 'Alphard / Vellfire AGH30W / GGH30W · 01/2015–06/2023',
    fitmentNote: 'ชุดอ้างอิงรถตลาดญี่ปุ่น ไม่ใช่รหัส Tesla และยังไม่รับรองรถส่งออก ต้องตรวจแบบคาลิเปอร์กับล้อจริง',
    contents: 'คาลิเปอร์คู่หน้า ขายึดเหล็ก ผ้า NS-C จานคู่ 2 ชิ้น สาย Teflon สปริงรองผ้า และโบลต์',
    pad: 'Project μ NS-C มาตรฐาน', price: 547800, currency: 'JPY',
    priceNote: 'FS6-T127C ¥547,800 รวมภาษีญี่ปุ่น / ¥498,000 ก่อนภาษี; ไม่ใช้ราคาเริ่มต้นของรุ่นจานเล็กกว่า',
    source: 'https://www.project-mu.co.jp/matching/caliper/caliper_matching.files/sheet003.htm',
    technicalSource: 'https://www.project-mu.co.jp/ja/product-info/forged_sports_caliper_6pistons_fs6',
    wheelSource: 'https://www.project-mu.co.jp/ja/product-info/forged_sports_caliper_6pistons_fs6',
    authority: 'รหัส ขนาด และราคาจากตารางรถของ Project μ โดยตรง',
    dustNote: 'ฝุ่นขึ้นกับผ้า NS-C ที่เลือกในชุด; Data unavailable สำหรับคะแนนฝุ่นที่เทียบตรงกับอีกสามชุด',
  },
];

export function formatKitPrice(product: BrakeComparisonProduct): string {
  return `${product.currency === 'USD' ? '$' : '¥'}${product.price.toLocaleString('en-US')} ${product.currency}`;
}
