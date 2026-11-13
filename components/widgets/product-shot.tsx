import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  ChartColumn,
  FileText,
  Landmark,
  LayoutDashboard,
  MessageCircle,
  Receipt,
  Search,
  Settings,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { AreaChart } from "./charts";
import { TrendPill } from "./dashboard-cards";

const nav = [LayoutDashboard, FileText, Landmark, Receipt, ChartColumn];

const stats = [
  { label: "Income", value: "€8,240", change: "+12%", dot: "bg-brand-500" },
  { label: "Expenses", value: "€3,120", change: "−4%", dot: "bg-coral-400" },
  { label: "VAT due", value: "€940", change: "in 12 days", dot: "bg-lavender-400" },
];

const activity = [
  { name: "Studio Nova", meta: "Client payment", amount: "+€1,200", incoming: true },
  { name: "Figma", meta: "Software", amount: "−€45", incoming: false },
  { name: "Atelier Lumen", meta: "Client payment", amount: "+€860", incoming: true },
  { name: "SNCF", meta: "Travel", amount: "−€86", incoming: false },
];

/**
 * Wide, illustrative product screenshot for the hero — rendered in code so it
 * stays crisp, light and fully on-brand. Exposed as one described image.
 */
export function ProductShot({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label={`The ${siteConfig.name} dashboard: cash balance chart, income, expenses, VAT and recent transactions, with a chat to your accountant`}
      className={cn("relative", className)}
    >
      {/* Soft brand glow behind the window */}
      <div aria-hidden="true" className="absolute -inset-x-8 -top-8 bottom-1/3 -z-10 rounded-[3rem] bg-linear-to-r from-brand-200/70 via-sky-200/50 to-lavender-300/60 blur-3xl" />

      <div className="rounded-2xl bg-white/60 p-1.5 shadow-[0_40px_80px_-24px_rgb(15_23_42/0.28)] ring-1 ring-black/5 backdrop-blur sm:rounded-[1.75rem] sm:p-2">
        <div className="overflow-hidden rounded-xl bg-white ring-1 ring-line sm:rounded-[1.25rem]">
          {/* Top bar */}
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-coral-400" />
              <span className="size-2.5 rounded-full bg-sunny-300" />
              <span className="size-2.5 rounded-full bg-brand-500" />
            </span>
            <span className="ml-2 hidden h-7 max-w-64 flex-1 items-center gap-2 rounded-lg bg-surface/70 px-3 text-[11px] text-subtle sm:flex">
              <Search className="size-3.5" /> Search transactions, invoices…
            </span>
            <span className="ml-auto flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg text-subtle ring-1 ring-line">
                <Bell className="size-3.5" />
              </span>
              <span className="grid size-7 place-items-center rounded-full bg-lavender-200 text-[10px] font-bold text-lavender-600">LM</span>
            </span>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden flex-col items-center gap-2 border-r border-line px-2.5 py-4 md:flex">
              {nav.map((Icon, i) => (
                <span
                  key={i}
                  className={cn("grid size-9 place-items-center rounded-xl", i === 0 ? "bg-brand-50 text-brand-600" : "text-subtle")}
                >
                  <Icon className="size-4" />
                </span>
              ))}
              <span className="mt-auto grid size-9 place-items-center rounded-xl text-subtle">
                <Settings className="size-4" />
              </span>
            </div>

            {/* Main */}
            <div className="grid flex-1 gap-4 p-4 sm:p-5 lg:grid-cols-[1.65fr_1fr] lg:gap-5">
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-medium text-subtle">Cash balance</p>
                    <p className="mt-0.5 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">€24,580.40</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] text-subtle">
                    <TrendPill value="+12.5%" />
                    <span className="hidden sm:inline">vs last month</span>
                  </span>
                </div>

                <AreaChart points={[12, 15, 13, 19, 17, 24, 22, 29, 27, 34]} gradientId="product-area" className="mt-3 h-24 w-full text-brand-500 sm:h-36" />
                <div className="mt-1.5 flex justify-between text-[9px] text-subtle">
                  {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-surface/60 px-2.5 py-2 sm:px-3 sm:py-2.5">
                      <p className="flex items-center gap-1 text-[10px] text-subtle">
                        <span className={cn("size-1.5 rounded-full", s.dot)} />
                        {s.label}
                      </p>
                      <p className="mt-0.5 text-[13px] font-bold text-ink sm:text-sm">{s.value}</p>
                      <p className="hidden text-[10px] text-subtle sm:block">{s.change}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="hidden min-w-0 flex-col gap-3 sm:flex">
                <div className="rounded-xl ring-1 ring-line">
                  <div className="flex items-center justify-between px-3 pt-3">
                    <p className="text-xs font-bold text-ink">Recent activity</p>
                    <span className="text-[10px] font-semibold text-brand-600">See all</span>
                  </div>
                  <ul className="divide-y divide-line px-3 pb-1">
                    {activity.map((a) => (
                      <li key={a.name} className="flex items-center gap-2.5 py-2">
                        <span
                          className={cn(
                            "grid size-6 shrink-0 place-items-center rounded-full",
                            a.incoming ? "bg-brand-50 text-brand-600" : "bg-coral-200/50 text-coral-500",
                          )}
                        >
                          {a.incoming ? <ArrowDownLeft className="size-3" /> : <ArrowUpRight className="size-3" />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[11px] font-semibold text-ink">{a.name}</span>
                          <span className="block truncate text-[10px] text-subtle">{a.meta}</span>
                        </span>
                        <span className={cn("text-[11px] font-bold", a.incoming ? "text-brand-600" : "text-ink")}>{a.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-brand-50 p-3 ring-1 ring-brand-100">
                  <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    SL
                    <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-brand-200 ring-2 ring-brand-50" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold text-ink">Sarah, your accountant</span>
                    <span className="block truncate text-[10px] text-body">Your Q4 VAT return is ready ✓</span>
                  </span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-white text-brand-600 shadow-card">
                    <MessageCircle className="size-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
