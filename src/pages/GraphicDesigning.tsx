import { useState } from "react";

const graphicImages = [
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
  }
];

const GraphicDesigning = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="scroll-reveal">
            <h2 className="text-headline mb-8 text-center">
              <span className="text-primary">Graphic</span> <span className="text-foreground">Design</span>
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-4 text-center">
              From dull to generating higher CTR: see the transformations.
            </p>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
              Every thumbnail and graphic is designed to stop the scroll and drive clicks.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-6 carousel-container">
              {graphicImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-2xl group aspect-square cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img 
                    src={hoveredIndex === index ? image.before : image.after}
                    alt={`Graphic Design Work ${index + 1}`}
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
            
            <div className="text-center mt-12 scroll-reveal">
              <p className="text-body text-muted-foreground">
                Every project I take on is shaped by curiosity, detail, and the vision of turning ideas into impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesigning;