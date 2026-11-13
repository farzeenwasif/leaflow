import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Legal notice",
  description: `Legal information about ${siteConfig.name}: publisher, hosting and intellectual property.`,
  alternates: { canonical: "/legal-notice" },
};

// TODO: replace every [bracketed] placeholder with your real company details before going live.
export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Legal notice"
      updated="13 November 2026"
      intro={`This page sets out the legal information relating to the ${siteConfig.name} website.`}
      sections={[
        {
          title: "Publisher",
          body: [
            `This website is published by [Company legal name], a [legal form] with a share capital of [amount], registered under number [registration number], whose registered office is at [address].`,
            `Publication director: [Name]. Contact: ${siteConfig.email} — ${siteConfig.phone.display}.`,
          ],
        },
        {
          title: "Hosting",
          body: ["This website is hosted by [Hosting provider name], [hosting provider address]."],
        },
        {
          title: "Intellectual property",
          body: [
            `All content on this website (text, graphics, logos, icons and software) is the property of ${siteConfig.name} or its partners and is protected by intellectual property laws.`,
            "Any reproduction, representation or adaptation of all or part of the website without prior written permission is prohibited.",
          ],
        },
        {
          title: "Liability",
          body: [
            `${siteConfig.name} strives to provide accurate and up-to-date information but cannot guarantee its completeness. The information on this website does not constitute personalised accounting or legal advice.`,
          ],
        },
        {
          title: "Personal data",
          body: [
            "For details about how we collect and process your personal data, please read our privacy policy.",
          ],
        },
      ]}
    />
  );
}
