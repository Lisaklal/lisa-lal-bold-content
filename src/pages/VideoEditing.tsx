import { Play, TrendingUp, Search, Calendar, Eye } from "lucide-react";

const videoServices = [
  {
    icon: Play,
    title: "Engaging Edits",
    description: "Dynamic video editing that captures attention from the first second and keeps viewers engaged throughout.",
    features: ["Hook Creation", "Pacing & Flow", "Visual Effects", "Color Grading"]
  },
  {
    icon: Eye,
    title: "Retention Optimization",
    description: "Strategic editing techniques designed to maximize watch time and keep your audience coming back for more.",
    features: ["Retention Graphs Analysis", "Jump Cuts", "Visual Variety", "Engagement Hooks"]
  },
  {
    icon: Search,
    title: "SEO Titles, Tags & Descriptions",
    description: "Optimized metadata that helps your videos get discovered and rank higher in search results.",
    features: ["Keyword Research", "Title Optimization", "Tag Strategy", "Description Writing"]
  },
  {
    icon: Calendar,
    title: "Publishing & Scheduling",
    description: "Complete content management including scheduling, publishing, and cross-platform distribution.",
    features: ["Content Calendar", "Multi-Platform Publishing", "Optimal Timing", "Batch Processing"]
  },
  {
    icon: TrendingUp,
    title: "Thumbnails for Higher CTR",
    description: "Eye-catching thumbnails designed to maximize click-through rates and stand out in crowded feeds.",
    features: ["A/B Testing", "Psychology-Based Design", "Brand Consistency", "Platform Optimization"]
  }
];

const videoSamples = [
  {
    title: "Product Demo",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=700&fit=crop",
    description: "Engaging product showcase"
  },
  {
    title: "Brand Story",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=700&fit=crop",
    description: "Compelling brand narrative"
  },
  {
    title: "Tutorial Series",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop",
    description: "Educational content"
  },
  {
    title: "Social Media Short",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=700&fit=crop",
    description: "Viral-ready content"
  },
  {
    title: "Event Highlight",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=700&fit=crop",
    description: "Event coverage"
  },
  {
    title: "Testimonial Video",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop",
    description: "Client testimonial"
  }
];

const VideoEditing = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-headline mb-6">
              <span className="text-primary">Video</span> <span className="text-foreground">Editing</span>
            </h2>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Bringing stories to life through compelling video content. From concept to final cut, I create videos that captivate audiences and deliver results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {videoServices.map((service, index) => (
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

          {/* Video Samples Grid */}
          <div className="text-center mb-12 scroll-reveal">
            <h3 className="text-3xl font-bold mb-4">Sample Work</h3>
            <p className="text-muted-foreground">Vertical videos optimized for social media platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {videoSamples.map((video, index) => (
              <div 
                key={video.title}
                className="group scroll-reveal bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[9/16]">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                    {video.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <button className="bg-gradient-to-r from-[hsl(var(--deep-blue-light))] to-[hsl(var(--deep-blue))] text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-250 shadow-lg hover:shadow-xl">
              View Video Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;