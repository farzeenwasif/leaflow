import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import type { Tone } from "@/types/content";
import { BrandMark } from "./logo";

const blobTone: Record<Tone, string> = {
  brand: "bg-brand-100",
  lavender: "bg-lavender-200",
  coral: "bg-coral-200",
  sky: "bg-sky-200",
  sunny: "bg-sunny-100",
};

type BlobProps = { tone: Tone; className?: string; animate?: boolean };

/** Soft decorative circle used in section backgrounds. */
export function Blob({ tone, className, animate = false }: BlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10 rounded-full", blobTone[tone], animate && "animate-float-slow", className)}
    />
  );
}

const badgeBg: Record<Tone, string> = {
  brand: "bg-brand-50",
  lavender: "bg-lavender-50",
  coral: "bg-coral-200/40",
  sky: "bg-sky-100",
  sunny: "bg-sunny-100",
};

type BrandBadgeProps = { tone?: Tone; className?: string; style?: CSSProperties };

/** Floating circular badge with the brand mark, overlapping photos. Decorative. */
export function BrandBadge({ tone = "sunny", className, style }: BrandBadgeProps) {
  return (
    <div
      aria-hidden="true"
      style={style}
      className={cn(
        "absolute z-10 grid size-14 place-items-center rounded-full shadow-float ring-4 ring-white animate-float sm:size-16",
        badgeBg[tone],
        className,
      )}
    >
      <BrandMark className="size-9 sm:size-10" />
    </div>
  );
}
