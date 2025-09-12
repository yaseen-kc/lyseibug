import { HERO_CONTENT } from "@/constants/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faFolderTree,
  faBolt,
  faChartBar,
  faShieldHalved,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(2,6,23,.08) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:py-32">
        {/* Floating stat pills (desktop only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          <div className="absolute left-12 top-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <FontAwesomeIcon icon={faChartLine} className="h-4 w-4 text-indigo-500" />
              <span>{HERO_CONTENT.statPills[0]}</span>{" "}
              {/* 95% Client retention */}
            </div>
          </div>

          <div className="absolute right-12 top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <FontAwesomeIcon icon={faFolderTree} className="h-4 w-4 text-indigo-500" />
              <span>{HERO_CONTENT.statPills[1]}</span>{" "}
              {/* 200+ Projects delivered */}
            </div>
          </div>

          <div className="absolute left-20 top-50">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <FontAwesomeIcon icon={faBolt} className="h-4 w-4 text-yellow-500" />
              <span>{HERO_CONTENT.statPills[2]}</span>{" "}
              {/* 70% Faster deployment */}
            </div>
          </div>

          <div className="absolute right-20 top-50">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <FontAwesomeIcon icon={faChartBar} className="h-4 w-4 text-rose-500" />
              <span>{HERO_CONTENT.statPills[3]}</span>{" "}
              {/* 5x Business scalability */}
            </div>
          </div>

          <div className="absolute left-30 top-125">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4 text-emerald-500" />
              <span>{HERO_CONTENT.statPills[4]}</span>{" "}
              {/* Trusted by startups & enterprises */}
            </div>
          </div>

          <div className="absolute right-30 top-125">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <FontAwesomeIcon icon={faHeadphones} className="h-4 w-4 text-sky-500" />
              <span>{HERO_CONTENT.statPills[5]}</span> {/* 24/7 IT support */}
            </div>
          </div>
        </div>
        {/* Top center pill */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            <FontAwesomeIcon icon={faBolt} className="h-4 w-4" />
            <span>{HERO_CONTENT.tagline}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl md:text-6xl lg:text-7xl">
            {HERO_CONTENT.headline.pre}{" "}
            <span className="text-indigo-700">
              {HERO_CONTENT.headline.highlight}
            </span>{" "}
            {HERO_CONTENT.headline.post}
            <br className="hidden sm:block" /> {HERO_CONTENT.headline.line2}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {HERO_CONTENT.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={HERO_CONTENT.ctas.primary.href}
              className="rounded-full bg-indigo-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 md:text-lg"
            >
              {HERO_CONTENT.ctas.primary.label}
            </a>
            <a
              href={HERO_CONTENT.ctas.secondary.href}
              className="rounded-full border border-indigo-900 px-8 py-4 text-base font-semibold text-indigo-900 transition-colors hover:bg-indigo-50 md:text-lg"
            >
              {HERO_CONTENT.ctas.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
