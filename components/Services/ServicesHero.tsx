import { SERVICES_HERO_CONTENT } from "@/constants/services";

export default function ServicesHero() {
  return (
    <section
      id="services-hero"
      className="relative overflow-hidden bg-white"
    >
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-24 md:pb-0 lg:pt-28 lg:pb-0">
        {/* Top center badge */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            {SERVICES_HERO_CONTENT.badge}
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="mx-auto max-w-5xl text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl md:text-6xl lg:text-7xl">
            {SERVICES_HERO_CONTENT.headline.pre}{" "}
            <span className="text-indigo-700">
              {SERVICES_HERO_CONTENT.headline.highlight}
            </span>{" "}
            {SERVICES_HERO_CONTENT.headline.post}
            <br className="hidden sm:block" /> {SERVICES_HERO_CONTENT.headline.line2}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {SERVICES_HERO_CONTENT.description}
          </p>
        </div>

        {/* Decorative dotted background card placeholder (matches design spacing) */}
        <div className="relative mx-auto mt-10 max-w-6xl sm:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
              backgroundSize: "14px 14px",
              transform: "translateY(14px)",
            }}
          />
          {/* Empty box to mirror screenshot spacing; images for each service appear in list below */}
          <div className="h-0" />
        </div>
      </div>
    </section>
  );
}


