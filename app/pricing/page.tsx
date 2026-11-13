import type { Metadata } from "next";
import { comparisonPlans, comparisonRows, pricingFaq, services } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { Highlight } from "@/components/ui/highlight";
import { PageHero } from "@/components/ui/page-hero";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { IconCardGrid } from "@/components/sections/icon-card-grid";
import { PlanCards } from "@/components/sections/plan-cards";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Simple, transparent pricing for online accounting. ${siteConfig.name} plans start at €45 excl. tax per month, with no commitment and no setup fees.`,
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            A complete solution at an <Highlight variant="underline">unbeatable</Highlight> price
          </>
        }
        description="Transparent monthly plans with your accountant, the app and all your filings included."
        footer={
          <ul className="flex flex-wrap justify-center gap-2">
            {["No setup fees", "Cancel anytime", "Prices excl. VAT"].map((t) => (
              <li key={t} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-body shadow-card ring-1 ring-black/5">
                {t}
              </li>
            ))}
          </ul>
        }
        className="pb-10 sm:pb-12"
      />

      <PlanCards />
      <ComparisonTable plans={comparisonPlans} rows={comparisonRows} />

      <IconCardGrid
        id="services-title"
        emoji="➕"
        title={
          <>
            Our <Highlight tone="coral">complementary</Highlight> services
          </>
        }
        description="Add only what you need, whenever you need it."
        items={services}
        columns={4}
      />

      <Faq items={pricingFaq} />
      <CtaBanner title="Not sure which plan fits?" description="Tell us about your business and we'll recommend the best option — for free." primary={{ label: "Get a free quote", href: "/contact" }} />
    </>
  );
}
