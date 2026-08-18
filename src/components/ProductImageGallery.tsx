"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export default function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "/images/gemstones/ruby-1.jpg");

  return (
    <div className="space-y-4">
      {/* Main Feature Image */}
      <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-charcoal border border-gold/20 shadow-xl">
        <Image
          src={selectedImage}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* Thumbnails if multiple images exist */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setSelectedImage(img)}
              className={`relative w-20 aspect-square rounded-sm overflow-hidden border transition-all ${
                selectedImage === img
                  ? "border-gold ring-1 ring-gold"
                  : "border-white/10 opacity-70 hover:opacity-100"
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
      )}
    </div>
  );
}
