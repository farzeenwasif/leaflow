import type { Metadata } from "next";
import { appShowcase } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { AppPhonesVisual } from "@/components/widgets/page-visuals";

export const metadata: Metadata = {
  title: "The accounting app for freelancers & SMEs",
  description: `Real-time dashboards, automatic bank sync, receipt scanning, invoicing and a business card — the ${siteConfig.name} app does your bookkeeping for you.`,
  alternates: { canonical: "/our-app" },
};

export default function OurAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Our app"
        title={
          <>
            An <Highlight variant="underline">innovative</Highlight> app, made for everyone
          </>
        }
        description="Invoicing, receipts, bank sync and live dashboards — everything in one simple app, connected to your accountant."
        actions={
          <>
            <Button href="/contact" size="lg">
              Get started
            </Button>
            <Button href="#sales" variant="outline" size="lg">
              Explore features
            </Button>
          </>
        }
        footer={<p className="text-[13px] text-body">Available on web, iOS and Android</p>}
        visual={<AppPhonesVisual />}
      />

      <FeatureShowcase rows={appShowcase} />

      <CtaBanner
        title="Your accounting app, with an expert inside"
        description={`Join ${siteConfig.name} and let the app — and your accountant — do the work.`}
        primary={{ label: "Get started", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
