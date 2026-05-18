import Image from "next/image";

const galleryImages = [
  { src: "/images/gyutan.webp", alt: "Charcoal-grilled Gyutan", span: "col-span-2 row-span-2" },
  { src: "/images/oden-01.webp", alt: "Oden hot pot", span: "" },
  { src: "/images/kushi-yaki.webp", alt: "Beef skewers", span: "" },
  { src: "/images/steak.webp", alt: "Premium steak", span: "" },
  { src: "/images/set-meal.webp", alt: "Set meal course", span: "" },
  { src: "/images/agedashi-tofu.webp", alt: "Agedashi Tofu", span: "" },
  { src: "/images/oysters.jpg", alt: "Fresh oysters", span: "" },
  { src: "/images/seafood-don.webp", alt: "Roast Beef Don", span: "" },
  { src: "/images/warayaki.jpg", alt: "Warayaki Katsuo", span: "" },
  { src: "/images/interior-03.jpg", alt: "Restaurant interior", span: "" },
  { src: "/images/semi-private.webp", alt: "Semi-private dining", span: "" },
  { src: "/images/private-room.webp", alt: "Private room", span: "" },
  { src: "/images/food-01.jpg", alt: "Chef's special", span: "" },
  { src: "/images/food-02.jpg", alt: "Premium dish", span: "" },
  { src: "/images/food-03.jpg", alt: "Seasonal dish", span: "" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "auto" : "1/1" }}
            >
              <div className={i === 0 ? "h-[400px] md:h-[500px]" : "aspect-square"}>
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
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-white tracking-wide">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
