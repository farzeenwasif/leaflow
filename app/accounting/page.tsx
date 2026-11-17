import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { accountingFaq, accountingIncluded, accountingReasons, accountingStats } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { CheckList } from "@/components/ui/check-list";
import { Highlight } from "@/components/ui/highlight";
import { Container, Section } from "@/components/ui/layout";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { IconCardGrid } from "@/components/sections/icon-card-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { AccountingVisual } from "@/components/widgets/page-visuals";

export const metadata: Metadata = pageMetadata({
  title: "Online accounting for freelancers & SMEs",
  description: `Bookkeeping, annual accounts, tax and VAT returns handled by a dedicated certified accountant, with ${siteConfig.name}'s app included. Fixed monthly price, no commitment.`,
  path: "/accounting",
  keywords: ["online accountant", "accounting for freelancers", "bookkeeping", "tax returns", "VAT returns", "annual accounts"],
});

export default function AccountingPage() {
  return (
    <>
      <PageHero
        eyebrow="Accounting"
        title={
          <>
            Your accounting, <Highlight variant="underline">handled</Highlight> from A to Z
          </>
        }
        description="A dedicated certified accountant and a smart app that keeps your books up to date — so you can focus on your clients."
        actions={
          <>
            <Button href="/pricing" size="lg">
              See our prices
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to an expert
            </Button>
          </>
        }
        footer={
          <dl className="grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {accountingStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-ink">{s.value}</dd>
                <dd className="text-xs text-body">{s.label}</dd>
              </div>
            ))}
          </dl>
        }
        visual={<AccountingVisual />}
      />

      <IconCardGrid
        id="reasons-title"
        emoji="🏆"
        title={
          <>
            3 reasons to choose <Highlight tone="brand">{siteConfig.name}</Highlight>
          </>
        }
        description="The expertise of a traditional firm, the simplicity of an online service."
        items={accountingReasons}
      />

      <Section labelledBy="included-title">
        <Container>
          <div className="grid gap-10 rounded-[2rem] bg-lavender-50 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1fr_1.3fr] lg:gap-14 lg:px-14">
            <div>
              <SectionHeading
                id="included-title"
                emoji="📦"
                title={
                  <>
                    Everything <Highlight tone="sunny">included</Highlight>
                  </>
                }
                description="One subscription covers all your accounting, tax and reporting obligations — and unlimited advice."
              />
              <Reveal delay={150}>
                <Button href="/contact" className="mt-8">
                  Get my free quote
                </Button>
              </Reveal>
            </div>
            <CheckList items={accountingIncluded} columns={2} className="self-center" />
          </div>
        </Container>
      </Section>

      <Testimonials />
      <Faq items={accountingFaq} title={<>Your questions, <Highlight tone="coral">answered</Highlight></>} />
      <CtaBanner />
    </>
  );
}
