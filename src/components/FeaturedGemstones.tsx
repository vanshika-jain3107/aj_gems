import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedGemstones } from "@/data/gemstones";
import GemstoneCard from "./GemstoneCard";

export default function FeaturedGemstones() {
  const featured = getFeaturedGemstones().slice(0, 6);

  return (
    <section className="py-24 bg-charcoal/50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-3">
              Hand-Picked Selection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
              Featured Gemstones
            </h2>
          </div>
          <Link
            href="/gemstones"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-white font-sans font-medium transition-colors border-b border-gold/30 pb-1 self-start md:self-auto"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featured.map((gem) => (
            <GemstoneCard key={gem.id} gem={gem} />
          ))}
        </div>
      </div>
    </section>
  );
}
