import Link from 'next/link';
import Image from 'next/image';
import { Package, Car, ListTree, FileSpreadsheet, Settings, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 text-zinc-200 border-r border-zinc-800 flex flex-col shrink-0">
        {/* Brand header */}
        <div className="p-4 border-b border-zinc-800/80 flex flex-col gap-2 shrink-0 bg-zinc-900/50">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-40 h-10 overflow-hidden rounded bg-black/40 p-1 flex items-center justify-center border border-zinc-800">
              <Image 
                src="/logo.png" 
                alt="EVSELECT" 
                width={160} 
                height={40} 
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <span className="font-mono text-[10px] tracking-wider text-lime-400 uppercase font-semibold">Admin PIM Platform</span>
            <span className="inline-flex items-center gap-1 text-[10px] bg-lime-950/80 text-lime-400 border border-lime-800/50 px-1.5 py-0.5 rounded">
              <ShieldCheck className="w-3 h-3" /> Thai Spec
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
          <div className="px-3 py-1 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
            Sourcing & Catalog
          </div>
          <Link
            href="/products"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-300 rounded-lg hover:bg-zinc-800/80 hover:text-white transition-colors"
          >
            <Package className="w-4 h-4 text-lime-400" />
            Products & Sourcing
          </Link>

          <Link
            href="/vehicles"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-300 rounded-lg hover:bg-zinc-800/80 hover:text-white transition-colors"
          >
            <Car className="w-4 h-4 text-lime-400" />
            Vehicle Taxonomy
          </Link>

          <Link
            href="/categories"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-300 rounded-lg hover:bg-zinc-800/80 hover:text-white transition-colors"
          >
            <ListTree className="w-4 h-4 text-lime-400" />
            Category Mapping
          </Link>

          <div className="pt-3 px-3 py-1 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
            Quality & Channels
          </div>

          <Link
            href="/fitment"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-300 rounded-lg hover:bg-zinc-800/80 hover:text-white transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-lime-400" />
            Fitment Matrix
          </Link>

          <Link
            href="/export"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-300 rounded-lg hover:bg-zinc-800/80 hover:text-white transition-colors"
          >
            <Settings className="w-4 h-4 text-lime-400" />
            Export CSVs
          </Link>
        </nav>

        {/* Footer actions */}
        <div className="p-3 border-t border-zinc-800 bg-zinc-900/30 flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center justify-between px-3 py-2 text-xs font-medium text-lime-400 bg-lime-950/40 border border-lime-800/50 rounded-lg hover:bg-lime-900/40 transition-colors"
          >
            <span>View Public Storefront</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <p className="text-[11px] text-zinc-500 text-center">
            EVSELECT Thailand Operating OS
          </p>
        </div>
      </aside>

      {/* Main Admin Area */}
      <main className="flex-1 overflow-auto bg-gray-50 text-gray-900">
        {children}
      </main>
    </div>
  );
}
