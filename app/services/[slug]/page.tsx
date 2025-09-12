import type { Metadata } from "next";
import ServicesDetailHero from "@/components/Services/ServicesDetail";
import OurApproach from "@/components/Services/OurApproach";
import Services from "@/components/Services";
import {
  SERVICE_DETAILS,
  SERVICES_CONTENT,
  SERVICES_PAGE_LIST,
} from "@/constants/services";
import { BRAND_NAME } from "@/constants/content";
import { notFound } from "next/navigation";
import {
  absoluteUrl,
  buildOpenGraph,
  buildTwitterCard,
  buildServiceJsonLd,
} from "@/constants/seo";

// Per‑service SEO overrides (title, description, keywords)
const SEO_OVERRIDES: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "web-development": {
    title: "Web Development Services | Custom Websites & Web Apps | Lyseibug",
    description:
      "Custom web development services for fast, secure, SEO‑optimized websites and web apps. Improve Core Web Vitals, search rankings, and conversions.",
    keywords: [
      "web development services",
      "custom website development",
      "seo optimized websites",
      "core web vitals optimization",
      "next.js development",
      "react web apps",
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development | iOS & Android Apps | Lyseibug",
    description:
      "End‑to‑end mobile app development for iOS & Android—user‑centric design, high performance, secure architecture, and faster time‑to‑market.",
    keywords: [
      "mobile app development",
      "ios app development",
      "android app development",
      "cross‑platform apps",
      "react native",
      "flutter",
    ],
  },
  "erp-solutions": {
    title: "ERP Solutions | Custom ERP Implementation & Integration | Lyseibug",
    description:
      "Custom ERP solutions to automate workflows, centralize data, and enable real‑time visibility—reducing costs and improving decisions.",
    keywords: [
      "erp solutions",
      "custom erp development",
      "erp implementation",
      "erp integration",
      "business process automation",
    ],
  },
  "software-rescue": {
    title:
      "Software Rescue | Legacy Modernization & Code Refactoring | Lyseibug",
    description:
      "Rescue failing software projects with rapid audits, stabilization, refactoring, and delivery—turn legacy code into reliable, maintainable software.",
    keywords: [
      "software rescue",
      "legacy modernization",
      "code refactoring",
      "technical debt reduction",
      "stabilize software",
    ],
  },
  "it-support-consultancy": {
    title:
      "Managed IT Support & Consultancy | Security, Monitoring, Strategy | Lyseibug",
    description:
      "Managed IT support and strategic consultancy to secure systems, ensure compliance, reduce downtime, and align IT with business goals.",
    keywords: [
      "managed it support",
      "it consulting",
      "it security",
      "it monitoring",
      "compliance",
      "infrastructure management",
    ],
  },
};

export function generateStaticParams() {
  const slugs = [
    ...SERVICES_CONTENT.items.map((i) => i.slug),
    ...SERVICES_PAGE_LIST.map((i) => i.slug),
  ];
  return Array.from(new Set(slugs)).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug as keyof typeof SERVICE_DETAILS];
  if (!detail) return {};
  const override = SEO_OVERRIDES[detail.slug];
  const titleText =
    override?.title ??
    `${detail.hero.title.line1} ${detail.hero.title.line2} | ${BRAND_NAME}`;
  const descriptionText = override?.description ?? detail.hero.description;
  const url = absoluteUrl(`/services/${detail.slug}`);
  const imageUrl = detail.hero.image?.src;
  return {
    title: titleText,
    description: descriptionText,
    keywords: override?.keywords,
    alternates: { canonical: url },
    openGraph: buildOpenGraph({
      title: titleText,
      description: descriptionText,
      url,
      images: imageUrl
        ? [{ url: imageUrl, alt: detail.hero.image.alt }]
        : undefined,
    }),
    twitter: buildTwitterCard({
      title: titleText,
      description: descriptionText,
      images: imageUrl ? [imageUrl] : undefined,
    }),
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug as keyof typeof SERVICE_DETAILS];
  if (!detail) return notFound();

  return (
    <>
      <ServicesDetailHero content={detail.hero} />
      <OurApproach content={detail.approach} />
      <Services />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Services",
                item: absoluteUrl("/services"),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: `${detail.hero.title.line1} ${detail.hero.title.line2}`,
                item: absoluteUrl(`/services/${detail.slug}`),
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildServiceJsonLd({
              name: `${detail.hero.title.line1} ${detail.hero.title.line2}`,
              description: detail.hero.description,
              url: absoluteUrl(`/services/${detail.slug}`),
              image: detail.hero.image?.src,
            })
          ),
        }}
      />
    </>
  );
}
