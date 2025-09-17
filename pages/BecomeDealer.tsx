import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Phone, Home, TreePine, Building, Star, Lightbulb, 
  Shield, Smartphone, Award, Zap, Palette, Mic, 
  ChevronLeft, ChevronRight, Gamepad2, Flower, Users, 
  TrendingUp, DollarSign, Store, CheckCircle, ArrowRight,
  Package, MapPin, Target, Handshake
} from 'lucide-react';

export default function BecomeDealerApp() {
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
      <BecomeDealerPage />
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
            <button
              onClick={scrollToProducts}
              className="bg-electric-aqua text-midnight-navy px-6 py-2 rounded-full font-inter font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              BUY NOW
            </button>
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

const BecomeDealerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    storeType: '',
    location: '',
    experience: '',
    currentBrands: '',
    annualVolume: '',
    message: ''
  });

  const benefits = [
    {
      icon: <Store className="w-8 h-8 text-teal-600" />,
      title: 'Exclusive Territory Rights',
      description: 'Secure exclusive dealership rights in your territory with protected geographic boundaries.'
    },
    {
      icon: <Package className="w-8 h-8 text-teal-600" />,
      title: 'Competitive Wholesale Pricing',
      description: 'Access to attractive wholesale pricing with volume discounts and flexible payment terms.'
    },
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: 'Marketing & Sales Support',
      description: 'Comprehensive marketing materials, POS displays, and sales training to drive success.'
    },
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      title: 'Product Training',
      description: 'Complete product knowledge training and ongoing education on new releases and features.'
    }
  ];

  const dealerTypes = [
    {
      title: 'Lighting Specialty Stores',
      description: 'Dedicated lighting retailers who want to offer innovative interchangeable lighting solutions.',
      requirements: ['Established lighting retail location', 'Lighting product expertise', 'Display space availability']
    },
    {
      title: 'Home Improvement Retailers',
      description: 'Hardware stores and home centers looking to expand their lighting product offerings.',
      requirements: ['Retail storefront', 'Home improvement focus', 'Customer service capability']
    },
    {
      title: 'Electrical Supply Dealers',
      description: 'Electrical distributors serving contractors and professional installers.',
      requirements: ['Electrical supply experience', 'Contractor customer base', 'Technical knowledge']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Dealer application submitted:', formData);
    alert('Thank you for your interest! Our dealer development team will contact you within 24 hours.');
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Become a Linkin Lights Dealer
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Join our exclusive dealer network and bring the future of interchangeable lighting to your customers. 
          Offer innovative products that set your store apart from the competition.
        </p>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-teal-800">
            <Store className="w-6 h-6" />
            <span className="font-semibold">Authorized Dealer Opportunities Available</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Dealer Program Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dealer Types Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Ideal Dealer Partners
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dealerTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {type.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Ideal Qualifications:</h4>
                <ul className="space-y-2">
                  {type.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Details */}
      <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What We Provide
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sales & Marketing Support</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Professional product displays and merchandising materials</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>High-quality brochures, catalogs, and sales literature</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Digital marketing assets and social media content</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Co-op advertising opportunities and local marketing support</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Training & Support</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Comprehensive product training for you and your staff</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Sales techniques and customer consultation training</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Ongoing technical support and product updates</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Dedicated dealer support representative</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Dealer Application
        </h2>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Type *
              </label>
              <select
                name="storeType"
                value={formData.storeType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select Store Type</option>
                <option value="lighting-specialty">Lighting Specialty Store</option>
                <option value="home-improvement">Home Improvement Retailer</option>
                <option value="electrical-supply">Electrical Supply Dealer</option>
                <option value="hardware">Hardware Store</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="City, State"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years in Business
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select Experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-20">11-20 years</option>
                <option value="20+">20+ years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Annual Sales Volume
              </label>
              <select
                name="annualVolume"
                value={formData.annualVolume}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">Select Volume Range</option>
                <option value="under-100k">Under $100K</option>
                <option value="100k-500k">$100K - $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="1m-5m">$1M - $5M</option>
                <option value="over-5m">Over $5M</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Lighting Brands Carried
            </label>
            <input
              type="text"
              name="currentBrands"
              value={formData.currentBrands}
              onChange={handleInputChange}
              placeholder="e.g., Philips, GE, Kichler, etc."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tell us about your business and why you're interested in becoming a Linkin Lights dealer
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Describe your store, customer base, and interest in our products..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Submit Dealer Application</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              We'll review your application and contact you within 24-48 hours.
            </p>
          </div>
        </form>
      </section>

      {/* Contact Section */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Questions About Our Dealer Program?
        </h2>
        <p className="text-gray-600 mb-6">
          Our dealer development team is ready to discuss opportunities and answer your questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:dealers@linkinlights.com"
            className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Email Dealer Development
          </a>
        </div>
      </section>
    </main>
  );
};