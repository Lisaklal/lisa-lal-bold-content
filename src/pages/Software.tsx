const softwareLogos = [
  {
    name: "CapCut",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
    alt: "CapCut Video Editor"
  },
  {
    name: "Premiere Pro",
    logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&h=100&fit=crop",
    alt: "Adobe Premiere Pro"
  },
  {
    name: "Photoshop",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop",
    alt: "Adobe Photoshop"
  },
  {
    name: "Lightroom",
    logo: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=100&h=100&fit=crop",
    alt: "Adobe Lightroom"
  },
  {
    name: "Filmora",
    logo: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=100&h=100&fit=crop",
    alt: "Wondershare Filmora"
  },
  {
    name: "After Effects",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop",
    alt: "Adobe After Effects"
  }
];

const Software = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-headline mb-6">
              <span className="text-primary">Software</span> <span className="text-foreground">I Know</span>
            </h2>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Proficient in industry-leading software and tools to deliver professional results across all creative disciplines.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {softwareLogos.map((software, index) => (
                <div 
                  key={software.name}
                  className="group scroll-reveal flex flex-col items-center p-6 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-500 hover:scale-110 hover:shadow-xl cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mb-4 rounded-xl overflow-hidden bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={software.logo}
                      alt={software.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-center group-hover:text-accent transition-colors duration-300">
                    {software.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Constantly learning and adapting to new tools and technologies to stay at the forefront of creative innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;