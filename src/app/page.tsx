import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedGemstones from "@/components/FeaturedGemstones";
import WhyAJGems from "@/components/WhyAJGems";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CustomEnquiry from "@/components/CustomEnquiry";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-black">
      <Hero />
      <CategoriesGrid />
      <TrustStrip />
      <FeaturedGemstones />
      <WhyAJGems />
      <HowItWorks />
      <About />
      <FAQ />
      <CustomEnquiry />
      <Location />
    </main>
  );
}
