import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Authenticity | AJ Gems Jaipur",
  description: "Learn about laboratory gem certificates, pre-purchase verification, and quality standards at AJ Gems.",
};

export default function CertificationsPage() {
  return (
    <main className="flex-1 bg-black py-12">
      <FAQ />
    </main>
  );
}
