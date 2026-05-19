"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  ClipboardList,
  MessageSquare,
  ArrowRight,
  Mail,
  Briefcase,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ── data ──────────────────────────────────────────────────────────── */

const heroPanelItems = [
  { icon: <Pencil className="w-4 h-4" />, title: "CV & Interview Preparation", sub: "Healthcare sector focused" },
  { icon: <ClipboardList className="w-4 h-4" />, title: "Employability Workshops", sub: "Workplace competencies" },
  { icon: <MessageSquare className="w-4 h-4" />, title: "One-to-One Progression Advice", sub: "Employment & further study" },
  { icon: <ArrowRight className="w-4 h-4" />, title: "Active Vacancy Referrals", sub: "East London network" },
];

const careerSupport = [
  {
    num: "01",
    title: "CV & Interview Preparation",
    body: "Individual guidance on producing a healthcare sector CV, supported by tutors with sector experience. Interview preparation covers competency-based questioning, professional conduct, and sector expectations. Sessions are available throughout the programme.",
    tag: "1-to-1 and group",
  },
  {
    num: "02",
    title: "Employability Workshops",
    body: "Structured workshops addressing workplace standards, professional conduct, and the competency frameworks used by health and social care employers. Content is aligned to the Skills for Care core standards and reviewed annually.",
    tag: "Skills for Care aligned",
  },
  {
    num: "03",
    title: "One-to-One Progression Advice",
    body: "Individual progression conversations with your Programme Lead at key points during your studies. These cover employment pathways, further qualification options, and higher education progression routes relevant to your goals.",
    tag: "Personalised guidance",
  },
  {
    num: "04",
    title: "Active Vacancy Referrals",
    body: "Where vacancies are available through our network of care providers and partner organisations in East London and Tower Hamlets, the college provides direct referrals for qualifying learners, based on programme performance and readiness.",
    tag: "East London network",
  },
];

const steps = [
  { n: "1", title: "Induction: goals conversation", body: "At enrolment your Programme Lead discusses your employment or study goals so that support is tailored from the outset." },
  { n: "2", title: "Ongoing: workshops & CV building", body: "Employability sessions run throughout the programme, progressively building workplace readiness alongside your qualification." },
  { n: "3", title: "Mid-programme: progression review", body: "A one-to-one review at the halfway point confirms whether your focus is employment, further study, or both, and adjusts your support plan accordingly." },
  { n: "4", title: "Pre-completion: referral and readiness", body: "Interview preparation, CV finalisation, and vacancy referral where applicable — timed to your qualification completion date." },
  { n: "5", title: "Post-completion: continued access", body: "Graduates retain access to progression advice. Contact your Programme Lead to arrange a follow-up session if you are still seeking employment after completion." },
];

const partners = [
  { icon: "✚", title: "iCare", label: "Opportunities", body: "Leading care provider offering comprehensive health and social care services. Typical roles: Healthcare Assistant, Support Worker." },
  { icon: "♥", title: "Everycare Romford", label: "Opportunities", body: "Specialist domiciliary care with structured training programmes. Typical roles: Domiciliary Care Worker, Senior Care Assistant." },
  { icon: "📋", title: "Medicare Link", label: "Opportunities", body: "Healthcare recruitment specialists connecting qualified professionals with opportunities across London." },
  { icon: "◢", title: "Care Square", label: "Opportunities", body: "Modern care facilities with a person-centred approach. Typical roles: Care Home positions, Team Leader opportunities." },
  { icon: "🎓", title: "SMS Higher Education Recruitment", label: "Opportunities", body: "Educational recruitment agency specialising in healthcare education placements. Training and career progression roles available." },
  { icon: "▶", title: "Further study routes", label: "Progression", body: "Level 3 and above qualifications, including nursing access routes. Level 4 graduates may progress to team leader and management roles." },
];

const additionalResources = [
  { icon: "📄", title: "CV templates", body: "Healthcare-specific templates and guidance on presenting your qualification and experience to employers." },
  { icon: "🗣", title: "Mock interview practice", body: "Practice interviews with tutors using competency-based questions from real healthcare sector recruitment processes." },
  { icon: "✏️", title: "Personal statement support", body: "Guidance on writing personal statements for employment and further study applications, including UCAS nursing routes." },
];

/* ── component ─────────────────────────────────────────────────────── */

