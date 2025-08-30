import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const platforms = [
  { name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-500" },
  { name: "YouTube", icon: Youtube, color: "from-red-500 to-red-600" },
  { name: "Facebook", icon: Facebook, color: "from-blue-500 to-blue-600" },
  { name: "Twitter", icon: Twitter, color: "from-blue-400 to-blue-500" },
  { name: "Pinterest", icon: Instagram, color: "from-red-400 to-red-500" },
  { name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-700" }
];

const services = [
  {
    title: "Content & Graphics",
    description: "Educational, engaging, promotional copywriting, plus Instagram story graphics that capture attention.",
    features: ["Content Creation", "Graphic Design", "Story Graphics", "Copywriting"]
  },
  {
    title: "Calendars & Posting",
    description: "Consistent posting schedules with strategic timing for maximum engagement across all platforms.",
    features: ["Content Calendar", "Scheduled Posting", "Optimal Timing", "Cross-Platform Management"]
  },
  {
    title: "Growth Strategies",
    description: "Data-driven strategies to grow your audience organically and build a loyal community.",
    features: ["Hashtag Research", "Audience Targeting", "Engagement Tactics", "Community Building"]
  },
  {
    title: "Analytics & Performance",
    description: "Detailed analytics and performance tracking to optimize your social media presence continuously.",
    features: ["Performance Reports", "ROI Tracking", "Audience Insights", "Strategy Optimization"]
  }
];

// Mock social media post data
const galleryItems = [
  { id: 1, image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=400&h=400&fit=crop", platform: "Instagram" },
  { id: 2, image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=400&h=400&fit=crop", platform: "Facebook" },
  { id: 3, image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?w=400&h=400&fit=crop", platform: "LinkedIn" },
  { id: 4, image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=400&h=400&fit=crop", platform: "Instagram" },
  { id: 5, image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=400&h=400&fit=crop", platform: "Twitter" },
  { id: 6, image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?w=400&h=400&fit=crop", platform: "YouTube" },
  { id: 7, image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=400&h=400&fit=crop", platform: "Instagram" },
  { id: 8, image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=400&h=400&fit=crop", platform: "Facebook" },
  { id: 9, image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?w=400&h=400&fit=crop", platform: "LinkedIn" },
];

const SocialMediaManagement = () => {
  useScrollAnimation();

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-headline mb-6">
              <span className="text-primary">Social Media</span> <span className="text-foreground">Management</span>
            </h1>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground mb-8">
              Educational, engaging, promotional copywriting, plus Instagram story graphics that drive real engagement and growth.
            </p>
          </div>

          {/* Platforms */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className="scroll-reveal flex items-center gap-3 bg-card p-4 rounded-xl border border-border hover:border-primary transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">{platform.name}</span>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-accent transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-accent font-semibold">
                    Need this? Let's discuss →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery - 3 rows carousel like Graphic Design */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-12">Content Portfolio</h2>
            <div className="space-y-8">
              {[0, 1, 2].map((rowIndex) => (
                <div key={rowIndex} className="overflow-hidden">
                  <div 
                    className="flex gap-6 carousel-row"
                    style={{ 
                      animationDirection: rowIndex % 2 === 0 ? 'normal' : 'reverse',
                      animationDelay: `${rowIndex * 2}s`
                    }}
                  >
                    {/* Duplicate items for seamless loop */}
                    {[...galleryItems, ...galleryItems].slice(rowIndex * 3, rowIndex * 3 + 6).map((item, index) => (
                      <div 
                        key={`${item.id}-${index}`}
                        className="group relative flex-shrink-0 w-80 h-80 rounded-2xl overflow-hidden cursor-pointer"
                      >
                        {/* 1:1 ratio social media post */}
                        <img 
                          src={item.image}
                          alt={`Social media post for ${item.platform}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-lg font-bold mb-2">{item.platform}</div>
                            <div className="text-sm">Social Media Post</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center scroll-reveal">
            <div className="bg-primary/5 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-6">Your Brand Could Be Next</h2>
              <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your social media presence? Let's create content that engages and converts.
              </p>
              <a 
                href="mailto:lisaahereee@gmail.com"
                className="btn-cta inline-block"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default SocialMediaManagement;