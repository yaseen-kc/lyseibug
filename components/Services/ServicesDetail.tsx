import Image from "next/image";
import { type ServiceDetailHeroContent } from "@/constants/services";

type Props = { content: ServiceDetailHeroContent };

export default function ServicesDetailHero({ content }: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 md:pt-16 md:pb-10 lg:pt-20 lg:pb-14">
        {/* Badge */}
        <div className="mb-6 flex justify-start sm:mb-8">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            {content.badge}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Left copy */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl md:text-6xl">
              {content.title.line1}
              <br className="hidden sm:block" /> {content.title.line2}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              {content.description}
            </p>
          </div>

          {/* Right image with dotted backdrop */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 -z-10 hidden h-[360px] w-[520px] rounded-3xl sm:block md:h-[420px] md:w-[620px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
                backgroundSize: "14px 14px",
              }}
            />
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={1200}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

