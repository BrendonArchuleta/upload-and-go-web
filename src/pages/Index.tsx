import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import ProductSpotlight from "../../components/ProductSpotlight";
import FeatureGrid from "../../components/FeatureGrid";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import InteractiveTechDemo from "../../components/InteractiveTechDemo";
import PersuasionStack from "../../components/PersuasionStack";
import IntegrationsStrip from "../../components/IntegrationsStrip";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-linkn">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-navy via-midnight-navy/90 to-midnight-navy/70" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto animate-fade-up">
            <img 
              src="/logo.png" 
              alt="LinkN Lights Logo" 
              className="mx-auto mb-8 w-32 h-32 animate-glow"
            />
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient-linkn">LinkN Lights</span>
            </h1>
            <p className="text-xl md:text-2xl text-warm-white/90 mb-8 animate-typewriter">
              Professional Lighting Solutions for Every Occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-electric-aqua text-midnight-navy font-semibold rounded-lg hover:bg-electric-aqua/90 transition-all animate-glow">
                Shop Now
              </button>
              <button className="px-8 py-4 border-2 border-electric-aqua text-electric-aqua hover:bg-electric-aqua hover:text-midnight-navy transition-all rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-midnight-navy/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-gradient-linkn">
            Featured Products
          </h2>
          <ProductSpotlight />
        </div>
      </section>

      {/* Interactive Tech Demo */}
      <section className="py-20">
        <InteractiveTechDemo />
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-midnight-navy/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-warm-white">
            Why Choose LinkN Lights?
          </h2>
          <FeatureGrid />
        </div>
      </section>

      {/* Family & Professional Use */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img 
                src="/family.jpg" 
                alt="Family enjoying LinkN Lights" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-gradient-linkn">
                Perfect for Families & Professionals
              </h2>
              <p className="text-lg text-warm-white/80">
                From holiday displays to professional installations, LinkN Lights provides 
                the perfect lighting solution for every need. Our easy-to-use system makes 
                beautiful lighting accessible to everyone.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-midnight-navy/50 rounded-lg">
                  <div className="text-2xl font-bold text-electric-aqua">10k+</div>
                  <div className="text-warm-white/70">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-midnight-navy/50 rounded-lg">
                  <div className="text-2xl font-bold text-golden-glow">500+</div>
                  <div className="text-warm-white/70">Professional Installs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-midnight-navy/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-warm-white">
            What Our Customers Say
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Persuasion Stack */}
      <section className="py-20">
        <PersuasionStack />
      </section>

      {/* Integrations */}
      <section className="py-20 bg-midnight-navy/30">
        <IntegrationsStrip />
      </section>

      {/* Professional Installation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-display font-bold text-gradient-linkn">
                Professional Installation Services
              </h2>
              <p className="text-lg text-warm-white/80">
                Let our certified professionals handle your installation. We provide 
                complete setup services for residential and commercial projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-aqua rounded-full"></div>
                  <span className="text-warm-white">Free consultation and design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-aqua rounded-full"></div>
                  <span className="text-warm-white">Professional installation team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-aqua rounded-full"></div>
                  <span className="text-warm-white">1-year warranty on all work</span>
                </div>
              </div>
              <button className="px-8 py-4 bg-electric-aqua text-midnight-navy font-semibold rounded-lg hover:bg-electric-aqua/90 transition-all">
                Get Quote
              </button>
            </div>
            <div className="animate-fade-up order-1 lg:order-2">
              <img 
                src="/hand-lnl.jpg" 
                alt="Professional installation" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
