export const FAQ = () => {
  const faqs = [
    {
      question: "What kind of designer are you?",
      answer: "One who balances precision with playfulness. I'm obsessed with clean, intuitive interfaces but also love throwing in unexpected, quirky details.",
      isUser: false
    },
    {
      question: "What inspires your design style?",
      answer: "Everything from minimalist architecture to street art. I find beauty in contrast—the way simplicity can be bold and complexity can be elegant.",
      isUser: true
    },
    {
      question: "What's your design process like?",
      answer: "I start with deep research and understanding, then sketch extensively before moving digital. I believe in iteration and always ask 'why' before 'how.'",
      isUser: false
    },
    {
      question: "How do you handle creative blocks?",
      answer: "I step away from the screen. Sometimes the best solutions come during a walk or while cooking. I also keep a mood board that I constantly update.",
      isUser: true
    },
    {
      question: "Favorite kind of project to work on?",
      answer: "Anything that tells a story. Whether it's a brand identity or a single poster, I love projects where I can craft a narrative through design.",
      isUser: false
    },
    {
      question: "What makes you a good collaborator?",
      answer: "I listen more than I talk, ask the right questions, and believe that the best work comes from understanding people, not just pixels.",
      isUser: true
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

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`flex ${faq.isUser ? 'justify-end' : 'justify-start'} scroll-reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`max-w-[80%] ${faq.isUser ? 'order-2' : 'order-1'}`}>
                <div className={`p-4 rounded-2xl ${
                  faq.isUser 
                    ? 'bg-primary text-white rounded-br-sm' 
                    : 'bg-white border rounded-bl-sm shadow-soft'
                }`}>
                  <div className="font-semibold mb-2 text-sm opacity-80">
                    {faq.question}
                  </div>
                  <div className={`${faq.isUser ? 'text-white' : 'text-foreground'}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
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