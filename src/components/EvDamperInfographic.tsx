'use client';

import { useState } from 'react';

// ─── Brand whitelist (sanitized — only these 4 are allowed) ───────────────────
const ALLOWED_BRANDS = ['KW', 'Öhlins', 'BC Racing', 'H-Drive'] as const;
type AllowedBrand = typeof ALLOWED_BRANDS[number];

function sanitizeBrand(input: string): AllowedBrand {
  const found = ALLOWED_BRANDS.find(b => b === input);
  return found ?? 'KW';
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface BrandSpec {
  name: AllowedBrand;
  origin: string;
  tagline: string;
  bumpClicks: string;
  reboundClicks: string;
  thermalRating: number; // 1-5
  priceRange: string;
  bestFor: string[];
  baseSetup: {
    city: string;
    highway: string;
    track: string;
  };
  color: string;
  accentColor: string;
}

const BRAND_DATA: BrandSpec[] = [
  {
    name: 'KW',
    origin: 'เยอรมนี 🇩🇪',
    tagline: 'Precision Engineering for High-Speed Stability',
    bumpClicks: '12–16 คลิก',
    reboundClicks: '14–18 คลิก',
    thermalRating: 5,
    priceRange: '45,000–95,000 ฿',
    bestFor: ['วิ่งทางไกล', 'ทางด่วน', 'ต้องการความนิ่ง'],
    baseSetup: {
      city: 'Bump: 8 คลิก / Rebound: 10 คลิก',
      highway: 'Bump: 12 คลิก / Rebound: 14 คลิก',
      track: 'Bump: 16 คลิก / Rebound: 18 คลิก',
    },
    color: 'border-blue-500',
    accentColor: 'text-blue-400',
  },
  {
    name: 'Öhlins',
    origin: 'สวีเดน 🇸🇪',
    tagline: 'Road & Track — The Gold Standard for Ride Comfort',
    bumpClicks: '20–30 คลิก',
    reboundClicks: '20–30 คลิก',
    thermalRating: 5,
    priceRange: '60,000–130,000 ฿',
    bestFor: ['ครอบครัว', 'ความสบายสูงสุด', 'ใช้งานประจำวัน'],
    baseSetup: {
      city: 'Bump: 12 คลิก / Rebound: 14 คลิก',
      highway: 'Bump: 16 คลิก / Rebound: 18 คลิก',
      track: 'Bump: 24 คลิก / Rebound: 24 คลิก',
    },
    color: 'border-amber-500',
    accentColor: 'text-amber-400',
  },
  {
    name: 'BC Racing',
    origin: 'ไต้หวัน 🇹🇼',
    tagline: 'Full Adjustability — Your Suspension, Your Rules',
    bumpClicks: '30+ คลิก',
    reboundClicks: '30+ คลิก',
    thermalRating: 4,
    priceRange: '18,000–45,000 ฿',
    bestFor: ['จัดทรงรถ', 'ปรับได้เยอะสุด', 'งบจำกัด-ฟีเจอร์เต็ม'],
    baseSetup: {
      city: 'Bump: 10 คลิก / Rebound: 12 คลิก',
      highway: 'Bump: 18 คลิก / Rebound: 20 คลิก',
      track: 'Bump: 28 คลิก / Rebound: 30 คลิก',
    },
    color: 'border-red-500',
    accentColor: 'text-red-400',
  },
  {
    name: 'H-Drive',
    origin: 'ไทย 🇹🇭',
    tagline: 'Built for Thai Roads — Best Value per Baht',
    bumpClicks: '16–20 คลิก',
    reboundClicks: '16–20 คลิก',
    thermalRating: 4,
    priceRange: '12,000–28,000 ฿',
    bestFor: ['ราคาคุ้มค่า', 'ถนนไทย', 'เริ่มต้นอัพเกรด'],
    baseSetup: {
      city: 'Bump: 8 คลิก / Rebound: 10 คลิก',
      highway: 'Bump: 12 คลิก / Rebound: 14 คลิก',
      track: 'Bump: 18 คลิก / Rebound: 18 คลิก',
    },
    color: 'border-lime-500',
    accentColor: 'text-lime-400',
  },
];

const ROAD_TYPES = [
  {
    id: 'city',
    label: 'ในเมือง',
    icon: '🏙️',
    description: 'คอสะพาน, หลุมบ่อ, ออก-หยุดถี่',
    challenge: 'แรงกระแทกสูง (High-Speed Bump)',
    tip: 'ลด Bump คลิกลง 2-4 ตำแหน่ง เพิ่มความนุ่มนวลบนถนนขรุขระ',
    energy: 85,
  },
  {
    id: 'highway',
    label: 'ทางด่วน/มอเตอร์เวย์',
    icon: '🛣️',
    description: 'รอยต่อสะพาน, คลื่นถนน, ความเร็วสูง',
    challenge: 'โช้คทำงานที่ความถี่สูง (High-Frequency)',
    tip: 'เพิ่ม Rebound 2-3 คลิก ลดการเด้งสะท้อนระหว่างรอยต่อ',
    energy: 60,
  },
  {
    id: 'track',
    label: 'สนามแข่ง/ถนนเปลี่ยว',
    icon: '🏁',
    description: 'โค้งแรง, เบรกหนัก, เร่งรัด',
    challenge: 'น้ำหนักถ่ายเท (Weight Transfer) สูง',
    tip: 'เพิ่มทั้ง Bump และ Rebound ให้สุด ลดการโยก เพิ่มความกระชับ',
    energy: 40,
  },
];

const QUIZ_QUESTIONS = [
  {
    id: 'style',
    question: 'สไตล์การขับขี่หลักของคุณคืออะไร?',
    options: [
      { label: 'ครอบครัว นุ่มนวล สบาย', value: 'comfort', brands: ['Öhlins'] },
      { label: 'ทางไกล เร็ว นิ่ง', value: 'touring', brands: ['KW'] },
      { label: 'ซิ่ง จัดทรง เน้นสมรรถนะ', value: 'sport', brands: ['BC Racing'] },
      { label: 'เน้นคุ้มค่า ถนนไทยทั่วไป', value: 'value', brands: ['H-Drive'] },
    ],
  },
  {
    id: 'road',
    question: 'คุณวิ่งถนนแบบไหนบ่อยที่สุด?',
    options: [
      { label: 'ในเมือง กทม./ต่างจังหวัด', value: 'urban', brands: ['H-Drive', 'BC Racing'] },
      { label: 'ทางด่วน / มอเตอร์เวย์', value: 'highway', brands: ['KW', 'Öhlins'] },
      { label: 'ผสมทั้งสองอย่าง', value: 'mixed', brands: ['Öhlins', 'KW'] },
      { label: 'สนามและถนนวิบาก', value: 'track', brands: ['BC Racing', 'KW'] },
    ],
  },
  {
    id: 'budget',
    question: 'งบประมาณที่คุณมีสำหรับโช้คอัพ?',
    options: [
      { label: 'ต่ำกว่า 30,000 ฿', value: 'low', brands: ['H-Drive'] },
      { label: '30,000–55,000 ฿', value: 'mid', brands: ['BC Racing', 'KW'] },
      { label: '55,000–80,000 ฿', value: 'high', brands: ['KW', 'Öhlins'] },
      { label: 'ไม่จำกัด ขอดีที่สุด', value: 'premium', brands: ['Öhlins'] },
    ],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function PhysicsSection() {
  const [showFormula, setShowFormula] = useState(false);
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
        <span className="text-3xl">⚖️</span> ทำไมแบต EV ถึงทำช่วงล่างทำงานหนักขึ้น?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700">
          <div className="text-zinc-400 text-sm mb-2 font-medium">รถน้ำมันทั่วไป (ICE)</div>
          <div className="text-4xl font-black text-white mb-1">~1,500 <span className="text-base font-normal text-zinc-400">กก.</span></div>
          <div className="w-full bg-zinc-700 rounded-full h-3 mt-3">
            <div className="bg-zinc-500 h-3 rounded-full" style={{ width: '55%' }} />
          </div>
          <div className="text-xs text-zinc-500 mt-1">น้ำหนักเครื่องยนต์ + ถัง</div>
        </div>
        <div className="bg-zinc-800/60 rounded-xl p-5 border border-lime-500/30">
          <div className="text-lime-400 text-sm mb-2 font-medium">รถยนต์ไฟฟ้า (EV)</div>
          <div className="text-4xl font-black text-white mb-1">~2,100 <span className="text-base font-normal text-zinc-400">กก.</span></div>
          <div className="w-full bg-zinc-700 rounded-full h-3 mt-3">
            <div className="bg-lime-500 h-3 rounded-full" style={{ width: '78%' }} />
          </div>
          <div className="text-xs text-zinc-500 mt-1">แบตเตอรี่ Skateboard ~500-700 กก.</div>
        </div>
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
        <p className="text-amber-300 text-sm leading-relaxed">
          <span className="font-bold">ผลลัพธ์:</span> น้ำหนักที่เพิ่มขึ้น 300-600 กก. ทำให้พลังงานจลน์ที่โช้คต้องดูดซับเพิ่มขึ้นอย่างมาก
          โช้คเดิมจากโรงงานมักออกแบบสำหรับน้ำหนักมาตรฐาน ทำให้เกิดอาการ <span className="font-bold">"ย้วย"</span> หรือ <span className="font-bold">"กระด้าง"</span>
        </p>
      </div>
      <button
        onClick={() => setShowFormula(v => !v)}
        className="text-sm text-lime-400 hover:text-lime-300 underline underline-offset-2 transition-colors"
      >
        {showFormula ? '▲ ซ่อนคำอธิบายเปรียบเทียบ' : '▼ ดูคำอธิบายเปรียบเทียบให้เห็นภาพง่ายๆ'}
      </button>
      {showFormula && (
        <div className="bg-zinc-800 rounded-xl p-5 border border-zinc-700 text-sm space-y-3">
          <p className="text-zinc-300 leading-relaxed">
            <span className="text-lime-400 font-bold">นึกภาพง่ายๆ:</span> ลองจินตนาการว่าคุณต้องเอามือรับ <span className="text-white font-bold">"ลูกปิงปอง"</span> เทียบกับรับ <span className="text-white font-bold">"ลูกเปตอง"</span> ที่โยนมาด้วยความเร็วเท่ากัน
          </p>
          <p className="text-zinc-400 leading-relaxed">
            แน่นอนว่ารับลูกเปตองจะทำให้มือคุณเจ็บและสะท้านกว่ามาก เพราะมัน <strong>"หนักกว่า"</strong> พลังงานพุ่งเข้ามามากกว่า
          </p>
          <p className="text-zinc-400 leading-relaxed">
            รถ EV ที่แบกแบตเตอรี่หนักๆ ก็เหมือนลูกเปตองครับ เมื่อตกหลุมหรือขึ้นลูกระนาด โช้คอัพ (แขนของคุณ) จะต้องรับภาระหนักกว่ารถน้ำมันทั่วไปมหาศาล โช้คเดิมจากโรงงานที่ตั้งค่ามากลางๆ จึงมักจะ <strong>"รับแรงกระแทกไม่ไหว"</strong> ทำให้รถเกิดอาการย้วย หรือเด้งไม่หยุดนั่นเอง
          </p>
        </div>
      )}
    </div>
  );
}

function RoadSimulatorSection() {
  const [activeRoad, setActiveRoad] = useState(0);
  const road = ROAD_TYPES[activeRoad];
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-5">
      <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
        <span className="text-3xl">🛞</span> จำลองสภาพถนน — เลือกดูผลกระทบต่อโช้ค
      </h3>
      <div className="flex gap-2 flex-wrap">
        {ROAD_TYPES.map((r, i) => (
          <button
            key={r.id}
            onClick={() => setActiveRoad(i)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeRoad === i
                ? 'bg-lime-500 text-zinc-900'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            {r.icon} {r.label}
          </button>
        ))}
      </div>
      <div className="bg-zinc-800/60 rounded-xl p-5 border border-zinc-700 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{road.icon}</span>
          <div>
            <div className="font-bold text-white text-lg">{road.label}</div>
            <div className="text-zinc-400 text-sm">{road.description}</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-zinc-400">ภาระของโช้ค (Damper Load)</span>
            <span className="text-lime-400 font-bold">{road.energy}%</span>
          </div>
          <div className="w-full bg-zinc-700 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-lime-600 to-lime-400 transition-all duration-500"
              style={{ width: `${road.energy}%` }}
            />
          </div>
        </div>
        <div className="bg-zinc-900/80 rounded-lg p-4 border border-zinc-700 space-y-1">
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">ความท้าทายหลัก</div>
          <div className="text-amber-300 font-medium text-sm">{road.challenge}</div>
        </div>
        <div className="bg-lime-500/10 rounded-lg p-4 border border-lime-500/30">
          <div className="text-xs text-lime-500 uppercase tracking-wider font-semibold mb-1">💡 คำแนะนำการปรับ</div>
          <div className="text-lime-200 text-sm leading-relaxed">{road.tip}</div>
        </div>
      </div>
    </div>
  );
}

function BrandMatrixSection() {
  const [activeMode, setActiveMode] = useState<'city' | 'highway' | 'track'>('city');
  const [selected, setSelected] = useState<AllowedBrand | null>(null);

  const modeLabels = { city: '🏙️ ในเมือง', highway: '🛣️ ทางด่วน', track: '🏁 สนาม' };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-5">
      <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
        <span className="text-3xl">📊</span> เปรียบเทียบ 4 แบรนด์โช้คอัพ
      </h3>
      <div className="flex gap-2 flex-wrap">
        {(Object.keys(modeLabels) as Array<keyof typeof modeLabels>).map(mode => (
          <button
            key={mode}
            onClick={() => setActiveMode(mode)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeMode === mode
                ? 'bg-lime-500 text-zinc-900'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            {modeLabels[mode]}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {BRAND_DATA.map(brand => {
          const safeName = sanitizeBrand(brand.name);
          const isSelected = selected === safeName;
          return (
            <button
              key={safeName}
              onClick={() => setSelected(isSelected ? null : safeName)}
              className={`text-left rounded-xl border-2 p-5 space-y-3 transition-all ${
                isSelected
                  ? `${brand.color} bg-zinc-800`
                  : 'border-zinc-700 bg-zinc-800/40 hover:border-zinc-600'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className={`text-lg font-black ${brand.accentColor}`}>{safeName}</div>
                  <div className="text-xs text-zinc-500">{brand.origin}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-400">ราคา</div>
                  <div className="text-xs font-bold text-zinc-200">{brand.priceRange}</div>
                </div>
              </div>
              <div className="text-xs text-zinc-400 italic leading-relaxed">{brand.tagline}</div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Bump</span>
                  <span className="text-zinc-200 font-mono">{brand.bumpClicks}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-500">Rebound</span>
                  <span className="text-zinc-200 font-mono">{brand.reboundClicks}</span>
                </div>
              </div>
              {/* Thermal Rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < brand.thermalRating ? brand.color.replace('border-', 'bg-') : 'bg-zinc-700'
                    }`}
                  />
                ))}
              </div>
              {isSelected && (
                <div className="border-t border-zinc-600 pt-3 space-y-1.5">
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wide">เซ็ตติ้ง {modeLabels[activeMode]}</div>
                  <div className={`text-xs font-mono ${brand.accentColor}`}>
                    {brand.baseSetup[activeMode]}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {brand.bestFor.map(tag => (
                      <span key={tag} className="text-xs bg-zinc-700 text-zinc-300 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-zinc-500 text-center">แตะที่การ์ดเพื่อดูเซ็ตติ้งโช้คเริ่มต้นแนะนำ</p>
    </div>
  );
}

function RecommendationQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AllowedBrand | null>(null);

  const handleAnswer = (questionId: string, value: string, brands: string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    // Don't show result until all answered
    if (Object.keys(answers).length + 1 >= QUIZ_QUESTIONS.length) {
      // Count brand votes from all answers
      const votes: Record<string, number> = {};
      // include current answer
      const allAnswerBrands = [...brands];
      QUIZ_QUESTIONS.forEach(q => {
        if (answers[q.id]) {
          const opt = q.options.find(o => o.value === answers[q.id]);
          opt?.brands.forEach(b => allAnswerBrands.push(b));
        }
      });
      allAnswerBrands.forEach(b => { votes[b] = (votes[b] ?? 0) + 1; });
      const winner = Object.entries(votes).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'KW';
      setResult(sanitizeBrand(winner));
    }
  };

  const reset = () => { setAnswers({}); setResult(null); };

  const resultBrand = result ? BRAND_DATA.find(b => b.name === result) : null;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-5">
      <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
        <span className="text-3xl">🎯</span> โช้คแบบไหนเหมาะกับคุณ? ทำแบบทดสอบเลย
      </h3>
      {result && resultBrand ? (
        <div className="space-y-4">
          <div className={`rounded-xl border-2 ${resultBrand.color} p-6 space-y-3 bg-zinc-800/60`}>
            <div className="text-zinc-400 text-sm">ผลการวิเคราะห์ของคุณ</div>
            <div className={`text-4xl font-black ${resultBrand.accentColor}`}>{resultBrand.name}</div>
            <div className="text-zinc-300 text-sm leading-relaxed">{resultBrand.tagline}</div>
            <div className="bg-zinc-900/60 rounded-lg p-4 space-y-1">
              <div className="text-xs text-zinc-500 uppercase font-semibold">เซ็ตติ้งเริ่มต้นแนะนำ (ในเมือง)</div>
              <div className={`font-mono text-sm ${resultBrand.accentColor}`}>{resultBrand.baseSetup.city}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {resultBrand.bestFor.map(tag => (
                <span key={tag} className="text-xs bg-zinc-700 text-zinc-200 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="text-sm text-zinc-300">
              <span className="font-semibold text-white">ราคาโดยประมาณ:</span>{' '}
              <span className={resultBrand.accentColor}>{resultBrand.priceRange}</span>
            </div>
          </div>
          <div className="bg-lime-500/10 border border-lime-500/30 rounded-xl p-4">
            <p className="text-lime-300 text-sm leading-relaxed">
              <span className="font-bold">💡 คำแนะนำจาก EVSELECT:</span>{' '}
              ผลนี้เป็นจุดเริ่มต้น ค่าจูนที่เหมาะสมจริงๆ ขึ้นอยู่กับน้ำหนักตัว รถรุ่น และสภาพถนนที่คุณวิ่งประจำ
              ติดต่อทีม EVSELECT เพื่อขอคำแนะนำเซ็ตติ้งเฉพาะรุ่นรถของคุณได้เลยครับ
            </p>
          </div>
          <button
            onClick={reset}
            className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors border border-zinc-700"
          >
            ทำแบบทดสอบใหม่อีกครั้ง
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <div key={q.id} className={`space-y-3 ${Object.keys(answers).length < qi ? 'opacity-40 pointer-events-none' : ''}`}>
              <div className="text-zinc-200 font-medium">
                <span className="text-lime-400 font-bold mr-2">{qi + 1}.</span>{q.question}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(q.id, opt.value, opt.brands)}
                    className={`text-left px-4 py-3 rounded-xl text-sm border transition-all ${
                      answers[q.id] === opt.value
                        ? 'bg-lime-500/20 border-lime-500 text-lime-300'
                        : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export default function EvDamperInfographic() {
  return (
    <div className="space-y-6 my-10">
      <PhysicsSection />
      <RoadSimulatorSection />
      <BrandMatrixSection />
      <RecommendationQuiz />
      <p className="text-center text-xs text-zinc-600 pt-2">
        ข้อมูลเซ็ตติ้งเป็นค่าเริ่มต้นแนะนำเท่านั้น ควรปรึกษาช่างผู้เชี่ยวชาญก่อนติดตั้งจริง · EVSELECT Fitment QC 100%
      </p>
    </div>
  );
}
