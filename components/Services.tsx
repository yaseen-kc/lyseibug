import { SERVICES_CONTENT, ServiceText } from "@/constants/services";
import Link from "next/link";
import {
  type LucideIcon,
  Globe,
  Smartphone,
  Boxes,
  Wrench,
  Headphones,
  Briefcase,
  BarChart,
} from "lucide-react";

type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const serviceIcons = [
  Globe, // Web Development
  Smartphone, // Mobile App Development
  Boxes, // ERP Solutions
  Wrench, // Software Rescue
  Headphones, // IT Support & Consultancy
  Briefcase, // Business Solutions
];

const services: Service[] = SERVICES_CONTENT.items.map(
  (item: ServiceText, index: number) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    icon: serviceIcons[index] ?? BarChart,
  })
);

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-gray-200/60"
      style={{
        backgroundColor: "#e8f0ff",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(2,6,23,.08) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-28">
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
            {SERVICES_CONTENT.badge}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl md:text-5xl">
            {SERVICES_CONTENT.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
            {SERVICES_CONTENT.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:gap-10 md:mt-16 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 md:p-7"
            >
              <div className="pointer-events-none absolute left-0 -top-5 md:-left-5 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900 text-white shadow">
                <service.icon className="h-6 w-6" />
              </div>

              <div className="md:pl-2">
                <h3 className="text-lg font-semibold leading-7 text-indigo-900 md:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-800"
                >
                  {SERVICES_CONTENT.moreDetailsLabel}
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link
            href={SERVICES_CONTENT.viewAll.href}
            className="rounded-full border border-indigo-900 bg-white px-6 py-3 text-sm font-semibold text-indigo-900 shadow-sm transition-colors hover:bg-indigo-50 md:px-8 md:py-4 md:text-base"
          >
            {SERVICES_CONTENT.viewAll.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
