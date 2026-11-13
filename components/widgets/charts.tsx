import { cn } from "@/lib/cn";

/** Smooth cubic path through `points`, scaled into a width×height box (y grows downward). */
export function smoothPath(points: number[], width: number, height: number, padding = 2) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = width / (points.length - 1);
  const xy = points.map((p, i) => [i * step, padding + (height - padding * 2) * (1 - (p - min) / range)] as const);

  return xy.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x.toFixed(1)},${y.toFixed(1)}`;
    const [px, py] = xy[i - 1];
    const cx = (px + x) / 2;
    return `${d} C${cx.toFixed(1)},${py.toFixed(1)} ${cx.toFixed(1)},${y.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`;
  }, "");
}

type AreaChartProps = {
  points: number[];
  /** Unique id for the gradient definition. */
  gradientId: string;
  className?: string;
};

/** Smooth line chart with a soft gradient fill. Colour comes from `currentColor`. */
export function AreaChart({ points, gradientId, className }: AreaChartProps) {
  const line = smoothPath(points, 100, 40);
  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true" className={cn("overflow-visible", className)}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L100,40 L0,40 Z`} fill={`url(#${gradientId})`} />
      <path d={line} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

type BarChartProps = {
  values: number[];
  labels: string[];
  /** Index of the bar to emphasise. Defaults to the last one. */
  highlight?: number;
  className?: string;
};

/** Simple column chart whose bars grow in on mount. */
export function BarChart({ values, labels, highlight = values.length - 1, className }: BarChartProps) {
  const max = Math.max(...values);
  return (
    <div aria-hidden="true" className={cn("flex h-32 items-end gap-2 sm:gap-3", className)}>
      {values.map((v, i) => (
        <div key={labels[i]} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
          <div
            style={{ height: `${(v / max) * 100}%`, animationDelay: `${i * 70}ms` }}
            className={cn(
              "w-full origin-bottom rounded-lg animate-grow-y",
              i === highlight ? "bg-brand-500 shadow-brand" : "bg-brand-100",
            )}
          />
          <span className="text-[10px] text-subtle">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}
