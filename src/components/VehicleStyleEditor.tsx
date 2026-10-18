'use client';

import dynamic from 'next/dynamic';
// Keep the app's geometry in the initial HTML/CSS rather than a late,
// render-blocking stylesheet belonging to the dynamic JavaScript chunk.
import './vehicle-style/EVSELECTSStudio.css';

const Studio = dynamic(
  () => import('./vehicle-style/EVSELECTSStudio').then(module => module.EVSELECTSStudio),
  { loading: () => <div className="min-h-96 px-6 py-10"><h2 id="home-vehicle-style-title" className="text-2xl font-semibold">ลองแต่งรถในหน้านี้</h2><p role="status" className="mt-4 text-sm text-slate-300">กำลังเปิดเครื่องมือ…</p></div> },
);

export default function VehicleStyleEditor() {
  return <><Studio /><noscript><p>กรุณาเปิด JavaScript เพื่อเลือกรูปและลองแต่งรถ</p></noscript></>;
}
