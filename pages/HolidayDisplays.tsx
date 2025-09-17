import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Menu, X, Phone, Home, TreePine, Building, Star, Info, Lightbulb, Zap, 
    Shield, Thermometer, Calculator, ChevronDown, ChevronUp, RefreshCw, 
    Twitter, Instagram, Facebook, CheckCircle2, Award, Truck, MoveHorizontal, 
    Sparkles, Gamepad2, Eye, Clapperboard, Twitch, Sun, Leaf, Flower, UtensilsCrossed, Calendar
} from 'lucide-react';

//================================================================================
// Main App Component
// This component assembles the entire page.
//================================================================================
export default function HolidayDisplaysApp() {
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
      <HolidayDisplaysPage />
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
              <span className="text-warm-white font-poppins font-bold text-xl">Link'n Lights</span>
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
                <a
                  key={link.name}
                  href={link.href}
                  className="text-warm-white hover:text-electric-aqua transition-colors duration-300 font-inter font-medium"
                >
                  {link.name}
                </a>
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
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-warm-white hover:text-electric-aqua transition-colors duration-300 font-inter font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
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
// Holiday Displays Page Component
//================================================================================
const HolidayDisplaysPage: React.FC = () => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = `https://placehold.co/1260x750/0A192F/F0EAD6?text=Holiday+Magic`;
    };

    const holidayBenefits = [
        { icon: <TreePine className="w-10 h-10"/>, title: "Magical Holiday Displays", description: "Create enchanting Christmas scenes that bring joy to your family and neighbors." },
        { icon: <Sparkles className="w-10 h-10"/>, title: "Easy Seasonal Setup", description: "Transform your home for the holidays in minutes, then easily store for next year." },
        { icon: <Calendar className="w-10 h-10"/>, title: "Year After Year", description: "Durable construction means your holiday magic will last for many seasons to come." }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative animate-fade-up">
                            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-dark-border">
                                <div className="relative w-full h-full">
                                    <img 
                                        src="/images/pexels-dzeninalukac-754262.jpg" 
                                        alt="Beautiful holiday lighting display creating magical Christmas ambiance" 
                                        className="w-full h-full object-cover" 
                                        onError={handleImageError} 
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
                            <div>
                                <h1 className="text-4xl sm:text-6xl font-poppins font-bold text-warm-white mb-6 leading-tight">Create Holiday <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent block">Magic That Lasts</span></h1>
                                <p className="text-lg text-dark-text font-inter leading-relaxed mb-8">Turn your home into a winter wonderland with Link'n Lights. Add festive sections, design custom patterns, and build displays that shine all season.</p>
                            </div>
                            <div className="flex flex-col gap-4 pt-8">
                                <button className="bg-gradient-to-r from-red-500 to-green-500 text-white px-8 py-4 rounded-full font-inter font-bold text-lg hover:scale-105 transition-all duration-300 transform shadow-2xl shadow-red-500/30 flex items-center justify-center space-x-2"><TreePine className="w-5 h-5" /><span>Shop Holiday Lights</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
                            Holiday Lighting Made Simple
                        </h2>
                        <p className="text-lg text-dark-text font-inter max-w-3xl mx-auto">
                            Whether it's a tree inside or lights outside, Link'n Lights make it easy to set the holiday mood.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {holidayBenefits.map((benefit, index) => (
                            <div key={index} className="bg-dark-card p-8 rounded-2xl animate-fade-up border border-transparent hover:border-red-500/30 transition-colors duration-300" style={{ animationDelay: `${index * 150}ms` }}>
                                <div className="mb-6 inline-block p-4 bg-midnight-navy rounded-full text-red-400">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-poppins font-bold text-warm-white mb-4">{benefit.title}</h3>
                                <p className="text-dark-text font-inter leading-relaxed">{index === 1 ? "Link'n Lights make it simple to decorate for the holidays and just as easy to store when the season is done." : index === 2 ? "Count on Link'n Lights to last. Built tough, they'll bring the holiday glow back season after season." : "Make Christmas shine with Link'n Lights. Build fun, festive displays everyone will enjoy."}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <BeforeAfterSlider />
            <HowItWorksSection />
        </main>
    );
};

//================================================================================
// Reusable Components
//================================================================================
const HowItWorksSection: React.FC = () => {
  const steps = [
    { icon: <Lightbulb className="w-12 h-12 text-electric-aqua" />, title: 'Step 1: Plug in the Anchor Strand', description: 'Plug in the Anchor and start your design.'},
    { icon: <RefreshCw className="w-12 h-12 text-electric-aqua" />, title: 'Step 2: Extend from Any Bulb', description: 'Unscrew any bulb, connect another strand, and keep going.'},
    { icon: <Zap className="w-12 h-12 text-electric-aqua" />, title: 'Step 3: Repeat and Create', description: 'Repeat the process, get creative, and watch the magic grow'}
  ];
  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">Endless Possibilities in 3 Simple Steps</h2>
          <p className="text-lg text-dark-text font-inter max-w-3xl mx-auto">Link'n Lights give you the freedom to create perfect lighting for any space, any time.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="bg-dark-card p-8 rounded-2xl animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mb-6 inline-block p-4 bg-midnight-navy rounded-full">{step.icon}</div>
              <h3 className="text-2xl font-poppins font-bold text-warm-white mb-4">{step.title}</h3>
              <p className="text-dark-text font-inter leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => handleMove(e.touches[0].clientX);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => handleMove(e.clientX);

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">See the Holiday Transformation</h2>
          <p className="text-lg text-dark-text font-inter max-w-2xl mx-auto">Slide to reveal how Link'n Lights turn ordinary spaces into magical holiday wonderlands.</p>
        </div>
        <div ref={containerRef} className="relative w-full aspect-video mx-auto rounded-2xl overflow-hidden cursor-ew-resize select-none" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
          <img src="/ChatGPT Image Sep 16, 2025, 11_33_31 AM.png" alt="Beautiful home with spectacular holiday lighting display" className="absolute inset-0 w-full h-full object-cover"/>
          <img src="/images/ChatGPT Image Sep 16, 2025, 11_33_31 AM.png" alt="Beautiful home with spectacular holiday lighting display" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="absolute inset-0 w-full h-full object-cover overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <img src="/images/ChatGPT Image Sep 16, 2025, 11_29_02 AM.png" alt="Holiday space before lighting" className="absolute inset-0 w-full h-full object-cover"/>
          </div>
          <div className="absolute inset-y-0 bg-electric-aqua w-1" style={{ left: `calc(${sliderPosition}% - 2px)` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-electric-aqua/80 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white"><MoveHorizontal /></div>
          </div>
        </div>
      </div>
    </section>
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
                            <span className="font-poppins font-bold text-xl">Link'n Lights</span>
                        </Link>
                        <p className="mt-4 text-dark-text text-sm">EASY LINK'N. ENDLESS JOY.</p>
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