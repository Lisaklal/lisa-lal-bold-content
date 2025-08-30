import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";

export const ConsultationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show on FAQ and Contact pages
  const hiddenPages = ["/faq", "/contact"];
  const shouldShow = !hiddenPages.includes(location.pathname);

  useEffect(() => {
    if (!shouldShow) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, [location.pathname, shouldShow]);

  if (!isVisible || !shouldShow) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-slide-in-right">
      <div className="bg-white rounded-2xl shadow-xl border border-border p-6 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
            LL
          </div>
          <div className="flex-1">
            <div className="text-sm text-muted-foreground mb-2">Lisa here!</div>
            <p className="text-sm text-foreground mb-4">
              Let's discuss your vision. Ready to start? See how your brand stands out.
            </p>
            <a
              href="mailto:lisaahereee@gmail.com"
              className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Book a Free Meeting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};