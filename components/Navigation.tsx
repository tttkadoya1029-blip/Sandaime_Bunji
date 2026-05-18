"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#course", label: "Course" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-sm shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Sandaime Bunji"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span
              className="font-display text-base lg:text-lg tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              三代目 文治
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-stone-300 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.tablecheck.com/en/shops/sandaime-bunji/reserve"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase font-semibold border transition-all duration-200 hover:bg-amber-400 hover:text-neutral-950 hover:border-amber-400"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Reserve
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-stone-300"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-px bg-current mb-1.5" />
            <span className="block w-6 h-px bg-current mb-1.5" />
            <span className="block w-4 h-px bg-current" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-neutral-950/98 backdrop-blur-sm border-t border-stone-800">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm tracking-widest uppercase text-stone-300 hover:text-amber-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.tablecheck.com/en/shops/sandaime-bunji/reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 text-xs tracking-widest uppercase font-semibold border"
                style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
              >
                Reserve
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
