import Image from "next/image";

const features = [
  {
    title: "Premium Beef Tongue",
    subtitle: "牛たん / Gyutan",
    description:
      "Charcoal-grilled 2-stage aged beef tongue, sliced thick for maximum tenderness.",
    image: "/images/gyutan.webp",
  },
  {
    title: "Oden",
    subtitle: "おでん",
    description:
      "Traditional slow-simmered Japanese hot pot with daikon, egg, fish cake and more.",
    image: "/images/oden-01.webp",
  },
  {
    title: "Roast Beef Don",
    subtitle: "ローストビーフ丼",
    description:
      "Premium roast beef over Japanese rice, topped with house special sauce.",
    image: "/images/seafood-don.webp",
  },
  {
    title: "Beef Skewers",
    subtitle: "牛串",
    description:
      "Charcoal-grilled wagyu skewers — sirloin, short rib, harami and toro tan.",
    image: "/images/kushi-yaki.webp",
  },
  {
    title: "Yakitori",
    subtitle: "焼き鳥",
    description:
      "Classic Japanese grilled chicken skewers — thigh, heart, wings, and more.",
    image: "/images/warayaki.jpg",
  },
  {
    title: "Sake & Highballs",
    subtitle: "日本酒・ハイボール",
    description:
      "Curated Japanese sake selection and premium highballs to complement every dish.",
    image: "/images/interior-01.webp",
  },
];

export default function FeaturedMenu() {
  return (
    <section
      id="menu"
      className="py-24 lg:py-32"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--gold)" }}
          >
            Signature Dishes
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6">
            Featured Menu
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800">
          {features.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden bg-neutral-950"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={375}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-xs tracking-widest mb-1"
                  style={{ color: "var(--gold)" }}
                >
                  {item.subtitle}
                </p>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
