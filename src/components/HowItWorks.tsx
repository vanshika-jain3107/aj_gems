import { Search, MessageSquare, FileCheck, CheckCircle2, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Find Your Gemstone",
    icon: Search,
    description: "Browse our catalogue or share your required gemstone specs.",
  },
  {
    step: "02",
    title: "Contact Us",
    icon: MessageSquare,
    description: "Reach out on WhatsApp to check live availability and current pricing.",
  },
  {
    step: "03",
    title: "Get Details",
    icon: FileCheck,
    description: "Receive detailed photos, high-res videos, and certificate info.",
  },
  {
    step: "04",
    title: "Confirm Your Order",
    icon: CheckCircle2,
    description: "Finalize your selection and arrange payment with our Jaipur team.",
  },
  {
    step: "05",
    title: "Secure Delivery",
    icon: Truck,
    description: "Your gemstone is securely packaged and shipped with insured tracking.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-charcoal/40 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-3">
            Simple & Transparent
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
            How It Works
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        {/* Desktop Stepper */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold/20 -translate-y-6 z-0" />

          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative z-10 flex flex-col items-center text-center p-6 bg-charcoal border border-gold/15 rounded-sm hover:border-gold/50 transition-colors"
              >
                <div className="trust-icon-circle w-12 h-12 rounded-full bg-black border border-gold/40 flex items-center justify-center text-gold mb-4 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-gold font-semibold mb-1">
                  Step {s.step}
                </span>
                <h3 className="font-serif text-base text-white font-normal mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Stepper */}
        <div className="lg:hidden flex flex-col gap-6 relative">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="flex items-start gap-4 p-6 bg-charcoal border border-gold/15 rounded-sm"
              >
                <div className="trust-icon-circle w-10 h-10 rounded-full bg-black border border-gold/40 flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-semibold font-sans">
                      Step {s.step}
                    </span>
                    <span className="w-4 h-px bg-gold/30" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-normal mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-ivory/70 font-sans font-light leading-relaxed">
                    {s.description}
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
