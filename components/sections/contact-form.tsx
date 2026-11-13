"use client";

import { useActionState, useEffect, useRef } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { submitContact } from "@/app/actions";
import type { ContactState } from "@/lib/contact";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/ui/button";
import { InputField, TextareaField } from "@/components/ui/form-field";

const initialState: ContactState = { status: "idle" };

export function ContactForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const e = state.errors ?? {};

  return (
    <form ref={formRef} action={formAction} noValidate className={cn("relative grid gap-4 sm:grid-cols-2 sm:gap-5", className)}>
      <InputField id="lastName" label="Last name *" autoComplete="family-name" required error={e.lastName} />
      <InputField id="firstName" label="First name *" autoComplete="given-name" required error={e.firstName} />
      <InputField id="phone" label="Phone number" type="tel" autoComplete="tel" inputMode="tel" error={e.phone} />
      <InputField id="email" label="Email address *" type="email" autoComplete="email" required error={e.email} />
      <TextareaField id="message" label="Your message *" rows={6} required error={e.message} wrapperClassName="sm:col-span-2" />

      {/* Honeypot for bots — hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="company_website">Website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-5">
        <button type="submit" disabled={pending} className={buttonClasses({ size: "lg", className: "group w-full sm:w-auto" })}>
          {pending ? (
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
          {pending ? "Sending…" : "Send my message!"}
        </button>
        <p role="status" aria-live="polite" className={cn("text-sm", state.status === "error" ? "text-red-500" : "text-brand-700")}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
