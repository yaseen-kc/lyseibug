"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLIENTS_DATA, FILTER_TABS } from "@/constants/clients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function OurClientsPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredClients = CLIENTS_DATA.filter((client) => {
    if (activeTab === "All") return true;
    return client.filterTags.includes(activeTab);
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200/60 pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(2,6,23,0.08)_1px,_transparent_0)]"
          style={{ backgroundSize: "22px 22px" }}
        />
        <div className="mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-950 tracking-tight mb-4">
            Our clients
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We build ideas together.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto py-6 md:py-8">
        <div className="flex overflow-x-auto px-4 sm:px-6 pb-4 md:pb-0 gap-2 sm:gap-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth md:flex-wrap md:justify-center md:overflow-visible">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab
                ? "bg-indigo-900 text-white shadow-md transform scale-105"
                : "bg-white text-slate-600 border border-gray-200 hover:bg-slate-50 hover:text-indigo-900 hover:border-indigo-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Client Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Cover Image */}
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 w-full relative group-hover:opacity-95 transition-opacity">
                {client.coverImage ? (
                  <Image
                    src={client.coverImage}
                    alt={`${client.name} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : null}
              </div>

              <div className="pt-14 pb-8 px-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                      {client.name}
                    </h3>
                  </div>
                  <Link
                    href={client.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 rounded-lg text-sm font-semibold transition-colors border border-green-100"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                    {client.tags.industry}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                    {client.tags.country}
                  </span>
                  {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700">
                    {client.tags.fundingStage}
                  </span> */}
                </div>

                <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {client.description}
                </p>

                {(client.caseStudyUrl || client.testimonialUrl) && (
                  <div className="flex items-center gap-4 mt-auto pt-5 border-t border-gray-100">
                    {client.caseStudyUrl && (
                      <Link
                        href={client.caseStudyUrl}
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-2 group/link"
                      >
                        Case study
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform"
                        />
                      </Link>
                    )}
                    {client.testimonialUrl && (
                      <Link
                        href={client.testimonialUrl}
                        className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
                      >
                        Testimonial
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 border-dashed">
            <h3 className="text-lg font-medium text-slate-900 mb-1">No clients found</h3>
            <p className="text-slate-500">We don't have any clients in this category yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}
