import { ShieldCheck, Award, FileText, MessageCircle } from "lucide-react";

const confidencePoints = [
  {
    title: "Natural Stones",
    icon: ShieldCheck,
    description:
      "Every gemstone in our inventory is evaluated for natural origin, gemstone structure, and color integrity.",
  },
  {
    title: "Quality Verification",
    icon: Award,
    description:
      "Detailed carat measurements, origin notes, and clarity descriptions are provided directly prior to purchase.",
  },
  {
    title: "Certification",
    icon: FileText,
    description:
      "Certificates available for applicable gemstones from recognized gemological testing laboratories upon request.",
  },
  {
    title: "Transparent Communication",
    icon: MessageCircle,
    description:
      "Direct consultation with our Jaipur team ensures clear answers regarding origin, heat treatments, and gemstone care.",
  },
];

export default function BuyWithConfidence() {
  return (
    <section id="buy-with-confidence" className="py-24 bg-black border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal/80 border border-gold/20 rounded-sm p-8 sm:p-12 lg:p-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-3">
              Trust & Transparency
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
              Buy With Confidence
            </h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-sans font-light mt-3">
              We prioritize complete clarity and personal service so every client purchases with peace of mind.
            </p>
            <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {confidencePoints.map((pt) => {
              const Icon = pt.icon;
              return (
                <div
                  key={pt.title}
                  className="flex items-start gap-5 p-6 rounded bg-black/40 border border-white/5 hover:border-gold/30 transition-colors"
                >
                  <div className="p-3 rounded bg-charcoal border border-gold/30 text-gold shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white font-normal mb-2">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
