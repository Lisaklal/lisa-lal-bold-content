import { Store, ShoppingCart, TrendingUp, Palette, BarChart } from "lucide-react";

const ecommerceServices = [
  {
    icon: Store,
    title: "Store Setup",
    description: "Complete Shopify store setup from scratch, including theme customization, payment gateways, and essential app integrations.",
    features: ["Theme Selection & Customization", "Payment Gateway Setup", "App Integration", "Domain Configuration"]
  },
  {
    icon: ShoppingCart,
    title: "Product Pages",
    description: "Optimized product pages that convert visitors into customers with compelling descriptions and stunning visuals.",
    features: ["Product Photography", "SEO-Optimized Descriptions", "Conversion-Focused Layout", "Trust Signals"]
  },
  {
    icon: Palette,
    title: "Full E-commerce Site Design",
    description: "Complete website design that reflects your brand identity and provides seamless user experience across all devices.",
    features: ["Custom Design", "Mobile Optimization", "Brand Integration", "User Experience Design"]
  },
  {
    icon: TrendingUp,
    title: "Branding & Marketing",
    description: "Comprehensive branding and marketing strategies to establish your presence and drive traffic to your store.",
    features: ["Brand Identity", "Social Media Integration", "Email Marketing Setup", "Content Strategy"]
  },
  {
    icon: BarChart,
    title: "Scaling Results",
    description: "Data-driven strategies to scale your business, optimize conversions, and maximize revenue growth.",
    features: ["Analytics Setup", "Conversion Optimization", "A/B Testing", "Performance Monitoring"]
  }
];

const ShopifyEcommerce = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-headline mb-6">
              <span className="text-primary">Shopify</span> <span className="text-foreground">& E-commerce</span>
            </h2>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Complete e-commerce solutions that turn your vision into a profitable online business. From setup to scaling, I handle every aspect of your digital storefront.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ecommerceServices.map((service, index) => (
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

          <div className="text-center mt-16 scroll-reveal">
            <button className="bg-gradient-to-r from-[hsl(var(--deep-blue-light))] to-[hsl(var(--deep-blue))] text-white px-8 py-4 rounded-xl font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-250 shadow-lg hover:shadow-xl">
              Start Your E-commerce Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopifyEcommerce;