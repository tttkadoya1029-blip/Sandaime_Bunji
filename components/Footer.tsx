export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-stone-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3
              className="font-display text-xl font-semibold mb-3"
              style={{ color: "var(--gold)" }}
            >
              三代目 文治
            </h3>
            <p className="text-stone-500 text-xs tracking-wide mb-1">Sandaime Bunji</p>
            <p className="text-stone-500 text-xs">Gyutan &amp; Oden Izakaya · Singapore</p>
          </div>

          <div>
            <h4 className="text-stone-300 text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                ["#about", "About"],
                ["#menu", "Menu"],
                ["#course", "Course"],
                ["#gallery", "Gallery"],
                ["#location", "Location"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-stone-500 text-xs hover:text-amber-400 transition-colors tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-stone-300 text-xs tracking-widest uppercase mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-stone-500 text-xs leading-relaxed">
                9 Raffles Boulevard, #01-58<br />
                Millenia Walk, Singapore 039596
              </p>
              <a
                href="tel:+6565093480"
                className="block text-stone-500 text-xs hover:text-amber-400 transition-colors"
              >
                +65 6509 3480
              </a>
              <a
                href="https://www.tablecheck.com/en/shops/sandaime-bunji/reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs tracking-widest uppercase py-2 px-4 border border-stone-700 text-stone-400 hover:border-amber-400 hover:text-amber-400 transition-all mt-2"
              >
                Reserve Now
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            © {new Date().getFullYear()} Sandaime Bunji. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            Millenia Walk · Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
