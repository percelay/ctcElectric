import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Zap,
  Home,
  AlertTriangle,
  Phone,
  CheckCircle,
  ChevronRight,
  Shield,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Electrical Services",
  description:
    "Commercial, industrial, residential, and emergency electrical services in Spokane, WA. Licensed master electricians available 24/7.",
};

const services = [
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Electrical",
    tagline: "Spokane's Top Commercial Electrical Contractors",
    image: "/commercial1.webp",
    imageAlt: "Commercial electrical work",
    description:
      "As Spokane's top commercial electrical contractors, we provide new construction electrical and commercial electrical maintenance. Our 24-hour fast, friendly, reliable, and professional service supports warehouses, offices, store fronts, municipal buildings, car dealerships, and colleges. We work from the bidding process through to completion to ensure projects meet specifications, budgets, and timelines. Preventative maintenance inspections are offered to keep properties safe and prevent major electrical problems.",
    highlights: [
      "New construction electrical",
      "Commercial electrical maintenance",
      "Warehouses & office buildings",
      "Municipal buildings & colleges",
      "Car dealerships & storefronts",
      "Preventative maintenance inspections",
      "24-hour fast & reliable service",
      "Bidding through completion",
    ],
    imageLeft: true,
  },
  {
    id: "industrial",
    icon: Zap,
    title: "Industrial Electric",
    tagline: "Spokane's Leading Industrial Electrical Contractor",
    image: "/wirignboxes.webp",
    imageAlt: "Industrial electrical wiring and boxes",
    description:
      "CTC is Spokane's leading industrial electrical contractor, providing services ranging from warehouses to dams. We specialize in industrial wiring installation and maintenance, ensuring facilities meet municipal codes. We conduct transparent, value-driven industrial electrical inspections, including pre-purchase, annual, pre-design, pre-listing, and trouble-shooting inspections to prevent harm, fires, and downtime.",
    highlights: [
      "Warehouses to dams — full scale",
      "Industrial wiring installation",
      "Industrial wiring maintenance",
      "Municipal code compliance",
      "Pre-purchase inspections",
      "Annual inspections",
      "Pre-design & pre-listing inspections",
      "Trouble-shooting inspections",
    ],
    imageLeft: false,
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Electrical Contractors",
    tagline: "Licensed, Bonded & Insured Residential Specialists",
    image: "/residential.webp",
    imageAlt: "Residential electrical work",
    description:
      "We specialize in residential and new construction wiring in the Spokane region. Our licensed, bonded, and insured contractors use the latest installation tools and infrared technology to ensure code compliance and safety. We guarantee our craftsmanship to prevent hazards like electrocution, fire, and damaged appliances, and we assist with the permit application process.",
    highlights: [
      "Residential wiring",
      "New construction wiring",
      "Infrared technology inspection",
      "Code compliance assurance",
      "Craftsmanship guarantee",
      "Fire & electrocution hazard prevention",
      "Appliance damage prevention",
      "Permit application assistance",
    ],
    imageLeft: true,
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    title: "Emergency Electrician",
    tagline: "Available Around the Clock — 365 Days a Year",
    image: "/trucks.webp",
    imageAlt: "CTC Electrical service trucks",
    description:
      "When the lights go out, our emergency electricians are available 24/7 to provide fast and reliable service.",
    highlights: [
      "Available 24 hours a day",
      "7 days a week",
      "365 days a year",
      "Fast response times",
      "Reliable service",
      "Experienced master electricians",
    ],
    imageLeft: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="/electrical1.jpg"
            alt="CTC Electrical professional services"
            fill
            className="object-cover object-center opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            CTC Electrical Contracting
          </div>
          <h1 className="font-display font-black text-6xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            Our Services
          </h1>
          <p className="font-sans text-slate-300 text-xl max-w-2xl leading-relaxed mb-8">
            Commercial, industrial, and residential electrical contracting
            across Washington, Idaho, Montana, Oregon, and California.
          </p>
          {/* Jump links */}
          <div className="flex flex-wrap gap-3">
            {services.map(({ id, icon: Icon, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 border border-navy-600 text-slate-200 font-sans text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Icon className="w-4 h-4 text-gold-400" />
                {title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE SECTIONS ────────────────────────────────── */}
      {services.map(
        ({ id, icon: Icon, title, tagline, image, imageAlt, description, highlights, imageLeft }, idx) => (
          <section
            key={id}
            id={id}
            className={`py-24 ${idx % 2 === 0 ? "bg-white" : "bg-surface"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  !imageLeft ? "lg:flex lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Service badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-gold-500 text-navy-950 font-bold font-sans text-xs uppercase tracking-wider px-3 py-2 rounded-lg">
                    <Icon className="w-4 h-4" />
                    {title}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest">
                      {tagline}
                    </div>
                  </div>
                  <h2 className="font-display font-black text-4xl lg:text-5xl text-navy-900 uppercase leading-none tracking-tight mb-6">
                    {title}
                  </h2>
                  <p className="font-sans text-slate-600 text-lg leading-relaxed mb-8">
                    {description}
                  </p>

                  {/* Highlights grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                        <span className="font-sans text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:5092906940"
                      className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans px-6 py-3 rounded-xl transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold font-sans px-6 py-3 rounded-xl transition-colors duration-200"
                    >
                      <ClipboardList className="w-4 h-4" />
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}

      {/* ─── CREDENTIALS BAR ─────────────────────────────────── */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-gold-400 mx-auto mb-4" />
          <h2 className="font-display font-black text-4xl text-white uppercase mb-3">
            Licensed Across the Pacific Northwest
          </h2>
          <p className="font-sans text-slate-400 max-w-lg mx-auto mb-8">
            CTC Electrical Contracting holds active licenses in multiple states
            — fully licensed, bonded, and insured wherever we work.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "WA Contracting · #CTCELEC852C2",
              "WA Master Electrician · #CLUGSCT8770J",
              "ID Contracting · #029022",
              "ID Master Electrician · #029021",
              "MT Master Electrician · #ELE-EM-LIC-4756",
            ].map((lic) => (
              <span
                key={lic}
                className="font-sans text-sm text-slate-300 bg-navy-800 border border-navy-700 rounded-lg px-4 py-2"
              >
                {lic}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="tel:5092906940"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              Call Today · (509) 290-6940
            </a>
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY CTA ───────────────────────────────────── */}
      <section className="bg-red-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <AlertTriangle className="w-6 h-6 text-red-200" />
                <h3 className="font-display font-black text-3xl text-white uppercase">
                  Need Emergency Service?
                </h3>
              </div>
              <p className="font-sans text-red-100">
                Our emergency electricians are available 24/7 — 365 days a year.
              </p>
            </div>
            <a
              href="tel:5096306266"
              className="flex items-center gap-3 bg-white text-red-700 font-bold font-sans text-xl px-8 py-4 rounded-xl hover:bg-red-50 transition-colors duration-200 shrink-0"
            >
              <Phone className="w-6 h-6" />
              (509) 630-6266
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
