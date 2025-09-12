import Link from "next/link";
import { BRAND_NAME } from "@/constants/content";

export default function NotFound() {
  return (
    <section
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(2,6,23,.08) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            <span>Oops! Page not found</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl md:text-6xl">
            404 — We couldn’t find that page
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back to {BRAND_NAME}’s main pages.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-indigo-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 md:text-lg"
            >
              Go to Home
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-indigo-900 px-8 py-4 text-base font-semibold text-indigo-900 transition-colors hover:bg-indigo-50 md:text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
