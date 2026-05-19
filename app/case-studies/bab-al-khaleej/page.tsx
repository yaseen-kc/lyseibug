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
  faTruck,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

const MODULES = [
  {
    title: "Core Trading Operations",
    tag: "01",
    desc: "A unified commercial backbone connecting procurement, sales, inventory, and financial operations into one seamless workflow.",
    items: [
      "Purchase cycle management",
      "Sales order and invoicing workflows",
      "Multi-stage procurement approvals",
      "Customer and supplier management",
      "Real-time stock visibility"
    ]
  },
  {
    title: "Inventory & Warehouse Intelligence",
    tag: "02",
    desc: "Complete stock visibility across warehouses with automated movement tracking and inventory accuracy.",
    items: [
      "Real-time stock monitoring",
      "Warehouse transfer workflows",
      "Batch and item-level tracking",
      "Low-stock alerts and replenishment planning",
      "Inventory valuation and reporting"
    ]
  },
  {
    title: "Manufacturing & Production Control",
    tag: "03",
    desc: "Production planning and execution integrated directly with inventory, procurement, and accounting.",
    items: [
      "Bill of materials configuration",
      "Production planning and scheduling",
      "Raw material tracking",
      "Work order management",
      "Manufacturing cost visibility"
    ]
  },
  {
    title: "Finance & Accounting Suite",
    tag: "04",
    desc: "Financial operations centralized into a single source of truth with automated bookkeeping and reporting.",
    items: [
      "Accounts payable and receivable",
      "General ledger automation",
      "Financial statement generation",
      "Expense and payment tracking",
      "Cash flow monitoring"
    ]
  },
  {
    title: "Human Resource Management",
    tag: "05",
    desc: "Workforce management streamlined through digitized HR workflows and employee tracking.",
    items: [
      "Employee records management",
      "Attendance and leave tracking",
      "Payroll integration",
      "Performance monitoring",
      "Department-wise workforce reporting"
    ]
  },
  {
    title: "CRM & Van Sales Mobility",
    tag: "06",
    desc: "A customer-first ecosystem combining CRM visibility with mobile-enabled van sales operations.",
    items: [
      "Lead and opportunity tracking",
      "Customer communication workflows",
      "Mobile van sales application",
      "Real-time order creation in field",
      "Sales team performance visibility"
    ]
  }
];

const OUTCOMES = [
  {
    value: "7+",
    label: "Business Functions Unified",
    icon: faLaptopCode
  },
  {
    value: "1",
    label: "Connected ERP Ecosystem",
    icon: faChartLine
  },
  {
    value: "100%",
    label: "Centralized Operations",
    icon: faShieldAlt
  },
  {
    value: "Mobile",
    label: "Van Sales Enabled",
    icon: faTruck
  }
];

export default function BabAlKhaleejCaseStudy() {
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
            <span className="text-white font-medium">Bab Al Khaleej</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-semibold tracking-wide border border-indigo-800">
                  Case Study
                </span>
                <span className="text-indigo-300 text-sm font-medium">Trading & Distribution</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Bab Al Khaleej
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl">
                Unifying trading, manufacturing, finance, and field sales into a single ERP ecosystem — replacing fragmented business processes with operational clarity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800 backdrop-blur-sm">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Client</p>
                <p className="font-semibold text-lg">Bab Al Khaleej</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Geography</p>
                <p className="font-semibold text-lg">UAE</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Sector</p>
                <p className="font-semibold text-lg">Trading & Manufacturing</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Disconnected operations slowing business growth</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Bab Al Khaleej was operating across multiple business functions — procurement, sales, accounting, inventory, manufacturing, HR, and customer management — without a fully connected operational backbone. Teams worked across disconnected systems, manual tracking processes, and fragmented records that created operational inefficiencies.</p>
                <p>Inventory visibility lacked real-time accuracy, finance teams faced reconciliation delays, and operational reporting required manual consolidation from multiple departments. Field sales operations also lacked mobility, limiting visibility into customer interactions and order tracking outside office systems.</p>
                <p>The company needed more than a standard ERP deployment. It required a deeply connected business platform capable of bringing every operational function into a single environment — from procurement to production, finance to customer relationships, and office operations to mobile van sales.</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Building a unified operational engine with ERPNext</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Lyseisbug designed and implemented a customized ERPNext ecosystem tailored to Bab Al Khaleej&apos;s operational model — integrating procurement, selling, accounting, stock control, manufacturing, HRMS, CRM, and van sales into one centralized platform.</p>
                <p>Business operations that previously worked in silos were brought into a connected workflow. Procurement connects directly with stock movement, sales automatically update inventory and accounting, and manufacturing aligns with material planning and financial tracking.</p>
                <p>A dedicated van sales mobile application extended ERP access into the field, allowing teams to process customer orders, manage sales activity, and update transactions in real time.</p>
                <p>The implementation covered workflow configuration, module customization, process automation, reporting architecture, user permissions, staff onboarding, and deployment.</p>
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Six operational pillars. One connected ERP.</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A business operating as one system</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed mb-12">
                <p>The ERP transformation gave Bab Al Khaleej operational visibility across departments that previously worked independently.</p>
                <p>Procurement, inventory, finance, sales, and manufacturing now function through a shared system with synchronized data.</p>
                <p>Financial reporting became faster, inventory accuracy improved, and operational bottlenecks reduced through automation.</p>
                <p>The addition of a mobile van sales platform expanded ERP capabilities beyond office environments — giving field teams real-time access to customer and sales workflows.</p>
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
                    "Buying and selling operations unified",
                    "Integrated finance and accounting workflows",
                    "Centralized inventory and warehouse management",
                    "Manufacturing planning and production tracking",
                    "HRMS and employee workflows",
                    "CRM implementation with customer visibility",
                    "Real-time reporting and dashboards",
                    "Mobile-enabled van sales ecosystem",
                    "Automated interdepartmental workflows",
                    "Role-based access control"
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
                  <Link href="https://www.babalkhaleejuae.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2">
                    babalkhaleejuae.com <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                  </Link>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" /> Location
                  </div>
                  <div className="text-slate-900 font-semibold">United Arab Emirates</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faIndustry} className="w-4 h-4" /> Industry
                  </div>
                  <div className="text-slate-900 font-semibold">Trading & Manufacturing</div>
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
                    "Mobile App",
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
                    "Buying management",
                    "Selling workflows",
                    "Accounting automation",
                    "Stock management",
                    "Manufacturing operations",
                    "HRMS implementation",
                    "CRM integration",
                    "Van sale mobile app",
                    "Real-time reporting",
                    "Workflow automation",
                    "Centralized business data",
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
