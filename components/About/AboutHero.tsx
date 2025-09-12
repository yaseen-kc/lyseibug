import { ABOUT_CONTENT, ABOUT_HERO_CONTENT } from "@/constants/about";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
        {/* Top center badge */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            {ABOUT_HERO_CONTENT.badge}
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="mx-auto max-w-5xl text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl md:text-6xl">
            {ABOUT_HERO_CONTENT.headline.pre}{" "}
            <span className="text-indigo-700">
              {ABOUT_HERO_CONTENT.headline.highlight}
            </span>{" "}
            {ABOUT_HERO_CONTENT.headline.post}
            <br className="hidden sm:block" />{" "}
            {ABOUT_HERO_CONTENT.headline.line2}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg">
            {ABOUT_HERO_CONTENT.description}
          </p>
        </div>

        {/* Image card with dotted background */}
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
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
            <Image
              src={ABOUT_HERO_CONTENT.image.src}
              alt={ABOUT_HERO_CONTENT.image.alt}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CONTENT.stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-semibold text-indigo-900">
                {item.value}
              </div>
              <div className="mt-2 text-base sm:text-lg text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
