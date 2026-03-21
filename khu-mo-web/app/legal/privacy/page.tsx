import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Khu Mo brochure website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-6 text-base leading-7 text-zinc-300">
        This is a placeholder privacy policy for the Khu Mo brochure website.
        The final policy will describe what personal data is collected, how it
        is used, and how visitors can request updates or deletion of their
        information.
      </p>
      <p className="mt-4 text-base leading-7 text-zinc-300">
        For now, enquiries submitted through the contact form are handled only
        for response and follow-up purposes.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-amber-400 hover:text-amber-300"
      >
        Back to home
      </Link>
    </main>
  );
}
