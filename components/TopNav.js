import Image from "next/image";

export default function TopNav() {
  return (
    <div className="hidden md:block w-full bg-[#C9B2FF] text-black py-1.5">
      <div className="relative mx-auto flex h-5.5 max-w-360 items-center justify-center px-6">

        {/* Center Offer */}
        <p className="text-[11px] font-medium leading-none tracking-[0.01em]">
          Offer of the month: 3 months of free accounting for every referral 🚀
        </p>

        {/* Right Section */}
        <div className="absolute right-6 flex items-center">

          <img
  src="/Vector.png"
  alt="Ordre des Experts-Comptables"
 height='full'

  
/>

          <div className="mx-4.5 h-3 w-px bg-black/20 shrink-0" />

          <div className="flex items-center gap-1">
            <span className="text-[11px] font-medium leading-none tracking-[0.01em]">
              Certified Public Accountant
            </span>

            <FrenchFlag />
          </div>

        </div>
      </div>
    </div>
  );
}

function FrenchFlag() {
  return (
    <svg
      width="15"
      height="11"
      viewBox="0 0 3 2"
      className="shrink-0 rounded-[1px]"
    >
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  );
}