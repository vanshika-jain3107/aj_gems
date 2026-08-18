import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { Gemstone } from "@/data/gemstones";
import { buildProductWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function GemstoneCard({ gem }: { gem: Gemstone }) {
  const whatsappUrl = buildWhatsAppLink(buildProductWhatsAppMessage(gem.name));

  return (
    <div className="group bg-charcoal border border-gold/20 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/80">
        <Image
          src={gem.images[0] || "/images/gemstones/ruby-1.jpg"}
          alt={gem.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-gold/30 rounded-full text-[10px] uppercase tracking-wider text-gold font-sans font-medium">
          <ShieldCheck className="w-3 h-3 text-gold" />
          <span>{gem.naturalOrLabGrown}</span>
        </div>
        <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded text-[11px] font-sans font-medium text-ivory">
          {gem.caratWeight} ct
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-gold/80 font-sans mb-2">
            <span>{gem.shape}</span>
            <span>{gem.origin}</span>
          </div>

          <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors font-normal mb-2 line-clamp-1">
            {gem.name}
          </h3>

          <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed line-clamp-2 mb-6">
            {gem.description}
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <Link
            href={`/gemstones/${gem.slug}`}
            className="text-xs uppercase tracking-wider text-ivory/80 hover:text-white font-sans transition-colors"
          >
            Details
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-gold/50 bg-gold/10 hover:bg-gold hover:text-black text-gold px-3.5 py-2 rounded-sm text-xs font-sans uppercase tracking-wider font-medium transition-all duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
