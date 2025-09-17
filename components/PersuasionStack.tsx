import React from 'react';
import { 
  RefreshCw, 
  Lightbulb, 
  Home, 
  TreePine, 
  Wrench, 
  Clock, 
  Award, 
  Zap 
} from 'lucide-react';

const PersuasionStack: React.FC = () => {
  const features = [
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: 'Bulb-to-Bulb System',
      description: 'Revolutionary design lets you remove any bulb and add new string sections. Create custom patterns, extend displays, or modify sections without rewiring anything.',
      image: '/lacey-headshot.jpg',
      reverse: false
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Year-Round Home Lighting',
      description: 'Beautiful enough for everyday use, our warm white lights create perfect ambiance for patios, gardens, and outdoor living spaces throughout the year.',
      image: '/family.jpg',
      reverse: false
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Energy Efficient LEDs',
      description: 'Low power consumption means you can run beautiful lighting displays without worrying about your electricity bill. Safe, cool-running LED technology.',
      image: null,
      reverse: true
    }
  ];

  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
              feature.reverse ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            <div 
              className={`animate-fade-up ${feature.reverse ? 'lg:col-start-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6 text-electric-aqua">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-bold text-warm-white mb-6">
                {feature.title}
              </h3>
              <p className="text-lg text-warm-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            {feature.image && (
              <div className={feature.reverse ? 'lg:col-start-1' : ''}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-96 object-cover rounded-lg shadow-xl animate-glow"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersuasionStack;