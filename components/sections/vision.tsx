import { images, visionPoints } from "@/data/home";
import { siteConfig } from "@/data/site";
import { BrandBadge } from "@/components/ui/decor";
import { Highlight } from "@/components/ui/highlight";
import { IconTile } from "@/components/ui/icon-tile";
import { Container, Section } from "@/components/ui/layout";
import { PillImage } from "@/components/ui/pill-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Vision() {
  return (
    <Section labelledBy="vision-title" spacing="lg">
      <Container className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
        <SectionHeading
          id="vision-title"
          emoji="🎉"
          size="md"
          className="md:col-span-2 lg:col-span-1"
          title={
            <>
              Many entrepreneurs like you are joining <Highlight variant="underline">{siteConfig.name}</Highlight>
            </>
          }
          description={
            <p>
              Entrepreneurs need real support. With {siteConfig.name}, you don&apos;t have to choose between an online firm
              and a human advisor — you get both.
            </p>
          }
        />

        <Reveal direction="scale" className="relative mx-auto w-40 sm:w-48">
          <PillImage image={images.vision} sizes="240px" className="aspect-[5/8]" />
          <BrandBadge tone="lavender" className="-left-5 -top-3" />
        </Reveal>

        <div>
          <Reveal>
            <h3 className="text-title font-semibold text-ink">Our vision</h3>
          </Reveal>
          <ul className="mt-5 space-y-5">
            {visionPoints.map((point, i) => (
              <Reveal as="li" key={point.text} delay={i * 90} direction="right" className="group flex items-start gap-3.5">
                <IconTile icon={point.icon} tone={point.tone} className="size-9 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                <p className="text-sm leading-relaxed text-body">{point.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
