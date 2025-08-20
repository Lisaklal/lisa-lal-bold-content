import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { VisualCommunication } from "@/components/VisualCommunication";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { FAQ } from "@/components/FAQ";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Lisa Lal - Bold Content Manager | Social Media & Creative Strategy";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional content manager Lisa Lal creates bold content strategies for international businesses. Expert in social media management, video editing, and e-commerce growth.');
    }
  }, []);

  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <Marquee />
      <VisualCommunication />
      <Process />
      <Portfolio />
      <FAQ />
    </main>
  );
};

export default Index;
