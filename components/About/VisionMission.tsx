import Image from "next/image";
import { VISION_MISSION_CONTENT } from "@/constants/about";

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      className="relative overflow-hidden border-b border-gray-200/60 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
        <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
          {/* Left: image with dotted background */}
          <div className="relative order-1 md:order-none">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-6 -top-6 -z-10 h-[92%] w-[92%] rounded-3xl"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
                backgroundSize: "14px 14px",
              }}
            />

            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src={VISION_MISSION_CONTENT.image.src}
                alt={VISION_MISSION_CONTENT.image.alt}
                width={960}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Mission & Approach */}
          <div className="space-y-14">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 sm:text-3xl">
                {VISION_MISSION_CONTENT.mission.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
                {VISION_MISSION_CONTENT.mission.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 sm:text-3xl">
                {VISION_MISSION_CONTENT.approach.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
                {VISION_MISSION_CONTENT.approach.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


