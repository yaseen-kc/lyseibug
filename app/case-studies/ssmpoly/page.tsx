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
  faBolt
} from "@fortawesome/free-solid-svg-icons";

const MODULES = [
  {
    title: "Academic Lifecycle Engine",
    tag: "01",
    desc: "Every academic operation — program setup to final results — runs through a single connected system.",
    items: [
      "Program & course configuration",
      "Automated timetable generation",
      "Batch-wise attendance tracking",
      "Internal marks entry and approval",
      "Semester result processing and publication"
    ]
  },
  {
    title: "Faculty Operations Portal",
    tag: "02",
    desc: "Built to eliminate the administrative burden on instructors so they can focus on teaching.",
    items: [
      "One-click attendance marking",
      "Inline internal marks entry",
      "Live syllabus completion tracking",
      "Student performance and risk flags",
      "Survey creation and requisition management"
    ]
  },
  {
    title: "Student Self-Service Platform",
    tag: "03",
    desc: "A mobile-first hub that gives students complete control over their academic life — without going to the office.",
    items: [
      "Live attendance and result access",
      "Timetable, resources, and announcements",
      "Gate pass and placement applications",
      "Automated notifications and reminders",
      "Offline mode for low-connectivity access"
    ]
  },
  {
    title: "Fee Management System",
    tag: "04",
    desc: "A full financial operations module — no more manual ledgers, no more reconciliation headaches.",
    items: [
      "Bulk fee invoice generation by batch",
      "Real-time outstanding payment tracking",
      "Automated defaulter identification and alerts",
      "End-of-period reconciliation workflows",
      "Finance analytics and collection dashboards"
    ]
  },
  {
    title: "Certificate & Clearance Automation",
    tag: "05",
    desc: "Multi-department approval chains that eliminate physical paperwork entirely.",
    items: [
      "TC, SSLC, and bonafide certificate requests",
      "Digital hall ticket issuance",
      "Caution deposit clearance workflow",
      "Library and department sign-off routing",
      "Automated certificate generation on approval"
    ]
  },
  {
    title: "Institutional Governance Layer",
    tag: "06",
    desc: "Real-time operational intelligence for leadership — the institution runs transparent, not on intuition.",
    items: [
      "Student academic performance analytics",
      "Faculty attendance and productivity metrics",
      "Institutional attendance compliance reports",
      "Fee collection and revenue tracking",
      "Cross-department KPI dashboards for Principal"
    ]
  }
];

const OUTCOMES = [
  {
    value: "95+",
    label: "Custom DocTypes Built",
    icon: faLaptopCode
  },
  {
    value: "11",
    label: "Integrated Modules",
    icon: faChartLine
  },
  {
    value: "6",
    label: "Role-Based Portals",
    icon: faUsers
  },
  {
    value: "100%",
    label: "Paperless Workflows",
    icon: faShieldAlt
  }
];

export default function SSMPolyCaseStudy() {
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
            <span className="text-white font-medium">SSM Polytechnic</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-semibold tracking-wide border border-indigo-800">
                  Case Study
                </span>
                <span className="text-indigo-300 text-sm font-medium">Education Technology</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                SSM Polytechnic
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl">
                From disconnected spreadsheets to a fully unified campus, rebuilding institutional operations from the ground up with CampusControl ERP.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800 backdrop-blur-sm">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Client</p>
                <p className="font-semibold text-lg">SSM Polytechnic</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Geography</p>
                <p className="font-semibold text-lg">Kerala, India</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Sector</p>
                <p className="font-semibold text-lg">Higher Education</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A growing institution held back by its own processes</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>SSM Polytechnic was managing hundreds of students, dozens of faculty members, and multi-department administrative workflows — all without a single connected system. Attendance was tracked manually, examination records lived in spreadsheets, fee collection had no real-time reconciliation, and student document requests involved physical paperwork routed across multiple offices.</p>
                <p>The consequences were predictable: delayed approvals, lost records, duplicated data entry, and zero institutional visibility. Leadership couldn't see real-time performance metrics. Finance officers couldn't track defaulters without manual ledger reviews. Faculty had no centralized tool for marking attendance, entering marks, or monitoring student progress. Students had no self-service access to their own academic data.</p>
                <p>The institution needed more than software — it needed an operational overhaul. A single platform capable of digitizing every workflow, connecting every stakeholder, and giving leadership the intelligence to run a modern institution.</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">CampusControl — rebuilt from the inside out</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Lyseisbug designed and deployed CampusControl — a deeply customized ERP built on ERPNext and Frappe — purpose-engineered for the way polytechnic institutions actually operate.</p>
                <p>Every user type got a purpose-built experience. Faculty can mark attendance by batch and period, enter internal marks, track syllabus completion, and monitor individual student performance.</p>
                <p>Students access a mobile-first portal to view attendance, results, timetables, course materials, placement listings, and submit requests for gate passes or certificates.</p>
                <p>Lyseisbug owned the entire implementation — from requirement analysis and solution architecture to workflow configuration, portal development, role-based access control, automation engineering, testing, deployment, and staff onboarding.</p>
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Six systems. One coherent platform.</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A campus that runs itself</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed mb-12">
                <p>CampusControl didn't just digitize SSM Polytechnic — it restructured how the institution operates at every level.</p>
                <p>Manual paperwork is gone. Approval bottlenecks are automated. Students get instant access to their own data.</p>
                <p>Attendance that once required manual registers now happens digitally in seconds.</p>
                <p>Certificate requests that took days of physical routing now complete in hours.</p>
                <p>The architecture is modular and built to grow.</p>
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
                    "95+ customized DocTypes",
                    "11 integrated institutional modules",
                    "6-role access ecosystem",
                    "Student & faculty self-service portals",
                    "Fully automated attendance workflows",
                    "End-to-end digital certificate lifecycle",
                    "Real-time fee management and reporting",
                    "Placement management with tracking",
                    "Live institutional KPI dashboards",
                    "Automated multi-stage approval workflows"
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
                  <Link href="https://www.ssmpoly.ac.in/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2">
                    ssmpoly.ac.in <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
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
                  <div className="text-slate-900 font-semibold">Polytechnic Education</div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ERPNext v15",
                    "Frappe Framework",
                    "React",
                    "TypeScript",
                    "Python",
                    "Tailwind CSS",
                    "MariaDB",
                    "REST APIs",
                    "WebSockets",
                    "Zustand",
                    "Vite"
                  ].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8 mt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Complete academic lifecycle management",
                    "Six dedicated role portals",
                    "Attendance automation",
                    "Assessment workflows",
                    "Fee management",
                    "Digital certificate workflows",
                    "Placement management",
                    "Gate pass system",
                    "Student clubs & activity management",
                    "Procurement workflows",
                    "Institutional dashboards",
                    "Offline student portal",
                    "SMS & app notifications",
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
