import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Building2,
  Zap,
  Home,
  AlertTriangle,
  Shield,
  Award,
  ChevronRight,
  MapPin,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Your Spokane Commercial Electrician",
};

const services = [
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Electrical",
    excerpt:
      "New construction electrical and commercial maintenance for warehouses, offices, storefronts, municipal buildings, car dealerships, and colleges.",
    image: "/COMMERCIAL2.jpg",
  },
  {
    id: "industrial",
    icon: Zap,
    title: "Industrial Electric",
    excerpt:
      "Spokane's leading industrial electrical contractor — from warehouses to dams. Wiring installation, maintenance, and transparent industrial inspections.",
    image: "/INDUSTRAIL1.jpg",
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Electrical",
    excerpt:
      "Licensed, bonded, and insured residential and new construction wiring with infrared technology for code compliance, safety, and craftsmanship guarantees.",
    image: "/RESIDENTIAL.jpg",
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    title: "Emergency Electrician",
    excerpt:
      "When the lights go out, our emergency electricians are available 24/7 to provide fast and reliable service.",
    image: "/TRUCK1.jpg",
  },
];

const stateCredentials = [
  { abbr: "WA", name: "Washington" },
  { abbr: "ID", name: "Idaho" },
  { abbr: "MT", name: "Montana" },
  { abbr: "OR", name: "Oregon" },
  { abbr: "CA", name: "California" },
];

