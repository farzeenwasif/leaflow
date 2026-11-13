import { Container } from "@/components/ui/layout";

export type LegalSection = { title: string; body: string[] };

type LegalPageProps = {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Readable long-form layout for legal pages, with a sticky table of contents on desktop. */
export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <article className="relative isolate pb-20 pt-12 sm:pt-16">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-80 bg-linear-to-b from-brand-50 to-transparent" />
      <Container>
        <header className="max-w-3xl">
          <h1 className="text-[2rem] font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-body">Last updated: {updated}</p>
          {intro && <p className="mt-5 text-base leading-relaxed text-body">{intro}</p>}
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-28 space-y-2 border-l border-line text-sm">
              {sections.map((s) => (
                <li key={s.title}>
                  <a href={`#${slug(s.title)}`} className="-ml-px block border-l-2 border-transparent pl-4 text-body transition hover:border-brand-500 hover:text-ink">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl space-y-10">
            {sections.map((s) => (
              <section key={s.title} id={slug(s.title)} aria-labelledby={`${slug(s.title)}-h`}>
                <h2 id={`${slug(s.title)}-h`} className="text-xl font-bold text-ink">
                  {s.title}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-body">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
