import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Printer, AlertTriangle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact CTC Electrical",
  description:
    "Contact CTC Electrical Contracting in Spokane, WA. Office: (509) 290-6940. 24/7 Emergency: (509) 630-6266. Located at 14405 E Trent Ave Suite A, Spokane Valley, WA 99216.",
};

const contactItems = [
  {
    icon: Phone,
    label: "Office Phone",
    value: "(509) 290-6940",
    href: "tel:5092906940",
    cta: "Call the office",
    highlight: false,
  },
  {
    icon: Printer,
    label: "Fax",
    value: "(509) 290-6950",
    href: null,
    cta: null,
    highlight: false,
  },
  {
    icon: Mail,
    label: "General Email",
    value: "ctc@ctcelectricalcontracting.com",
    href: "mailto:ctc@ctcelectricalcontracting.com",
    cta: "Send an email",
    highlight: false,
  },
  {
    icon: Mail,
    label: "Owner Direct Email",
    value: "charles@ctcelectricalcontracting.com",
    href: "mailto:charles@ctcelectricalcontracting.com",
    cta: "Email The Chaz",
    highlight: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <section className="relative bg-navy-950 py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/wiring1.webp"
            alt="CTC Electrical professional wiring work"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </div>
          <h1 className="font-display font-black text-6xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="font-sans text-slate-300 text-xl max-w-xl leading-relaxed">
            Ready to start a project? Need emergency service? Reach out to
            CTC Electrical Contracting — we&apos;re here when you need us.
          </p>
        </div>
      </section>

      {/* ─── EMERGENCY BANNER ────────────────────────────────── */}
      <div className="bg-red-700 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-display font-black text-2xl text-white uppercase tracking-wide">
                24/7 Emergency Service
              </div>
              <div className="font-sans text-red-100 text-sm">
                Available 24 hours · 7 days a week · 365 days a year
              </div>
            </div>
          </div>
          <a
            href="tel:5096306266"
            className="flex items-center gap-3 bg-white text-red-700 font-bold font-sans text-2xl px-8 py-4 rounded-xl hover:bg-red-50 transition-colors duration-200 shrink-0"
          >
            <Phone className="w-6 h-6" />
            (509) 630-6266
          </a>
        </div>
      </div>

      {/* ─── CONTACT CARDS ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: contact details */}
            <div className="lg:col-span-2">
              <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
                Reach Us
              </div>
              <h2 className="font-display font-black text-5xl text-navy-900 uppercase leading-none mb-10">
                Contact Information
              </h2>

              {/* Phone & Email grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {contactItems.map(({ icon: Icon, label, value, href, cta }) => (
                  <div
                    key={label}
                    className="bg-surface border border-border rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <div className="font-sans text-xs text-muted uppercase font-bold tracking-wider">
                        {label}
                      </div>
                    </div>
                    <div className="font-sans font-semibold text-navy-900 break-all mb-2">
                      {value}
                    </div>
                    {href && cta && (
                      <a
                        href={href}
                        className="font-sans text-gold-600 text-sm font-bold hover:text-gold-500 transition-colors duration-200"
                      >
                        {cta} →
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-navy-900 rounded-2xl p-8 mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-6 h-6 text-gold-400" />
                  <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
                    Office Hours
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-navy-800 rounded-xl p-4">
                    <div className="font-sans text-xs text-slate-400 uppercase tracking-wider mb-1">
                      Standard Service
                    </div>
                    <div className="font-display font-bold text-xl text-white uppercase">
                      (509) 290-6940
                    </div>
                    <div className="font-sans text-slate-400 text-sm mt-1">
                      Office &amp; general inquiries
                    </div>
                  </div>
                  <div className="bg-red-800/60 border border-red-700/50 rounded-xl p-4">
                    <div className="font-sans text-xs text-red-300 uppercase tracking-wider mb-1">
                      Emergency · Available 24/7
                    </div>
                    <div className="font-display font-bold text-xl text-white uppercase">
                      (509) 630-6266
                    </div>
                    <div className="font-sans text-red-300 text-sm mt-1">
                      365 days a year — we answer
                    </div>
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="font-sans text-xs text-muted uppercase font-bold tracking-wider">
                      Shop &amp; Office
                    </div>
                  </div>
                  <address className="font-sans text-navy-900 font-semibold not-italic leading-snug">
                    14405 E Trent Ave Suite A<br />
                    Spokane Valley, WA 99216
                  </address>
                </div>
                <div className="bg-surface border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="font-sans text-xs text-muted uppercase font-bold tracking-wider">
                      Mailing Address
                    </div>
                  </div>
                  <address className="font-sans text-navy-900 font-semibold not-italic leading-snug">
                    1423 N Molter RD Suite 813<br />
                    Liberty Lake, Washington 99019
                  </address>
                </div>
              </div>
            </div>

            {/* Right: photo + quick contact */}
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6 shadow-xl">
                <Image
                  src="/the-chaz.jpg"
                  alt="Charles 'The Chaz' Clugston"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="bg-navy-900 rounded-xl p-6 text-center">
                <div className="font-display font-black text-xl text-white uppercase tracking-wide mb-1">
                  Charles T. Clugston
                </div>
                <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-wider mb-4">
                  &quot;The Chaz&quot; · Owner
                </div>
                <a
                  href="tel:5092906940"
                  className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans px-6 py-3 rounded-lg w-full transition-colors duration-200 mb-3"
                >
                  <Phone className="w-4 h-4" />
                  (509) 290-6940
                </a>
                <a
                  href="mailto:charles@ctcelectricalcontracting.com"
                  className="flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-sans text-sm px-6 py-3 rounded-lg w-full transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Email The Chaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREA NOTE ───────────────────────────────── */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-3">
            Serving the Pacific Northwest
          </div>
          <h2 className="font-display font-black text-4xl text-white uppercase mb-4">
            Licensed in WA · ID · MT · OR · CA
          </h2>
          <p className="font-sans text-slate-400 max-w-xl mx-auto">
            With focus areas including Spokane, Post Falls, and Coeur d&apos;Alene — we travel
            wherever the job takes us across the Pacific Northwest.
          </p>
        </div>
      </section>
    </>
  );
}
