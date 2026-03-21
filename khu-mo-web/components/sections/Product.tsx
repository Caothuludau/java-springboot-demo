import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getProductImageByKey } from "@/lib/site-config";

const featuredProducts = [
  {
    key: "highland-reserve",
    name: "Highland Reserve",
    nameVi: "Highland Reserve",
    blurb: "Smoky, dry finish with layered grain depth.",
    blurbVi: "Hau vi khoi nhe, khoo, va nhieu tang huong ngu coc.",
    categoryKey: "signature",
  },
  {
    key: "copper-bloom",
    name: "Copper Bloom",
    nameVi: "Copper Bloom",
    blurb: "Floral nose with soft spice and warm mineral notes.",
    blurbVi: "Huong hoa, gia vi mem va khoang chat am ap.",
    categoryKey: "limited",
  },
  {
    key: "river-stone",
    name: "River Stone",
    nameVi: "River Stone",
    blurb: "Clean profile built for cocktails and premium pours.",
    blurbVi: "Ho so vi sach, phu hop cocktail va phuc vu cao cap.",
    categoryKey: "contemporary",
  },
] as const;

type ProductProps = {
  locale: Locale;
};

export function Product({ locale }: ProductProps) {
  const t = getDictionary(locale);
  const categoryMap = {
    signature: t.product.categories.signature,
    limited: t.product.categories.limited,
    contemporary: t.product.categories.contemporary,
  } as const;

  return (
    <Section id="product" eyebrow={t.product.eyebrow} title={t.product.title}>
      <div className="grid gap-4 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <article
            key={product.key}
            className="rounded border border-mineral-white/15 bg-iron-gray/35 p-4"
          >
            <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded border border-mineral-white/10">
              <Image
                src={getProductImageByKey(product.key) ?? "/images/product-card.svg"}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {categoryMap[product.categoryKey]}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-mineral-white">
              {locale === "vi" ? product.nameVi : product.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-mineral-white/85">
              {locale === "vi" ? product.blurbVi : product.blurb}
            </p>
            <ButtonLink
              href={`/${locale}?interest=${encodeURIComponent(product.name)}#contact`}
              variant="ghost"
              className="mt-5 w-full"
            >
              {t.product.enquire}
            </ButtonLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
