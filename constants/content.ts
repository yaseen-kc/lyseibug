export type NavItem = { label: string; href: string };

export const BRAND_NAME = "Lyseibug";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // { label: "Case studies", href: "/cases" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const NAV_TEXT = {
  morePages: "More pages",
  getStarted: "Get started",
  toggleAriaLabel: "Toggle menu",
};


export const WHY_US_CONTENT = {
  badge: "Why choose us",
  heading: "Why partner with Lyseibug?",
  description:
    "Choosing the right software partner can define your business success. Here’s why companies trust us:",
  reasons: [
    {
      title: "Proven Expertise",
      description:
        "With years of hands-on experience, we deliver software that works seamlessly and scales with your business.",
    },
    {
      title: "Tailored Solutions",
      description:
        "No one-size-fits-all. We customize every project to match your unique requirements and objectives.",
    },
    {
      title: "End-to-End Support",
      description:
        "From consultation to deployment and ongoing support, we are with you every step of the way.",
    },
    {
      title: "Client-First Approach",
      description:
        "Your success is our priority. We collaborate closely to ensure our solutions drive measurable business impact.",
    },
  ],
  image: {
    src: "https://yaseen-personal-work.s3.ap-south-1.amazonaws.com/lyseibug/choose-us.webp",
    alt: "Software agency team working on project",
  },
} as const;

export type CaseStat = { icon: "chart" | "growth"; label: string };
export type CaseStudy = {
  client: string;
  title: string;
  image: { src: string; alt: string };
  stats: CaseStat[];
  cta: { label: string; href: string };
};

export const CASE_STUDIES_CONTENT = {
  badge: "Case studies",
  heading: "Our success stories",
  description:
    "See how we’ve helped businesses solve complex challenges with innovative software solutions.",
  items: [
    {
      client: "FinEdge Banking",
      title: "Custom ERP for finance management",
      image: { src: "/cases/erp.jpg", alt: "ERP software dashboard" },
      stats: [
        { icon: "growth", label: "40% Faster operations" },
        { icon: "chart", label: "30% Reduced costs" },
      ],
      cta: { label: "Full case study", href: "#" },
    },
    {
      client: "MobiMart",
      title: "Scalable eCommerce mobile app",
      image: { src: "/cases/mobile.jpg", alt: "Mobile shopping app" },
      stats: [
        { icon: "growth", label: "2x Customer engagement" },
        { icon: "chart", label: "65% Higher sales" },
      ],
      cta: { label: "Full case study", href: "#" },
    },
    {
      client: "TechStart",
      title: "Web platform rescue & optimization",
      image: { src: "/cases/web.jpg", alt: "Code optimization" },
      stats: [
        { icon: "growth", label: "99.9% Uptime" },
        { icon: "chart", label: "Improved performance" },
      ],
      cta: { label: "Full case study", href: "#" },
    },
  ] as CaseStudy[],
  viewAll: { label: "View all case studies", href: "#" },
} as const;

export const CTA_CONTENT = {
  headingLine1: "Need reliable software",
  headingLine2: "to power your business?",
  description:
    "Let’s discuss your project and explore how Lyseibug can design, build, and support the right technology for you.",
  cta: { label: "Schedule a free consultation", href: "https://cal.com/lyseibug" },
} as const;

export const FOOTER_CONTENT = {
  contact: {
    email: "info@lyseibug.com",
    phone: "+91 6238 712 791",
    addressLines: [
      "Venture Lab, SSMPTC",
      "Tirur, Kerala  676105",
      "India",
    ],
  },
  socials: [
    { label: "Twitter", href: "https://x.com/lyseibug" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/lyseibug" },
    { label: "Instagram", href: "https://www.instagram.com/lyseibug" },
    { label: "Facebook", href: "https://www.facebook.com/lyseibug" },
  ],
  columns: [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        // { label: "Case studies", href: "/cases" },
        { label: "FAQs", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Utility",
      links: [
        { label: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "Our services",
      links: [
        { label: "Web Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "ERP Solutions", href: "/services/erp-solutions" },
        { label: "Software Rescue", href: "/services/software-rescue" },
        { label: "IT Support & Consultancy", href: "/services/it-support-consultancy" },
      ],
    },
  ],
  bottomBar: {
    left: "Designed with passion by Lyseibug",
    right: `© Copyright ${new Date().getFullYear()}`,
  },
} as const;

export const FAQ_CONTENT = {
  badge: "FAQs",
  heading: "Frequently asked questions",
  description:
    "Quick answers to common questions about our services, process, pricing, and support.",
  faqs: [
    {
      q: "What services does Lyseibug provide?",
      a: "We build SEO-friendly websites, high-performance mobile apps, scalable ERP solutions, and offer reliable IT support and consulting.",
    },
    {
      q: "How do we start a project?",
      a: "Start with a free consultation. We gather requirements, propose a solution, share timelines and costs, and then kick off with clear milestones.",
    },
    {
      q: "What is your pricing model?",
      a: "We offer fixed-price for well-defined scopes and time-and-materials for ongoing or evolving work. We’ll recommend the best fit after discovery.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. We offer maintenance plans, uptime monitoring, bug fixes, enhancements, and scheduled updates based on your needs.",
    },
    {
      q: "Can you work with our existing codebase?",
      a: "Absolutely. We frequently audit, refactor, and rescue existing projects to improve stability, performance, and developer experience.",
    },
    {
      q: "What technologies do you use?",
      a: "We choose modern, proven stacks based on the problem—covering web, mobile, backend, and cloud. We prioritize reliability and long-term maintainability.",
    },
  ],
} as const;
