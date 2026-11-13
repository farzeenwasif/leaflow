import { Check, Minus } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ComparisonRow } from "@/types/content";

type ComparisonTableProps = {
  plans: string[];
  rows: ComparisonRow[];
};

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-grid size-6 place-items-center rounded-full bg-brand-500 text-white">
        <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
        <span className="sr-only">Included</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-grid size-6 place-items-center rounded-full bg-surface text-subtle">
        <Minus aria-hidden="true" className="size-3.5" />
        <span className="sr-only">Not included</span>
      </span>
    );
  return <span className="text-xs font-semibold text-ink sm:text-sm">{value}</span>;
}

/** Semantic, responsive plan comparison table with a sticky header row. */
export function ComparisonTable({ plans, rows }: ComparisonTableProps) {
  return (
    <Section labelledBy="compare-title">
      <Container size="md">
        <SectionHeading id="compare-title" align="center" emoji="🔍" title="Compare our plans" description="Everything you need is included. Pick the plan that fits your business today — switch anytime." />
        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-black/[0.04]">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Features included in each plan</caption>
              <thead>
                <tr className="bg-brand-50/60">
                  <th scope="col" className="px-4 py-4 text-sm font-semibold text-body sm:px-6">
                    Features
                  </th>
                  {plans.map((p) => (
                    <th key={p} scope="col" className="w-28 px-2 py-4 text-center text-sm font-bold text-ink sm:w-44 sm:px-4">
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row) => (
                  <tr key={row.label} className="transition-colors hover:bg-brand-50/40">
                    <th scope="row" className="px-4 py-3.5 text-sm font-medium text-ink sm:px-6">
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-2 py-3.5 text-center sm:px-4">
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
