"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/hooks/use-in-view";
import type { Tone } from "@/types/content";

const toneClass: Record<Tone, string> = {
  brand: "text-brand-500",
  lavender: "text-lavender-300",
  coral: "text-coral-400",
  sky: "text-sky-400",
  sunny: "text-sunny-300",
};

type HighlightProps = {
  children: ReactNode;
  /** `circle` draws a loose hand-drawn loop, `underline` a brush stroke. */
  variant?: "circle" | "underline";
  tone?: Tone;
  className?: string;
};

/** Emphasises words in a heading with an animated hand-drawn stroke. */
export function Highlight({ children, variant = "circle", tone = "brand", className }: HighlightProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.6 });

  return (
    <span ref={ref} className={cn("relative inline-block whitespace-nowrap", variant === "circle" && "px-[0.2em]", className)}>
      <span className="relative z-10">{children}</span>
      {variant === "circle" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 360 85"
          preserveAspectRatio="none"
          fill="none"
          className={cn(
            "pointer-events-none absolute -left-[0.3em] -top-[0.3em] h-[calc(100%+0.6em)] w-[calc(100%+0.6em)]",
            toneClass[tone],
          )}
        >
          <path
            d="M24 46C28 16 98 8 180 10C282 12 338 22 336 46C334 72 264 82 178 80C92 78 24 66 24 46C24 34 28 22 38 16"
            pathLength={1}
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-drawn={inView}
            className="highlight-path"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          fill="none"
          className={cn("pointer-events-none absolute -bottom-[0.18em] left-0 h-[0.3em] w-full", toneClass[tone])}
        >
          <path
            d="M3 8.5C52 3.5 148 2 197 7.5"
            pathLength={1}
            stroke="currentColor"
            strokeWidth={4}
            strokeLinecap="round"
            data-drawn={inView}
            className="highlight-path"
          />
        </svg>
      )}
    </span>
  );
}
