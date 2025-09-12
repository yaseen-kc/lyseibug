import { BRAND_NAME, FOOTER_CONTENT } from "@/constants/content";

export const SITE_URL = "https://lyseibug.com";

export const DEFAULT_SEO = {
  titleTemplate: "%s | " + BRAND_NAME,
  defaultTitle: `${BRAND_NAME} — Software Development, Mobile Apps, ERP`,
  description:
    "Lyseibug builds SEO-friendly websites, high-performance mobile apps, and scalable ERP systems—backed by proactive IT support—to accelerate your digital growth.",
  ogImage:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1615&auto=format&fit=crop",
} as const;

export function absoluteUrl(pathname: string): string {
  try {
    return new URL(pathname, SITE_URL).toString();
  } catch {
    return `${SITE_URL}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
  }
}

export function buildOpenGraph(args: {
  title: string;
  description: string;
  url: string;
  images?: { url: string; width?: number; height?: number; alt?: string }[];
}) {
  return {
    title: args.title,
    description: args.description,
    url: args.url,
    type: "website" as const,
    siteName: BRAND_NAME,
    images: args.images ?? [{ url: DEFAULT_SEO.ogImage }],
  };
}

export function buildTwitterCard(args: { title: string; description: string; images?: string[] }) {
  return {
    card: "summary_large_image" as const,
    title: args.title,
    description: args.description,
    images: args.images ?? [DEFAULT_SEO.ogImage],
  };
}

export function buildOrganizationJsonLd() {
  const socials = (FOOTER_CONTENT.socials || [])
    .map((s) => s.href as string)
    .filter((href): href is string => Boolean(href));
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    email: FOOTER_CONTENT.contact.email,
    telephone: FOOTER_CONTENT.contact.phone,
    sameAs: socials,
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildServiceJsonLd(args: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    provider: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    url: args.url,
  };
  if (args.image) {
    json.image = args.image;
  }
  return json;
}


