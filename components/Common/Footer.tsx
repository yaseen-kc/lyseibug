import { BRAND_NAME, FOOTER_CONTENT } from "@/constants/content";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import type { ReactNode } from "react";

const socialIconMap: Record<string, ReactNode> = {
  Twitter: (
    <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" aria-hidden />
  ),
  LinkedIn: (
    <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" aria-hidden />
  ),
  Instagram: (
    <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" aria-hidden />
  ),
  Facebook: (
    <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" aria-hidden />
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top grid: Contact + Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand + contact */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 text-3xl font-semibold tracking-tight text-indigo-900 md:justify-start">
              <Image
                src="https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/logo.webp"
                alt="Lyseibug logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                priority
              />
              <span>{BRAND_NAME}</span>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div>{FOOTER_CONTENT.contact.email}</div>
              <div>{FOOTER_CONTENT.contact.phone}</div>
              <div>
                {FOOTER_CONTENT.contact.addressLines.map((line) => {
                  return <div key={line}>{line}</div>;
                })}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-4 md:justify-start">
              {FOOTER_CONTENT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-slate-700 transition-colors hover:bg-gray-50"
                >
                  {socialIconMap[s.label]}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {FOOTER_CONTENT.columns.map((col) => (
            <div key={col.title}>
              <h3 className="border-b border-gray-200 pb-2 text-base font-semibold text-slate-900">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-700 transition-colors hover:text-slate-900"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-slate-700 transition-colors hover:text-slate-900"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-700 md:flex-row md:text-left">
            <div>{FOOTER_CONTENT.bottomBar.left}</div>
            <div>{FOOTER_CONTENT.bottomBar.right}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
