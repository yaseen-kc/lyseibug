import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
// import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import { SITE_URL, buildOpenGraph, buildTwitterCard } from "@/constants/seo";

export const metadata: Metadata = {
  title: "Software Development Company | Web, Mobile, ERP | Lyseibug",
  description:
    "Lyseibug builds SEO-friendly websites, high-performance mobile apps, and scalable ERP systems—backed by proactive IT support—to accelerate your digital growth.",
  alternates: { canonical: SITE_URL },
  openGraph: buildOpenGraph({
    title: "Software Development Company | Web, Mobile, ERP | Lyseibug",
    description:
      "Lyseibug builds SEO-friendly websites, high-performance mobile apps, and scalable ERP systems—backed by proactive IT support—to accelerate your digital growth.",
    url: SITE_URL,
  }),
  twitter: buildTwitterCard({
    title: "Software Development Company | Web, Mobile, ERP | Lyseibug",
    description:
      "Lyseibug builds SEO-friendly websites, high-performance mobile apps, and scalable ERP systems—backed by proactive IT support—to accelerate your digital growth.",
  }),
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      {/* <CaseStudies /> */}
      <CTA />
    </>
  );
}
