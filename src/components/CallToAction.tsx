import { MessageCircle, Mail, Phone } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-dark text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-display mb-8">
            Let's grow your business{" "}
            <span className="text-gradient">today</span>
          </h2>
          
          <p className="text-body-large mb-12 text-gray-300 max-w-2xl mx-auto">
            Ready to transform your content strategy and accelerate your growth? 
            Let's create something bold and unforgettable together.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="https://wa.me/1234567890"
              className="btn-hero flex items-center gap-3 justify-center group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp Me
            </a>
            
            <a 
              href="mailto:lisa@lisalal.com"
              className="btn-outline text-white border-white hover:bg-white hover:text-black flex items-center gap-3 justify-center group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Send Email
            </a>
          </div>
          
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group scroll-reveal" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-electric" />
              </div>
              <h3 className="text-title mb-2">Quick Response</h3>
              <p className="text-gray-300 mb-4">
                WhatsApp for instant communication and quick project discussions.
              </p>
              <a 
                href="https://wa.me/1234567890"
                className="text-electric hover:text-electric-glow font-semibold"
              >
                Message Now →
              </a>
            </div>
            
            <div className="text-center group scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-electric" />
              </div>
              <h3 className="text-title mb-2">Detailed Inquiry</h3>
              <p className="text-gray-300 mb-4">
                Email for comprehensive project briefs and formal communications.
              </p>
              <a 
                href="mailto:lisa@lisalal.com"
                className="text-electric hover:text-electric-glow font-semibold"
              >
                Send Email →
              </a>
            </div>
            
            <div className="text-center group scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Phone className="w-8 h-8 text-electric" />
              </div>
              <h3 className="text-title mb-2">Strategy Call</h3>
              <p className="text-gray-300 mb-4">
                Schedule a consultation call to discuss your project in detail.
              </p>
              <a 
                href="tel:+1234567890"
                className="text-electric hover:text-electric-glow font-semibold"
              >
                Book Call →
              </a>
            </div>
          </div>
          
          {/* Footer Info */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-gray-400 mb-4">
              Available for projects worldwide • Response time: 24 hours
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <span>© 2024 Lisa Lal</span>
              <span>•</span>
              <span>360° Content Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};