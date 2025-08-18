export const VideoEditing = () => {
  const videos = [
    {
      title: "Brand Story Video",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
      description: "Cinematic brand storytelling that captures emotion and drives engagement."
    },
    {
      title: "Product Demo",
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop",
      description: "Dynamic product showcases that highlight features and benefits."
    },
    {
      title: "Social Media Content",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
      description: "Engaging social content optimized for maximum reach and interaction."
    },
    {
      title: "Corporate Video",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
      description: "Professional corporate videos that communicate your message clearly."
    },
    {
      title: "Event Highlights",
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop",
      description: "Capturing the energy and excitement of your special events."
    },
    {
      title: "Tutorial Series",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
      description: "Educational content that informs and engages your audience."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-headline mb-6">
            Video <span className="text-gradient">Editing</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
            Bringing stories to life through compelling video content. From concept to final cut, I create videos that captivate audiences and deliver results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.title}
              className="group scroll-reveal bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-500 hover:scale-105 hover:shadow-soft cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-title mb-3 group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 scroll-reveal">
          <button className="btn-hero">
            View Video Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};