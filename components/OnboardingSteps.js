import React from "react";
import ProcessCards from "./ProcessCards";
export default function OnboardingSteps() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-extrabold text-[#222] leading-tight tracking-[-0.03em]">
          <span className="text-[24px] sm:text-[28px]">🤝</span>

          <span className="text-[28px] sm:text-[40px] lg:text-[48px]">
            A smooth start with
          </span>

          <span className="relative inline-flex items-center justify-center px-3 py-1">
            <span className="relative z-10 text-[28px] sm:text-[40px] lg:text-[48px]">
              complete confidence
            </span>

            {/* Hand drawn circle */}
       <svg
    className="pointer-events-none absolute -left-7 -right-2 -top-2 -bottom-2 w-[calc(100%+60px)] h-[calc(100%+16px)]"
    viewBox="0 0 360 85"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="
        M24 46
        C28 16 98 8 180 10
        C282 12 338 22 336 46
        C334 72 264 82 178 80
        C92 78 24 66 24 46
        C24 34 28 22 38 16
      "
      stroke="#2DD4BF"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
          </span>
        </h2>
      </div>
      <ProcessCards/>
    </section>
  );
}