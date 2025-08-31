import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We're getting triple the views we used to get! She did my thumbnail.",
    author: "Alex Martinez",
    role: "YouTuber",
    rating: 5,
    project: "YouTube thumbnail redesign – boosted clicks by 52%",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=60&h=60&fit=crop"
  },
  {
    quote: "She built a strong brand identity and digital strategy for us, and sales rose to 47% more.",
    author: "Sarah Chen",
    role: "Business Owner",
    rating: 5,
    project: "Complete brand redesign and e-commerce optimization",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=60&h=60&fit=crop"
  },
  {
    quote: "Lisa managed my socials wonderfully with graphics and increased my followers.",
    author: "Jordan Blake",
    role: "Influencer",
    rating: 5,
    project: "Social media management and content creation",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=60&h=60&fit=crop"
  },
  {
    quote: "Lisa's designs gave my channel a professional edge. People started clicking on my videos way more.",
    author: "Miguel Santos",
    role: "Content Creator",
    rating: 5,
    project: "Channel branding and thumbnail optimization",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=60&h=60&fit=crop"
  },
  {
    quote: "Our Shopify store design looks amazing and converts like never before.",
    author: "Emma Thompson",
    role: "Business Brand",
    rating: 5,
    project: "Shopify store design and conversion optimization",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=60&h=60&fit=crop"
  },
  {
    quote: "From logo to launch, Lisa guided us the whole way.",
    author: "David Kim",
    role: "Startup Founder",
    rating: 5,
    project: "Complete brand development from concept to market",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=60&h=60&fit=crop"
  }
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "4.9★", label: "Average Customer Rating" },
  { value: "10+", label: "Global Clients" },
  { value: "4+", label: "Brands Launched" }
];

const Testimonials = () => {
  useScrollAnimation();

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-headline mb-6">
              Real <span className="text-primary">Results</span>, Real <span className="text-primary">Voices</span>
            </h1>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Don't just take my word for it. Here's what clients say about working with me.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center scroll-reveal bg-card p-8 rounded-2xl border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-6 font-medium leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Project Description */}
                <div className="text-sm text-primary font-medium italic">
                  {testimonial.project}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center scroll-reveal">
            <div className="bg-primary/5 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-6">Join Satisfied Clients Worldwide</h2>
              <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to see similar results for your brand? Let's discuss how we can achieve your goals together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:lisaahereee@gmail.com"
                  className="btn-cta inline-block"
                >
                  Book a Meeting
                </a>
                <a 
                  href="https://wa.me/919307569975"
                  className="btn-cta-outline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quick WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default Testimonials;