import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";

const projects = [
  {
    title: "TechStartup Social Media Transformation",
    image: portfolioSocial,
    challenge: "Low engagement and inconsistent brand presence",
    solution: "Developed bold visual identity and strategic content calendar",
    result: "300% increase in engagement, 150% follower growth in 3 months",
    category: "Social Media"
  },
  {
    title: "E-commerce Store Revenue Optimization",
    image: portfolioEcommerce,
    challenge: "Poor conversion rates and abandoned carts",
    solution: "Redesigned product pages and implemented conversion strategy",
    result: "180% increase in conversion rate, 250% revenue growth",
    category: "E-commerce"
  },
  {
    title: "Fashion Brand Video Campaign",
    image: portfolioSocial,
    challenge: "Need to showcase new collection launch",
    solution: "Created cinematic video series for social platforms",
    result: "1M+ views, 40% increase in brand awareness",
    category: "Video"
  },
  {
    title: "B2B Company Brand Redesign",
    image: portfolioEcommerce,
    challenge: "Outdated brand image affecting credibility",
    solution: "Complete visual identity overhaul and content strategy",
    result: "60% increase in qualified leads, stronger market position",
    category: "Branding"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-headline mb-6">
            Real Results, <span className="text-gradient">Real Impact</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
            Every project tells a story of transformation. Here's how I've helped businesses 
            break through the noise and achieve extraordinary growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group scroll-reveal bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-bold transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-title mb-6 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-600 mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-green-600 mb-2">Result</h4>
                    <p className="text-foreground text-sm font-medium">{project.result}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-accent font-semibold group-hover:underline cursor-pointer">
                    View Case Study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 scroll-reveal">
          <button className="btn-hero">
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
};