import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const currentLocale: Locale = locale;
  const t = getDictionary(currentLocale);
  return {
    title: t.legal.privacyTitle,
    description: t.legal.privacyDescription,
  };
}

export default async function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const currentLocale: Locale = locale;
  const t = getDictionary(currentLocale);

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">{t.legal.privacyTitle}</h1>
      <p className="mt-6 text-base leading-7 text-zinc-300">{t.legal.privacyBody1}</p>
      <p className="mt-4 text-base leading-7 text-zinc-300">{t.legal.privacyBody2}</p>
      <Link
        href={`/${currentLocale}`}
        className="mt-8 inline-block text-sm font-medium text-amber-400 hover:text-amber-300"
      >
        {t.legal.backHome}
      </Link>
    </main>
  );
}
