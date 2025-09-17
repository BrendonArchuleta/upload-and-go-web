import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Menu, X, Phone, Home, TreePine, Building, Star, Info, Lightbulb, Zap, 
    Shield, Thermometer, Calculator, ChevronDown, ChevronUp, RefreshCw, 
    Twitter, Instagram, Facebook, CheckCircle2, Award, Truck, MoveHorizontal, 
    Sparkles, Gamepad2, Eye, Clapperboard, Twitch, Sun, Leaf, BookOpen, Image, HelpCircle, Rss, Flower
} from 'lucide-react';

//================================================================================
// Main App Component
// This component assembles the entire page.
//================================================================================
export default function ResourcesApp() {
  return (
    <div className="bg-midnight-navy font-inter">
      {/* The global styles for fonts, colors, and animations are included here */}
      <style>{`
          /* Define the color palette */
          :root {
            --midnight-navy: #0A192F;
            --electric-aqua: #73c3c1;
            --warm-white: #F0EAD6;
            --dark-border: #2A3A4F;
            --dark-text: #8892B0;
            --dark-card: #112240;
            --dark-bg: #020c1b;
            --warm-glow: #FFC649;
          }
          body {
            background-color: var(--midnight-navy);
          }
          /* Utility classes for colors */
          .bg-midnight-navy { background-color: var(--midnight-navy); }
          .bg-electric-aqua { background-color: var(--electric-aqua); }
          .text-midnight-navy { color: var(--midnight-navy); }
          .text-warm-white { color: var(--warm-white); }
          .text-electric-aqua { color: var(--electric-aqua); }
          .border-dark-border { border-color: var(--dark-border); }
          .text-dark-text { color: var(--dark-text); }
          .bg-dark-card { background-color: var(--dark-card); }
          .bg-dark-bg { background-color: var(--dark-bg); }

          /* Define fonts */
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Inter:wght@400;500;700&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }

          /* Define animations */
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fade-up 0.8s ease-out forwards;
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
          @keyframes sparkle {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
          }
          .animate-sparkle {
            animation: sparkle 1.5s ease-in-out infinite;
          }
          /* Custom text shadow for better readability on images */
          .text-shadow-md {
            text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
          }
      `}</style>
      
      <Navigation />
      <ResourcesPage />
      <Footer />
    </div>
  );
}

//================================================================================
// Navigation Component
// Updated to match home screen navigation.
//================================================================================
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
              <span className="font-poppins font-bold text-xl">Link'n Lights</span>
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
                  <span>Solutions</span>
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
                  className="text-warm-white hover:text-electric-aqua transition-colors duration-300 font-inter font-medium"
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

