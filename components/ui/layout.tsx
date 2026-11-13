import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
} as const;

type ContainerProps = {
  size?: keyof typeof containerSizes;
  className?: string;
  children: ReactNode;
};

/** Horizontally centred, padded content column. */
export function Container({ size = "lg", className, children }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", containerSizes[size], className)}>{children}</div>;
}

const sectionSpacing = {
  none: "",
  sm: "py-10 sm:py-14",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-14 sm:py-20 lg:py-24",
} as const;

type SectionProps = {
  id?: string;
  /** Accessible name — pass the id of the section heading. */
  labelledBy?: string;
  spacing?: keyof typeof sectionSpacing;
  className?: string;
  children: ReactNode;
};

/** Page section with consistent vertical rhythm. Clips decorative overflow. */
export function Section({ id, labelledBy, spacing = "md", className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative overflow-x-clip", sectionSpacing[spacing], className)}>
      {children}
    </section>
  );
}
