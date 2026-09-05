"use client";

import { useState } from "react";

const IMG_LEFT = "/images/left-photo.jpg";
const IMG_RIGHT = "/images/right-photo.jpg";
const IMG_BADGE = "/images/panda-logo.png";

const PLANS = [
  { key: "independent", label: "Independent" },
  { key: "company", label: "Small business or company" },
  { key: "creation", label: "Creation" },
];

const FEATURES = [
  "Company registration included",
  "Free accounting app",
  "Invoicing module",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-5 w-5 shrink-0 sm:h-5.5 sm:w-5.5"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#3B82F6" />
      <path
        d="M6 10.2l2.4 2.4L14.2 7"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hand-drawn marker/highlight circle, sits behind the emphasised words */
function MarkerCircle() {
  return (
    <svg
     viewBox="0 0 360 85"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
      className="pointer-events-none absolute left-[-10%] top-[-30%] h-[165%] w-[120%] text-sky-400"
      
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
      stroke="#87CFFF"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    </svg>
  );
}

function ExpensesCard() {
  return (
    <div className="absolute -bottom-6 -left-5 w-47.5 rounded-2xl bg-white p-4 shadow-[0_12px_40px_-8px_rgba(15,23,42,0.25)]  sm:w-52.5">
      <p className="text-[11px] font-medium text-slate-400">
        Monthly expenses
      </p>
      <div className="mt-2 flex items-center gap-3">
        <div
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
          style={{
            background:
              "conic-gradient(#22C55E 0% 65%, #E2E8F0 65% 100%)",
          }}
        >
          <div className="h-8 w-8 rounded-full bg-white" />
        </div>
        <div >
          <p className="text-[10px] text-slate-400">Total</p>
          <p className="text-sm font-bold text-slate-900">€11,390</p>
        </div>
      </div>
    </div>
  );
}

export default function OfferSection() {
  const [activePlan, setActivePlan] =
    useState("independent");

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_minmax(0,540px)_1fr] lg:gap-8">
        {/* Left image */}
        <div className="relative mx-auto hidden w-full max-w-[320px] lg:block">
          <div className="relative aspect-4/7 w-full overflow-hidden rounded-[180px_180px_180px_180px] shadow-sm">
            <img
              src={IMG_LEFT}
              alt="Independent professional working on a laptop"
              className="h-full w-full object-cover"
            />
          </div>
          <ExpensesCard />
        </div>

        {/* Center content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
            <span aria-hidden="true">✏️</span> A{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <MarkerCircle />
              <span className="relative">commitment-free</span>
            </span>{" "}
            offer
            <br className="hidden sm:block" /> adapted to your business
          </h2>

          {/* Plan toggle */}
          <div className="mt-8 flex max-w-full items-center gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none sm:justify-center sm:gap-6 [&::-webkit-scrollbar]:hidden">
            {PLANS.map((plan) => (
              <button
                key={plan.key}
                type="button"
                onClick={() => setActivePlan(plan.key)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                  activePlan === plan.key
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-500 shadow-sm hover:text-slate-700"
                }`}
              >
                {plan.label}
              </button>
            ))}
          </div>

          <p className="mt-3 text-xs font-medium text-slate-500">
            Most chosen offer <span aria-hidden="true">👆</span>
          </p>

          {/* Price card */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-[0_20px_45px_-20px_rgba(15,23,42,0.2)] sm:p-8">
            <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              From €45 excl. tax{" "}
              <span className="text-base font-medium text-slate-400 sm:text-lg">
                / Month
              </span>
            </p>
            <p className="mt-1 text-sm font-bold text-emerald-500 sm:text-base">
              Small Offer
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              A dedicated accounting expert supports your independent
              business, including access to our pro app.
            </p>

            <p className="mt-6 text-sm font-bold text-slate-900">
              Included in the offer
            </p>
            <ul className="mt-4 space-y-3">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-600 sm:text-[15px]"
                >
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-500 hover:text-emerald-600"
            >
              See the offer in detail
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative mx-auto hidden w-full max-w-[320px] lg:block">
          <div className="relative aspect-4/7 w-full overflow-hidden rounded-[180px_180px_180px_180px] shadow-sm">
            <img
              src={IMG_RIGHT}
              alt="Two colleagues reviewing accounts on a laptop"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute left-3 top-5  flex h-16 w-16 items-center justify-center  rounded-full   sm:-right-6 sm:-top-6 sm:h-20 sm:w-20">
            <img
              src={IMG_BADGE}
              alt="Panda logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}