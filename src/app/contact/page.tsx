import Location from "@/components/Location";
import CustomEnquiry from "@/components/CustomEnquiry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Showroom Location | AJ Gems Jaipur",
  description: "Visit our Johri Bazar showroom in Jaipur or contact AJ Gems directly via WhatsApp for gemstone inquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-black">
      <Location />
      <CustomEnquiry />
    </main>
  );
}
