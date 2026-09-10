import { Download } from 'lucide-react';

export default function ExportPage() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Export CSVs</h1>
        <p className="text-gray-500">Generate mass-upload CSV files for your sales channels.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200 text-center">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold mb-2">Shopee CSV</h2>
          <p className="text-sm text-gray-500 mb-6">Exports all ACTIVE products formatted for Shopee Mass Upload. Includes category mapping and fitment data.</p>
          <a href="/api/export/shopee" className="inline-block bg-orange-500 text-white font-medium px-6 py-2 rounded-md hover:bg-orange-600">
            Download Shopee CSV
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200 text-center">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold mb-2">WooCommerce CSV</h2>
          <p className="text-sm text-gray-500 mb-6">Exports all ACTIVE products formatted for WooCommerce native CSV import.</p>
          <a href="/api/export/woo" className="inline-block bg-purple-600 text-white font-medium px-6 py-2 rounded-md hover:bg-purple-700">
            Download WooCommerce CSV
          </a>
        </div>
      </div>
    </div>
  );
}
