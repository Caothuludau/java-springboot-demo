import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Product } from "@/components/sections/Product";
import { Story } from "@/components/sections/Story";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const currentLocale: Locale = locale;

  return (
    <div className="min-h-dvh">
      <SiteHeader locale={currentLocale} />
      <main>
        <Hero locale={currentLocale} />
        <Story locale={currentLocale} />
        <Product locale={currentLocale} />
        <Process locale={currentLocale} />
        <Gallery locale={currentLocale} />
        <Contact locale={currentLocale} />
      </main>
      <SiteFooter locale={currentLocale} />
    </div>
  );
}
