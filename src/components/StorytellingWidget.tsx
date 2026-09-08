import React from 'react';

export default function StorytellingWidget({ title, children }: { title?: string, children?: React.ReactNode }) {
  return (
    <div className="my-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      {title && <h3 className="text-xl font-bold text-white mb-4">{title}</h3>}
      <div className="text-zinc-300 space-y-4">
        {children}
      </div>
    </div>
  );
}
