'use client';

/* eslint-disable react-hooks/set-state-in-effect -- Preserve the imported canvas editor's image-loading and local-draft lifecycle while adapting its service boundary. */
// Adapted from the owner-supplied MagicPath crisp-wave-3071 revision 462367477918224384.
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NextImage, { getImageProps } from 'next/image';
import { WHEEL_DIAMETERS, WHEEL_WIDTHS } from '@/lib/vehicle-style/options.js';
import { VEHICLE_STYLE_MAX_UPLOAD_MB } from '@/lib/vehicle-style/public-info';
const carbonAfter = '/vehicle-style/demo-red-user.webp';
const demoBefore = getImageProps({
  src: '/images/home/tesla-model-3-white-user.png',
  width: 1176, height: 733, alt: 'ภาพตัวอย่าง Tesla Model 3 สีขาว',
}).props.src;
type Wheel = {
  x: number;
  y: number;
  rx: number;
  ry: number;
  angle: number;
};
type Point = {
  x: number;
  y: number;
};
type Settings = {
  color: string;
  finish: string;
  design: number;
  scale: number;
  body: string;
  style: string;
  customColor: boolean;
  customBody: boolean;
  wheelRef: string;
  customBrand: string;
  customModel: string;
  wheelEdited: boolean;
  diameter: string;
  width: string;
};
type Saved = {
  id: number;
  name: string;
  image: string;
  source: string;
  settings: Settings;
  wheels: Wheel[];
  mask: Point[];
  demoMask: boolean;
  carbonDemo?: boolean;
};
const W = 2304,
  H = 1344;
