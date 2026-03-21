import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { getDictionary, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = getDictionary(locale);

  return (
    <section className="relative overflow-hidden border-b border-mineral-white/10">
      <Image
        src={siteConfig.hero.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover opacity-35"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,141,87,0.2),_transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/60 to-charcoal/80" />
      <Container className="relative flex min-h-[78dvh] flex-col justify-center py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {t.hero.tagline}
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-mineral-white md:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-mineral-white/85 md:text-xl">
          {t.hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={`/${locale}#contact`}>{t.hero.primaryCta}</ButtonLink>
          <ButtonLink href={`/${locale}#product`} variant="ghost">
            {t.hero.secondaryCta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
