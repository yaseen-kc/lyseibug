"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCheckCircle,
  faGlobe,
  faMapMarkerAlt,
  faIndustry,
  faBolt,
  faBrain,
  faHistory,
  faDatabase,
  faSignature
} from "@fortawesome/free-solid-svg-icons";

const MODULES = [
  {
    title: "Engineering Estimation Engine",
    tag: "01",
    desc: "A centralized estimation layer designed for pre-engineered building calculations and project planning.",
    items: [
      "Estimate creation workflows",
      "Project-wise engineering calculations",
      "Structured estimate management",
      "Standardized engineering logic",
      "Estimate lifecycle visibility"
    ]
  },
  {
    title: "Structured Data Input System",
    tag: "02",
    desc: "Advanced engineering input mechanisms built to improve estimation consistency and precision.",
    items: [
      "Engineering parameter inputs",
      "Structured project configurations",
      "Material requirement inputs",
      "Validation workflows",
      "Data consistency management"
    ]
  },
  {
    title: "Approval & Authorization Workflow",
    tag: "03",
    desc: "Multi-level approvals designed for controlled engineering validation.",
    items: [
      "Role-based approvals",
      "Multi-stage authorization",
      "Estimate validation workflow",
      "Approval visibility",
      "Decision accountability"
    ]
  },
  {
    title: "Audit Trail & Edit Tracking",
    tag: "04",
    desc: "Complete revision transparency across engineering workflows.",
    items: [
      "Full change history",
      "Edit tracking",
      "Version monitoring",
      "Estimate comparison visibility",
      "Revision accountability"
    ]
  },
  {
    title: "AI Optimization Engine",
    tag: "05",
    desc: "Intelligent estimation support designed to improve speed and precision.",
    items: [
      "AI-based estimate optimization",
      "Engineering recommendation engine",
      "Pattern analysis",
      "Efficiency improvements",
      "Smart estimation assistance"
    ]
  },
  {
    title: "Cost & Material Suggestion System",
    tag: "06",
    desc: "Optimization intelligence focused on reducing waste and improving cost efficiency.",
    items: [
      "Material optimization suggestions",
      "Cost reduction recommendations",
      "Resource utilization insights",
      "Estimate refinement assistance",
      "Operational efficiency improvements"
    ]
  }
];

const OUTCOMES = [
  {
    value: "AI",
    label: "Powered",
    icon: faBrain
  },
  {
    value: "Multi",
    label: "Approval Levels",
    icon: faSignature
  },
  {
    value: "Full",
    label: "Audit Trail",
    icon: faHistory
  },
  {
    value: "Centralized",
    label: "Estimation",
    icon: faDatabase
  }
];

export default function FloreatCaseStudy() {
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
            <span className="text-white font-medium">Floreat</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm font-semibold tracking-wide border border-indigo-800">
                  Case Study
                </span>
                <span className="text-indigo-300 text-sm font-medium">Engineering & Pre-Engineered Buildings</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Floreat
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl">
                Transforming engineering estimation into a structured, intelligent, and approval-driven workflow — reducing manual effort while improving speed, accuracy, and decision-making.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-indigo-900/50 p-8 rounded-3xl border border-indigo-800 backdrop-blur-sm">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Client</p>
                <p className="font-semibold text-lg">Floreat</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Geography</p>
                <p className="font-semibold text-lg">India</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Sector</p>
                <p className="font-semibold text-lg">Engineering SaaS</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Platform</p>
                <p className="font-semibold text-lg">Custom Estimation Platform</p>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Engineering estimates slowed by manual complexity</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>Floreat operates in the highly precision-driven domain of pre-engineered building solutions, where engineering estimates directly influence project feasibility, cost planning, material utilization, and operational efficiency. Creating estimates manually across complex engineering inputs introduced operational delays, inconsistencies, and dependency on individual expertise.</p>
                <p>Estimation workflows lacked structured standardization, making it difficult to maintain consistency across projects. Multi-level approvals required manual coordination, revision history was difficult to track, and engineering teams had limited visibility into previous modifications or optimization opportunities.</p>
                <p>The organization required more than estimation software — it needed a centralized engineering intelligence platform capable of standardizing workflows, improving accuracy, streamlining approvals, and reducing engineering effort without sacrificing precision.</p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">An intelligent estimation ecosystem for engineering operations</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
                <p>A custom engineering estimation platform was designed and implemented to centralize the creation, management, optimization, and approval of engineering estimates for pre-engineered building projects.</p>
                <p>The platform introduced advanced estimation workflows powered by structured engineering inputs, enabling teams to generate estimates through standardized logic rather than fragmented manual calculations. This significantly improved consistency while reducing operational dependency on manual effort.</p>
                <p>Multi-level approval workflows were integrated to ensure engineering estimates passed through structured authorization chains before finalization. Edit tracking and complete audit history created full visibility into estimate revisions, enabling stronger accountability and decision transparency.</p>
                <p>To improve engineering efficiency, AI-based optimization capabilities were introduced to analyze estimation patterns, suggest material improvements, and identify cost optimization opportunities. Intelligent recommendation engines supported better decision-making by improving estimate accuracy while reducing unnecessary material overhead.</p>
              </div>
            </div>

            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Six engineering systems. One intelligent workflow.</h2>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A smarter approach to engineering estimation</h2>
              <div className="prose prose-lg prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed mb-12">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>The custom implementation transformed Floreat's estimation workflows from manually intensive processes into a structured and intelligent engineering ecosystem.</p>
                <p>Engineering teams gained stronger consistency, approval workflows became standardized, edit tracking improved transparency, and AI-powered optimization reduced inefficiencies in material planning and cost estimation.</p>
                <p>The result was a scalable engineering platform capable of improving estimate accuracy, reducing manual effort, accelerating approvals, and enabling more intelligent decision-making for pre-engineered building projects.</p>
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
                    "Engineering estimation platform for pre-engineered buildings",
                    "Structured estimate creation workflows",
                    "Advanced engineering data input system",
                    "Multi-level approval and authorization workflows",
                    "Edit tracking and full audit history",
                    "AI-powered estimate optimization",
                    "Material and cost suggestion engine",
                    "Improved estimation accuracy",
                    "Reduced manual engineering effort",
                    "Centralized estimate management ecosystem",
                    "Pattern analysis for optimization",
                    "Intelligent recommendation engines"
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
                  <Link href="https://www.floreat.in/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors flex items-center gap-2">
                    floreat.in <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                  </Link>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" /> Location
                  </div>
                  <div className="text-slate-900 font-semibold">India</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1 flex items-center gap-2">
                    <FontAwesomeIcon icon={faIndustry} className="w-4 h-4" /> Industry
                  </div>
                  <div className="text-slate-900 font-semibold">Pre-Engineered Buildings & Engineering Solutions</div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Custom Enterprise Platform",
                    "AI/ML Engine",
                    "React",
                    "TypeScript",
                    "Python",
                    "PostgreSQL",
                    "REST APIs",
                    "Real-time Sync"
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
                    "Engineering estimation engine",
                    "Structured data input system",
                    "Approval & authorization workflow",
                    "Audit trail & edit tracking",
                    "AI optimization engine",
                    "Cost & material suggestion system",
                    "Estimate creation workflows",
                    "Multi-stage authorization",
                    "Full change history",
                    "Pattern analysis capabilities"
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