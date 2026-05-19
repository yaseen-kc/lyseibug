export const FILTER_TABS = [
  "All",
  "ERP",
  "Accounting",
  "Finance",
  "Fleet Management",
  "HRMS",
  "CRM",
  "Manufacturing",
  "Stock Management",
  "Retail",
  "POS",
  "Engineering",
  "AI",
  "Mobile App",
] as const;

export type FilterTab = typeof FILTER_TABS[number];

export interface ClientData {
  id: string;
  name: string;
  fundingAmount: string;
  websiteUrl: string;
  description: string;
  tags: {
    industry: string;
    country: string;
    fundingStage: string;
  };
  filterTags: string[];
  caseStudyUrl?: string;
  testimonialUrl?: string;
  coverImage?: string;
  logo?: string;
}

export const CLIENTS_DATA: ClientData[] = [
  // mappbee
  {
    id: "mappbee",
    name: "Mappbee",
    fundingAmount: "Custom Platform",
    websiteUrl: "https://mappbee.com/",
    description:
      "Business operations platform for accounting, finance tracking, fleet monitoring, employee management, and hardware-integrated workflows.",
    tags: {
      industry: "Fleet & Financial Management",
      country: "India",
      fundingStage: "Private",
    },
    filterTags: [
      "Accounting",
      "Finance",
      "Fleet Management",
      "HRMS",
    ],
    caseStudyUrl: "#",
    coverImage: "/clients/ci-mappbee.png",

  },
  // floreat
  {
    id: "floreat",
    name: "Floreat",
    fundingAmount: "Custom SaaS Platform",
    websiteUrl: "https://www.floreat.in/",
    description:
      "Engineering estimation platform for pre-engineered buildings with approval workflows, revision tracking, and AI-assisted estimate optimization.",
    tags: {
      industry: "Engineering SaaS",
      country: "India",
      fundingStage: "Private",
    },
    filterTags: [
      "Engineering",
      "AI",
    ],
    caseStudyUrl: "#",
    coverImage: "/clients/ci-floreat.png",
  },
  // aerodynamic aviation solutions
  {
    id: "aerodynamic-aviation-solutions",
    name: "Aerodynamic Aviation Solutions",
    fundingAmount: "ERP Implementation",
    websiteUrl: "https://aerodynamicuae.com/",
    description:
      "Enterprise operations platform supporting procurement, sales, HR, and financial workflows for an aviation infrastructure and airfield systems solutions provider.",
    tags: {
      industry: "Aviation Infrastructure",
      country: "UAE",
      fundingStage: "Enterprise",
    },
    filterTags: [
      "ERP",
      "HRMS",
      "Accounting",
      "Retail",
    ],
    caseStudyUrl: "#",
  },
  // ssm polytechnic college
  {
    id: "ssm-polytechnic",
    name: "SSM Polytechnic College",
    fundingAmount: "Campus ERP Platform",
    websiteUrl: "https://www.ssmpoly.ac.in/",
    description:
      "Comprehensive campus management platform for academic operations, attendance, examinations, fee management, placements, student lifecycle, and multi-role institutional administration.",
    tags: {
      industry: "EdTech & Campus Management",
      country: "India",
      fundingStage: "Enterprise",
    },
    filterTags: [
      "EdTech",
      "ERP",
      "Accounting",
      "HRMS",
      "Mobile App",
      "AI",
    ],
    caseStudyUrl: "/case-studies/ssmpoly",
    coverImage: "/clients/ci-ssmptc.png",
  },
  // black 22
  {
    id: "black-22",
    name: "Black 22",
    fundingAmount: "ERPNext Implementation",
    websiteUrl: "https://www.black22.net/",
    description:
      "Integrated ERPNext ecosystem enabling seamless business operations across procurement, finance, manufacturing, HR, attendance synchronization, and POS management.",
    tags: {
      industry: "ERP & Retail Operations",
      country: "Bahrain",
      fundingStage: "Enterprise",
    },
    filterTags: [
      "ERP",
      "Accounting",
      "HRMS",
      "Manufacturing",
      "Stock Management",
      "POS",
      "Retail",
    ],
    caseStudyUrl: "#",
    coverImage: "/clients/ci-black22.png",
  },
  // bab al khaleej
  {
    id: "bab-al-khaleej",
    name: "Bab Al Khaleej",
    fundingAmount: "ERPNext Implementation",
    websiteUrl: "https://www.babalkhaleejuae.com/",
    description:
      "ERPNext-powered business operations platform streamlining procurement, sales, accounting, inventory, manufacturing, HR, CRM, and van sales workflows.",
    tags: {
      industry: "ERP & Business Management",
      country: "UAE",
      fundingStage: "Enterprise",
    },
    filterTags: [
      "ERP",
      "Accounting",
      "HRMS",
      "CRM",
      "Manufacturing",
      "Stock Management",
      "Mobile App",
    ],
    caseStudyUrl: "#",
    coverImage: "/clients/ci-bab-al-khaleej.png",
  },
  // adorables
  {
    id: "adorables",
    name: "Adorables",
    fundingAmount: "ERP Implementation",
    websiteUrl: "https://adorables.online/",
    description:
      "Business operations platform streamlining HR management, production planning, accounting, procurement, and sales operations.",
    tags: {
      industry: "Manufacturing & Business Management",
      country: "India",
      fundingStage: "Enterprise",
    },
    filterTags: [
      "ERP",
      "HRMS",
      "Accounting",
      "Manufacturing",
      "Stock Management",
    ],
    caseStudyUrl: "#",
    coverImage: "/clients/ci-adorables.png",
  },
  // // ib trading
  // {
  //   id: "ib-trading",
  //   name: "IB Trading",
  //   fundingAmount: "ERP Implementation",
  //   websiteUrl: "#",
  //   description:
  //     "Trading management platform enabling procurement, sales operations, and accounting workflows for general trading businesses.",
  //   tags: {
  //     industry: "Trading & Distribution",
  //     country: "UAE",
  //     fundingStage: "Enterprise",
  //   },
  //   filterTags: [
  //     "ERP",
  //     "Accounting",
  //     "Retail",
  //     "Stock Management",
  //   ],
  //   caseStudyUrl: "#",
  // },
  // // bew
  // {
  //   id: "beww",
  //   name: "Bew",
  //   fundingAmount: "Business Management Platform",
  //   websiteUrl: "",
  //   description:
  //     "Integrated business platform for accounting, procurement, sales management, item variation handling, and WhatsApp-enabled CRM workflows.",
  //   tags: {
  //     industry: "Retail & CRM",
  //     country: "UAE",
  //     fundingStage: "Private",
  //   },
  //   filterTags: [
  //     "Accounting",
  //     "CRM",
  //     "Retail",
  //     "Stock Management",
  //   ],
  //   caseStudyUrl: "#",
  // },
  // // bellow
  // {
  //   id: "bellow",
  //   name: "Bellow",
  //   fundingAmount: "Travel Management Platform",
  //   websiteUrl: "#",
  //   description:
  //     "Travel agency management platform for client relationship handling, travel planning, booking workflows, and operational management.",
  //   tags: {
  //     industry: "TravelTech",
  //     country: "Oman",
  //     fundingStage: "Private",
  //   },
  //   filterTags: [
  //     "CRM",
  //   ],
  //   caseStudyUrl: "#",
  // },
];