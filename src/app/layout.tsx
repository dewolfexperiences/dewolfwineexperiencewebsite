import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "DeWolf Wine Experience Podcast | Wine & Food Culture with Sommelier Mark DeWolf",
  description:
    "A wine and food culture podcast hosted by Halifax sommelier, writer and event creator Mark DeWolf. Stories on wine regions, pairing, hospitality and travel.",
};

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <Image
            src="/dewolf-logo.svg"
            alt="DeWolf Wine Experience"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-800 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-rose-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#listen"
            className="rounded-full bg-rose-600 px-4 py-2 text-white shadow-sm transition hover:bg-rose-500"
          >
            Listen
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/dewolf-logo.svg"
            alt="DeWolf Wine Experience"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
          <p className="text-sm text-slate-600">
            DeWolf Wine Experience is recorded in Halifax, Nova Scotia and
            available wherever you get your podcasts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-rose-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
