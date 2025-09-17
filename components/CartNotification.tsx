import React, { useState, useEffect } from 'react';
import { CheckCircle, X, ShoppingCart } from 'lucide-react';

interface CartNotificationProps {
  show: boolean;
  productName: string;
  onClose: () => void;
}

const CartNotification: React.FC<CartNotificationProps> = ({ show, productName, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-fade-up">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 max-w-sm">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-semibold">Added to Cart!</p>
          <p className="text-sm opacity-90">{productName}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartNotification;