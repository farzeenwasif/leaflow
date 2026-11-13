"use client";

import { Lock } from "lucide-react";
import { useId, useRef, useState, type ComponentType, type KeyboardEvent } from "react";
import { appFeatures } from "@/data/home";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Highlight } from "@/components/ui/highlight";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { BankSyncPreview, InvoicingPreview, KpiPreview, ReceiptsPreview, RecordsPreview } from "@/components/widgets/app-previews";
import { NewsletterForm } from "./newsletter-form";

const previews: Record<string, ComponentType> = {
  invoicing: InvoicingPreview,
  kpis: KpiPreview,
  bank: BankSyncPreview,
  receipts: ReceiptsPreview,
  records: RecordsPreview,
};

/** Interactive product tour: pick a feature, see it live in the app window. */
export function Software() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const feature = appFeatures[active];
  const Preview = previews[feature.id];
  const cycling = autoplay && !reducedMotion;

  function select(index: number, fromUser = true) {
    setActive(index);
    if (fromUser) setAutoplay(false);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const delta = keys[e.key];
    if (!delta) return;
    e.preventDefault();
    const next = (index + delta + appFeatures.length) % appFeatures.length;
    select(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <Section id="software" labelledBy="software-title" spacing="lg" className="isolate">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-2/3 max-w-5xl rounded-full bg-linear-to-r from-brand-100/60 via-white to-lavender-200/60 blur-3xl" />

      <Container>
        <SectionHeading
          id="software-title"
          align="center"
          emoji="💻"
          title={
            <>
              Discover how our <Highlight variant="underline" tone="coral">accounting app</Highlight> works
            </>
          }
          description="Everything your business needs in one place, connected to your bank and to your accountant."
        />

        <div
          className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Feature list (horizontal chips on mobile, vertical list on desktop) */}
          <Reveal direction="left" className="min-w-0">
            <div
              role="tablist"
              aria-label="App features"
              aria-orientation="vertical"
              className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
            >
              {appFeatures.map((f, i) => {
                const selected = i === active;
                const Icon = f.icon;
                return (
                  <button
                    key={f.id}
                    ref={(el) => {
                      tabsRef.current[i] = el;
                    }}
                    id={`${baseId}-tab-${f.id}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => select(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={cn(
                      "group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-2xl text-left transition-all duration-300",
                      "px-3.5 py-2.5 lg:items-start lg:p-4",
                      selected ? "bg-white shadow-soft ring-1 ring-brand-100" : "bg-white/60 ring-1 ring-line hover:bg-white lg:bg-transparent lg:ring-transparent",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-xl transition-colors duration-300 lg:size-10",
                        selected ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-700 group-hover:bg-brand-100",
                      )}
                    >
                      <Icon aria-hidden="true" className="size-4 lg:size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block whitespace-nowrap text-[13px] font-semibold text-ink lg:whitespace-normal lg:text-[15px]">{f.title}</span>
                      <span
                        className={cn(
                          "hidden overflow-hidden text-sm leading-relaxed text-body transition-all duration-500 lg:grid",
                          selected ? "mt-1 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="min-h-0">{f.detail}</span>
                      </span>
                    </span>

                    {/* Autoplay progress — advancing is driven by the animation ending. */}
                    {selected && cycling && (
                      <span
                        key={`progress-${active}`}
                        aria-hidden="true"
                        onAnimationEnd={() => select((active + 1) % appFeatures.length, false)}
                        style={{ animationPlayState: paused ? "paused" : "running" }}
                        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-500 animate-progress"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-body lg:hidden">{feature.detail}</p>
          </Reveal>

          {/* App window */}
          <Reveal direction="right" className="min-w-0 lg:row-span-2">
            <div
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${feature.id}`}
              className="overflow-hidden rounded-2xl bg-white shadow-float ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3 border-b border-line bg-surface/50 px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-coral-400" />
                  <span className="size-2.5 rounded-full bg-sunny-300" />
                  <span className="size-2.5 rounded-full bg-brand-500" />
                </span>
                <span className="mx-auto flex min-w-0 items-center gap-1.5 truncate rounded-md bg-white px-3 py-1 text-[11px] text-subtle ring-1 ring-line">
                  <Lock aria-hidden="true" className="size-3 shrink-0" />
                  app.{siteConfig.name.toLowerCase()}.com/{feature.id}
                </span>
                <span className="w-10" aria-hidden="true" />
              </div>
              <div className="relative min-h-[360px] bg-linear-to-b from-white to-brand-50/50 p-4 sm:p-6">
                <p className="sr-only">{feature.detail}</p>
                <div key={feature.id} aria-hidden="true" className="animate-fade-in">
                  <Preview />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="min-w-0">
            <ArrowLink href="#contact">See all features</ArrowLink>
            <NewsletterForm className="mt-6" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
