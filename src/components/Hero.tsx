import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import lisaHeadshot from "@/assets/lisa-headshot.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-electric rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-electric-glow rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-white animate-slide-up">
            <h1 className="text-display mb-6">
              I create{" "}
              <span className="text-gradient">bold content</span>{" "}
              that makes businesses{" "}
              <span className="text-gradient">impossible to ignore</span>
            </h1>
            
            <p className="text-body-large mb-8 text-gray-300 max-w-2xl">
              Content manager & creative strategist helping international businesses 
              dominate social media, create compelling content, and accelerate growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-hero glow-effect">
                Let's Work Together
              </button>
              <button className="btn-outline text-white border-white hover:bg-white hover:text-black">
                View My Work
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <div>
                <div className="text-headline text-white">50+</div>
                <div>Happy Clients</div>
              </div>
              <div>
                <div className="text-headline text-white">100K+</div>
                <div>Content Views</div>
              </div>
              <div>
                <div className="text-headline text-white">24/7</div>
                <div>Support</div>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-electric rounded-full blur-3xl opacity-30 scale-110"></div>
              <img 
                src={lisaHeadshot}
                alt="Lisa Lal - Content Manager"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white/20 shadow-bold"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-sm">
                ✨ Available Now
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};