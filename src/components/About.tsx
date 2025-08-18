export const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <h2 className="text-headline mb-8 text-center">
              <span className="text-gradient">360° Content Manager</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <p className="text-body-large mb-6">
                I'm Lisa Lal, your bold, all-in-one content strategist who transforms businesses through 
                powerful visual storytelling. Combining expertise in graphic design, social media management, 
                video editing, digital marketing, and salesmanship, I deliver comprehensive content solutions.
              </p>
              
              <p className="text-body mb-6">
                From concept to conversion, I handle every aspect of your content strategy—because your 
                business deserves content that works as hard as you do. Let me turn your ideas into visuals 
                and your visuals into sales.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Graphic Design", "Social Media Management", "Video Editing", 
                  "Shopify/E-commerce", "Digital Marketing", "Salesmanship"
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