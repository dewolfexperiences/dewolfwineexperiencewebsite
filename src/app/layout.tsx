import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StickyPlayer } from "./components/StickyPlayer";

const socialLinks = [
  {
    href: "https://www.youtube.com/@thedewolfwineexperience",
    label: "YouTube",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11 9.5v5l4-2.5-4-2.5Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/thedewolfwineexperience",
    label: "Instagram",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" />
        <circle cx="17" cy="7" r="1.25" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@dewolfwineexperience",
    label: "TikTok",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 4h2c.1 1.2.7 2.2 1.7 2.9.5.3 1.1.5 1.8.6v2c-.9-.1-1.7-.3-2.5-.7a5.6 5.6 0 0 1-.9-.6v5.6A4.2 4.2 0 0 1 12.5 18C10.6 18 9 16.4 9 14.5c0-2 1.6-3.6 3.5-3.6.2 0 .4 0 .5.1v2a1.8 1.8 0 0 0-.5-.1 1.5 1.5 0 1 0 0 3c.8 0 1.5-.7 1.5-1.5V4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "mailto:info@thedewolfwineexperience.com",
    label: "Email",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" />
        <path d="M4 7l7.447 4.468a2 2 0 0 0 2.106 0L21 7" stroke="currentColor" />
      </svg>
    ),
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 gap-4">
        <div className="flex items-center gap-3">
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
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-900 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-burgundy-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#listen"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-brand-burgundy-50"
          >
            Listen
          </Link>
          <div className="flex items-center gap-3 pl-3">
            {["TikTok", "YouTube", "Instagram"].map((label) => {
              const item = socialLinks.find((link) => link.label === label);
              if (!item) return null;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-brand-burgundy-200 hover:bg-brand-burgundy-50"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
      <div className="mx-auto block max-w-6xl px-6 pb-4 md:hidden">
        <details className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            Menu
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-slate-800"
            >
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="mt-3 space-y-3 text-sm font-medium text-slate-900">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 transition hover:bg-brand-burgundy-50"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#listen"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-brand-burgundy-800"
              >
                Listen
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {["TikTok", "YouTube", "Instagram"].map((label) => {
                const item = socialLinks.find((link) => link.label === label);
                if (!item) return null;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-brand-burgundy-200 hover:bg-brand-burgundy-50"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/dewolf-logo.svg"
                alt="DeWolf Wine Experience"
                width={180}
                height={44}
                className="h-11 w-auto"
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              DeWolf Wine Experience is recorded in Halifax, Nova Scotia and
              available wherever you get your podcasts.
            </p>
            <a
              href="https://dewolfexperiences.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
            >
              Visit dewolfexperiences.com
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 transition hover:border-brand-burgundy-200 hover:bg-brand-burgundy-50"
                >
                  <span className="text-slate-700">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              Episodes &amp; Experiences
            </h3>
            <div className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              <Link
                href="/#episodes"
                className="transition hover:text-brand-burgundy-700"
              >
                Episodes
              </Link>
              <Link
                href="/#experiences"
                className="transition hover:text-brand-burgundy-700"
              >
                Experiences
              </Link>
              <Link
                href="/#listen"
                className="transition hover:text-brand-burgundy-700"
              >
                Where to listen
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              About
            </h3>
            <div className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              <Link
                href="/about"
                className="transition hover:text-brand-burgundy-700"
              >
                About Mark
              </Link>
              <Link
                href="/#contact"
                className="transition hover:text-brand-burgundy-700"
              >
                Contact
              </Link>
              <a
                href="mailto:info@thedewolfwineexperience.com"
                className="transition hover:text-brand-burgundy-700"
              >
                info@thedewolfwineexperience.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              Policies
            </h3>
            <div className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              <Link
                href="/privacy-policy"
                className="transition hover:text-brand-burgundy-700"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="transition hover:text-brand-burgundy-700"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="transition hover:text-brand-burgundy-700"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} DeWolf Wine Experience. All rights
            reserved.
          </p>
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} bg-brand-burgundy-50 font-sans text-slate-900 antialiased`}
      >
        <SiteHeader />
        <main className="min-h-screen pb-32">{children}</main>
        <StickyPlayer />
        <SiteFooter />
      </body>
    </html>
  );
}
