import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

const titleSizes = {
  md: "text-h3",
  lg: "text-h2",
} as const;

type SectionHeadingProps = {
  id?: string;
  /** Decorative emoji shown before the title (hidden from screen readers). */
  emoji?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  size?: keyof typeof titleSizes;
  as?: "h2" | "h3";
  className?: string;
};

/** Standard section title + optional intro paragraph. */
export function SectionHeading({
  id,
  emoji,
  title,
  description,
  align = "left",
  size = "lg",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal as="header" className={cn(centered && "text-center", className)}>
      <Tag id={id} className={cn("font-bold tracking-tight text-balance text-ink", titleSizes[size])}>
        {emoji && (
          <span aria-hidden="true" className="mr-2 inline-block origin-[70%_70%] hover:animate-wave">
            {emoji}
          </span>
        )}
        {title}
      </Tag>
      {description && (
        <div className={cn("mt-4 max-w-xl text-sm leading-relaxed text-body sm:mt-5 sm:text-[15px]", centered && "mx-auto")}>
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}
    </Reveal>
  );
}
