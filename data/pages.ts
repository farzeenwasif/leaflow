import {
  Briefcase,
  Building2,
  Calculator,
  Clock,
  FilePen,
  Gift,
  Hammer,
  HandCoins,
  Headset,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Scale,
  Stamp,
  Store,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import { siteConfig } from "./site";
import type { AppShowcaseRow, ComparisonRow, FaqItem, IconCard, Service, Step } from "@/types/content";

/**
 * Content for the inner pages. Copy lives here; page files only compose sections.
 * Prices and service details marked TODO are placeholders to confirm.
 */

const BRAND = siteConfig.name;

/* ------------------------------------------------------------------ */
/*  Accounting                                                         */
/* ------------------------------------------------------------------ */

export const accountingReasons: IconCard[] = [
  {
    icon: UserRound,
    title: "A dedicated accountant",
    description: "One certified expert who knows your business, reachable by chat, email or phone all year round.",
    tone: "brand",
  },
  {
    icon: Calculator,
    title: "Smart software included",
    description: "Bank sync, invoicing, receipts and live dashboards — your books stay up to date automatically.",
    tone: "sky",
  },
  {
    icon: Wallet,
    title: "One fixed monthly price",
    description: "No hidden fees and no commitment. You know exactly what you pay, every month.",
    tone: "lavender",
  },
];

export const accountingIncluded: string[] = [
  "Bookkeeping and bank reconciliation",
  "Annual accounts and balance sheet",
  "Corporate and income tax returns",
  "VAT returns (monthly or quarterly)",
  "Unlimited advice from your accountant",
  "Invoicing, quotes and expense tracking",
  "Real-time dashboards and cash-flow forecasts",
  "Secure, legally valid document archive",
];

export const accountingStats = [
  { value: "24h", label: "Average response time" },
  { value: "60+", label: "Industries supported" },
  { value: "4.7/5", label: "Average client rating" },
];

export const accountingFaq: FaqItem[] = [
  {
    question: `Can I switch to ${BRAND} during the financial year?`,
    answer:
      "Yes. We contact your previous accountant to retrieve your files and take over from there — the switch is free and usually takes less than two weeks.",
  },
  {
    question: "Who prepares my annual accounts?",
    answer: "Your dedicated certified accountant prepares, reviews and files your annual accounts and tax returns.",
  },
  {
    question: "Is there a minimum commitment?",
    answer: "No. Our plans are monthly and you can cancel at any time with one month's notice.",
  },
  {
    question: "Which business structures do you support?",
    answer: "Sole traders, micro-entrepreneurs, SAS, SASU, SARL, EURL, SCI and liberal professions, among others.",
  },
  {
    question: "How do I send you my documents?",
    answer:
      "Everything goes through the app: your bank transactions sync automatically and you can snap or forward receipts in seconds.",
  },
];

/* ------------------------------------------------------------------ */
/*  Company creation                                                   */
/* ------------------------------------------------------------------ */

export const audiences: IconCard[] = [
  { icon: Briefcase, title: "Freelancers", description: "Consultants, designers, developers — launch your activity in days.", tone: "brand" },
  { icon: Store, title: "Shop owners", description: "Retail and e-commerce businesses ready to open their doors.", tone: "coral" },
  { icon: Scale, title: "Liberal professions", description: "Lawyers, doctors, architects and other regulated professions.", tone: "lavender" },
  { icon: Rocket, title: "Start-ups", description: "Founders who need the right structure to raise funds and grow.", tone: "sky" },
  { icon: Hammer, title: "Craftspeople", description: "Builders, artisans and makers starting their own business.", tone: "sunny" },
  { icon: Users, title: "Partners & associates", description: "Several founders? We help you set up a fair shareholding.", tone: "brand" },
];

export const creationSteps: Step[] = [
  {
    title: "Tell us about your project",
    description: "Answer a short questionnaire online. An expert calls you to choose the right legal structure.",
    tone: "brand",
  },
  {
    title: "We draft your statutes",
    description: "Our legal team prepares tailored statutes and every document needed for registration.",
    tone: "sky",
  },
  {
    title: "Sign and deposit your capital",
    description: "Sign electronically and deposit your share capital with your bank — we guide you step by step.",
    tone: "lavender",
  },
  {
    title: "Your company is registered",
    description: "We file the formalities and send you your registration certificate. You're ready to trade!",
    tone: "coral",
  },
];

export const creationFaq: FaqItem[] = [
  {
    question: "Is company creation really free?",
    answer: `Yes — when you subscribe to a ${BRAND} accounting plan, we cover our fees for creating your company. Only mandatory legal publication and registry fees remain.`,
  },
  {
    question: "How long does it take to create my company?",
    answer: "Usually between 5 and 10 working days, depending on how quickly the capital is deposited and the registry responds.",
  },
  {
    question: "Which legal structure should I choose?",
    answer: "It depends on your activity, revenue and plans. Your expert compares the options with you before anything is filed.",
  },
  {
    question: "Can you register a company with several partners?",
    answer: "Absolutely. We draft statutes for multiple shareholders and advise on how to split the capital.",
  },
];

/* ------------------------------------------------------------------ */
/*  Our app                                                            */
/* ------------------------------------------------------------------ */

export const appShowcase: AppShowcaseRow[] = [
  {
    id: "sales",
    title: "Track your sales in real time",
    description: "See revenue, margin and cash runway update as money comes in — no more waiting for month-end.",
    points: ["Live revenue and margin", "Custom dashboards", "Monthly comparisons"],
    tone: "lavender",
    preview: "kpi",
  },
  {
    id: "transactions",
    title: "Your transactions, categorised for you",
    description: "Bank transactions sync automatically and are sorted into the right category. Adjust anything in one tap.",
    points: ["Multi-bank sync", "Smart categorisation", "Instant search"],
    tone: "sky",
    preview: "bank",
  },
  {
    id: "receipts",
    title: "Snap your receipts, we do the rest",
    description: "Take a photo or forward an email — receipts are read and matched to the right transaction automatically.",
    points: ["Photo & email capture", "Automatic matching", "No more shoe boxes"],
    tone: "coral",
    preview: "receipts",
  },
  {
    id: "paperless",
    title: "Go 100% paperless",
    description: "Every document is archived with a certified timestamp, so your digital copies are legally valid.",
    points: ["Certified timestamp", "10-year retention", "One-click sharing"],
    tone: "sunny",
    preview: "records",
  },
  {
    id: "invoicing",
    title: "Quotes and invoices in seconds",
    description: "Create professional quotes, turn them into invoices and let automatic reminders chase late payments.",
    points: ["Branded templates", "Quote-to-invoice", "Automatic reminders"],
    tone: "brand",
    preview: "invoicing",
  },
  {
    id: "card",
    title: "A business card that does the bookkeeping",
    description: "Pay with your business card and every expense lands in your books instantly, with its receipt attached.",
    points: ["Instant notifications", "Spending limits", "Virtual cards"],
    tone: "lavender",
    preview: "card",
  },
];

/* ------------------------------------------------------------------ */
/*  Pricing                                                            */
/* ------------------------------------------------------------------ */

/** Column headers for the comparison table — keep in sync with `plans` in data/home.ts. */
export const comparisonPlans = ["Freelancer", "Small business"];

export const comparisonRows: ComparisonRow[] = [
  { label: "Dedicated certified accountant", values: [true, true] },
  { label: "Accounting app & bank sync", values: [true, true] },
  { label: "Invoicing & quotes", values: [true, true] },
  { label: "Receipt capture", values: [true, true] },
  { label: "Annual accounts & tax returns", values: [true, true] },
  { label: "VAT returns", values: ["Quarterly", "Monthly or quarterly"] },
  { label: "Company creation", values: [true, true] },
  { label: "Real-time dashboards", values: [true, true] },
  { label: "Multi-bank & multi-user", values: [false, true] },
  { label: "Payroll management", values: [false, "Option"] },
  { label: "Quarterly review call", values: [false, true] },
  { label: "Priority support", values: [false, true] },
];

// TODO: confirm the prices of the complementary services.
export const services: Service[] = [
  { icon: HandCoins, title: "Payroll", description: "Payslips, social declarations and employee onboarding.", price: "from €25 / payslip", tone: "brand" },
  { icon: Stamp, title: "Legal secretarial", description: "Annual general meeting, approval of accounts and filings.", price: "from €29 / month", tone: "lavender" },
  { icon: FilePen, title: "Personal tax return", description: "Your personal income tax return, prepared by an expert.", price: "from €99 / year", tone: "coral" },
  { icon: Building2, title: "Business address", description: "A professional registered address with mail scanning.", price: "from €19 / month", tone: "sky" },
];

export const pricingFaq: FaqItem[] = [
  {
    question: "Are your prices excluding tax?",
    answer: "Yes, all prices are shown excluding VAT and billed monthly.",
  },
  {
    question: "Can I change plan later?",
    answer: "Of course. You can upgrade or downgrade at any time — the change applies from the next month.",
  },
  {
    question: "Are there any setup fees?",
    answer: "No setup fees. If you're switching from another accountant, the transfer of your files is free too.",
  },
  {
    question: "What happens if my business grows?",
    answer: "Your accountant reviews your plan with you each year and suggests the best fit for your new size.",
  },
];

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */

export const contactChannels = [
  { icon: Phone, label: "Call us", value: siteConfig.phone.display, href: siteConfig.phone.href },
  { icon: Mail, label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Opening hours", value: "Mon – Fri, 9am – 7pm" },
  // TODO: replace with your real office address.
  { icon: MapPin, label: "Office", value: "10 Example Street, 75000 Paris" },
];

export const contactPerks = [
  { icon: Headset, text: "A real expert answers — no bots" },
  { icon: Gift, text: "Free, no-obligation quote" },
  { icon: Lightbulb, text: "Personalised advice for your project" },
];
