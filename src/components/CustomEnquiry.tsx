import { MessageCircle, Sparkles } from "lucide-react";
import { buildEnquiryWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function CustomEnquiry() {
  const whatsappUrl = buildWhatsAppLink(buildEnquiryWhatsAppMessage());

  return (
    <section id="custom-enquiry" className="py-20 bg-charcoal border-b border-gold/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-black/60 border border-gold/30 text-gold mb-6">
          <Sparkles className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide mb-4">
          Can&rsquo;t find what you&rsquo;re looking for?
        </h2>

        <p className="text-sm sm:text-base text-ivory/80 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-8">
          Looking for a specific carat weight, rare origin, or custom gemstone cut? Send us your requirements directly and our Jaipur team will assist you in sourcing the ideal stone.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-black font-sans text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(201,164,92,0.25)]"
        >
          <MessageCircle className="w-4 h-4" />
          Send Custom Enquiry
        </a>
      </div>
    </section>
  );
}
