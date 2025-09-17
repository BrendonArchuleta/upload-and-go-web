import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, goToCheckout } from '../lib/cart';
import { 
  Menu, X, Phone, Home, TreePine, Building, Star, Lightbulb, 
  Shield, Smartphone, Award, Zap, Palette, Mic, ShoppingCart,
  Gamepad2, Flower, ArrowRight
} from 'lucide-react';

export default function ProductCatalogApp() {
  return (
    <div className="bg-gray-50 font-inter">
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .bg-midnight-navy { background-color: #0A192F; }
        .bg-electric-aqua { background-color: #73c3c1; }
        .text-midnight-navy { color: #0A192F; }
        .text-warm-white { color: #F0EAD6; }
        .text-electric-aqua { color: #73c3c1; }
        .border-dark-border { border-color: #2A3A4F; }
        .text-dark-text { color: #8892B0; }
        .bg-dark-card { background-color: #112240; }
        .bg-dark-bg { background-color: #020c1b; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <Navigation />
      <ProductCatalogPage />
    </div>
  );
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleSolutionsMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
  ];

  const solutionsMenu = {
    'Shop by Use Case': [
      { name: 'Holiday Displays', icon: <TreePine className="w-5 h-5" />, href: '/solutions/holiday' },
      { name: 'Outdoor Lighting', icon: <Flower className="w-5 h-5" />, href: '/solutions/outdoor' },
    ]
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-midnight-navy bg-opacity-90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
              <img 
                src="/images/2 FINAL LinkN Lights - n logo circle-1-1.png" 
                alt="Link N Lights Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-electric-aqua font-poppins font-bold text-xl">Link'n Lights</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div 
                className="relative group"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <button className="text-warm-white hover:text-electric-aqua transition-colors duration-300 font-inter font-medium flex items-center space-x-1">
                  <span className="text-electric-aqua">Solutions</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isSolutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[800px] bg-midnight-navy border border-dark-border rounded-2xl shadow-2xl overflow-hidden z-50"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {Object.entries(solutionsMenu).map(([category, items], categoryIndex) => (
                        <div key={category} className={`p-6 ${categoryIndex < 1 ? 'border-r border-dark-border' : ''}`}>
                          <h3 className="text-dark-text font-inter font-medium text-sm uppercase tracking-wide mb-4">
                            {category}
                          </h3>
                          <ul className="space-y-3">
                            {items.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to={item.href}
                                  onClick={() => {
                                    setIsSolutionsOpen(false);
                                    if (hoverTimeout) {
                                      clearTimeout(hoverTimeout);
                                      setHoverTimeout(null);
                                    }
                                  }}
                                  className="flex items-center space-x-3 text-warm-white hover:text-electric-aqua transition-colors duration-300 group"
                                >
                                  <div className="text-dark-text group-hover:text-electric-aqua transition-colors duration-300">
                                    {item.icon}
                                  </div>
                                  <span className="font-inter">{item.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-electric-aqua hover:text-electric-aqua transition-colors duration-300 font-inter font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
            to="/product"
            className="bg-electric-aqua text-midnight-navy px-6 py-2 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            BUY NOW
          </Link>
        </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-warm-white hover:text-electric-aqua transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-midnight-navy">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="border-b border-dark-border pb-4 mb-4">
                <h3 className="text-warm-white font-inter font-semibold mb-3">Solutions</h3>
                <div className="space-y-2 pl-4">
                  {Object.entries(solutionsMenu).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-dark-text font-inter text-sm uppercase tracking-wide mb-2">
                        {category}
                      </h4>
                      {items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          className="flex items-center space-x-2 px-3 py-2 text-warm-white hover:text-electric-aqua transition-colors duration-300 font-inter"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 text-warm-white hover:text-electric-aqua transition-colors duration-300 font-inter font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/product"
                  className="w-full mt-2 bg-electric-aqua text-midnight-navy px-6 py-2 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-300 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};

const ProductCatalogPage: React.FC = () => {

  const products = [
    {
      id: 'whole-home-kit',
      name: 'Total Home Kit',
      price: 299.99,
      originalPrice: 299.99,
      image: '/LL Box.png',
      image: '/images/LL Box.png',
      badge: 'BEST SELLER',
      badgeColor: 'bg-green-500',
      rating: 4.8,
      reviews: 1300,
      description: 'Everything you need to light up your home with ease. Designed for simple setup and lasting glow, this kit has all the pieces to get started right away.',
      features: [
        '8 × 25\' Strands',
        '5 × 10\' Strands',
        '2 × 48W Power Supplies (1,400 bulb capacity)',
        '2 × Leader Lines',
        'Replacement Lamps',
        'Storage Bags',
        'gid://shopify/ProductVariant/8413422911643', // Shopify variant ID
      ],
      href: '/product'
    },
    {
      id: 'extension-kit',
      name: 'Extension Kit',
      price: 79.99,
      image: '/LL Box.png',
      image: '/images/LL Box.png',
      badge: 'ADD-ON',
      badgeColor: 'bg-electric-aqua',
      rating: 4.7,
      reviews: 850,
      description: 'Easily grow your lighting system with this add-on pack. It has everything you need to extend your setup and keep the glow shining bright.',
      features: [
        '2 × 25\' Strands',
        '5 × 10\' Strands',
        '1 × Leader Line',
        '1 × 48W Power Supply (1,400 bulb capacity)',
        'Replacement Lamps',
        'Storage Bags',
        'gid://shopify/ProductVariant/123456790', // Shopify variant ID
      ],
      href: '/extension-kit'
    },
    {
      id: 'holiday-special',
      name: 'OUTDOOR CLIPS',
      price: 19.99,
      originalPrice: 29.99,
      image: '/LNL clips.jpg',
      image: '/images/LNL clips.jpg',
      badge: 'ACCESSORY',
      badgeColor: 'bg-red-500',
      rating: 4.9,
      reviews: 650,
      description: 'Adhesive String Light Clips – Sticky Cord Hooks for Outdoor Lights, Holiday Displays, and Cable Management',
      features: [
        '50 Heavy-Duty Clips',
        'gid://shopify/ProductVariant/123456791', // Shopify variant ID
        'Universal Fit Design',
        'Weather Resistant',
        'Easy Installation',
        'No Damage to Surfaces'
      ],
      href: '/clips'
    },
    {
      id: 'commercial-pro',
      name: 'Branded Tote',
      price: 19.99,
      originalPrice: 29.99,
      image: '/ChatGPT Image Sep 16, 2025, 05_35_11 PM.png',
      image: '/images/ChatGPT Image Sep 16, 2025, 05_35_11 PM.png',
      badge: 'ACCESSORY',
      badgeColor: 'bg-purple-600',
      rating: 4.6,
      reviews: 420,
      description: 'Link\'n Lights Large Storage Bag – Extra Heavy Duty with Durable Zipper and Reinforced Handles',
      features: [
        'Durable Weather-Resistant Material',
        'gid://shopify/ProductVariant/123456792', // Shopify variant ID
        'Multiple Compartments',
        'Easy Carry Handles',
        'Fits All Linkin Light Kits',
        'Compact Storage Design'
      ],
      href: '/storage-bag'
    }
  ];

  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [addedStates, setAddedStates] = useState<Record<string, boolean>>({});

  const handleAddToCart = async (product: typeof products[0]) => {
    const variantId = product.features[1]; // Get Shopify variant ID from features
    setLoadingStates(prev => ({ ...prev, [product.id]: true }));
    
    try {
      await addToCart(variantId, 1);
      setAddedStates(prev => ({ ...prev, [product.id]: true }));
      
      // Reset added state after 3 seconds
      setTimeout(() => {
        setAddedStates(prev => ({ ...prev, [product.id]: false }));
      }, 3000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setLoadingStates(prev => ({ ...prev, [product.id]: false }));
    }
  };

  const closeNotification = () => {
    setNotification({ show: false, productName: '' });
  };

  return (
    <>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our full range of products. From Total Home Kits and Extension Kits to accessories like outdoor clips and storage totes, everything you need is here.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6">
              {/* Badge */}
              <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}>
                {product.badge}
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-1 mb-6">
                {product.features.slice(0, 1).concat(product.features.slice(2, 4)).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="w-3 h-3 text-teal-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-800">
                  ${product.price}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to={product.href}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg text-center transition duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>View Details</span>
                </Link>
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  disabled={loadingStates[product.id]}
                  className="w-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  {loadingStates[product.id] 
                    ? 'Adding...' 
                    : addedStates[product.id] 
                      ? 'Added to Cart ✓' 
                      : 'Quick Add to Cart'
                  }
                </button>
              </div>
              
              {/* Checkout Button */}
              <button 
                onClick={goToCheckout}
                className="w-full mt-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Checkout Now
              </button>
            </div>
          </div>
        ))}
      </div>

      </main>
    </>
  );
};