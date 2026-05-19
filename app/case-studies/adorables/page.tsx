"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExternalLinkAlt,
  faCheckCircle,
  faGlobe,
  faMapMarkerAlt,
  faIndustry,
  faLaptopCode,
  faUsers,
  faChartLine,
  faShieldAlt,
  faTruck,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

const MODULES = [
  {
    title: "HRMS & Workforce Management",
    tag: "01",
    desc: "Employee operations digitized to support workforce growth and internal administration.",
    items: [
      "Employee lifecycle management",
      "Attendance and leave tracking",
      "HR administration workflows",
      "Department-level workforce visibility",
      "Operational accountability"
    ]
  },
  {
    title: "Production Planning",
    tag: "02",
    desc: "Manufacturing workflows aligned with demand, material planning, and execution visibility.",
    items: [
      "Production scheduling",
      "Material requirement planning",
      "Work order management",
      "Manufacturing visibility",
      "Production tracking"
    ]
  },
  {
    title: "Accounting & Finance",
    tag: "03",
    desc: "Financial operations centralized for stronger visibility and control.",
    items: [
      "Accounts payable and receivable",
      "Expense management",
      "Financial reporting",
      "Reconciliation workflows",
      "Profitability visibility"
    ]
  },
  {
    title: "Purchase & Procurement",
    tag: "04",
    desc: "Buying workflows connected directly to stock and production requirements.",
    items: [
      "Supplier management",
      "Purchase workflows",
      "Procurement approvals",
      "Inventory-linked purchasing",
      "Vendor coordination"
    ]
  },
  {
    title: "Sales & Selling Operations",
    tag: "05",
    desc: "Retail and transaction workflows streamlined for operational efficiency.",
    items: [
      "Sales order tracking",
      "Customer transaction visibility",
      "Invoice generation",
      "Order lifecycle tracking",
      "Revenue reporting"
    ]
  }
];

const OUTCOMES = [
  {
    value: "5",
    label: "Connected Systems",
    icon: faLaptopCode
  },
  {
    value: "1",
    label: "Unified ERP Platform",
    icon: faChartLine
  },
  {
    value: "100%",
    label: "Centralized Workflows",
    icon: faShieldAlt
  },
  {
    value: "Real-time",
    label: "Production Tracking",
    icon: faIndustry
  }
];

export default function AdorablesCaseStudy() {
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
            <span className="text-white font-medium">Adorables</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-semibold tracking-wide border border-indigo-800">
                  Case Study
                </span>
                <span className="text-indigo-300 text-sm font-medium">Baby Products Manufacturing & Retail</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Adorables
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl">
                Digitizing manufacturing, finance, procurement, workforce, and retail operations into one connected system — built to support a fast-growing baby products brand.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800 backdrop-blur-sm">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Client</p>
                <p className="font-semibold text-lg">Adorables</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Geography</p>
                <p className="font-semibold text-lg">Kerala, India</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Sector</p>
                <p className="font-semibold text-lg">Baby Products Manufacturing</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Platform</p>
                <p className="font-semibold text-lg">ERPNext / Frappe</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Managing growth without operational disconnect</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Adorables evolved from a homegrown motherhood brand into a growing baby products business with in-house manufacturing, retail operations, procurement workflows, workforce coordination, and expanding financial operations. As the business scaled, managing production planning, inventory movement, procurement, employee operations, and accounting through disconnected systems created operational friction. Adorables manufactures and sells a wide range of maternity and baby essentials, including bedding, baby nests, cradles, feeding products, and newborn accessories.</p>
                <p>Production workflows required stronger visibility between raw materials, purchasing, and finished product demand. Financial reporting needed centralized control, while workforce operations required a structured HR system to support a growing team and day-to-day operational management. Adorables operates its own manufacturing unit and retail presence while serving customers across India.</p>
                <p>The business required more than software deployment — it needed a unified operational ecosystem capable of connecting manufacturing, procurement, finance, HR, and sales operations into one scalable platform.</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A connected ERP foundation for manufacturing and retail operations</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>A customized ERPNext implementation was deployed to centralize Adorables&apos; operational workflows — connecting HRMS, production planning, procurement, accounting, inventory, and sales into one integrated system.</p>
                <p>Production planning workflows were structured to provide better visibility into material requirements, manufacturing schedules, and product demand forecasting. Procurement and purchase operations were aligned directly with stock and production requirements, reducing operational inefficiencies.</p>
                <p>Selling operations were digitized to improve transaction tracking and order visibility, while accounting workflows were centralized for improved reconciliation, reporting, and financial transparency.</p>
                <p>HRMS capabilities enabled employee lifecycle management and workforce administration, helping Adorables streamline internal operations as the organization continued to grow.</p>
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Five operational systems. One connected platform.</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">An operational system built for scale</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed mb-12">
                <p>The ERP implementation enabled Adorables to move from fragmented operational coordination to a connected ecosystem where production, procurement, HR, accounting, and sales function through one platform.</p>
                <p>Production planning gained stronger visibility, procurement aligned better with operational demand, workforce administration became structured, and financial reporting became more centralized and transparent.</p>
                <p>The result was a scalable digital foundation capable of supporting Adorables&apos; continued growth in baby products manufacturing and retail operations across India.</p>
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
                    "HRMS for workforce and employee management",
                    "Production planning and manufacturing coordination",
                    "Centralized accounting and finance operations",
                    "Purchase and procurement workflows",
                    "Integrated selling and order management",
                    "Real-time stock and inventory visibility",
                    "Manufacturing-linked material planning",
                    "Cross-department operational visibility",
                    "Business reporting and operational analytics",
                    "Unified ERP ecosystem for manufacturing and retail"
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
                  <Link href="https://adorables.online/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2">
                    adorables.online <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                  </Link>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" /> Location
                  </div>
                  <div className="text-slate-900 font-semibold">Kerala, India</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faIndustry} className="w-4 h-4" /> Industry
                  </div>
                  <div className="text-slate-900 font-semibold">Baby Products Manufacturing & Retail</div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ERPNext",
                    "Frappe Framework",
                    "React",
                    "TypeScript",
                    "Python",
                    "REST APIs",
                    "MariaDB",
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
                    "HRMS for workforce and employee management",
                    "Production planning and manufacturing coordination",
                    "Centralized accounting and finance operations",
                    "Purchase and procurement workflows",
                    "Integrated selling and order management",
                    "Real-time stock and inventory visibility",
                    "Manufacturing-linked material planning",
                    "Cross-department operational visibility",
                    "Business reporting and operational analytics",
                    "Unified ERP ecosystem for manufacturing and retail"
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
