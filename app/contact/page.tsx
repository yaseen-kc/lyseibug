import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ContactSection from "@/components/Contact/ContactSection";
import { FOOTER_CONTENT } from "@/constants/content";
import {
  absoluteUrl,
  buildOpenGraph,
  buildTwitterCard,
  buildLocalBusinessJsonLd,
} from "@/constants/seo";

export const metadata: Metadata = {
  title: "Contact Lyseibug | Schedule a Free Consultation",
  description:
    "Have a project in mind? Contact Lyseibug to discuss custom software development, mobile apps, ERP solutions, or IT support.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: buildOpenGraph({
    title: "Contact Lyseibug | Schedule a Free Consultation",
    description:
      "Have a project in mind? Contact Lyseibug to discuss custom software development, mobile apps, ERP solutions, or IT support.",
    url: absoluteUrl("/contact"),
  }),
  twitter: buildTwitterCard({
    title: "Contact Lyseibug | Schedule a Free Consultation",
    description:
      "Have a project in mind? Contact Lyseibug to discuss custom software development, mobile apps, ERP solutions, or IT support.",
  }),
};

export default function ContactPage() {
  const contactJsonLd = {
    ...buildLocalBusinessJsonLd(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: FOOTER_CONTENT.contact.email,
        telephone: FOOTER_CONTENT.contact.phone,
        availableLanguage: ["en"],
      },
    ],
    mainEntityOfPage: absoluteUrl("/contact"),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactSection />
      <CTA />
    </>
  );
}
