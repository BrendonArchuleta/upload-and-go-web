import React from 'react';
import { Home, TreePine, Calendar, Lightbulb } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Year-Round Home Lighting',
      description: 'A cozy glow for everyday life and holiday magic.',
      slug: 'home-lighting'
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Christmas Displays',
      description: 'Bright, cheerful, and easy. Light up the holidays your way.',
      slug: 'christmas-lighting'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Seasonal Flexibility',
      description: 'One system for cozy nights and festive celebrations.',
      slug: 'seasonal-lighting'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Custom Sections',
      description: 'Build the display you want by adding or removing sections with ease.',
      slug: 'custom-sections'
    }
  ];

  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
            One System, Endless Possibilities
          </h2>
          <p className="text-lg text-warm-white opacity-90 font-inter max-w-2xl mx-auto">
            Enjoy a glow that works for every season and every celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-card p-8 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-electric-aqua text-midnight-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-poppins font-bold text-warm-white mb-4">
                {feature.title}
              </h3>
              <p className="text-dark-text font-inter mb-6 leading-relaxed">
                {feature.description}
              </p>
              <a
                href={`/solutions/${feature.slug}`}
                className="text-electric-aqua font-inter font-semibold hover:underline transition-all duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;