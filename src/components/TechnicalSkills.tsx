import { useEffect, useRef } from "react";

const skills = [
  { name: "CapCut", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=120&fit=crop&crop=center" },
  { name: "Premiere Pro", logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=120&h=120&fit=crop&crop=center" },
  { name: "Photoshop", logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&h=120&fit=crop&crop=center" },
  { name: "Lightroom", logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=120&h=120&fit=crop&crop=center" },
  { name: "Filmora", logo: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=120&h=120&fit=crop&crop=center" },
  { name: "After Effects", logo: "https://images.unsplash.com/photo-1626785774625-0a4b6b0c5d27?w=120&h=120&fit=crop&crop=center" },
  { name: "Shopify", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=120&fit=crop&crop=center" }
];

export const TechnicalSkills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-scale-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-headline mb-6">
            <span className="text-primary">Technical</span> <span className="text-foreground">Skills</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Proficient in industry-standard tools and software for creative design and digital marketing.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-item group opacity-0 transform scale-95 transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 hover:scale-110">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden bg-muted group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-scale-in {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>
    </section>
  );
};