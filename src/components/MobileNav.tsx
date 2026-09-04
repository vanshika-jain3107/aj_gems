"use client";

import { useState, useEffect } from "react";
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

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="md:hidden flex items-center gap-2">
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#B8892B] hover:text-[#D9A94E] transition-transform focus:outline-none active:scale-95"
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-[#B8892B]" style={{ color: "#B8892B" }} />
        ) : (
          <Menu className="w-7 h-7 text-[#B8892B]" style={{ color: "#B8892B" }} />
        )}
      </button>

      {/* Mobile Menu Overlay Drawer */}
      {isOpen && (
        <>
          {/* Darkened Backdrop Overlay */}
          <div
            className="fixed inset-0 top-24 bg-black/40 backdrop-blur-xs z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Drawer */}
          <div
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E1D6" }}
            className="fixed inset-x-0 top-24 bg-white border-b p-6 shadow-2xl z-50 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ color: "#2B2420" }}
                  className="text-sm font-sans uppercase tracking-[0.2em] hover:text-[#B8892B] hover:bg-[#FAF7F2] transition-all py-3.5 px-3 rounded-sm border-b border-[#E8E1D6]/60 font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{ backgroundColor: "#B8892B", color: "#FFFFFF" }}
                className="w-full flex items-center justify-center gap-2 hover:bg-[#D9A94E] py-3.5 px-4 rounded-sm text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span className="text-white">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
