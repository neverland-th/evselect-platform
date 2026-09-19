'use client';

import { useState } from 'react';
import { brakeEditorialProfiles, brakeScoreAxes, type BrakeScoreAxis } from '@/lib/brake-editorial-scores';
import styles from './BrakeGuide.module.css';

export default function BrakeBrandCompare() {
  const [filter, setFilter] = useState('all');
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<Record<string, BrakeScoreAxis | null>>({});
  const profiles = brakeEditorialProfiles.filter(profile => filter === 'all' || filter === profile.id);
  const allRevealed = brakeEditorialProfiles.every(profile => brakeScoreAxes.every(axis => revealed[`${profile.id}-${axis.id}`]));
  function showAll() {
    setRevealed(Object.fromEntries(brakeEditorialProfiles.flatMap(profile => brakeScoreAxes.map(axis => [`${profile.id}-${axis.id}`, true]))));
  }

  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6" data-testid="brake-brand-compare">
    <div className="mb-5"><span className="text-sm font-bold text-lime-800">Brembo · ENDLESS · Carbon Ceramic</span><h3 className="mt-2 text-xl font-bold sm:text-2xl">แตะวง แล้วดูว่าคุ้มกับคุณแค่ไหน</h3><p className={`${styles.help} mt-2`}>คะแนนคร่าว ๆ เต็ม 10 ประเมินโดย EVSELECT จากรีวิวและข้อมูลผู้ผลิต สำหรับการใช้ถนน ไม่ใช่คะแนนเฉลี่ยดาวหรือผลทดสอบของเรา ยิ่งสูงยิ่งเด่นในด้านนั้น</p></div>
    <noscript><style>{'.brake-score-interactive{display:none}'}</style><div className={styles.note}><p>คะแนนประเมินสำหรับถนน · เปิด JavaScript เพื่อแตะวงและเปลี่ยนตัวเลือก</p>{brakeEditorialProfiles.map(profile => <p key={profile.id}><strong>{profile.name}:</strong> Performance {profile.scores.performance.score}/10 · ความคุ้มค่า {profile.scores.price.score}/10 · ฝุ่นน้อย {profile.scores.dust.score}/10</p>)}<p><a href="#score-method" className="underline">อ่านเกณฑ์และแหล่งที่มาด้านล่าง</a></p></div></noscript>
    <div className="brake-score-interactive">
      <div className="mb-5 flex flex-wrap gap-2" aria-label="เลือกแนวทางเบรก" role="group">
        {[{ id: 'all', name: 'เทียบทั้งหมด' }, ...brakeEditorialProfiles].map(option => <button key={option.id} type="button" onClick={() => setFilter(option.id)} aria-pressed={filter === option.id} data-testid={`filter-${option.id}`} className={`min-h-11 rounded-full border px-4 py-2 text-sm font-bold ${filter === option.id ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-lime-600'}`}>{option.name}</button>)}
      </div>
      <div className={`grid items-start gap-4 ${filter === 'all' ? 'lg:grid-cols-3' : 'mx-auto max-w-xl'}`}>
        {profiles.map(profile => {
          const current = active[profile.id];
          const score = current ? profile.scores[current] : null;
          const axisLabel = brakeScoreAxes.find(axis => axis.id === current)?.label;
          return <section key={profile.id} className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4" aria-label={profile.name} data-testid={`score-card-${profile.id}`}>
            <h4 className="text-xl font-extrabold leading-snug text-slate-950">{profile.name}</h4><p className={`${styles.help} mt-2`}>{profile.context}</p>
            <div className={styles.rings} data-testid="comparison-rings">
              {brakeScoreAxes.map(axis => {
                const key = `${profile.id}-${axis.id}`;
                const visible = revealed[key];
                const value = profile.scores[axis.id].score;
                return <button key={axis.id} type="button" onClick={() => { setRevealed(previous => ({ ...previous, [key]: true })); setActive(previous => ({ ...previous, [profile.id]: previous[profile.id] === axis.id ? null : axis.id })); }} aria-expanded={current === axis.id} aria-controls={`score-detail-${profile.id}`} aria-label={`${visible ? 'ดูเหตุผลคะแนน' : 'เปิดคะแนน'} ${axis.label} ของ ${profile.name}${visible ? ` ${value} จาก 10` : ''}`} data-testid={`score-${key}`} className="flex min-h-11 min-w-0 flex-col rounded-xl py-2 text-center hover:bg-slate-50">
                  <span className="flex min-h-[2.75em] items-end justify-center text-xs font-bold leading-snug text-slate-700">{axis.id === 'performance' ? 'สมรรถนะ' : axis.label}</span>
                  <span className="relative mx-auto my-2 block aspect-square w-full max-w-[7.5rem]">
                    <svg viewBox="0 0 120 120" aria-hidden="true" className="h-full w-full"><g transform="rotate(-90 60 60)"><circle cx="60" cy="60" r="49" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeDasharray={visible ? undefined : '4 5'} />{visible && <circle cx="60" cy="60" r="49" fill="none" stroke={axis.color} strokeWidth="8" strokeLinecap="round" pathLength="100" strokeDasharray={`${value * 10} 100`} />}</g><text x="60" y="63" textAnchor="middle" fill="#0f172a" fontSize={visible ? '30' : '25'} fontWeight="800">{visible ? value : '?'}</text><text x="60" y="82" textAnchor="middle" fill="#475569" fontSize="12">{visible ? '/ 10' : 'แตะดู'}</text></svg>
                  </span>
                  <span className="sr-only" data-testid={`score-value-${key}`} aria-live="polite">{visible ? `${value}/10` : 'ยังไม่เปิดคะแนน'}</span><span className="block text-xs leading-relaxed text-slate-600 sm:text-sm">{axis.meaning}</span>
                </button>;
              })}
            </div>
            <div id={`score-detail-${profile.id}`} hidden={!score} className="rounded-xl border border-lime-200 bg-lime-50 p-4" role="region" aria-label={`เหตุผลคะแนน ${profile.name}`} aria-live="polite">
              {score && <><h5 className="text-base font-bold text-slate-950">{axisLabel} · {score.score}/10</h5><p className="mt-2 text-sm leading-relaxed text-slate-700">{score.reason}</p><p className="mt-3 text-sm leading-relaxed text-slate-600">{score.limitation}</p><ul className="mt-3 space-y-1">{score.sources.map(source => <li key={source.url}><a href={source.url} className="inline-flex min-h-11 items-center text-sm font-semibold leading-relaxed text-lime-900 underline underline-offset-4">{source.label} ↗</a></li>)}</ul></>}
            </div>
            <p className={`${styles.help} mt-3`}>{profile.scope}</p>
          </section>;
        })}
      </div>
      <button type="button" onClick={showAll} disabled={allRevealed} data-testid="show-all-scores" className="mt-5 min-h-11 rounded-xl bg-lime-400 px-5 py-3 text-base font-bold text-slate-950 hover:bg-lime-300 disabled:bg-slate-200 disabled:text-slate-600">{allRevealed ? 'เปิดคะแนนครบทุกวงแล้ว' : 'แสดงคะแนนทุกวง'}</button>
    </div>
    <details id="score-method" className={`${styles.detail} mt-5`}><summary>คะแนนนี้คิดอย่างไร และใช้ตัดสินได้แค่ไหน?</summary><div className="space-y-3 pb-4 text-sm leading-relaxed text-slate-600">
      <p>เป็นความเห็นบรรณาธิการแบบหยาบจากหลักฐานที่ลิงก์ไว้ ตรวจ 19 ก.ย. 2569 ไม่ใช่คะแนนที่ผู้รีวิวให้กับรถหรือชุดเดียวกัน ไม่มีการแปลงดาวคนละเว็บมาเฉลี่ย และไม่มีคะแนนรวมผู้ชนะ</p>
      <ul className="list-disc space-y-2 pl-5"><li><strong>Performance:</strong> มองฟีลและศักยภาพของชุดที่จับคู่ถูกต้อง รวมความร้อนและน้ำหนัก ไม่ใช่ระยะหยุด ค่า 7–8 คือเด่นในกลุ่มชุดพรีเมียม และ 9 คือมีจุดเด่นด้านวัสดุ/น้ำหนักเพิ่ม</li><li><strong>ราคา:</strong> ให้คะแนนความคุ้มค่าสำหรับถนน ไม่ใช่ราคาถูกสุด ค่า 4–6 คือการลงทุนพรีเมียมที่ต้องมีโจทย์ ส่วน 1–3 มีต้นทุนสูงเมื่อเทียบกับประโยชน์ที่ถนนทั่วไปอาจใช้ถึง ไม่ใช้ราคาเฉพาะจานมาเทียบยอดครบชุด</li><li><strong>ฝุ่น:</strong> 1–3 ต้องดูแลมาก, 4–6 ยังมีฝุ่นชัด, 7–9 มีแนวโน้มล้อสะอาดกว่า ไม่ใช่ผลชั่งฝุ่น และไม่ให้ 10 เพื่อสื่อว่าไม่มีฝุ่น</li></ul>
      <p>ความมั่นใจในการเทียบข้ามรถและข้ามรุ่นอยู่ในระดับต่ำ คะแนนต่างกัน 1 จุดยังไม่พิสูจน์ว่าเหนือกว่า รีวิวเก่าถูกระบุปี และต้องตรวจ compound ที่ขายปัจจุบันอีกครั้ง การเปลี่ยนผ้า ล้อ ยาง และรูปแบบขับอาจเปลี่ยนผลได้</p>
      <p><strong>Carbon Ceramic เป็นวัสดุ ไม่ใช่แบรนด์:</strong> คะแนนอ้างอิงระบบถนนอย่าง PCCB เพื่ออธิบายแนวโน้ม ไม่ครอบคลุมจานแต่งไม่ทราบที่มา และไม่รับรองขนาด 375–390 mm ว่าจะตรงรถ</p>
      <ul className="list-disc space-y-2 pl-5">{Array.from(new Map(brakeEditorialProfiles.flatMap(profile => Object.values(profile.scores).flatMap(score => score.sources)).map(source => [source.url, source])).values()).map(source => <li key={source.url}><a href={source.url} className="text-lime-800 underline underline-offset-4">{source.label}</a></li>)}</ul>
    </div></details>
  </div>;
}
