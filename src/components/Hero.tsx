"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden border-b border-gold/10">
      <div className="relative w-full aspect-[2.35/1] min-h-[260px] sm:min-h-[380px] md:min-h-[480px] lg:min-h-[560px]">
        {/* Dark Theme Hero Banner */}
        <div className="dark-hero-banner relative w-full h-full">
          <Image
            src="/images/hero-banner.png"
            alt="AJ Gems — Authentic Stones, Genuine Trust (Dark Theme)"
            fill
            priority
            quality={95}
            unoptimized
            sizes="100vw"
            className="object-cover object-center select-none"
          />
        </div>
        {/* Light Theme Hero Banner */}
        <div className="light-hero-banner relative w-full h-full">
          <Image
            src="/images/hero-banner-light.png"
            alt="AJ Gems — Authentic Stones, Genuine Trust (Light Theme)"
            fill
            priority
            quality={95}
            unoptimized
            sizes="100vw"
            className="object-cover object-center select-none"
          />
        </div>
      </div>
    </section>
  );
}


