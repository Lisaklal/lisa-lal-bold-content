export const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-12 text-white">
            Let's turn your Ideas into reality.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 justify-center items-center mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-white/80 text-lg mb-4 font-semibold">Quick Response</div>
              <a 
                href="https://wa.me/919307569975"
                className="btn-hero glow-effect inline-block group relative bg-white text-primary hover:bg-white/90"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                Message Now
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  WhatsApp
                </span>
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-white/80 text-lg mb-4 font-semibold">Detailed Inquiry</div>
              <a 
                href="mailto:lisaahereee@gmail.com"
                className="btn-hero glow-effect inline-block group relative bg-white text-primary hover:bg-white/90"
                title="Email"
              >
                Send Email
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Email
                </span>
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-white/80 text-lg mb-4 font-semibold">Book a Call</div>
              <a 
                href="tel:+919307569975"
                className="btn-hero glow-effect inline-block group relative bg-white text-primary hover:bg-white/90"
                title="Phone Call"
              >
                Schedule Call
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  9307569975
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/20 text-white/80">
          <p className="text-lg mb-2">Available for projects worldwide. Response time: 2 hours.</p>
          <p className="text-white/60">Lisa Lal • lisaahereee@gmail.com</p>
        </div>
      </div>
    </section>
  );
};