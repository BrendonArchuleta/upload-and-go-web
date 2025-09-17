import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The interchangeable system is genius! I can easily switch from everyday patio lighting to full Christmas displays. The warm white LEDs are absolutely perfect.'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Phoenix, AZ',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Best Christmas lights we\'ve ever had. Being able to add sections wherever we want makes decorating so much easier. Our neighbors are amazed!'
    },
    {
      name: 'Jennifer Chen',
      location: 'San Diego, CA',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'We use these year-round for our backyard ambiance and then add extra sections for Christmas. The warm white color is so cozy and inviting.'
    },
    {
      name: 'David Thompson',
      location: 'Denver, CO',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Installation was so easy, and being able to customize sections without tools is amazing. The quality is outstanding - these lights are built to last.'
    },
    {
      name: 'Lisa Martinez',
      location: 'Miami, FL',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Perfect for our Florida weather. The lights stay beautiful year-round, and switching to holiday mode takes just minutes. Highly recommend!'
    },
    {
      name: 'Robert Wilson',
      location: 'Chicago, IL',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The warm white LEDs create the perfect ambiance. We love how we can easily modify our display for different occasions throughout the year.'
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-midnight-navy">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-warm-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-warm-white opacity-90 font-inter">
            Join thousands of homeowners who love their interchangeable lighting systems
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-warm-white rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl text-gray-700 font-inter leading-relaxed text-center mb-8">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <div className="font-poppins font-semibold text-midnight-navy text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 font-inter">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-electric-aqua text-midnight-navy p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-electric-aqua text-midnight-navy p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-electric-aqua' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;