import React, { useEffect, useState } from 'react';
import { goToCheckout } from '../lib/cart';
import { ExternalLink } from 'lucide-react';

interface CheckoutButtonProps {
  fallbackVariantId?: string;
  quantity?: number;
  className?: string;
}

export default function CheckoutButton({ 
  fallbackVariantId, 
  quantity = 1,
  className = "px-4 py-2 rounded border border-black disabled:opacity-50"
}: CheckoutButtonProps) {
  const [hasCart, setHasCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    try { 
      setHasCart(!!localStorage.getItem('shopify_cart_v1')); 
    } catch {} 
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      await goToCheckout(fallbackVariantId ? { variantId: fallbackVariantId, qty: quantity } : undefined);
    } catch (err: any) {
      setError(err.message || 'Checkout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        className={className}
        disabled={(!hasCart && !fallbackVariantId) || loading}
        onClick={handleCheckout}
      >
        <div className="flex items-center space-x-2">
          <span>{loading ? 'Loading...' : 'Checkout'}</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </button>
      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}