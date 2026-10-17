'use client';

import { useEffect, useRef, useState } from 'react';
import { studioMarkup } from '@/lib/vehicle-style/template';

export default function VehicleStyleEditor() {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const root = element.shadowRoot ?? element.attachShadow({ mode: 'open' });
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '/vehicle-style/styles.css';
    const stylesReady = new Promise<void>((resolve, reject) => {
      stylesheet.onload = () => resolve();
      stylesheet.onerror = () => reject(new Error('Studio styles unavailable'));
    });
    root.replaceChildren(stylesheet);
    let disposed = false;
    let disconnect: (() => void) | undefined;
    Promise.all([stylesReady, import('@/lib/vehicle-style/client.js')]).then(([, { mountStudio }]) => {
      if (disposed) return;
      // Show the reviewed markup only after its scoped CSS is ready, preventing
      // a first-open flash of unstyled native inputs on a mobile connection.
      const template = document.createElement('template');
      template.innerHTML = studioMarkup;
      root.append(template.content.cloneNode(true));
      disconnect = mountStudio(root, { apiBase: new URL('/api/vehicle-style/', location.origin).href });
      setLoading(false);
    }).catch(() => { if (!disposed) { setLoading(false); setFailed(true); } });
    return () => { disposed = true; disconnect?.(); root.replaceChildren(); };
  }, []);

  return <div className="min-w-0">
    {loading && <p role="status" className="py-6 text-sm text-slate-300">กำลังเปิดเครื่องมือ…</p>}
    {failed && <p role="alert" className="mb-4 text-sm text-amber-200">เปิดเครื่องมือไม่ได้ กรุณารีเฟรชหน้าแล้วลองอีกครั้ง</p>}
    <div ref={host} />
    <noscript><p>กรุณาเปิด JavaScript เพื่อเลือกรูปและสร้างภาพแนวคิด</p></noscript>
  </div>;
}
