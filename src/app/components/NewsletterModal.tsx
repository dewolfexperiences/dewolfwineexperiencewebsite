"use client";

import { useEffect, useState } from "react";
import { NewsletterForm } from "./NewsletterForm";

const STORAGE_KEY = "dewolf-newsletter-modal-dismissed";

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedVisit, setCheckedVisit] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = window.localStorage.getItem(STORAGE_KEY);
      if (!hasSeen) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    } finally {
      setCheckedVisit(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "seen");
    } catch {
      // If localStorage fails we still close the modal.
    }
  };

  if (!checkedVisit || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-burgundy-200 hover:text-brand-burgundy-800"
          aria-label="Close newsletter signup"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="grid gap-8 bg-gradient-to-r from-brand-burgundy-50 via-white to-brand-gold-50 p-8 md:grid-cols-[1.05fr,0.95fr] md:p-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-burgundy-800">
              Newsletter
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Stay in the glass
            </h2>
            <p className="text-lg text-slate-700">
              Get new episodes, event announcements and wine travel ideas
              delivered to your inbox. We only send the good stuff.
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-700">
              Available on Spotify, Apple Podcasts, YouTube Music and all major
              platforms.
            </p>
          </div>
          <div className="rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-slate-200 backdrop-blur">
            <NewsletterForm onSuccess={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
