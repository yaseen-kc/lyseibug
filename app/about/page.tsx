import type { Metadata } from "next";
// import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import WhyUs from "@/components/WhyUs";
import AboutHero from "@/components/About/AboutHero";
import VisionMission from "@/components/About/VisionMission";
import { absoluteUrl, buildOpenGraph, buildTwitterCard } from "@/constants/seo";

export const metadata: Metadata = {
  title: "About Lyseibug | Software Development Agency & IT Consulting",
  description:
    "Learn about Lyseibug—your trusted partner for custom software, mobile apps, ERP solutions, and proactive IT support that fuel business growth.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: buildOpenGraph({
    title: "About Lyseibug | Software Development Agency & IT Consulting",
    description:
      "Learn about Lyseibug—your trusted partner for custom software, mobile apps, ERP solutions, and proactive IT support that fuel business growth.",
    url: absoluteUrl("/about"),
  }),
  twitter: buildTwitterCard({
    title: "About Lyseibug | Software Development Agency & IT Consulting",
    description:
      "Learn about Lyseibug—your trusted partner for custom software, mobile apps, ERP solutions, and proactive IT support that fuel business growth.",
  }),
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <WhyUs />
      {/* <CaseStudies /> */}
      <CTA />
    </>
  );
}