//================================================================================
// Resources Page Component
//================================================================================
const ResourcesPage: React.FC = () => {
    const specData = [
        { spec: "Length of String", example: "17 ft, 33 ft, 403 ft", importance: "Determines coverage for trees, roofs, or rooms; calculate based on space needs to avoid buying multiple sets." },
        { spec: "Number of Bulbs/LEDs", example: "25, 150, 1000 bulbs", importance: "Indicates density and brightness; more bulbs mean fuller illumination." },
        { spec: "Bulb Type", example: "LED (Warm White)", importance: "LEDs save up to 80-90% on energy and last 10x longer (50,000+ hours), making them eco-friendly and cost-effective." },
        { spec: "Color Temperature", example: "Warm White (2700K)", importance: "Affects ambiance. Our 2700K lights provide a cozy, welcoming vibe perfect for homes and elegant spaces." },
        { spec: "Bulb Spacing", example: "6 inches", importance: "Impacts evenness of light. Our standard spacing is ideal for broad coverage on roofs and detailed wrapping on trees." },
        { spec: "Power Consumption", example: "Max 210W per strand", importance: "Prevents circuit overloads. You can safely connect up to 90 of our energy-efficient strands together." },
        { spec: "Safety Certifications", example: "UL 588 Listed", importance: "Verifies fire and electrical safety for both indoor and outdoor seasonal or year-round use." },
        { spec: "Weather Resistance", example: "IP65 Waterproof", importance: "Essential for any outdoor setup. Prevents damage from rain, snow, and moisture." },
    ];

    return (
        <main className="bg-dark-bg">
            <div className="pt-24">
                {/* Hero Section */}
                <section className="py-20 text-center bg-midnight-navy">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl sm:text-6xl font-poppins font-bold text-warm-white mb-4">Resources & Inspiration</h1>
                        <p className="text-lg text-dark-text font-inter">
                            Everything you need to plan, install, and get inspired. Your guide to creating the perfect lighting experience.
                        </p>
                    </div>
                </section>

                {/* Resource Hub Navigation */}
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <a href="#guides" className="text-center group">
                            <div className="bg-dark-card p-8 rounded-2xl mb-4 border-2 border-transparent group-hover:border-electric-aqua group-hover:scale-105 transition-all duration-300">
                                <BookOpen className="w-12 h-12 text-electric-aqua mx-auto"/>
                            </div>
                            <h3 className="text-xl font-poppins font-semibold text-warm-white">Installation Guides</h3>
                        </a>
                        <a href="#gallery" className="text-center group">
                            <div className="bg-dark-card p-8 rounded-2xl mb-4 border-2 border-transparent group-hover:border-electric-aqua group-hover:scale-105 transition-all duration-300">
                                <Image className="w-12 h-12 text-electric-aqua mx-auto"/>
                            </div>
                            <h3 className="text-xl font-poppins font-semibold text-warm-white">Inspiration Gallery</h3>
                        </a>
                        <a href="#specs" className="text-center group">
                            <div className="bg-dark-card p-8 rounded-2xl mb-4 border-2 border-transparent group-hover:border-electric-aqua group-hover:scale-105 transition-all duration-300">
                                <HelpCircle className="w-12 h-12 text-electric-aqua mx-auto"/>
                            </div>
                            <h3 className="text-xl font-poppins font-semibold text-warm-white">Lighting 101</h3>
                        </a>
                        <a href="#blog" className="text-center group">
                            <div className="bg-dark-card p-8 rounded-2xl mb-4 border-2 border-transparent group-hover:border-electric-aqua group-hover:scale-105 transition-all duration-300">
                                <Rss className="w-12 h-12 text-electric-aqua mx-auto"/>
                            </div>
                            <h3 className="text-xl font-poppins font-semibold text-warm-white">Our Blog</h3>
                        </a>
                    </div>
                </section>

                {/* Lighting 101 / Specs Table */}
                <section id="specs" className="py-24 bg-midnight-navy">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">Understanding Your Lights</h2>
                            <p className="text-lg text-dark-text font-inter max-w-3xl mx-auto">We believe in clarity. Here's a breakdown of our product specifications and why they matter for creating your perfect space.</p>
                        </div>
                        <div className="bg-dark-card rounded-2xl shadow-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-dark-bg">
                                        <tr>
                                            <th className="p-6 text-sm font-semibold text-warm-white uppercase tracking-wider">Specification</th>
                                            <th className="p-6 text-sm font-semibold text-warm-white uppercase tracking-wider">Description & Examples</th>
                                            <th className="p-6 text-sm font-semibold text-warm-white uppercase tracking-wider">Why It's Important</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-dark-border">
                                        {specData.map((item, index) => (
                                            <tr key={index} className="hover:bg-dark-bg/50 transition-colors">
                                                <td className="p-6 font-semibold text-warm-white">{item.spec}</td>
                                                <td className="p-6 text-dark-text">{item.example}</td>
                                                <td className="p-6 text-dark-text">{item.importance}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-bg text-warm-white border-t border-dark-border">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2">
                            <img 
                                src="/2 FINAL LinkN Lights - n logo circle-1-1.png" 
                                alt="Link N Lights Logo" 
                                className="w-8 h-8 rounded-lg"
                            />
                            <span className="font-poppins font-bold text-xl">Linkin Lights</span>
                        </Link>
                        <p className="mt-4 text-dark-text text-sm">The future of customizable lighting.</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-dark-text hover:text-electric-aqua"><Twitter /></a>
                            <a href="#" className="text-dark-text hover:text-electric-aqua"><Facebook /></a>
                            <a href="#" className="text-dark-text hover:text-electric-aqua"><Instagram /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/solutions/accent" className="text-base text-dark-text hover:text-warm-white">Accent Lighting</Link></li>
                            <li><Link to="/solutions/holiday" className="text-base text-dark-text hover:text-warm-white">Holiday Displays</Link></li>
                            <li><Link to="/solutions/commercial" className="text-base text-dark-text hover:text-warm-white">Commercial</Link></li>
                            <li><Link to="/solutions/residential" className="text-base text-dark-text hover:text-warm-white">Residential</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/about" className="text-base text-dark-text hover:text-warm-white">About</Link></li>
                            <li><Link to="/blog" className="text-base text-dark-text hover:text-warm-white">Blog</Link></li>
                            <li><a href="#" className="text-base text-dark-text hover:text-warm-white">Partners</a></li>
                            <li><a href="#" className="text-base text-dark-text hover:text-warm-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-base text-dark-text hover:text-warm-white">Privacy</a></li>
                            <li><a href="#" className="text-base text-dark-text hover:text-warm-white">Terms</a></li>
                            <li><a href="#" className="text-base text-dark-text hover:text-warm-white">Warranty</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-dark-border pt-8 text-center">
                    <p className="text-base text-dark-text">&copy; {new Date().getFullYear()} Linkin Lights. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};