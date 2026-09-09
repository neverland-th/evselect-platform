import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} | EVSELECT`,
    description: product.description || `Buy ${product.title} at EVSELECT`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      batches: {
        include: {
          fitments: {
            include: {
              vehicle: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    notFound();
  }

  // Extract unique compatible vehicles across all batches and fitments
  const compatibleVehicles = [];
  const seenVehicles = new Set();
  
  for (const batch of product.batches) {
    for (const fitment of batch.fitments) {
      const v = fitment.vehicle;
      const vKey = `${v.make}-${v.model}-${v.year}-${v.variant}`;
      if (!seenVehicles.has(vKey)) {
        seenVehicles.add(vKey);
        compatibleVehicles.push(v);
      }
    }
  }

  // Find a price to display from active batches, or default
  const activeBatch = product.batches.find(b => b.status === "ACTIVE");
  const price = activeBatch?.cost ? activeBatch.cost * 1.5 : null; // Arbitrary retail price calculation for demo

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image Placeholder */}
          <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-gray-400 text-lg">Product Image</span>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-black">Home</Link>
              <span className="mx-2">/</span>
              <span className="capitalize">{product.category.name}</span>
            </nav>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-sm text-gray-500 mb-6">SKU: {product.sku}</p>
            
            {price && (
              <div className="text-3xl font-semibold text-gray-900 mb-6">
                ฿{price.toLocaleString()}
              </div>
            )}

            {product.description && (
              <div className="prose prose-sm text-gray-600 mb-8">
                <p>{product.description}</p>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={`https://shopee.co.th/search?keyword=${encodeURIComponent(product.sku)}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-500 text-white text-center py-3 px-6 rounded-full font-medium hover:bg-orange-600 transition-colors">
                Buy on Shopee
              </a>
              <a href="https://line.me/ti/p/~@evselect" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 text-white text-center py-3 px-6 rounded-full font-medium hover:bg-green-600 transition-colors">
                Chat on LINE
              </a>
              <a href="https://m.me/evselect" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white text-center py-3 px-6 rounded-full font-medium hover:bg-blue-600 transition-colors">
                Messenger
              </a>
            </div>

            {/* Compatible Vehicles */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Compatible Vehicles</h3>
              {compatibleVehicles.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {compatibleVehicles.map((vehicle, i) => (
                    <li key={i} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                      {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.variant}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No fitment data available yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
