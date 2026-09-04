"use client";

import { useState, useRef, useEffect, TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export default function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const displayImages = images.length > 0 ? images : ["/images/gemstones/ruby-1.jpg"];
  const currentImage = displayImages[selectedIndex] || displayImages[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll selected thumbnail into center view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const selectedThumb = thumbnailContainerRef.current.children[selectedIndex] as HTMLElement;
      if (selectedThumb) {
        selectedThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedIndex]);

  // Thumbnail bar navigation scroll
  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      thumbnailContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Mobile / Touch Swipe Gestures
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 25) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="space-y-4">
      {/* Main Feature Image Viewport Slider */}
      <div
        className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-charcoal border border-gold/20 shadow-xl group select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={currentImage}
          alt={`${name} - Image ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-all duration-300"
        />

        {/* Previous & Next Main Image Arrows (Desktop Only - Hidden on Mobile) */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="product-gallery-btn hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/65 hover:bg-gold text-white hover:text-black border border-gold/30 transition-all duration-300 shadow-md z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="product-gallery-btn hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/65 hover:bg-gold text-white hover:text-black border border-gold/30 transition-all duration-300 shadow-md z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter Badge */}
            <div className="product-gallery-badge absolute bottom-3 right-3 px-3 py-1 rounded bg-black/75 border border-gold/30 text-white font-sans text-xs font-medium backdrop-blur-md shadow z-10">
              {selectedIndex + 1} / {displayImages.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Row with Left/Right Slider Controls */}
      {displayImages.length > 1 && (
        <div className="relative flex items-center group/thumbs px-1">
          {/* Left Scroll Button */}
          <button
            onClick={() => scrollThumbnails("left")}
            aria-label="Scroll thumbnails left"
            className="product-gallery-btn hidden sm:flex absolute -left-2 z-10 p-1.5 rounded-full bg-black/80 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all shadow-md opacity-0 group-hover/thumbs:opacity-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Thumbnail Strip */}
          <div
            ref={thumbnailContainerRef}
            className="flex gap-3 overflow-x-auto py-1 px-1 w-full scroll-smooth scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayImages.map((img, idx) => (
              <button
                key={`${img}-${idx}`}
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View image ${idx + 1}`}
                className={`relative w-20 aspect-square shrink-0 rounded-sm overflow-hidden border transition-all duration-200 ${
                  selectedIndex === idx
                    ? "border-gold ring-2 ring-gold/60 opacity-100 scale-[1.02]"
                    : "border-white/15 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${name} thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </button>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scrollThumbnails("right")}
            aria-label="Scroll thumbnails right"
            className="product-gallery-btn hidden sm:flex absolute -right-2 z-10 p-1.5 rounded-full bg-black/80 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all shadow-md opacity-0 group-hover/thumbs:opacity-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
