import { Star, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center py-2 lg:py-20 font-sans">
      {/* Background Decorative Blobs */}
      <div className="absolute top-80 left-0 w-96 h-96 bg-[#d1fae5] rounded-r-full opacity-60 -translate-x-70 translate-y-20"></div>
      <div className="absolute top-0 right-0 w-50 h-50 bg-[#f3e8ff] rounded-l-full opacity-60 translate-x-33 translate-y-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="max-w-2xl order-2 lg:order-1">
            <h1 className="text-[25px] md:text[35px] lg:text-[42px] font-extrabold text-[#1f2937] leading-[1.15] mb-6 tracking-tight">
              🚀 Comptaways, <br />
              the expert accountant{' '}
              <span className="relative inline-block">
                <span className="relative z-10">online</span>
                {/* Green underline mock */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#10b981]" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M2,8 Q50,2 98,6" />
                </svg>
              </span>
              <br />
              for{' '}
              <span className="relative inline-block">
                <span className="relative z-10">freelancers & SMEs</span>
                {/* Yellow underline mock */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#fcd34d]" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M2,7 Q30,0 99,8" />
                </svg>
              </span>
            </h1>

            <p className="text-gray-500 text-lg mb-4">
              Create your business for free and get started.
            </p>

            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-xl">
              A specialized accountant guides and advises you for your business development. Comptaways is an online accounting firm registered with the Order of Certified Public Accountants.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-[#2edb8a] text-white px-8 py-3.5 rounded-full font-semibold shadow-md hover:bg-[#28c57b] transition-colors">
                Get an instant quote!
              </button>
              <button className="border-[1.5px] border-[#2edb8a] text-[#1f2937] px-8 py-3.5 rounded-full font-semibold hover:bg-green-50 transition-colors">
                Free account creation!
              </button>
            </div>

            <p className="text-gray-500 text-sm mb-8">
              Call us at 06 99 10 75 73 or book an appointment now!
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              {/* Trustpilot */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  4.7 / 5 on Trustpilot
                </span>
              </div>

              {/* Google Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex items-center text-xl font-bold tracking-tighter">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-800 leading-none">Client Reviews</span>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#FBBC05] fill-[#FBBC05]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#FBBC05]">5/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image & Floating Cards (FIXED SIZING & CAPSULE) */}
          <div className="relative w-full max-w-105 mx-auto mt-6 lg:mt-0 aspect-4/5 flex justify-center items-end order-1 lg:order-2">
            
            {/* Main Green Capsule Background */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 overflow-hidden w-[90%] h-[95%] bg-[#d1fae5] rounded-[200px] z-0">

            {/* Main Image */}
            <img 
              src="/hero-portrait.png" 
              alt="Expert Comptable" 
              className="relative z-10 h-100 -right-4 lg:h-115  object-contain items-center  -bottom-10  drop-shadow-xl"
            />
</div>
            {/* Floating Card 1: Frais de garde */}
            <div className="absolute top-[15%] -left-6 md:-left-16 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 pr-12 z-20 w-max">
              <p className="text-[10px] font-bold text-gray-800">Management Fees</p>
              <p className="text-[8px] text-gray-400 mb-2">Oct. 22 / Dec. 22</p>
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-none">€221.90</p>
                  <p className="text-[8px] text-gray-400">Inc. tax</p>
                </div>
                <div className="bg-[#2edb8a] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                   + 12,5% <TrendingUp className="w-2 h-2" />
                </div>
              </div>
            </div>

            {/* Floating Card 2: Temps de travail */}
            <div className="absolute top-[45%] -right-4 md:-right-12 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 flex items-center gap-4 z-20 w-max">
              <div>
                <p className="text-[9px] text-gray-400">Work Time</p>
                <p className="text-lg font-bold text-gray-800 leading-none mt-1">39:25</p>
              </div>
              <div className="w-16 h-8 flex items-end">
                {/* Mock Chart */}
                <svg viewBox="0 0 100 30" className="w-full h-full stroke-[#2edb8a] fill-none" strokeWidth="2">
                  <path d="M0,30 L20,20 L40,25 L60,10 L80,15 L100,5" />
                  <path d="M0,30 L20,20 L40,25 L60,10 L80,15 L100,5 L100,30 L0,30 Z" className="fill-[#2edb8a]/20 stroke-none" />
                </svg>
              </div>
            </div>

            {/* Floating Card 3: Résumé des dépenses */}
            <div className="absolute -bottom-15 -right-2 md:-right-8 bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 w-44 z-20">
              <div className="w-4 h-1 bg-gray-200 rounded-full mx-auto mb-3"></div>
              <p className="text-xs font-bold text-center text-gray-800 mb-4">Expense Summary</p>
              
              <div className="space-y-1 ">
                {/* Bar 1 */}
                <div className="w-full bg-[#c4b5fd] rounded-lg pb-1 px-3">
                  <span className="text-[8px] font-bold text-gray-800">7 238,90 €</span>
                </div>
                {/* Bar 2 */}
                <div className="w-[90%] bg-[#fdba74] rounded-lg pb-1 px-3">
                  <span className="text-[8px] font-bold text-gray-800">7 238,90 €</span>
                </div>
                {/* Bar 3 */}
                <div className="w-[95%] bg-[#2edb8a] rounded-lg pb-1 px-3">
                  <span className="text-[8px] font-bold text-gray-800">7 238,90 €</span>
                </div>
                {/* Bar 4 */}
                <div className="w-[85%] bg-[#fde047] rounded-lg pb-1 px-3">
                  <span className="text-[8px] font-bold text-gray-800">7 238,90 €</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}