import { Advisory } from "@/components/sections/advisory";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { PartnerBanks } from "@/components/sections/partner-banks";
import { Pricing } from "@/components/sections/pricing";
import { Software } from "@/components/sections/software";
import { Steps } from "@/components/sections/steps";
import { Testimonials } from "@/components/sections/testimonials";
import { Vision } from "@/components/sections/vision";
import { JsonLd } from "@/components/seo/json-ld";
import { plans } from "@/data/home";
import { siteConfig } from "@/data/site";

/** Structured data so search engines understand the business. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  image: `${siteConfig.url}/opengraph-image`,
  telephone: siteConfig.phone.e164,
  email: siteConfig.email,
  areaServed: "FR",
  // TODO: add `aggregateRating` once you have the real Trustpilot review count.
  makesOffer: plans.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.description,
    price: plan.price,
    priceCurrency: "EUR",
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={websiteJsonLd} />
      <Hero />
      <Steps />
      <Pricing />
      <Advisory />
      <Software />
      <Vision />
      <Testimonials />
      <PartnerBanks />
      <Contact />
    </>
  );
}
