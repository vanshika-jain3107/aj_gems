import About from "@/components/About";
import Location from "@/components/Location";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AJ Gems Jaipur",
  description: "Learn about AJ Gems, a natural gemstone dealer based in Johri Bazar, Jaipur, Rajasthan.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-black">
      <About />
      <Location />
    </main>
  );
}
