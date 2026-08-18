"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsAppButton() {
  const whatsappUrl = buildWhatsAppLink(buildGeneralWhatsAppMessage());

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center gap-3 bg-black/90 hover:bg-gold border border-gold/60 text-gold hover:text-black p-3.5 sm:px-4.5 sm:py-3 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-current" />
        </span>
        <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase font-sans pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