const trustItems = [
  { icon: Shield, label: "Licensed, Bonded & Insured" },
  { icon: Award, label: "Master Electricians On Staff" },
  { icon: Zap, label: "On-Staff Degreed Engineer" },
  { icon: AlertTriangle, label: "24/7 Emergency Response" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background photo + overlay */}
        <div className="absolute inset-0">
          <Image
            src="/COMMERCIALWORK1.jpg"
            alt="CTC Electrical commercial work"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* Left: text content */}
            <div className="lg:col-span-3">
              {/* Logo */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/logoctc.png"
                    alt="CTC Electrical Contracting"
                    fill
                    className="object-contain"
                    sizes="64px"
                    priority
                  />
                </div>
                <div>
                  <div className="font-display font-black text-xl text-white tracking-widest uppercase leading-tight">
                    CTC Electrical Contracting
                  </div>
                  <div className="font-sans text-sm text-gold-500 tracking-wider uppercase font-medium">
                    Spokane, WA · Commercial &amp; Industrial
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase leading-none tracking-tight mb-6">
                Your Spokane{" "}
                <span className="text-gold-400">Commercial</span>{" "}
                Electrician
              </h1>

              {/* Subheadline */}
              <p className="font-sans text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl mb-10">
                When you are in need of a Commercial Electrician or an Industrial
                Electrical Contractor and you want the job done fast with an eye
                for quality, look no further than CTC Electrical Contracting, Inc.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:5092906940"
                  className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call Today · (509) 290-6940
                </a>
                <a
                  href="tel:5096306266"
                  className="flex items-center justify-center gap-3 bg-red-700 hover:bg-red-600 text-white font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  <AlertTriangle className="w-5 h-5" />
                  24/7 Emergency · (509) 630-6266
                </a>
              </div>
            </div>

            {/* Right: The Chaz card */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl shadow-navy-950/60 overflow-hidden max-w-xs w-full">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/the-chaz.jpg"
                    alt="Charles T. Clugston — The Chaz, Owner of CTC Electrical"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="font-display font-black text-2xl text-navy-900 uppercase tracking-wide leading-tight">
                    Charles T. Clugston
                  </div>
                  <div className="font-sans text-gold-600 font-bold text-sm tracking-wider uppercase mt-1 mb-3">
                    "The Chaz" · Owner &amp; Master Electrician
                  </div>
                  <div className="h-px bg-slate-200 mb-3" />
                  <ul className="flex flex-col gap-1.5">
                    <li className="flex items-center gap-2 font-sans text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      BS Elec/Mech Engineering, 1991
                    </li>
                    <li className="flex items-center gap-2 font-sans text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      BS Construction Management, 1998
                    </li>
                    <li className="flex items-center gap-2 font-sans text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      WA, ID &amp; MT Licensed Master Electrician
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ───────────────────────────────────────── */}
      <section className="bg-navy-900 border-y border-navy-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <span className="font-sans text-sm font-medium text-slate-200 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ───────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
              What We Do
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-navy-900 uppercase leading-none mb-4">
              Our Electrical Services
            </h2>
            <p className="font-sans text-muted text-lg max-w-2xl mx-auto">
              From commercial new construction to industrial facilities and
              residential wiring — CTC delivers fast, reliable, code-compliant
              electrical work across the Pacific Northwest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ id, icon: Icon, title, excerpt, image }) => (
              <Link
                key={id}
                href={`/services#${id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-border transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-navy-950" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-navy-900 uppercase tracking-wide mb-2">
                    {title}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed mb-4">
                    {excerpt}
                  </p>
                  <div className="flex items-center gap-1 font-sans text-gold-600 text-sm font-bold group-hover:gap-2 transition-all duration-200">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Images */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/PEOPLEWORKING.jpg"
                  alt="CTC Electrical team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-gold-500 text-navy-950 rounded-xl px-6 py-4 shadow-xl">
                <div className="font-display font-black text-4xl uppercase leading-none">30+</div>
                <div className="font-sans text-sm font-bold uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
                About CTC
              </div>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-navy-900 uppercase leading-none mb-6">
                Meet<br />
                <span className="text-gold-500">"The Chaz"</span>
              </h2>
              <p className="font-sans text-slate-600 text-lg leading-relaxed mb-6">
                Charles T. Clugston, known as &quot;The Chaz&quot;, is the leader of CTC
                Electrical Contracting Inc. The company employs highly-trained,
                industry-certified master electricians with years of experience,
                alongside an on-staff degreed engineer.
              </p>
              <p className="font-sans text-slate-600 text-lg leading-relaxed mb-8">
                CTC provides high-quality electrical work backed by the{" "}
                <strong className="text-navy-900">
                  &quot;Trilogy of Power Guarantee&quot;
                </strong>
                — Committed To our Customers, Committed To our Communities,
                Committed To our Country.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {["Customers", "Communities", "Country"].map((c) => (
                  <div
                    key={c}
                    className="text-center bg-surface border border-border rounded-xl py-4 px-3"
                  >
                    <div className="font-sans text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">
                      Committed To
                    </div>
                    <div className="font-display font-black text-xl text-navy-900 uppercase">
                      Our {c}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold font-sans px-8 py-4 rounded-xl transition-colors duration-200"
              >
                Learn More About CTC <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY BAND ──────────────────────────────────── */}
      <section className="bg-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-12 h-12 text-red-200 mx-auto mb-4" />
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white uppercase leading-none mb-4">
            Emergency Electrician
          </h2>
          <p className="font-sans text-red-100 text-xl max-w-xl mx-auto mb-8">
            When the lights go out, our emergency electricians are available
            24/7 to provide fast and reliable service.
          </p>
          <a
            href="tel:5096306266"
            className="inline-flex items-center gap-3 bg-white text-red-700 font-bold font-sans text-2xl px-10 py-5 rounded-xl hover:bg-red-50 transition-colors duration-200"
          >
            <Phone className="w-7 h-7" />
            (509) 630-6266
          </a>
          <div className="mt-4 font-sans text-red-200 text-sm font-medium uppercase tracking-widest">
            Available 24 Hours · 7 Days a Week · 365 Days a Year
          </div>
        </div>
      </section>

      {/* ─── SERVICE TERRITORY ───────────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="font-sans text-gold-500 text-sm font-bold uppercase tracking-widest mb-3">
              Where We Work
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-white uppercase leading-none mb-4">
              Service Territory
            </h2>
            <p className="font-sans text-slate-400 text-lg max-w-xl mx-auto">
              With focus areas including Spokane, Post Falls, and Coeur d&apos;Alene —
              serving the greater Pacific Northwest.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stateCredentials.map(({ abbr, name }) => (
              <div
                key={abbr}
                className="flex items-center gap-3 bg-navy-800 border border-navy-700 rounded-xl px-6 py-4"
              >
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <div className="font-display font-black text-2xl text-white uppercase leading-none">
                    {abbr}
                  </div>
                  <div className="font-sans text-slate-400 text-xs">{name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Hero cities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {["Spokane", "Post Falls", "Coeur d'Alene"].map((city) => (
              <div
                key={city}
                className="text-center bg-navy-800/60 rounded-xl py-5 px-4 border border-navy-700"
              >
                <MapPin className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                <div className="font-display font-bold text-xl text-white uppercase tracking-wide">
                  {city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
            Get Started
          </div>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-navy-900 uppercase leading-none mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-sans text-slate-500 text-lg leading-relaxed mb-10">
            From new construction electrical to emergency repairs — CTC
            Electrical works from the bidding process through to completion to
            ensure projects meet specifications, budgets, and timelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5092906940"
              className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              (509) 290-6940
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-navy-900 hover:bg-navy-800 text-white font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Contact Us <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
