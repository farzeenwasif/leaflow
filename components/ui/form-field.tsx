import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const control =
  "w-full bg-white text-sm text-ink placeholder:text-body shadow-card outline-none ring-1 ring-transparent transition focus:ring-2 focus:ring-brand-500 aria-[invalid=true]:ring-red-400";

type FieldWrapperProps = {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

function FieldWrapper({ id, label, error, className, children }: FieldWrapperProps) {
  return (
    <div className={className}>
      {/* Label kept for screen readers; the placeholder carries the visual cue. */}
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 px-4 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; error?: string; wrapperClassName?: string };

export function InputField({ id, label, error, wrapperClassName, className, ...props }: InputFieldProps) {
  return (
    <FieldWrapper id={id} label={label} error={error} className={wrapperClassName}>
      <input
        id={id}
        name={id}
        placeholder={label}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, "h-12 rounded-full px-6 sm:h-14 sm:px-7", className)}
        {...props}
      />
    </FieldWrapper>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string; label: string; error?: string; wrapperClassName?: string };

export function TextareaField({ id, label, error, wrapperClassName, className, ...props }: TextareaFieldProps) {
  return (
    <FieldWrapper id={id} label={label} error={error} className={wrapperClassName}>
      <textarea
        id={id}
        name={id}
        placeholder={label}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, "min-h-40 resize-y rounded-3xl px-6 py-4 sm:px-7 sm:py-5", className)}
        {...props}
      />
    </FieldWrapper>
  );
}
