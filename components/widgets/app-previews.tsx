import { Check, CheckCheck, FileLock, LoaderCircle, Lock, Plus, ShieldCheck, Upload } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { BarChart } from "./charts";

/* Small building blocks shared by the previews ------------------------------ */

function PreviewHeader({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-bold text-ink">{title}</p>
      {action && (
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-2.5 py-1 text-[10px] font-semibold text-white">
          <Plus className="size-3" />
          {action}
        </span>
      )}
    </div>
  );
}

function Kpi({ label, value, note, tone = "text-brand-600" }: { label: string; value: string; note?: string; tone?: string }) {
  return (
    <div className="rounded-xl bg-white p-3 ring-1 ring-line">
      <p className="text-[10px] text-subtle">{label}</p>
      <p className="mt-0.5 text-base font-extrabold text-ink">{value}</p>
      {note && <p className={cn("text-[10px] font-semibold", tone)}>{note}</p>}
    </div>
  );
}

const chip = {
  paid: "bg-brand-50 text-brand-700",
  sent: "bg-sky-100 text-sky-500",
  overdue: "bg-coral-200/60 text-coral-500",
} as const;

/* Previews ------------------------------------------------------------------- */

export function InvoicingPreview() {
  const invoices = [
    { client: "Studio Nova", no: "INV-0042", amount: "€1,200.00", status: "paid" as const, label: "Paid" },
    { client: "Atelier Lumen", no: "INV-0041", amount: "€860.00", status: "sent" as const, label: "Sent" },
    { client: "Maison Verte", no: "INV-0040", amount: "€2,390.00", status: "overdue" as const, label: "Reminder sent" },
    { client: "Kite & Co", no: "INV-0039", amount: "€540.00", status: "paid" as const, label: "Paid" },
  ];
  return (
    <div>
      <PreviewHeader title="Invoices" action="New invoice" />
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Kpi label="Paid this month" value="€12,400" note="+18% vs October" />
        <Kpi label="Awaiting payment" value="€3,250" note="3 invoices" tone="text-coral-500" />
      </div>
      <ul className="mt-4 divide-y divide-line rounded-xl bg-white px-3 ring-1 ring-line">
        {invoices.map((inv) => (
          <li key={inv.no} className="flex items-center gap-3 py-2.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface text-[11px] font-bold text-ink">{inv.client.charAt(0)}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-ink">{inv.client}</span>
              <span className="block text-[10px] text-subtle">{inv.no}</span>
            </span>
            <span className="hidden text-xs font-bold text-ink sm:block">{inv.amount}</span>
            <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", chip[inv.status])}>{inv.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KpiPreview() {
  return (
    <div>
      <PreviewHeader title="Key indicators" />
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        <Kpi label="Revenue" value="€48.2k" note="+18%" />
        <Kpi label="Margin" value="32%" note="+4 pts" />
        <Kpi label="Runway" value="9 mo" note="Healthy" tone="text-sky-500" />
      </div>
      <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-line">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-bold text-ink">Monthly revenue</p>
          <span className="text-[10px] text-subtle">Last 6 months</span>
        </div>
        <BarChart values={[28, 34, 30, 42, 38, 51]} labels={["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]} />
      </div>
    </div>
  );
}

export function BankSyncPreview() {
  const accounts = [
    { name: "Business current account", mask: "•• 4821", balance: "€18,240.10" },
    { name: "Savings account", mask: "•• 9930", balance: "€6,340.30" },
    { name: "Company card", mask: "•• 1177", balance: "−€412.80" },
  ];
  const tx = [
    { label: "Studio Nova", cat: "Client payment", tone: "bg-brand-50 text-brand-700", amount: "+€1,200.00" },
    { label: "Figma", cat: "Software", tone: "bg-lavender-50 text-lavender-600", amount: "−€45.00" },
    { label: "SNCF", cat: "Travel", tone: "bg-sky-100 text-sky-500", amount: "−€86.40" },
  ];
  return (
    <div>
      <PreviewHeader title="Connected accounts" />
      <ul className="mt-4 space-y-2">
        {accounts.map((a) => (
          <li key={a.mask} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 ring-1 ring-line">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-500 text-[10px] font-bold text-white">{a.mask.slice(-2)}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-ink">{a.name}</span>
              <span className="flex items-center gap-1 text-[10px] text-brand-700">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-500" />
                </span>
                Synced 2 min ago
              </span>
            </span>
            <span className="text-xs font-bold text-ink">{a.balance}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[11px] font-semibold text-subtle">Auto-categorised transactions</p>
      <ul className="mt-2 space-y-1.5">
        {tx.map((t) => (
          <li key={t.label} className="flex items-center justify-between gap-2 text-xs">
            <span className="font-medium text-ink">{t.label}</span>
            <span className={cn("ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold", t.tone)}>{t.cat}</span>
            <span className="w-20 text-right font-bold text-ink">{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReceiptsPreview() {
  const receipts = [
    { vendor: "Café Lomi", amount: "€14.50", matched: true },
    { vendor: "Office Depot", amount: "€89.90", matched: true },
    { vendor: "Uber", amount: "€23.10", matched: false },
  ];
  return (
    <div>
      <PreviewHeader title="Receipts" />
      <div className="mt-4 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-brand-200 bg-brand-50/50 px-4 py-5 text-center">
        <span className="grid size-9 place-items-center rounded-full bg-white text-brand-600 shadow-card">
          <Upload className="size-4" />
        </span>
        <p className="mt-2 text-xs font-semibold text-ink">Drop receipts here</p>
        <p className="text-[10px] text-subtle">or forward them to receipts@{siteConfig.name.toLowerCase()}.com</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
        {receipts.map((r) => (
          <div key={r.vendor} className="rounded-xl bg-white p-2.5 ring-1 ring-line">
            <div className="space-y-1" aria-hidden="true">
              <div className="h-1.5 w-3/4 rounded-full bg-surface" />
              <div className="h-1.5 w-1/2 rounded-full bg-surface" />
              <div className="h-1.5 w-2/3 rounded-full bg-surface" />
            </div>
            <p className="mt-2 truncate text-[11px] font-semibold text-ink">{r.vendor}</p>
            <p className="text-[11px] font-bold text-ink">{r.amount}</p>
            <span
              className={cn(
                "mt-1.5 inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold",
                r.matched ? "bg-brand-50 text-brand-700" : "bg-sunny-100 text-ink",
              )}
            >
              {r.matched ? <CheckCheck className="size-3" /> : <LoaderCircle className="size-3 animate-spin" />}
              {r.matched ? "Matched" : "Reading…"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecordsPreview() {
  const docs = [
    { name: "Annual accounts 2025.pdf", date: "Sealed 31 Mar 2026" },
    { name: "VAT return Q3.pdf", date: "Sealed 20 Oct 2026" },
    { name: "Invoice INV-0042.pdf", date: "Sealed 13 Nov 2026" },
  ];
  return (
    <div>
      <div className="flex items-center gap-3 rounded-xl bg-brand-50 p-4 ring-1 ring-brand-100">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-500">
          <ShieldCheck className="size-5 text-white" />
        </span>
        <span>
          <span className="block text-sm font-bold text-ink">All documents archived</span>
          <span className="block text-[11px] text-body">Certified timestamp · tamper-proof · 10-year retention</span>
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {docs.map((d) => (
          <li key={d.name} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 ring-1 ring-line">
            <FileLock className="size-5 shrink-0 text-lavender-600" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-ink">{d.name}</span>
              <span className="block text-[10px] text-subtle">{d.date}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              <Lock className="size-3" />
              Sealed
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-center gap-1.5 text-[11px] text-subtle">
        <Check className="size-3.5 text-brand-600" />
        Ready to share with the tax authorities in one click
      </p>
    </div>
  );
}

export function CardPreview() {
  const spend = [
    { label: "Adobe", cat: "Software", amount: "−€59.99" },
    { label: "Air France", cat: "Travel", amount: "−€214.00" },
    { label: "Le Bistrot", cat: "Meals", amount: "−€38.50" },
  ];
  return (
    <div>
      <div className="relative aspect-[1.6/1] w-full max-w-xs overflow-hidden rounded-2xl bg-linear-to-br from-brand-500 via-brand-600 to-brand-700 p-4 text-white shadow-float">
        <div aria-hidden="true" className="absolute -right-10 -top-10 size-40 rounded-full bg-lavender-300/40 blur-2xl" />
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold">{siteConfig.name} Business</span>
          <span className="h-5 w-7 rounded-md bg-sunny-300/90" />
        </div>
        <p className="mt-8 font-mono text-sm tracking-[0.2em] sm:mt-10">•••• •••• •••• 4821</p>
        <div className="mt-3 flex items-end justify-between text-[10px] text-white/70">
          <span>LÉA MARTIN</span>
          <span>12/29</span>
        </div>
      </div>
      <div className="mt-4 rounded-xl bg-white p-3 ring-1 ring-line">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-semibold text-ink">Monthly limit</span>
          <span className="text-subtle">€1,312 / €3,000</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface">
          <div className="h-full w-[44%] origin-left rounded-full bg-brand-500 animate-grow-x" />
        </div>
      </div>
      <ul className="mt-3 space-y-1.5">
        {spend.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-xs">
            <span className="font-medium text-ink">{s.label}</span>
            <span className="text-[10px] text-subtle">{s.cat}</span>
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-50 px-1.5 py-0.5 text-[9px] font-semibold text-brand-700">
              <Check className="size-2.5" /> Receipt
            </span>
            <span className="w-16 text-right font-bold text-ink">{s.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
