export const CallToAction = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden" style={{ background: '#1486FF' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto scroll-reveal">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-12 text-white">
            Let's turn your ideas into reality.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 justify-center items-center mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <a 
                href="https://wa.me/919307569975"
                className="btn-cta inline-block"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <span className="group-hover:hidden">Quick Response</span>
                <span className="hidden group-hover:inline" style={{ color: '#4DD45A' }}>WhatsApp</span>
              </a>
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:lisaahereee@gmail.com"
                className="btn-cta inline-block"
                title="Email"
              >
                <span className="group-hover:hidden">Detailed Inquiry</span>
                <span className="hidden group-hover:inline text-black">lisaahereee@gmail.com</span>
              </a>
            </div>
            
            <div className="text-center">
              <a 
                href="tel:+919307569975"
                className="btn-cta inline-block"
                title="Phone Call"
              >
                <span className="group-hover:hidden">Book a Call</span>
                <span className="hidden group-hover:inline text-black">9307569975</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t-0 bg-black text-white py-8 -mx-6">
          <p className="text-lg mb-2">Available for projects worldwide.</p>
          <p className="text-white/60">Lisa Lal • lisaahereee@gmail.com</p>
        </div>
      </div>
    </section>
  );
};