export const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Paperclip and Portrait */}
            <div className="relative mb-12">
              {/* Paperclip Vector */}
              <div className="absolute -top-8 -left-4 z-10">
                <svg width="32" height="60" viewBox="0 0 32 60" className="text-gray-400">
                  <path 
                    d="M16 8 L16 40 Q16 48 24 48 Q32 48 32 40 L32 16"
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              {/* Portrait Placeholder */}
              <div className="ml-8 w-20 h-24 bg-gray-200 rounded-sm shadow-soft transform rotate-12">
                <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-500 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-8xl lg:text-9xl font-black tracking-tight leading-none text-black">
                Lisa Lal
              </h1>
              <p className="text-2xl font-bold text-black tracking-wide">
                360° Manager
              </p>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex gap-6 items-center">
              {/* YouTube Analytics Phone */}
              <div className="relative transform -rotate-12">
                <div className="w-56 h-96 bg-gray-900 rounded-3xl p-2 shadow-bold">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-8 bg-gray-50 flex items-center justify-center border-b">
                      <div className="w-20 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                          <div className="w-3 h-2 bg-white rounded-sm"></div>
                        </div>
                        <span className="text-sm font-semibold">Studio</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold">1.2M</div>
                          <div className="text-xs text-gray-500">Subscribers</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">10</div>
                          <div className="text-xs text-gray-500">Viewers</div>
                        </div>
                      </div>
                      
                      {/* Chart */}
                      <div className="h-20 bg-gray-50 rounded-lg flex items-end justify-center p-2">
                        <svg className="w-full h-full" viewBox="0 0 100 40">
                          <path 
                            d="M5,35 Q15,25 25,28 T45,20 T65,15 T85,10" 
                            stroke="hsl(220 100% 45%)" 
                            strokeWidth="2" 
                            fill="none"
                          />
                        </svg>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-100 rounded"></div>
                        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shopify Analytics Phone */}
              <div className="relative transform rotate-12">
                <div className="w-56 h-96 bg-gray-900 rounded-3xl p-2 shadow-bold">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-8 bg-gray-50 flex items-center justify-center border-b">
                      <div className="w-20 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 space-y-4">
                      <div className="text-xs text-gray-500">Aug 10, 2024</div>
                      
                      <div>
                        <div className="text-sm text-gray-600">Total sales</div>
                        <div className="text-3xl font-bold">$10,116</div>
                        <div className="text-sm text-green-600">↗ 76%</div>
                      </div>
                      
                      {/* Chart */}
                      <div className="h-24 bg-gray-50 rounded-lg flex items-end justify-center p-2">
                        <svg className="w-full h-full" viewBox="0 0 100 60">
                          <path 
                            d="M5,50 L15,40 L25,35 L35,45 L45,30 L55,25 L65,35 L75,20 L85,15 L95,25" 
                            stroke="hsl(220 100% 45%)" 
                            strokeWidth="2" 
                            fill="none"
                          />
                        </svg>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-lg font-bold">50+</div>
                          <div className="text-xs text-gray-500">Orders</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-lg font-bold">2.37%</div>
                          <div className="text-xs text-gray-500">Conv. rate</div>
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