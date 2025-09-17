import React from 'react';
import { Star } from 'lucide-react';

const IntegrationsStrip: React.FC = () => {
  return (
    <section className="py-16 bg-dark-bg">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-warm-white mb-4">
            Works With Your Smart Home <span className="text-gray-500 font-inter text-lg">(EXAMPLE)</span>
          </h2>
          <p className="text-dark-text font-inter">
            Seamlessly integrate with your favorite smart home platforms
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          {/* Amazon Alexa */}
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">ALEXA</span>
            </div>
            <span className="text-dark-text font-inter font-medium">Amazon Alexa</span>
          </div>

          {/* Google Home */}
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <span className="text-dark-text font-inter font-medium">Google Home</span>
          </div>

          {/* Control4 */}
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">C4</span>
            </div>
            <span className="text-dark-text font-inter font-medium">Control4</span>
          </div>
        </div>

        {/* Reviews */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-electric-aqua text-midnight-navy px-6 py-3 rounded-full">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-inter font-semibold">4.8</span>
            <span className="font-inter">Google Reviews</span>
            <span className="font-inter opacity-80">•</span>
            <span className="font-inter">1,200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsStrip;