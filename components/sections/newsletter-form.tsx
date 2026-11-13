"use client";

import { useActionState } from "react";
import { LoaderCircle } from "lucide-react";
import { subscribeNewsletter } from "@/app/actions";
import type { NewsletterState } from "@/lib/contact";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/ui/button";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, initialState);

  return (
    <form action={formAction} className={cn("w-full max-w-lg", className)} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:bg-white sm:p-1.5 sm:shadow-card sm:ring-1 sm:ring-line sm:transition sm:focus-within:ring-2 sm:focus-within:ring-brand-500">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email address"
          aria-invalid={state.status === "error" || undefined}
          aria-describedby="newsletter-status"
          className="h-12 w-full min-w-0 rounded-full bg-white px-6 text-sm text-ink shadow-card outline-none ring-1 ring-line placeholder:text-body focus:ring-2 focus:ring-brand-500 sm:h-10 sm:bg-transparent sm:px-5 sm:flex-1 sm:shadow-none sm:ring-0 sm:focus:ring-0"
        />
        <button type="submit" disabled={pending} className={buttonClasses({ size: "md", className: "sm:h-10" })}>
          {pending && <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />}
          Subscribe now!
        </button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={cn("mt-2 min-h-5 px-5 text-xs", state.status === "error" ? "text-red-500" : "text-brand-700")}
      >
        {state.message}
      </p>
    </form>
  );
}
