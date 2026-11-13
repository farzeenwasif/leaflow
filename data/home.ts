import { ChartColumn, FileText, Landmark, Leaf, Lightbulb, Puzzle, Receipt, ShieldCheck } from "lucide-react";
import { siteConfig } from "./site";
import type { AppFeature, Bank, ImageAsset, Plan, Step, Testimonial, VisionPoint } from "@/types/content";

/**
 * Homepage content. Edit copy, prices and image paths here —
 * section components only handle layout.
 */

const BRAND = siteConfig.name;

export const images = {
  advisory: { src: "/Advisory.png", alt: "Client checking her accounts on her phone while holding a coffee" },
  freelancer: { src: "/images/left-photo.jpg", alt: "Freelancer working on her laptop at a desk" },
  team: { src: "/images/team.jpg", alt: `${BRAND} accountants reviewing figures together around a laptop` },
  // TODO: replace with the dedicated portrait from the design once exported.
  vision: { src: "/images/left-photo.jpg", alt: `Entrepreneur supported by ${BRAND}` },
} satisfies Record<string, ImageAsset>;

export const steps: Step[] = [
  {
    title: "Connect your accounts and let us guide you",
    description:
      "Our app securely syncs with your business bank account. Track your key indicators in real time.",
    tone: "sky",
  },
  {
    title: "Our chartered accountants advise you",
    description:
      "Our experts answer your questions, help you optimise your business and take care of your tax returns.",
    tone: "brand",
  },
  {
    title: "Get your certified financial statements fast",
    description: "Your annual accounts are reviewed and signed off by one of our certified accountants.",
    tone: "lavender",
  },
];

// TODO: confirm the prices and features of the "Small business" and "Creation" plans.
export const plans: Plan[] = [
  {
    id: "independent",
    tab: "Freelancer",
    name: "Small offer",
    price: 45,
    period: "month",
    description:
      "A dedicated chartered accountant supports your freelance business, with full access to our pro app.",
    features: ["Company registration included", "Free accounting app", "Invoicing module"],
    popular: true,
  },
  {
    id: "company",
    tab: "Small business or company",
    name: "Business offer",
    price: 89,
    period: "month",
    description: "Complete bookkeeping, annual accounts and tax returns for growing SMEs, with a dedicated advisor.",
    features: ["Dedicated chartered accountant", "Annual accounts & tax returns", "Bank sync & invoicing"],
  },
  {
    id: "creation",
    tab: "Creation",
    name: "Launch offer",
    price: 149,
    period: "one-off",
    description: "We handle the legal formalities so you can register your company quickly and with peace of mind.",
    features: ["Statutes drafted by experts", "Registration formalities", "First 3 months of accounting free"],
  },
];

export const appFeatures: AppFeature[] = [
  {
    id: "invoicing",
    icon: FileText,
    title: "Invoicing & customer follow-up",
    detail: "Create professional invoices in seconds and get paid faster with automatic reminders.",
  },
  {
    id: "kpis",
    icon: ChartColumn,
    title: "Your key indicators",
    detail: "Cash-flow charts and unlimited custom dashboards, updated in real time.",
  },
  {
    id: "bank",
    icon: Landmark,
    title: "Bank synchronisation",
    detail: "Transactions flow in automatically and are categorised for you — no manual imports.",
  },
  {
    id: "receipts",
    icon: Receipt,
    title: "Receipt collection",
    detail: "Snap or forward your receipts and we match them to the right transaction.",
  },
  {
    id: "records",
    icon: ShieldCheck,
    title: "Legally valid records",
    detail: "Every document is archived with a certified timestamp, ready for the tax authorities.",
  },
];

export const visionPoints: VisionPoint[] = [
  { icon: Puzzle, tone: "lavender", text: "We're committed to making accounting simple for entrepreneurs." },
  { icon: Leaf, tone: "brand", text: `${BRAND} is a 100% online, 100% digital, 100% eco-friendly service.` },
  {
    icon: Lightbulb,
    tone: "coral",
    text: "We bring you the most innovative solutions and save you time by simplifying accounting and admin.",
  },
  { icon: ShieldCheck, tone: "sky", text: "We never compromise on client support — your satisfaction is our priority." },
];

export const testimonials: Testimonial[] = [
  {
    name: "Gwenaëlle",
    role: "Car dealer",
    tone: "brand",
    quote:
      `${BRAND} is an accounting firm that knows how to meet every client's needs. I highly recommend trusting these professionals.`,
  },
  {
    name: "Catherine",
    role: "Lawyer",
    tone: "lavender",
    quote:
      `I trusted ${BRAND} with my company's bookkeeping and I'm fully satisfied. Filings are always on time and their dashboard gives me a clear view of cash flow, invoicing and expenses. Clear, precise, efficient and punctual — and they're lovely!`,
  },
  {
    name: "Rémi",
    role: "Head chef",
    tone: "coral",
    quote:
      `${BRAND} supports you in every accounting aspect of your business. Their analysis tools are a real help for steering your activity and planning investments. Great expertise — I recommend them!`,
  },
];

/** Add a `logo` path (e.g. "/banks/bnp.svg") to show a real logo instead of the wordmark. */
export const banks: Bank[] = [
  { name: "Société Générale", wordmarkClassName: "font-bold uppercase tracking-wide text-ink" },
  { name: "Crédit du Nord", wordmarkClassName: "font-bold text-ink" },
  { name: "Crédit Mutuel", wordmarkClassName: "font-bold text-[#0b3d91]" },
  { name: "BNP Paribas", wordmarkClassName: "font-bold uppercase text-[#00915a]" },
  { name: "CIC", wordmarkClassName: "font-serif text-3xl font-bold text-[#1e3a8a]" },
  { name: "Banque Populaire", wordmarkClassName: "font-bold uppercase text-[#1e3a8a]" },
  { name: "Caisse d'Épargne", wordmarkClassName: "font-semibold uppercase italic tracking-widest text-red-600" },
  { name: "Crédit Agricole", wordmarkClassName: "font-bold uppercase text-[#007a5e]" },
  { name: "HSBC", wordmarkClassName: "font-serif text-3xl text-ink" },
];
