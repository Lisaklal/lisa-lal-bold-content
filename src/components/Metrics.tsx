export const Metrics = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="scroll-reveal">
            <div className="text-4xl font-black text-primary mb-2">100+</div>
            <div className="text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          
          <div className="scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-black text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground font-medium">Average Customer Rating</div>
          </div>
          
          <div className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-black text-primary mb-2">10+</div>
            <div className="text-muted-foreground font-medium">Global Clients</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 text-center mt-8">
          <div className="scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-black text-primary mb-2">4+</div>
            <div className="text-muted-foreground font-medium">Brands Launched</div>
          </div>
        </div>
      </div>
    </section>
  );
};