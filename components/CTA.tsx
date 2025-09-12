import { CTA_CONTENT } from "@/constants/content";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:py-16">
        <div className="relative rounded-3xl border border-indigo-200/50 bg-[#cfe2ff]/80 p-6 shadow-md backdrop-blur sm:p-8 md:p-12 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            // style={{
            //   backgroundImage:
            //     "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
            //   backgroundSize: "14px 14px",
            // }}
          />
          <div className="text-center">
            <h2 className="mx-auto max-w-4xl text-2xl font-extrabold leading-tight text-indigo-950 sm:text-3xl md:text-4xl lg:text-5xl">
              {CTA_CONTENT.headingLine1}
              <br className="hidden sm:block" /> {CTA_CONTENT.headingLine2}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
              {CTA_CONTENT.description}
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={CTA_CONTENT.cta.href}
                className="rounded-full bg-indigo-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4"
              >
                {CTA_CONTENT.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
