"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, ShieldCheck, Gem, Globe } from "lucide-react";
import { buildGeneralWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const trustBadges = [
  { label: "Natural Gemstones", icon: Gem },
  { label: "Quality Focused", icon: ShieldCheck },
  { label: "Jaipur Expertise", icon: MapPin },
  { label: "Worldwide Delivery", icon: Globe },
  { label: "Direct Communication", icon: MessageCircle },
];

export default function Hero() {
  const whatsappUrl = buildWhatsAppLink(buildGeneralWhatsAppMessage());

  return (
    <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden py-14 sm:py-16 md:py-20 border-b border-gold/10">
      {/* High-Resolution Hero Background Images (Responsive Mobile & Desktop) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile Background Image */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src="/images/hero-bg-mobile.png"
            alt="Natural Gemstones Showcase Mobile"
            fill
            priority
            quality={90}
            unoptimized
            sizes="100vw"
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>
        {/* Desktop Background Image */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/images/hero-bg.png"
            alt="Natural Gemstones and Jeweler Loupe Showcase Desktop"
            fill
            priority
            quality={90}
            unoptimized
            sizes="100vw"
            className="object-cover object-right select-none pointer-events-none"
          />
        </div>
        {/* Dark Luxury Gradient Overlay — Darkened for text legibility, keeping artwork clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-black/60 md:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/70 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-left flex flex-col items-start">
          {/* Heritage Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-charcoal/80 mb-5 backdrop-blur-sm shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
              Natural Gemstone Dealer • Jaipur
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.15] mb-5 drop-shadow-md"
          >
            Authentic Gemstones. <br />
            <span className="text-gold font-normal italic">Carefully Selected.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ivory/90 font-sans text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-7 drop-shadow-sm"
          >
            Based in Jaipur, India, AJ Gems deals in natural gemstones that are carefully sourced and checked for authenticity, with clear quality information so customers can buy with confidence. Each gemstone is selected for its natural origin, appearance, and value — serving clients locally and worldwide with secure delivery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto mb-8"
          >
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold/90 text-black font-sans text-xs uppercase tracking-[0.2em] font-semibold px-7 py-3.5 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(201,164,92,0.3)]"
            >
              Explore Gemstones
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-gold/40 hover:border-gold bg-charcoal/70 hover:bg-charcoal text-gold font-sans text-xs uppercase tracking-[0.2em] font-medium px-7 py-3.5 rounded-sm transition-all duration-300 backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust Badges Inline — 5 Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 w-full max-w-3xl pt-6 border-t border-white/15"
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex items-center justify-start gap-2 p-2 rounded bg-charcoal/70 border border-white/10 backdrop-blur-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-sans text-ivory/90 font-light tracking-wide truncate">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
