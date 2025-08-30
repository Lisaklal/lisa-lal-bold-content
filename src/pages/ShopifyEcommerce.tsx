import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";
import { Store, Package, Globe, TrendingUp, Palette, BarChart } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Store Setup",
    description: "Complete Shopify store setup with optimized theme selection and configuration.",
    features: ["Theme Installation", "Payment Gateway Setup", "Shipping Configuration", "SEO Basics"]
  },
  {
    icon: Package,
    title: "Product Pages",
    description: "High-converting product pages that turn visitors into customers.",
    features: ["Product Photography", "Compelling Descriptions", "Trust Badges", "Variant Setup"]
  },
  {
    icon: Globe,
    title: "Full Site Design",
    description: "Custom e-commerce website design that reflects your brand identity.",
    features: ["Custom Design", "Mobile Responsive", "User Experience", "Brand Integration"]
  },
  {
    icon: Palette,
    title: "Branding/Marketing",
    description: "Complete branding solutions to make your store stand out.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Social Assets"]
  },
  {
    icon: TrendingUp,
    title: "Scaling Businesses",
    description: "Strategies and optimizations to grow your e-commerce revenue.",
    features: ["Conversion Optimization", "A/B Testing", "Analytics Setup", "Growth Strategy"]
  },
  {
    icon: BarChart,
    title: "Business Management",
    description: "End-to-end business operations and digital marketing strategies.",
    features: ["Listing Optimization", "Pricing Strategy", "Customer Support", "Promotions"]
  }
];

const ShopifyEcommerce = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-headline mb-6">
              <span className="text-primary">Shopify</span> <span className="text-foreground">& E-commerce</span>
            </h1>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground mb-8">
              I'm a digital creative who loves turning ideas into reality—graphics, videos, social media posts, and high-conversion Shopify stores. My ultimate goal is work that looks amazing AND performs.
            </p>
            <p className="text-body max-w-3xl mx-auto text-muted-foreground">
              By handling the details, I save you time. If you want creativity, strategy, and results all in one, I'm here to make it happen.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
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
                    Need this? Let's discuss →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mock Store Examples */}
          <div className="mt-32">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-headline mb-6">
                Store <span className="text-primary">Examples</span>
              </h2>
              <p className="text-body-large max-w-2xl mx-auto text-muted-foreground">
                Screenshots and mock stores designed for maximum conversions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <div 
                  key={item}
                  className="scroll-reveal group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/5] bg-primary/10 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-primary font-bold text-xl mb-2">Store {item}</div>
                        <div className="text-muted-foreground text-sm">E-commerce Design</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold mb-2">Modern E-commerce Store</h3>
                    <p className="text-sm text-muted-foreground">
                      Clean design with optimized conversion flow
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center scroll-reveal">
            <div className="bg-primary/5 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Store?</h2>
              <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create a high-converting Shopify store that drives sales and grows your business.
              </p>
              <a 
                href="mailto:lisaahereee@gmail.com"
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default ShopifyEcommerce;