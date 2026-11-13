import type { LucideIcon } from "lucide-react";

export type Tone = "brand" | "lavender" | "coral" | "sky" | "sunny";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Step = {
  title: string;
  description: string;
  tone: Tone;
};

export type Plan = {
  id: string;
  tab: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export type Feature = {
  title: string;
  detail?: string;
};

export type AppFeature = {
  id: string;
  icon: LucideIcon;
  title: string;
  detail: string;
};

export type VisionPoint = {
  icon: LucideIcon;
  tone: Tone;
  text: string;
};

export type Testimonial = {
  name: string;
  role: string;
  tone: Tone;
  quote: string;
};

export type Bank = {
  name: string;
  /** Path in /public. When omitted a styled wordmark is rendered instead. */
  logo?: string;
  wordmarkClassName?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: Tone;
};

export type Service = IconCard & {
  price: string;
};

export type ComparisonRow = {
  label: string;
  /** One value per compared plan: true = included, false = not included, string = custom value. */
  values: (boolean | string)[];
};

export type AppShowcaseRow = {
  id: string;
  title: string;
  description: string;
  points: string[];
  tone: Tone;
  preview: "kpi" | "bank" | "receipts" | "records" | "invoicing" | "card";
};
