import type { NavLink, FooterColumn } from "@/types/content";

/**
 * Global, site-wide configuration. Change contact details, navigation
 * and footer links here — every component reads from this file.
 */
export const siteConfig = {
  name: "Leaflow",
  // TODO: set NEXT_PUBLIC_SITE_URL to your real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  title: "Leaflow — Online accounting for freelancers & small businesses",
  description:
    "Leaflow is a 100% online accounting firm for freelancers and small businesses: a dedicated certified accountant, a free accounting app, bank sync and commitment-free plans from €45/month.",
  locale: "en_GB",
  phone: { display: "+92 316 8709967", href: "tel:+923168709967", e164: "+923168709967" },
  email: "farzeenwasif15@gmail.com",
  cta: { label: "Book an appointment", href: "/contact" },
} as const;

export const mainNav: NavLink[] = [
  { label: "Accounting", href: "/accounting" },
  { label: "Company creation", href: "/company-creation" },
  { label: "Our app", href: "/our-app" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  { title: "Our site", links: mainNav },
  {
    title: "Legal",
    links: [
      { label: "Legal notice", href: "/legal-notice" },
      { label: "Privacy policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { label: "Facebook", href: "https://www.facebook.com", external: true },
      { label: "Instagram", href: "https://www.instagram.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
    ],
  },
  {
    title: "Help & support",
    links: [
      { label: siteConfig.phone.display, href: siteConfig.phone.href },
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    ],
  },
];
