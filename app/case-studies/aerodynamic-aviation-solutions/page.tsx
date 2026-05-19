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
  faUsers,
  faChartLine,
  faShieldAlt,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

const MODULES = [
  {
    title: "Procurement & Supply Chain",
    tag: "01",
    desc: "End-to-end procurement workflows designed for specialized aviation equipment and airfield systems.",
    items: [
      "Supplier management and vendor analytics",
      "Purchase order automation",
      "Inventory receiving and quality inspection",
      "Material resource planning (MRP)",
      "Procurement approval workflows"
    ]
  },
  {
    title: "Sales & Retail Operations",
    tag: "02",
    desc: "Integrated sales and distribution management connected directly to inventory and procurement.",
    items: [
      "Sales order processing and tracking",
      "Retail distribution management",
      "Pricing and discount controls",
      "Customer relationship tracking",
      "Real-time sales performance dashboards"
    ]
  },
  {
    title: "Finance & Accounting",
    tag: "03",
    desc: "A centralized financial hub for complete enterprise cost, revenue, and profitability visibility.",
    items: [
      "General ledger automation",
      "Accounts payable and receivable",
      "Multi-currency transaction support",
      "Project-based profitability tracking",
      "Automated financial statement generation"
    ]
  },
  {
    title: "HRMS & Workforce Management",
    tag: "04",
    desc: "Digitized human resources operations bridging the gap between recruitment, attendance, and payroll.",
    items: [
      "Employee lifecycle management",
      "Automated payroll processing",
      "Attendance and leave tracking",
      "Performance and evaluation workflows",
      "Workforce cost allocation"
    ]
  },
  {
    title: "Inventory & Asset Control",
    tag: "05",
    desc: "Complete visibility over specialized aviation infrastructure stock and organizational assets.",
    items: [
      "Multi-warehouse inventory tracking",
      "Batch and serial number management",
      "Real-time stock movement history",
      "Low-stock automated alerts",
      "Enterprise asset lifecycle tracking"
    ]
  },
  {
    title: "Enterprise Reporting Layer",
    tag: "06",
    desc: "Real-time business intelligence aggregating data across all operational departments.",
    items: [
      "Custom management dashboards",
      "Cross-departmental operational analytics",
      "Financial health monitoring",
      "Supply chain efficiency metrics",
      "Automated scheduled reports"
    ]
  }
];

const OUTCOMES = [
  {
    value: "1",
    label: "Unified ERP System",
    icon: faLaptopCode
  },
  {
    value: "360°",
    label: "Financial Visibility",
    icon: faChartLine
  },
  {
    value: "Zero",
    label: "Data Silos",
    icon: faShieldAlt
  },
  {
    value: "Full",
    label: "HRMS Integration",
    icon: faUsers
  }
];

export default function AerodynamicAviationCaseStudy() {
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
            <span className="text-white font-medium">Aerodynamic Aviation Solutions</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-semibold tracking-wide border border-indigo-800">
                  Case Study
                </span>
                <span className="text-indigo-300 text-sm font-medium">Aviation Infrastructure</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Aerodynamic Aviation
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl">
                Building a centralized enterprise operations platform to unify procurement, sales, retail, human resources, and financial workflows for a leading aviation infrastructure provider.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800 backdrop-blur-sm">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Client</p>
                <p className="font-semibold text-lg">Aerodynamic Aviation Solutions</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Geography</p>
                <p className="font-semibold text-lg">UAE</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Sector</p>
                <p className="font-semibold text-lg">Aviation Infrastructure</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Platform</p>
                <p className="font-semibold text-lg">Enterprise ERP</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Disconnected workflows hindering enterprise scale</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Aerodynamic Aviation Solutions operates in the highly specialized sector of aviation infrastructure and airfield systems, where precision, timeliness, and financial accuracy are critical. However, managing enterprise operations across fragmented systems for procurement, sales, and HR created operational bottlenecks. Disconnected tools meant that supply chain data wasn&apos;t instantly reflected in financial reporting, and workforce management operated in a silo.</p>
                <p>Procurement of specialized aviation equipment requires rigorous quality checks and vendor tracking, which were difficult to manage without a centralized system. Similarly, sales and retail distribution lacked a unified connection to the overarching inventory, leading to delays in order fulfillment and forecasting inaccuracies.</p>
                <p>To support their enterprise scale, they needed to move away from isolated software and adopt a unified ERP ecosystem. A system that could seamlessly connect their complex procurement cycles, manage retail and sales distribution, track human resources, and consolidate financial accounting into a single source of truth.</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A unified ERP architecture for aviation operations</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>A comprehensive enterprise resource planning (ERP) platform was architected to replace Aerodynamic&apos;s fragmented processes. The solution centralized their core operations—procurement, sales, accounting, and HRMS—into a cohesive digital environment tailored for the aviation infrastructure industry.</p>
                <p>The procurement and supply chain modules were tightly integrated with sales and retail operations, ensuring complete visibility from sourcing specialized airfield components to final delivery. Financial workflows were automated to provide real-time tracking of expenses, revenues, and profitability at both the project and enterprise levels. Every transaction now flows automatically into the general ledger, significantly reducing manual data entry and reconciliation time.</p>
                <p>Additionally, a complete Human Resource Management System (HRMS) was deployed to manage the entire employee lifecycle. From tracking attendance and processing automated payroll to evaluating performance, the HRMS links workforce operations directly to financial accounting, providing a true picture of operational costs.</p>
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Six operational pillars. One connected enterprise.</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Streamlined operations built for the aviation sector</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed mb-12">
                <p>The implementation transformed Aerodynamic Aviation Solutions into a fully connected enterprise. By unifying procurement, sales, HR, and finance into a single ecosystem, the organization eliminated data silos and manual reconciliation processes.</p>
                <p>The seamless flow of information from the supply chain to accounting ensures real-time financial visibility, while the integrated HRMS streamlines workforce management. The new operational platform provides the scalability, accountability, and precision required to support complex aviation infrastructure projects across the UAE.</p>
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
                    "End-to-end procurement and supply chain automation",
                    "Integrated sales and retail distribution management",
                    "Centralized financial accounting and general ledger",
                    "Comprehensive HRMS and automated payroll",
                    "Real-time inventory and asset tracking",
                    "Project-based profitability and cost allocation",
                    "Cross-departmental management dashboards",
                    "Automated inter-departmental workflows",
                    "Role-based access and security controls",
                    "Scalable architecture for future expansion"
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
                  <Link href="https://aerodynamicuae.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2">
                    aerodynamicuae.com <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
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
                  <div className="text-slate-900 font-semibold">Aviation Infrastructure</div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ERP Framework",
                    "React",
                    "TypeScript",
                    "Python",
                    "MariaDB",
                    "HRMS",
                    "Procurement APIs",
                    "Workflow Automation"
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
                    "Procurement workflows",
                    "Sales & retail operations",
                    "Financial accounting",
                    "HR & payroll management",
                    "Inventory control",
                    "Automated reporting",
                    "Business intelligence dashboards",
                    "Role-based permissions"
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
