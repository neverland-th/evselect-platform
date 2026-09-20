'use client';

import dynamic from 'next/dynamic';

const EvDamperInfographic = dynamic(
  () => import('./EvDamperBasics'),
  {
    ssr: false,
    loading: () => (
      <div className="my-12 w-full rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-900/50 flex items-center justify-center min-h-[400px]">
        <p className="text-zinc-500 text-sm">กำลังโหลด Interactive Infographic...</p>
      </div>
    ),
  }
);

export default function EvDamperInfographicWrapper() {
  return <EvDamperInfographic />;
}
