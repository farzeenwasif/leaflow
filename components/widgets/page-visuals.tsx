import { Camera, Check, CircleCheck, FileText, ScanLine, Send } from "lucide-react";
import { images } from "@/data/home";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { BrandBadge } from "@/components/ui/decor";
import { PillImage } from "@/components/ui/pill-image";
import { AreaChart } from "./charts";
import { DonutCard, FloatingCard } from "./dashboard-cards";
import { PhoneMockup } from "./phone-mockup";

/* Accounting page ------------------------------------------------------------ */

export function AccountingVisual() {
  return (
    <div className="relative mx-auto max-w-md px-4 sm:px-8 lg:mr-0">
      <PillImage image={images.freelancer} sizes="(min-width: 1024px) 420px, 90vw" className="aspect-[4/5] rounded-[2rem]" preload />
      <DonutCard className="-left-2 bottom-10 sm:-left-6" />
      <FloatingCard floatDelay={1.4} className="-right-1 top-8 flex items-center gap-2.5 rounded-2xl px-3 py-2.5 sm:-right-4">
        <CircleCheck className="size-7 shrink-0 fill-brand-500 text-white" />
        <span>
          <span className="block text-[11px] font-bold text-ink">Tax return filed</span>
          <span className="block text-[10px] text-subtle">by your accountant · today</span>
        </span>
      </FloatingCard>
    </div>
  );
}

/* Company creation page ------------------------------------------------------ */

export function CreationVisual() {
  return (
    <div className="relative mx-auto flex max-w-md items-start justify-center gap-4 lg:mr-0">
      <PillImage image={images.team} sizes="250px" className="aspect-[6/11] w-[42%] max-w-[200px]" imageClassName="object-[50%_70%]" preload />
      <div className="relative mt-14 w-[42%] max-w-[200px]">
        <PillImage image={images.freelancer} sizes="250px" className="aspect-[6/11] w-full" />
        <BrandBadge className="-left-5 -top-7" />
      </div>
      <FloatingCard className="bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl px-3.5 py-3">
        <span className="grid size-8 place-items-center rounded-full bg-brand-500 text-white">
          <Check className="size-4" strokeWidth={3} />
        </span>
        <span>
          <span className="block whitespace-nowrap text-xs font-bold text-ink">Company registered!</span>
          <span className="block whitespace-nowrap text-[10px] text-subtle">Registration certificate received</span>
        </span>
      </FloatingCard>
    </div>
  );
}

const trackerSteps = [
  { label: "Questionnaire completed", done: true },
  { label: "Statutes drafted", done: true },
  { label: "Capital deposited", done: true },
  { label: "Filed with the registry", done: false },
];

