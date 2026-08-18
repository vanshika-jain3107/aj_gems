import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { getFeaturedGemstones } from "@/data/gemstones";
import { buildProductWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

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
          {featured.map((gem) => {
            const whatsappUrl = buildWhatsAppLink(
              buildProductWhatsAppMessage(gem.name)
            );

            return (
              <div
                key={gem.id}
                className="group bg-charcoal border border-gold/20 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              >
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
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-gold/80 font-sans mb-2">
                      <span>{gem.category}</span>
                      <span>{gem.origin}</span>
                    </div>

                    <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors font-normal mb-3 line-clamp-1">
                      {gem.name}
                    </h3>

                    <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed line-clamp-2 mb-6">
                      {gem.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
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
                      className="inline-flex items-center gap-2 border border-gold/50 bg-gold/10 hover:bg-gold hover:text-black text-gold px-4 py-2 rounded-sm text-xs font-sans uppercase tracking-wider font-medium transition-all duration-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Ask About This Stone</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
