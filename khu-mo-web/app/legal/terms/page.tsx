import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use placeholder for Khu Mo brochure website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Use</h1>
      <p className="mt-6 text-base leading-7 text-zinc-300">
        This is a placeholder terms page for the Khu Mo brochure website. The
        final terms will cover permitted site usage, content ownership,
        liability limitations, and contact details for legal inquiries.
      </p>
      <p className="mt-4 text-base leading-7 text-zinc-300">
        By using this website, visitors acknowledge that product and event
        information may change and should be confirmed directly before placing
        any order or booking.
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
