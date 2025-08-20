import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";
import Index from "./pages/Index";
import Services from "./pages/Services";
import GraphicDesigning from "./pages/GraphicDesigning";
import ShopifyEcommerce from "./pages/ShopifyEcommerce";
import VideoEditing from "./pages/VideoEditing";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import Software from "./pages/Software";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/shopify-ecommerce" element={<ShopifyEcommerce />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/social-media-management" element={<SocialMediaManagement />} />
          <Route path="/software" element={<Software />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ConsultationPopup />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
