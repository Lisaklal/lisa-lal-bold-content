export const GraphicDesign = () => {
  const images = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop"
  ];

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="scroll-reveal">
          <h2 className="text-headline mb-16 text-center">
            Visual <span className="text-gradient">Communication</span>
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 h-[600px]">
            {/* First Row */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[0]}
                alt="Graphic Design Work 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[1]}
                alt="Graphic Design Work 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[2]}
                alt="Graphic Design Work 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Second Row */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[3]}
                alt="Graphic Design Work 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Center - Text Cell */}
            <div className="bg-gradient-to-br from-electric to-electric-glow rounded-2xl flex items-center justify-center text-center p-8">
              <div>
                <h3 className="text-title text-white font-black mb-4">Graphic Design</h3>
                <p className="text-white/90 text-lg">
                  Creating bold visuals that stop the scroll and start conversations.
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[4]}
                alt="Graphic Design Work 5"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Third Row */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[5]}
                alt="Graphic Design Work 6"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[6]}
                alt="Graphic Design Work 7"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={images[7]}
                alt="Graphic Design Work 8"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};