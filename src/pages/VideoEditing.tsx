import { Navigation } from "@/components/Navigation";
import { ConsultationPopup } from "@/components/ConsultationPopup";
import { Play, TrendingUp, Users, Clock, Eye, Award } from "lucide-react";

const services = [
  "Social media video editing",
  "Instructor & online course videos", 
  "Wedding videos",
  "YouTube editing",
  "Real estate video editing",
  "Travel videos",
  "Vlogs",
  "Podcast video editing"
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Enhanced Engagement",
    description: "Videos that keep viewers watching until the end"
  },
  {
    icon: Eye,
    title: "Higher CTR",
    description: "Thumbnails and titles optimized for maximum clicks"
  },
  {
    icon: Users,
    title: "Better Retention",
    description: "Editing techniques that maintain audience attention"
  },
  {
    icon: Award,
    title: "SEO Optimized",
    description: "Tags, descriptions, and titles for better discoverability"
  },
  {
    icon: Clock,
    title: "Upload & Scheduling",
    description: "Complete publishing and content management"
  }
];

const VideoEditing = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-headline mb-6">
              <span className="text-primary">Video</span> <span className="text-foreground">Editing</span>
            </h1>
            <p className="text-body-large max-w-3xl mx-auto text-muted-foreground mb-8">
              "Send us the raw footage, we'll do the heavy lifting, and you'll receive a professional video that speaks volumes."
            </p>
            <p className="text-body max-w-2xl mx-auto text-muted-foreground">
              Engaging edits for creators, startups, and businesses that drive results.
            </p>
          </div>

          {/* Services List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {services.map((service, index) => (
              <div 
                key={service}
                className="bg-card p-6 rounded-xl border border-border text-center hover:border-primary transition-colors scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>

          {/* Video Samples Grid - Vertical Format */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-12">Video Portfolio</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div 
                  key={item}
                  className="scroll-reveal group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Vertical video format (9:16) */}
                  <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-gradient-to-b from-primary/20 to-primary/40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="w-12 h-12 mx-auto mb-4 opacity-80" />
                        <div className="text-sm font-medium">Video {item}</div>
                        <div className="text-xs opacity-70">Before → After</div>
                      </div>
                    </div>
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <h3 className="font-semibold text-sm">Social Media Edit</h3>
                    <p className="text-xs text-muted-foreground">YouTube/Instagram Format</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-32">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-headline mb-6">
                Why Choose Our <span className="text-primary">Video Editing</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="scroll-reveal text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-32">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-headline mb-6">
                Our <span className="text-primary">Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center scroll-reveal">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Send Raw Footage</h3>
                <p className="text-muted-foreground">
                  Upload your raw video files via Dropbox, Google Drive, or any file sharing platform. Include your vision and requirements.
                </p>
              </div>
              
              <div className="text-center scroll-reveal" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">We Do the Heavy Lifting</h3>
                <p className="text-muted-foreground">
                  Our team handles all the editing, color correction, audio enhancement, and optimization for your target platform.
                </p>
              </div>
              
              <div className="text-center scroll-reveal" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Results</h3>
                <p className="text-muted-foreground">
                  Receive a polished video that speaks volumes, complete with thumbnails, titles, and optimization for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ConsultationPopup />
    </main>
  );
};

export default VideoEditing;