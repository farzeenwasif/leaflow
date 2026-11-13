import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { LegalPage } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal data.`,
  alternates: { canonical: "/privacy-policy" },
};

// TODO: have this policy reviewed by a legal professional before going live.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="13 November 2026"
      intro={`${siteConfig.name} is committed to protecting your personal data and respecting your privacy in accordance with the General Data Protection Regulation (GDPR).`}
      sections={[
        {
          title: "Data we collect",
          body: [
            "When you use our contact form or subscribe to our newsletter, we collect your name, email address, phone number and the content of your message.",
          ],
        },
        {
          title: "Why we use it",
          body: [
            "We use this data only to answer your requests, prepare quotes and, if you agreed, send you our newsletter. We never sell your data.",
          ],
        },
        {
          title: "How long we keep it",
          body: ["Prospect data is kept for up to 3 years after our last contact, unless you ask us to delete it earlier."],
        },
        {
          title: "Your rights",
          body: [
            `You can access, correct, delete or export your data, and object to its processing, at any time by writing to ${siteConfig.email}.`,
            "You may also lodge a complaint with your national data protection authority.",
          ],
        },
        {
          title: "Cookies",
          body: ["This website only uses cookies that are strictly necessary for it to work. No advertising cookies are used."],
        },
      ]}
    />
  );
}
