import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  slug: string;
  image: string;
  subtitle: string;
}

const categoriesData: CategoryCardProps[] = [
  {
    title: "Yellow Sapphire",
    slug: "yellow-sapphire",
    image: "/images/categories/Yellow sapphires.png",
    subtitle: "Ceylon",
  },
  {
    title: "Emerald",
    slug: "emerald",
    image: "/images/categories/Emeralds.png",
    subtitle: "Zimbian and Colombian",
  },
  {
    title: "Rubies",
    slug: "ruby",
    image: "/images/categories/Rubbies.png",
    subtitle: "Mozambique and Burma",
  },
  {
    title: "Blue Sapphire",
    slug: "blue-sapphire",
    image: "/images/categories/Blue sapphires.png",
    subtitle: "Ceylon",
  },
];

export default function CategoriesGrid() {
  return (
    <section id="categories" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-medium mb-3">
            Explore Collection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide">
            Gemstone Categories
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        {/* 4-Column Layout — Pure Images without Background Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/gemstones/${cat.slug}`}
              className="group flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Floating Gemstone PNG Image Only */}
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[0_12px_25px_rgba(0,0,0,0.9)]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-center"
                    unoptimized
                  />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-3 space-y-1">
                <h3 className="font-serif text-base sm:text-lg text-white group-hover:text-gold transition-colors font-normal tracking-wide">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-ivory/60 font-sans font-light uppercase tracking-wider line-clamp-1">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