export default function CareerEmployabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-ocean-breeze py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-5xl lg:text-6xl text-black font-bold mb-6">
              Career And{" "}
              <span className="text-watney-blue-primary">Employability</span>
            </h1>
            <p className="text-lg mb-8 text-gray-900 mx-auto max-w-3xl">
              At Watney College, we are committed to delivering high-quality education alongside measurable career outcomes, particularly within the health and social care sector, ensuring learners are prepared for career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career & Employability Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gray-50">
        {/* decorative shapes */}
        <div
          className="absolute right-[-100px] top-[-100px] w-[520px] h-[520px] pointer-events-none"
          style={{ background: "rgba(0,0,0,0.02)", clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
        />
        <div
          className="absolute left-[-80px] bottom-[-80px] w-[340px] h-[340px] pointer-events-none"
          style={{ background: "rgba(0,0,0,0.03)", clipPath: "polygon(50% 0%,100% 50%,50% 100%,0% 50%)" }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* left copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-5 h-px bg-watney-blue-primary" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-watney-blue-primary">
                  Career &amp; Employability
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.1] mb-5 text-black">
                From qualification<br />
                to <em className="text-watney-blue-primary font-medium">career</em>
              </h1>

              <p className="text-base leading-[1.8] mb-8 max-w-lg text-gray-900">
                We build career readiness into every programme we deliver. From your first day of study through to the point you enter work, Watney College provides structured guidance, sector-specific preparation, and direct connections into healthcare and social care employment.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-watney-blue-primary text-white hover:bg-watney-blue-primary/90 font-semibold px-7"
                  >
                    Apply for a course
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-900 hover:border-gray-500 bg-transparent"
                  >
                    Speak to an advisor
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* right — feature panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 shadow-sm"
            >
              {heroPanelItems.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-100 hover:border-watney-blue-primary/30 transition-all duration-200 cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-watney-blue-primary/15 text-watney-blue-primary flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium text-gray-900 leading-snug">{item.title}</div>
                    <div className="text-[11px] text-gray-600 mt-0.5">{item.sub}</div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.06em] bg-watney-blue-primary/15 text-watney-blue-primary px-2 py-0.5 rounded shrink-0">
                    Included
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CAREER SUPPORT SERVICES ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-watney-blue-primary mb-3">
              <span className="w-5 h-px bg-watney-blue-primary" />
              What we offer
            </span>
            <h2 className="text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight mb-3">
              Career support built into{" "}
              <em className="text-watney-blue-primary not- font-medium">every programme</em>
            </h2>
            <p className="text-base text-gray-700 max-w-xl leading-relaxed">
              All enrolled learners receive the following support as part of their studies — no additional cost, no separate application required.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5"
          >
            {careerSupport.map((svc) => (
              <motion.div
                key={svc.num}
                variants={itemVariants}
                className="group bg-white border border-gray-200 rounded-xl p-8 relative overflow-hidden hover:border-watney-blue-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="absolute inset-y-0 left-0 w-1 bg-watney-blue-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="text-4xl font-semibold text-gray-300 group-hover:text-watney-blue-primary/10 transition-colors mb-5 leading-none">
                  {svc.num}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-5">{svc.body}</p>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wide text-gray-900 bg-gray-100 px-2.5 py-1 rounded">
                  {svc.tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="border-t border-gray-200 mx-6 max-w-6xl lg:mx-auto" />

      {/* ── PROGRESSION PATHWAY ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-watney-blue-primary mb-3">
                <span className="w-5 h-px bg-watney-blue-primary" />
                The process
              </span>
              <h2 className="text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight mb-3">
                Your progression{" "}
                <em className="text-watney-blue-primary not- font-medium">pathway</em>
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Career preparation is embedded across the full duration of your programme — not added at the end.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  variants={itemVariants}
                  className={`flex gap-5 py-5 ${i < steps.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <span className="text-xl font-semibold text-watney-blue-primary min-w-[1.8rem] shrink-0 leading-tight pt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{step.title}</div>
                    <div className="text-[13px] text-gray-700 leading-relaxed">{step.body}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── INDUSTRY PARTNERSHIPS ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-watney-blue-primary mb-3">
              <span className="w-5 h-px bg-watney-blue-primary" />
              Industry partnerships
            </span>
            <h2 className="text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight mb-3">
              Strong industry{" "}
              <em className="text-watney-blue-primary not- font-medium">partnerships</em>
            </h2>
            <p className="text-base text-gray-700 max-w-xl leading-relaxed">
              Watney College is affiliated with a network of trusted care providers and recruitment organisations. Where vacancies are available, qualifying learners are referred directly.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {partners.map((p) => (
              <motion.div
                key={p.title}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-watney-blue-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-ocean-breeze/10 text-watney-blue-primary text-base flex items-center justify-center mb-3">
                  {p.icon}
                </div>
                <div className="text-[15px] font-semibold text-gray-900 mb-0.5">{p.title}</div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-watney-blue-primary mb-1.5">
                  {p.label}
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ADDITIONAL RESOURCES ────────────────────────────────────── */}
      <section className="py-20 ">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-watney-blue-primary mb-3">
              <span className="w-5 h-px bg-watney-blue-primary" />
              Additional resources
            </span>
            <h2 className="text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight mb-3">
              Everything you need,{" "}
              <em className="text-watney-blue-primary not- font-medium">included</em>
            </h2>
            <p className="text-base text-gray-700 max-w-xl leading-relaxed">
              Practical tools and sessions available to all enrolled learners throughout their programme.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {additionalResources.map((r) => (
              <motion.div
                key={r.title}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-watney-blue-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-ocean-breeze/10 text-watney-blue-primary text-xl flex items-center justify-center mx-auto mb-4">
                  {r.icon}
                </div>
                <div className="text-[15px] font-semibold text-gray-900 mb-2">{r.title}</div>
                <p className="text-[13px] text-gray-700 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-soft-sky py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl  font-semibold mb-4">
            Ready to start your{" "}
            <em className="text-watney-blue-primary  font-medium">career journey?</em>
          </h2>
          <p className="text-base  leading-relaxed mb-10">
            We continue to support our learners with career guidance and progression routes in the health and social care sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className=" font-semibold">
                Get career support
              </Button>
            </Link>
            <Link href="/jobs">
              <Button
                size="lg"
                variant="outline"
                className=""
              >
                View job opportunities
              </Button>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 bg-white rounded-lg px-5 py-3">
            <Mail className="w-4 h-4 text-watney-blue-primary" />
            <a
              href="mailto:info@watneycollege.co.uk"
              className="text-[13px] transition-colors"
            >
              info@watneycollege.co.uk
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}