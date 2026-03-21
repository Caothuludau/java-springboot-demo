import type { Metadata } from "next";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";

const titleDefault = "Khu Mo — Forged Below. Owned Above.";
const description =
  "Ruou thu cong cao cap voi di san nguyen ban va tinh than hien dai. Toi luyen duoi long dat, ban linh tren dinh cao.";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: titleDefault,
    template: "%s | Khu Mo",
  },
  description,
  applicationName: "Khu Mo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Khu Mo",
    title: titleDefault,
    description,
  },
  twitter: {
    card: "summary",
    title: titleDefault,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className="min-h-dvh bg-charcoal text-mineral-white antialiased">
        {children}
      </body>
    </html>
  );
}
