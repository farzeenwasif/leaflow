import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Tone } from "@/types/content";

const tones: Record<Tone, string> = {
  brand: "bg-brand-500 text-white",
  lavender: "bg-lavender-600 text-white",
  coral: "bg-coral-500 text-white",
  sky: "bg-sky-500 text-white",
  sunny: "bg-sunny-400 text-ink",
};

const softTones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-100",
  lavender: "bg-lavender-50 text-lavender-600 ring-lavender-200",
  coral: "bg-coral-200/40 text-coral-500 ring-coral-200",
  sky: "bg-sky-100/70 text-sky-500 ring-sky-200",
  sunny: "bg-sunny-100 text-ink ring-sunny-300/60",
};

type IconTileProps = {
  icon: LucideIcon;
  tone: Tone;
  /** `solid` = filled colour, `soft` = tinted background with coloured icon. */
  variant?: "solid" | "soft";
  className?: string;
};

/** Rounded square holding a single icon. */
export function IconTile({ icon: Icon, tone, variant = "solid", className }: IconTileProps) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-xl",
        variant === "solid" ? cn("shadow-card", tones[tone]) : cn("ring-1", softTones[tone]),
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
    </span>
  );
}

const numberTones: Record<Tone, string> = {
  brand: "bg-brand-100",
  lavender: "bg-lavender-200",
  coral: "bg-coral-200",
  sky: "bg-sky-100",
  sunny: "bg-sunny-100",
};

/** Small coloured square showing a step number. */
export function NumberTile({ value, tone }: { value: number; tone: Tone }) {
  return (
    <span className={cn("grid size-11 place-items-center rounded-lg text-lg font-semibold text-ink", numberTones[tone])}>{value}</span>
  );
}
