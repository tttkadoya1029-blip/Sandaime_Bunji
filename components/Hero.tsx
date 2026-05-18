import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/gyutan.webp"
          alt="Sandaime Bunji Gyutan"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p
          className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 font-medium"
          style={{ color: "var(--gold)" }}
        >
          Authentic Japanese Izakaya · Singapore
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-semibold leading-tight mb-4 text-white">
          三代目 文治
        </h1>

        <p
          className="font-display text-xl sm:text-2xl lg:text-3xl tracking-[0.15em] mb-6"
          style={{ color: "var(--gold-light)" }}
        >
          Sandaime Bunji
        </p>

        <p className="text-sm sm:text-base text-stone-300 tracking-wider mb-2">
          Gyutan &amp; Oden Izakaya
        </p>
        <p className="text-xs sm:text-sm text-stone-400 tracking-wide mb-10">
          Premium Gyutan · Roast Beef Don · Oden &amp; Sake at Millenia Walk
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://www.tablecheck.com/en/shops/sandaime-bunji/reserve"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-neutral-950 transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--gold)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Reserve a Table
          </a>

          <a
            href="https://maps.google.com/?q=Sandaime+Bunji+Millenia+Walk+Singapore"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold border border-stone-400 text-stone-200 hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Google Map
          </a>

          <a
            href="tel:+6565093480"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold border text-stone-200 hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
            style={{ borderColor: "rgba(201,168,76,0.4)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <a href="#about" aria-label="Scroll down" className="animate-bounce text-stone-500 hover:text-amber-400 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
