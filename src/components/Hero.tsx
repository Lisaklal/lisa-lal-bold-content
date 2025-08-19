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
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4 text-center lg:text-left">
              <span className="text-white hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">Lisa Lal</span>
            </h1>
            
            <p className="text-subtitle mb-8 text-gray-300 max-w-2xl hover:text-white transition-colors duration-300 text-center lg:text-left">
              I'm Lisa, a designer driven by storytelling and bold ideas. For me, design is not just about visuals—it's about creating experiences that connect with people.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-hero glow-effect">
                Work With Me
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
          
          {/* Left Side - Paper Clip & Mockups */}
          <div className="flex justify-center lg:justify-start animate-slide-up order-first lg:order-last" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Paper Clip with Photo */}
              <div className="absolute top-0 left-8 z-10">
                <div className="relative">
                  {/* Paper Clip SVG */}
                  <svg width="40" height="80" viewBox="0 0 40 80" className="text-electric">
                    <path 
                      d="M20 10 L20 50 Q20 65 35 65 Q50 65 50 50 L50 20"
                      stroke="currentColor" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Clipped Photo */}
                  <div className="absolute top-6 left-6 w-24 h-32 transform rotate-12">
                    <img 
                      src={lisaHeadshot}
                      alt="Lisa Lal"
                      className="w-full h-full object-cover border-4 border-white shadow-lg rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* Phone Mockup for Reference */}
              <div className="flex gap-8 items-center">
                <div className="relative">
                  <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-bold">
                    <div className="w-full h-full bg-white rounded-2xl flex flex-col">
                      <div className="h-6 bg-gray-100 rounded-t-2xl flex items-center justify-center">
                        <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="text-xs font-bold mb-2">Portfolio Preview</div>
                        <div className="space-y-2">
                          <div className="h-20 bg-electric rounded-lg flex items-center justify-center text-white text-xs">
                            Creative Work
                          </div>
                          <div className="text-xs text-gray-600">Design • Video • Strategy</div>
                          <div className="text-xs text-electric font-bold">✨ Bold Ideas</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-electric text-white px-2 py-1 rounded-full text-xs font-bold">
                    Portfolio
                  </div>
                </div>
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