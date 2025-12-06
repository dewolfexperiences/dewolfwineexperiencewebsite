export const metadata = {
  title: "Privacy Policy | DeWolf Wine Experience",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="text-slate-700">
          We collect your email (and first name when provided) solely to send
          podcast updates, events, and related content. We never sell your data.
        </p>
        <p className="text-slate-700">
          If you want your information removed, email us at{" "}
          <a
            href="mailto:info@thedewolfwineexperience.com"
            className="text-brand-burgundy-800 underline"
          >
            info@thedewolfwineexperience.com
          </a>
          .
        </p>
        <p className="text-slate-700">
          This site uses analytics and error logging to improve the experience.
          By using the site, you consent to this policy.
        </p>
      </div>
    </div>
  );
}
