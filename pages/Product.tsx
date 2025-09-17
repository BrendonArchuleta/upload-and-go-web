import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, goToCheckout } from '../lib/cart';
import { 
  Menu, X, Phone, Home, TreePine, Building, Star, Lightbulb, 
  Shield, Smartphone, Award, Zap, Palette, Mic, Play, 
  ChevronLeft, ChevronRight, Gamepad2, Flower
} from 'lucide-react';

export default function ProductApp() {
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
      <ProductPage />
    </div>
  );
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
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

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Solutions Dropdown */}
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

                {/* Dropdown Menu */}
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

              {/* Other Nav Links */}
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

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={scrollToProducts}
              className="bg-electric-aqua text-midnight-navy px-6 py-2 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              BUY NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-midnight-navy">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Solutions Menu */}
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
              
              {/* Other Mobile Nav Links */}
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
                <button
                  onClick={scrollToProducts}
                  className="w-full mt-2 bg-electric-aqua text-midnight-navy px-6 py-2 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const ProductPage: React.FC = () => {
  const [selectedKit, setSelectedKit] = useState('50ft');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [mainImage, setMainImage] = useState('/images/LL Box.png');

  const product = { name: 'Total Home Kit', price: 299.99, originalPrice: 299.99 };

  const thumbnails = [
    { src: '/images/LL Box.png', alt: 'Product box' },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      title: '8 × 25\' Strands',
      description: ''
    },
    {
      icon: <Palette className="w-8 h-8 text-teal-600" />,
      title: '5 × 10\' Strands',
      description: ''
    },
    {
      icon: <Mic className="w-8 h-8 text-teal-600" />,
      title: 'Storage Bags',
      description: ''
    }
  ];


  const totalPrice = product.price * quantity;
  const totalSavings = (product.originalPrice - product.price) * quantity;

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      // Using the starter kit variant ID
      await addToCart('gid://shopify/ProductVariant/8413422911643', quantity);
      setAdded(true);
      
      // Reset added state after 3 seconds
      setTimeout(() => setAdded(false), 3000);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Product Gallery */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={mainImage} 
              alt="Link'n'Lights box" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb.src}
                alt={thumb.alt}
                className={`cursor-pointer rounded-md border-2 transition-colors ${
                  mainImage === thumb.src ? 'border-teal-500' : 'border-transparent hover:border-teal-500'
                }`}
                onClick={() => setMainImage(thumb.src)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Total Home Kit</h1>
          
          <p className="text-gray-600 text-lg">
            <span className="text-2xl font-bold text-gray-800">${product.price}</span>
          </p>
          
          <div className="flex items-center space-x-4">
            <label className="font-semibold text-gray-700">Quantity:</label>
            <div className="flex items-center border rounded-lg">
              <button 
                className="px-3 py-1 text-lg hover:bg-electric-aqua hover:text-white"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-1 text-black">{quantity}</span>
              <button 
                className="px-3 py-1 text-lg hover:bg-electric-aqua hover:text-white"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              disabled={true}
              className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg text-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
            <button 
              disabled={true}
              className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg text-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>

        </div>
      </div>

      {/* How It Works Section */}
      <section className="py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-lg text-gray-600 mt-2">Expanding your light display is as simple as screwing in a light bulb.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/EvjvuZUhaak"
                title="Linkin Lights Product Demonstration"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { step: 1, title: 'Screw out any bulb', description: 'Simply unscrew any bulb from your existing strand.' },
              { step: 2, title: 'Plug in new strand', description: 'Connect the new branch strand to the empty socket.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};