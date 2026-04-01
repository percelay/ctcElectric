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
  Star,
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
    image: "/newconstruction2.webp",
  },
  {
    id: "industrial",
    icon: Zap,
    title: "Industrial Electric",
    excerpt:
      "Spokane's leading industrial electrical contractor — from warehouses to dams. Wiring installation, maintenance, and transparent industrial inspections.",
    image: "/wirignboxes.webp",
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Electrical",
    excerpt:
      "Licensed, bonded, and insured residential and new construction wiring with infrared technology for code compliance, safety, and craftsmanship guarantees.",
    image: "/residential.webp",
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    title: "Emergency Electrician",
    excerpt:
      "When the lights go out, our emergency electricians are available 24/7 to provide fast and reliable service.",
    image: "/trucks.webp",
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
  { icon: Star, label: "4.8 Stars · 85 Google Reviews" },
];

const reviews = [
  {
    name: "Alex Rodgers",
    time: "4 years ago",
    body: "Charles and his crew were like dealing with 'old time Americans'. Charles answered all my dumb questions. He actually listened, and made sure I understood procedures, and the plan to restore electrical damage after a house fire. The guys that actually did the repairs were personable, and knowledgeable, and had humor. Not just work robots. To me that shows working for CTC/Charles is more than just a job. I feel comfortable recommending CTC.",
  },
  {
    name: "Google Reviewer",
    time: "Within the past year",
    body: "Charles the owner and his crews conquer projects big and small with the same care and professionalism. They have installed 400 amp service for us all the way down to installing a car charger. If there's a problem Charles goes out of his way to fix the problem and make sure that everything is to the customer's satisfaction. He always tries to do things the most affordable way that he can for the customer and pass the savings on to them. CTC is my go-to electrician company.",
  },
  {
    name: "Alyshia Keefer",
    time: "1 year ago",
    body: "My husband and I are so thankful and appreciative of CTC Electrical Contracting Inc. After a power surge left us with no power to our dryer, Charles asked for a picture of the breaker and talked us through testing everything over the phone. I would give him 500 stars if I could. Will be my go to for anything Electrical from now on!!",
  },
  {
    name: "Denise LaFaunce",
    time: "2 years ago",
    body: "If you are looking for a professional that will be on time, communicate clearly, complete the work exactly as you desire and provide a level of service rarely found these days, we highly recommend Charles for your home needs. We were very happy with his level of expertise and glad to see that there are professionals like him still making homes brighter for us.",
  },
  {
    name: "Al Fluke",
    time: "5 years ago",
    body: "Over the past year I have been unfortunate to need an electrician several times, but also fortunate enough to have CTC in my corner. The knowledge of this team is unrivaled in this region. They are very responsive and most recently exceeded my expectations. It is never fun to have a repair needed, but I am comfortable knowing that I am in the hands of CTC because I know they will deliver quality service at a fair price.",
  },
  {
    name: "Angela Lamb",
    time: "7 years ago",
    body: "Charles was very helpful, professional, and went the extra mile for us! We are finishing our basement and he did all the electrical. He saved us tons of money over other quotes by rearranging our panel instead of us having to get a sub panel — he was full of good suggestions for our situation and took the time to make sure it was all done right. Recommending him to friends and family for sure!",
  },
  {
    name: "Heidi Weber",
    time: "7 years ago",
    body: "I recently contacted CTC for a last minute electrical inspection and bid for work on my dad's 1953 home. Charles was professional, very thorough, and easy to work with. His electrical knowledge was top notch and he gave sound advice and kept in touch. He exceeded my dad's expectations, which is not easy to do, and we highly recommend CTC.",
  },
  {
    name: "Zac Farrell",
    time: "4 years ago",
    body: "We have had the pleasure of working with CTC over the last few years. Charles truly has never let us down and has been amazing to work with. Whether it's a minor repair or an entire panel upgrade, CTC has quickly, efficiently and affordably taken care of us. Can't say enough great things about these guys, highly recommend working with them!!",
  },
  {
    name: "Melissa Fritsch",
    time: "6 years ago",
    body: "I had a challenge of troubleshooting an electrical problem in our new home. Charles at CTC Electrical Contracting seriously put in some extra man power in figuring out a previous botched up job. Very impressed with his professionalism and quality workmanship as he pushed beyond his work hours to get the job done right. Plus, he didn't charge us for an extra hour of work. We will continue to call upon this company in the future.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* American flag — full background, no tint */}
        <div className="absolute inset-0">
          <Image
            src="/American-Flag-Facts-Fun-Things-To-Know.jpg"
            alt="American flag"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content — opaque panels keep flag fully visible */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

            {/* Left: text on opaque navy card */}
            <div className="lg:col-span-3">
              <div className="bg-navy-950/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl">
                {/* Logo */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="relative w-16 h-16 shrink-0">
                    <Image
                      src="/Gemini_Generated_Image_y52zfoy52zfoy52z.png"
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
                    <div className="font-sans text-sm text-gold-400 tracking-wider uppercase font-medium">
                      Spokane, WA · Commercial &amp; Industrial
                    </div>
                  </div>
                </div>

                {/* Headline */}
                <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-6xl xl:text-7xl text-white uppercase leading-none tracking-tight mb-5">
                  Your Spokane{" "}
                  <span className="text-gold-400">Commercial</span>{" "}
                  Electrician
                </h1>

                {/* Subheadline */}
                <p className="font-sans text-base lg:text-lg text-slate-300 leading-relaxed mb-8">
                  When you are in need of a Commercial Electrician or an Industrial
                  Electrical Contractor and you want the job done fast with an eye
                  for quality, look no further than CTC Electrical Contracting, Inc.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:5092906940"
                    className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-lg px-7 py-4 rounded-xl transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    Call Today · (509) 290-6940
                  </a>
                  <a
                    href="tel:5096306266"
                    className="flex items-center justify-center gap-3 bg-red-700 hover:bg-red-600 text-white font-bold font-sans text-lg px-7 py-4 rounded-xl transition-colors duration-200"
                  >
                    <AlertTriangle className="w-5 h-5" />
                    24/7 Emergency · (509) 630-6266
                  </a>
                </div>
              </div>
            </div>

            {/* Right: The Chaz card — white, clean */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-xs w-full">
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
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${label.includes("Google") ? "bg-gold-500/20 border border-gold-400/40" : "bg-gold-500/10 border border-gold-500/20"}`}>
                  <Icon className={`w-5 h-5 ${label.includes("Google") ? "text-gold-300 fill-gold-300" : "text-gold-400"}`} />
                </div>
                <span className={`font-sans text-sm font-medium leading-tight ${label.includes("Google") ? "text-gold-300 font-bold" : "text-slate-200"}`}>
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
                  src="/greatphoto.webp"
                  alt="Charles 'The Chaz' Clugston on the job"
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

      {/* ─── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header + Google rating badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-3">
                What Our Customers Say
              </div>
              <h2 className="font-display font-black text-5xl lg:text-6xl text-white uppercase leading-none">
                Real Reviews.<br />Real Results.
              </h2>
            </div>
            {/* Google rating badge */}
            <a
              href="https://www.google.com/search?q=ctc+electrical+wa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-white rounded-2xl px-8 py-5 shrink-0 hover:bg-slate-50 transition-colors duration-200 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`w-6 h-6 ${n <= 4 ? "text-gold-500 fill-gold-500" : "text-gold-400 fill-gold-400"}`}
                    />
                  ))}
                </div>
                <div className="font-display font-black text-4xl text-navy-900 leading-none">
                  4.8
                </div>
              </div>
              <div className="border-l border-slate-200 pl-5">
                <div className="font-sans font-bold text-navy-900 text-lg leading-tight">
                  85 Reviews
                </div>
                <div className="font-sans text-slate-500 text-sm">
                  on Google
                </div>
                <div className="font-sans text-gold-600 text-xs font-bold mt-1 uppercase tracking-wide">
                  View All →
                </div>
              </div>
            </a>
          </div>

          {/* Review cards — masonry-style 3-col grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map(({ name, time, body }) => (
              <div
                key={name + time}
                className="break-inside-avoid bg-navy-900 border border-navy-700 rounded-2xl p-6 hover:border-gold-500/40 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                {/* Quote */}
                <p className="font-sans text-slate-300 text-sm leading-relaxed mb-5">
                  &ldquo;{body}&rdquo;
                </p>
                {/* Reviewer */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-sans font-semibold text-white text-sm">
                      {name}
                    </div>
                    <div className="font-sans text-slate-500 text-xs">{time}</div>
                  </div>
                  <div className="font-sans text-xs text-slate-600 flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=ctc+electrical+wa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 border border-navy-600 text-slate-200 font-sans font-bold px-8 py-4 rounded-xl transition-colors duration-200"
            >
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              Read All 85 Google Reviews
            </a>
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
