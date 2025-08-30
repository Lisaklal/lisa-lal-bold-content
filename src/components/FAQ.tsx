import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How does it work?",
      answer: "Simple! We discuss your project, I create the content, you review and request changes (up to 10 revisions), and then I deliver the final files. The whole process is designed to be smooth and collaborative."
    },
    {
      question: "How many reviewing chances will I get?",
      answer: "As many as 10 revisions."
    },
    {
      question: "What kind of designer are you?",
      answer: "One who balances precision with playfulness. I'm obsessed with clean, intuitive interfaces but also love throwing in unexpected, quirky details."
    },
    {
      question: "What inspires your design style?",
      answer: "Everything from minimalist architecture to street art. I find beauty in contrast—the way simplicity can be bold and complexity can be elegant."
    },
    {
      question: "What's your design process like?",
      answer: "I start with deep research and understanding, then sketch extensively before moving digital. I believe in iteration and always ask 'why' before 'how.'"
    },
    {
      question: "How do you handle creative blocks?",
      answer: "I step away from the screen. Sometimes the best solutions come during a walk or while cooking. I also keep a mood board that I constantly update."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-headline mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my approach and working style.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="scroll-reveal overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Question Bubble - White */}
              <div className="flex justify-start mb-4">
                <div className="max-w-2xl">
                  <div className="bg-white rounded-2xl rounded-bl-sm p-4 shadow-sm border border-border">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                      aria-expanded={openIndex === index}
                    >
                      <span className="font-semibold text-foreground text-lg pr-4">
                        {faq.question}
                      </span>
                      <div 
                        className={`w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-45' : ''
                        }`}
                      >
                        <span className="text-primary text-xl font-bold">+</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Answer Bubble - Blue */}
              {openIndex === index && (
                <div className="flex justify-end mb-4 animate-fade-in">
                  <div className="max-w-2xl">
                    <div 
                      className="rounded-2xl rounded-br-sm p-4 text-white shadow-sm"
                      style={{ background: 'hsl(203 100% 72%)' }}
                    >
                      <p className="text-white leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-reveal">
          <p className="text-body text-muted-foreground mb-6">
            Have more questions? Let's discuss your project.
          </p>
          <a 
            href="mailto:lisaahereee@gmail.com"
            className="btn-hero inline-block"
          >
            Book a free consultation
          </a>
        </div>
      </div>
    </section>
  );
};