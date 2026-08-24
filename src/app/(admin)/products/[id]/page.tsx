import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createBatch, updateBatchStatus } from '../actions';

const STATUSES = ['SHORTLISTED', 'SAMPLE_ORDERED', 'SAMPLE_IN_TRANSIT', 'SAMPLE_RECEIVED', 'ACTIVE', 'DISCONTINUED'];

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = await prisma.product.findUnique({
    where: { id: resolvedParams.id },
    include: { category: true, batches: { orderBy: { createdAt: 'desc' } } }
  });

  if (!product) notFound();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <Link href="/products" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Products</Link>
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-gray-500 mt-1">SKU: {product.sku} | Category: {product.category.name}</p>
      </div>

      {/* Create Batch */}
      <div className="bg-white rounded-lg shadow p-6 mb-8 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Add Supplier Batch</h2>
        <form action={async (formData) => {
          'use server';
          await createBatch(product.id, formData);
        }} className="grid grid-cols-4 gap-4 items-end">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Supplier Name (e.g. 1688 Factory Y)</label>
            <input type="text" name="supplierName" required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">URL (Optional)</label>
            <input type="url" name="supplierUrl" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cost (THB)</label>
            <input type="number" step="0.01" name="cost" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">MOQ</label>
            <input type="number" name="moq" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 w-full">
              Add Batch
            </button>
          </div>
        </form>
      </div>

      {/* Batches List */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Sourcing Pipeline (Batches)</h2>
        {product.batches.map(batch => (
          <div key={batch.id} className="bg-white rounded-lg shadow p-6 border border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{batch.supplierName}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Cost: {batch.cost ? `฿${batch.cost}` : 'N/A'} | MOQ: {batch.moq || 'N/A'} | 
                Added: {new Date(batch.createdAt).toLocaleDateString()}
              </p>
              {batch.supplierUrl && (
                <a href={batch.supplierUrl} target="_blank" rel="noreferrer" className="text-blue-600 text-sm hover:underline mt-1 inline-block">
                  Supplier Link
                </a>
              )}
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <form action={async (formData) => {
                'use server';
                const status = formData.get('status') as string;
                await updateBatchStatus(batch.id, status, product.id);
              }}>
                <select 
                  name="status" 
                  defaultValue={batch.status} 
                  onChange={(e) => e.target.form?.requestSubmit()}
                  className="border border-gray-300 rounded-md p-2 text-sm bg-gray-50"
                >
                  {STATUSES.map(s => <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>)}
                </select>
              </form>
              {batch.status === 'SAMPLE_RECEIVED' && (
                <span className="text-xs text-green-600 font-medium">Ready for Fitment Testing</span>
              )}
            </div>
          </div>
        ))}
        {product.batches.length === 0 && (
          <p className="text-gray-500">No supplier batches added yet.</p>
        )}
      </div>
    </div>
  );
}