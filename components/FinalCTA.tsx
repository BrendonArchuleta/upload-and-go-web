import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToProducts = () => {
    window.location.href = '/product';
  };

  return (
    <section className="py-24 bg-gradient-to-r from-electric-aqua to-blue-400">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-midnight-navy mb-6">
            Ready to Transform Your Home?
          </h2>
          
          <p className="text-lg sm:text-xl text-midnight-navy opacity-90 mb-8 max-w-2xl mx-auto font-inter">
            Join homeowners everywhere who are discovering the magic of Link'n Lights and the ease of simple, flexible lighting.
          </p>

          <button
            onClick={scrollToProducts}
            className="bg-midnight-navy text-warm-white px-8 py-4 rounded-[20px] font-inter font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;