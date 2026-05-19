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
  faShieldAlt,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

const MODULES = [
  {
    title: "Buying Management",
    tag: "01",
    desc: "Centralized procurement workflows designed for vendor coordination and inventory planning.",
    items: [
      "Supplier and vendor management",
      "Purchase order workflows",
      "Procurement approvals",
      "Material requirement visibility",
      "Inventory-linked purchasing"
    ]
  },
  {
    title: "Sales & Selling Operations",
    tag: "02",
    desc: "Connected sales workflows built for operational efficiency and transaction visibility.",
    items: [
      "Sales order management",
      "Invoice generation",
      "Customer transaction tracking",
      "Revenue visibility",
      "Sales reporting workflows"
    ]
  },
  {
    title: "Accounting & Finance",
    tag: "03",
    desc: "A centralized financial system replacing fragmented accounting processes.",
    items: [
      "Accounts payable and receivable",
      "Expense tracking",
      "Financial reconciliation",
      "Profitability reporting",
      "Real-time financial visibility"
    ]
  },
  {
    title: "Stock Management",
    tag: "04",
    desc: "Inventory intelligence designed for real-time operational control.",
    items: [
      "Warehouse stock visibility",
      "Material tracking",
      "Inventory movement monitoring",
      "Batch-level stock management",
      "Real-time inventory reporting"
    ]
  },
  {
    title: "Manufacturing Operations",
    tag: "05",
    desc: "Production workflows streamlined for coffee manufacturing and operational efficiency.",
    items: [
      "Production planning",
      "Material consumption tracking",
      "Manufacturing workflows",
      "Production stock visibility",
      "Operational performance tracking"
    ]
  },
  {
    title: "HRMS & Attendance Integration",
    tag: "06",
    desc: "Workforce management connected with integrated attendance visibility.",
    items: [
      "Employee lifecycle management",
      "Attendance data integration",
      "Workforce tracking",
      "Leave and HR administration",
      "Operational accountability reporting"
    ]
  }
];

const OUTCOMES = [
  {
    value: "6+",
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

export default function Black22CaseStudy() {
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
            <span className="text-white font-medium">Black 22</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-semibold tracking-wide border border-indigo-800">
                  Case Study
                </span>
                <span className="text-indigo-300 text-sm font-medium">Coffee Manufacturing & Retail Operations</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Black 22
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl">
                Unifying retail, production, finance, inventory, and workforce operations into a single intelligent system — purpose-built for a fast-growing specialty coffee brand.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800 backdrop-blur-sm">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Client</p>
                <p className="font-semibold text-lg">Black 22</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Geography</p>
                <p className="font-semibold text-lg">Bahrain</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Sector</p>
                <p className="font-semibold text-lg">Specialty Coffee Manufacturing & Retail</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Scaling a growing coffee brand without operational bottlenecks</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Black 22 had evolved into a fast-growing specialty coffee brand with expanding retail operations, coffee production requirements, workforce management needs, and increasing transactional complexity. Managing procurement, sales, accounting, manufacturing, and stock movement across operational touchpoints required stronger process visibility and centralized control.</p>
                <p>Inventory synchronization between operational units, manufacturing visibility for roasted products, employee attendance tracking, and financial reporting workflows needed to operate through one connected system rather than fragmented tools and manual coordination.</p>
                <p>The business required more than software implementation — it needed an operational backbone capable of connecting retail, manufacturing, finance, and workforce processes into a single scalable ecosystem.</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A unified operational layer for coffee retail and production</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>A customized ERPNext ecosystem was implemented to centralize Black 22&apos;s operational workflows — connecting procurement, sales, inventory, accounting, production, HR, and attendance systems into one streamlined platform.</p>
                <p>Buying and supplier management workflows were digitized to improve procurement visibility and inventory planning. Selling operations were integrated to provide centralized order and transaction management across business touchpoints.</p>
                <p>Manufacturing capabilities were implemented to streamline production workflows for roasted coffee operations, material planning, and stock consumption visibility — ensuring tighter control between procurement and production requirements.</p>
                <p>Accounting operations were consolidated to improve financial reporting, reconciliation, and operational visibility. HRMS capabilities enabled employee lifecycle management, while attendance data integration eliminated fragmented workforce tracking and improved operational accountability.</p>
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Six connected systems. One operational ecosystem.</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A scalable operational foundation</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed mb-12">
                <p>The ERP implementation enabled Black 22 to move from fragmented operational workflows to a connected system where procurement, inventory, production, finance, and workforce management operate through a unified platform.</p>
                <p>Manufacturing and stock workflows gained stronger visibility, accounting processes became centralized, attendance tracking became integrated, and leadership gained better operational insight across departments.</p>
                <p>The result was a scalable digital infrastructure capable of supporting Black 22&apos;s continued growth in specialty coffee retail and production operations.</p>
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
                    "End-to-end procurement and buying workflows",
                    "Integrated selling and operational transaction management",
                    "Centralized accounting and finance operations",
                    "Real-time stock visibility and inventory management",
                    "Manufacturing workflows for production operations",
                    "HRMS for employee and workforce administration",
                    "Attendance data integration and workforce tracking",
                    "Cross-department operational visibility",
                    "Automated reporting and business insights",
                    "Unified ERP ecosystem across retail and production"
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
                  <Link href="https://www.black22.net/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2">
                    black22.net <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                  </Link>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" /> Location
                  </div>
                  <div className="text-slate-900 font-semibold">Bahrain</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faIndustry} className="w-4 h-4" /> Industry
                  </div>
                  <div className="text-slate-900 font-semibold">Coffee Manufacturing & Retail</div>
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
                    "End-to-end procurement and buying workflows",
                    "Integrated selling and operational transaction management",
                    "Centralized accounting and finance operations",
                    "Real-time stock visibility and inventory management",
                    "Manufacturing workflows for production operations",
                    "HRMS for employee and workforce administration",
                    "Attendance data integration and workforce tracking",
                    "Cross-department operational visibility",
                    "Automated reporting and business insights",
                    "Unified ERP ecosystem across retail and production"
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
