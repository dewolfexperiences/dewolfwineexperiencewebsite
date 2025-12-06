import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MotionDiv } from "../components/motion";

export const metadata: Metadata = {
  title: "About Mark DeWolf | DeWolf Wine Experience Podcast",
  description:
    "Learn about sommelier, writer and educator Mark DeWolf. Certified since 2001 and a leader in Canadian wine, events and hospitality.",
};

export default function AboutPage() {
  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-burgundy-50 via-white to-brand-gold-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-brand-burgundy-200 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-brand-gold-200 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.15fr,0.85fr] md:py-20">
          <MotionDiv {...sectionAnimation} className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
              About Mark DeWolf
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              About Mark DeWolf
            </h1>
            <p className="text-lg text-slate-700">
              Mark DeWolf is a Halifax based sommelier, writer, educator, event
              creator and travel host. Certified since 2001, he has spent more
              than two decades shaping how Canadians experience wine and
              hospitality.
            </p>
            <p className="text-lg text-slate-700">
              He mentors the next generation of sommeliers, leads national
              conversations on service culture, and connects listeners to the
              people and places behind the bottles through the DeWolf Wine
              Experience podcast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#listen"
                className="rounded-full bg-brand-burgundy-800 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-burgundy-200 transition hover:bg-brand-burgundy-700"
              >
                Listen to the podcast
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border border-brand-burgundy-200 px-6 py-3 text-base font-semibold text-brand-burgundy-800 transition hover:border-brand-burgundy-400 hover:text-brand-burgundy-900"
              >
                Join the newsletter
              </Link>
            </div>
          </MotionDiv>
          <MotionDiv
            {...sectionAnimation}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto max-w-[420px] overflow-hidden rounded-3xl bg-white/70 shadow-2xl ring-1 ring-brand-burgundy-100 sm:max-w-[460px] lg:max-w-[500px]"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/mark-profile.jpg"
                alt="Portrait of sommelier Mark DeWolf"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 460px, 90vw"
                priority
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      <MotionDiv
        as="section"
        {...sectionAnimation}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-b border-slate-200 bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              A leading Canadian wine professional
            </h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>Certified sommelier since 2001.</li>
              <li>More than two decades in Canadian food and wine.</li>
              <li>
                Mentorship and national influence across the sommelier
                community.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Educator and industry leader
            </h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>
                Former National President of the Canadian Association of
                Professional Sommeliers.
              </li>
              <li>
                Sommelier instructor and supporter of Femmes du Vin and Tasting
                Climate Change.
              </li>
              <li>
                Content Manager and Editor for ASI Magazine (Association de la
                Sommellerie Internationale).
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Writer and storyteller
            </h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>
                Roles at Occasions Magazine, NSLC, SaltWire and The Coast.
              </li>
              <li>
                Focus on Atlantic Canadian restaurants, producers and culinary
                culture.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Events, festivals and experiences
            </h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>Creator of Eat Drink Halifax.</li>
              <li>Owner of DeWolf Food &amp; Wine Experiences.</li>
              <li>
                Co founder of the Halifax International Wine Festival and Spirit
                Festival.
              </li>
              <li>
                Hosts trips, dinners and tastings that bring producers and
                guests together.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              How this feeds the DeWolf Wine Experience podcast
            </h3>
            <p className="text-lg text-slate-700">
              Every episode draws on Mark&apos;s real-world work in education,
              hospitality and event creation. You get context, culture and
              practical ideas you can use at the table and in your own wine
              journey.
            </p>
            <Link
              href="/#listen"
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-burgundy-800 transition hover:text-brand-burgundy-700"
            >
              Listen to the podcast &rarr;
            </Link>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
