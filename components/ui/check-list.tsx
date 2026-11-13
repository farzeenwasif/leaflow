import { cn } from "@/lib/cn";
import type { Feature } from "@/types/content";
import { Reveal } from "./reveal";

const toneFill = { brand: "fill-brand-500", sky: "fill-sky-500" } as const;

function CheckBadge({ tone }: { tone: keyof typeof toneFill }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 size-5 shrink-0">
      <circle cx="10" cy="10" r="10" className={toneFill[tone]} />
      <path d="M6 10.2l2.4 2.4L14.2 7" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type CheckListProps = {
  items: (string | Feature)[];
  tone?: keyof typeof toneFill;
  /** Adds hairline separators between rows. */
  divided?: boolean;
  /** Two columns from the `sm` breakpoint. Ignored when `divided`. */
  columns?: 1 | 2;
  className?: string;
};

/** Bulleted list with check icons, revealed one row at a time. */
export function CheckList({ items, tone = "brand", divided = false, columns = 1, className }: CheckListProps) {
  return (
    <ul className={cn(divided ? "divide-y divide-line" : columns === 2 ? "grid gap-x-8 gap-y-3 sm:grid-cols-2" : "space-y-3", className)}>
      {items.map((item, i) => {
        const { title, detail } = typeof item === "string" ? { title: item, detail: undefined } : item;
        return (
          <Reveal as="li" key={title} delay={i * 70} direction="left" className={cn("flex items-start gap-3 text-[15px]", divided && "py-3")}>
            <CheckBadge tone={tone} />
            <span className="font-medium text-ink">
              {title}
              {detail && <span className="font-normal text-body"> {detail}</span>}
            </span>
          </Reveal>
        );
      })}
    </ul>
  );
}
