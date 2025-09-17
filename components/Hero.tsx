import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  const phrases = [
    'Christmas Lighting',
    'Year-Round Home Lighting',
    'Holiday Displays',
    'Warm White Ambiance',
    'Custom Light Sections'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  const scrollToProducts = () => {
    window.location.href = '/product';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/evankaufmann_a_backyard_garden_wrapped_in_beautiful_white_chris_cf31d367-0f4e-4f02-bd57-d559527ae4b7.jpeg"
        >
          <source src="https://cdn.pixabay.com/vimeo/278803462/night-17652.mp4?width=1920&height=1080" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-midnight-navy bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold text-warm-white mb-6 leading-tight">
            Live Brighter With
            <br />
            <span className="text-electric-aqua inline-block min-h-[1.2em]">
              {phrases[currentPhrase]}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-warm-white opacity-90 mb-8 max-w-2xl mx-auto font-inter">
            Lighting made simple. Pop out a bulb, snap in a new section, and watch your home glow. Perfect warm white LEDs for cozy nights or dazzling holiday displays. One system, endless joy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProducts}
              className="bg-electric-aqua text-midnight-navy px-8 py-4 rounded-[20px] font-inter font-medium text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Buy Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setShowModal(true)}
              className="border border-warm-white text-warm-white px-8 py-4 rounded-[20px] font-inter font-medium text-lg hover:bg-warm-white hover:text-midnight-navy transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>See How It Works</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-electric-aqua transition-colors duration-300 text-2xl"
              aria-label="Close video modal"
            >
              ×
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/EvjvuZUhaak"
                title="Linkin Lights Interchangeable System Demo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;