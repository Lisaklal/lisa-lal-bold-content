import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "I offer graphic design, Shopify & e-commerce store building, video editing, social media management, and marketing strategy."
    },
    {
      question: "Can I see your past work?",
      answer: "Yes! My portfolio showcases thumbnails, logos, Instagram posts, videos, managed social media accounts and live Shopify stores I've built."
    },
    {
      question: "How do I get started?",
      answer: "Just reach out via WhatsApp for a quick response, email me for a detailed inquiry, or book a free consultation to discuss your plans through the contact page."
    },
    {
      question: "What tools and software do you use?",
      answer: "I'm skilled in Adobe Photoshop, Canva, Shopify, Premiere Pro, CapCut, After Effects, and other industry-standard tools."
    },
    {
      question: "What makes your service different?",
      answer: "I don't just design pretty things—I create visuals that perform. My focus is on both creativity and conversions."
    },
    {
      question: "How many reviewing chances will I get?",
      answer: "As many as 10 revisions."
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
                      style={{ background: 'hsl(211 100% 55%)' }}
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