import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const ConsultationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed popup in this session
    const dismissed = sessionStorage.getItem('consultation-popup-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      // Don't show on FAQ and Contact pages
      const currentPath = window.location.pathname;
      if (currentPath !== '/faq' && currentPath !== '/contact') {
        setIsVisible(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('consultation-popup-dismissed', 'true');
  };

  const handleBookConsultation = () => {
    // You can add booking logic here
    window.open('https://wa.me/919307569975', '_blank');
    handleClose();
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-white rounded-2xl shadow-bold border border-border p-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors duration-200"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="pr-6">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Let's discuss your vision. Ready to start? See how your brand stands out.
            </p>
          </div>

          <button
            onClick={handleBookConsultation}
            className="w-full bg-gradient-to-r from-[hsl(var(--deep-blue-light))] to-[hsl(var(--deep-blue))] text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-white hover:text-black transition-all duration-250 border border-transparent hover:border-[hsl(var(--deep-blue))]"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};