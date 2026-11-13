import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";

export const metadata: Metadata = {
  title: "Message sent",
  robots: { index: false, follow: true },
};

export default function MessageSentPage() {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-x-clip py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-linear-to-b from-brand-50 via-brand-50/40 to-transparent" />
      <Container size="sm" className="text-center">
        <div className="relative mx-auto grid size-24 place-items-center">
          <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-brand-200 opacity-60 [animation-iteration-count:2]" />
          <span className="relative grid size-24 animate-fade-in-up place-items-center rounded-full bg-brand-500 text-white shadow-brand">
            <Check aria-hidden="true" className="size-11" strokeWidth={3} />
          </span>
        </div>
        <h1 id="page-title" className="mt-8 animate-fade-in-up text-[2rem] font-extrabold tracking-tight text-ink [animation-delay:120ms] sm:text-5xl">
          Your message has been sent!
        </h1>
        <p className="mx-auto mt-4 max-w-md animate-fade-in-up text-base leading-relaxed text-body [animation-delay:200ms]">
          Thank you for reaching out. One of our experts will get back to you within 24 hours on working days.
        </p>
        <div className="mt-8 flex animate-fade-in-up flex-col justify-center gap-3 [animation-delay:280ms] sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/our-app" variant="outline" size="lg">
            Discover the app
          </Button>
        </div>
      </Container>
    </section>
  );
}
