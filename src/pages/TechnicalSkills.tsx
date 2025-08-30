import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";

const skills = [
  {
    name: "CapCut",
    category: "Video Editing",
    description: "Mobile and desktop video editing",
    logo: "/api/placeholder/80/80"
  },
  {
    name: "Premiere Pro",
    category: "Video Editing", 
    description: "Professional video editing suite",
    logo: "/api/placeholder/80/80"
  },
  {
    name: "Photoshop",
    category: "Design",
    description: "Photo editing and graphic design",
    logo: "/api/placeholder/80/80"
  },
  {
    name: "Lightroom",
    category: "Photography",
    description: "Photo enhancement and color grading",
    logo: "/api/placeholder/80/80"
  },
  {
    name: "Filmora",
    category: "Video Editing",
    description: "Easy-to-use video editing software",
    logo: "/api/placeholder/80/80"
  },
  {
    name: "After Effects",
    category: "Motion Graphics",
    description: "Motion graphics and visual effects",
    logo: "/api/placeholder/80/80"
  },
  {
    name: "Shopify",
    category: "E-commerce",
    description: "E-commerce platform development",
    logo: "/api/placeholder/80/80"
  }
];

const categories = ["All", "Video Editing", "Design", "Photography", "Motion Graphics", "E-commerce"];

const TechnicalSkills = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-headline mb-6">
              <span className="text-primary">Technical</span> <span className="text-foreground">Skills</span>
            </h1>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground">
              Professional software expertise across design, video editing, and e-commerce platforms to bring your vision to life.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid with Animation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group scroll-reveal bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Logo */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className="text-sm text-primary font-medium mb-2">
                  {skill.category}
                </div>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Expertise Levels */}
          <div className="mt-32">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-headline mb-6">
                Expertise <span className="text-primary">Levels</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center scroll-reveal">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  Expert
                </div>
                <h3 className="text-xl font-bold mb-4">Advanced Level</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>• Photoshop</div>
                  <div>• Premiere Pro</div>
                  <div>• Shopify</div>
                </div>
              </div>
              
              <div className="text-center scroll-reveal" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-primary/80 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  Pro
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Level</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>• After Effects</div>
                  <div>• Lightroom</div>
                  <div>• CapCut</div>
                </div>
              </div>
              
              <div className="text-center scroll-reveal" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-primary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  Skilled
                </div>
                <h3 className="text-xl font-bold mb-4">Proficient Level</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>• Filmora</div>
                  <div>• Various Design Tools</div>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-32">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-headline mb-6">
                Soft <span className="text-primary">Skills</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Communication", "Creativity", "Problem Solving", "Time Management"].map((skill, index) => (
                <div 
                  key={skill}
                  className="text-center scroll-reveal bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-semibold">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default TechnicalSkills;