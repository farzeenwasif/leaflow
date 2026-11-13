"use client";

import { Sparkles } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { images, plans } from "@/data/home";
import { cn } from "@/lib/cn";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Card } from "@/components/ui/card";
import { CheckList } from "@/components/ui/check-list";
import { BrandBadge } from "@/components/ui/decor";
import { Highlight } from "@/components/ui/highlight";
import { Container, Section } from "@/components/ui/layout";
import { PillImage } from "@/components/ui/pill-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DonutCard } from "@/components/widgets/dashboard-cards";

const priceFormat = new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function Pricing() {
  const [activeId, setActiveId] = useState(plans[0].id);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const plan = plans.find((p) => p.id === activeId) ?? plans[0];

  // WAI-ARIA tabs: arrow keys move between plans.
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (index + delta + plans.length) % plans.length;
    setActiveId(plans[next].id);
    tabsRef.current[next]?.focus();
  }

  return (
    <Section id="pricing" labelledBy="pricing-title" spacing="lg">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,460px)_1fr] lg:gap-10">
        <Reveal direction="left" className="relative mx-auto hidden w-full max-w-[210px] lg:block">
          <PillImage image={images.freelancer} sizes="270px" className="aspect-[4/7]" />
          <DonutCard className="-bottom-6 -left-10 scale-90" />
        </Reveal>

        <div className="text-center">
          <SectionHeading
            id="pricing-title"
            align="center"
            emoji="✏️"
            title={
              <>
                A <Highlight tone="sky">commitment-free</Highlight> offer tailored to your business
              </>
            }
          />

          <Reveal delay={100}>
            <div
              role="tablist"
              aria-label="Business type"
              className="scrollbar-none mx-auto mt-7 flex max-w-full gap-1 overflow-x-auto rounded-full bg-surface/70 p-1 sm:inline-flex"
            >
              {plans.map((p, i) => {
                const selected = p.id === activeId;
                return (
                  <button
                    key={p.id}
                    ref={(el) => {
                      tabsRef.current[i] = el;
                    }}
                    id={`${baseId}-tab-${p.id}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveId(p.id)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-[13px]",
                      selected ? "bg-white text-ink shadow-card" : "text-body hover:text-ink",
                    )}
                  >
                    {p.tab}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Card
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${plan.id}`}
              className="relative mt-6 p-6 text-left shadow-soft ring-1 ring-brand-100 sm:p-7"
            >
              {/* `key` replays the entrance animation on every plan change. */}
              <div key={plan.id} className="animate-fade-in">
                {plan.popular && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-coral-200/60 px-2.5 py-1 text-[11px] font-semibold text-coral-500">
                    <Sparkles aria-hidden="true" className="size-3" />
                    Most popular
                  </span>
                )}
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600">{plan.name}</h3>
                <p className="mt-2 text-h3 font-extrabold text-ink">
                  {priceFormat.format(plan.price)}
                  <span className="ml-1 text-sm font-medium text-subtle">excl. tax / {plan.period}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">{plan.description}</p>

                <div className="my-5 h-px bg-line" />
                <p className="text-sm font-semibold text-ink">Included in the offer</p>
                <CheckList items={plan.features} tone="sky" className="mt-3" />

                <ArrowLink href="#contact" className="mt-6">
                  See the offer in detail
                </ArrowLink>
              </div>
            </Card>
          </Reveal>
        </div>

        <Reveal direction="right" className="relative mx-auto hidden w-full max-w-[210px] lg:block">
          <PillImage image={images.team} sizes="270px" className="aspect-[4/7]" imageClassName="object-[50%_70%]" />
          <BrandBadge className="-right-3 -top-4" />
        </Reveal>
      </Container>
    </Section>
  );
}
