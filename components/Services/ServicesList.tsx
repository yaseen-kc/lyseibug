import Image from "next/image";
import Link from "next/link";
import {
  SERVICES_PAGE_LIST,
  type ServicePageItem,
} from "@/constants/services";
import {
  type LucideIcon,
  Search,
  FileText,
  Share2,
  Mail,
  LineChart,
  Gauge,
} from "lucide-react";

const icons: LucideIcon[] = [
  Search, // SEO
  FileText, // Content
  Share2, // Social media
  Mail, // Email
  LineChart, // Analytics
  Gauge, // CRO
];

export default function ServicesList() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:py-16">
        <div className="space-y-14 md:space-y-16">
          {SERVICES_PAGE_LIST.map((item: ServicePageItem, index: number) => (
            <article
              key={item.title}
              className="grid grid-cols-1 items-center gap-8 border-t border-gray-200 pt-10 md:grid-cols-2 md:gap-12 md:pt-12"
            >
              {/* Text */}
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-900 text-white shadow md:h-12 md:w-12">
                  {(() => {
                    const Icon = icons[index] ?? Search;
                    return <Icon className="h-5 w-5" />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-indigo-950 md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-slate-600">
                  {item.description}
                </p>
                <Link
                  href={`/services/${item.slug}`}
                  className="mt-4 inline-flex items-center rounded-full border border-indigo-900 bg-white px-5 py-2 text-sm font-semibold text-indigo-900 shadow-sm transition-colors hover:bg-indigo-50"
                >
                  Learn more
                </Link>
              </div>

              {/* Image */}
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(2,6,23,.12) 1px, transparent 0)",
                    backgroundSize: "10px 10px",
                  }}
                />
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


