import { Gem, ShieldCheck, MapPin, Globe, MessageCircle } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Natural Gemstones",
    icon: Gem,
    description:
      "Focusing on natural gemstones carefully chosen for their natural origin, color appearance, and intrinsic value.",
  },
  {
    number: "02",
    title: "Quality Focused",
    icon: ShieldCheck,
    description:
      "Checked for authenticity and clarity with transparent quality details shared so customers can make informed choices.",
  },
  {
    number: "03",
    title: "Jaipur Expertise",
    icon: MapPin,
    description:
      "Based in Johri Bazar, Jaipur — the world-renowned historic gemstone cutting and trading district of Rajasthan.",
  },
  {
    number: "04",
    title: "Worldwide Delivery",
    icon: Globe,
    description:
      "Serves clients locally across India and internationally with secure protective packaging and tracked shipment.",
  },
  {
    number: "05",
    title: "Direct Communication",
    icon: MessageCircle,
    description:
      "Direct WhatsApp access to inspect close-up gemstone footage, origin details, and pricing prior to order confirmation.",
  },
];

export default function WhyAJGems() {
  return (
    <section id="why-aj-gems" className="py-24 bg-black border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-3">
            Our Core Principles
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
            Why AJ Gems
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-charcoal border border-gold/15 p-8 rounded-sm relative flex flex-col justify-between group hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl text-gold/30 group-hover:text-gold transition-colors">
                    {pillar.number}
                  </span>
                  <div className="p-2.5 rounded bg-black/60 border border-gold/20 text-gold">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-white font-normal mb-3 group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed">
                    {pillar.description}
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
