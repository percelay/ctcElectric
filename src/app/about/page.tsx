import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About CTC Electrical — Meet The Chaz",
  description:
    "Charles T. Clugston — 'The Chaz' — leads CTC Electrical Contracting with decades of experience, dual engineering degrees, and master electrician licenses across WA, ID, and MT.",
};

const credentials = [
  {
    label: "BS Elec/Mech Engineering, 1991",
    detail: "EIT #22287",
    icon: Award,
  },
  {
    label: "BS Construction Management, 1998",
    detail: "Dual-degreed expertise",
    icon: Award,
  },
  {
    label: "WA Electrical Contracting",
    detail: "Lic #CTCELEC852C2",
    icon: Shield,
  },
  {
    label: "WA Master Electrician / Administrator",
    detail: "Lic #CLUGSCT8770J",
    icon: Shield,
  },
  {
    label: "ID Electrical Contracting",
    detail: "Lic #029022",
    icon: Shield,
  },
  {
    label: "ID Master Electrician",
    detail: "Lic #029021",
    icon: Shield,
  },
  {
    label: "MT Master Electrician",
    detail: "Lic #ELE-EM-LIC-4756",
    icon: Shield,
  },
];

const serviceStates = [
  { abbr: "WA", name: "Washington" },
  { abbr: "ID", name: "Idaho" },
  { abbr: "MT", name: "Montana" },
  { abbr: "OR", name: "Oregon" },
  { abbr: "CA", name: "California" },
];

const focusCities = ["Spokane", "Post Falls", "Coeur d'Alene"];

