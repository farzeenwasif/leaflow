import type { Metadata } from "next";
import { mainNav } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { BrandMark } from "@/components/ui/logo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-x-clip py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-linear-to-b from-lavender-50 via-brand-50/40 to-transparent" />
      <Container size="sm" className="text-center">
        <div aria-hidden="true" className="relative mx-auto flex w-fit items-center gap-2 text-[7rem] font-extrabold leading-none tracking-tighter text-ink sm:text-[10rem]">
          <span>4</span>
          <BrandMark className="size-24 -rotate-12 animate-float sm:size-36" />
          <span>4</span>
        </div>
        <h1 id="page-title" className="mt-8 text-[1.75rem] font-extrabold tracking-tight text-ink sm:text-4xl">
          This page went missing
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-body">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
        <nav aria-label="Popular pages" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-2">
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="rounded-full bg-white px-3.5 py-1.5 text-sm text-body shadow-card ring-1 ring-black/5 transition hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
