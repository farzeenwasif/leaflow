import Image from 'next/image';

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Discover() {
  return (
    <section className="relative mt-20 w-full min-h-screen bg-white overflow-hidden flex items-center font-sans">
      
      {/* Left Panda Logo: Shifted further left (-translate-x-1/2) to prevent taking too much space */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 hidden md:block z-0 pointer-events-none">
        <div className="relative w-62.5 h-62.5 lg:w-62.5 lg:h-62.5">
          <Image
            src="/panda.png"
            alt="Panda Mascot"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right Decorative Purple Circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-3/5 w-60 h-60 lg:w-70 lg:h-70 bg-[#f2e8ff] rounded-full hidden md:block z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-6xl">
        
        {/* Left Column: Text Content - Added lg:pl-20 and xl:pl-32 to push text away from the panda */}
        <div className="flex-1  w-full max-w-2xl lg:pl-20 xl:pl-32">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 leading-tight mb-6">
            <span className="inline-block align-middle mr-3 text-[1em]">💻</span>
            Discover how our{' '}
            <span className="relative whitespace-nowrap">
              partner software
              {/* Hand-drawn style orange underline */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#ff7a59]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9.5C50.5 4 150 1.5 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            works
          </h2>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Simply connect to your application. <br className="hidden md:block" />
            You have access to your bank account, discover practical features:
          </p>

          <ul className="space-y-0 mb-8 text-sm md:text-base text-gray-800 font-medium">
            <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <CheckIcon />
              <span>Invoicing and customer follow-up module.</span>
            </li>
            <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <CheckIcon />
              <span>
                Your key indicators. <span className="font-normal text-gray-600">(Cash flow charts, unlimited custom charts creation)</span>
              </span>
            </li>
            <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <CheckIcon />
              <span>Bank synchronization</span>
            </li>
            <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <CheckIcon />
              <span>Purchase collection.</span>
            </li>
            <li className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <CheckIcon />
              <span>Benefit from probative value</span>
            </li>
          </ul>

          <a href="#" className="inline-flex items-center text-emerald-500 font-semibold hover:text-emerald-600 transition-colors mb-8 text-sm md:text-base underline decoration-emerald-500 underline-offset-4">
            And much more ! <span className="ml-1">→</span>
          </a>

          {/* Email Subscription Input */}
          <div className="w-full max-w-105 mx-auto sm:mx-0 sm:max-w-lg flex flex-col sm:flex-row items-center gap-3 sm:gap-2 transition-shadow sm:bg-white sm:border sm:border-gray-200 sm:rounded-full sm:p-1.5 sm:shadow-sm overflow-visible sm:overflow-hidden focus-within:sm:ring-2 focus-within:sm:ring-emerald-100 focus-within:sm:border-emerald-400">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 min-w-0 w-full px-6 py-3 text-base sm:py-2 sm:px-5 sm:text-sm text-gray-700 bg-white sm:bg-transparent outline-none rounded-full border border-gray-200 sm:border-0 shadow-sm sm:shadow-none"
            />
            <button className="self-center sm:self-auto bg-[#21d07c] hover:bg-[#1ebf71] text-white font-semibold py-3 px-8 sm:py-2.5 sm:px-6 rounded-full transition-colors whitespace-nowrap text-sm mt-3 sm:mt-0">
              I subscribe now !
            </button>
          </div>
        </div>

        {/* Right Column: Device Mockups */}
        <div className="flex-1 relative w-full  mt-12 lg:mt-0">
          <div className="relative w-full max-w-100 aspect-4/3">
            <Image
              src="/laptop.png"
              alt="Software Dashboard Mockup on Laptop and Mobile"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}