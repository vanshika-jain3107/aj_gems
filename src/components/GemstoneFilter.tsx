"use client";

import { useState } from "react";
import { Gemstone } from "@/data/gemstones";
import GemstoneCard from "./GemstoneCard";
import { Filter } from "lucide-react";

interface GemstoneFilterProps {
  gemstones: Gemstone[];
}

const CATEGORY_OPTIONS = [
  "All",
  "Yellow Sapphire",
  "Emerald",
  "Rubies",
  "Blue Sapphire",
  "Others",
];

export default function GemstoneFilter({ gemstones }: GemstoneFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredGemstones = gemstones.filter((g) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Yellow Sapphire") return g.category === "Yellow Sapphire";
    if (selectedCategory === "Emerald") return g.category === "Emerald" || g.category === ("Emeralds" as any);
    if (selectedCategory === "Rubies") return g.category === "Ruby" || g.category === ("Rubies" as any);
    if (selectedCategory === "Blue Sapphire") return g.category === "Blue Sapphire";
    if (selectedCategory === "Others") {
      return !["Yellow Sapphire", "Emerald", "Emeralds", "Ruby", "Rubies", "Blue Sapphire"].includes(g.category);
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Filter Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold/15">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-sans font-medium">
          <Filter className="w-4 h-4" />
          <span>Top Categories ({filteredGemstones.length} Items)</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORY_OPTIONS.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-sans rounded-sm transition-all uppercase tracking-wider ${
                selectedCategory === cat
                  ? "bg-gold text-black font-semibold shadow-sm"
                  : "bg-charcoal text-ivory/70 border border-white/10 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      {filteredGemstones.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGemstones.map((gem) => (
            <GemstoneCard key={gem.id} gem={gem} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-charcoal border border-gold/15 p-8 rounded-sm">
          <p className="text-sm text-ivory/70 font-sans">
            No gemstones match the selected category filter.
          </p>
        </div>
      )}
    </div>
  );
}

