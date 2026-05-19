"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCheckCircle,
  faGlobe,
  faMapMarkerAlt,
  faIndustry,
  faLaptopCode,
  faChartLine,
  faBolt,
  faCogs,
  faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";

const MODULES = [
  {
    title: "Accounting & Financial Operations",
    tag: "01",
    desc: "A tailored accounting ecosystem designed for operational finance visibility and cost control.",
    items: [
      "Custom financial workflows",
      "Expense and revenue tracking",
      "Vehicle-level cost allocation",
      "Profitability reporting",
      "Real-time financial visibility"
    ]
  },
  {
    title: "Fleet Tracking & Vehicle Intelligence",
    tag: "02",
    desc: "Real-time fleet visibility built for vehicle monitoring and operational control.",
    items: [
      "Live GPS tracking",
      "Vehicle monitoring",
      "Route playback history",
      "Usage tracking",
      "Fleet performance analytics"
    ]
  },
  {
    title: "Route & Operational Analytics",
    tag: "03",
    desc: "Operational intelligence designed to optimize movement and performance.",
    items: [
      "Route performance tracking",
      "Operational efficiency analytics",
      "Travel behavior monitoring",
      "Performance insights",
      "Real-time operational reporting"
    ]
  },
  {
    title: "Employee Management System",
    tag: "04",
    desc: "Workforce visibility connected directly to operational performance.",
    items: [
      "Employee lifecycle management",
      "Attendance tracking",
      "Performance monitoring",
      "Operational accountability",
      "Payroll-linked workforce insights"
    ]
  },
  {
    title: "Custom Hardware Integration",
    tag: "05",
    desc: "Physical devices integrated directly into the operational ecosystem.",
    items: [
      "Device-level data capture",
      "IoT hardware integration",
      "Vehicle sensor intelligence",
      "Real-time telemetry",
      "Connected operational monitoring"
    ]
  },
  {
    title: "Real-Time Synchronization Layer",
    tag: "06",
    desc: "A centralized backend synchronization engine eliminating operational silos.",
    items: [
      "Real-time backend syncing",
      "Cross-system data flow",
      "Automated operational updates",
      "Integrated reporting",
      "Unified business visibility"
    ]
  }
];

const OUTCOMES = [
  {
    value: "1",
    label: "Unified Platform",
    icon: faLaptopCode
  },
  {
    value: "100%",
    label: "Real-Time Tracking",
    icon: faTachometerAlt
  },
  {
    value: "IoT",
    label: "Hardware Integrated",
    icon: faCogs
  },
  {
    value: "Full",
    label: "Cost Visibility",
    icon: faChartLine
  }
];

