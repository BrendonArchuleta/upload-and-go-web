import React, { useEffect, useState } from "react";
import { sf } from "../lib/shopify-client";
import { PRODUCT_BY_HANDLE } from "../lib/shopify-queries";
import AddToCartButton from "./AddToCartButton";

interface Variant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: {
    amount: string;
    currencyCode: string;
  };
}

interface Product {
  id: string;
  title: string;
  variants: {
    nodes: Variant[];
  };
}

interface ProductByHandleProps {
  handle: string;
}

export default function ProductByHandle({ handle }: ProductByHandleProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);
        const data = await sf<{ product: Product }>(PRODUCT_BY_HANDLE, { handle });
        setProduct(data.product);
      } catch (e: any) {
        setError(e.message || 'Failed to fetch product');
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

  if (!product) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="text-yellow-800">No product found for handle "{handle}"</div>
      </div>
    );
  }

  const variants = product.variants?.nodes || [];
  if (variants.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="text-yellow-800">No variants found for "{product.title}"</div>
      </div>
    );
  }

  const firstAvailable = variants.find(v => v.availableForSale) || variants[0];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg space-y-4">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
        <div className="text-sm text-gray-600 mb-4">
          Variant: {firstAvailable.title}
        </div>
        <div className="text-2xl font-bold text-teal-600 mb-4">
          ${firstAvailable.price.amount} {firstAvailable.price.currencyCode}
        </div>
      </div>
      
      <AddToCartButton 
        variantId={firstAvailable.id} 
        productName={product.title}
        onAddSuccess={() => console.log('Product added to cart!')}
      />
      
      {!firstAvailable.availableForSale && (
        <div className="text-red-600 text-sm">
          This variant is currently out of stock
        </div>
      )}
    </div>
  );
}