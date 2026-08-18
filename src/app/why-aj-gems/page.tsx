import WhyAJGems from "@/components/WhyAJGems";
import HowItWorks from "@/components/HowItWorks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why AJ Gems | Natural Gemstone Quality & Process",
  description: "Discover why clients in India and worldwide choose AJ Gems for natural gemstone sourcing.",
};

export default function WhyAJGemsPage() {
  return (
    <main className="flex-1 bg-black">
      <WhyAJGems />
      <HowItWorks />
    </main>
  );
}
