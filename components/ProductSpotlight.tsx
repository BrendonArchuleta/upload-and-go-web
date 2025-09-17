import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
              The Revolutionary
              <br />
              <span className="text-electric-aqua">Link'n System</span>
            </h2>
            
            <p className="text-lg text-dark-text mb-8 font-inter leading-relaxed">
              Our patented bulb-to-bulb design makes it easy to expand or customize your display. Remove a bulb, snap in a new section, and instantly change the look. Create unique patterns, extend your setup, or shift from everyday glow to holiday sparkle with ease.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-electric-aqua rounded-full"></div>
                <span className="text-dark-text font-inter">No tools required. Just plug and play.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-electric-aqua rounded-full"></div>
                <span className="text-dark-text font-inter">Warm white LEDs for the perfect ambiance.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-electric-aqua rounded-full"></div>
                <span className="text-dark-text font-inter">Weather-resistant for year-round use.</span>
              </li>
            </ul>

            <a
              href="/resources"
              className="bg-electric-aqua text-midnight-navy px-8 py-4 rounded-[20px] font-inter font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 inline-flex"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-midnight-navy via-blue-900/50 to-purple-900/30 p-8 rounded-2xl shadow-2xl">
              <img
                src="/images/LL3.jpg"
                alt="Linkin Lights interchangeable lighting system starter kit showing the revolutionary bulb connection technology"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;