import Image from "next/image";

interface MenuItem {
  jp: string;
  en: string;
  price: string;
}

interface MenuSectionProps {
  id: string;
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
  reverse?: boolean;
}

function MenuSection({ id, tag, title, image, imageAlt, items, reverse }: MenuSectionProps) {
  return (
    <div id={id} className="py-20 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
          style={{ direction: reverse ? "rtl" : "ltr" }}
        >
          <div style={{ direction: "ltr" }}>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3 font-medium"
              style={{ color: "var(--gold)" }}
            >
              {tag}
            </p>
            <h3 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-8">
              {title}
            </h3>

            <div className="space-y-0">
              {items.map((item) => (
                <div
                  key={item.en}
                  className="menu-item flex items-start justify-between gap-4 py-4"
                >
                  <div className="flex-1">
                    <p className="text-xs text-stone-500 mb-0.5">{item.jp}</p>
                    <p className="text-stone-200 text-sm font-medium">{item.en}</p>
                  </div>
                  <span
                    className="font-display text-lg font-semibold whitespace-nowrap"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ direction: "ltr" }} className="relative">
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={500}
              className="w-full h-[380px] lg:h-[480px] object-cover"
            />
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l"
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const beefTongueItems: MenuItem[] = [
  {
    jp: "2段熟成 厚切り牛たん6枚",
    en: "Gyutan Steak Sendai Special 6p",
    price: "$29.90",
  },
  {
    jp: "2段熟成 厚切り牛たん大盛り10枚",
    en: "Gyutan Steak Sendai Special 10p",
    price: "$39.90",
  },
  {
    jp: "霜降りとろたん串 2本",
    en: "Toro Tan Skewer 2ps",
    price: "$16.40",
  },
  {
    jp: "和牛たんのねぎ塩添え",
    en: "Wagyu Gyutan With Negi Shio",
    price: "$24.90",
  },
];

const beefSkewersItems: MenuItem[] = [
  {
    jp: "牛串盛り合わせ4本",
    en: "Mixed Beef Skewer Platter 4ps",
    price: "$23.95",
  },
  {
    jp: "霜降りとろたん串2本",
    en: "Toro Tan Skewer 2ps",
    price: "$16.40",
  },
  {
    jp: "牛ハラミ串2本",
    en: "Harami Skewer 2ps",
    price: "$8.60",
  },
  {
    jp: "和牛カルビ串2本",
    en: "Wagyu Short Rib Skewer 2ps",
    price: "$16.30",
  },
  {
    jp: "和牛サーロイン串1本",
    en: "Wagyu Sirloin Steak Skewer 1ps",
    price: "$9.90",
  },
];

const sashimiItems: MenuItem[] = [
  {
    jp: "ぶりの胡麻和えの刺身",
    en: "Yellowtail & Roasted Sesame Sashimi",
    price: "$15.90",
  },
  {
    jp: "藁焼きのかつお",
    en: "Live Straw Fire Seared Bonito",
    price: "$24.80",
  },
  {
    jp: "大トロまぐろ刺身 5枚",
    en: "Otoro Tuna Sashimi 5pcs",
    price: "$18.90",
  },
  {
    jp: "ぶりのお刺身 3枚",
    en: "Yellowtail Sashimi 3pcs",
    price: "$8.90",
  },
  {
    jp: "サーモンの刺身 3枚",
    en: "Salmon Sashimi 3pcs",
    price: "$9.90",
  },
  {
    jp: "いくら",
    en: "Ikura",
    price: "$12.90",
  },
];

export default function MenuSections() {
  return (
    <section
      className="bg-neutral-950"
      style={{ background: "linear-gradient(to bottom, #0a0a0a, #111111)" }}
    >
      <div className="pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--gold)" }}
          >
            À La Carte
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6">
            Our Menu
          </h2>
          <div className="section-divider" />
        </div>
      </div>

      <MenuSection
        id="beef-tongue"
        tag="Signature"
        title="Beef Tongue · 牛たん"
        image="/images/gyutan.webp"
        imageAlt="Gyutan Beef Tongue"
        items={beefTongueItems}
      />

      <MenuSection
        id="beef-skewers"
        tag="Charcoal Grilled"
        title="Beef Skewers · 牛串"
        image="/images/kushi-yaki.webp"
        imageAlt="Beef Skewers"
        items={beefSkewersItems}
        reverse
      />

      <MenuSection
        id="sashimi"
        tag="Sashimi"
        title="Sashimi · 刺身"
        image="/images/warayaki.jpg"
        imageAlt="Sashimi"
        items={sashimiItems}
      />
    </section>
  );
}
