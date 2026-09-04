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
        className="flex items-center justify-center p-2 text-gold hover:text-gold/80 transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 text-gold" />
      </a>
    </motion.div>
  );
}
