import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Globe, Phone } from "lucide-react";
import {
  buildGeneralWhatsAppMessage,
  buildWhatsAppLink,
  AJ_GEMS_DISPLAY_PHONE,
  AJ_GEMS_PHONE_RAW,
  AJ_GEMS_INSTAGRAM_URL,
  AJ_GEMS_INSTAGRAM_HANDLE,
} from "@/lib/whatsapp";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gemstones", href: "/gemstones" },
  { label: "About Us", href: "/about" },
  { label: "Why AJ Gems", href: "/why-aj-gems" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const whatsappUrl = buildWhatsAppLink(buildGeneralWhatsAppMessage());
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/15 text-ivory pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative h-24 w-auto flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="AJ Gems Logo"
                  width={192}
                  height={96}
                  style={{ width: "auto" }}
                  className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(201,164,92,0.35)]"
                />
              </div>
              <div className="flex flex-col justify-center border-l border-gold/30 pl-3.5 py-1">
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-medium">
                  Natural Gemstones
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/80 font-sans font-light mt-0.5">
                  Jaipur, India
                </span>
              </div>
            </Link>

            <p className="text-xs text-ivory/70 font-sans font-light max-w-sm leading-relaxed">
              Dealer of fine, unheated, and natural gemstones in Johri Bazar, Jaipur. Sourced with integrity and delivered with worldwide insured shipping.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold/40 hover:border-gold bg-black/40 text-gold px-4 py-2 rounded-sm text-xs font-sans uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-base text-white font-normal uppercase tracking-wider border-b border-gold/20 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-sans uppercase tracking-widest text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Shipping Block */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base text-white font-normal uppercase tracking-wider border-b border-gold/20 pb-2 inline-block">
              Showroom Contact
            </h4>
            <div className="space-y-3 text-xs text-ivory/70 font-sans font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  Shop No. 149, Chandrwatan ki Gali, Ghee Walo Ka Rasta, Johri Bazar, Pink City, Jaipur, Rajasthan 302003, India
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${AJ_GEMS_PHONE_RAW}`} className="hover:text-gold transition-colors">
                  {AJ_GEMS_DISPLAY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <InstagramIcon className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={AJ_GEMS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {AJ_GEMS_INSTAGRAM_HANDLE}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Globe className="w-4 h-4 text-gold shrink-0" />
                <span>Worldwide Delivery & Insured Packaging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-ivory/50 font-light">
          <p>© {currentYear} AJ Gems. All rights reserved. Natural Gemstone Dealer in Jaipur, Rajasthan.</p>
          <p className="tracking-widest uppercase text-[10px] text-gold/80">
            Heritage • Authenticity • Craftsmanship
          </p>
        </div>
      </div>
    </footer>
  );
}
