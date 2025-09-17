import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, Phone, Home, TreePine, Building, Star, Lightbulb, 
  Shield, Smartphone, Award, Zap, Palette, Mic, 
  ChevronLeft, ChevronRight, Gamepad2, Flower, Users, 
  TrendingUp, DollarSign, Handshake, CheckCircle, ArrowRight,
  Package, MapPin, Target, Mail, ExternalLink, Clock,
  Wrench, Recycle, Heart
} from 'lucide-react';

export default function AboutApp() {
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
      <AboutPage />
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

const AboutPage: React.FC = () => {
  const founders = [
    {
      name: 'Lacey',
      role: 'Founder / President',
      image: '/images/lacey-headshot.jpg'
    },
    {
      name: 'Mat',
      role: 'Co-Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Bob',
      role: 'Co-Founder',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face'
    }
  ];

  const timeline = [
    {
      title: 'The Spark',
      subtitle: '"The annual tangle"',
      description: 'It all began with Lacey\'s napkin sketch in an airport—born from one too many weekends battling the "annual tangle." The idea was simple: pop out a bulb, plug in a new strand, and keep going.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Prototype',
      subtitle: 'Quick-connect sections',
      description: 'With Matt\'s encouragement and Bobby\'s engineering know-how, that sketch turned into our first working lights. Quick-connect sections, warm white bulbs, and a setup that finally made sense.',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'Field Tests',
      subtitle: 'Texas heat & wind',
      description: 'From the blazing Texas sun to sudden windstorms, we tested them in every condition we could. The lights kept shining, strong and steady.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Launch',
      subtitle: 'Link N Lights ships',
      description: 'What started as a neighborly idea is now lighting homes, patios, and venues across the country. That\'s the magic of Link\'n Lights.',
      icon: <Package className="w-6 h-6" />
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: 'Reliability',
      description: 'Built strong to shine season after season.'
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      title: 'Creativity',
      description: 'Freedom to design and reimagine any space.'
    },
    {
      icon: <Recycle className="w-8 h-8 text-teal-600" />,
      title: 'Longevity',
      description: 'Durable design for years of glow.'
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: 'Customer Commitment',
      description: 'Your joy guides everything we build.'
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Beautiful home lighting background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight-navy bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-bold text-warm-white mb-6 leading-tight">
            Why We Built Link'n Lights
          </h1>
          
          <p className="text-lg sm:text-xl text-warm-white opacity-90 mb-8 max-w-3xl mx-auto font-inter">
            Three founders, one shared goal: end the hassle of holiday lights. With Link'n Lights, setup is quick, storage is simple, and creativity has no limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products/starter-kit"
              className="bg-electric-aqua text-midnight-navy px-8 py-4 rounded-[20px] font-inter font-medium text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="https://www.youtube.com/watch?v=EvjvuZUhaak"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-warm-white text-warm-white px-8 py-4 rounded-[20px] font-inter font-medium text-lg hover:bg-warm-white hover:text-midnight-navy transition-all duration-300"
            >
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Three founders, one shared goal: end the hassle of holiday lights. With Link'n Lights, setup is quick, storage is simple, and creativity has no limits.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-poppins font-bold text-gray-800 mb-6 text-center">
                  The Leadership Team Behind Link'n Lights
                </h3>
                <div className="space-y-4">
                  {founders.map((founder, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div>
                        <h4 className="font-bold text-gray-800">{founder.name}</h4>
                        <p className="text-gray-600">{founder.name === 'Lacey' ? 'Founder / CEO' : founder.name === 'Mat' ? 'Co-Founder and COO' : founder.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="mt-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
                OUR STORY:
              </h3>
              <div className="text-gray-600 font-inter leading-relaxed space-y-4">
                <p>
                  So picture this. Years ago, Lacey was out in the yard trying to wrap lights around her trees. She wanted to branch off onto one of the limbs, but the lights just wouldn't let her. Total frustration.
                </p>
                <p>
                  Fast forward to an airport lounge. Lacey's waiting for her flight, doodling on a napkin, when the idea clicks: what if you could just twist out a bulb, pop in a new strand, and head off in a new direction? Easy.
                </p>
                <p>
                  She showed it to Matt, who thought it was genius. But then came the head scratcher… neither of them knew a thing about electronics.
                </p>
                <p>
                  That's when they knocked on the door of their neighbor Bobby, the electrical wizard across the street. He loved it so much he joined the adventure, and together they brought Link'n Lights to life.
                </p>
                <p>
                  What started with a sketch on a napkin is now the magic that lights up homes everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-gray-800 mb-4">
              The Problem → Our Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-red-800">The Problem</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-700 font-inter">Tangled strands that only last a season</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-700 font-inter">No way to adjust for different occasions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-700 font-inter">Time-consuming installs that mean climbing risky ladders</span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-green-800">Our Solution</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-700 font-inter">Build in any direction by swapping a bulb for a new strand</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-700 font-inter">Quick expand or repair without taking everything down</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-700 font-inter">Warm everyday glow plus brilliant holiday displays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {milestone.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-teal-600 font-inter font-semibold mb-3">
                  {milestone.subtitle}
                </p>
                <p className="text-gray-600 font-inter text-sm">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-gray-800 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas Callout */}
      <section className="py-24 bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-6">
            Texas Roots, Built for Real Life
          </h2>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto font-inter">
            We're Texas-based, where summers are hot and holidays go big. If Link'n Lights can handle it here, they can handle it anywhere.
          </p>
        </div>
      </section>


      {/* Closing CTA */}
      <section className="py-24 bg-midnight-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-warm-white mb-6">
            Ready for Easy Link'n and Endless Joy?
          </h2>
          <Link
            to="/products/starter-kit"
            className="bg-electric-aqua text-midnight-navy px-8 py-4 rounded-[20px] font-inter font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Shop Link'n Lights</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};