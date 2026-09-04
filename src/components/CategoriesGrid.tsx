import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  slug: string;
  image: string;
  subtitle: string;
  href?: string;
}

const categoriesData: CategoryCardProps[] = [
  {
    title: "Yellow Sapphire",
    slug: "yellow-sapphire",
    image: "/images/categories/light/yellow Sapphire.png",
    subtitle: "Ceylon",
  },
  {
    title: "Emerald",
    slug: "emerald",
    image: "/images/categories/light/Emeralds.png",
    subtitle: "Zambian and Colombian",
  },
  {
    title: "Rubies",
    slug: "ruby",
    image: "/images/categories/light/Rubies.png",
    subtitle: "Mozambique and Burma",
  },
  {
    title: "Blue Sapphire",
    slug: "blue-sapphire",
    image: "/images/categories/light/Blue sapphire.png",
    subtitle: "Ceylon",
  },
  {
    title: "Others",
    slug: "others",
    image: "/images/categories/light/others.png",
    subtitle: "Explore more",
    href: "/gemstones",
  },
];

export default function CategoriesGrid() {
  return (
    <section id="categories" className="py-4 sm:py-8 bg-black border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Flex Row Slider | Desktop: 5-Column Grid */}
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 sm:gap-8 sm:grid sm:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto pb-2 sm:pb-0 items-center justify-start sm:justify-center">
          {categoriesData.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href || `/gemstones/${cat.slug}`}
              className="group flex flex-col items-center text-center transition-all duration-300 flex-shrink-0 w-32 sm:w-auto snap-center"
            >
              {/* Floating Gemstone PNG Image Only */}
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain object-center"
                    unoptimized
                  />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-2 sm:mt-3 space-y-1">
                <h3 className="font-serif text-sm sm:text-lg text-white group-hover:text-gold transition-colors font-normal tracking-wide">
                  {cat.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-ivory/60 font-sans font-light uppercase tracking-wider line-clamp-1">
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
