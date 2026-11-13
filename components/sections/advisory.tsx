import Image from "next/image";
import { images } from "@/data/home";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CostsChartCard } from "@/components/widgets/dashboard-cards";

export function Advisory() {
  return (
    <Section labelledBy="advisory-title" spacing="sm">
      <Container size="md">
        <div className="grid items-center gap-14 rounded-[2rem] bg-lavender-50 px-6 pb-10 pt-14 sm:px-10 md:grid-cols-2 md:gap-6 md:py-8 lg:px-14">
          <Reveal direction="scale" className="relative mx-auto w-full max-w-[220px] sm:max-w-[250px]">
            {/* Portrait breaks out of the top of the circle. */}
            <div className="relative aspect-square rounded-full bg-lavender-400">
              <div className="absolute inset-x-0 bottom-0 h-[125%] overflow-hidden rounded-b-full">
                <Image
                  src={images.advisory.src}
                  alt={images.advisory.alt}
                  fill
                  sizes="250px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
            <CostsChartCard className="-bottom-10 left-1/2 -translate-x-1/2 scale-[0.85]" />
          </Reveal>

          <div className="pt-6 md:pt-0">
            <SectionHeading
              id="advisory-title"
              size="md"
              emoji="🤝"
              title={
                <>
                  You&apos;re <Highlight tone="sunny">guided</Highlight> by our team
                </>
              }
            />
            <Reveal delay={120}>
              <h3 className="mt-5 text-title font-semibold text-ink">Accounting made simple</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">
                All year round, you can reach your dedicated advisor, who&apos;ll always get back to you quickly — by chat,
                email or phone.
              </p>
              <Button href="#contact" className="mt-6">
                Request my quote
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
