import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";
import { Mail, Phone, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-headline mb-6">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground mb-8">
              Ready to bring your vision to life? Choose your preferred way to get in touch.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-primary font-semibold text-lg">
                Why work with me? Because I combine creativity + strategy to give you results that matter.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="group scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-title mb-4 group-hover:text-primary transition-colors duration-300">
                Book a Free Consultation
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a detailed discussion about your project needs and goals.
              </p>
              <a 
                href="mailto:lisaahereee@gmail.com?subject=Free Consultation Request"
                className="btn-cta inline-block w-full"
              >
                Schedule Now
              </a>
            </div>

            <div className="group scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-title mb-4 group-hover:text-primary transition-colors duration-300">
                Book a Meeting
              </h3>
              <p className="text-muted-foreground mb-6">
                Call directly to discuss your project in real-time.
              </p>
              <a 
                href="tel:+919307569975"
                className="btn-cta inline-block w-full"
              >
                Call Now
              </a>
            </div>

            <div className="group scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-title mb-4 group-hover:text-primary transition-colors duration-300">
                Send Email Inquiry
              </h3>
              <p className="text-muted-foreground mb-6">
                Send a detailed email with your project requirements.
              </p>
              <a 
                href="mailto:lisaahereee@gmail.com"
                className="btn-cta inline-block w-full"
              >
                Send Email
              </a>
            </div>

            <div className="group scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-xl text-center" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-title mb-4 group-hover:text-green-500 transition-colors duration-300">
                Quick WhatsApp Message
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a quick response for urgent queries or immediate assistance.
              </p>
              <a 
                href="https://wa.me/919307569975"
                className="bg-green-500 hover:bg-white hover:text-green-500 border hover:border-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-block w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Now
              </a>
            </div>
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-body text-muted-foreground mb-6">
                I typically respond within 2-4 hours during business hours. Let's discuss how I can help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Available for projects worldwide
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Fast response time
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Free consultation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default Contact;