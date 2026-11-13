import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/data/site";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "online accountant",
    "chartered accountant",
    "accounting for freelancers",
    "accounting for small businesses",
    "SME accounting",
    "bookkeeping app",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#2ed47a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="flex min-h-dvh flex-col">
        {/* Without JavaScript, show content that would otherwise animate in. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.highlight-path{stroke-dashoffset:0!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
