import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ContactSection from "@/components/Contact/ContactSection";
import { absoluteUrl, buildOpenGraph, buildTwitterCard } from "@/constants/seo";

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
  return (
    <>
      <ContactSection />
      <CTA />
    </>
  );
}
