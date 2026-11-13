import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { Container } from "@/components/ui/layout";
import { ProductShot } from "@/components/widgets/product-shot";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-x-clip pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
      {/* Single soft wash of colour at the top — nothing else in the background. */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-linear-to-b from-brand-50 via-brand-50/40 to-transparent" />

      <Container>
        {/* Copy — CSS-only entrance so it paints without waiting for JS (good for LCP). */}
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="#software"
            className="group inline-flex animate-fade-in-up items-center gap-2 rounded-full bg-white py-1 pl-1 pr-3 text-xs font-medium text-body shadow-card ring-1 ring-black/5 transition hover:ring-brand-200"
          >
            <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[11px] font-semibold text-white">New</span>
            Your accountant, now inside the app
            <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <h1
            id="hero-title"
            className="mt-6 animate-fade-in-up text-balance text-[2.125rem] font-extrabold leading-[1.1] tracking-tight text-ink [animation-delay:80ms] sm:text-5xl lg:text-[3.5rem]"
          >
            Accounting that runs itself, with an <Highlight variant="underline">expert</Highlight> by your side
          </h1>

          <p className="mx-auto mt-5 max-w-xl animate-fade-in-up text-base leading-relaxed text-body [animation-delay:160ms] sm:text-lg">
            Smart bookkeeping software and a dedicated certified accountant, for freelancers and small businesses.
          </p>

          <div className="mt-8 flex animate-fade-in-up flex-col justify-center gap-3 [animation-delay:240ms] sm:flex-row">
            <Button href="#pricing" size="lg">
              Get started free
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Talk to an expert
            </Button>
          </div>

          <p className="mt-6 flex animate-fade-in-up flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] text-body [animation-delay:320ms]">
            <span className="flex items-center gap-1">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-sunny-400 text-sunny-400" />
                ))}
              </span>
              <span className="font-semibold text-ink">4.7/5</span> on Trustpilot
            </span>
            <span aria-hidden="true" className="text-line">•</span>
            <span>No commitment</span>
            <span aria-hidden="true" className="text-line">•</span>
            <span>Cancel anytime</span>
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl animate-fade-in-up [animation-delay:400ms] sm:mt-16">
          <ProductShot />
        </div>
      </Container>
    </section>
  );
}
