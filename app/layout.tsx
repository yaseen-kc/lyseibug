import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Common/Footer";
import type { Metadata, Viewport } from "next";
import { BRAND_NAME } from "@/constants/content";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import {
  DEFAULT_SEO,
  SITE_URL,
  buildOpenGraph,
  buildTwitterCard,
  buildLocalBusinessJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/constants/seo";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: DEFAULT_SEO.titleTemplate,
    default: DEFAULT_SEO.defaultTitle,
  },
  description: DEFAULT_SEO.description,
  applicationName: BRAND_NAME,
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "ERP",
    "IT support",
    "custom software",
    "Lyseibug",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: buildOpenGraph({
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.description,
    url: SITE_URL,
  }),
  twitter: buildTwitterCard({
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.description,
  }),
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@graph": [
                buildOrganizationJsonLd(),
                buildWebsiteJsonLd(),
                buildLocalBusinessJsonLd(),
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
