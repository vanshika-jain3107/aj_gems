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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* Full Uncropped Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group py-2">
          <div className="relative h-20 w-auto flex items-center justify-center shrink-0">
            <Image
              src="/images/logo-light.png"
              alt="AJ Gems Logo"
              width={160}
              height={80}
              priority
              style={{ width: "auto" }}
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(184,134,11,0.25)]"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-[#7A6F63] hover:text-[#B8892B] transition-colors font-sans py-1 font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Icon (WhatsApp Link) */}
        <div className="hidden md:flex items-center gap-1.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="text-[#B8892B] hover:text-[#D9A94E] p-2 transition-transform duration-300 hover:scale-110"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
