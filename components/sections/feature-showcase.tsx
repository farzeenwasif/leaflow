import type { ComponentType } from "react";
import { cn } from "@/lib/cn";
import { CheckList } from "@/components/ui/check-list";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import {
  BankSyncPreview,
  CardPreview,
  InvoicingPreview,
  KpiPreview,
  ReceiptsPreview,
  RecordsPreview,
} from "@/components/widgets/app-previews";
import type { AppShowcaseRow, Tone } from "@/types/content";

const previews: Record<AppShowcaseRow["preview"], ComponentType> = {
  kpi: KpiPreview,
  bank: BankSyncPreview,
  receipts: ReceiptsPreview,
  records: RecordsPreview,
  invoicing: InvoicingPreview,
  card: CardPreview,
};

const panelTone: Record<Tone, string> = {
  brand: "from-brand-100 to-brand-50",
  lavender: "from-lavender-200 to-lavender-50",
  coral: "from-coral-200 to-coral-200/30",
  sky: "from-sky-200 to-sky-100/50",
  sunny: "from-sunny-100 to-sunny-100/40",
};

const labelTone: Record<Tone, string> = {
  brand: "text-brand-700",
  lavender: "text-lavender-600",
  coral: "text-coral-500",
  sky: "text-sky-500",
  sunny: "text-ink",
};

/** Alternating "visual + copy" rows, one per product feature. */
export function FeatureShowcase({ rows }: { rows: AppShowcaseRow[] }) {
  return (
    <Section spacing="md" labelledBy="features-title">
      <h2 id="features-title" className="sr-only">
        Features
      </h2>
      <Container className="space-y-16 sm:space-y-24">
        {rows.map((row, i) => {
          const Preview = previews[row.preview];
          const reversed = i % 2 === 1;
          return (
            <article key={row.id} id={row.id} className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
              <Reveal direction={reversed ? "right" : "left"} className={cn(reversed && "md:order-2")}>
                <div className={cn("rounded-[1.75rem] bg-linear-to-br p-4 sm:p-8", panelTone[row.tone])}>
                  <div aria-hidden="true" className="rounded-2xl bg-white/90 p-4 shadow-float ring-1 ring-black/5 backdrop-blur sm:p-5">
                    <Preview />
                  </div>
                </div>
              </Reveal>
              <Reveal direction={reversed ? "left" : "right"} delay={100}>
                <p className={cn("text-xs font-bold uppercase tracking-widest", labelTone[row.tone])}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight text-ink">{row.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-body">{row.description}</p>
                <CheckList items={row.points} className="mt-5" />
              </Reveal>
            </article>
          );
        })}
      </Container>
    </Section>
  );
}
