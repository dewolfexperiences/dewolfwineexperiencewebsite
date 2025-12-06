"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    // Simple bot trap: if filled, treat as spam and bail silently.
    if (honeypot) {
      setStatus("success");
      setError(null);
      return;
    }

    setStatus("submitting");
    setError(null);

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, email }),
    });

    if (response.ok) {
      setStatus("success");
      setFirstName("");
      setEmail("");
    } else {
      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      setError(data?.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-slate-800"
        >
          First name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="First name"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-brand-burgundy-400 focus:outline-none focus:ring-2 focus:ring-brand-burgundy-100"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-slate-800"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-brand-burgundy-400 focus:outline-none focus:ring-2 focus:ring-brand-burgundy-100"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-burgundy-800 disabled:cursor-not-allowed disabled:opacity-80"
      >
        {status === "submitting" ? "Joining..." : "Join the list"}
      </button>
      {status === "success" ? (
        <p className="text-sm font-semibold text-green-700">
          You&apos;re in! Check your inbox for updates. Cheers!
        </p>
      ) : null}
      {status === "error" && error ? (
        <p className="text-sm font-semibold text-red-700">{error}</p>
      ) : null}
      <div className="flex items-center gap-3 text-sm text-slate-600">
        <div className="h-px flex-1 bg-slate-200" />
        <span>or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="flex flex-wrap gap-3 text-sm font-semibold text-brand-burgundy-800">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:shadow"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:shadow"
        >
          LinkedIn
        </a>
        <a
          href="mailto:info@thedewolfwineexperience.com"
          className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-[1px] hover:shadow"
        >
          info@thedewolfwineexperience.com
        </a>
      </div>
    </form>
  );
}
