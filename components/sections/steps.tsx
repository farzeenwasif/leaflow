import { steps } from "@/data/home";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { NumberTile } from "@/components/ui/icon-tile";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Tone } from "@/types/content";

const accent: Record<Tone, string> = {
  brand: "bg-brand-500",
  sky: "bg-sky-400",
  lavender: "bg-lavender-400",
  coral: "bg-coral-400",
  sunny: "bg-sunny-300",
};

export function Steps() {
  return (
    <Section id="how-it-works" labelledBy="steps-title">
      <Container>
        <SectionHeading
          id="steps-title"
          align="center"
          emoji="🤝"
          title={
            <>
              A smooth start with <Highlight tone="brand">complete confidence</Highlight>
            </>
          }
          description="Three simple steps — and we handle the rest."
        />

        <ol className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120}>
              <Card interactive className="group relative h-full overflow-hidden p-6">
                <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100", accent[step.tone])} />
                <div className="flex items-center justify-between">
                  <NumberTile value={i + 1} tone={step.tone} />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-subtle">Step {i + 1}</span>
                </div>
                <h3 className="mt-5 text-title font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">{step.description}</p>
              </Card>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex justify-center" delay={200}>
          <Button href="#pricing">Request a quote</Button>
        </Reveal>
      </Container>
    </Section>
  );
}
