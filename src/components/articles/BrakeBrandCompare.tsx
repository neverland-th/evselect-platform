'use client';

import { useState } from 'react';
import { brakeComparisonProducts, parseQuote, type BrakeComparisonProduct } from '@/lib/brake-comparison';
import styles from './BrakeGuide.module.css';

function Ring({ title, value, suffix, fraction, color, children }: { title: string; value: string; suffix?: string; fraction: number | null; color: string; children: React.ReactNode }) {
  const progress = fraction === null ? null : Math.min(1, Math.max(0, fraction));
  return <div className="min-w-0 text-center">
    <h5 className="flex min-h-[2.75em] items-end justify-center text-sm font-bold leading-snug text-slate-700">{title}</h5>
    <div className="relative mx-auto my-2 aspect-square w-full max-w-[7.5rem]">
      <svg viewBox="0 0 120 120" aria-hidden="true" className="h-full w-full"><g transform="rotate(-90 60 60)"><circle cx="60" cy="60" r="49" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeDasharray={progress === null ? '4 5' : undefined} />{progress !== null && <circle cx="60" cy="60" r="49" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" pathLength="100" strokeDasharray={`${progress * 100} 100`} />}</g><text x="60" y="64" textAnchor="middle" fill="#0f172a" fontSize="23" fontWeight="800">{value}</text></svg>
    </div>
    <div className="text-xs leading-relaxed text-slate-600 sm:text-sm"><span className="sr-only">{value} </span>{suffix && <span className="mb-1 block">{suffix}</span>}{children}</div>
  </div>;
}

export default function BrakeBrandCompare() {
  const [selection, setSelection] = useState(['endless-ssm', 'project-mu-ps']);
  const [quotes, setQuotes] = useState<Record<string, string>>({});
  const [budget, setBudget] = useState('20000');
  const [quoteScope, setQuoteScope] = useState('pads-front');
  const chosen = selection.map(id => brakeComparisonProducts.find(product => product.id === id)!);
  const budgetValue = parseQuote(budget);
  const compatibleScope = (product: BrakeComparisonProduct) => product.scope === 'pad' ? quoteScope.startsWith('pads-') : quoteScope === 'disc-pads-front';
  const amount = (product: BrakeComparisonProduct) => parseQuote(quotes[`${product.id}:${quoteScope}`] ?? '');
  const comparable = chosen.every(product => compatibleScope(product) && amount(product) !== null);
  const difference = comparable ? Math.abs(amount(chosen[0])! - amount(chosen[1])!) : null;

  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6" data-testid="brake-brand-compare">
    <div className="mb-5"><span className="text-sm font-bold text-lime-800">เปรียบเทียบตามข้อมูล · ไม่มีคะแนนรวม</span><h3 className="mt-2 text-xl font-bold sm:text-2xl">3 วง ช่วยเลือกให้ตรงใจ</h3><p className={`${styles.help} mt-2`}>วง Performance แสดงเพดานอุณหภูมิจานที่ผู้ผลิตระบุสำหรับผ้ารุ่นนั้น (สเกล 0–800°C) ไม่ใช่คะแนนระยะหยุด วงราคาแสดงสัดส่วนงบที่ใช้ ส่วนฝุ่นไม่มีมาตรวัดร่วมจึงแสดงเป็นข้อความ</p></div>
    <noscript><style>{'.brake-compare-controls{display:none}'}</style><p className={styles.note}>กำลังแสดง ENDLESS SSM PLUS เทียบ Project μ TYPE PS จากข้อมูลผู้ผลิต เปิด JavaScript เพื่อเปลี่ยนรุ่นและกรอกราคา</p></noscript>
    <div className="brake-compare-controls mb-5 grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold" htmlFor="brake-quote-scope">ขอบเขตราคาที่ต้องเหมือนกัน<select id="brake-quote-scope" value={quoteScope} onChange={event => setQuoteScope(event.target.value)} className="min-h-11 min-w-0 max-w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base"><option value="pads-front">ผ้าเพลาหน้า + ติดตั้ง + ภาษี</option><option value="pads-all">ผ้าทั้งคัน + ติดตั้ง + ภาษี</option><option value="disc-pads-front">จานและผ้าคู่หน้า + ติดตั้ง + ภาษี</option></select></label>
      <label className="grid gap-2 text-sm font-semibold" htmlFor="brake-quote-budget">งบสมมติของคุณ (บาท) — ปรับได้<input id="brake-quote-budget" inputMode="decimal" type="text" value={budget} onChange={event => setBudget(event.target.value)} className="min-h-11 min-w-0 rounded-xl border border-slate-300 bg-white px-3 py-2 text-base" placeholder="กรอกงบที่ต้องการเทียบ" /></label>
    </div>
    <div className="grid gap-4 lg:grid-cols-2">
      {chosen.map((product, index) => {
        const quote = amount(product);
        const scopeMatches = compatibleScope(product);
        const budgetPercent = quote && budgetValue && scopeMatches ? quote / budgetValue * 100 : null;
        return <section key={index} className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5" aria-label={`ตัวเลือก ${index === 0 ? 'A' : 'B'}`} data-testid={`compare-card-${index}`}>
          <label className="brake-compare-controls grid gap-2 text-sm font-bold" htmlFor={`brake-product-${index}`}>ตัวเลือก {index === 0 ? 'A' : 'B'} — เลือกแบรนด์และรุ่น<select id={`brake-product-${index}`} value={product.id} onChange={event => setSelection(previous => previous.map((id, slot) => slot === index ? event.target.value : id))} className="min-h-11 min-w-0 max-w-full rounded-xl border border-slate-300 bg-white px-2 py-2 text-base">{brakeComparisonProducts.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}</select></label>
          <h4 className="mt-4 text-lg font-bold text-slate-950">{product.name}</h4><p className={`${styles.help} mt-1`}>{product.role}</p>
          <div className={styles.rings} aria-live="polite" data-testid="comparison-rings">
            <Ring title="สมรรถนะ" value={product.maxTempC === null ? '—' : String(product.maxTempC)} suffix={product.maxTempC === null ? 'ไม่มีค่าเทียบ' : '°C สูงสุด'} fraction={product.maxTempC === null ? null : product.maxTempC / 800} color="#4d7c0f">{product.minTempC === null ? 'Data unavailable' : `ช่วงที่ระบุ ${product.minTempC}–${product.maxTempC}°C`}</Ring>
            <Ring title="ราคา" value={budgetPercent === null ? '—' : `${Math.round(budgetPercent)}%`} suffix={budgetPercent === null ? 'รอใบเสนอราคา' : 'ของงบที่ตั้ง'} fraction={budgetPercent === null ? null : budgetPercent / 100} color={budgetPercent !== null && budgetPercent > 100 ? '#b45309' : '#0369a1'}>{quote && scopeMatches ? `${quote.toLocaleString('en-US')} บาท` : 'กรอกราคาขอบเขตเดียวกัน'}</Ring>
            <Ring title="ฝุ่น" value="—" suffix="ไม่มีคะแนน" fraction={null} color="#64748b">{product.dustClaim}<br />ข้อมูลเชิงคุณภาพ</Ring>
          </div>
          <p className={styles.help}>{product.dustNote}</p>
          <div className="brake-compare-controls mt-4"><label htmlFor={`brake-quote-${index}`} className="grid gap-2 text-sm font-semibold">ราคาใบเสนอราคาของคุณ (บาท)<input id={`brake-quote-${index}`} inputMode="decimal" type="text" value={quotes[`${product.id}:${quoteScope}`] ?? ''} onChange={event => setQuotes(previous => ({ ...previous, [`${product.id}:${quoteScope}`]: event.target.value }))} disabled={!scopeMatches} className="min-h-11 min-w-0 rounded-xl border border-slate-300 bg-white px-3 py-2 text-base disabled:bg-slate-100" placeholder={scopeMatches ? 'ยังไม่มีราคาไทยที่ตรวจยืนยัน' : 'เลือกขอบเขตให้ตรงผลิตภัณฑ์'} /></label></div>
          {!scopeMatches && <p className="mt-3 text-sm leading-relaxed text-amber-800" role="status">ขอบเขตไม่ตรง: {product.scope === 'pad' ? 'รายการนี้เป็นผ้าเบรก ไม่ได้รวมจาน' : 'EV Kit ต้องเทียบเป็นชุดจานและผ้า ไม่ใช่ผ้าเดี่ยว'} จึงยังไม่วาดวงราคา</p>}
          {budgetPercent !== null && budgetPercent > 100 && <p className="mt-3 text-sm text-amber-800">เกินงบ {(quote! - budgetValue!).toLocaleString('en-US')} บาท · วงเต็มที่ 100% แต่แสดงเปอร์เซ็นต์จริง</p>}
          <a href={product.source} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-lime-800 underline underline-offset-4">อ่านข้อมูลรุ่นนี้จากผู้ผลิต ↗</a>
        </section>;
      })}
    </div>
    <p className="mt-5 text-sm font-semibold leading-relaxed text-slate-700" aria-live="polite" data-testid="quote-comparison">{difference !== null ? `ราคาที่คุณกรอกต่างกัน ${difference.toLocaleString('en-US')} บาท ในขอบเขตที่เลือก ตัวเลขนี้ยังไม่ได้รวมต้นทุนเปลี่ยนอะไหล่ในอนาคต` : 'ราคาไทย: Data unavailable · ยังไม่คำนวณส่วนต่างจนกว่าจะมีราคาจริงในขอบเขตเดียวกันทั้งสองตัวเลือก'}</p>
    <p className={`${styles.help} mt-3`}>ข้อมูลจากผู้ผลิต ตรวจ 19 ก.ย. 2569 · ราคามาจากค่าที่คุณกรอก ไม่ใช่ราคายืนยันโดย EVSELECT และจะหายเมื่อโหลดหน้าใหม่ · ยังไม่ยืนยัน fitment รถไทยแต่ละรุ่น · วงที่ไม่มีข้อมูลแสดงเส้นประ แทนการให้คะแนนศูนย์</p>
  </div>;
}
