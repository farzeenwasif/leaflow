import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";

/**
 * Brand symbol: a sprout of two leaves — lavender behind, green in front — whose
 * midrib is a rising growth chart ending in a sunny dot. Pure SVG, no image request.
 *
 * Every instance shares the same gradient definition; that's safe because the
 * definitions are identical, so whichever one the browser resolves looks the same.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={cn("shrink-0", className)}>
      <defs>
        <linearGradient id="brand-leaf" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#178f4f" />
          <stop offset="1" stopColor="#2ed47a" />
        </linearGradient>
      </defs>
      <path d="M16 33C6 29 2 18 6 6C17 9 22 21 16 33Z" className="fill-lavender-400" />
      <path d="M10 35C10 20 20 9 35 8C35 23 25 34 10 35Z" fill="url(#brand-leaf)" />
      <path d="M14.5 30.5L20 24.5L23.5 27L30 15.5" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30.3" cy="15" r="2.4" className="fill-sunny-300" />
    </svg>
  );
}

type LogoProps = { className?: string };

/** Brand mark + wordmark linking back to the homepage. */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn("group inline-flex shrink-0 items-center gap-2", className)}
    >
      <BrandMark className="size-8 transition-transform duration-500 ease-(--ease-out-expo) group-hover:-rotate-6 group-hover:scale-110 md:size-9" />
      <span className="text-xl font-extrabold tracking-tight text-ink md:text-[1.375rem]">
        {siteConfig.name}
        <span className="text-brand-500">.</span>
      </span>
    </Link>
  );
}
