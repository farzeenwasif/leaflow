import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";
import { buttonClasses } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { BrandMark } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

type CtaBannerProps = {
  title?: ReactNode;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

/** Light, on-brand call-to-action band used at the end of pages. */
export function CtaBanner({
  title = "Ready to hand over your accounting?",
  description = "Get a free quote in 2 minutes. No commitment, cancel anytime.",
  primary = { label: "Get my free quote", href: "/contact" },
  secondary = { label: `Call ${siteConfig.phone.display}`, href: siteConfig.phone.href },
}: CtaBannerProps) {
  return (
    <Section spacing="sm" labelledBy="cta-title">
      <Container>
        <Reveal direction="scale">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-linear-to-br from-brand-50 via-white to-lavender-50 px-6 py-12 text-center ring-1 ring-brand-100 sm:px-12 sm:py-16">
            {/* soft brand glows + dot texture */}
            <div aria-hidden="true" className="absolute -left-16 -top-20 -z-10 size-72 rounded-full bg-brand-200/60 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 -right-16 -z-10 size-72 rounded-full bg-lavender-300/50 blur-3xl" />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(var(--color-brand-200)_1px,transparent_1px)] bg-size-[20px_20px] opacity-40 mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-black/5">
              <BrandMark className="size-9" />
            </span>
            <h2 id="cta-title" className="mx-auto mt-5 max-w-2xl text-balance text-h2 font-bold tracking-tight text-ink">
              {title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-body sm:text-base">{description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={primary.href} className={buttonClasses({ size: "lg" })}>
                {primary.label}
              </Link>
              <Link href={secondary.href} className={buttonClasses({ size: "lg", variant: "outline" })}>
                {secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
