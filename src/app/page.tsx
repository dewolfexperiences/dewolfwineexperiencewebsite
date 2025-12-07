import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./components/NewsletterForm";

const featuredEpisodes = [
  {
    title: "Nova Scotia sparklers and coastal terroir",
    description:
      "Why Atlantic Canada bubbles are earning global respect and how coastal climate shapes the glass.",
    tag: "Terroir",
  },
  {
    title: "Pairing wine with real weeknight cooking",
    description:
      "Practical pairings pulled from chef-driven dinners and Mark's own events for everyday menus.",
    tag: "Food & Wine Pairing",
  },
  {
    title: "Hospitality, service and storytelling",
    description:
      "Mentoring young sommeliers, building programs and the role of narrative in guest experience.",
    tag: "Hospitality",
  },
];

const asSeenIn = [
  "Canadian Association of Professional Sommeliers",
  "Association de la Sommellerie Internationale",
  "Eat Drink Halifax",
  "SaltWire",
  "The Coast",
];

export default function Home() {
  return (
    <>
      <section
        id="listen"
        className="relative overflow-hidden bg-white"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-gold-50 opacity-90" />
          <div className="absolute -left-24 top-8 h-80 w-80 rounded-full bg-brand-gold-100/60 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-burgundy-100/50 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.2fr,1fr] md:py-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
              <span className="h-[2px] w-8 bg-brand-burgundy-700" />
              Wine, Food, Hospitality
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              The DeWolf Wine Experience Podcast
            </h1>
            <p className="text-xl font-semibold text-slate-900">
              The DeWolf Wine Experience is a wine and food culture podcast
              hosted by Halifax-based sommelier, writer and event creator Mark
              DeWolf. For more than two decades he has helped shape how
              Canadians experience food and wine through Eat Drink Halifax,
              DeWolf Food &amp; Wine Experiences and the Halifax International
              Wine Festival.
            </p>
            <p className="text-lg leading-relaxed text-slate-900">
              For Mark, wine is not just a list of flavours or a score. It is an
              experience rooted in memory, culture and the connections we share
              around the table.
            </p>
            <p className="text-lg leading-relaxed text-slate-900">
              Each episode uncorks the people, places and traditions behind the
              bottles we love, from Nova Scotia and Atlantic Canada to classic
              and emerging wine regions around the world.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#listen"
                className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-burgundy-200 transition hover:-translate-y-[1px]"
                style={{
                  backgroundColor: "#8b3030",
                  boxShadow:
                    "0 10px 25px -10px rgba(139, 48, 48, 0.45), 0 10px 50px -12px rgba(139, 48, 48, 0.35)",
                }}
              >
                Listen to the podcast
              </Link>
              <Link
                href="#episodes"
                className="rounded-full border border-brand-burgundy-200 px-6 py-3 text-base font-semibold text-brand-burgundy-800 transition hover:border-brand-burgundy-400 hover:text-brand-burgundy-900"
              >
                View latest episodes
              </Link>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-700">
                Listen on Apple Podcasts, Spotify, Google Podcasts, or wherever
                you get your podcasts.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-800">
                <Link
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:shadow"
                >
                  Apple Podcasts
                </Link>
                <Link
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:shadow"
                >
                  Spotify
                </Link>
                <Link
                  href="https://podcasts.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:shadow"
                >
                  Google Podcasts
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-transparent px-4 py-2 text-brand-burgundy-800 transition hover:border-brand-burgundy-200 hover:bg-brand-burgundy-50"
                >
                  More platforms
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-white/60 shadow-lg" />
            <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-3xl bg-white/60 shadow-2xl ring-1 ring-brand-burgundy-100 sm:max-w-[420px] lg:max-w-[460px]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/mark-profile.jpg"
                  alt="Sommelier Mark DeWolf enjoying wine in Halifax"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 90vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-sm font-semibold text-slate-700">
          <span className="flex items-center gap-2 uppercase tracking-[0.2em] text-brand-burgundy-800">
            <span className="h-[2px] w-6 bg-brand-burgundy-700" />
            Mark DeWolf has led and written for
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {asSeenIn.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="episodes"
        className="bg-white py-16 sm:py-20 md:py-24"
        aria-labelledby="featured-episodes"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
                Start listening
              </p>
              <h2
                id="featured-episodes"
                className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl"
              >
                Start with these episodes
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-700">
                A short list of episodes to dive into terroir, practical pairing
                and how hospitality really works.
              </p>
            </div>
            <Link
              href="#"
              className="text-sm font-semibold text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
            >
              Browse all episodes &rarr;
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredEpisodes.map((episode) => (
              <article
                key={episode.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <span className="inline-flex rounded-full bg-brand-burgundy-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-burgundy-800">
                    {episode.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {episode.title}
                  </h3>
                  <p className="text-slate-700">{episode.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-brand-burgundy-800">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-full bg-brand-burgundy-800 px-4 py-2 text-white transition hover:bg-brand-burgundy-700"
                  >
                    ▶ Play episode
                  </Link>
                  <Link
                    href="#"
                    className="text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
                  >
                    View show notes
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-900 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
                What the podcast is about
              </p>
              <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                What you will hear on The DeWolf Wine Experience
              </h2>
              <p className="text-lg text-slate-700">
                The DeWolf Wine Experience is for curious wine drinkers,
                hospitality professionals and anyone who loves the intersection
                of wine, food, and travel.
              </p>
              <ul className="space-y-4 text-base text-slate-800">
                <li>
                  <span className="font-semibold text-brand-burgundy-800">
                    Wine regions and terroir:
                  </span>{" "}
                  conversations with winemakers, sommeliers and producers from
                  Nova Scotia, Europe, North America and beyond, with a focus on
                  place and climate.
                </li>
                <li>
                  <span className="font-semibold text-brand-burgundy-800">
                    Food and wine pairing:
                  </span>{" "}
                  practical ideas from chef-driven dinners, restaurant programs
                  and Mark&apos;s events.
                </li>
                <li>
                  <span className="font-semibold text-brand-burgundy-800">
                    Hospitality and service culture:
                  </span>{" "}
                  insight from a former national president of the Canadian
                  Association of Professional Sommeliers, showing how
                  storytelling and guest experience work in real life.
                </li>
                <li>
                  <span className="font-semibold text-brand-burgundy-800">
                    Travel and experiences:
                  </span>{" "}
                  stories from DeWolf Food &amp; Wine Experiences trips, Eat
                  Drink Halifax collaborations, and festivals such as the
                  Halifax International Wine Festival.
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
              <Image
                src="/mark-duoro.jpg"
                alt="Mark DeWolf visiting a vineyard in the Douro Valley"
                width={700}
                height={560}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-white py-16 sm:py-20 md:py-24"
        aria-labelledby="hosted-by"
      >
        <div className="mx-auto max-w-4xl space-y-4 px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
            Host
          </p>
          <h2
            id="hosted-by"
            className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Hosted by Mark DeWolf
          </h2>
          <p className="text-lg text-slate-700">
            Mark DeWolf is a Halifax-based sommelier, writer, event creator and
            travel host. He is the creator of Eat Drink Halifax, owner of DeWolf
            Food &amp; Wine Experiences, co-founder of the Halifax International
            Wine Festival and a former national president of the Canadian
            Association of Professional Sommeliers.
          </p>
          <p className="text-lg text-slate-700">
            His philosophy is simple: make wine welcoming and unpretentious, and
            help people find what they actually enjoy.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-burgundy-800"
          >
            Learn more about Mark
          </Link>
        </div>
      </section>

      <section
        id="experiences"
        className="bg-white py-16 sm:py-20 md:py-24"
        aria-labelledby="experiences-title"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr,0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
              Experiences &amp; events
            </p>
            <h2
              id="experiences-title"
              className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              DeWolf Food &amp; Wine Experiences
            </h2>
            <p className="text-lg text-slate-800">
              From Halifax International Wine Festival to chef-driven dinners
              and travel itineraries, the podcast is connected to real-world
              events and hospitality.
            </p>
            <ul className="space-y-3 text-slate-800">
              <li>Halifax International Wine Festival and Spirit Festival</li>
              <li>Eat Drink Halifax collaborations and seasonal dinners</li>
              <li>Travel-focused DeWolf Food &amp; Wine Experiences tours</li>
              <li>Behind-the-scenes stories from producers and partners</li>
            </ul>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-brand-burgundy-800">
              <Link
                href="#"
                className="rounded-full bg-brand-burgundy-800 px-4 py-2 text-white transition hover:bg-brand-burgundy-700"
              >
                View upcoming events
              </Link>
              <Link
                href="#contact"
                className="text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
              >
                Host a tasting or dinner
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-brand-gold-100">
            <Image
              src="/mark-experiences.jpg"
              alt="Wine experience at DeWolf Food & Wine"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-white py-16 sm:py-20 md:py-24"
        aria-labelledby="newsletter"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-burgundy-50 via-white to-brand-gold-50 p-10 shadow-xl">
            <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
                  Newsletter
                </p>
                <h2
                  id="newsletter"
                  className="font-serif text-3xl font-bold text-slate-900 sm:text-4xl"
                >
                  Stay in the glass
                </h2>
                <p className="text-lg text-slate-700">
                  Get new episodes, event announcements and wine travel ideas
                  delivered to your inbox.
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-700">
                  Available on Apple Podcasts, Spotify and all major platforms.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
