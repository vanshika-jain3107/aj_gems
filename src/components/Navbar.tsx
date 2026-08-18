import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import MobileNav from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gemstones", href: "/gemstones" },
  { label: "About Us", href: "/about" },
  { label: "Why AJ Gems", href: "/why-aj-gems" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const whatsappUrl = buildWhatsAppLink(buildGeneralWhatsAppMessage());

  return (
    <header className="sticky top-0 z-40 bg-charcoal/90 backdrop-blur-md border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Full Uncropped Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group py-2">
          <div className="relative h-20 w-auto flex items-center justify-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="AJ Gems Logo"
              width={160}
              height={80}
              priority
              style={{ width: "auto" }}
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(201,164,92,0.35)]"
            />
          </div>
          <div className="hidden sm:flex flex-col justify-center border-l border-gold/30 pl-3.5 py-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-medium">
              Natural Gemstones
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-ivory/80 font-sans font-light mt-0.5">
              Jaipur, India
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-ivory/85 hover:text-gold transition-colors font-sans py-1 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/50 bg-black/60 text-gold hover:bg-gold hover:text-black px-4.5 py-2.5 rounded-sm text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
