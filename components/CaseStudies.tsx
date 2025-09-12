import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { CASE_STUDIES_CONTENT } from "@/constants/content";

function StatPill({ type, label }: { type: "chart" | "growth"; label: string }) {
  const icon = type === "growth" ? faChartLine : faChartBar;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
      <FontAwesomeIcon icon={icon} className="h-4 w-4 text-emerald-500" />
      <span>{label}</span>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            {CASE_STUDIES_CONTENT.badge}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl md:text-5xl">
            {CASE_STUDIES_CONTENT.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
            {CASE_STUDIES_CONTENT.description}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {CASE_STUDIES_CONTENT.items.map((item) => (
            <article
              key={item.title}
              className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6"
            >
              {/* dotted rail */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-2 top-2 -z-10 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-2xl"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
                  backgroundSize: "14px 14px",
                }}
              />

              <div className="px-2 text-center">
                <div className="text-xs font-medium text-slate-500">
                  {item.client}
                </div>
                <h3 className="mt-1 text-lg font-semibold leading-7 text-indigo-900 md:text-xl">
                  {item.title}
                </h3>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={960}
                  height={640}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-5 flex flex-col items-center gap-3">
                {item.stats.map((s) => (
                  <StatPill key={s.label} type={s.icon} label={s.label} />
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href={item.cta.href}
                  className="rounded-full bg-indigo-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 md:px-7 md:py-3.5 md:text-base"
                >
                  {item.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <a
            href={CASE_STUDIES_CONTENT.viewAll.href}
            className="rounded-full border border-indigo-900 bg-white px-6 py-3 text-sm font-semibold text-indigo-900 shadow-sm transition-colors hover:bg-indigo-50 md:px-8 md:py-4 md:text-base"
          >
            {CASE_STUDIES_CONTENT.viewAll.label}
          </a>
        </div>
      </div>
    </section>
  );
}


