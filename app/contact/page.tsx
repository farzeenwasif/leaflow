import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { contactChannels, contactPerks } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/card";
import { Highlight } from "@/components/ui/highlight";
import { Container } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { Faq } from "@/components/sections/faq";
import { accountingFaq } from "@/data/pages";

export const metadata: Metadata = pageMetadata({
  title: "Contact us",
  description: `Talk to a ${siteConfig.name} expert about your accounting or company creation project. Free quote, reply within 24 hours.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="page-title" className="relative isolate overflow-x-clip pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pt-20">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-linear-to-b from-brand-50 via-brand-50/40 to-transparent" />
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Info */}
          <div>
            <p className="inline-flex animate-fade-in-up items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-card ring-1 ring-brand-100">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
              Contact
            </p>
            <h1 id="page-title" className="mt-5 animate-fade-in-up text-balance text-[2rem] font-extrabold leading-[1.12] tracking-tight text-ink [animation-delay:80ms] sm:text-[2.75rem]">
              Let&apos;s talk about <Highlight variant="underline">your project</Highlight>
            </h1>
            <p className="mt-5 max-w-md animate-fade-in-up text-base leading-relaxed text-body [animation-delay:160ms]">
              Accounting, company creation or a simple question — an expert gets back to you within 24 hours.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactChannels.map((c, i) => {
                const Icon = c.icon;
                const content = (
                  <>
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-body">{c.label}</span>
                      <span className="block text-sm font-semibold break-words text-ink">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <Reveal as="li" key={c.label} delay={i * 70}>
                    {c.href ? (
                      <a href={c.href} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:shadow-soft">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/[0.04]">{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>

            <ul className="mt-8 space-y-3">
              {contactPerks.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.text} className="flex items-center gap-3 text-sm text-ink">
                    <Icon aria-hidden="true" className="size-4 text-brand-600" />
                    {p.text}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form */}
          <Reveal direction="right">
            <Card className="p-6 shadow-soft sm:p-8">
              <h2 className="text-h3 font-bold text-ink">Send us a message</h2>
              <p className="mt-1.5 text-sm text-body">Fields marked * are required.</p>
              <ContactForm className="mt-6" />
            </Card>
          </Reveal>
        </Container>
      </section>

      <Faq items={accountingFaq.slice(0, 4)} />
    </>
  );
}