const DEFAULT: Settings = {
  color: '#aa8354',
  finish: 'Satin',
  design: 10,
  scale: 100,
  body: 'original',
  style: 'OEM+',
  customColor: false,
  customBody: false,
  wheelRef: 'concept',
  customBrand: '',
  customModel: '',
  wheelEdited: false,
  diameter: 'keep',
  width: 'keep'
};
const DEMO_WHEELS: Wheel[] = [{
  x: .177,
  y: .607,
  rx: .027,
  ry: .095,
  angle: -.18
}, {
  x: .492,
  y: .667,
  rx: .040,
  ry: .117,
  angle: -.19
}];
const COLORS = [{
  name: 'Satin Bronze',
  hex: '#aa8354'
}, {
  name: 'Graphite',
  hex: '#50545a'
}, {
  name: 'Brushed Silver',
  hex: '#bbc0c4'
}, {
  name: 'Champagne',
  hex: '#c4ae79'
}, {
  name: 'Gloss Black',
  hex: '#292b2e'
}];
const BODY = [{
  name: 'สีเดิม',
  hex: 'original'
}, {
  name: 'Sage Green',
  hex: '#82938a'
}, {
  name: 'Steel Blue',
  hex: '#7796ad'
}, {
  name: 'Rose Quartz',
  hex: '#b9949c'
}, {
  name: 'Graphite Grey',
  hex: '#777a7e'
}];
function wheelName(s: Settings) {
  return s.customModel.trim() || 'คงดีไซน์ล้อเดิม';
}
function CustomColor({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (color: string) => void;
}) {
  const [draft, setDraft] = useState(value);
  const [invalid, setInvalid] = useState(false);
  useEffect(() => {
    setDraft(value);
    setInvalid(false);
  }, [value]);
  const commit = () => {
    const raw = draft.trim().replace(/^#/, '');
    const expanded = raw.length === 3 ? raw.split('').map(c => c + c).join('') : raw;
    if (/^[0-9a-f]{6}$/i.test(expanded)) {
      onChange('#' + expanded.toLowerCase());
      setDraft('#' + expanded.toUpperCase());
      setInvalid(false);
    } else setInvalid(true);
  };
  return <div className="lt-custom-color"><label><span>เลือก{label}</span><input type="color" aria-label={`เลือก${label} Custom`} value={value} onChange={e => onChange(e.target.value)} /></label><label className="lt-hex-field"><span>HEX</span><input type="text" aria-label={`รหัส HEX ${label}`} value={draft} maxLength={7} spellCheck={false} aria-invalid={invalid} onChange={e => {
        setDraft(e.target.value);
        setInvalid(false);
      }} onBlur={commit} onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          commit();
        }
      }} placeholder="#AABBCC" /></label>{invalid && <small role="alert">ใส่รหัสสี 3 หรือ 6 หลัก เช่น #AA8354</small>}</div>;
}
function Icon({
  name,
  size = 18
}: {
  name: string;
  size?: number;
}) {
  const paths: Record<string, React.ReactNode> = {
    plus: <path d="M12 5v14M5 12h14" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    upload: <path d="M12 16V3m-5 5 5-5 5 5M4 15v5h16v-5" />,
    download: <path d="M12 3v13m-5-5 5 5 5-5M4 17v4h16v-4" />,
    undo: <path d="M4 10h10a6 6 0 0 1 0 12M4 10l5-5M4 10l5 5" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    wheel: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2.5" /><path d="M12 3v6.5m0 5V21M3 12h6.5m5 0H21M5.6 5.6l4.5 4.5m3.8 3.8 4.5 4.5m0-12.8-4.5 4.5m-3.8 3.8-4.5 4.5" /></>,
    spark: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4" />,
    layers: <path d="m3 8 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 18l9 5 9-5" />,
    paint: <path d="m7 3 12 12-7 7L1 11 8 4m-3 9h12M20 5s-4 4-1 6 4-2 1-6Z" />,
    compare: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M12 2v20m-7-9 2-2 2 2m6-2 2 2 2-2" /></>,
    image: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8" cy="8" r="1" /><path d="m3 17 6-6 4 4 3-3 5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 5m0 3h.01" /></>,
    bookmark: <path d="M6 3h12v18l-6-4-6 4V3Z" />,
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5" />,
    target: <><circle cx="12" cy="12" r="7" /><path d="M12 2v6m0 8v6M2 12h6m8 0h6" /></>,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
    chevron: <path d="m9 5 7 7-7 7" />,
    chevrons: <path d="m8 8-4 4 4 4m8-8 4 4-4 4" />
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.spark}</svg>;
}
function drawRim(c: CanvasRenderingContext2D, w: Wheel, s: Settings) {
  c.save();
  c.translate(w.x * W, w.y * H);
  c.rotate(w.angle);
  c.scale(w.rx * W * s.scale / 100, w.ry * H * s.scale / 100);
  c.beginPath();
  c.arc(0, 0, 1.07, 0, Math.PI * 2);
  c.fillStyle = '#111214';
  c.fill();
  const g = c.createLinearGradient(-1, -1, 1, 1);
  g.addColorStop(0, s.finish === 'Gloss' ? '#fff0d5' : s.color);
  g.addColorStop(.36, s.color);
  g.addColorStop(1, s.finish === 'Matte' ? '#4d4336' : '#342d26');
  c.beginPath();
  c.arc(0, 0, .99, 0, Math.PI * 2);
  c.strokeStyle = g;
  c.lineWidth = .09;
  c.stroke();
  c.beginPath();
  c.arc(0, 0, .72, 0, Math.PI * 2);
  c.fillStyle = '#36383a';
  c.fill();
  c.beginPath();
  c.arc(0, 0, .54, 0, Math.PI * 2);
  c.strokeStyle = '#252728';
  c.lineWidth = .2;
  c.stroke();
  c.fillStyle = '#6c392c';
  c.fillRect(.45, -.4, .25, .6);
  for (let i = 0; i < s.design; i++) {
    c.save();
    c.rotate(i * Math.PI * 2 / s.design);
    c.beginPath();
    c.moveTo(-.08, -.13);
    c.lineTo(-.09, -.93);
    c.lineTo(.02, -.96);
    c.lineTo(.13, -.1);
    c.closePath();
    c.fillStyle = g;
    c.fill();
    c.strokeStyle = 'rgba(240,207,154,.18)';
    c.lineWidth = .018;
    c.stroke();
    c.restore();
  }
  c.beginPath();
  c.arc(0, 0, .22, 0, Math.PI * 2);
  c.fillStyle = s.color;
  c.fill();
  c.beginPath();
  c.arc(0, 0, .11, 0, Math.PI * 2);
  c.fillStyle = '#262625';
  c.fill();
  for (let i = 0; i < 5; i++) {
    c.beginPath();
    c.arc(Math.cos(i * Math.PI * .4) * .16, Math.sin(i * Math.PI * .4) * .16, .025, 0, Math.PI * 2);
    c.fillStyle = '#1b1c1d';
    c.fill();
  }
  c.restore();
}
export const EVSELECTSStudio = () => {
  const app = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  // SSR keeps the complete, correctly sized interface. Off-screen demo image
  // decoding/canvas work must not compete with the Home hero on mobile.
  useEffect(() => {
    const element = app.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const [settings, setSettings] = useState<Settings>(DEFAULT),
    [tab, setTab] = useState('style'),
    [mode, setMode] = useState('compare'),
    [split, setSplit] = useState(44);
  const [source, setSource] = useState(demoBefore),
    [isDemo, setIsDemo] = useState(true),
    [demoMask, setDemoMask] = useState(false),
    [filename, setFilename] = useState('Model 3 · ตัวอย่าง'),
    [base, setBase] = useState<HTMLCanvasElement | null>(null),
    [carbonDemo, setCarbonDemo] = useState(true),
    [afterBase, setAfterBase] = useState<HTMLCanvasElement | null>(null),
    [afterLoading, setAfterLoading] = useState(true);
  const [wheels, setWheels] = useState<Wheel[]>(DEMO_WHEELS),
    [mask, setMask] = useState<Point[]>([]),
    [placing, setPlacing] = useState<number | null>(null),
    [masking, setMasking] = useState(false),
    [, setActiveWheel] = useState(1);
  const [loading, setLoading] = useState(true),
    [error, setError] = useState(''),
    [toast, setToast] = useState(''),
    [drag, setDrag] = useState(false),
    [modal, setModal] = useState(''),
    [saved, setSaved] = useState<Saved[]>([]),
    [history, setHistory] = useState<Settings[]>([]);
  const [stylePrompt, setStylePrompt] = useState('');
  const [consent, setConsent] = useState(false);
  const [service, setService] = useState({ ready: false, message: 'กำลังตรวจโควตาทดลอง…', error: '' });
  const refreshStatus = async () => {
    try {
      const response = await fetch('/api/vehicle-style/status', { cache: 'no-store' });
      const result = await response.json();
      setService({ ready: response.ok && result.ready === true, message: result.message || '', error: result.error || '' });
    } catch { setService({ ready: false, message: '', error: 'ตรวจโควตาไม่ได้ กรุณารีเฟรชหน้าแล้วลองใหม่' }); }
  };
  useEffect(() => { if (active) void refreshStatus(); }, [active]);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState<HTMLCanvasElement | null>(null);
  const [generationError, setGenerationError] = useState('');
  const generation = useRef<{
    id: number;
    controller: AbortController | null;
  }>({
    id: 0,
    controller: null
  });
  const promptInput = useRef<HTMLTextAreaElement>(null);
  const cancelGeneration = () => {
    generation.current.id += 1;
    generation.current.controller?.abort();
    generation.current.controller = null;
    setGenerating(false);
    setGenerationError('');
  };
  useEffect(() => () => {
    generation.current.id += 1;
    generation.current.controller?.abort();
  }, []);
  const original = useRef<HTMLCanvasElement>(null),
    concept = useRef<HTMLCanvasElement>(null),
    input = useRef<HTMLInputElement>(null),
    stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!active) return;
    try {
      const v = JSON.parse(localStorage.getItem('longtang-concepts-v1') || '[]');
      if (Array.isArray(v)) setSaved(v.slice(0, 6));
    } catch {}
  }, [active]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 3500);
    return () => clearTimeout(t);
  }, [toast]);
  useEffect(() => {
    if (!modal) return;
    const previous = document.activeElement as HTMLElement | null;
    const dialog = document.querySelector<HTMLElement>('.lt-modal');
    dialog?.querySelector<HTMLElement>('button')?.focus();
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal('');
      if (e.key === 'Tab' && dialog) {
        const targets = [...dialog.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],input:not(:disabled)')];
        const first = targets[0], last = targets[targets.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', fn);
    return () => { document.removeEventListener('keydown', fn); previous?.focus(); };
  }, [modal]);
  useEffect(() => {
    if (!active) return;
    let stale = false;
    setBase(null);
    setLoading(true);
    setError('');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (stale) return;
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      const x = c.getContext('2d')!;
      x.fillStyle = '#252626';
      x.fillRect(0, 0, W, H);
      {
        const r = Math.min(W / img.width, H / img.height);
        x.drawImage(img, (W - img.width * r) / 2, (H - img.height * r) / 2, img.width * r, img.height * r);
      }
      setBase(c);
      setLoading(false);
    };
    img.onerror = () => {
      if (!stale) {
        setLoading(false);
        setError('เปิดรูปไม่สำเร็จ กรุณาเลือกรูปใหม่');
      }
    };
    img.src = source;
    return () => {
      stale = true;
    };
  }, [source, isDemo, active]);
  useEffect(() => {
    if (!active) return;
    if (!carbonDemo) {
      setAfterBase(null);
      setAfterLoading(false);
      return;
    }
    let stale = false;
    setAfterLoading(true);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (stale) return;
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H;
      // The supplied After file is a 2304x1344 image plus a 64px export footer.
      // Display its image area in the same frame as Before; add one footer on export.
      c.getContext('2d')!.drawImage(img, 0, 0, W, H, 0, 0, W, H);
      setAfterBase(c);
      setAfterLoading(false);
    };
    img.onerror = () => {
      if (!stale) {
        setAfterLoading(false);
        setError('เปิดภาพ After ไม่สำเร็จ กรุณาโหลดหน้าใหม่');
      }
    };
    img.src = carbonAfter;
    return () => {
      stale = true;
    };
  }, [carbonDemo, active]);
  useEffect(() => {
    if (!base || !original.current || !concept.current) return;
    const o = original.current.getContext('2d')!,
      c = concept.current.getContext('2d')!;
    o.drawImage(base, 0, 0);
    c.drawImage(generated || (carbonDemo && afterBase ? afterBase : base), 0, 0);
    if (generated) return;
    if (settings.body !== 'original' && mask.length >= 3) {
      c.save();
      c.beginPath();
      mask.forEach((p, i) => i ? c.lineTo(p.x * W, p.y * H) : c.moveTo(p.x * W, p.y * H));
      c.closePath();
      if (demoMask) {
        c.moveTo(.224 * W, .367 * H);
        c.lineTo(.294 * W, .28 * H);
        c.lineTo(.345 * W, .262 * H);
        c.lineTo(.416 * W, .274 * H);
        c.lineTo(.46 * W, .419 * H);
        c.lineTo(.327 * W, .401 * H);
        c.closePath();
        c.moveTo(.438 * W, .27 * H);
        c.lineTo(.558 * W, .294 * H);
        c.lineTo(.668 * W, .403 * H);
        c.lineTo(.47 * W, .417 * H);
        c.closePath();
      }
      if (carbonDemo && demoMask) {
        // Keep the carbon hood and mirror out of the body-colour overlay.
        [[.469, .422], [.721, .413], [.805, .465], [.845, .526], [.668, .560], [.57, .488]].forEach(([x, y], i) => i ? c.lineTo(x * W, y * H) : c.moveTo(x * W, y * H));
        c.closePath();
        c.moveTo(.365 * W, .38 * H);
        c.lineTo(.401 * W, .369 * H);
        c.lineTo(.417 * W, .424 * H);
        c.lineTo(.366 * W, .419 * H);
        c.closePath();
      }
      c.clip('evenodd');
      c.globalCompositeOperation = 'multiply';
      c.globalAlpha = .65;
      c.fillStyle = settings.body;
      c.fillRect(0, 0, W, H);
      c.restore();
    }
    if (!carbonDemo) wheels.forEach(w => drawRim(c, w, settings));
  }, [base, afterBase, carbonDemo, generated, settings, wheels, mask, demoMask]);
  const update = (patch: Partial<Settings>) => {
    setHistory(h => [...h.slice(-19), settings]);
    setSettings(s => ({
      ...s,
      ...(['color', 'finish', 'design', 'scale', 'wheelRef', 'customModel', 'diameter', 'width'].some(key => key in patch) ? {
        wheelEdited: true
      } : {}),
      ...patch
    }));
  };
  const loadFile = (file?: File) => {
    if (!file || generation.current.controller) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('รองรับ JPG, PNG และ WebP เท่านั้น');
      return;
    }
    if (file.size > VEHICLE_STYLE_MAX_UPLOAD_MB * 1024 * 1024) {
      setError(`ไฟล์ใหญ่เกิน ${VEHICLE_STYLE_MAX_UPLOAD_MB} MB กรุณาลดขนาดก่อน`);
      return;
    }
    const r = new FileReader();
    r.onerror = () => setError('อ่านไฟล์ไม่ได้ กรุณาลองอีกครั้ง');
    r.onload = () => {
      cancelGeneration();
      setGenerated(null);
      setConsent(false);
      setSource(r.result as string);
      setIsDemo(false);
      setCarbonDemo(false);
      setDemoMask(false);
      setFilename(file.name);
      setMask([]);
      setMasking(false);
      setWheels([{
        x: .28,
        y: .68,
        rx: .043,
        ry: .085,
        angle: 0
      }, {
        x: .73,
        y: .68,
        rx: .043,
        ry: .085,
        angle: 0
      }]);
      setPlacing(null);
      setMode('original');
      setSettings(DEFAULT);
      setHistory([]);
      setTab('style');
      setToast('พิมพ์แนวแต่ง แล้วกด สร้างภาพลุคใหม่');
    };
    r.readAsDataURL(file);
  };
  const moveComparison = (e: React.PointerEvent<HTMLInputElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (bounds.width) setSplit(Math.max(0, Math.min(100, Math.round((e.clientX - bounds.left) / bounds.width * 100))));
  };
  const locate = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stage.current) return;
    const r = stage.current.getBoundingClientRect(),
      p = {
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height
      };
    if (masking) {
      setMask(a => [...a, p]);
      return;
    }
    if (placing !== null) {
      setSettings(s => ({
        ...s,
        wheelEdited: true
      }));
      setWheels(a => a.map((w, i) => i === placing ? {
        ...w,
        ...p
      } : w));
      if (placing === 0) {
        setPlacing(1);
        setActiveWheel(1);
      } else {
        setPlacing(null);
        setToast('จัดตำแหน่งแล้ว ปรับขนาดล้อได้ในแผงแต่งรถ');
      }
    }
  };
  const exportImage = () => {
    if (!concept.current || !base) return;
    try {
      const c = document.createElement('canvas');
      c.width = W;
      c.height = H + 64;
      const x = c.getContext('2d')!;
      x.drawImage(concept.current, 0, 0);
      if (mode === 'original') x.drawImage(base, 0, 0);
      if (mode === 'compare') {
        x.save();
        x.beginPath();
        x.rect(0, 0, W * split / 100, H);
        x.clip();
        x.drawImage(base, 0, 0);
        x.restore();
        x.fillStyle = '#fff';
        x.fillRect(W * split / 100 - 1, 0, 2, H);
      }
      x.fillStyle = '#141617';
      x.fillRect(0, H, W, 64);
      x.fillStyle = '#bef264';
      x.font = '18px sans-serif';
      x.fillText('EVSELECTS / ลองแต่งรถ — Styling concept · ภาพจำลอง', 24, H + 39);
      c.toBlob(blob => {
        if (!blob) {
          setError('สร้างไฟล์ภาพไม่ได้ กรุณาลองอีกครั้ง');
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'longtang-concept.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 30000);
        setToast('สร้างไฟล์ PNG สำหรับดาวน์โหลดแล้ว');
      }, 'image/png');
    } catch {
      setError('บันทึกภาพไม่ได้ กรุณาอัปโหลดรูปจากเครื่องแล้วลองอีกครั้ง');
    }
  };
  const generateDesign = async () => {
    if (!base || loading || afterLoading || generation.current.controller) return;
    if (!stylePrompt.trim() && settings.body === 'original' && !settings.wheelEdited) {
      setTab('style');
      setGenerationError('พิมพ์แนวแต่งหรือรายละเอียดที่อยากเปลี่ยนก่อนสร้างภาพ');
      setTimeout(() => promptInput.current?.focus(), 0);
      return;
    }
    if (!consent || !service.ready) return;
    const id = ++generation.current.id;
    const controller = new AbortController();
    generation.current.controller = controller;
    setGenerating(true);
    setGenerationError('');
    setError('');
    setPlacing(null);
    setMasking(false);
    const timer = setTimeout(() => controller.abort(), 255000);
    try {
      // Always submit the original photo, never the painted canvas or previous AI output.
      let image = base.toDataURL('image/jpeg', .85);
      if (image.length > 3_500_000) image = base.toDataURL('image/jpeg', .65);
      if (image.length > 3_500_000) throw new Error('ภาพมีรายละเอียดมากเกินไป กรุณาลดขนาดแล้วลองใหม่');
      const response = await fetch('/api/vehicle-style/preview', {
        method: 'POST',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
          'X-Studio-Request': '1'
        },
        signal: controller.signal,
        body: JSON.stringify({
          image,
          consent,
          ...(stylePrompt.trim() ? { stylePrompt: stylePrompt.trim() } : {}),
          wheelDiameter: settings.diameter,
          wheelWidth: settings.width,
          body: settings.body === 'original' ? 'keep' : 'custom',
          bodyCustom: settings.body === 'original' ? '' : settings.body,
          wheelDesign: settings.customModel.trim(),
          finish: settings.wheelEdited ? 'custom' : 'keep',
          finishCustom: settings.wheelEdited ? `${settings.color} ${settings.finish}` : '',
          mode: 'precise'
        })
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || 'บริการสร้างภาพยังไม่พร้อม กรุณาลองอีกครั้งภายหลัง');
      if (typeof result?.image !== 'string' || !/^data:image\/(png|jpeg);base64,/.test(result.image)) throw new Error('ไม่ได้รับภาพที่สร้าง กรุณาลองอีกครั้งภายหลัง');
      const img = new Image();
      img.src = result.image;
      await img.decode();
      if (generation.current.id !== id) return;
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#252626';
      ctx.fillRect(0, 0, W, H);
      const ratio = Math.min(W / img.width, H / img.height);
      ctx.drawImage(img, (W - img.width * ratio) / 2, (H - img.height * ratio) / 2, img.width * ratio, img.height * ratio);
      setGenerated(canvas);
      setCarbonDemo(false);
      setMode('compare');
      setSplit(44);
      setToast('สร้างดีไซน์ใหม่แล้ว เลื่อนเปรียบเทียบหรือดาวน์โหลดภาพได้');
    } catch (err) {
      if (generation.current.id !== id) return;
      setGenerationError(err instanceof Error && err.name !== 'AbortError' && err.name !== 'TypeError' ? err.message : 'การเชื่อมต่อขัดข้องหรือใช้เวลานานเกินไป คำขออาจยังประมวลผลอยู่ กรุณารอสักครู่ก่อนลองใหม่');
    } finally {
      clearTimeout(timer);
      if (generation.current.id === id) {
        generation.current.controller = null;
        setGenerating(false);
        void refreshStatus();
      }
    }
  };
  const restore = (item: Saved) => {
    cancelGeneration();
    setGenerated(null);
    setStylePrompt('');
    setSource(item.source);
    setIsDemo(false);
    setCarbonDemo(!!item.carbonDemo);
    setDemoMask(item.demoMask);
    setFilename(item.name);
    setSettings({
      ...DEFAULT,
      ...item.settings
    });
    setWheels(item.wheels);
    setMask(item.mask);
    setModal('');
    setMode('compare');
    setHistory([]);
    setPlacing(null);
    setMasking(false);
  };
  const reset = () => {
    cancelGeneration();
    setGenerated(null);
    setCarbonDemo(isDemo);
    setStylePrompt('');
    setConsent(false);
    setSettings(DEFAULT);
    setHistory([]);
    setSplit(44);
    setMode('compare');
    setPlacing(null);
    setMasking(false);
    if (isDemo) {
      setWheels(DEMO_WHEELS);
      setMask([]);
      setDemoMask(false);
    }
    setToast('คืนค่าการแต่งเริ่มต้นแล้ว');
  };
  const colorLabel = settings.customColor ? `Custom ${settings.color.toUpperCase()}` : COLORS.find(c => c.hex === settings.color)?.name || settings.color.toUpperCase();
  const busy = loading || afterLoading || generating;
  return <div ref={app} className="lt-app" onPointerDownCapture={() => setActive(true)} onFocusCapture={() => setActive(true)}>
 <header className="lt-header"><Link href="/" prefetch={false} className="lt-brand"><span className="lt-brandmark"><Icon name="wheel" size={23} /></span><strong>ลองแต่งรถ<span>BY EVSELECTS</span></strong><span className="lt-beta">STUDIO</span></Link><nav><button className="lt-nav-active" onClick={() => setModal('')}>สตูดิโอแต่งรถ</button></nav><div className="lt-header-right"><button className="lt-help" aria-label="วิธีใช้งาน" onClick={() => setModal('help')}><Icon name="help" /> วิธีใช้งาน</button></div></header>
 <div className="lt-main"><div className="lt-intro"><div><div className="lt-eyebrow"><span />YOUR CAR. YOUR VISION.</div><h2 id="home-vehicle-style-title" className="lt-intro-title">คันเดิม <em>มุมมองใหม่.</em></h2><p>ลองสี ล้อ และแนวแต่งบนหน้านี้ · ไม่ต้องใส่ API key หรือรหัสสตูดิโอ</p></div><div className="lt-steps"><span className="done"><b><Icon name="check" size={13} /></b>อัปโหลดรูป</span><i /><span className="active"><b>2</b>ลองแต่ง</span><i /><span><b>3</b>เปรียบเทียบ</span></div></div>
 <div className="lt-workspace"><section className="lt-left"><div className="lt-viewer"><div className="lt-viewer-top"><span className="lt-file"><Icon name="image" size={16} />{filename}<span className="lt-file-badge">{isDemo ? 'DEMO' : 'YOUR PHOTO'}</span></span><div><button aria-label="ย้อนการปรับล่าสุด" disabled={!history.length} onClick={() => {
                  setSettings(history[history.length - 1]);
                  setHistory(h => h.slice(0, -1));
                }}><Icon name="undo" size={16} /></button><button aria-label="ขยายภาพ" onClick={() => stage.current?.requestFullscreen?.().catch(() => setToast('เบราว์เซอร์นี้ไม่รองรับเต็มหน้าจอ'))}><Icon name="expand" size={16} /></button><button disabled={generating} onClick={() => input.current?.click()}><Icon name="upload" size={15} />เปลี่ยนรูป</button></div></div>
 <div className="lt-stage" ref={stage} onPointerDown={locate} data-editing={placing !== null || masking} onDragOver={e => {
              e.preventDefault();
              setDrag(true);
            }} onDragLeave={() => setDrag(false)} onDrop={e => {
              e.preventDefault();
              setDrag(false);
              loadFile(e.dataTransfer.files[0]);
            }}>
 <canvas width={W} height={H} ref={concept} className="lt-image-canvas" aria-label="ภาพคอนเซ็ปต์รถที่ปรับแต่ง" /><canvas width={W} height={H} ref={original} className="lt-image-canvas lt-original" style={{
                clipPath: mode === 'original' ? 'none' : `inset(0 ${mode === 'compare' ? 100 - split : 100}% 0 0)`
              }} aria-label="ภาพรถต้นฉบับ" />{busy && <div className="lt-loading"><span />{generating ? 'กำลังสร้างดีไซน์ใหม่… อาจใช้เวลาสักครู่' : 'กำลังเตรียมรูปของคุณ…'}</div>}<div className="lt-photo-vignette" />
 {mode !== 'concept' && <span className="lt-photo-label lt-label-left">ORIGINAL <span>ภาพเดิม</span></span>}{mode !== 'original' && <span className="lt-photo-label lt-label-right"><i />CONCEPT <span>ภาพจำลอง</span></span>}
 {mode === 'compare' && placing === null && !masking && <><div className="lt-divider" style={{
                  left: split + '%'
                }}><span><Icon name="chevrons" size={22} /></span></div><input aria-label="เลื่อนเปรียบเทียบภาพเดิมกับคอนเซ็ปต์" aria-valuetext={`ภาพเดิม ${split}% ภาพคอนเซ็ปต์ ${100 - split}%`} className="lt-compare-range" type="range" min="0" max="100" value={split} onChange={e => setSplit(+e.target.value)} onPointerDown={e => {
                  if (e.button !== 0) return;
                  e.preventDefault();
                  e.currentTarget.focus({
                    preventScroll: true
                  });
                  e.currentTarget.setPointerCapture(e.pointerId);
                  moveComparison(e);
                }} onPointerMove={e => {
                  if (e.currentTarget.hasPointerCapture(e.pointerId)) moveComparison(e);
                }} onPointerUp={e => {
                  if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
                }} /></>}
 {masking && <svg className="lt-mask" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"><polygon points={mask.map(p => `${p.x * W},${p.y * H}`).join(' ')} fill="#84cc1644" stroke="#bef264" strokeWidth="3" />{mask.map((p, i) => <circle key={i} cx={p.x * W} cy={p.y * H} r="7" fill="#a3e635" />)}</svg>}
 {placing !== null && wheels.map((w, i) => <span key={i} className={'lt-wheel-target ' + (placing === i ? 'active' : '')} style={{
                left: w.x * 100 + '%',
                top: w.y * 100 + '%'
              }}><Icon name="plus" size={26} /><b>{i === 0 ? 'ล้อหลัง' : 'ล้อหน้า'}</b></span>)}{(placing !== null || masking) && <div className="lt-edit-banner">{masking ? 'แตะรอบขอบตัวถัง แล้วกด “ใช้พื้นที่นี้”' : `แตะกึ่งกลาง${placing === 0 ? 'ล้อหลัง' : 'ล้อหน้า'}บนรูป`}</div>}
 <div className="lt-scene-caption"><span><i />CONCEPT PREVIEW</span><p>{generated ? 'AI generated design · Concept preview' : <>{carbonDemo && !settings.wheelEdited ? 'Red Carbon' : wheelName(settings)}<b>/</b>{colorLabel}<b>/</b>{settings.finish}</>}</p></div>{drag && <div className="lt-drop-overlay"><Icon name="upload" size={35} />วางรูปเพื่อเริ่มแต่ง</div>}</div>
 <div className="lt-viewer-bottom"><span><Icon name="compare" size={16} />{mode === 'compare' ? 'เลื่อนเพื่อดูความแตกต่าง' : 'ลองไอเดียให้เป็นภาพ'}</span><div className="lt-segment">{[['original', 'ภาพเดิม'], ['compare', 'เปรียบเทียบ'], ['concept', 'คอนเซ็ปต์']].map(([id, label]) => <button key={id} className={mode === id ? 'selected' : ''} onClick={() => setMode(id)}>{label}</button>)}</div><button className="lt-reset" disabled={generating} onClick={reset}>รีเซ็ต</button></div></div>
 {carbonDemo && <div className="lt-after-note"><Icon name="spark" size={15} /><span><strong>ภาพตัวอย่าง · RED CARBON</strong> สีแดง ล้อบรอนซ์ ฝากระโปรงและชุดแต่งคาร์บอน · Concept preview</span></div>}
 <div className="lt-upload-card" onDragOver={e => e.preventDefault()} onDrop={e => {
            e.preventDefault();
            loadFile(e.dataTransfer.files[0]);
          }}><span className="lt-upload-icon"><Icon name="upload" size={23} /></span><div><h3>ลองกับรถของคุณ</h3><p>ลากรูปมาวาง หรือเลือกรูปจากเครื่อง<span>JPG, PNG, WebP · สูงสุด {VEHICLE_STYLE_MAX_UPLOAD_MB} MB</span></p></div><button disabled={generating} onClick={() => input.current?.click()}>อัปโหลดรูป<Icon name="plus" size={17} /></button></div><div className="lt-note"><Icon name="shield" size={15} /><span>เมื่อกด สร้างภาพลุคใหม่ รูปและคำอธิบายจะส่งให้ OpenAI เพื่อสร้างภาพ · Concept preview ไม่ยืนยันขนาดหรือการติดตั้ง</span></div></section>
 <aside className="lt-panel"><div className="lt-panel-title"><div><h3>แต่งให้เป็นคุณ</h3><p>รายละเอียดเล็ก ๆ ที่เปลี่ยนทั้งคัน</p></div><span><Icon name="spark" size={21} /></span></div><div className="lt-tabs">{[['wheels', 'wheel', 'ล้อแม็ก'], ['paint', 'paint', 'สีรถ'], ['style', 'layers', 'สไตล์']].map(([id, icon, label]) => <button key={id} className={tab === id ? 'active' : ''} onClick={() => setTab(id)}><Icon name={icon} size={17} />{label}</button>)}</div><fieldset className="lt-panel-body" disabled={generating} aria-label="ตัวเลือกแต่งรถ">
 {tab === 'wheels' && <><div className="lt-field-label"><h4>สีล้อ</h4><span>{colorLabel}</span></div><div className="lt-swatches">{COLORS.map(c => <button key={c.hex} aria-label={c.name} title={c.name} onClick={() => update({
                  color: c.hex,
                  customColor: false
                })} className={!settings.customColor && settings.color === c.hex ? 'selected' : ''} style={{
                  '--swatch': c.hex
                } as React.CSSProperties}>{!settings.customColor && settings.color === c.hex && <Icon name="check" size={19} />}</button>)}</div><button className={'lt-custom-toggle ' + (settings.customColor ? 'selected' : '')} aria-pressed={settings.customColor} onClick={() => update({
                customColor: !settings.customColor
              })}><Icon name="plus" size={15} />Custom · กำหนดสีล้อเอง</button>{settings.customColor && <CustomColor label="สีล้อ" value={settings.color} onChange={color => update({
                color,
                customColor: true
              })} />}<div className="lt-field-label"><h4>พื้นผิวล้อ</h4><span>FINISH</span></div><div className="lt-finish">{['Satin', 'Gloss', 'Matte'].map(f => <button key={f} className={settings.finish === f ? 'selected' : ''} onClick={() => update({
                  finish: f
                })}>{f}</button>)}</div><div className="lt-wheel-sizes"><label>ขนาดขอบ (นิ้ว)<select aria-label="ขนาดขอบล้อ" value={settings.diameter} onChange={e => update({diameter:e.target.value})}><option value="keep">ขนาดเดิม</option>{WHEEL_DIAMETERS.map((size: string) => <option key={size} value={size}>{size}</option>)}</select></label><label>ความกว้าง (นิ้ว)<select aria-label="ความกว้างล้อ" value={settings.width} onChange={e => update({width:e.target.value})}><option value="keep">ความกว้างเดิม</option>{WHEEL_WIDTHS.map((size: string) => <option key={size} value={size}>{size}</option>)}</select></label></div><div className="lt-custom-wheel"><label>รุ่นหรือดีไซน์ล้อ<input type="text" aria-label="รุ่นหรือดีไซน์ล้อ" value={settings.customModel} maxLength={120} placeholder="เช่น RAYS TE37 หรือ ล้อ 6 ก้านเรียบ" onChange={e => update({customModel:e.target.value})} /></label></div><p className="lt-wheel-hint">เว้นว่างเพื่อคงดีไซน์เดิม · ขนาดและชื่อรุ่นใช้ทำภาพแนวคิด ไม่ยืนยัน fitment</p></>}
 {tab === 'paint' && <><div className="lt-field-label"><h4>สีตัวถัง</h4><span>COLOR EXPLORER</span></div><p className="lt-panel-copy">ลองโทนใหม่ โดยคงแสงและเงาจากรูปเดิม</p><div className="lt-body-colors">{BODY.map(b => <button key={b.hex} className={!settings.customBody && settings.body === b.hex ? 'selected' : ''} onClick={() => {
                  update({
                    body: b.hex,
                    customBody: false
                  });
                  if (!demoMask && mask.length < 3 && b.hex !== 'original') setToast('แตะ “เลือกพื้นที่ตัวถัง” เพื่อระบุส่วนที่จะเปลี่ยนสี');
                }}><i style={{
                    background: b.hex === 'original' ? 'linear-gradient(135deg,#fff,#bfc1c1)' : b.hex
                  }} /><span>{b.name}</span>{!settings.customBody && settings.body === b.hex && <Icon name="check" size={16} />}</button>)}</div><button className={'lt-custom-toggle ' + (settings.customBody ? 'selected' : '')} aria-pressed={settings.customBody} onClick={() => {
                update({
                  customBody: !settings.customBody,
                  body: settings.body === 'original' ? '#ffffff' : settings.body
                });
                if (!demoMask && mask.length < 3) setToast('เลือกพื้นที่ตัวถัง เพื่อให้สีอยู่เฉพาะส่วนที่ต้องการ');
              }}><Icon name="plus" size={15} />Custom · กำหนดสีรถเอง</button>{settings.customBody && <CustomColor label="สีรถ" value={settings.body === 'original' ? '#ffffff' : settings.body} onChange={body => update({
                body,
                customBody: true
              })} />}<div className="lt-mask-info"><Icon name="target" /><p>{demoMask ? 'ภาพตัวอย่างมีพื้นที่ตัวถังพร้อมให้ลองสีแล้ว' : 'เลือกพื้นที่ตัวถัง เพื่อให้สีอยู่เฉพาะส่วนที่ต้องการ'}</p></div><button className="lt-align-button" onClick={() => {
                setMask([]);
                setDemoMask(false);
                setMasking(true);
                setPlacing(null);
                setMode('concept');
              }}>เลือกพื้นที่ตัวถัง<Icon name="plus" size={16} /></button>{masking && <div className="lt-mask-actions"><button onClick={() => setMask(m => m.slice(0, -1))}>ลบจุดล่าสุด</button><button disabled={mask.length < 3} onClick={() => setMasking(false)}>ใช้พื้นที่นี้</button></div>}</>}
 {tab === 'style' && <><div className="lt-field-label"><h4>อยากแต่งรถแบบไหน?</h4><span>YOUR DESIGN</span></div><p className="lt-panel-copy">พิมพ์แนวแต่งหรือจุดที่อยากเปลี่ยน แล้วสร้างภาพใหม่จากรถของคุณ</p><label className="lt-style-label" htmlFor="vehicle-style-prompt">รายละเอียดการแต่ง</label><textarea ref={promptInput} id="vehicle-style-prompt" className="lt-style-input" value={stylePrompt} maxLength={2000} rows={7} disabled={generating} aria-describedby="style-prompt-hint" placeholder="เช่น Tesla Model 3 สีแดงสด โหลดเตี้ย ล้อบรอนซ์ ฝากระโปรงและชุดแต่งคาร์บอน คงฉากและมุมกล้องเดิม" onChange={e => {
                setStylePrompt(e.target.value);
                setGenerationError('');
              }} /><div className="lt-prompt-meta"><span id="style-prompt-hint">ภาษาไทยหรือ English ได้</span><span>{stylePrompt.length} / 2,000</span></div><p className="lt-style-hint">ข้อความนี้มีลำดับสำคัญกว่าสีและล้อที่เลือกไว้ ใช้รูปต้นฉบับสร้างใหม่ทุกครั้ง</p><div className="lt-prompt-tip"><Icon name="spark" size={17} /><span>ระบุสี ล้อ ชุดแต่ง และความสูงรถให้ชัด เพื่อให้ภาพใกล้ไอเดียที่ต้องการ</span></div></>}

 </fieldset><div className="lt-panel-footer"><div className="lt-concept-summary"><span className="lt-summary-icon"><Icon name="spark" size={18} /></span><div><strong>{stylePrompt.trim() ? 'Your next design.' : 'เริ่มจากไอเดียของคุณ'}</strong><span className="lt-wheel-summary" title={wheelName(settings)}>{wheelName(settings)}</span></div><span className="lt-small-dot" /></div>{generationError && <p className="lt-generation-error" role="alert">{generationError}</p>}{generating && <p className="lt-generation-status" role="status">กำลังสร้างภาพจากรูปต้นฉบับ กรุณารอ…</p>}<p className="lt-quota" role="status">{service.error || service.message}</p><label className="lt-consent"><input type="checkbox" checked={consent} disabled={generating} onChange={e => setConsent(e.target.checked)} /><span>ฉันมีสิทธิ์ใช้ภาพนี้ และยินยอมส่งภาพกับรายละเอียดให้ OpenAI เพื่อสร้างภาพแนวคิด</span></label><button className="lt-save" aria-busy={generating} onClick={generateDesign} disabled={busy || !base || !consent || !service.ready}><Icon name="spark" size={17} />{generating ? 'กำลังสร้างภาพ…' : 'สร้างภาพลุคใหม่'}<Icon name="arrow" size={17} /></button><button className="lt-download" onClick={exportImage} disabled={busy || !base}><Icon name="download" size={16} />ดาวน์โหลดภาพ</button><p>{generated ? 'ปรับตัวเลือกแล้วกด Generate เพื่อสร้างใหม่' : 'ใช้รูปที่คุณมีสิทธิ์ใช้ · ส่งภาพให้ OpenAI เมื่อกดสร้าง'}</p></div></aside></div>
</div>
 <input ref={input} className="lt-hidden" type="file" accept="image/jpeg,image/png,image/webp" aria-label="อัปโหลดรูปรถ" onChange={e => {
      loadFile(e.target.files?.[0]);
      e.target.value = '';
    }} />{error && <div role="alert" className="lt-toast lt-error"><span>{error}</span><button onClick={() => setError('')} aria-label="ปิดข้อผิดพลาด"><Icon name="close" /></button></div>}{toast && !error && <div role="status" className="lt-toast"><Icon name="check" size={18} />{toast}</div>}
 {modal && <div className="lt-modal-backdrop" onClick={() => setModal('')}><section className="lt-modal" role="dialog" aria-modal="true" aria-label={modal === 'help' ? 'วิธีใช้งาน' : 'คอนเซ็ปต์ของฉัน'} onClick={e => e.stopPropagation()}><button className="lt-modal-close" aria-label="ปิด" onClick={() => setModal('')}><Icon name="close" /></button>{modal === 'help' ? <><div className="lt-eyebrow">A LITTLE HELP, A LOT OF POSSIBILITIES.</div><h2>รถของคุณ สไตล์ของคุณ</h2><ol><li><strong>เลือกรูป</strong><p>ใช้รูปด้านข้างหรือเฉียงที่เห็นล้อทั้งสองชัด อัปโหลด JPG, PNG หรือ WebP</p></li><li><strong>ลองแต่ง</strong><p>พิมพ์แนวแต่งในแท็บสไตล์ ระบุสี ล้อ ชุดแต่งหรือความสูงรถที่อยากได้ แล้วกด สร้างภาพลุคใหม่</p></li><li><strong>ลองสีตัวถัง</strong><p>เลือกสีรถและล้อเพิ่มเติมได้ หรือใช้เครื่องมือ 2D เลือกพื้นที่ตัวถังเพื่อลองสีก่อนสร้างภาพ</p></li><li><strong>เทียบและเก็บไว้</strong><p>พิมพ์แนวแต่งในแท็บสไตล์ แล้วกด สร้างภาพลุคใหม่ เลื่อนเทียบภาพเดิมกับภาพใหม่ หรือดาวน์โหลด PNG</p></li></ol><p className="lt-panel-copy">Concept preview เป็นภาพจำลอง สี รูปทรงและสัดส่วนอาจต่างจากของจริง ควรตรวจขนาดล้อและการติดตั้งก่อนซื้อ</p></> : <><div className="lt-eyebrow">YOUR PERSONAL GARAGE</div><h2>คอนเซ็ปต์ของฉัน <small>{saved.length}/6</small></h2><p className="lt-panel-copy">เก็บไว้ในเบราว์เซอร์นี้ เลือกเพื่อแต่งต่อได้</p>{saved.length ? <div className="lt-saved-grid">{saved.map(item => <div key={item.id}><button onClick={() => restore(item)}><NextImage unoptimized width={W} height={H} loading="lazy" src={item.image} alt={item.name} /><strong>{item.name}</strong></button><button className="lt-remove" onClick={() => {
                const n = saved.filter(s => s.id !== item.id);
                try {
                  localStorage.setItem('longtang-concepts-v1', JSON.stringify(n));
                  setSaved(n);
                } catch {
                  setError('ไม่สามารถแก้ไขรายการที่บันทึกได้');
                }
              }}>ลบ</button></div>)}</div> : <div className="lt-empty"><Icon name="bookmark" size={32} /><h3>ไอเดียแรก รอคุณอยู่</h3><p>คอนเซ็ปต์ที่เคยบันทึกจะแสดงที่นี่ สำหรับดีไซน์ใหม่ให้กดดาวน์โหลดภาพ</p><button className="lt-save" onClick={() => setModal('')}>เริ่มลองแต่ง<Icon name="arrow" /></button></div>}</>}</section></div>}
 </div>;
};
