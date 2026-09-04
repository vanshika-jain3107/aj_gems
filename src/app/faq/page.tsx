import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | AJ Gems Jaipur",
  description: "Find answers to common questions about authentic gemstones, certifications, pricing, shipping, and pre-purchase verification at AJ Gems.",
};

export default function FAQPage() {
  return (
    <main className="flex-1 bg-black py-12">
      <FAQ />
    </main>
  );
}
