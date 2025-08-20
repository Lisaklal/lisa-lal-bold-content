import { useState } from "react";
import { Calendar, TrendingUp, BarChart, Palette } from "lucide-react";

const socialServices = [
  {
    icon: Palette,
    title: "Content & Graphics",
    description: "Stunning visual content and graphics that capture attention and drive engagement across all social platforms.",
    features: ["Custom Graphics", "Brand Consistency", "Platform Optimization", "Visual Storytelling"]
  },
  {
    icon: Calendar,
    title: "Calendars & Posting",
    description: "Strategic content planning and scheduling to maintain consistent presence and maximize reach.",
    features: ["Content Calendar", "Optimal Timing", "Cross-Platform Posting", "Batch Creation"]
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies to grow your following, increase engagement, and build a loyal community.",
    features: ["Audience Analysis", "Hashtag Strategy", "Community Building", "Trend Leveraging"]
  },
  {
    icon: BarChart,
    title: "Analytics & Performance",
    description: "Comprehensive tracking and analysis to measure success and optimize your social media performance.",
    features: ["Performance Metrics", "ROI Tracking", "Competitor Analysis", "Strategy Optimization"]
  }
];

const socialImages = [
  {
    before: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop"
  },
  {
    before: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=400&fit=crop"
  },
  {
    before: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=400&fit=crop"
  },
  {
    before: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop"
  },
  {
    before: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop"
  },
  {
    before: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=400&fit=crop"
  }
];

const SocialMediaManagement = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-headline mb-6">
              <span className="text-primary">Social Media</span> <span className="text-foreground">Management</span>
            </h2>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Complete social media management that builds communities, drives engagement, and grows your brand presence across all platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            {socialServices.map((service, index) => (
              <div 
                key={service.title}
                className="group scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media Content Carousel */}
          <div className="text-center mb-12 scroll-reveal">
            <h3 className="text-3xl font-bold mb-4">Content Examples</h3>
            <p className="text-muted-foreground">Social media posts and graphics that drive engagement</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 carousel-container">
              {socialImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-2xl group aspect-square cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img 
                    src={hoveredIndex === index ? image.before : image.after}
                    alt={`Social Media Content ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Before/After Label */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {hoveredIndex === index ? 'Before' : 'After'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <button className="bg-gradient-to-r from-[hsl(var(--deep-blue-light))] to-[hsl(var(--deep-blue))] text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-250 shadow-lg hover:shadow-xl">
              Grow Your Social Presence
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;