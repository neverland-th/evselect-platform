import Link from 'next/link';
import VehicleStyleEditor from './VehicleStyleEditor';
import VehicleStyleStructuredData from './VehicleStyleStructuredData';
import { VEHICLE_STYLE_MAX_UPLOAD_MB, vehicleStylePublicInfo as info } from '@/lib/vehicle-style/public-info';

export default function VehicleStyleFeature() {
  return (
    <section id="vehicle-style" aria-labelledby="vehicle-style-summary-title" className="scroll-mt-24 border-b border-slate-700 bg-[#101213] text-slate-100">
      <VehicleStyleStructuredData pagePath="/" />
      <div className="mx-auto max-w-7xl">
        <VehicleStyleEditor />
        <div data-vehicle-style-summary className="px-6 pb-8 text-sm leading-7 text-slate-300">
          <h2 id="vehicle-style-summary-title" className="text-base font-semibold text-slate-100"><Link href="/" prefetch={false} className="inline-flex min-h-6 items-center underline underline-offset-4">EVSELECTS</Link> Vehicle Style — แอปลองแต่งรถด้วย AI</h2>
          <p className="mt-3">{info.description}</p>
          <p className="mt-2">{info.trial} · {info.usage}</p>
          <p className="mt-2">ใช้รูป JPG, PNG หรือ WebP สูงสุด {VEHICLE_STYLE_MAX_UPLOAD_MB} MB · {info.disclaimer}</p>
          <p>
            <Link href="/vehicle-style" prefetch={false} className="inline-flex min-h-12 items-center text-lime-300 underline underline-offset-4">วิธีใช้งานและข้อควรรู้</Link>
            {' · '}
            <Link href="/privacy" prefetch={false} className="inline-flex min-h-12 items-center text-lime-300 underline underline-offset-4">ความเป็นส่วนตัว</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
