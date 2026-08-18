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
  // EMERALDS (Using real product photos from Johri Bazar inventory)
  {
    id: "emerald-01",
    name: "Colombian Muzo Green Emerald 2.90ct",
    slug: "colombian-muzo-green-emerald-2.90ct",
    category: "Emerald",
    naturalOrLabGrown: "Natural",
    origin: "Colombia",
    caratWeight: 2.90,
    shape: "Octagon Cut",
    color: "Vivid Green",
    treatment: "Minor Traditional Clarity Enhancement (Cedar Wood Oil)",
    certification: "Certificate available on request",
    description:
      "Distinguished 2.90-carat Colombian emerald originating from Muzo region mines. Vibrant green hue with classic light jardin internal inclusions characteristic of natural Colombian emeralds.",
    images: [
      "/images/gemstones/Green-Emerald-Gemstone-Natural-Loose-Emerald-3.jpeg_480x480.avif",
      "/images/gemstones/Natural-Emerald-Loose-Gemstone-2-88-Ct.jpeg_480x480.avif",
    ],
    featured: true,
  },
  {
    id: "emerald-02",
    name: "Natural Zambian Emerald Heart 5.24ct",
    slug: "natural-zambian-emerald-heart-5.24ct",
    category: "Emerald",
    naturalOrLabGrown: "Natural",
    origin: "Zambia",
    caratWeight: 5.24,
    shape: "Heart Shape",
    color: "Deep Forest Green",
    treatment: "Minor Oil",
    certification: "Certificate available on request",
    description:
      "Substantial 5.24ct heart-shaped Zambian emerald with rich green body color, excellent facet symmetry, and strong luster.",
    images: [
      "/images/gemstones/5-24-Ct-Heart-Shape-Zambian-Emerald.jpeg_480x480.avif",
      "/images/gemstones/Natural-4-97-ct-Zambian-Emerald-Heart.jpeg_480x480.avif",
    ],
    featured: true,
  },
  {
    id: "emerald-03",
    name: "Natural Green Zambian Octagon Emerald 7.94ct",
    slug: "natural-green-zambian-octagon-emerald-7.94ct",
    category: "Emerald",
    naturalOrLabGrown: "Natural",
    origin: "Zambia",
    caratWeight: 7.94,
    shape: "Octagon Emerald Cut",
    color: "Vivid Forest Green",
    treatment: "Insignificant Oil",
    certification: "Certificate available on request",
    description:
      "Collector grade 7.94-carat Zambian emerald cut in classic step-cut emerald geometry. Electric green saturation and exceptional crystal transparency.",
    images: [
      "/images/gemstones/Natural-7-94ct-Green-Octagon-Emerald-Loose.png_480x480.avif",
      "/images/gemstones/Natural-Green-Zambian-Emerald-6-95-ct.jpeg_480x480.avif",
    ],
    featured: true,
  },
  {
    id: "emerald-04",
    name: "Natural Zambian Pear Emerald 4.15ct",
    slug: "natural-zambian-pear-emerald-4.15ct",
    category: "Emerald",
    naturalOrLabGrown: "Natural",
    origin: "Zambia",
    caratWeight: 4.15,
    shape: "Pear Cut",
    color: "Deep Green",
    treatment: "Minor Oil",
    description:
      "Elegant 4.15ct pear-cut Zambian emerald displaying intense green highlights and superior teardrop outline for fine pendant craft.",
    images: [
      "/images/gemstones/Natural-Zambian-Emerald-4-15-Ct-Pear.jpeg_480x480.avif",
      "/images/gemstones/Natural-Zambian-Emerald-4-98-ct-Pear.jpeg_480x480.avif",
    ],
    featured: false,
  },

  // YELLOW SAPPHIRE
  {
    id: "yellow-sapphire-01",
    name: "Natural Ceylon Yellow Sapphire 9.80ct",
    slug: "natural-ceylon-yellow-sapphire-9.80ct",
    category: "Yellow Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 9.80,
    shape: "Cushion Cut",
    color: "Top Golden Canary Yellow",
    treatment: "Unheated / Natural",
    certification: "Certificate available on request",
    description:
      "Rare 9.80ct unheated natural Ceylon yellow sapphire (Pukhraj) boasting vivid canary yellow color purity. Exceptional sparkle suitable for fine astrology and high jewelry.",
    images: [
      "/images/gemstones/Top-Quality-Yellow-Sapphire-9-80-ct.png_480x480.avif",
      "/images/gemstones/Natural-Yellow-Sapphire-5-60-ct-Square.png_480x480.avif",
    ],
    featured: true,
  },
  {
    id: "yellow-sapphire-02",
    name: "Golden Imperial Yellow Sapphire 5.60ct",
    slug: "golden-imperial-yellow-sapphire-5.60ct",
    category: "Yellow Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 5.60,
    shape: "Square Cut",
    color: "Golden Yellow",
    treatment: "Unheated",
    certification: "Certificate available on request",
    description:
      "Warm golden yellow sapphire with intense fire and high clarity. Hand-polished in Jaipur.",
    images: [
      "/images/gemstones/Natural-Yellow-Sapphire-5-60-ct-Square.png_480x480.avif",
    ],
    featured: false,
  },

  // SAPPHIRE BLUE / WHITE
  {
    id: "blue-sapphire-01",
    name: "Ceylon Royal Blue Sapphire 4.20ct",
    slug: "ceylon-royal-blue-sapphire-4.20ct",
    category: "Blue Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 4.20,
    shape: "Oval Cut",
    color: "Royal Blue",
    treatment: "Unheated / Natural",
    certification: "Certificate available on request",
    description:
      "An exceptional 4.20ct unheated Sri Lankan blue sapphire exhibiting the coveted Royal Blue hue. High transparency and facet symmetry.",
    images: [
      "/images/gemstones/S5ab5fabe36b94449b75d6825ebc52ed43.png_960x960q80.avif",
      "/images/gemstones/blue-sapphire-1.jpg",
    ],
    featured: true,
  },
  {
    id: "blue-sapphire-02",
    name: "Natural White Sapphire Rectangle 5.20ct",
    slug: "natural-white-sapphire-rectangle-5.20ct",
    category: "Blue Sapphire",
    naturalOrLabGrown: "Natural",
    origin: "Sri Lanka (Ceylon)",
    caratWeight: 5.20,
    shape: "Rectangle Radiant",
    color: "Colorless Pure White",
    treatment: "Untreated / Unheated",
    certification: "Certificate available on request",
    description:
      "Prismatic 5.20ct natural untreated white sapphire with diamond-like brilliance and step-cut clarity.",
    images: [
      "/images/gemstones/5-20-ct-White-Sapphire-Rectangle-Shape.png_480x480.avif",
    ],
    featured: false,
  },

  // RUBY
  {
    id: "ruby-01",
    name: "Natural Mozambique Pigeon Blood Ruby 3.15ct",
    slug: "natural-mozambique-pigeon-blood-ruby-3.15ct",
    category: "Ruby",
    naturalOrLabGrown: "Natural",
    origin: "Mozambique",
    caratWeight: 3.15,
    shape: "Cushion Cut",
    color: "Vivid Red (Pigeon Blood)",
    treatment: "Unheated / Natural",
    certification: "Certificate available on request",
    description:
      "A magnificent 3.15-carat unheated natural ruby featuring the revered 'Pigeon Blood' hue. Precision-faceted in Jaipur.",
    images: [
      "/images/gemstones/S98a39c4776d146ad94756ffe38448bb7l.png_960x960q80.avif",
      "/images/gemstones/ruby-1.jpg",
    ],
    featured: true,
  },
  {
    id: "ruby-02",
    name: "High Quality Cushion Ruby 3.69ct",
    slug: "high-quality-cushion-ruby-3.69ct",
    category: "Ruby",
    naturalOrLabGrown: "Natural",
    origin: "Myanmar (Burma)",
    caratWeight: 3.69,
    shape: "Cushion Cut",
    color: "Deep Crimson Red",
    treatment: "Traditional Heat Only",
    certification: "Certificate available on request",
    description:
      "Classic Burmese ruby possessing rich crimson undertones and velvety internal fire. Perfectly proportioned cushion cut crafted by veteran Jaipur artisans.",
    images: [
      "/images/gemstones/High-Quality-3-69-ct-Cushion-Cut.png_480x480.avif",
      "/images/gemstones/ruby-2.jpg",
    ],
    featured: false,
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
