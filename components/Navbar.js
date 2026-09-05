"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Accounting", href: "#" },
  { name: "Start my business", href: "#" },
  { name: "Our app", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Client access", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ECECEC] bg-white">
      <div className="mx-auto flex h-16 md:h-18 max-w-[1920px] items-center justify-between px-4 sm:px-6 xl:px-10">
        {/* Logo - always left */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Comptaways"
            width={265}
            height={58}
            priority
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-[#1D1D1D] transition-all duration-200 hover:text-[#2ED47A]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side - desktop only */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          {/* Phone */}
          <Link
            href="tel:0699107573"
            className="flex h-9 items-center gap-2 whitespace-nowrap rounded-full bg-[#2ED47A] px-3 text-white transition duration-200 hover:bg-[#25c16d]"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/40">
              <Mail size={11} strokeWidth={2} />
            </span>
            <span className="text-sm font-medium tracking-[0.01em]">
              06 99 10 75 73
            </span>
          </Link>

          {/* CTA */}
          <Link
            href="#"
            className="flex h-9 items-center whitespace-nowrap rounded-full bg-[#2ED47A] px-4 text-sm font-medium text-white transition duration-200 hover:bg-[#25c16d]"
          >
            Book an appointment
          </Link>
        </div>

        {/* Hamburger - mobile/tablet only, always right */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="flex xl:hidden shrink-0 items-center justify-center h-10 w-10 -mr-2 text-[#1D1D1D]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in drawer - half page width, full page height */}
      <div
        className={`fixed inset-y-0 right-0 z-50 h-full w-1/2 min-w-[260px] max-w-[400px] transform bg-white shadow-xl transition-transform duration-300 ease-out xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 py-6">
          <div className="flex items-center justify-end">
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="flex h-10 w-10 items-center justify-center text-[#1D1D1D]"
            >
              <X size={26} />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-[#1D1D1D]"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="tel:0699107573"
              className="mt-4 flex h-12 items-center justify-center rounded-full bg-[#2ED47A] font-medium text-white"
              onClick={() => setOpen(false)}
            >
              06 99 10 75 73
            </Link>

            <Link
              href="#"
              className="flex h-12 items-center justify-center rounded-full bg-[#2ED47A] font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}