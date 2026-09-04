"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Gemstone } from "@/data/gemstones";
import { buildProductWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function GemstoneCard({ gem }: { gem: Gemstone }) {
  const whatsappUrl = buildWhatsAppLink(buildProductWhatsAppMessage(gem.name));
  const productUrl = `/gemstones/${gem.slug}`;

  return (
    <div className="group bg-charcoal border border-gold/20 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
      {/* Clickable Card Header & Body */}
      <Link href={productUrl} className="flex flex-col flex-1 cursor-pointer">
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/80">
          <Image
            src={gem.images[0] || "/images/gemstones/ruby-1.jpg"}
            alt={gem.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Details Container */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-gold/80 font-sans mb-2">
              <span>{gem.shape || gem.category}</span>
              <span>{gem.origin}</span>
            </div>

            <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-gold transition-colors font-normal mb-2 line-clamp-1">
              {gem.name}
            </h3>

            <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed line-clamp-2 mb-2">
              {gem.description}
            </p>
          </div>
        </div>
      </Link>

      {/* Actions Footer */}
      <div className="px-6 pb-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
        <Link
          href={productUrl}
          className="text-xs uppercase tracking-wider text-ivory/80 hover:text-gold font-sans transition-colors font-medium"
        >
          Details →
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 border border-gold/50 bg-gold/10 hover:bg-gold hover:text-black text-gold px-3.5 py-2 rounded-sm text-xs font-sans uppercase tracking-wider font-medium transition-all duration-300 shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Inquire</span>
        </a>
      </div>
    </div>
  );
}
