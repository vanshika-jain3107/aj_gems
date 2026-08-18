import { MapPin, ArrowRight, Gem } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal/50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-black/60">
              <Gem className="w-3.5 h-3.5 text-gold" />
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-gold font-medium">
                Jaipur Heritage & Craft
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-wide leading-tight">
              About <span className="text-gold italic font-normal">AJ Gems</span>
            </h2>

            <div className="space-y-4 text-ivory/80 font-sans text-sm sm:text-base font-light leading-relaxed">
              <p>
                Situated in the historic heart of Johri Bazar in Jaipur, AJ Gems deals in natural gemstones carefully sourced and checked for authenticity. We prioritize providing clear quality information so every client can acquire fine gems with complete peace of mind.
              </p>
              <p>
                Each gemstone in our shop is selected for its natural origin, visual character, and intrinsic value. Servicing both local buyers in India and collectors worldwide, we ensure every order is handled with personal care, transparent details, and secure packaging.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#location"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium hover:text-white transition-colors border-b border-gold/40 pb-1"
              >
                <span>Visit Us in Jaipur</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Address & Details Card */}
          <div className="lg:col-span-5 bg-charcoal border border-gold/20 p-8 sm:p-10 rounded-sm relative shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none" />

            <h3 className="font-serif text-2xl text-white font-normal mb-6 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Jaipur Showroom</span>
            </h3>

            <div className="space-y-6 text-sm text-ivory/80 font-sans font-light">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium block mb-1">
                  Full Address
                </span>
                <p className="leading-relaxed">
                  Shop No. 149, Chandrwatan ki Gali,<br />
                  Ghee Walo Ka Rasta, Johri Bazar,<br />
                  Pink City, Jaipur, Rajasthan 302003, India
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-medium block mb-1">
                    Specialization
                  </span>
                  <p className="text-xs">Natural Precious Gemstones</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-medium block mb-1">
                    Dispatch
                  </span>
                  <p className="text-xs">Worldwide Insured Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
