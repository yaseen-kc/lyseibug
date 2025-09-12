import Link from "next/link";
import { type ServiceDetailApproachContent } from "@/constants/services";

type Props = { content: ServiceDetailApproachContent };

export default function OurApproach({ content: C }: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:max-w-4xl lg:py-20">
        {/* Intro */}
        <h2 className="text-2xl font-semibold tracking-tight text-indigo-950 sm:text-3xl">
          {C.introTitle}
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg">
          {C.introText}
        </p>

        {/* Numbered steps */}
        <div className="mt-6 space-y-5 sm:mt-8">
          {C.steps.map((step, index) => (
            <div key={step.title} className="">
              <p className="text-slate-800">
                <span className="font-semibold">{index + 1}. {step.title}: </span>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="mt-10 sm:mt-12">
          <h3 className="text-xl font-semibold text-indigo-900 sm:text-2xl">
            {C.whyTitle}
          </h3>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-slate-800">
            {C.whyBullets.map((b) => (
              <li key={b.title} className="">
                <span className="font-semibold">{b.title}:</span> {b.text}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12">
          <h3 className="text-xl font-semibold text-indigo-900 sm:text-2xl">
            {C.cta.title}
          </h3>
          <p className="mt-3 text-slate-700">{C.cta.text}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={C.cta.primary.href}
              className="inline-flex items-center justify-center rounded-full bg-indigo-900 px-8 py-3 font-semibold text-white shadow-sm hover:bg-indigo-800"
            >
              {C.cta.primary.label}
            </Link>
            <Link
              href={C.cta.secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-indigo-900 px-8 py-3 font-semibold text-indigo-900 hover:bg-indigo-50"
            >
              {C.cta.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


