import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We're getting triple the views we used to get. Lisa's thumbnails and editing style completely transformed our channel's performance.",
    author: "Alex Chen",
    role: "YouTuber",
    rating: 5,
    category: "YouTube Growth"
  },
  {
    quote: "She built a strong brand identity and digital strategy for us. Our online presence has never looked more professional and cohesive.",
    author: "Sarah Martinez",
    role: "Business Owner",
    rating: 5,
    category: "Brand Strategy"
  },
  {
    quote: "Lisa managed my socials wonderfully with stunning graphics. My engagement rates doubled and my followers love the new aesthetic.",
    author: "Emma Thompson",
    role: "Influencer",
    rating: 5,
    category: "Social Media"
  },
  {
    quote: "Lisa's designs gave my channel a professional edge; CTR went up significantly. The before and after difference is incredible.",
    author: "Marcus Rodriguez",
    role: "Content Creator",
    rating: 5,
    category: "Design & CTR"
  },
  {
    quote: "Working with Lisa was seamless. She understood our vision and delivered beyond expectations. Highly recommend her services.",
    author: "Jennifer Kim",
    role: "Marketing Director",
    rating: 5,
    category: "Project Management"
  },
  {
    quote: "The e-commerce store Lisa built for us is converting amazingly well. Sales increased by 200% in the first month alone.",
    author: "David Wilson",
    role: "E-commerce Owner",
    rating: 5,
    category: "E-commerce"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-headline mb-6">
              <span className="text-primary">Real Results,</span> <span className="text-foreground">Real Voices</span>
            </h2>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Don't just take my word for it. Here's what clients say about working with me and the results we've achieved together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.category}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
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
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>5-Star Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>100% Project Success Rate</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <button className="bg-gradient-to-r from-[hsl(var(--deep-blue-light))] to-[hsl(var(--deep-blue))] text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-250 shadow-lg hover:shadow-xl">
              Join Our Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;