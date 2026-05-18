import Image from "next/image";

const platters = [
  { name: "Oden Mixed Platter 7p", price: "$28.90" },
  { name: "Oden Mixed Platter 12p", price: "$46.90" },
];

const alaCarteItems = [
  "Daikon",
  "Tamago",
  "Gyusuji",
  "Chikuwabu",
  "Yakichikuwa",
  "Mochikin",
  "Konnyaku",
  "Shirataki",
  "Satsuma Age",
  "Kuro Hanpen",
  "Goboumaki",
  "Hanpen",
  "Sakana Suji",
  "Chicken Wings",
];

export default function OdenSection() {
  return (
    <section
      id="oden"
      className="py-24 lg:py-32 border-t border-stone-900"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/oden-01.webp"
              alt="Oden hot pot"
              width={600}
              height={520}
              className="w-full h-[400px] lg:h-[520px] object-cover"
            />
            <div className="absolute top-6 -right-6 z-10">
              <Image
                src="/images/oden-02.webp"
                alt="Oden close up"
                width={180}
                height={180}
                className="w-36 h-36 object-cover border-4 border-neutral-950"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r"
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
            />
          </div>

          <div className="order-1 lg:order-2">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
              style={{ color: "var(--gold)" }}
            >
              Japanese Hot Pot
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6">
              Oden · おでん
            </h2>
            <div className="section-divider mb-8" style={{ margin: "0 0 2rem 0" }} />

            <p className="text-stone-400 text-sm leading-relaxed mb-8">
              Our oden is slow-simmered for hours in a rich dashi broth, creating
              deep, warming flavors that embody the soul of traditional Japanese
              winter cuisine. Each ingredient absorbs the umami-rich broth to perfection.
            </p>

            <div className="space-y-0 mb-8">
              {platters.map((platter) => (
                <div
                  key={platter.name}
                  className="menu-item flex items-center justify-between py-4"
                >
                  <p className="text-stone-200 font-medium">{platter.name}</p>
                  <span
                    className="font-display text-xl font-semibold"
                    style={{ color: "var(--gold)" }}
                  >
                    {platter.price}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">
                À La Carte Items
              </p>
              <div className="flex flex-wrap gap-2">
                {alaCarteItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs text-stone-400 border border-stone-800 tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
