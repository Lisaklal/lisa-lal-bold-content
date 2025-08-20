import { Instagram, Palette, Video, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "Full-funnel social media strategies that build communities and drive conversions across all platforms.",
    features: ["Content Planning", "Community Management", "Analytics & Reporting", "Paid Social Campaigns"]
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals that tell your brand story and make your content impossible to ignore.",
    features: ["Brand Assets", "Social Graphics", "Print Design", "Visual Identity"]
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Cinematic video content that captures attention and drives engagement across all platforms.",
    features: ["Social Media Videos", "Product Demos", "Brand Stories", "Motion Graphics"]
  },
  {
    icon: ShoppingBag,
    title: "Shopify/E-commerce",
    description: "Complete e-commerce solutions that turn visitors into customers and customers into advocates.",
    features: ["Store Setup", "Product Management", "Conversion Optimization", "Growth Strategy"]
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-headline mb-6">
            <span className="text-primary">Services</span> <span className="text-foreground">Includes</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
            I help creators, influencers, and small businesses transform their brand identity with impactful visuals and smart digital management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
                <h3 className="text-title mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
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
              
              <div className="mt-6 pt-6 border-t border-border">
                <span className="text-accent font-semibold group-hover:underline">
                  This could be your brand →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};