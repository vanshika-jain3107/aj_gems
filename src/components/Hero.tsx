"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden border-b border-gold/10">
      {/* Mobile Hero View (screen size < sm) */}
      <div className="block sm:hidden relative w-full aspect-[4/3] min-h-[260px]">
        <Image
          src="/images/hero-banner-mobile.webp"
          alt="AJ Gems — Authentic Stones, Genuine Trust"
          fill
          priority
          quality={95}
          unoptimized
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </div>

      {/* Desktop Hero View (screen size >= sm) */}
      <div className="hidden sm:block relative w-full aspect-[2.35/1] min-h-[380px] md:min-h-[480px] lg:min-h-[560px]">
        <Image
          src="/images/hero-banner-desktop.webp"
          alt="AJ Gems — Authentic Stones, Genuine Trust"
          fill
          priority
          quality={95}
          unoptimized
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </div>
    </section>
  );
}
