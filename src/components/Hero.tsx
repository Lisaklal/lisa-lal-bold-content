import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-8xl lg:text-9xl font-black tracking-tight leading-none text-foreground">
                Lisa Lal
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                Creative Designer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I'm a digital creative who loves turning ideas into reality—graphics, videos, social media posts, and high-conversion Shopify stores. My ultimate goal is work that looks amazing AND performs. By handling the details, I save you time. If you want creativity, strategy, and results all in one, I'm here to make it happen.
              </p>
            </div>
            
            {/* Portrait with Paperclip */}
            <div className="relative w-48 h-64 paperclip">
              <div className="w-full h-full bg-primary/10 border-4 border-white shadow-bold rounded-lg overflow-hidden transform rotate-3">
                {/* Placeholder for Lisa's portrait */}
                <div className="w-full h-full bg-gradient-to-b from-primary/20 to-primary/40 flex items-center justify-center">
                  <div className="text-center text-primary">
                    <div className="text-sm font-medium">Lisa Lal</div>
                    <div className="text-xs">Creative Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Phone Mockups */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-8 items-center">
              
              {/* YouTube Analytics Phone */}
              <div className="relative transform -rotate-6">
                <div className="w-56 h-[500px] bg-black rounded-[3rem] p-3 shadow-bold">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-12 bg-gray-50 flex items-center justify-center">
                      <div className="w-20 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    {/* YouTube Studio Header */}
                    <div className="p-4 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">▶</span>
                        </div>
                        <span className="text-sm font-bold">Studio</span>
                      </div>
                    </div>
                    
                    {/* Analytics Content */}
                    <div className="p-4 space-y-4">
                      <div>
                        <div className="text-xs text-gray-500">Realtime</div>
                        <div className="text-2xl font-bold">1.2M</div>
                        <div className="text-xs text-green-600">↗ 76%</div>
                      </div>
                      
                      <div className="h-20 bg-gray-100 rounded-lg flex items-end justify-around p-2">
                        <div className="w-1 bg-red-500 h-8"></div>
                        <div className="w-1 bg-red-500 h-12"></div>
                        <div className="w-1 bg-red-500 h-6"></div>
                        <div className="w-1 bg-red-500 h-16"></div>
                        <div className="w-1 bg-red-500 h-10"></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-bold">Videos</div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-8 bg-red-100 rounded"></div>
                            <div className="flex-1">
                              <div className="text-xs">Most Popular</div>
                              <div className="text-xs text-gray-500">2.5k views</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shopify Analytics Phone */}
              <div className="relative transform rotate-6">
                <div className="w-56 h-[500px] bg-black rounded-[3rem] p-3 shadow-bold">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-12 bg-gray-50 flex items-center justify-center">
                      <div className="w-20 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    {/* Shopify Header */}
                    <div className="p-4 border-b">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">Analytics</span>
                        <div className="text-xs text-gray-500">Aug 10, 2024</div>
                      </div>
                    </div>
                    
                    {/* Sales Content */}
                    <div className="p-4 space-y-4">
                      <div>
                        <div className="text-xs text-gray-500">Total sales</div>
                        <div className="text-2xl font-bold">$10,116.48</div>
                        <div className="text-xs text-green-600">↗ 78%</div>
                      </div>
                      
                      <div className="h-20 bg-gray-100 rounded-lg p-2">
                        <svg className="w-full h-full" viewBox="0 0 100 40">
                          <polyline
                            points="0,35 20,30 40,20 60,15 80,10 100,5"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="font-bold">50+</div>
                          <div className="text-gray-500">Orders to fulfill</div>
                        </div>
                        <div>
                          <div className="font-bold">$1</div>
                          <div className="text-gray-500">Payment to capture</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-bold">Get ready to sell</div>
                        <div className="space-y-1">
                          <div className="text-xs">✓ Add your first product</div>
                          <div className="text-xs">✓ Customize your online store</div>
                          <div className="text-xs">○ Set your shipping rates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};