"use client";

import { useState } from "react";
import { Gemstone } from "@/data/gemstones";
import GemstoneCard from "./GemstoneCard";
import { Filter } from "lucide-react";

interface GemstoneFilterProps {
  gemstones: Gemstone[];
}

export default function GemstoneFilter({ gemstones }: GemstoneFilterProps) {
  const [selectedShape, setSelectedShape] = useState<string>("All");

  const shapes = ["All", ...Array.from(new Set(gemstones.map((g) => g.shape)))];

  const filteredGemstones =
    selectedShape === "All"
      ? gemstones
      : gemstones.filter((g) => g.shape === selectedShape);

  return (
    <div className="space-y-8">
      {/* Filter Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gold/15">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-sans font-medium">
          <Filter className="w-4 h-4" />
          <span>Filter by Shape ({filteredGemstones.length} Items)</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {shapes.map((shape) => (
            <button
              key={shape}
              onClick={() => setSelectedShape(shape)}
              className={`px-3 py-1.5 text-xs font-sans rounded-sm transition-all uppercase tracking-wider ${
                selectedShape === shape
                  ? "bg-gold text-black font-semibold"
                  : "bg-charcoal text-ivory/70 border border-white/10 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {shape}
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
            No gemstones match the selected filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
