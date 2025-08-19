export const VisualCommunication = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <h2 className="text-headline mb-8 text-center">
              Visual <span className="text-gradient">Communication</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <p className="text-body-large mb-6">
                Visual communication is the heart of everything I do. It's about creating a language that speaks directly to your audience, 
                conveying complex ideas through simple, powerful imagery that resonates and inspires action.
              </p>
              
              <p className="text-body mb-6">
                From brand identity to digital campaigns, every visual element is carefully crafted to tell your unique story. 
                I believe that great design doesn't just look good—it works hard to achieve your business goals.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Brand Identity", "Digital Campaigns", "Print Design", 
                  "Social Graphics", "Infographics", "Visual Strategy"
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
                <h3 className="text-title mb-6">My Design Philosophy</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Purpose-Driven Design</h4>
                      <p className="text-muted-foreground">Every design decision serves a strategic purpose in your brand story.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Emotional Connection</h4>
                      <p className="text-muted-foreground">Creating visuals that forge meaningful connections with your audience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold mb-1">Results-Focused</h4>
                      <p className="text-muted-foreground">Beautiful design that drives measurable business outcomes.</p>
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