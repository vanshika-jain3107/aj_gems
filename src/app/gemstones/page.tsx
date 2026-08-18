import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { gemstones } from "@/data/gemstones";
import GemstoneFilter from "@/components/GemstoneFilter";

export const metadata: Metadata = {
  title: "Natural Gemstones Catalogue | AJ Gems Jaipur, Rajasthan",
  description:
    "Browse our complete inventory of natural yellow sapphires, emeralds, rubies, and blue sapphires sourced in Jaipur.",
  openGraph: {
    title: "Natural Gemstones Catalogue | AJ Gems Jaipur, Rajasthan",
    description:
      "Browse our complete inventory of natural yellow sapphires, emeralds, rubies, and blue sapphires sourced in Jaipur.",
    type: "website",
  },
};

export default function GemstonesPage() {
  return (
    <main className="flex-1 bg-black text-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white font-sans transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium">
            Complete Inventory
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-light tracking-wide">
            Gemstone Catalogue
          </h1>
          <p className="text-sm sm:text-base text-ivory/80 font-sans font-light leading-relaxed">
            Explore our curated inventory of natural yellow sapphires, emeralds, rubies, and blue sapphires. Sourced from premier origins and faceted in Jaipur.
          </p>
        </div>

        {/* Filter & Grid */}
        <GemstoneFilter gemstones={gemstones} />
      </div>
    </main>
  );
}
