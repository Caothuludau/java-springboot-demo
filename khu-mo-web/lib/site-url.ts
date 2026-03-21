/**
 * Canonical site origin for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (no trailing slash).
 */
export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (raw) {
    try {
      return new URL(raw);
    } catch {
      // fall through to dev default
    }
  }
  return new URL("http://localhost:3000");
}
