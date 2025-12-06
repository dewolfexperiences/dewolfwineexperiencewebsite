export const metadata = {
  title: "Cookie Policy | DeWolf Wine Experience",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Cookie Policy</h1>
        <p className="text-slate-700">
          We use cookies and similar technologies for basic site functionality,
          analytics, and to improve the listening experience. You can control
          cookies through your browser settings.
        </p>
        <p className="text-slate-700">
          By using this site, you consent to our use of cookies as described
          here. Questions? Email{" "}
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
