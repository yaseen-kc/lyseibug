"use client";

import { BRAND_NAME, NAV_ITEMS, NAV_TEXT } from "@/constants/content";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-indigo-900"
        >
          <Image
            src="https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/logo.webp"
            alt="Lyseibug logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span>{BRAND_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <div className="hidden md:block">
          <a
            href="https://cal.com/lyseibug"
            className="rounded-full border border-indigo-900 px-5 py-2 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50"
          >
            {NAV_TEXT.getStarted}
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <button
          className="absolute right-4 top-4 flex cursor-pointer items-center p-2 sm:right-6 lg:right-8 z-50"
          aria-label={NAV_TEXT.toggleAriaLabel}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="inline-flex items-center">
            {/* Hamburger icon */}
            <svg
              className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
            {/* Close icon */}
            <svg
              className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <a
                href="https://cal.com/lyseibug"
                className="mt-4 block w-full rounded-full border border-indigo-900 px-5 py-3 text-center font-semibold text-indigo-900 hover:bg-indigo-50 transition-colors"
              >
                {NAV_TEXT.getStarted}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
