import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, CheckCircle, Zap, Shield, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join the CTC Team",
  description:
    "CTC Electrical Contracting is actively seeking talented electricians and journeymen to join our team in Spokane, WA and across the Pacific Northwest.",
};

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Credentialed Team",
    body: "Work alongside industry-certified master electricians and a degreed engineer who are committed to doing the job right.",
  },
  {
    icon: Zap,
    title: "Diverse Project Portfolio",
    body: "No two days are the same — commercial, industrial, and residential projects across Washington, Idaho, Montana, Oregon, and California.",
  },
  {
    icon: Users,
    title: "Team Built on Integrity",
    body: "CTC is committed to its team members the same way it is committed to its customers — with honesty, respect, and a high standard of work.",
  },
  {
    icon: Award,
    title: "Trilogy of Power Culture",
    body: "Committed To our Customers, Communities, and Country — a team culture that takes pride in quality work and community impact.",
  },
];

const qualifications = [
  "Licensed journeyman or apprentice electrician",
  "Ability to work on commercial or industrial projects",
  "Reliable, professional, and detail-oriented",
  "WA, ID, and/or MT license (or ability to obtain)",
  "Experience with new construction and/or maintenance",
  "Commitment to code compliance and safety",
];

export default function CareersPage() {
  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <section className="relative bg-navy-950 py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/newconstruction2.webp"
            alt="CTC Electrical new construction work"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 to-navy-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Now Hiring
          </div>
          <h1 className="font-display font-black text-6xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            Join Our Team
          </h1>
          <p className="font-sans text-slate-300 text-xl max-w-2xl leading-relaxed mb-8">
            We are actively seeking talented electricians and journeymen to
            join our team. If you take pride in your craft and want to work
            with the best in Spokane, we want to hear from you.
          </p>
          <a
            href="mailto:ctc@ctcelectricalcontracting.com?subject=Career%20Inquiry%20%E2%80%94%20CTC%20Electrical"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
            Apply Now
          </a>
        </div>
      </section>

      {/* ─── WHY CTC ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-sans text-gold-600 text-sm font-bold uppercase tracking-widest mb-3">
              Why Work Here
            </div>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-navy-900 uppercase leading-none mb-4">
              Why Choose CTC
            </h2>
            <p className="font-sans text-slate-500 text-lg max-w-2xl mx-auto">
              CTC Electrical Contracting is more than a job — it&apos;s a commitment
              to craftsmanship, community, and a career you can be proud of.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-surface border border-border rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900 uppercase tracking-wide mb-3">
                  {title}
                </h3>
                <p className="font-sans text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE LOOK FOR ────────────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/trucks.webp"
                alt="CTC Electrical service trucks"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <div className="font-sans text-gold-400 text-sm font-bold uppercase tracking-widest mb-3">
                Qualifications
              </div>
              <h2 className="font-display font-black text-5xl text-white uppercase leading-none mb-6">
                What We Look For
              </h2>
              <p className="font-sans text-slate-400 text-lg leading-relaxed mb-8">
                We are actively seeking talented electricians and journeymen to join our
                team. If you have the skills, the license, and the commitment to
                quality, CTC wants to hear from you.
              </p>

              <ul className="flex flex-col gap-3 mb-10">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                    <span className="font-sans text-slate-300">{q}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:ctc@ctcelectricalcontracting.com?subject=Career%20Inquiry%20%E2%80%94%20CTC%20Electrical"
                  className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold font-sans px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Send Your Resume
                </a>
                <a
                  href="tel:5092906940"
                  className="flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 border border-navy-600 text-white font-bold font-sans px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call (509) 290-6940
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLY CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-gold-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-12 h-12 text-navy-900/60 mx-auto mb-4" />
          <h2 className="font-display font-black text-5xl text-navy-950 uppercase leading-none mb-4">
            Ready to Apply?
          </h2>
          <p className="font-sans text-navy-800 text-lg leading-relaxed mb-8">
            Send your resume and a brief introduction to our team. We are
            building something great in Spokane — and we want people who
            take pride in their work to be a part of it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ctc@ctcelectricalcontracting.com?subject=Career%20Inquiry%20%E2%80%94%20CTC%20Electrical"
              className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              ctc@ctcelectricalcontracting.com
            </a>
            <a
              href="tel:5092906940"
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-bold font-sans text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              (509) 290-6940
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
