"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { mainNav, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Elevate the bar once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and enable Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-transparent shadow-[0_6px_24px_-12px_rgb(0_0_0/0.18)]" : "border-line",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 md:h-[68px] lg:px-12">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 hover:text-brand-600 hover:after:scale-x-100",
                    isActive(item.href) ? "text-brand-600 after:scale-x-100" : "text-ink after:scale-x-0",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button href={siteConfig.phone.href} size="sm" className="gap-2 pl-2">
            <span className="grid size-6 place-items-center rounded-full border border-white/40">
              <Phone aria-hidden="true" className="size-3" />
            </span>
            {siteConfig.phone.display}
          </Button>
          <Button href={siteConfig.cta.href} size="sm">
            {siteConfig.cta.label}
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={siteConfig.phone.href}
            aria-label={`Call us on ${siteConfig.phone.display}`}
            className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand-600 transition hover:bg-brand-100"
          >
            <Phone aria-hidden="true" className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-10 place-items-center rounded-full bg-brand-50 text-ink transition hover:bg-brand-100"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        onClick={close}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-(--ease-out-expo) xl:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Logo />
          <button type="button" onClick={close} aria-label="Close menu" className="grid size-10 place-items-center rounded-full hover:bg-surface">
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {mainNav.map((item, i) => (
              <li
                key={item.label}
                style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                className={cn("transition-all duration-500 ease-(--ease-out-expo)", open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0")}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn("block rounded-xl px-3 py-3 text-lg font-medium hover:bg-brand-50", isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 border-t border-line p-5">
          <Button href={siteConfig.phone.href} variant="outline" size="lg" className="w-full" onClick={close}>
            <Phone aria-hidden="true" className="size-4" />
            {siteConfig.phone.display}
          </Button>
          <Button href={siteConfig.cta.href} size="lg" className="w-full" onClick={close}>
            {siteConfig.cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
