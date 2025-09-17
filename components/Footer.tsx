import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const sitemapLinks = [
    { title: 'Solutions', links: ['Home Lighting', 'Christmas Displays', 'Custom Sections', 'Seasonal Lighting'] },
    { title: 'Resources', links: ['Installation Guide', 'How It Works', 'Warranty Info', 'Blog'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Contact', 'Reviews'] },
  ];

  return (
    <footer className="bg-midnight-navy text-warm-white py-16">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/2 FINAL LinkN Lights - n logo circle-1-1.png" 
                alt="Link N Lights Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-warm-white font-poppins font-bold text-xl">Link'n Lights</span>
            </div>
            <p className="text-gray-400 font-inter mb-6">
              Beautiful lighting made easy. Perfect for everyday glow and dazzling holiday displays.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-aqua transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-aqua transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-aqua transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          {sitemapLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-poppins font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-electric-aqua transition-colors duration-300 font-inter"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400 font-inter">
                Contact Us support@linkinlights.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-inter text-sm">
              © {currentYear} Linkin Lights. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-electric-aqua transition-colors duration-300 font-inter text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-aqua transition-colors duration-300 font-inter text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-aqua transition-colors duration-300 font-inter text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;