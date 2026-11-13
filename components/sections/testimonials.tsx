"use client";

import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/data/home";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { Highlight } from "@/components/ui/highlight";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Testimonial, Tone } from "@/types/content";

const AUTOPLAY_MS = 7000;

const roleTone: Record<Tone, string> = {
  brand: "text-brand-600",
  lavender: "text-lavender-600",
  coral: "text-coral-400",
  sky: "text-sky-500",
  sunny: "text-sunny-400",
};

function ReviewCard({ review, featured }: { review: Testimonial; featured?: boolean }) {
  return (
    <figure
      className={cn(
        "relative flex h-full flex-col rounded-3xl bg-white p-5 shadow-card transition-all duration-500 ease-(--ease-out-expo) lg:p-6",
        featured ? "md:-translate-y-3 md:shadow-soft" : "md:scale-[0.97] md:opacity-80",
      )}
    >
      <Quote aria-hidden="true" className="absolute right-5 top-5 size-7 fill-brand-50 text-brand-100" />
      <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} aria-hidden="true" className="size-3.5 fill-sunny-400 text-sunny-400" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-body">
        <p>“{review.quote}”</p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
          {review.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{review.name}</span>
          <span className={cn("block text-xs font-medium", roleTone[review.tone])}>{review.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function NavButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
      className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-500 text-white shadow-brand transition hover:scale-110 hover:bg-brand-600 active:scale-95"
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const count = testimonials.length;

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + count) % count), [count]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, go]);

  // Desktop shows three cards with the active one in the middle.
  const visible = [-1, 0, 1].map((offset) => testimonials[(index + offset + count) % count]);

  return (
    <Section labelledBy="reviews-title" spacing="sm">
      <Container>
        <div className="rounded-[2rem] bg-brand-50 px-5 py-12 sm:px-8 md:py-16 lg:px-10">
          <div>
            <SectionHeading
              id="reviews-title"
              align="center"
              emoji="🌟"
              title={
                <>
                  What our <Highlight tone="coral">clients say</Highlight>
                </>
              }
            />

            <Reveal delay={120}>
              <div
                role="region"
                aria-roledescription="carousel"
                aria-label="Client reviews"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                className="mt-10 flex items-center gap-3 md:mt-12 lg:gap-5"
              >
                <div className="hidden md:block">
                  <NavButton direction="prev" onClick={() => go(-1)} />
                </div>

                <div aria-live={paused ? "polite" : "off"} className="flex-1">
                  {/* Mobile: single card */}
                  <div key={`m-${index}`} className="animate-fade-in md:hidden">
                    <ReviewCard review={testimonials[index]} featured />
                  </div>
                  {/* Desktop: three cards */}
                  <div className="hidden items-stretch gap-4 md:grid md:grid-cols-3 lg:gap-5">
                    {visible.map((review, i) => (
                      <div key={`${review.name}-${index}`} className="h-full animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                        <ReviewCard review={review} featured={i === 1} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <NavButton direction="next" onClick={() => go(1)} />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="md:hidden">
                  <NavButton direction="prev" onClick={() => go(-1)} />
                </div>
                <div className="flex gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show review from ${t.name}`}
                      aria-current={i === index}
                      className={cn("h-2 rounded-full transition-all duration-300", i === index ? "w-6 bg-brand-500" : "w-2 bg-brand-200 hover:bg-brand-500/60")}
                    />
                  ))}
                </div>
                <div className="md:hidden">
                  <NavButton direction="next" onClick={() => go(1)} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
