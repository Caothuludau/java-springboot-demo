import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = getDictionary(locale);

  return (
    <footer className="border-t border-mineral-white/10 bg-iron-gray/35">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-mineral-white/80 md:flex-row md:items-center md:justify-between">
        <p>{t.footer.heritage}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/${locale}#contact`}
            className="inline-flex min-h-11 items-center rounded px-2 font-medium text-mineral-white transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            {t.footer.contact}
          </Link>
          <Link
            href={`/${locale}/legal/privacy`}
            className="inline-flex min-h-11 items-center rounded px-2 font-medium text-mineral-white transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            {t.footer.privacy}
          </Link>
          <Link
            href={`/${locale}/legal/terms`}
            className="inline-flex min-h-11 items-center rounded px-2 font-medium text-mineral-white transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
