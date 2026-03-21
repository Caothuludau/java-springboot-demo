import { z } from "zod";
import rawConfig from "@/content/site-config.json";

const siteConfigSchema = z.object({
  hero: z.object({
    backgroundImage: z.string().min(1),
  }),
  story: z.object({
    image: z.string().min(1),
  }),
  product: z.object({
    items: z.array(
      z.object({
        key: z.string().min(1),
        image: z.string().min(1),
      }),
    ),
  }),
  process: z.object({
    backgroundImage: z.string().min(1),
  }),
  gallery: z.object({
    images: z.array(z.string().min(1)).min(1),
  }),
  contact: z.object({
    backgroundImage: z.string().min(1),
  }),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const siteConfig: SiteConfig = siteConfigSchema.parse(rawConfig);

export function getProductImageByKey(productKey: string): string | undefined {
  return siteConfig.product.items.find((item) => item.key === productKey)?.image;
}
