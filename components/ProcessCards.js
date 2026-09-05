const steps = [
  {
    id: "1",
    color: "bg-[#DCEEFF]",
    title: "Connect Your Accounts & Let Us Guide You",
    description:
      "Our application securely syncs with your accounting software and gives you real-time insights to monitor your business performance.",
  },
  {
    id: "2",
    color: "bg-[#CFF8E5]",
    title: "Get Advice From Our Accounting Experts",
    description:
      "Our certified accountants answer your questions, help optimize your business, and take care of your tax declarations.",
  },
  {
    id: "3",
    color: "bg-[#E8DDFD]",
    title: "Receive Your Certified Financial Report",
    description:
      "Your financial report is reviewed and certified by one of our professional chartered accountants.",
  },
];

export default function ProcessCards() {
  return (
    <section className="py-10 lg:py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-[22px] border border-[#EFEFEF] bg-white px-8 py-10 text-center shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
            >
              <div
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-md ${step.color}`}
              >
                <span className="text-[18px] font-semibold text-[#1A1A1A]">
                  {step.id}
                </span>
              </div>

              <h3 className="mt-7 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-[#181818] md:text-[32px]">
                {step.title}
              </h3>

              <p className="mx-auto mt-6 max-w-72.5 text-[16px] leading-[1.65] text-[#777777]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="rounded-full bg-[#2ED47A] px-10 py-4 text-[16px] font-medium text-white transition duration-300 hover:bg-[#24C66F]">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}