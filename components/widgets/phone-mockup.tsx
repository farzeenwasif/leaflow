import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PhoneMockupProps = { children: ReactNode; className?: string };

/** Minimal smartphone frame (notch + rounded bezel) around arbitrary UI. */
export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative rounded-[2.25rem] bg-ink p-2 shadow-[0_30px_60px_-20px_rgb(15_23_42/0.45)]", className)}>
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
        <div aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
        <div className="px-3.5 pb-5 pt-10">{children}</div>
      </div>
    </div>
  );
}
