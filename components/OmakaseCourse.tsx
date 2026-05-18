import Image from "next/image";

const courses = [
  {
    name: "Gyutan Course",
    price: "$65",
    unit: "/ 1 pax",
    count: "9 items",
    highlight: true,
    items: [
      "Daikon Miso",
      "Edamame",
      "Salad",
      "Satsumaage",
      "Today's Special",
      "Oden",
      "Roast Beef",
      "Gyutan",
      "Rice & Tororo",
    ],
    image: "/images/gyutan.webp",
  },
  {
    name: "Roast Beef Course",
    price: "$45",
    unit: "/ 1 pax",
    count: "8 items",
    highlight: false,
    items: [
      "Edamame",
      "Today's Special",
      "Shime Saba",
      "Today's Special 2",
      "Today's Special 3",
      "Oden",
      "Roast Beef",
      "Rice & Takana",
    ],
    image: "/images/steak.webp",
  },
  {
    name: "Free Flow Drinks",
    price: "$30",
    unit: "/ 1 pax",
    count: "2 hours · From 2 pax",
    highlight: false,
    items: [
      "Draft Beer",
      "Highball",
      "Shochu",
      "Umeshu",
      "Soft Drinks",
      "House Sake",
      "Wine",
      "& More",
    ],
    image: "/images/interior-02.webp",
  },
];

export default function OmakaseCourse() {
  return (
    <section id="course" className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "var(--gold)" }}
          >
            Omakase
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6">
            Course Menu
          </h2>
          <div className="section-divider" />
          <p className="text-stone-400 mt-8 max-w-xl mx-auto text-sm leading-relaxed">
            Curated multi-course experiences featuring our signature dishes.
            Perfect for celebrations, business dinners, and group gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className={`relative flex flex-col border overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                course.highlight
                  ? "border-amber-600/60"
                  : "border-stone-800"
              }`}
            >
              {course.highlight && (
                <div
                  className="absolute top-4 right-4 z-10 px-3 py-1 text-xs tracking-widest uppercase font-semibold text-neutral-950"
                  style={{ background: "var(--gold)" }}
                >
                  Popular
                </div>
              )}

              <div className="relative h-44 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="font-display text-xl font-semibold mb-1"
                  style={{ color: course.highlight ? "var(--gold-light)" : "white" }}
                >
                  {course.name}
                </h3>
                <p className="text-xs text-stone-500 tracking-wide mb-4">
                  {course.count}
                </p>

                <ul className="flex-1 space-y-2 mb-6">
                  {course.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-400">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "var(--gold)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-stone-800 flex items-end justify-between">
                  <div>
                    <span
                      className="font-display text-3xl font-semibold"
                      style={{ color: "var(--gold)" }}
                    >
                      {course.price}
                    </span>
                    <span className="text-xs text-stone-500 ml-1">{course.unit}</span>
                  </div>
                  <a
                    href="https://www.tablecheck.com/en/shops/sandaime-bunji/reserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase px-4 py-2 border border-stone-600 text-stone-300 hover:border-amber-400 hover:text-amber-400 transition-colors"
                  >
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-stone-600 mt-8">
          * Prices are per person. Please inform us of any dietary restrictions at the time of reservation.
        </p>
      </div>
    </section>
  );
}
