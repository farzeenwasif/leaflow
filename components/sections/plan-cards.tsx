import { Sparkles } from "lucide-react";
import { plans } from "@/data/home";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { CheckList } from "@/components/ui/check-list";
import { Container } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";

const priceFormat = new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

/** Side-by-side plan cards; the popular plan is highlighted with a brand border and mint wash. */
export function PlanCards() {
  return (
    <Container>
      <ul className="grid gap-5 md:grid-cols-3 md:items-stretch lg:gap-6">
        {plans.map((plan, i) => {
          const featured = Boolean(plan.popular);
          return (
            <Reveal as="li" key={plan.id} delay={i * 100} direction="up">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-6 transition-transform duration-500 ease-(--ease-out-expo) hover:-translate-y-1.5 sm:p-7",
                  featured ? "bg-linear-to-b from-brand-50 to-white text-ink shadow-soft ring-2 ring-brand-500" : "bg-white text-ink shadow-card ring-1 ring-black/[0.04]",
                )}
              >
                {featured && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-brand-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                    <Sparkles aria-hidden="true" className="size-3" /> Most popular
                  </span>
                )}
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-700">{plan.tab}</h3>
                <p className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">{priceFormat.format(plan.price)}</span>
                  <span className="text-sm text-subtle">excl. tax / {plan.period}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">{plan.description}</p>
                <div className={cn("my-6 h-px", featured ? "bg-brand-100" : "bg-line")} />
                <div className="flex-1">
                  <CheckList items={plan.features} />
                </div>
                <Button
                  href="/contact"
                  variant={featured ? "primary" : "outline"}
                  className={cn("mt-7 w-full", !featured && "bg-transparent")}
                >
                  Choose {plan.tab.toLowerCase()}
                </Button>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Container>
  );
}
