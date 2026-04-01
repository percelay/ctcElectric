"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, AlertTriangle } from "lucide-react";

const LOGO = "/Gemini_Generated_Image_y52zfoy52zfoy52z.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/98 shadow-lg shadow-navy-950/40"
            : "bg-navy-950"
        } border-b border-navy-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="CTC Electrical Contracting — Home"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={LOGO}
                  alt="CTC Electrical Contracting logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-black text-lg text-white tracking-widest uppercase leading-tight group-hover:text-gold-400 transition-colors duration-200">
                  CTC Electrical
                </div>
                <div className="font-sans text-xs text-gold-500 tracking-wider uppercase font-medium">
                  Contracting, Inc.
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium font-sans tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-gold-400 bg-navy-800"
                      : "text-slate-300 hover:text-white hover:bg-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:5092906940"
                className="hidden sm:flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-sm px-5 py-2.5 rounded-lg transition-colors duration-200 shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Call Today</span>
                <span className="hidden md:inline font-normal">·</span>
                <span>(509) 290-6940</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2 rounded-lg hover:bg-navy-800 transition-colors duration-200"
                aria-expanded={menuOpen}
                aria-label="Toggle mobile menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-navy-950 border-t border-navy-800`}
        >
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium font-sans transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold-400 bg-navy-800"
                    : "text-slate-300 hover:text-white hover:bg-navy-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-navy-800 flex flex-col gap-2">
              <a
                href="tel:5092906940"
                className="flex items-center justify-center gap-2 bg-gold-500 text-navy-950 font-bold font-sans px-4 py-3 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Today · (509) 290-6940
              </a>
              <a
                href="tel:5096306266"
                className="flex items-center justify-center gap-2 bg-red-700 text-white font-bold font-sans px-4 py-3 rounded-lg transition-colors duration-200"
              >
                <AlertTriangle className="w-4 h-4" />
                24/7 Emergency · (509) 630-6266
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
