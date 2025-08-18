import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { GraphicDesign } from "@/components/GraphicDesign";
import { Services } from "@/components/Services";
import { VisualCommunication } from "@/components/VisualCommunication";
import { VideoEditing } from "@/components/VideoEditing";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { CallToAction } from "@/components/CallToAction";
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
    <main className="min-h-screen">
      <Hero />
      <GraphicDesign />
      <Services />
      <VisualCommunication />
      <VideoEditing />
      <Process />
      <Portfolio />
      <CallToAction />
    </main>
  );
};

export default Index;
