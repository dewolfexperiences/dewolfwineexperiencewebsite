export const metadata = {
  title: "Terms of Service | DeWolf Wine Experience",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="text-slate-700">
          DeWolf Wine Experience provides podcast content, updates, and related
          experiences. By using this site, you agree to do so lawfully and
          acknowledge that all content is provided &quot;as is&quot; without
          warranties.
        </p>
        <p className="text-slate-700">
          We may update or change content at any time. Your continued use means
          you accept any changes. For questions, contact{" "}
          <a
            href="mailto:info@thedewolfwineexperience.com"
            className="text-brand-burgundy-800 underline"
          >
            info@thedewolfwineexperience.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
