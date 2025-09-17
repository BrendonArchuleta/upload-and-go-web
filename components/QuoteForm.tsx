import React, { useState } from 'react';
import { ShoppingCart, Star, Zap, Shield, Truck, CreditCard, Package, ArrowRight, Calendar, CheckCircle } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 'starter-kit',
      name: 'Total Home Kit',
      price: 299.99,
      originalPrice: 299.99,
      image: '/images/LL Box.png',
      badge: 'BEST SELLER',
      badgeColor: 'bg-green-500',
      features: [
        '8 × 25\' Strands',
        '5 × 10\' Strands',
        '2 × 48W Power Supplies (1,400 bulb capacity)',
        '2 × Leader Lines',
        'Replacement Lamps',
        'Storage Bags'
      ],
      description: 'Everything you need to light up your home with ease. Designed for simple setup and lasting glow, this kit has all the pieces to get started right away.',
      savings: 0
    },
    {
      id: 'expansion-pack',
      name: 'Extension Kit',
      price: 79.99,
      originalPrice: 199,
      image: '/images/LL Box.png',
      badge: 'ADD-ON',
      badgeColor: 'bg-electric-aqua',
      features: [
        '2 × 25\' Strands',
        '5 × 10\' Strands',
        '1 × Leader Line',
        '1 × 48W Power Supply (1,400 bulb capacity)',
        'Replacement Lamps',
        'Storage Bags'
      ],
      description: 'Easily grow your lighting system with this add-on pack. It has everything you need to extend your setup and keep the glow shining bright.',
      savings: 50
    }
  ];

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    const product = products.find(p => p.id === selectedProduct);
    if (product) {
      // Simulate add to cart
      alert(`Added ${quantity}x ${product.name} to cart!`);
    }
  };

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <section id="products" className="py-24 bg-midnight-navy">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-electric-aqua/10 text-electric-aqua px-4 py-2 rounded-full mb-6">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-inter font-semibold">Shop Link'n Lights</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
            Transform Your Home Today
          </h2>
          
          <p className="text-lg text-dark-text font-inter max-w-2xl mx-auto mb-8">
            Choose the Link'n Lights system that fits your space. With simple setup, expandable sections, and a glow you can enjoy year-round, every order comes with our satisfaction guarantee and secure checkout.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-dark-text">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-electric-aqua" />
              <span>Easy Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-electric-aqua" />
              <span>Year-Round Ambiance</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-electric-aqua" />
              <span>Expandable System</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-electric-aqua" />
              <span>Satisfaction Guarantee</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-dark-card rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                selectedProduct === product.id 
                  ? 'border-electric-aqua shadow-2xl shadow-electric-aqua/20' 
                  : 'border-dark-border hover:border-electric-aqua/50'
              }`}
              onClick={() => handleProductSelect(product.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}>
                {product.badge}
              </div>

              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {selectedProduct === product.id && (
                  <div className="absolute inset-0 bg-electric-aqua/20 rounded-lg flex items-center justify-center">
                    <div className="bg-electric-aqua text-midnight-navy px-4 py-2 rounded-full font-bold">
                      SELECTED
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-warm-white mb-2">
                  {product.name}
                </h3>
                
                <p className="text-dark-text font-inter text-sm mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-dark-text">
                      <Zap className="w-3 h-3 text-electric-aqua flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-poppins font-bold text-warm-white">
                    ${product.price}
                  </span>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => window.location.href = product.id === 'starter-kit' ? '/product' : '/extension-kit'}
                  className={`w-full py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
                    selectedProduct === product.id
                      ? 'bg-electric-aqua text-midnight-navy'
                      : 'bg-dark-border text-warm-white hover:bg-[#ee8200] hover:text-white'
                  }`}
                >
                  {selectedProduct === product.id ? 'Selected' : 'Select This Kit'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Purchase Section */}
        {selectedProduct && selectedProductData && (
          <div className="bg-dark-card rounded-2xl p-8 border border-electric-aqua/20 animate-fade-up">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Product Summary */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <Package className="w-8 h-8 text-electric-aqua" />
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-warm-white">
                      {selectedProductData.name}
                    </h3>
                    <p className="text-dark-text font-inter">Ready to ship in 1-2 business days</p>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-warm-white font-inter font-medium">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-dark-border text-warm-white rounded-lg hover:bg-electric-aqua hover:text-midnight-navy transition-all duration-300"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-warm-white font-bold text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-dark-border text-warm-white rounded-lg hover:bg-electric-aqua hover:text-midnight-navy transition-all duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-dark-bg p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-dark-text">Subtotal:</span>
                    <span className="text-warm-white font-bold">
                      ${(selectedProductData.price * quantity).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-dark-text">Shipping:</span>
                    <span className="text-green-400 font-bold">FREE</span>
                  </div>
                  <div className="border-t border-dark-border pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-warm-white font-bold text-lg">Total:</span>
                      <span className="text-electric-aqua font-bold text-2xl">
                        ${(selectedProductData.price * quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-green-400">
                    <Star className="w-5 h-5" />
                    <span className="font-inter font-bold">
                      You're saving ${selectedProductData.savings * quantity} today!
                    </span>
                  </div>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-electric-aqua to-blue-500 text-midnight-navy py-4 rounded-lg font-inter font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-electric-aqua/30 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart - ${(selectedProductData.price * quantity).toLocaleString()}</span>
                </button>

                <button className="w-full bg-warm-white text-midnight-navy py-4 rounded-lg font-inter font-bold text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Buy Now with PayPal</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Security & Guarantees */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-electric-aqua mx-auto mb-2" />
                    <p className="text-xs text-dark-text">Secure Checkout</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-6 h-6 text-electric-aqua mx-auto mb-2" />
                    <p className="text-xs text-dark-text">30-Day Returns</p>
                  </div>
                </div>

                <p className="text-xs text-dark-text text-center mt-4">
                  Questions? Email support@linkinlights.com
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action for Non-Selected */}
      </div>
    </section>
  );
};

export default QuoteForm;