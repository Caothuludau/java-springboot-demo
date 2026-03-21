import type { Locale } from "@/lib/i18n";

export type NavLink = {
  href: string;
  label: string;
};

export function getNavLinks(locale: Locale, labels: Record<string, string>): NavLink[] {
  return [
    { href: `/${locale}#story`, label: labels.story },
    { href: `/${locale}#product`, label: labels.product },
    { href: `/${locale}#process`, label: labels.process },
    { href: `/${locale}#gallery`, label: labels.gallery },
    { href: `/${locale}#contact`, label: labels.contact },
  ];
}
