import { images } from "@/data/home";
import { Blob, BrandBadge } from "@/components/ui/decor";
import { Highlight } from "@/components/ui/highlight";
import { Container, Section } from "@/components/ui/layout";
import { PillImage } from "@/components/ui/pill-image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" spacing="lg" className="isolate">
      <Blob tone="sunny" animate className="-right-44 top-10 hidden h-96 w-72 md:block" />

      <Container className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
        <Reveal direction="left" className="mx-auto flex items-start gap-4">
          <PillImage image={images.team} sizes="(min-width: 640px) 240px, 46vw" className="aspect-[6/11] w-[36vw] max-w-[190px]" imageClassName="object-[50%_70%]" />
          <div className="relative mt-10 sm:mt-14">
            <PillImage image={images.freelancer} sizes="(min-width: 640px) 240px, 46vw" className="aspect-[6/11] w-[36vw] max-w-[190px]" />
            <BrandBadge className="-left-4 -top-6 sm:-top-8" />
          </div>
        </Reveal>

        <div className="max-w-2xl">
          <SectionHeading
            id="contact-title"
            emoji="💬"
            title={
              <>
                Let&apos;s talk about <Highlight tone="coral">your project</Highlight>
              </>
            }
            description="We support businesses in close to 60 industries. Tell us about your project — we usually reply within 24 hours."
          />
          <Reveal delay={150}>
            <ContactForm className="mt-8" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
