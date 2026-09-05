import Image from "next/image";
import { Puzzle, Leaf, Lightbulb, ShieldCheck } from "lucide-react";

const visionPoints = [
  {
    icon: Puzzle,
    bg: "bg-violet-500",
    text: "We're committed to making accounting simple for entrepreneurs.",
  },
  {
    icon: Leaf,
    bg: "bg-emerald-500",
    text: "Our service is 100% online, 100% digital, and 100% eco-friendly.",
  },
  {
    icon: Lightbulb,
    bg: "bg-orange-500",
    text: "We're committed to offering the most innovative solutions and saving you time by simplifying accounting and admin.",
  },
  {
    icon: ShieldCheck,
    bg: "bg-sky-500",
    text: "We never neglect client support — your satisfaction stays our top priority.",
  },
];

export default function VisionSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto_1fr]">
        {/* Left column */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold leading-snug text-slate-900 md:text-3xl">
            🎉 Many entrepreneurs like you are joining{" "}
            <span className="underline decoration-emerald-500 decoration-2 underline-offset-2">
              Comptaways
            </span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">
            Today, entrepreneurs need real support. With Comptaways, you don&apos;t
            just meet an accounting firm online — we do both. Get in touch and
            let&apos;s talk about your project.
          </p>
        </div>

        {/* Center image */}
        <div className="relative mx-auto h-80 w-56 md:h-96 md:w-64">
          <div className="relative h-full w-full overflow-hidden rounded-full rounded-t-[9999px]">
            <Image
              src="/me.png"
              alt="Portrait"
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>
          {/* Panda badge */}
          <div className="absolute -top-4 -left-4 h-20 w-20 overflow-hidden rounded-full bg-violet-200 shadow-md ring-4 ring-white md:h-24 md:w-24">
            <Image
              src="/panda.png"
              alt="Panda mascot"
              fill
              sizes="96px"
              className="object-contain p-2"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="max-w-md">
          <h3 className="text-base font-semibold text-slate-900">Our vision</h3>
          <ul className="mt-5 space-y-5">
            {visionPoints.map(({ icon: Icon, bg, text }, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${bg}`}
                >
                  <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                </span>
                <p className="text-sm leading-relaxed text-slate-500">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}