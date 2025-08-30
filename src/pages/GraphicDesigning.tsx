import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";

// Mock image data for before/after examples
const galleryItems = [
  { id: 1, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Logo Design" },
  { id: 2, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Brand Identity" },
  { id: 3, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Social Media Post" },
  { id: 4, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Album Cover" },
  { id: 5, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Poster Design" },
  { id: 6, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Thumbnail" },
  { id: 7, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Business Card" },
  { id: 8, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Website Banner" },
  { id: 9, after: "/api/placeholder/400/400", before: "/api/placeholder/400/400", title: "Flyer Design" },
];

const services = [
  "Logos",
  "Brand identities", 
  "Thumbnails",
  "Social media graphics",
  "Album covers",
  "Posters"
];

const GraphicDesigning = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-headline mb-6">
              <span className="text-primary">Graphic</span> <span className="text-foreground">Design</span>
            </h1>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground mb-8">
              From dull to generating higher CTR: see the transformations. I create visuals that don't just look good—they perform.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {services.map((service, index) => (
              <div 
                key={service}
                className="bg-card p-4 rounded-xl border border-border text-center hover:border-primary transition-colors scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>

          {/* Gallery - 3 rows carousel */}
          <div className="space-y-8">
            {[0, 1, 2].map((rowIndex) => (
              <div key={rowIndex} className="overflow-hidden">
                <div 
                  className="flex gap-6 animate-marquee hover:animation-paused"
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
                      {/* After image (default) */}
                      <img 
                        src={item.after}
                        alt={`${item.title} - After`}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                        loading="lazy"
                      />
                      
                      {/* Before image (on hover) */}
                      <img 
                        src={item.before}
                        alt={`${item.title} - Before`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-lg font-bold mb-2">{item.title}</div>
                          <div className="text-sm">Before ← → After</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="mt-32">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-headline mb-6">
                Featured <span className="text-primary">Projects</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="scroll-reveal">
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold mb-4">Lisara Logo & Branding</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete brand identity design including logo, color palette, typography, and brand guidelines.
                  </p>
                  <div className="aspect-video bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold">Lisara Brand Identity</span>
                  </div>
                  <div className="text-accent font-semibold">
                    This could be your brand →
                  </div>
                </div>
              </div>

              <div className="scroll-reveal" style={{ animationDelay: '0.1s' }}>
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold mb-4">Ecomare UI Design</h3>
                  <p className="text-muted-foreground mb-6">
                    UI design, interaction flow, consistency, prototype, color & typography research for eco-friendly platform.
                  </p>
                  <div className="aspect-video bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold">Ecomare UI/UX</span>
                  </div>
                  <div className="text-accent font-semibold">
                    Book a Consultation →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default GraphicDesigning;