import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** Lifts the card on hover. */
  interactive?: boolean;
};

/** White rounded surface with a soft shadow. */
export function Card({ interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-black/[0.04] bg-white shadow-card",
        interactive && "transition-all duration-500 ease-(--ease-out-expo) hover:-translate-y-1.5 hover:shadow-soft",
        className,
      )}
      {...props}
    />
  );
}
