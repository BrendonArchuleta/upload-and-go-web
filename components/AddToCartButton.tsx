import React, { useState } from "react";
import { addToCart, goToCheckout } from "../lib/cart";
import { ShoppingCart, ExternalLink } from "lucide-react";

interface AddToCartButtonProps {
  variantId: string;
  quantity?: number;
  productName?: string;
  onAddSuccess?: () => void;
}

export default function AddToCartButton({ 
  variantId, 
  quantity = 1, 
  productName = "Product",
  onAddSuccess 
}: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAdd() {
    setLoading(true);
    setError(null);
    try {
      await addToCart(variantId, quantity);
      setAdded(true);
      onAddSuccess?.();
      
      // Reset added state after 3 seconds
      setTimeout(() => setAdded(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to add to cart');
    } finally {
      setLoading(false);
    }
  }

  async function handleCheckout() {
    try {
      await goToCheckout({ variantId, qty: quantity });
    } catch (err: any) {
      setError(err.message || 'Checkout failed');
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button
          onClick={handleAdd}
          disabled={loading}
          className="flex-1 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>{loading ? "Adding..." : added ? "Added!" : "Add to Cart"}</span>
        </button>
        
        <button
          onClick={handleCheckout}
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
        >
          <span>Checkout</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
      
      {added && (
        <div className="text-green-600 text-sm font-medium flex items-center space-x-1">
          <span>✓</span>
          <span>{productName} added to cart!</span>
        </div>
      )}
      
      {error && (
        <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
}