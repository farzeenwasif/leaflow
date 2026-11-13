import type { CSSProperties, ReactNode } from "react";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/*  Primitives                                                         */
/* ------------------------------------------------------------------ */

type FloatingCardProps = {
  className?: string;
  children: ReactNode;
  /** Seconds of offset so neighbouring cards don't bob in sync. */
  floatDelay?: number;
};

/**
 * Decorative "app UI" card that floats over imagery. Hidden from
 * assistive tech because it only illustrates the product.
 */
export function FloatingCard({ className, children, floatDelay = 0 }: FloatingCardProps) {
  return (
    <div
      aria-hidden="true"
      style={{ animationDelay: `${floatDelay}s` } as CSSProperties}
      className={cn("absolute z-20 select-none rounded-2xl bg-white p-4 shadow-float animate-float", className)}
    >
      {children}
    </div>
  );
}

export function TrendPill({ value, className }: { value: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 rounded-full bg-brand-500 px-1.5 py-0.5 text-[9px] font-bold text-white", className)}>
      {value}
      <TrendingUp className="size-2.5" />
    </span>
  );
}

/** Builds an SVG path from a list of values, scaled into a width×height box. */
function toPath(points: number[], width: number, height: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(height - ((p - min) / range) * height).toFixed(1)}`)
    .join(" ");
}

type SparklineProps = { points: number[]; className?: string; area?: boolean };

export function Sparkline({ points, className, area = false }: SparklineProps) {
  const line = toPath(points, 100, 30);
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={cn("overflow-visible", className)}>
      {area && <path d={`${line} L100,30 L0,30 Z`} className="fill-current opacity-20" />}
      <path d={line} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Composed cards                                                     */
/* ------------------------------------------------------------------ */

export function DonutCard({ className, floatDelay }: { className?: string; floatDelay?: number }) {
  return (
    <FloatingCard className={cn("w-48 sm:w-52", className)} floatDelay={floatDelay}>
      <p className="text-[11px] font-medium text-subtle">Monthly expenses</p>
      <div className="mt-2 flex items-center gap-3">
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[conic-gradient(var(--color-brand-500)_0_65%,var(--color-sky-400)_65%_85%,var(--color-line)_85%_100%)]">
          <div className="size-8 rounded-full bg-white" />
        </div>
        <div>
          <p className="text-[10px] text-subtle">Total</p>
          <p className="text-sm font-bold text-ink">€11,390</p>
        </div>
      </div>
    </FloatingCard>
  );
}

export function CostsChartCard({ className, floatDelay }: { className?: string; floatDelay?: number }) {
  return (
    <FloatingCard className={cn("w-60 p-3", className)} floatDelay={floatDelay}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-ink">Costs</span>
        <span className="text-[8px] text-subtle">Aug. 25 – Sep. 25</span>
      </div>
      <div className="relative flex h-14">
        <div className="flex flex-col justify-between pr-2 text-[7px] text-subtle">
          {[8, 6, 4, 2, 0].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <div className="relative flex-1 border-b border-line">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className="border-b border-line/70" />
            ))}
          </div>
          <Sparkline points={[4, 2, 6, 4, 5, 1, 3, 2, 5, 4]} className="absolute inset-0 size-full text-sky-400" />
          <TrendPill value="+12.5%" className="absolute right-2 top-1" />
        </div>
      </div>
      <div className="mt-1.5 flex justify-between pl-3 text-[7px] text-subtle">
        {["14 Aug.", "31 Aug.", "07 Sep.", "14 Sep.", "21 Sep."].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </FloatingCard>
  );
}
