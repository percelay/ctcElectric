import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, AlertTriangle, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

const services = [
  { href: "/services#commercial", label: "Commercial Electrical" },
  { href: "/services#industrial", label: "Industrial Electric" },
  { href: "/services#residential", label: "Residential Electrical" },
  { href: "/services#emergency", label: "Emergency Electrician" },
];

const licenses = [
  "WA Contracting · #CTCELEC852C2",
  "WA Master Electrician · #CLUGSCT8770J",
  "ID Contracting · #029022",
  "ID Master Electrician · #029021",
  "MT Master Electrician · #ELE-EM-LIC-4756",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">

      {/* Emergency CTA strip */}
      <div className="bg-red-700 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-white shrink-0" />
            <div>
              <div className="font-display font-bold text-xl uppercase tracking-wide">
                24/7 Emergency Service
              </div>
              <div className="font-sans text-red-100 text-sm">
                When the lights go out, we answer.
              </div>
            </div>
          </div>
          <a
            href="tel:5096306266"
            className="flex items-center gap-2 bg-white text-red-700 font-bold font-sans text-lg px-8 py-3 rounded-lg hover:bg-red-50 transition-colors duration-200 shrink-0"
          >
            <Phone className="w-5 h-5" />
            (509) 630-6266
          </a>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/Gemini_Generated_Image_y52zfoy52zfoy52z.png"
                  alt="CTC Electrical Contracting"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-display font-black text-lg text-white tracking-widest uppercase leading-tight">
                  CTC Electrical
                </div>
                <div className="font-sans text-xs text-gold-500 tracking-wider uppercase font-medium">
                  Contracting, Inc.
                </div>
              </div>
            </Link>
            <div className="flex items-start gap-2 mb-4">
              <Zap className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
              <p className="font-sans text-slate-400 text-sm leading-relaxed">
                Committed To our Customers. Committed To our Communities.
                Committed To our Country.
              </p>
            </div>
            <div className="font-display font-bold text-gold-500 text-lg uppercase tracking-wider">
              Trilogy of Power Guarantee
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-4 pb-2 border-b border-navy-700">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-sans text-slate-400 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-4 pb-2 border-b border-navy-700">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-slate-400 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display font-bold text-white uppercase tracking-wider text-sm mb-4 pb-2 border-b border-navy-700">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-sans text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Office
                  </div>
                  <a
                    href="tel:5092906940"
                    className="font-sans text-slate-300 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    (509) 290-6940
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-sans text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Emergency 24/7
                  </div>
                  <a
                    href="tel:5096306266"
                    className="font-sans text-red-400 text-sm font-bold hover:text-red-300 transition-colors duration-200"
                  >
                    (509) 630-6266
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-sans text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Email
                  </div>
                  <a
                    href="mailto:ctc@ctcelectricalcontracting.com"
                    className="font-sans text-slate-300 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    ctc@ctcelectricalcontracting.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-sans text-xs text-slate-500 uppercase tracking-wider mb-0.5">
                    Shop &amp; Office
                  </div>
                  <address className="font-sans text-slate-300 text-sm not-italic leading-snug">
                    14405 E Trent Ave Suite A<br />
                    Spokane Valley, WA 99216
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* License bar */}
      <div className="border-t border-navy-800 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center mb-4">
            {licenses.map((lic) => (
              <span key={lic} className="font-sans text-xs text-slate-600">
                {lic}
              </span>
            ))}
          </div>
          <div className="text-center font-sans text-xs text-slate-600">
            © {new Date().getFullYear()} CTC Electrical Contracting, Inc. All rights reserved. ·{" "}
            <span>Spokane Valley, WA · Licensed, Bonded &amp; Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