/** "Your project" status card shown next to the creation timeline. */
export function CreationTracker() {
  const done = trackerSteps.filter((s) => s.done).length;
  return (
    <div aria-hidden="true" className="relative mx-auto max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-brand-100 via-white to-lavender-200 blur-xl" />
      <div className="rounded-3xl bg-white p-6 shadow-float ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-ink">Your company</p>
          <span className="rounded-full bg-sunny-100 px-2.5 py-1 text-[10px] font-semibold text-ink">In progress</span>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
          {[
            ["Name", "Studio Léa SAS"],
            ["Legal form", "SASU"],
            ["Share capital", "€1,000"],
            ["Activity", "Design studio"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-surface/60 px-3 py-2">
              <dt className="text-[10px] text-subtle">{k}</dt>
              <dd className="font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex items-center justify-between text-[11px]">
          <span className="font-semibold text-ink">Progress</span>
          <span className="text-subtle">
            {done}/{trackerSteps.length} steps
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface">
          <div style={{ width: `${(done / trackerSteps.length) * 100}%` }} className="h-full origin-left rounded-full bg-brand-500 animate-grow-x" />
        </div>
        <ul className="mt-4 space-y-2.5">
          {trackerSteps.map((s) => (
            <li key={s.label} className="flex items-center gap-2.5 text-xs">
              <span
                className={cn(
                  "grid size-5 place-items-center rounded-full",
                  s.done ? "bg-brand-500 text-white" : "border-2 border-dashed border-brand-200",
                )}
              >
                {s.done && <Check className="size-3" strokeWidth={3} />}
              </span>
              <span className={s.done ? "text-ink" : "text-subtle"}>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* Our app page ---------------------------------------------------------------- */

function DashboardScreen() {
  return (
    <div className="text-left">
      <p className="text-[10px] text-subtle">Good morning,</p>
      <p className="text-sm font-bold text-ink">Léa 👋</p>
      <div className="mt-3 rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 p-3 text-white">
        <p className="text-[9px] text-white/80">Cash balance</p>
        <p className="text-lg font-extrabold">€24,580</p>
        <AreaChart points={[4, 6, 5, 8, 7, 10, 9, 12]} gradientId="phone-area" className="mt-1 h-10 w-full text-white" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {[
          { icon: FileText, label: "Invoice" },
          { icon: ScanLine, label: "Scan" },
          { icon: Send, label: "Transfer" },
        ].map(({ icon: Icon, label }) => (
          <span key={label} className="flex flex-col items-center gap-1 rounded-xl bg-surface/70 py-2 text-[9px] font-semibold text-ink">
            <Icon className="size-3.5 text-brand-600" />
            {label}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[10px] font-bold text-ink">Today</p>
      {[
        ["Studio Nova", "+€1,200"],
        ["Figma", "−€45"],
      ].map(([n, a]) => (
        <div key={n} className="mt-1.5 flex justify-between text-[10px]">
          <span className="text-ink">{n}</span>
          <span className="font-bold text-ink">{a}</span>
        </div>
      ))}
    </div>
  );
}

function ScanScreen() {
  return (
    <div className="text-left">
      <p className="text-sm font-bold text-ink">Scan a receipt</p>
      <div className="relative mt-3 grid aspect-[3/4] place-items-center overflow-hidden rounded-2xl bg-linear-to-br from-lavender-200 to-brand-100">
        <div className="w-3/5 rounded-md bg-white p-2 shadow-float">
          <p className="text-center text-[8px] font-bold text-ink">CAFÉ LOMI</p>
          <div className="mt-1.5 space-y-1">
            <div className="h-1 w-full rounded-full bg-surface" />
            <div className="h-1 w-4/5 rounded-full bg-surface" />
            <div className="h-1 w-3/5 rounded-full bg-surface" />
          </div>
          <p className="mt-2 text-right text-[8px] font-bold text-ink">€14.50</p>
        </div>
        <span className="absolute inset-4 rounded-xl border-2 border-dashed border-brand-500" />
        <span className="absolute inset-x-6 top-1/2 h-0.5 bg-brand-500 shadow-[0_0_12px_2px_rgb(46_212_122/0.7)] animate-float" />
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-brand-50 p-2">
        <CircleCheck className="size-5 shrink-0 fill-brand-500 text-white" />
        <span className="text-[10px] font-semibold text-brand-700">Matched to Café Lomi · €14.50</span>
      </div>
      <span className="mx-auto mt-3 grid size-10 place-items-center rounded-full bg-brand-500 text-white shadow-brand">
        <Camera className="size-4" />
      </span>
    </div>
  );
}

export function AppPhonesVisual() {
  return (
    <div
      role="img"
      aria-label={`The ${siteConfig.name} mobile app: dashboard with cash balance and receipt scanning`}
      className="relative mx-auto flex h-[440px] max-w-md items-center justify-center sm:h-[500px] lg:mr-0"
    >
      <div aria-hidden="true" className="absolute inset-8 -z-10 rounded-full bg-linear-to-br from-brand-200 via-sky-200 to-lavender-300 opacity-70 blur-3xl" />
      <PhoneMockup className="absolute left-[6%] top-4 w-[52%] max-w-[220px] -rotate-6 animate-float-slow">
        <DashboardScreen />
      </PhoneMockup>
      <PhoneMockup className="absolute right-[6%] top-14 w-[52%] max-w-[220px] rotate-6 animate-float-slow [animation-delay:1.5s]">
        <ScanScreen />
      </PhoneMockup>
    </div>
  );
}
