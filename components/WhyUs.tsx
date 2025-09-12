import { WHY_US_CONTENT } from "@/constants/content";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy and list */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 mx-auto lg:mx-0">
              {WHY_US_CONTENT.badge}
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl md:text-5xl">
              {WHY_US_CONTENT.heading}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {WHY_US_CONTENT.description}
            </p>

            <div className="mt-8 space-y-5 md:mt-10">
              {WHY_US_CONTENT.reasons.map((item, index) => (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-indigo-200 p-5 shadow-sm md:p-6"
                >
                  {/* Number badge overlapping on the left */}
                  <div className="absolute -left-3 -top-5 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-white text-sm font-semibold text-indigo-900 md:left-[-18px] md:top-1/2 md:-translate-y-1/2 md:h-10 md:w-10">
                    {index + 1}
                  </div>

                  <h3 className="text-base font-semibold leading-7 text-indigo-900 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image with dotted background */}
          <div className="relative h-full">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 -z-10 hidden h-[92%] w-[92%] rounded-3xl md:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
                backgroundSize: "14px 14px",
              }}
            />

            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src={WHY_US_CONTENT.image.src}
                alt={WHY_US_CONTENT.image.alt}
                width={960}
                height={1387}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
