import { Plus } from "lucide-react";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { FaqItem } from "@/types/content";

type FaqProps = {
  items: FaqItem[];
  title?: ReactNode;
  description?: string;
};

/**
 * Accessible FAQ built on native <details> (works without JS) and emits
 * FAQPage structured data for rich results in search.
 */
export function Faq({ items, title = "Frequently asked questions", description }: FaqProps) {
  return (
    <Section labelledBy="faq-title">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <Container size="sm">
        <SectionHeading id="faq-title" align="center" emoji="💡" title={title} description={description} />
        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details className="group rounded-2xl bg-white shadow-card ring-1 ring-black/[0.04] transition-shadow open:shadow-soft open:ring-brand-100">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-ink sm:px-6 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 group-open:rotate-45">
                    <Plus aria-hidden="true" className="size-4" />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-body sm:px-6">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
