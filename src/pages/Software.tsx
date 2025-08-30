import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  {
    name: "CapCut",
    category: "Video Editing",
    description: "Mobile and desktop video editing",
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=80&h=80&fit=crop"
  },
  {
    name: "Premiere Pro",
    category: "Video Editing", 
    description: "Professional video editing suite",
    logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=80&h=80&fit=crop"
  },
  {
    name: "Photoshop",
    category: "Design",
    description: "Photo editing and graphic design",
    logo: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?w=80&h=80&fit=crop"
  },
  {
    name: "Lightroom",
    category: "Photography",
    description: "Photo enhancement and color grading",
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=80&h=80&fit=crop"
  },
  {
    name: "Filmora",
    category: "Video Editing",
    description: "Easy-to-use video editing software",
    logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?w=80&h=80&fit=crop"
  },
  {
    name: "After Effects",
    category: "Motion Graphics",
    description: "Motion graphics and visual effects",
    logo: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?w=80&h=80&fit=crop"
  },
  {
    name: "Shopify",
    category: "E-commerce",
    description: "E-commerce platform development",
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?w=80&h=80&fit=crop"
  }
];

const categories = ["All", "Video Editing", "Design", "Photography", "Motion Graphics", "E-commerce"];

const TechnicalSkills = () => {
  useScrollAnimation();

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

          {/* CTA Section */}
          <div className="mt-32 text-center scroll-reveal">
            <div className="bg-primary/5 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's leverage these technical skills to bring your creative vision to life.
              </p>
              <a 
                href="mailto:lisaahereee@gmail.com"
                className="btn-cta inline-block"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default TechnicalSkills;