export default function MappbeeCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-indigo-950 text-white pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.05)_1px,_transparent_0)]"
          style={{ backgroundSize: "30px 30px" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sm text-indigo-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/our-clients" className="hover:text-white transition-colors">Our Clients</Link>
            <span>/</span>
            <span className="text-white font-medium">Mappbee</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-semibold tracking-wide border border-indigo-800">
                  Case Study
                </span>
                <span className="text-indigo-300 text-sm font-medium">Fleet & Logistics Technology</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Mappbee
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl">
                Engineering a unified fleet intelligence platform — connecting finance, fleet operations, employee performance, and real-time hardware data into a single operational ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800 backdrop-blur-sm">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Client</p>
                <p className="font-semibold text-lg">Mappbee</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Geography</p>
                <p className="font-semibold text-lg">UAE</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Sector</p>
                <p className="font-semibold text-lg">Fleet Technology</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Platform</p>
                <p className="font-semibold text-lg">ERPNext + Custom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Fleet operations fragmented across disconnected systems</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Mappbee operates in a highly operational environment where fleet movement, vehicle monitoring, financial tracking, workforce performance, and route optimization must work in synchronization. Managing these functions through fragmented tools created operational silos, disconnected reporting, and limited visibility into real-time business performance. According to the enterprise overview, disconnected teams, data fragmentation, and dependency on multiple systems created operational friction across finance, HR, maintenance, and operations.</p>
                <p>Vehicle monitoring lacked a unified operational layer capable of consolidating live tracking, route performance, and fleet analytics. Financial operations required deeper visibility into operational expenses and revenue tracking, while employee management workflows needed stronger attendance and performance monitoring. Fleet intelligence also required direct hardware integration to capture operational data in real time. The uploaded enterprise architecture highlights a need for centralized GPS, IoT, maintenance, finance, and workforce systems operating through one platform.</p>
                <p>The organization needed more than operational software — it required a custom-built enterprise system capable of connecting physical hardware, fleet intelligence, employee operations, and financial management into a single source of truth.</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A unified enterprise operating system for fleet intelligence</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>A custom business management system was architected and developed to centralize Mappbee&apos;s operational workflows — combining accounting, finance tracking, fleet monitoring, employee management, route analytics, and device-level integrations into one connected platform.</p>
                <p>The accounting and finance ecosystem was tailored specifically for internal operational requirements, enabling detailed expense and revenue tracking with real-time financial visibility. Operational cost centers were structured to provide deeper insight into vehicle-level profitability, route performance, and operational efficiency. The enterprise documentation outlines granular cost tracking and automated operational finance visibility for fleet performance.</p>
                <p>Fleet tracking capabilities were developed to provide live vehicle monitoring, route playback, usage tracking, and operational analytics. Hardware-integrated telemetry enabled device-level data capture, supporting vehicle monitoring, sensor intelligence, and real-time operational visibility through centralized dashboards. The architecture integrates GPS, IoT sensor intelligence, and operational tracking into a single ecosystem.</p>
                <p>Employee management workflows were integrated with attendance and performance tracking systems, creating stronger operational accountability and workforce visibility. Real-time synchronization between hardware devices and backend systems ensured operational data flowed seamlessly across departments without manual intervention. The enterprise workflow demonstrates automated synchronization between operational events, maintenance, payroll, and finance systems.</p>
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Six intelligent systems. One operational command center.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MODULES.map((module, index) => (
                  <div key={index} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="text-indigo-600 font-black text-4xl opacity-20 mb-4">{module.tag}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{module.title}</h3>
                    <p className="text-slate-600 mb-6 text-sm">{module.desc}</p>
                    <ul className="space-y-3">
                      {module.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 w-4 h-4 mt-1 flex-shrink-0" />
                          <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">An enterprise fleet system built for operational scale</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed mb-12">
                <p>The custom implementation transformed Mappbee from fragmented operational processes into a connected enterprise ecosystem where finance, fleet monitoring, workforce management, and operational analytics function through one intelligent platform.</p>
                <p>Real-time fleet visibility improved significantly, financial operations gained stronger cost intelligence, employee performance tracking became structured, and hardware integrations enabled seamless operational synchronization between field devices and backend systems.</p>
                <p>The result was a scalable digital infrastructure capable of supporting enterprise-grade fleet operations with real-time intelligence, operational visibility, and data-driven decision-making. The enterprise strategy document describes the platform as a &apos;single source of truth&apos; connecting operations, finance, and workforce systems.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {OUTCOMES.map((outcome, index) => (
                  <div key={index} className="bg-white p-6 rounded-3xl border border-gray-200 text-center shadow-sm">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                      <FontAwesomeIcon icon={outcome.icon} className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900 mb-2">{outcome.value}</div>
                    <div className="text-sm font-semibold text-slate-500">{outcome.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-indigo-900 text-white p-8 sm:p-10 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <FontAwesomeIcon icon={faBolt} className="text-yellow-400" />
                  Delivered at Scale
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Custom accounting system for internal financial operations",
                    "Detailed finance tracking and operational cost visibility",
                    "Fleet tracking and real-time vehicle monitoring",
                    "Route analytics and operational intelligence",
                    "Vehicle usage and performance tracking",
                    "Employee management system",
                    "Attendance and workforce performance monitoring",
                    "Custom hardware integration",
                    "Device-level operational data capture",
                    "Real-time synchronization with backend systems",
                    "Operational dashboards and reporting",
                    "Unified business intelligence across fleet operations"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-400 w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-indigo-100 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm sticky top-32">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Project Info</h3>
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" /> Website
                  </div>
                  <Link href="https://mappbee.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2">
                    mappbee.com <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                  </Link>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" /> Location
                  </div>
                  <div className="text-slate-900 font-semibold">UAE</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faIndustry} className="w-4 h-4" /> Industry
                  </div>
                  <div className="text-slate-900 font-semibold">Fleet Technology & Logistics Operations</div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ERPNext Framework",
                    "Custom Hardware Integration",
                    "IoT Sensor APIs",
                    "React",
                    "TypeScript",
                    "Python",
                    "MariaDB",
                    "Real-time Telemetry"
                  ].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8 mt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">What we implemented</h3>
                <ul className="space-y-3">
                  {[
                    "Custom accounting system",
                    "Operational cost visibility",
                    "Fleet tracking monitoring",
                    "Route analytics intelligence",
                    "Employee management",
                    "Workforce performance tracking",
                    "Custom hardware integration",
                    "Device-level data capture",
                    "Real-time synchronization",
                    "Unified business intelligence"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
