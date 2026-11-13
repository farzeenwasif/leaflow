import Link from "next/link";
import { footerColumns, siteConfig } from "@/data/site";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="relative mt-8">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[40%] rounded-t-[2rem] bg-lavender-50" />

      <div className="relative px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-brand-50 px-6 py-10 sm:px-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-14">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-body">
              {siteConfig.name} is a 100% online accounting firm for freelancers and small businesses.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:gap-x-12">
            {footerColumns.map((col, i) => (
              <div key={col.title} className={i === footerColumns.length - 1 ? "col-span-2 sm:col-span-1" : undefined}>
                <h2 className="text-sm font-semibold text-ink">{col.title}</h2>
                <ul className="mt-3 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm text-body transition-colors hover:text-brand-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="relative py-6 text-center text-xs font-medium text-body">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
