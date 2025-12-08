import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getSortedPosts } from "../posts";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog post not found | DeWolf Wine Experience Podcast",
    };
  }

  const title = `${post.title} | DeWolf Wine Experience Podcast Blog`;

  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: "article",
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = formatDate(post.date);
  const morePosts = getSortedPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-gold-50 via-white to-brand-burgundy-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-gold-100/60 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-brand-burgundy-100/50 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.3fr,0.9fr] md:py-24">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/80 px-3 py-2 text-brand-burgundy-800 shadow-sm ring-1 ring-brand-burgundy-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-700">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 ring-1 ring-slate-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 4h10M7 20h10M5 8h14M5 16h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 ring-1 ring-slate-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6v6l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {post.readTime}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={post.podcastUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-burgundy-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-burgundy-700"
              >
                ▶ {post.podcastTitle}
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-brand-burgundy-200 bg-white px-5 py-3 text-sm font-semibold text-brand-burgundy-800 transition hover:border-brand-burgundy-400 hover:text-brand-burgundy-900"
              >
                Back to blog
              </Link>
            </div>
          </div>
          <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-brand-burgundy-100/60">
            <div className="relative aspect-[4/3]">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 420px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          {post.sections.map((section, index) => (
            <section
              key={section.heading ?? `section-${index}`}
              className="space-y-4"
            >
              {section.heading ? (
                <h2 className="text-2xl font-semibold text-slate-900">
                  {section.heading}
                </h2>
              ) : null}
              <div className="space-y-3 text-lg leading-relaxed text-slate-800">
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-burgundy-50 via-white to-brand-gold-50 p-8 shadow-lg md:grid-cols-[1.3fr,0.7fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                Key takeaways
              </h2>
              <ul className="space-y-3 text-lg leading-relaxed text-slate-800">
                {post.takeaways.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-burgundy-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-burgundy-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
                Listen to the episode
              </p>
              <p className="mt-2 text-lg text-slate-800">
                Stream the full conversation and grab the show notes for your
                tasting or service prep.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-burgundy-800">
                <a
                  href={post.podcastUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-brand-burgundy-800 px-4 py-2 text-white transition hover:bg-brand-burgundy-700"
                >
                  ▶ Open episode
                </a>
                <Link
                  href="/#listen"
                  className="text-brand-burgundy-800 underline underline-offset-4 transition hover:text-brand-burgundy-700"
                >
                  Browse all podcast platforms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {morePosts.length > 0 ? (
        <section className="bg-white pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-3xl font-bold text-slate-900">
                More synopses
              </h2>
              <Link
                href="/blog"
                className="text-sm font-semibold text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
              >
                View all posts &rarr;
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {morePosts.map((item) => (
                <article
                  key={item.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-brand-burgundy-50">
                    <Image
                      src={item.heroImage}
                      alt={item.heroImageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
                      <span className="rounded-full bg-brand-burgundy-50 px-3 py-1 text-brand-burgundy-800">
                        {item.tags[0]}
                      </span>
                      <span className="text-slate-600">{formatDate(item.date)}</span>
                      <span className="text-slate-500">{item.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="group-hover:text-brand-burgundy-800"
                    >
                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-slate-700">{item.excerpt}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-burgundy-800">
                      <Link
                        href={`/blog/${item.slug}`}
                        className="flex items-center gap-2 rounded-full bg-brand-burgundy-800 px-4 py-2 text-white transition hover:bg-brand-burgundy-700"
                      >
                        Read synopsis
                      </Link>
                      <a
                        href={item.podcastUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
                      >
                        ▶ Listen
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
