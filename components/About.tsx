import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border"
              style={{ borderColor: "rgba(201,168,76,0.2)" }}
            />
            <Image
              src="/images/store-exterior.webp"
              alt="Sandaime Bunji interior"
              width={600}
              height={700}
              className="relative z-10 w-full h-[480px] lg:h-[560px] object-cover"
            />
            <div
              className="absolute bottom-6 -right-6 z-20 px-6 py-4 text-center"
              style={{ background: "var(--red)" }}
            >
              <p className="font-display text-2xl font-semibold text-white">三代目</p>
              <p className="text-xs tracking-widest text-stone-300 mt-1">Since 2015</p>
            </div>
          </div>

          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
              style={{ color: "var(--gold)" }}
            >
              Our Story
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Authentic Taste of<br />
              <span style={{ color: "var(--gold-light)" }}>Japanese Izakaya</span>
            </h2>
            <div className="section-divider mb-8" />

            <div className="space-y-5 text-stone-400 leading-relaxed">
              <p>
                Authentic Japanese Izakaya in Singapore located at{" "}
                <span className="text-stone-200 font-medium">Millenia Walk</span>, near
                Suntec City and Marina Square.
              </p>
              <p>
                Sandaime Bunji is famous for premium{" "}
                <span className="text-stone-200 font-medium">Beef Tongue (Gyutan)</span>,
                Roast Beef Don, Oden, and authentic Japanese izakaya dishes.
              </p>
              <p>
                Looking for the best Beef Tongue Singapore experience? Enjoy juicy
                charcoal-grilled Gyutan, Japanese sake, highballs, and traditional
                Japanese comfort food in a cozy izakaya atmosphere.
              </p>
              <p>
                Popular for dinner, drinks, casual gatherings, and late-night Japanese
                dining near Suntec. Visit Sandaime Bunji at Millenia Walk Singapore today.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-stone-800">
              {[
                { num: "9+", label: "Years of Tradition" },
                { num: "50+", label: "Menu Items" },
                { num: "★4.2", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="font-display text-3xl font-semibold mb-1"
                    style={{ color: "var(--gold)" }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-xs text-stone-500 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
