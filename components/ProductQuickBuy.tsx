import React, { useEffect, useState } from 'react';
import { sf } from '../lib/shopify-client';
import { PRODUCT_BY_HANDLE } from '../lib/shopify-queries';
import AddToCartButton from './AddToCartButton';
import CheckoutButton from './CheckoutButton';

type Variant = { 
  id: string; 
  title: string; 
  availableForSale: boolean;
  price: {
    amount: string;
    currencyCode: string;
  };
};

interface ProductQuickBuyProps {
  handle: string;
}

export default function ProductQuickBuy({ handle }: ProductQuickBuyProps) {
  const [variant, setVariant] = useState<Variant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);
        const data = await sf<{ product: { title: string; variants: { nodes: Variant[] } } }>(PRODUCT_BY_HANDLE, { handle });
        const nodes = data.product?.variants?.nodes || [];
        const v = nodes.find(n => n.availableForSale) || nodes[0];
        setVariant(v || null);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [handle]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="text-red-600 font-semibold mb-2">Error loading product</div>
        <div className="text-red-500 text-sm">{error}</div>
      </div>
    );
  }

  if (!variant) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="text-yellow-800">No variants found for handle "{handle}"</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
      <div>
        <div className="text-sm text-gray-600 mb-2">Variant: {variant.title}</div>
        <div className="text-2xl font-bold text-teal-600 mb-4">
          ${variant.price.amount} {variant.price.currencyCode}
        </div>
      </div>
      
      <AddToCartButton 
        variantId={variant.id} 
        productName={`Product (${variant.title})`}
        onAddSuccess={() => console.log('Product added to cart!')}
      />
      
      {!variant.availableForSale && (
        <div className="text-red-600 text-sm">
          This variant is currently out of stock
        </div>
      )}
    </div>
  );
}