import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ArrowLinkProps = { href: string; children: ReactNode; className?: string };

/** Inline text link with an arrow that nudges forward on hover. */
export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 underline-offset-4 transition-colors hover:text-brand-700 hover:underline",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