const trilogy = [
  {
    letter: "C",
    commitment: "Customers",
    description:
      "Every project is treated with the same dedication — from the bidding process through to completion, ensuring work meets specifications, budgets, and timelines.",
  },
  {
    letter: "T",
    commitment: "Communities",
    description:
      "Serving Spokane and the broader Pacific Northwest with high-quality electrical work that keeps homes, businesses, and facilities safe.",
  },
  {
    letter: "C",
    commitment: "Country",
    description:
      "Proud to serve with the same values that define great American craftsmanship — honesty, hard work, and standing behind every job done.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <section className="relative bg-navy-950 py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/newconstruction.webp"
            alt="CTC Electrical new construction"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Who We Are
          </div>
          <h1 className="font-display font-black text-6xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            About CTC
          </h1>
          <p className="font-sans text-slate-300 text-xl max-w-2xl leading-relaxed">
            Committed To our Customers. Committed To our Communities.
            Committed To our Country. This is the foundation of everything
            CTC Electrical Contracting does.
          </p>
        </div>
      </section>

      {/* ─── MEET THE CHAZ ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <div className="sticky top-28">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl max-w-md">
                <Image
                  src="/the-chaz.jpg"
                  alt="Charles T. Clugston — The Chaz"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 448px"
                  priority
                />
              </div>
              {/* Name plate */}
              <div className="mt-6 bg-navy-900 rounded-xl p-6">
                <div className="font-display font-black text-3xl text-white uppercase tracking-wide leading-tight">
                  Charles T. Clugston
                </div>
                <div className="font-sans text-gold-400 font-bold text-sm uppercase tracking-widest mt-1">
                  &quot;The Chaz&quot; · Owner &amp; Lead Master Electrician
                </div>
                <div className="h-px bg-navy-700 my-4" />
                <div className="flex flex-wrap gap-2">
                  <span className="font-sans text-xs text-slate-300 bg-navy-800 rounded-md px-3 py-1">
                    BS Elec/Mech Engineering
                  </span>
                  <span className="font-sans text-xs text-slate-300 bg-navy-800 rounded-md px-3 py-1">
                    BS Construction Mgmt.
                  </span>
                  <span className="font-sans text-xs text-slate-300 bg-navy-800 rounded-md px-3 py-1">
                    3-State Master License
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
                The Leader
              </div>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-navy-900 uppercase leading-none mb-6">
                Meet<br />
                <span className="text-gold-500">&quot;The Chaz&quot;</span>
              </h2>
              <p className="font-sans text-slate-600 text-lg leading-relaxed mb-6">
                Charles T. Clugston, known as &quot;The Chaz&quot;, is the leader of CTC
                Electrical Contracting Inc. The company employs highly-trained,
                industry-certified master electricians with years of experience,
                alongside an on-staff degreed engineer.
              </p>
              <p className="font-sans text-slate-600 text-lg leading-relaxed mb-10">
                CTC provides high-quality electrical work backed by the{" "}
                <strong className="text-navy-900">
                  &quot;Trilogy of Power Guarantee&quot;
                </strong>
                . CTC stands for: Committed To our Customers, Committed To our
                Communities, Committed To our Country.
              </p>

              {/* Team facts */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-surface border border-border rounded-xl p-5 text-center">
                  <Users className="w-7 h-7 text-gold-500 mx-auto mb-2" />
                  <div className="font-display font-black text-3xl text-navy-900 uppercase">
                    Master
                  </div>
                  <div className="font-sans text-slate-500 text-sm">
                    Electricians on Staff
                  </div>
                </div>
                <div className="bg-surface border border-border rounded-xl p-5 text-center">
                  <Zap className="w-7 h-7 text-gold-500 mx-auto mb-2" />
                  <div className="font-display font-black text-3xl text-navy-900 uppercase">
                    Degreed
                  </div>
                  <div className="font-sans text-slate-500 text-sm">
                    Engineer On Staff
                  </div>
                </div>
                <div className="bg-surface border border-border rounded-xl p-5 text-center">
                  <Star className="w-7 h-7 text-gold-500 mx-auto mb-2" />
                  <div className="font-display font-black text-3xl text-navy-900 uppercase">
                    5-State
                  </div>
                  <div className="font-sans text-slate-500 text-sm">
                    Service Territory
                  </div>
                </div>
                <div className="bg-surface border border-border rounded-xl p-5 text-center">
                  <AlertTriangle className="w-7 h-7 text-red-500 mx-auto mb-2" />
                  <div className="font-display font-black text-3xl text-navy-900 uppercase">
                    24/7
                  </div>
                  <div className="font-sans text-slate-500 text-sm">
                    Emergency Available
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
              >
                Work With Us <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRILOGY OF POWER ────────────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-3">
              Our Promise
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-white uppercase leading-none mb-4">
              Trilogy of Power Guarantee
            </h2>
            <div className="font-sans text-slate-400 text-lg max-w-2xl mx-auto">
              CTC stands for three unbreakable commitments — the foundation
              that guides every project, every crew member, every day.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trilogy.map(({ letter, commitment, description }) => (
              <div
                key={commitment}
                className="relative bg-navy-900 border border-navy-700 rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold-500 text-navy-950 font-display font-black text-5xl flex items-center justify-center mx-auto mb-6 uppercase">
                  {letter}
                </div>
                <div className="font-sans text-gold-400 text-xs font-bold uppercase tracking-widest mb-1">
                  Committed To Our
                </div>
                <h3 className="font-display font-black text-3xl text-white uppercase tracking-wide mb-4">
                  {commitment}
                </h3>
                <p className="font-sans text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
                Licenses &amp; Education
              </div>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-navy-900 uppercase leading-none mb-6">
                Credentials
              </h2>
              <p className="font-sans text-slate-600 text-lg leading-relaxed mb-8">
                The Chaz holds dual bachelor&apos;s degrees — Electrical/Mechanical
                Engineering (1991) and Construction Management (1998) — plus
                master electrician and contractor licenses across three states.
              </p>
              <div className="flex flex-col gap-4">
                {credentials.map(({ label, detail, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-navy-900 text-sm">
                        {label}
                      </div>
                      <div className="font-sans text-slate-500 text-xs">{detail}</div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-gold-500 ml-auto shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/greatphoto.webp"
                alt="Charles 'The Chaz' Clugston on the job"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE TERRITORY ───────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
              Where We Work
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-navy-900 uppercase leading-none mb-4">
              Service Area
            </h2>
            <p className="font-sans text-slate-500 text-lg max-w-xl mx-auto">
              Licensed and operating across five states — with deep roots in the
              Spokane, Post Falls, and Coeur d&apos;Alene region.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {serviceStates.map(({ abbr, name }) => (
              <div
                key={abbr}
                className="flex items-center gap-3 bg-white border border-border rounded-xl px-8 py-5 shadow-sm"
              >
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <div>
                  <div className="font-display font-black text-3xl text-navy-900 uppercase leading-none">
                    {abbr}
                  </div>
                  <div className="font-sans text-slate-500 text-xs">{name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {focusCities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 font-sans font-semibold text-navy-900 bg-white border border-border rounded-lg px-5 py-3"
              >
                <MapPin className="w-4 h-4 text-gold-500" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-gold-400 mx-auto mb-4" />
          <h2 className="font-display font-black text-5xl text-white uppercase leading-none mb-4">
            Ready to Work Together?
          </h2>
          <p className="font-sans text-slate-400 text-lg leading-relaxed mb-8">
            CTC Electrical Contracting brings dual-degree engineering expertise
            and master electrician precision to every project — commercial,
            industrial, or residential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5092906940"
              className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              (509) 290-6940
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 border border-navy-600 text-white font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Contact Us <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
