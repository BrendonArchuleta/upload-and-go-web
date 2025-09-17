import React from 'react';

const InteractiveTechDemo: React.FC = () => {
  const images = [
    {
      src: '/chatgpt-image-aug-11-2025-09-01-19-am.png',
      alt: 'Interchangeable lighting system demonstration'
    },
    {
      src: '/linkn-base-box-copy-2-copy.png',
      alt: 'Linkin Lights product box'
    },
    {
      src: '/pexels-dzeninalukac-754262.jpg',
      alt: 'Beautiful holiday lighting display'
    }
  ];

  const scrollToProducts = () => {
    window.location.href = '/product';
  };

  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
            Explore Link'n Lights in action.
          </h2>
          <p className="text-lg text-warm-white/80 font-inter max-w-2xl mx-auto">
            Discover the beauty and versatility of our interchangeable system.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl animate-fade-up">
            <img
              src="/images/matts-hands-copy-copy.jpg"
              alt="Hands connecting Linkin Lights interchangeable system demonstrating the easy connection process"
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: 'center 25%' }}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-electric-aqua to-[#5ba8a6] text-midnight-navy px-12 py-6 rounded-full font-inter font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-electric-aqua/30"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTechDemo;