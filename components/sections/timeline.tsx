import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Step, Tone } from "@/types/content";

const dot: Record<Tone, string> = {
  brand: "bg-brand-500 shadow-brand",
  sky: "bg-sky-400",
  lavender: "bg-lavender-400",
  coral: "bg-coral-400",
  sunny: "bg-sunny-300 text-ink",
};

type TimelineProps = {
  id: string;
  emoji?: string;
  title: ReactNode;
  description?: string;
  steps: Step[];
  aside?: ReactNode;
};

/** Numbered vertical timeline, optionally paired with a visual. */
export function Timeline({ id, emoji, title, description, steps, aside }: TimelineProps) {
  return (
    <Section labelledBy={id} spacing="lg">
      <Container className={aside ? "grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16" : undefined}>
        <div>
          <SectionHeading id={id} emoji={emoji} title={title} description={description} />
          <div className="relative mt-10">
            {/* connecting line */}
            <span aria-hidden="true" className="absolute bottom-6 left-5 top-6 w-px bg-linear-to-b from-brand-200 via-lavender-200 to-coral-200" />
            <ol className="relative">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 110} direction="left" className="relative flex gap-5 pb-8 last:pb-0">
                <span className={cn("relative z-10 grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white ring-4 ring-white", dot[step.tone])}>
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-title font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-body">{step.description}</p>
                </div>
              </Reveal>
            ))}
            </ol>
          </div>
        </div>
        {aside && <Reveal direction="right">{aside}</Reveal>}
      </Container>
    </Section>
  );
}
