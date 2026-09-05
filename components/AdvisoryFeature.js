import React from 'react';

export default function AdvisoryFeature() {
  return (
    <section className="w-full flex justify-center items-center p-4 md:p-3 font-sans">
      {/* Main Container - Constrained width and reduced vertical padding */}
      <div className="w-full max-w-[980px] bg-[#F4F1FF] rounded-[2rem] flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-12 md:py-0 gap-8 md:gap-4 mx-auto">
        
        {/* Left Side: Images & Floating Card */}
        <div className="relative w-full md:w-[45%] flex justify-center items-center mt-2 md:mt-0">
          
          {/* Main Visual (Purple Circle) */}
         <div className="relative w-[200px] h-[200px] md:w-[310px] md:h-[310px] rounded-full bg-[#B69AFF] flex justify-center -top-5 items-end [clip-path:inset(-50px_0px_0px_0px)]">
  {/* 
    Drop your "advisory.png" in the public folder.
  */}
  <img 
    src="/Advisory.png" 
    alt="Advisory professional" 
    className="w-[100%] h-[100%] object-contain object-top transform -translate-y-[10%]"
  />
</div>


          {/* Floating Chart Card - Scaled down */}
          <div className="absolute -bottom-15 left-1/2 md:left-[50%] transform -translate-x-1/2 w-[250px] bg-white rounded-xl shadow-[0_8px_25px_rgb(0,0,0,0.06)] p-2 pb-1 border border-gray-50">
            {/* Card Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-[11px] font-semibold text-gray-800 ml-1">Costs</span>
              <div className="flex flex-col items-center">
                <div className="w-3 flex justify-between gap-[2px] mb-[2px]">
                  <div className="w-[3px] h-[3px] bg-gray-300 rounded-full"></div>
                  <div className="w-[3px] h-[3px] bg-gray-300 rounded-full"></div>
                  <div className="w-[3px] h-[3px] bg-gray-300 rounded-full"></div>
                </div>
                <span className="text-[8px] text-gray-400">Aug. 22 - Sep. 22</span>
              </div>
              <div className="w-5"></div> {/* Spacer */}
            </div>

            {/* Chart Area */}
            <div className="relative w-full h-14 flex">
              {/* Y-Axis Labels */}
              <div className="flex flex-col justify-between h-full text-[7px] text-gray-400 pr-2">
                <span>8</span>
                <span>6</span>
                <span>4</span>
                <span>2</span>
                <span>0</span>
              </div>
              
              {/* Grid Lines & Line Chart */}
              <div className="relative flex-1 h-full border-b border-gray-100">
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="w-full border-b border-gray-100 h-0"></div>
                  <div className="w-full border-b border-gray-100 h-0"></div>
                  <div className="w-full border-b border-gray-100 h-0"></div>
                  <div className="w-full border-b border-gray-100 h-0"></div>
                  <div className="w-full h-0"></div>
                </div>

                {/* SVG Line Chart */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path 
                    d="M 0 30 L 15 45 L 35 15 L 55 30 L 75 25 L 95 48 L 125 35 L 150 42 L 165 25 L 195 32" 
                    fill="none" 
                    stroke="#5EB1FF" 
                    strokeWidth="1.5" 
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Endpoint marker */}
                  <circle cx="165" cy="25" r="2.5" fill="white" stroke="#5EB1FF" strokeWidth="1.5" />
                </svg>

                {/* Floating Green Pill */}
                <div className="absolute right-4 top-2 bg-[#32D782] text-white text-[7px] font-bold px-1.5 py-[2px] rounded-full shadow-sm z-10">
                  + 12.5%
                </div>
              </div>
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-between items-center text-[7px] text-gray-400 mt-1.5 pl-3">
              <span>14 Aug.</span>
              <span>31 Aug.</span>
              <span>07 Sep.</span>
              <span>14 Sep.</span>
              <span>21 Sep.</span>
            </div>
          </div>
        </div>

        {/* Right Side: Text & CTA */}
        <div className="w-full md:w-[50%] flex flex-col items-start justify-center pt-14 md:pt-0">
          
          {/* Main Heading */}
          <h2 className="text-[28px] md:text-[24px] font-bold text-[#1A1A1A] leading-tight mb-6 flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span>🤝 You are</span>
            <span className="relative inline-block whitespace-nowrap z-10">
              guided
              {/* Hand-drawn yellow circle SVG */}
             <svg
     viewBox="0 0 360 85"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
      className="pointer-events-none absolute left-[-20%] top-[-30%] h-[165%] w-[140%] text-sky-400"
      
    >
                <path
                d="M24 46
        C28 16 98 8 180 10
        C282 12 338 22 336 46
        C334 72 264 82 178 80
        C92 78 24 66 24 46
        C24 34 28 22 38 16"
      stroke="#FFE34F"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
              </svg>
            </span>
            <span>by our teams</span>
          </h2>

          {/* Subheading */}
          <h3 className="text-lg md:text-[18px] font-semibold text-[#1A1A1A] mb-2">
            Accounting made simple
          </h3>

          {/* Description */}
          <p className="text-[#666666] text-[14px] leading-relaxed mb-6 max-w-[390px]">
            Throughout the year, you can contact your dedicated advisor (Léa, Morgane, Omar...) who will reply to you.
          </p>

          {/* Call to Action Button */}
          <button className="bg-[#32D782] hover:bg-[#2bc475] transition-colors text-white font-medium text-[14px] px-7 py-2.5 rounded-full shadow-[0_4px_12px_rgba(50,215,130,0.25)]">
            Request my quote!
          </button>
          
        </div>
      </div>
    </section>
  );
}