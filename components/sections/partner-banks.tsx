import Image from "next/image";
import { banks } from "@/data/home";
import { cn } from "@/lib/cn";
import { Highlight } from "@/components/ui/highlight";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** Infinite logo strip. Pauses on hover; becomes a static wrapped grid for reduced motion. */
export function PartnerBanks() {
  const loop = [...banks, ...banks];

  return (
    <Section labelledBy="banks-title">
      <Container>
        <SectionHeading
          id="banks-title"
          align="center"
          emoji="👉"
          title={
            <>
              Works with <Highlight variant="underline" tone="lavender">your bank</Highlight>
            </>
          }
          description="Our app connects to all the most common banks. Your transactions sync automatically — no manual imports."
        />
      </Container>

      <Reveal delay={120} className="group relative mx-auto mt-10 max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:[mask-image:none]">
        <ul className="flex w-max gap-4 py-2 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-5">
          {loop.map((bank, i) => {
            const duplicate = i >= banks.length;
            return (
              <li
                key={`${bank.name}-${i}`}
                aria-hidden={duplicate || undefined}
                className={cn(
                  "flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl bg-white px-4 text-center shadow-card ring-1 ring-black/[0.04] transition-transform duration-300 hover:-translate-y-0.5 sm:h-[72px] sm:w-48 motion-reduce:w-[calc(50%-0.5rem)] sm:motion-reduce:w-48",
                  duplicate && "motion-reduce:hidden",
                )}
              >
                {bank.logo ? (
                  <Image src={bank.logo} alt={duplicate ? "" : bank.name} width={160} height={48} sizes="160px" className="max-h-9 w-auto object-contain" />
                ) : (
                  <span className={cn("text-sm leading-tight sm:text-[15px]", bank.wordmarkClassName)}>{bank.name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>

      <p className="mt-6 text-center text-sm font-medium text-brand-700">…and many more.</p>
    </Section>
  );
}
