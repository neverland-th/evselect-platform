import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { createProduct } from './actions';

export default async function ProductsPage() {
  type AdminProduct = Awaited<ReturnType<typeof prisma.product.findMany<{
    include: { category: true; _count: { select: { batches: true } } }
  }>>>[number];

  let products: AdminProduct[] = [];
  let categories: { id: string; name: string }[] = [];
  try {
    products = await prisma.product.findMany({
      include: { category: true, _count: { select: { batches: true } } },
      orderBy: { createdAt: 'desc' }
    });
    categories = await prisma.category.findMany({ orderBy: { name: 'asc' } });
  } catch {
    products = [];
    categories = [];
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Products & Sourcing</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Create New Product</h2>
        <form action={createProduct} className="flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[140px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
            <input type="text" name="sku" required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex-[2] min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input type="text" name="title" required className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select name="categoryId" required className="w-full border border-gray-300 rounded-md p-2 bg-white">
              <option value="">Select...</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <button type="submit" className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Create
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-200">
        <table className="min-w-[600px] w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batches</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((p) => (
              <tr key={p.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.sku}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{p.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p._count.batches}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/products/${p.id}`} className="text-blue-600 hover:text-blue-900">Manage Sourcing</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
