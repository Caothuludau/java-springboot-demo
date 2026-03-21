import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { getDictionary, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

const tiles = [
  "Mountain Source",
  "Copper Stills",
  "Cellar Resting",
  "Bottling Bench",
  "Ritual Pour",
  "Night Service",
] as const;

type GalleryProps = {
  locale: Locale;
};

export function Gallery({ locale }: GalleryProps) {
  const t = getDictionary(locale);

  return (
    <Section id="gallery" eyebrow={t.gallery.eyebrow} title={t.gallery.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile, index) => (
          <figure
            key={tile}
            className="relative flex aspect-[4/3] items-end overflow-hidden rounded border border-mineral-white/15 bg-gradient-to-br from-iron-gray to-charcoal p-4"
          >
            <Image
              src={siteConfig.gallery.images[index] ?? "/images/section-image.svg"}
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(176,141,87,0.35),_transparent_60%)]" />
            <figcaption className="relative text-sm font-medium uppercase tracking-[0.12em] text-mineral-white/90">
              {tile}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
