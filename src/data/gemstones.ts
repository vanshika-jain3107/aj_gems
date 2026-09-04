export type GemstoneCategory =
  | "Yellow Sapphire"
  | "Emerald"
  | "Ruby"
  | "Blue Sapphire";

export interface Gemstone {
  id: string;
  name: string;
  slug: string;
  category: GemstoneCategory;
  naturalOrLabGrown: "Natural" | "Lab Grown";
  origin: string;
  caratWeight: number;
  shape: string;
  color: string;
  treatment: string;
  certification?: string;
  description: string;
  images: string[];
  featured: boolean;
}

export const CATEGORIES: { label: string; value: GemstoneCategory }[] = [
  { label: "Yellow Sapphire", value: "Yellow Sapphire" },
  { label: "Emeralds", value: "Emerald" },
  { label: "Rubies", value: "Ruby" },
  { label: "Blue Sapphire", value: "Blue Sapphire" },
];

export const gemstones: Gemstone[] = [
  // YELLOW SAPPHIRE
  {
    id: "yellow-sapphire-03",
    name: "6.60 Ct Natural Yellow Sapphire (Pukhraj) Oval Shape",
    slug: "6.60-ct-natural-yellow-sapphire-pukhraj-oval-shape",
    category: "Yellow Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 6.60,
    shape: "Oval",
    color: "Vivid Canary Yellow",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "6.60 Ct Natural Yellow Sapphire (Pukhraj) Oval Shape | Unheated Ceylon Sapphire | Loose Certified Gemstone for Astrology Ring.",
    images: [
      "/images/gemstones/yellow-sapphire-6-60ct-1.jpg",
      "/images/gemstones/yellow-sapphire-6-60ct-2.jpg",
      "/images/gemstones/yellow-sapphire-6-60ct-3.jpg",
      "/images/gemstones/yellow-sapphire-6-60ct-4.jpg",
    ],
    featured: true,
  },
  {
    id: "yellow-sapphire-04",
    name: "6.18 Ct Natural Yellow Sapphire (Pukhraj) Octagon Cut",
    slug: "6.18-ct-natural-yellow-sapphire-pukhraj-octagon-cut",
    category: "Yellow Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 6.18,
    shape: "Octagon",
    color: "Canary Golden Yellow",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "6.18 Ct Natural Yellow Sapphire (Pukhraj) Octagon Cut | Unheated Ceylon Gemstone | Premium Loose Stone for Jupiter Ring.",
    images: [
      "/images/gemstones/yellow-sapphire-6-18ct-1.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-2.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-3.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-4.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-5.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-6.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-7.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-8.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-9.jpg",
      "/images/gemstones/yellow-sapphire-6-18ct-10.jpg",
    ],
    featured: true,
  },

  // EMERALD
  {
    id: "emerald-05",
    name: "7.94 Ct Natural Zambian Emerald (Panna) Rectangle Cut",
    slug: "7.94-ct-natural-zambian-emerald-panna-rectangle-cut",
    category: "Emerald",
    naturalOrLabGrown: "Natural",
    origin: "Zambia",
    caratWeight: 7.94,
    shape: "Rectangle",
    color: "Vivid Forest Green",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "7.94 Ct Natural Zambian Emerald (Panna) Rectangle Cut | Unheated Untreated Emerald | Premium Loose Green Gemstone.",
    images: [
      "/images/gemstones/emerald-7-94ct-1.jpg",
      "/images/gemstones/emerald-7-94ct-2.jpg",
      "/images/gemstones/emerald-7-94ct-3.jpg",
      "/images/gemstones/emerald-7-94ct-4.jpg",
      "/images/gemstones/emerald-7-94ct-5.jpg",
      "/images/gemstones/emerald-7-94ct-6.jpg",
    ],
    featured: true,
  },
  {
    id: "emerald-06",
    name: "2.88 Ct Natural Zambian Emerald (Panna) Square Cut",
    slug: "2.88-ct-natural-zambian-emerald-panna-square-cut",
    category: "Emerald",
    naturalOrLabGrown: "Natural",
    origin: "Zambia",
    caratWeight: 2.88,
    shape: "Square",
    color: "Vivid Green",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "2.88 Ct Natural Zambian Emerald (Panna) Square Cut | Unheated Loose Gemstone | Certified Green Emerald for Jewelry.",
    images: [
      "/images/gemstones/emerald-7-94ct-1.jpg",
      "/images/gemstones/emerald-7-94ct-2.jpg",
      "/images/gemstones/emerald-7-94ct-3.jpg",
      "/images/gemstones/Natural-Emerald-Loose-Gemstone-2-88-Ct.jpeg_480x480.avif",
    ],
    featured: true,
  },

  // BLUE SAPPHIRE
  {
    id: "blue-sapphire-03",
    name: "7.30 Ct Natural Blue Sapphire (Neelam) Oval Cut",
    slug: "7.30-ct-natural-blue-sapphire-neelam-oval-cut",
    category: "Blue Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 7.30,
    shape: "Oval",
    color: "Royal Blue",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "7.30 Ct Natural Blue Sapphire (Neelam) Oval Cut | Unheated Ceylon Sapphire | Loose Powerful Astrology Gemstone.",
    images: [
      "/images/gemstones/blue-sapphire-7-30ct-1.jpg",
      "/images/gemstones/blue-sapphire-7-30ct-2.jpg",
      "/images/gemstones/blue-sapphire-7-30ct-3.jpg",
      "/images/gemstones/blue-sapphire-7-30ct-4.jpg",
    ],
    featured: true,
  },
  {
    id: "blue-sapphire-04",
    name: "8.35 Ct Natural Blue Sapphire (Neelam) Round Cut",
    slug: "8.35-ct-natural-blue-sapphire-neelam-round-cut",
    category: "Blue Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 8.35,
    shape: "Round",
    color: "Vivid Royal Blue",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "8.35 Ct Natural Blue Sapphire (Neelam) Round Cut | Unheated Ceylon Stone | High Quality Loose Gemstone for Saturn Ring.",
    images: [
      "/images/gemstones/blue-sapphire-8-35ct-1.jpg",
      "/images/gemstones/blue-sapphire-8-35ct-2.jpg",
      "/images/gemstones/blue-sapphire-8-35ct-3.jpg",
      "/images/gemstones/blue-sapphire-8-35ct-4.jpg",
      "/images/gemstones/blue-sapphire-8-35ct-5.jpg",
      "/images/gemstones/blue-sapphire-8-35ct-6.jpg",
      "/images/gemstones/blue-sapphire-8-35ct-7.jpg",
    ],
    featured: true,
  },

  // RUBY
  {
    id: "ruby-03",
    name: "5.67 Ct Natural Burma Ruby (Manik) Rectangle Cut",
    slug: "5.67-ct-natural-burma-ruby-manik-rectangle-cut",
    category: "Ruby",
    naturalOrLabGrown: "Natural",
    origin: "Myanmar (Burma)",
    caratWeight: 5.67,
    shape: "Rectangle",
    color: "Vivid Pigeon Blood Red",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "5.67 Ct Natural Burma Ruby (Manik) Rectangle Cut | Unheated Burmese Ruby | Premium Loose Red Gemstone for Ring.",
    images: [
      "/images/gemstones/ruby-5-67ct-1.jpg",
      "/images/gemstones/ruby-5-67ct-2.jpg",
      "/images/gemstones/ruby-5-67ct-3.jpg",
      "/images/gemstones/ruby-5-67ct-4.jpg",
      "/images/gemstones/ruby-5-67ct-5.jpg",
      "/images/gemstones/ruby-5-67ct-6.jpg",
      "/images/gemstones/ruby-5-67ct-7.jpg",
      "/images/gemstones/ruby-5-67ct-8.jpg",
    ],
    featured: true,
  },
  {
    id: "ruby-04",
    name: "4.29 Ct Natural Burma Ruby (Manik) Oval Cut",
    slug: "4.29-ct-natural-burma-ruby-manik-oval-cut",
    category: "Ruby",
    naturalOrLabGrown: "Natural",
    origin: "Myanmar (Burma)",
    caratWeight: 4.29,
    shape: "Oval",
    color: "Vivid Red",
    treatment: "Unheated & Untreated",
    certification: "Certificate available on request",
    description:
      "4.29 Ct Natural Burma Ruby (Manik) Oval Cut | Unheated Burmese Gemstone | High Quality Loose Ruby for Jewelry.",
    images: [
      "/images/gemstones/ruby-4-29ct-1.jpg",
      "/images/gemstones/ruby-4-29ct-2.jpg",
      "/images/gemstones/ruby-4-29ct-3.jpg",
      "/images/gemstones/ruby-4-29ct-4.jpg",
      "/images/gemstones/ruby-4-29ct-5.jpg",
      "/images/gemstones/ruby-4-29ct-6.jpg",
      "/images/gemstones/ruby-4-29ct-7.jpg",
      "/images/gemstones/ruby-4-29ct-8.jpg",
    ],
    featured: true,
  },
];

export function getFeaturedGemstones(): Gemstone[] {
  return gemstones.filter((gem) => gem.featured);
}

export function getGemstonesByCategory(category: GemstoneCategory): Gemstone[] {
  return gemstones.filter((gem) => gem.category === category);
}

export function getGemstoneBySlug(slug: string): Gemstone | undefined {
  return gemstones.find((gem) => gem.slug === slug);
}
