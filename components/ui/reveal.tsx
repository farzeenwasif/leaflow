"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/hooks/use-in-view";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  as?: "div" | "li" | "article" | "span" | "header" | "figure" | "p";
  direction?: RevealDirection;
  /** Delay in ms — useful for staggering lists. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/** Fades and slides its children in when they scroll into view. */
export function Reveal({ as = "div", direction = "up", delay = 0, className, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      data-visible={inView ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
