import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Lisa transformed our social media presence completely. Her bold approach and creative strategies helped us reach audiences we never thought possible. The results speak for themselves.",
    author: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    rating: 5
  },
  {
    quote: "Working with Lisa was a game-changer for our e-commerce business. She didn't just manage our content—she revolutionized our entire brand strategy. Our sales doubled in just 4 months.",
    author: "Marcus Rodriguez",
    role: "Founder, Urban Threads",
    rating: 5
  },
  {
    quote: "Lisa's video content for our product launch exceeded all expectations. Professional, creative, and results-driven. She knows how to capture attention and convert it into action.",
    author: "Emma Thompson",
    role: "Marketing Director, InnovateCorp",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-headline mb-6">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
            Don't just take my word for it. Here's what business leaders say about working with me.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-soft group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-body mb-6 text-muted-foreground italic leading-relaxed group-hover:text-foreground transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-bold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center scroll-reveal">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>5-Star Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>100% Project Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};