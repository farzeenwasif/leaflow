import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { IconCard, Service } from "@/types/content";

type IconCardGridProps = {
  id: string;
  emoji?: string;
  title: ReactNode;
  description?: string;
  items: (IconCard | Service)[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" } as const;

/** Section with a heading and a responsive grid of icon cards. */
export function IconCardGrid({ id, emoji, title, description, items, columns = 3, className }: IconCardGridProps) {
  return (
    <Section labelledBy={id} className={className}>
      <Container>
        <SectionHeading id={id} align="center" emoji={emoji} title={title} description={description} />
        <ul className={cn("mt-10 grid gap-4 sm:mt-12 lg:gap-5", cols[columns])}>
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % columns) * 90}>
              <Card interactive className="group flex h-full flex-col p-6">
                <IconTile
                  icon={item.icon}
                  tone={item.tone}
                  variant="soft"
                  className="size-11 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                />
                <h3 className="mt-5 text-title font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{item.description}</p>
                {"price" in item && (
                  <p className="mt-5 border-t border-line pt-4 text-sm font-bold text-brand-700">{item.price}</p>
                )}
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
