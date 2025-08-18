export const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <h2 className="text-headline mb-8 text-center">
              Bold. Creative. <span className="text-gradient">Results-Driven.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <p className="text-body-large mb-6">
                I'm Lisa Lal, and I believe that bold content isn't just about grabbing attention—it's about 
                creating connections that convert. With over 5 years of experience in content strategy, 
                I help businesses transform their digital presence from forgettable to unforgettable.
              </p>
              
              <p className="text-body mb-6">
                My approach combines creative storytelling with data-driven strategy. I don't just create 
                content; I craft experiences that resonate with your audience and drive real business results.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Creative Strategy", "Content Creation", "Social Media Management", 
                  "Video Editing", "Shopify/E-commerce", "Brand Development"
                ].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="scroll-reveal">
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-title mb-6">Why Choose Bold?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Strategic Thinking</h4>
                      <p className="text-muted-foreground">Every piece of content serves a purpose in your business growth.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Creative Excellence</h4>
                      <p className="text-muted-foreground">Standout visuals and copy that stops the scroll.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Measurable Results</h4>
                      <p className="text-muted-foreground">Data-backed strategies that deliver ROI.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};