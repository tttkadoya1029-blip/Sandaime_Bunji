import Image from "next/image";

const galleryImages = [
  { src: "/images/gyutan.webp", alt: "Charcoal-grilled Gyutan" },
  { src: "/images/oden-01.webp", alt: "Oden hot pot" },
  { src: "/images/kushi-yaki.webp", alt: "Beef skewers" },
  { src: "/images/steak.webp", alt: "Premium steak" },
  { src: "/images/set-meal.webp", alt: "Set meal course" },
  { src: "/images/agedashi-tofu.webp", alt: "Agedashi Tofu" },
  { src: "/images/oysters.jpg", alt: "Fresh oysters" },
  { src: "/images/seafood-don.webp", alt: "Roast Beef Don" },
  { src: "/images/warayaki.jpg", alt: "Warayaki Katsuo" },
  { src: "/images/interior-03.jpg", alt: "Restaurant interior" },
  { src: "/images/semi-private.webp", alt: "Semi-private dining" },
  { src: "/images/private-room.webp", alt: "Private room" },
  { src: "/images/food-01.jpg", alt: "Chef's special" },
  { src: "/images/food-02.jpg", alt: "Premium dish" },
  { src: "/images/food-03.jpg", alt: "Seasonal dish" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--gold)" }}
          >
            Visual Journey
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6">
            Gallery
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  i === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-white tracking-wide">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
