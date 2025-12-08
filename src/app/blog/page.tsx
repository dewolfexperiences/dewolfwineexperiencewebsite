import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSortedPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog & Episode Synopses | DeWolf Wine Experience Podcast",
  description:
    "Read the latest DeWolf Wine Experience podcast synopses with show notes, keywords and links to listen. Designed for quick scanning and SEO-friendly discovery.",
};

const posts = getSortedPosts();

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-gold-50 via-white to-brand-burgundy-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-gold-100/60 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-brand-burgundy-100/50 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
              Blog &amp; show notes
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Episode synopses for search, skimming and fast listening
            </h1>
            <p className="text-lg leading-relaxed text-slate-700">
              Every post is a concise recap of the DeWolf Wine Experience
              podcast: the key tasting notes, hospitality lessons and pairing
              ideas, plus a link to the episode so you can listen immediately.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              <span className="rounded-full bg-white/80 px-3 py-2 text-brand-burgundy-800 shadow-sm ring-1 ring-brand-burgundy-100">
                SEO keywords included
              </span>
              <span className="rounded-full bg-white/70 px-3 py-2 shadow-sm ring-1 ring-slate-200">
                3-7 minute reads
              </span>
              <span className="rounded-full bg-white/70 px-3 py-2 shadow-sm ring-1 ring-slate-200">
                Direct links to listen
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#listen"
                className="rounded-full bg-brand-burgundy-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-burgundy-700"
              >
                Listen to the podcast
              </Link>
              <Link
                href="/#newsletter"
                className="rounded-full border border-brand-burgundy-200 bg-white px-5 py-3 text-sm font-semibold text-brand-burgundy-800 transition hover:border-brand-burgundy-400 hover:text-brand-burgundy-900"
              >
                Get blog updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                Latest posts
              </h2>
              <p className="mt-2 text-lg text-slate-700">
                Cards are organized by date with tags, read time, and a shortcut
                to stream the episode.
              </p>
            </div>
            <div className="hidden items-center gap-3 text-sm font-semibold text-brand-burgundy-800 md:flex">
              <span className="rounded-full bg-brand-burgundy-50 px-3 py-2">
                Built for discoverability
              </span>
              <span className="rounded-full bg-brand-gold-50 px-3 py-2 text-brand-burgundy-900">
                Skimmable show notes
              </span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden bg-brand-burgundy-50">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-burgundy-50 px-3 py-1 text-brand-burgundy-800"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-slate-600">{formatDate(post.date)}</span>
                    <span className="text-slate-500">{post.readTime}</span>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group-hover:text-brand-burgundy-800"
                    >
                      <h3 className="text-xl font-semibold text-slate-900">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-slate-700">{post.excerpt}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-burgundy-800">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 rounded-full bg-brand-burgundy-800 px-4 py-2 text-white transition hover:bg-brand-burgundy-700"
                    >
                      Read synopsis
                    </Link>
                    <a
                      href={post.podcastUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
                    >
                      ▶ Listen to episode
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
