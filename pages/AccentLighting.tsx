import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Menu, X, Phone, Home, TreePine, Building, Star, Rss, Info, Wrench, Calendar, Gamepad2, Flower, UtensilsCrossed,
    ArrowRight, Lightbulb, Zap, Shield, Thermometer, Play, Calculator, 
    ChevronDown, ChevronUp, RefreshCw, Twitter, Instagram, Facebook,
    CheckCircle2, Award, Truck, MoveHorizontal
} from 'lucide-react';

//================================================================================
// Main App Component
// This component assembles the entire page.
//================================================================================
export default function AccentLightingApp() {
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
      `}</style>
      
      <Navigation />
      <AccentLightingPage />
      <Footer />
    </div>
  );
}

//================================================================================
// Navigation Component
// The site's main navigation bar.
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
                src="/images/ChatGPT Image Sep 16, 2025, 04_13_04 PM.png" 
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
// Accent Lighting Page Component
// This is the main content for the page you provided.
//================================================================================
const AccentLightingPage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedSpec, setExpandedSpec] = useState<string | null>(null);
  const [roomDimensions, setRoomDimensions] = useState({ length: 12, width: 10, zones: 3 });
  const [showCalculator, setShowCalculator] = useState(false);
  
  const testimonials = [
    {
      rating: 5,
      text: "The flexibility to add lights anywhere along the string is revolutionary. It made decorating our patio so much easier.",
      name: "Sarah Johnson",
      role: "Homeowner",
      project: "Patio Renovation",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      rating: 5,
      text: "As an interior designer, I love how these lights can be customized for each unique space. My clients are always impressed.",
      name: "Michael Chen",
      role: "Interior Designer",
      project: "Luxury Home Design",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      rating: 5,
      text: "The warm lighting options create the perfect ambiance for our restaurant. Installation was a breeze!",
      name: "Emma Rodriguez",
      role: "Restaurant Owner",
      project: "Dining Area Lighting",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: 'Easy Installation', description: 'No rewiring needed - plug and play system' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Interchangeable Bulbs', description: 'Swap bulbs instantly for different effects' },
    { icon: <Shield className="w-8 h-8" />, title: 'Energy Efficient', description: 'LED technology saves up to 80% on energy costs' },
    { icon: <Thermometer className="w-8 h-8" />, title: 'Dimming Control', description: 'Adjust brightness for perfect ambiance' }
  ];

  const technicalSpecs = [
    { id: 'lumens', title: 'Light Output', content: 'Available in 800, 1200, and 1600 lumen options. Adjustable brightness from 10% to 100% with smooth dimming capabilities.' },
    { id: 'color-temp', title: 'Color Temperature', content: 'Our signature lights feature a cozy, warm white temperature of 2700K, perfect for creating a welcoming ambiance.' },
    { id: 'coverage', title: 'Coverage Areas', content: 'Each fixture covers 2-4 feet depending on mounting height. Recommended spacing: 18-24 inches for even illumination.' },
    { id: 'installation', title: 'Installation Requirements', content: 'Standard 120V AC power. No special wiring required. Includes mounting hardware and detailed installation guide.' }
  ];

  const calculatePrice = () => {
    const basePrice = 89;
    const zoneMultiplier = roomDimensions.zones;
    const sizeMultiplier = (roomDimensions.length * roomDimensions.width) / 100;
    return Math.round(basePrice * zoneMultiplier * sizeMultiplier);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = `https://placehold.co/800x450/0A192F/F0EAD6?text=Image+Not+Found`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-transparent to-orange-900/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-up">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Beautiful string lights creating warm ambiance in bedroom setting" 
                  className="w-full h-full object-cover" 
                  onError={handleImageError} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/60 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div>
                <h1 className="text-4xl sm:text-6xl font-poppins font-bold text-warm-white mb-6 leading-tight">Discover Versatile Accent Lighting with <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">Linkin Lights</span></h1>
                <p className="text-lg text-dark-text font-inter leading-relaxed mb-8">Customize your space effortlessly—screw in new warm LED bulbs at any point on our innovative string lights for endless configurations and cozy ambiance. Perfect for any room, any length, any mood.</p>
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <button onClick={() => setShowCalculator(true)} className="bg-gradient-to-r from-electric-aqua to-blue-500 text-midnight-navy px-8 py-4 rounded-full font-inter font-bold text-lg hover:scale-105 transition-all duration-300 transform shadow-2xl shadow-electric-aqua/30 flex items-center justify-center space-x-2"><Calculator className="w-5 h-5" /><span>Design My Accent Lighting</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Before & After Slider Section */}
      <BeforeAfterSlider />

      {/* Benefits Grid */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">The Linkin Lights Advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-card p-8 rounded-2xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-electric-aqua/20 animate-fade-up group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-electric-aqua mb-6 inline-block group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-poppins font-bold text-warm-white mb-4">{benefit.title}</h3>
                <p className="text-dark-text font-inter leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart Section */}
      <ComparisonChart />

      {/* Customer Success Stories */}
      <section className="py-24 bg-midnight-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">Loved by Homeowners & Designers</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-dark-card rounded-2xl p-8 sm:p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />))}
              </div>
              <blockquote className="text-xl sm:text-2xl text-warm-white font-inter leading-relaxed text-center mb-8">"{testimonials[activeTestimonial].text}"</blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="w-16 h-16 rounded-full object-cover border-2 border-electric-aqua" onError={handleImageError}/>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-warm-white text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-electric-aqua font-inter">{testimonials[activeTestimonial].role}</div>
                  <div className="text-dark-text font-inter text-sm">{testimonials[activeTestimonial].project}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (<button key={index} onClick={() => setActiveTestimonial(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? 'bg-electric-aqua scale-125' : 'bg-gray-600 hover:bg-gray-400'}`} />))}
            </div>
          </div>
        </div>
      </section>

       {/* Technical Specifications */}
      <section className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
              Technical Specifications
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {technicalSpecs.map((spec) => (
              <div key={spec.id} className="bg-dark-card rounded-2xl overflow-hidden border border-dark-border">
                <button
                  onClick={() => setExpandedSpec(expandedSpec === spec.id ? null : spec.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-midnight-navy transition-colors duration-300"
                >
                  <h3 className="text-xl font-poppins font-semibold text-warm-white">
                    {spec.title}
                  </h3>
                  {expandedSpec === spec.id ? (
                    <ChevronUp className="w-6 h-6 text-electric-aqua" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-electric-aqua" />
                  )}
                </button>
                {expandedSpec === spec.id && (
                  <div className="px-8 pb-6 animate-fade-up" style={{animationDuration: '0.4s'}}>
                    <p className="text-dark-text font-inter leading-relaxed">
                      {spec.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* Final CTA Section */}
       <section className="py-24 bg-gradient-to-r from-electric-aqua to-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-midnight-navy mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-midnight-navy opacity-90 mb-8 max-w-2xl mx-auto font-inter">
            Join thousands of homeowners who've discovered the magic of professional accent lighting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowCalculator(true)} className="bg-midnight-navy text-warm-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Calculator className="w-5 h-5" />
              <span>Design My Accent Lighting</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 animate-fade-up" style={{animationDuration: '0.3s'}}>
          <div className="bg-dark-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-electric-aqua/20 shadow-2xl shadow-electric-aqua/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-poppins font-bold text-warm-white">Accent Lighting Calculator</h3>
              <button onClick={() => setShowCalculator(false)} className="text-warm-white hover:text-electric-aqua transition-colors duration-300"><X className="w-7 h-7" /></button>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-warm-white font-inter font-medium mb-2">Room Length (feet)</label>
                  <input type="number" value={roomDimensions.length} onChange={(e) => setRoomDimensions(prev => ({ ...prev, length: parseInt(e.target.value) || 0 }))} className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-warm-white font-inter focus:border-electric-aqua focus:outline-none focus:ring-2 focus:ring-electric-aqua/50"/>
                </div>
                <div>
                  <label className="block text-warm-white font-inter font-medium mb-2">Room Width (feet)</label>
                  <input type="number" value={roomDimensions.width} onChange={(e) => setRoomDimensions(prev => ({ ...prev, width: parseInt(e.target.value) || 0 }))} className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-warm-white font-inter focus:border-electric-aqua focus:outline-none focus:ring-2 focus:ring-electric-aqua/50"/>
                </div>
              </div>
              <div>
                <label className="block text-warm-white font-inter font-medium mb-2">Number of Lighting Zones</label>
                <select value={roomDimensions.zones} onChange={(e) => setRoomDimensions(prev => ({ ...prev, zones: parseInt(e.target.value) }))} className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-warm-white font-inter focus:border-electric-aqua focus:outline-none focus:ring-2 focus:ring-electric-aqua/50">
                  <option value={1}>1 Zone (Basic)</option><option value={2}>2 Zones (Standard)</option><option value={3}>3 Zones (Premium)</option><option value={4}>4+ Zones (Luxury)</option>
                </select>
              </div>
              <div className="bg-dark-bg p-6 rounded-lg">
                <div className="border-t border-dark-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-warm-white font-inter font-bold text-lg">Estimated Price:</span>
                    <span className="text-electric-aqua font-bold text-2xl">${calculatePrice().toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-electric-aqua text-midnight-navy py-3 rounded-lg font-inter font-semibold hover:bg-opacity-90 transition-all duration-300">Get Detailed Quote</button>
                <button className="flex-1 border border-electric-aqua text-electric-aqua py-3 rounded-lg font-inter font-semibold hover:bg-electric-aqua hover:text-midnight-navy transition-all duration-300">Schedule Consultation</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

//================================================================================
// How It Works Component
//================================================================================
const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb className="w-12 h-12 text-electric-aqua" />,
      title: 'Step 1: Start with the Base String',
      description: 'Our durable, weatherproof string is the foundation for your custom lighting design.',
      image: 'https://images.unsplash.com/photo-1505036952194-540b0244278c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-electric-aqua" />,
      title: 'Step 2: Screw in Bulbs Anywhere',
      description: 'Simply screw our signature warm LED bulbs into any socket along the string.',
      image: 'https://images.unsplash.com/photo-1620050638063-e877a55a435a?q=80&w=1974&auto=format&fit=crop',
    },
    {
      icon: <Zap className="w-12 h-12 text-electric-aqua" />,
      title: 'Step 3: Extend from Any Socket',
      description: 'Need more length? Just remove a bulb and plug in a new string. It\'s that easy.',
      image: 'https://images.unsplash.com/photo-1543974321-274a5a5c634c?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
            Endless Possibilities in 3 Simple Steps
          </h2>
          <p className="text-lg text-dark-text font-inter max-w-3xl mx-auto">
            Our patented system gives you the freedom to create perfect lighting for any space, any time.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="bg-dark-card p-8 rounded-2xl animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mb-6 inline-block p-4 bg-midnight-navy rounded-full">
                {step.icon}
              </div>
              <h3 className="text-2xl font-poppins font-bold text-warm-white mb-4">{step.title}</h3>
              <p className="text-dark-text font-inter leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//================================================================================
// Before & After Slider Component
//================================================================================
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
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
            See the Instant Transformation
          </h2>
          <p className="text-lg text-dark-text font-inter max-w-2xl mx-auto">
            Drag the slider to witness the dramatic impact of professional accent lighting.
          </p>
        </div>
        <div 
          ref={containerRef} 
          className="relative w-full aspect-video mx-auto rounded-2xl overflow-hidden cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          <img 
            src="/ChatGPT Image Sep 16, 2025, 04_13_04 PM.png" 
            alt="Living room after lighting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 w-full h-full object-cover overflow-hidden" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/images/ChatGPT Image Sep 16, 2025, 03_39_06 PM.png" 
              alt="Bedroom before accent lighting"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-y-0 bg-electric-aqua w-1" style={{ left: `calc(${sliderPosition}% - 2px)` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-electric-aqua/80 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white">
              <MoveHorizontal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//================================================================================
// Comparison Chart Component
//================================================================================
const ComparisonChart: React.FC = () => {
  const comparisonData = [
    { feature: 'Extendable Length', linkin: 'From any bulb socket', traditional: 'Only at the end of the string' },
    { feature: 'Customization', linkin: 'Add or move bulbs anywhere', traditional: 'Fixed, unchangeable sockets' },
    { feature: 'Durability', linkin: 'Commercial-grade, weatherproof', traditional: 'Often fragile, consumer-grade' },
    { feature: 'Reparability', linkin: 'Replace a single bulb', traditional: 'One bulb out, section fails' },
    { feature: 'Installation', linkin: 'Simple plug-and-play', traditional: 'Multiple extension cords needed' },
  ];

  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
            A Clear Difference
          </h2>
          <p className="text-lg text-dark-text font-inter max-w-2xl mx-auto">
            See how Linkin Lights stacks up against traditional string lighting solutions.
          </p>
        </div>
        <div className="bg-dark-card rounded-2xl overflow-hidden shadow-2xl">
          <div className="hidden md:grid grid-cols-3 text-left font-bold text-warm-white p-6 border-b border-dark-border">
            <div>Feature</div>
            <div className="text-electric-aqua">Linkin Lights</div>
            <div>Traditional Lights</div>
          </div>
          {comparisonData.map((item, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-4 p-6 border-b border-dark-border last:border-b-0">
              <div className="font-bold text-warm-white md:font-normal">{item.feature}</div>
              <div className="text-warm-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-electric-aqua flex-shrink-0" />
                <span>{item.linkin}</span>
              </div>
              <div className="text-dark-text flex items-center gap-2">
                <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>{item.traditional}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//================================================================================
// Guarantee Section Component
//================================================================================
const GuaranteeSection: React.FC = () => {
  const guarantees = [
    { icon: <Award className="w-8 h-8"/>, text: '2-Year Warranty' },
    { icon: <CheckCircle2 className="w-8 h-8"/>, text: 'Satisfaction Guaranteed' },
    { icon: <Shield className="w-8 h-8"/>, text: 'Weatherproof & Durable' },
    { icon: <Truck className="w-8 h-8"/>, text: 'Free & Fast Shipping' },
  ];
  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {guarantees.map((item, index) => (
            <div key={index} className="flex items-center justify-center flex-col gap-4 text-electric-aqua">
              {item.icon}
              <p className="font-semibold text-warm-white text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//================================================================================
// Footer Component
// The site's main footer.
//================================================================================
const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-bg text-warm-white border-t border-dark-border">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-electric-aqua rounded-lg flex items-center justify-center">
                                <span className="text-midnight-navy font-bold text-lg">L</span>
                            </div>
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