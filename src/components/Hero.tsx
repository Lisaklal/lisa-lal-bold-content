export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-light-blue"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-12 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          {/* Left Column - Text & Portrait */}
          <div className="text-white animate-slide-up">
            <div className="relative">
              {/* Main Typography */}
              <h1 className="text-display font-black tracking-tight leading-none mb-4">
                Lisa Lal
              </h1>
              
              <h2 className="text-manager-title font-bold tracking-tight mb-12 opacity-90">
                360° Manager
              </h2>
              
              {/* Paperclip Portrait - Bottom Left */}
              <div className="absolute -bottom-8 -left-4 lg:-left-8">
                <div className="relative">
                  {/* Paperclip SVG */}
                  <svg width="32" height="60" viewBox="0 0 32 60" className="text-white opacity-80">
                    <path 
                      d="M16 8 L16 40 Q16 50 24 50 Q32 50 32 40 L32 16"
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Portrait Placeholder */}
                  <div className="absolute top-4 left-4 w-20 h-24 transform rotate-6">
                    <div className="w-full h-full bg-gray-300 border-2 border-white shadow-lg rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Phone Mockups */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-6 items-center">
              {/* YouTube Analytics Phone */}
              <div className="relative transform -rotate-6">
                <div className="w-44 h-88 bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl flex flex-col overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-6 bg-gray-50 flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="text-xs font-bold mb-3 text-red-600">📺 Studio</div>
                      <div className="space-y-3">
                        <div className="text-lg font-bold">1.2M</div>
                        <div className="text-xs text-gray-600">Realtime</div>
                        <div className="h-16 bg-gray-100 rounded-lg flex items-end justify-around p-2">
                          <div className="w-2 h-8 bg-red-400 rounded"></div>
                          <div className="w-2 h-12 bg-red-500 rounded"></div>
                          <div className="w-2 h-6 bg-red-400 rounded"></div>
                          <div className="w-2 h-10 bg-red-500 rounded"></div>
                        </div>
                        <div className="text-xs text-gray-500">Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shopify Sales Phone */}
              <div className="relative transform rotate-3 mt-8">
                <div className="w-44 h-88 bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl flex flex-col overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-6 bg-gray-50 flex items-center justify-center">
                      <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="text-xs font-bold mb-2">Total sales</div>
                      <div className="text-2xl font-bold mb-1">$10,116.48</div>
                      <div className="text-xs text-green-600 mb-4">+7.93%</div>
                      <div className="h-20 bg-gray-50 rounded-lg p-3 mb-4">
                        <svg className="w-full h-full" viewBox="0 0 100 40">
                          <polyline
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="2"
                            points="0,30 20,25 40,28 60,20 80,15 100,18"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Orders to fulfill</span>
                          <span className="font-bold">50+</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Payment to capture</span>
                          <span className="font-bold">2</span>
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
    </section>
  );
};