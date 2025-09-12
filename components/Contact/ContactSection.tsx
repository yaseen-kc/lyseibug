import { FOOTER_CONTENT } from "@/constants/content";
import { Mail, Phone, MapPin, AtSign } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:py-24">
        {/* Top badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900">
            Contact us
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h1 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Ready to <span className="text-indigo-700">elevate</span> your
            digital presence?
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
            Whether you have questions about our services, want to discuss your
            project in detail, or simply want to say hello, we&apos;re here to
            help.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900 text-white">
              <Mail className="h-5 w-5" aria-hidden />
            </div>
            <div className="mt-4 text-sm text-slate-700">
              {FOOTER_CONTENT.contact.email}
            </div>
          </div>

          {/* Phone with divider */}
          <div className="relative flex flex-col items-center">
            <div
              className="hidden h-full w-px -left-10 top-0 md:absolute md:block bg-gray-200"
              aria-hidden
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900 text-white">
              <Phone className="h-5 w-5" aria-hidden />
            </div>
            <div className="mt-4 text-sm text-slate-700">
              {FOOTER_CONTENT.contact.phone}
            </div>
            <div
              className="hidden h-full w-px -right-10 top-0 md:absolute md:block bg-gray-200"
              aria-hidden
            />
          </div>

          {/* Address */}
          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900 text-white">
              <MapPin className="h-5 w-5" aria-hidden />
            </div>
            <div className="mt-4 text-sm text-slate-700">
              {FOOTER_CONTENT.contact.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900 text-white">
              <AtSign className="h-5 w-5" aria-hidden />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://x.com/lyseibug"
                aria-label="Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-slate-700 transition-colors hover:bg-gray-50"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="h-4 w-4"
                  aria-hidden
                />
              </a>
              <a
                href="https://www.linkedin.com/company/lyseibug"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-slate-700 transition-colors hover:bg-gray-50"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-4 w-4"
                  aria-hidden
                />
              </a>
              <a
                href="https://www.facebook.com/lyseibug"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-slate-700 transition-colors hover:bg-gray-50"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-4 w-4"
                  aria-hidden
                />
              </a>
              <a
                href="https://www.instagram.com/lyseibug"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-slate-700 transition-colors hover:bg-gray-50"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-4 w-4"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200" />

        {/* Contact form */}
        <ContactForm />
      </div>
    </section>
  );
}
