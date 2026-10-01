'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import {
  CONSENT_SETTINGS_EVENT, disableAnalytics, initializeAnalytics, isProductionHostname,
  parseConsent, readConsentValue, saveConsent, subscribeConsent, trackIntent,
} from '@/lib/analytics';

const actionStyle = 'min-h-11 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700';
const acceptStyle = 'min-h-11 rounded-lg border border-lime-700 bg-lime-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-lime-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700';

export function CookieSettingsButton({ className = '' }: { className?: string }) {
  return <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT))}>ตั้งค่าคุกกี้</button>;
}

export default function CookieConsent({ measurementId }: { measurementId: string | null }) {
  const stored = useSyncExternalStore(subscribeConsent, readConsentValue, () => null);
  const consent = useMemo(() => parseConsent(stored), [stored]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);
  const [error, setError] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const canTrack = Boolean(measurementId && consent?.analytics && typeof window !== 'undefined' && isProductionHostname(window.location.hostname));

  useEffect(() => {
    const open = () => {
      setAnalyticsChoice(Boolean(parseConsent(readConsentValue())?.analytics));
      setSettingsOpen(true);
    };
    window.addEventListener(CONSENT_SETTINGS_EVENT, open);
    return () => window.removeEventListener(CONSENT_SETTINGS_EVENT, open);
  }, []);

  useEffect(() => {
    if (settingsOpen) dialog.current?.showModal();
    else if (dialog.current?.open) dialog.current.close();
  }, [settingsOpen]);

  useEffect(() => {
    if (!canTrack) {
      // Hydration initially uses the server snapshot; do not erase a returning visitor's cookies.
      if (measurementId && isProductionHostname(window.location.hostname) && parseConsent(readConsentValue())?.analytics) return;
      if (disableAnalytics()) window.location.reload();
      return;
    }
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || !(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href]');
      if (anchor instanceof HTMLAnchorElement) trackIntent(anchor.href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [canTrack, measurementId]);

  const choose = (analytics: boolean) => {
    const wasDisabled = Boolean(window.evselectAnalyticsId && window[`ga-disable-${window.evselectAnalyticsId}`]);
    const shouldReload = !analytics && disableAnalytics();
    if (!saveConsent(analytics)) {
      disableAnalytics();
      setError('เบราว์เซอร์บันทึกการตั้งค่าไม่ได้ เราปิดการวิเคราะห์ในหน้านี้แล้ว หากต้องการลบตัวเลือกเดิม โปรดล้างข้อมูลเว็บไซต์ในเบราว์เซอร์');
      return;
    }
    setError('');
    setSettingsOpen(false);
    if (shouldReload || (analytics && wasDisabled)) window.location.reload();
  };

  return <>
    {canTrack && measurementId && <Script
      id="evselect-ga4"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
      onReady={() => { initializeAnalytics(measurementId); }}
    />}
    {!consent && !settingsOpen && <section
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[80] max-h-[85dvh] overflow-y-auto border-t border-slate-200 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(0,0,0,0.12)] sm:p-5"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-2">
          <h2 id="cookie-banner-title" className="text-base font-bold text-slate-950">เลือกการใช้คุกกี้ของคุณ</h2>
          <p className="text-sm leading-relaxed text-slate-600">เราใช้ข้อมูลการอ่านบทความและการคลิกลิงก์เพื่อปรับปรุงเว็บไซต์ การวิเคราะห์จะเริ่มเมื่อคุณอนุญาตเท่านั้น ปฏิเสธได้โดยยังอ่านเว็บไซต์ได้ตามปกติ <Link href="/privacy" className="font-semibold text-lime-800 underline underline-offset-4">อ่านนโยบายความเป็นส่วนตัว</Link></p>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        </div>
        <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          <button type="button" className={actionStyle} onClick={() => choose(false)}>ปฏิเสธ</button>
          <button type="button" className={acceptStyle} onClick={() => choose(true)}>ยอมรับ</button>
          <button type="button" className={`${actionStyle} col-span-2`} onClick={() => { setAnalyticsChoice(false); setSettingsOpen(true); }}>ตั้งค่า</button>
        </div>
      </div>
    </section>}
    <dialog ref={dialog} aria-labelledby="cookie-settings-title" onClose={() => setSettingsOpen(false)} className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-xl backdrop:bg-slate-950/50 sm:p-7">
      <div className="space-y-5">
        <h2 id="cookie-settings-title" className="text-xl font-bold text-slate-950">ตั้งค่าคุกกี้</h2>
        <p className="text-sm leading-relaxed">เลือกได้ว่าจะให้วิเคราะห์การใช้งานหรือไม่ เปลี่ยนใจเมื่อไรก็กด “ตั้งค่าคุกกี้” ที่ท้ายหน้าเว็บได้</p>
        <div className="space-y-2 rounded-xl border border-slate-200 p-4">
          <p className="flex flex-wrap justify-between gap-2 font-semibold text-slate-900"><span>การทำงานที่จำเป็น</span><span className="text-sm text-slate-500">เปิดเสมอ</span></p>
          <p className="text-sm leading-relaxed">บันทึกตัวเลือกนี้ไว้ในเบราว์เซอร์ เพื่อไม่ต้องถามซ้ำทุกครั้ง ไม่ใช้วิเคราะห์การอ่านหรือทำโฆษณา</p>
        </div>
        <div className="space-y-2 rounded-xl border border-slate-200 p-4">
          <label className="flex min-h-11 cursor-pointer items-center justify-between gap-3 font-semibold text-slate-900">
            <span>การวิเคราะห์การใช้งาน</span>
            <input type="checkbox" checked={analyticsChoice} onChange={event => setAnalyticsChoice(event.target.checked)} className="h-5 w-5 shrink-0 accent-lime-700" />
          </label>
          <p className="text-sm leading-relaxed">ช่วยดูว่าบทความไหนมีคนอ่าน และมีการคลิกไปแชทหรือร้านค้าหรือไม่ ไม่เก็บข้อความที่คุณกรอก และไม่ใช้ทำโฆษณาเฉพาะบุคคล</p>
        </div>
        <p className="text-sm leading-relaxed">ถ้าถอนความยินยอมหลังเริ่มวิเคราะห์ หน้านี้จะโหลดใหม่เพื่อหยุดการติดตาม <Link href="/privacy" className="font-semibold text-lime-800 underline underline-offset-4">อ่านรายละเอียดการใช้ข้อมูล</Link></p>
        {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        <div className="grid gap-2 sm:grid-cols-2">
          <button type="button" className={actionStyle} onClick={() => choose(false)}>ปฏิเสธการวิเคราะห์</button>
          <button type="button" className={acceptStyle} onClick={() => choose(analyticsChoice)}>บันทึกการตั้งค่า</button>
        </div>
        <button type="button" className="min-h-11 w-full rounded-lg text-sm font-semibold text-slate-600 underline underline-offset-4 hover:bg-slate-100" onClick={() => setSettingsOpen(false)}>ปิดหน้าตั้งค่า</button>
      </div>
    </dialog>
  </>;
}
