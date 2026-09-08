'use client';

import { Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    
    // Check if the Web Share API is supported (mobile devices mostly)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        return;
      } catch (err) {
        console.log('Share API failed or was cancelled', err);
        // Fallback to clipboard
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-200 border border-slate-200 px-4 py-2 rounded-full transition-all"
      aria-label="แชร์บทความนี้"
    >
      <Share2 className="w-4 h-4" /> 
      {copied ? 'คัดลอกลิงก์แล้ว!' : 'แชร์'}
    </button>
  );
}
