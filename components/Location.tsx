export default function Location() {
  return (
    <section
      id="location"
      className="py-24 lg:py-32"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
              style={{ color: "var(--gold)" }}
            >
              Find Us
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6">
              Visit Us
            </h2>
            <div className="section-divider mb-8" style={{ margin: "0 0 2rem 0" }} />

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <svg className="w-4 h-4" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-stone-200 font-medium mb-1">Address</p>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    9 Raffles Boulevard, #01-58<br />
                    Millenia Walk, Singapore 039596<br />
                    <span className="text-stone-500 text-xs">Near Suntec City & Marina Square</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <svg className="w-4 h-4" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-stone-200 font-medium mb-1">Opening Hours</p>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Mon – Sun: 11:30 AM – 3:00 PM<br />
                    Mon – Sun: 5:00 PM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <svg className="w-4 h-4" style={{ color: "var(--gold)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-stone-200 font-medium mb-1">Phone</p>
                  <a
                    href="tel:+6565093480"
                    className="text-stone-400 text-sm hover:text-amber-400 transition-colors"
                  >
                    +65 6509 3480
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.tablecheck.com/en/shops/sandaime-bunji/reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-neutral-950 transition-all hover:opacity-90"
                style={{ background: "var(--gold)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reserve via TableCheck
              </a>

              <a
                href="https://maps.google.com/?q=Sandaime+Bunji+Millenia+Walk+Singapore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-[0.2em] uppercase font-semibold border border-stone-600 text-stone-200 hover:border-amber-400 hover:text-amber-400 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Google Map
              </a>

              <a
                href="tel:+6565093480"
                className="flex items-center justify-center gap-2 px-6 py-4 text-xs tracking-[0.2em] uppercase font-semibold border text-stone-200 hover:border-amber-400 hover:text-amber-400 transition-all"
                style={{ borderColor: "rgba(201,168,76,0.4)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[520px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7898!2d103.8594!3d1.2910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a28c9bdf01%3A0x5d32be70b0e54e0c!2sMillenia%20Walk!5e0!3m2!1sen!2ssg!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sandaime Bunji location map"
            />
            <div
              className="absolute inset-0 pointer-events-none border"
              style={{ borderColor: "rgba(201,168,76,0.2)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
