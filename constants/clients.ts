export const FILTER_TABS = [
  "All",
  "E-Commerce",
  "HealthTech",
  "FinTech",
  "AdTech",
  "Crypto",
  "Artificial Intelligence",
  "Logistics",
  "Blockchain",
  "RegTech",
  "LegalTech",
  "EdTech",
  "Retail",
  "Event management",
  "Automotive",
  "Robotics",
  "Security & Risk management",
  "Human Resources",
  "CADaaS",
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
  {
    id: "chargebee",
    name: "Chargebee",
    fundingAmount: "$468.2M",
    websiteUrl: "#",
    description: "A robust and flexible billing & subscription management tool.",
    tags: {
      industry: "Subscription Management",
      country: "United States",
      fundingStage: "Series H",
    },
    filterTags: ["FinTech", "Subscription Management"],
    caseStudyUrl: "#",
  },
  {
    id: "pencil",
    name: "Pencil",
    fundingAmount: "$3.9M",
    websiteUrl: "#",
    description: "An out-of-the-box AI-powered ad-generating platform.",
    tags: {
      industry: "Adtech · AI",
      country: "Singapore",
      fundingStage: "Seed",
    },
    filterTags: ["AdTech", "Artificial Intelligence"],
    caseStudyUrl: "#",
    testimonialUrl: "#",
  },
  {
    id: "circle",
    name: "Circle",
    fundingAmount: "$1.5B",
    websiteUrl: "#",
    description:
      "Global fintech innovator powering seamless digital payments and commerce through its fully reserved stablecoins like USDC and EURC.",
    tags: {
      industry: "Cryptocurrency",
      country: "USA",
      fundingStage: "Series E",
    },
    filterTags: ["Crypto", "FinTech", "Blockchain"],
  },
];
