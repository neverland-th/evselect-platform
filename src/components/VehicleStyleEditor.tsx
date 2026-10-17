'use client';

import { useEffect, useRef, useState } from 'react';
import { studioMarkup } from '@/lib/vehicle-style/template';

export default function VehicleStyleEditor() {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const root = element.shadowRoot ?? element.attachShadow({ mode: 'open' });
    // Only a static local template is inserted; uploads and user text never enter HTML.
    root.innerHTML = `<link rel="stylesheet" href="/vehicle-style/styles.css">${studioMarkup}`;
    let disposed = false;
    let disconnect: (() => void) | undefined;
    import('@/lib/vehicle-style/client.js').then(({ mountStudio }) => {
      if (disposed) return;
      disconnect = mountStudio(root, { apiBase: new URL('/api/vehicle-style/', location.origin).href });
    }).catch(() => { if (!disposed) setFailed(true); });
    return () => { disposed = true; disconnect?.(); root.replaceChildren(); };
  }, []);

  return <div className="min-w-0">
    {failed && <p role="alert" className="mb-4 text-sm text-amber-200">เปิดเครื่องมือไม่ได้ กรุณารีเฟรชหน้าแล้วลองอีกครั้ง</p>}
    <div ref={host} />
    <noscript><p>กรุณาเปิด JavaScript เพื่อเลือกรูปและสร้างภาพแนวคิด</p></noscript>
  </div>;
}
