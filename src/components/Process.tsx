import { Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Strategy",
    description: "We dive deep into your business goals, target audience, and competitive landscape to create a comprehensive content strategy.",
    details: ["Market Research", "Audience Analysis", "Content Planning", "Goal Setting"]
  },
  {
    icon: Rocket,
    number: "02", 
    title: "Creation",
    description: "Bold, engaging content that captures attention and drives action. Every piece is crafted with purpose and precision.",
    details: ["Content Production", "Visual Design", "Video Editing", "Copy Writing"]
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Growth",
    description: "Continuous optimization and scaling based on performance data to maximize ROI and accelerate your business growth.",
    details: ["Performance Analysis", "A/B Testing", "Strategy Refinement", "Scaling Success"]
  }
];

export const Process = () => {
  return (
    <section className="py-20 bg-gradient-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-headline mb-6">
            My <span className="text-gradient">3-Step Process</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto text-gray-300">
            A proven methodology that transforms ideas into results. Every project follows this strategic approach 
            to ensure maximum impact and measurable success.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-electric transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="scroll-reveal text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-electric rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl font-black text-white">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-title mb-4 group-hover:text-electric-glow transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <div 
                        key={detail}
                        className="bg-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 border border-white/10"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-electric rounded-full flex items-center justify-center animate-pulse-glow">
                      <span className="text-white text-2xl">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16 scroll-reveal">
          <button className="btn-hero">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};