import { Gem, ShieldCheck, MapPin, Globe, MessageCircle } from "lucide-react";

const trustItems = [
  {
    icon: Gem,
    title: "Natural Gemstones",
    description: "Focusing on natural gemstones carefully chosen for origin, color & value",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description: "Checked for authenticity and clarity with transparent details shared",
  },
  {
    icon: MapPin,
    title: "Jaipur Expertise",
    description: "Based in Johri Bazar — world-renowned historic gemstone district",
  },
  {
    icon: Globe,
    title: "Worldwide Delivery",
    description: "Protective packaging & tracked international shipment",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Direct WhatsApp access for close-up video, origin details & pricing",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-charcoal border-y border-gold/15 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-gold/15">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 pt-4 sm:pt-0 lg:px-6 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="trust-icon-circle p-2.5 rounded-full bg-black/60 border border-gold/30 shrink-0 text-gold shadow-inner mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-white font-normal tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-ivory/70 font-sans leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
