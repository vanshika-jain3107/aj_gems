"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { buildGeneralWhatsAppMessage, buildWhatsAppLink } from "@/lib/whatsapp";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are your gemstones natural?",
    answer:
      "Yes, AJ Gems deals in natural gemstones that are carefully inspected for their origin and character. We provide clear quality information so you can choose with complete confidence.",
  },
  {
    question: "Can I see the gemstone before purchasing?",
    answer:
      "Yes. We can share high-definition photographs, macro video footage taken under natural lighting, and conduct live WhatsApp consultations to show you the gemstone close up.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we serve customers both across India and internationally. Every international package is prepared with secure protective wrapping and shipped with reliable tracking.",
  },
  {
    question: "How can I know the price?",
    answer:
      "Because gemstone prices vary based on carat weight, clarity, color grade, and origin, please message us directly on WhatsApp for current availability and exact pricing for any stone.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Certificates are available for applicable gemstones from recognized gemological laboratories upon request.",
  },
  {
    question: "How can I place an order?",
    answer:
      "To place an order or inquire about a stone, simply click any WhatsApp CTA button on our site. Our Jaipur team will share full details, answer any questions, and confirm order steps with you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappUrl = buildWhatsAppLink(buildGeneralWhatsAppMessage());

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black border-b border-gold/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-3">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-charcoal border border-gold/15 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-white font-normal hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-ivory/80 font-sans font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 bg-charcoal/40 border border-gold/15 rounded-sm">
          <p className="text-xs text-ivory/70 font-sans mb-4">
            Have a specific question not covered here? Reach out to us directly.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/50 bg-gold/10 hover:bg-gold hover:text-black text-gold px-6 py-3 rounded-sm text-xs font-sans uppercase tracking-widest font-medium transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
