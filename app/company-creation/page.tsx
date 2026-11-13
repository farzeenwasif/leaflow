import type { Metadata } from "next";
import { audiences, creationFaq, creationSteps } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { IconCardGrid } from "@/components/sections/icon-card-grid";
import { Timeline } from "@/components/sections/timeline";
import { CreationTracker, CreationVisual } from "@/components/widgets/page-visuals";

export const metadata: Metadata = {
  title: "Create your company for free",
  description: `${siteConfig.name} creates your company for free: legal advice, statutes, capital deposit and registry filing handled by experts in 5 to 10 days.`,
  alternates: { canonical: "/company-creation" },
};

export default function CompanyCreationPage() {
  return (
    <>
      <PageHero
        eyebrow="Company creation"
        title={
          <>
            We create your company <Highlight variant="underline">for free</Highlight>
          </>
        }
        description="From choosing the right structure to receiving your registration certificate, our experts handle every step — online and in record time."
        actions={
          <>
            <Button href="/contact" size="lg">
              Start my project
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              How it works
            </Button>
          </>
        }
        footer={<p className="text-[13px] text-body">✓ Statutes drafted by experts &nbsp; ✓ 5–10 working days &nbsp; ✓ 100% online</p>}
        visual={<CreationVisual />}
      />

      <IconCardGrid
        id="audiences-title"
        emoji="🎯"
        title={
          <>
            For every professional, <Highlight tone="lavender">the right solution</Highlight>
          </>
        }
        description="Whatever your activity, we help you choose the structure that protects you and optimises your taxes."
        items={audiences}
      />

      <div id="how-it-works">
        <Timeline
          id="timeline-title"
          emoji="🛠️"
          title={
            <>
              How does it <Highlight tone="sky">work</Highlight>?
            </>
          }
          description="Four simple steps, followed in real time from your dashboard."
          steps={creationSteps}
          aside={<CreationTracker />}
        />
      </div>

      <Faq items={creationFaq} />
      <CtaBanner title="Ready to launch your business?" description="Tell us about your project — an expert calls you back within 24 hours." primary={{ label: "Start my project", href: "/contact" }} />
    </>
  );
}
