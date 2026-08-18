"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = buildWhatsAppLink(buildGeneralWhatsAppMessage());

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-ivory hover:text-gold transition-colors focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-charcoal/95 backdrop-blur-md border-b border-gold/20 py-6 px-6 flex flex-col gap-5 shadow-2xl z-50">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-sans uppercase tracking-widest text-ivory/90 hover:text-gold transition-colors py-1 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-black py-3 px-4 rounded-sm text-xs font-medium uppercase tracking-widest transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-gold/20" />
            WhatsApp Us
          </a>
        </div>
      )}
    </div>
  );
}
