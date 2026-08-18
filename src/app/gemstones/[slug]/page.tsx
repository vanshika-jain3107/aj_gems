import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Camera, Video, ShieldCheck, Truck, Award } from "lucide-react";
import { gemstones, getGemstoneBySlug, GemstoneCategory, CATEGORIES } from "@/data/gemstones";
import {
  buildProductWhatsAppMessage,
  buildPhotosWhatsAppMessage,
  buildVideoWhatsAppMessage,
  buildWhatsAppLink,
} from "@/lib/whatsapp";
import ProductImageGallery from "@/components/ProductImageGallery";
import GemstoneFilter from "@/components/GemstoneFilter";

const categorySlugMap: Record<string, GemstoneCategory> = {
  "yellow-sapphire": "Yellow Sapphire",
  emerald: "Emerald",
  ruby: "Ruby",
  "blue-sapphire": "Blue Sapphire",
  "sapphire-blue": "Blue Sapphire",
};

export function generateStaticParams() {
  const categoryParams = Object.keys(categorySlugMap).map((slug) => ({ slug }));
  const gemstoneParams = gemstones.map((gem) => ({ slug: gem.slug }));
  return [...categoryParams, ...gemstoneParams];
}

interface DynamicPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryEnum = categorySlugMap[slug];

  if (categoryEnum) {
    const categoryObj = CATEGORIES.find((c) => c.value === categoryEnum);
    const categoryTitle = categoryObj ? categoryObj.label : categoryEnum;
    const title = `${categoryTitle} in Jaipur | Natural ${categoryTitle} — AJ Gems`;
    const description = `Explore natural ${categoryTitle.toLowerCase()} carefully selected in Johri Bazar, Jaipur. Transparent quality details, unheated options, and insured worldwide delivery.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
      },
    };
  }

  const gem = getGemstoneBySlug(slug);
  if (gem) {
    const title = `${gem.name} (${gem.caratWeight}ct ${gem.shape}) | AJ Gems Jaipur`;
    const description = `Natural ${gem.naturalOrLabGrown.toLowerCase()} ${gem.name} from ${gem.origin}. ${gem.caratWeight} carats, ${gem.shape} cut. Contact via WhatsApp for pricing.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: gem.images.map((img) => ({ url: img, alt: gem.name })),
        type: "article",
      },
    };
  }

  return {
    title: "Gemstone Not Found | AJ Gems Jaipur",
  };
}

export default async function DynamicGemstonePage({ params }: DynamicPageProps) {
  const { slug } = await params;

  // 1. Check if slug is a category
  const categoryEnum = categorySlugMap[slug];
  if (categoryEnum) {
    const categoryObj = CATEGORIES.find((c) => c.value === categoryEnum);
    const categoryTitle = categoryObj ? categoryObj.label : categoryEnum;
    const categoryGemstones = gemstones.filter((g) => g.category === categoryEnum);

    return (
      <main className="flex-1 bg-black text-ivory py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Back Link */}
          <div>
            <Link
              href="/#categories"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white font-sans transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Categories</span>
            </Link>
          </div>

          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">
              Natural Gemstone Collection
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-white font-light tracking-wide">
              {categoryTitle}
            </h1>
            <p className="text-sm sm:text-base text-ivory/80 font-sans font-light leading-relaxed">
              Hand-selected, authentic {categoryTitle.toLowerCase()} sourced from historical mining origins and faceted by master cutters in Jaipur.
            </p>
          </div>

          {/* Filter & Grid */}
          <GemstoneFilter gemstones={categoryGemstones} />
        </div>
      </main>
    );
  }

  // 2. Check if slug is a product
  const gem = getGemstoneBySlug(slug);
  if (!gem) {
    notFound();
  }

  const askPriceUrl = buildWhatsAppLink(buildProductWhatsAppMessage(gem.name));
  const requestPhotosUrl = buildWhatsAppLink(buildPhotosWhatsAppMessage(gem.name));
  const requestVideoUrl = buildWhatsAppLink(buildVideoWhatsAppMessage(gem.name));

  const specFields = [
    { label: "Category / Type", value: gem.category },
    { label: "Natural / Lab Grown", value: gem.naturalOrLabGrown },
    { label: "Carat Weight", value: `${gem.caratWeight} Carats` },
    { label: "Cut / Shape", value: gem.shape },
    { label: "Color Grade", value: gem.color },
    { label: "Origin", value: gem.origin },
    { label: "Treatment", value: gem.treatment },
    { label: "Certification", value: gem.certification },
  ].filter((f) => f.value !== undefined && f.value !== "");

  return (
    <main className="flex-1 bg-black text-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/gemstones"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white font-sans transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Gemstones Catalogue</span>
          </Link>
        </div>

        {/* Top Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7">
            <ProductImageGallery images={gem.images} name={gem.name} />
          </div>

          {/* Right Column: Product Details & CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-sans mb-3">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>{gem.naturalOrLabGrown} Gemstone • {gem.origin}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide leading-tight mb-4">
                {gem.name}
              </h1>

              <div className="inline-block px-3 py-1 bg-charcoal border border-gold/30 rounded text-xs font-sans text-gold uppercase tracking-wider">
                Availability: In Stock (Jaipur Showroom)
              </div>
            </div>

            {/* Product Specifications Table */}
            <div className="bg-charcoal border border-gold/15 rounded-sm p-6 space-y-3">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium pb-2 border-b border-white/10">
                Gemstone Specifications
              </h3>
              <div className="divide-y divide-white/5 text-xs sm:text-sm font-sans">
                {specFields.map((spec) => (
                  <div key={spec.label} className="py-2.5 flex justify-between gap-4">
                    <span className="text-ivory/60 font-light">{spec.label}</span>
                    <span className="text-white font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Three WhatsApp CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={askPriceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-black font-sans text-xs uppercase tracking-[0.2em] font-semibold px-6 py-4 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(201,164,92,0.25)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Price on WhatsApp</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={requestPhotosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-gold/40 hover:border-gold bg-charcoal hover:bg-charcoal/80 text-gold font-sans text-xs uppercase tracking-wider font-medium px-4 py-3 rounded-sm transition-all"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Request More Photos</span>
                </a>

                <a
                  href={requestVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-gold/40 hover:border-gold bg-charcoal hover:bg-charcoal/80 text-gold font-sans text-xs uppercase tracking-wider font-medium px-4 py-3 rounded-sm transition-all"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Request Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Description & Quality/Shipping Notes */}
        <div className="border-t border-gold/15 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-2xl text-white font-normal">
              Gemstone Overview
            </h2>
            <p className="text-sm sm:text-base text-ivory/80 font-sans font-light leading-relaxed">
              {gem.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-charcoal border border-gold/15 p-6 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-gold font-sans text-xs uppercase tracking-wider font-medium">
                <Award className="w-4 h-4" />
                <span>Authenticity & Quality Note</span>
              </div>
              <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed">
                Every gemstone is inspected for natural origin, carat integrity, and visual brilliance prior to listing. Independent gemological laboratory certificates are available for applicable gemstones upon request.
              </p>
            </div>

            <div className="bg-charcoal border border-gold/15 p-6 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-gold font-sans text-xs uppercase tracking-wider font-medium">
                <Truck className="w-4 h-4" />
                <span>Worldwide Packaging & Shipping</span>
              </div>
              <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed">
                All gemstone orders are prepared in tamper-evident protective containers and dispatched with fully insured international courier tracking provided directly to you upon dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
