import type { Metadata } from "next";
import { BRAND_NAME, FAQ_CONTENT } from "@/constants/content";
import { absoluteUrl, buildOpenGraph, buildTwitterCard } from "@/constants/seo";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: `FAQs | ${BRAND_NAME}`,
  description: FAQ_CONTENT.description,
  alternates: { canonical: absoluteUrl("/faq") },
  openGraph: buildOpenGraph({
    title: `FAQs | ${BRAND_NAME}`,
    description: FAQ_CONTENT.description,
    url: absoluteUrl("/faq"),
  }),
  twitter: buildTwitterCard({
    title: `FAQs | ${BRAND_NAME}`,
    description: FAQ_CONTENT.description,
  }),
};

export default function FaqPage() {
  const faqs = FAQ_CONTENT.faqs;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section
        className="relative overflow-hidden border-b border-gray-200/60"
        style={{
          backgroundColor: "#e8f0ff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(2,6,23,.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
              {FAQ_CONTENT.badge}
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl md:text-5xl">
              {FAQ_CONTENT.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
              {FAQ_CONTENT.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {faqs.map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-7"
              >
                <h2 className="text-lg font-semibold text-indigo-900 md:text-xl">
                  {item.q}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
