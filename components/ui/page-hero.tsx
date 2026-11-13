import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./layout";

type PageHeroProps = {
  /** Small label above the title, e.g. the page name. */
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  /** Optional visual. When set, the hero becomes a two-column layout. */
  visual?: ReactNode;
  /** Extra content under the copy (trust line, chips…). */
  footer?: ReactNode;
  className?: string;
};

/**
 * Standard hero for inner pages: one soft colour wash, a clear H1 and
 * optional visual. Uses CSS-only entrance animation so it paints instantly.
 */
export function PageHero({ eyebrow, title, description, actions, visual, footer, className }: PageHeroProps) {
  const split = Boolean(visual);

  return (
    <section aria-labelledby="page-title" className={cn("relative isolate overflow-x-clip pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pt-20", className)}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-linear-to-b from-brand-50 via-brand-50/40 to-transparent" />

      <Container className={cn(split ? "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14" : "")}>
        <div className={cn(split ? "max-w-xl" : "mx-auto max-w-3xl text-center")}>
          <p className="inline-flex animate-fade-in-up items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-card ring-1 ring-brand-100">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </p>
          <h1
            id="page-title"
            className="mt-5 animate-fade-in-up text-balance text-[2rem] font-extrabold leading-[1.12] tracking-tight text-ink [animation-delay:80ms] sm:text-[2.75rem] lg:text-5xl"
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-5 max-w-xl animate-fade-in-up text-base leading-relaxed text-body [animation-delay:160ms] sm:text-lg",
              !split && "mx-auto",
            )}
          >
            {description}
          </p>
          {actions && (
            <div className={cn("mt-8 flex animate-fade-in-up flex-col gap-3 [animation-delay:240ms] sm:flex-row", !split && "justify-center")}>
              {actions}
            </div>
          )}
          {footer && <div className="mt-6 animate-fade-in-up [animation-delay:320ms]">{footer}</div>}
        </div>

        {visual && <div className="animate-fade-in-up [animation-delay:200ms]">{visual}</div>}
      </Container>
    </section>
  );
}
