import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "soft";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 ease-(--ease-out-expo) active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-500 text-white shadow-brand hover:-translate-y-0.5 hover:bg-brand-600",
  outline: "border-[1.5px] border-brand-500 bg-white text-ink hover:-translate-y-0.5 hover:bg-brand-50",
  soft: "bg-white text-ink shadow-card hover:-translate-y-0.5 hover:text-brand-600",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm sm:text-[15px]",
};

type StyleProps = { variant?: Variant; size?: Size; className?: string };

export function buttonClasses({ variant = "primary", size = "md", className }: StyleProps = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type LinkButtonProps = StyleProps & { href: string; children: ReactNode } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type NativeButtonProps = StyleProps & { href?: undefined; children: ReactNode } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

/** Renders a `<Link>` when `href` is set, otherwise a `<button>`. */
export function Button(props: LinkButtonProps | NativeButtonProps) {
  if (props.href !== undefined) {
    const { variant, size, className, children, href, ...rest } = props;
    return (
      <Link href={href} className={buttonClasses({ variant, size, className })} {...rest}>
        {children}
      </Link>
    );
  }
  const { variant, size, className, children, type = "button", ...rest } = props;
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
