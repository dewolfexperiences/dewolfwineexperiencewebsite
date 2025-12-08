"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const defaultEmbedSrc =
  process.env.NEXT_PUBLIC_PLAYER_EMBED_SRC ||
  "https://www.youtube.com/embed?listType=search&list=DeWolf%20Wine%20Experience%20Podcast";

const platformLinks = [
  { label: "Spotify", href: "https://open.spotify.com" },
  { label: "Apple Podcasts", href: "https://podcasts.apple.com" },
  {
    label: "YouTube Music",
    href: "https://music.youtube.com/@thedewolfwineexperience",
  },
];

export function StickyPlayer() {
  const [mounted, setMounted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <div className="overflow-hidden rounded-2xl bg-slate-900 text-white shadow-2xl ring-1 ring-slate-800/70">
          <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold-100">
                Listen while you browse
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {platformLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCollapsed((prev) => !prev)}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 sm:self-center"
              aria-label={collapsed ? "Expand player" : "Collapse player"}
            >
              {collapsed ? "Show player" : "Hide player"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-white"
              >
                {collapsed ? (
                  <path
                    d="M6 15l6-6 6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
          {!collapsed ? (
            <div className="border-t border-white/10 bg-black/50">
              <iframe
                title="DeWolf Wine Experience player"
                src={defaultEmbedSrc}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="h-32 w-full"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
