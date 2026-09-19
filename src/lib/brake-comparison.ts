export type BrakeComparisonProduct = {
  id: string;
  name: string;
  scope: 'pad' | 'disc-pad-kit';
  minTempC: number | null;
  maxTempC: number | null;
  role: string;
  dustClaim: string;
  dustNote: string;
  source: string;
};

// Manufacturer declarations, not independently measured comparative performance scores.
export const brakeComparisonProducts: BrakeComparisonProduct[] = [
  { id: 'endless-ssm', name: 'ENDLESS SSM PLUS', scope: 'pad', minTempC: 0, maxTempC: 550, role: 'ผ้าถนน เน้นฝุ่นน้อยและความสบาย', dustClaim: 'เน้นฝุ่นต่ำ', dustNote: 'คำกล่าวผู้ผลิต ไม่มีผลวัดฝุ่นที่เทียบตรงกับแบรนด์อื่น', source: 'https://www.endless-sport.co.jp/products/brake_pad/SSMPLUS.html' },
  { id: 'project-mu-ps', name: 'Project μ TYPE PS', scope: 'pad', minTempC: 0, maxTempC: 500, role: 'ผ้าถนน เน้นลดฝุ่นและเสียง', dustClaim: 'เน้นฝุ่นต่ำ', dustNote: 'คำกล่าวผู้ผลิต ไม่มีผลวัดฝุ่นที่เทียบตรงกับแบรนด์อื่น', source: 'https://www.project-mu.co.jp/ja/product-info/type_ps' },
  { id: 'endless-mx72', name: 'ENDLESS MX72', scope: 'pad', minTempC: 50, maxTempC: 700, role: 'ผ้าสำหรับถนนร่วมกับการใช้สนามตามขอบเขตรุ่น', dustClaim: 'ยังเทียบไม่ได้', dustNote: 'Data unavailable: ไม่มีค่าปริมาณฝุ่นจากวิธีทดสอบเดียวกัน', source: 'https://www.endless-sport.co.jp/products/brake_pad/MX72.html' },
  { id: 'endless-mx72-plus', name: 'ENDLESS MX72 PLUS', scope: 'pad', minTempC: 50, maxTempC: 750, role: 'ผ้าที่ขยายขอบเขตงานร้อนต่อเนื่อง', dustClaim: 'ยังเทียบไม่ได้', dustNote: 'Data unavailable: ไม่มีค่าปริมาณฝุ่นจากวิธีทดสอบเดียวกัน', source: 'https://www.endless-sport.co.jp/products/brake_pad/MX72PLUS.html' },
  { id: 'brembo-ev-kit', name: 'Brembo EV Kit', scope: 'disc-pad-kit', minTempC: null, maxTempC: null, role: 'ชุดจานและผ้าที่ต้องใช้คู่กันสำหรับ EV ตามรหัสที่รองรับ', dustClaim: 'เน้นลดฝุ่น', dustNote: 'คำกล่าวผู้ผลิต ไม่มีผลวัดฝุ่นที่เทียบตรงกับแบรนด์อื่น', source: 'https://www.brembo.com/en/solutions/for-your-car/ev-kit' },
];

export function parseQuote(value: string): number | null {
  if (!/^\d+(?:\.\d{1,2})?$/.test(value.trim())) return null;
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 && amount <= 10_000_000 ? amount : null;
}
