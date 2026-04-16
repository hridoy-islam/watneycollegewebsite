"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheck,
  Users,
  BookOpen,
  AlertTriangle,
  FileText,
  Handshake,
  ExternalLink,
  Info,
  Scale,
  Globe,
  UserCheck,
  HeartHandshake,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";

export default function PreventDutyStatementPage() {
  const preventCommitments = [
    {
      icon: ShieldCheck,
      title: "Safeguarding responsibility",
      description:
        "The College actively protects students and staff from being drawn into terrorism or extremist ideologies, treating Prevent as an integral part of our safeguarding duty.",
    },
    {
      icon: BookOpen,
      title: "Fundamental British Values",
      description:
        "Democracy, the rule of law, individual liberty, and mutual respect and tolerance of different faiths and beliefs are embedded in our curriculum, conduct expectations and institutional culture.",
    },
    {
      icon: Users,
      title: "Staff training & vigilance",
      description:
        "All staff — academic, administrative and sessional — receive annual Prevent awareness training. Staff understand how to identify indicators of radicalisation and the appropriate referral routes.",
    },
    {
      icon: AlertTriangle,
      title: "Risk assessment",
      description:
        "An annual written Prevent risk assessment is completed by the Prevent Lead, reviewed by the Board of Directors, and refreshed whenever material changes to provision or student population occur.",
    },
    {
      icon: Handshake,
      title: "Partnership with authorities",
      description:
        "The College works with the local police Prevent team, the London Borough of Tower Hamlets Channel panel, and designated safeguarding partners whenever concerns arise requiring external referral.",
    },
    {
      icon: MessageCircle,
      title: "Open dialogue & critical thinking",
      description:
        "The College promotes lawful free speech and an environment in which students are equipped and encouraged to challenge extremist narratives through evidence-based debate and professional values education.",
    },
  ];

  const bfvItems = [
    {
      icon: Globe,
      label: "Democracy",
      desc: "Students are educated in the importance of democratic participation, rights of representation and the accountability of public institutions, including regulatory bodies governing health and social care.",
    },
    {
      icon: Scale,
      label: "Rule of law",
      desc: "Programme content includes legal frameworks governing adult social care, patient rights, professional duties and compliance obligations — reinforcing the centrality of law to professional practice.",
    },
    {
      icon: UserCheck,
      label: "Individual liberty",
      desc: "Students are taught to uphold service user autonomy, informed consent and personal freedom — values that directly underpin healthcare ethics and the Care Act 2014 framework.",
    },
    {
      icon: HeartHandshake,
      label: "Mutual respect & tolerance",
      desc: "Delivering care to diverse communities requires students to demonstrate respectful, non-discriminatory practice. The Equality Act 2010 and cultural competence are embedded across assessments.",
    },
  ];

  const riskTableData = [
    {
      area: "International student population",
      context:
        "Non-UK UG students (30–50 FTE) from varied jurisdictions; may face isolation or exploitation",
      rating: "Medium",
      ratingClass: "bg-orange-100 text-orange-700",
      control:
        "Structured induction; student welfare check-ins; UKVI compliance; external referral pathway",
    },
    {
      area: "Online content and external speakers",
      context: "Blended delivery model; access to external digital content",
      rating: "Medium",
      ratingClass: "bg-orange-100 text-orange-700",
      control:
        "Curriculum vetting; online acceptable use policy; speaker approval process",
    },
    {
      area: "Student vulnerability indicators",
      context:
        "Healthcare cohort may include individuals with lived experience of marginalisation",
      rating: "Medium",
      ratingClass: "bg-orange-100 text-orange-700",
      control:
        "Prevent-trained tutors; personal academic support; referral to Channel where appropriate",
    },
    {
      area: "Extremist literature or materials",
      context:
        "No open-access physical holdings; online resources curated by academic staff",
      rating: "Low",
      ratingClass: "bg-green-100 text-green-700",
      control:
        "IT acceptable use policy; filtered network access; annual review of learning resources",
    },
    {
      area: "Staff radicalisation",
      context:
        "Small staff body with direct Board oversight and close working relationships",
      rating: "Low",
      ratingClass: "bg-green-100 text-green-700",
      control: "DBS checks; annual Prevent training; open reporting culture",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        {/* Decorative Background Patterns */}
        <div className="absolute right-44 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-44 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative bg-ocean-breeze py-20">
          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 bg-watney-blue-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="w-8 h-8 text-watney-blue-primary" />
              </div>
              <h1 className="text-5xl lg:text-6xl text-black font-bold mb-6">
                Prevent Duty{" "}
                <span className="text-watney-blue-primary">Statement</span>
              </h1>
              <p className="text-lg mb-8 text-gray-600 max-w-3xl mx-auto">
                Watney College is committed to its statutory obligations under
                the Counter-Terrorism and Security Act 2015. We fulfil our
                Prevent Duty through a structured programme of risk assessment,
                staff training, partnership working and proportionate
                safeguarding.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-watney-blue-primary/10 border border-watney-blue-primary/20 rounded-full px-4 py-1.5 text-xs text-watney-blue-primary font-medium">
                  Counter-Terrorism & Security Act 2015, s.26
                </span>
                <span className="bg-watney-blue-primary/10 border border-watney-blue-primary/20 rounded-full px-4 py-1.5 text-xs text-watney-blue-primary font-medium">
                  OfS Prevent Monitoring Framework
                </span>
                <span className="bg-watney-blue-primary/10 border border-watney-blue-primary/20 rounded-full px-4 py-1.5 text-xs text-watney-blue-primary font-medium">
                  UKPRN: 10087811
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Section 1: Prevent Commitments */}
      <section className="py-16 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute right-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="mb-10 text-center z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
              Our obligations
            </p>
            <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
              Our Prevent Duty{" "}
              <span className="text-watney-blue-primary">Commitments</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto">
              As a registered higher education provider, Watney College has due
              regard to the need to prevent students and staff from being drawn
              into terrorism, in accordance with the Prevent Duty Guidance for
              Higher Education Institutions in England and Wales (Home Office,
              2015).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {preventCommitments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="z-20"
              >
                <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow z-20">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-watney-blue-primary" />
                    </div>
                    <CardTitle className="text-[15px] font-bold text-black">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[13px] leading-relaxed text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Fundamental British Values */}
      <section className="py-16 bg-gray-50  relative overflow-hidden  ">
        <div className="absolute right-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
              Statutory framework
            </p>
            <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
              Fundamental British Values{" "}
              <span className="text-watney-blue-primary">in our provision</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto">
              Across our healthcare and vocational programmes — including the
              ATHE Level 4 Healthcare Diploma and the NQual Level 2 Adult Social
              Care Certificate — the four fundamental British values are
              embedded in programme content, professional practice expectations
              and student induction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {bfvItems.map((bfv, idx) => (
              <div
                key={idx}
                className="bg-white border-l-4 border-watney-blue-primary p-5 rounded-r-lg shadow-sm flex gap-4 z-20"
              >
                <div className="flex-shrink-0 mt-1">
                  <bfv.icon className="w-5 h-5 text-watney-blue-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-watney-blue-primary mb-1">
                    {bfv.label}
                  </h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {bfv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Risk Assessment Table */}
      <section className="py-16 bg-white  relative overflow-hidden">
        <div className="absolute right-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 "></div>
        <div className="absolute left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 "></div>
        <div className="container mx-auto px-4 max-w-5xl relative">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
              Risk management
            </p>
            <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
              Prevent risk{" "}
              <span className="text-watney-blue-primary">assessment</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto">
              The College maintains a written Prevent risk assessment reviewed
              annually and whenever provision materially changes. The assessment
              identifies risks specific to our student population and delivery
              context.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white z-50">
            <table className="w-full text-left border-collapse text-[14px] z-20">
              <thead className="bg-gray-50 text-gray-600 z-20">
                <tr className="z-20">
                  <th className="p-4 font-bold uppercase tracking-wide text-xs border-b border-gray-200 text-black">
                    Risk area
                  </th>
                  <th className="p-4 font-bold uppercase tracking-wide text-xs border-b border-gray-200 text-black">
                    College context
                  </th>
                  <th className="p-4 font-bold uppercase tracking-wide text-xs border-b border-gray-200 text-black">
                    Rating
                  </th>
                  <th className="p-4 font-bold uppercase tracking-wide text-xs border-b border-gray-200 text-black">
                    Control measure
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 z-20">
                {riskTableData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0 z-20"
                  >
                    <td className="p-4 font-medium text-black">{row.area}</td>
                    <td className="p-4 text-gray-600 leading-relaxed">
                      {row.context}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${row.ratingClass}`}
                      >
                        {row.rating}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600 leading-relaxed">
                      {row.control}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: Leadership & Accountability */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute right-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-20">
          <motion.div
            className="mb-8 text-center z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
              Leadership & accountability
            </p>
            <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
              Prevent <span className="text-watney-blue-primary">Lead</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto">
              Watney College has appointed a named Prevent Lead at senior
              management level responsible for the College's Prevent policy,
              risk assessment, staff training coordination and external liaison.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6">
            <div className="w-12 h-12 rounded-full bg-watney-blue-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              SJI
            </div>
            <div>
              <p className="text-[15px] font-bold text-black">
                Syed Jahedul Islam
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Designated Prevent Lead, Watney College
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                The Prevent Lead reports to the Board of Directors and presents
                an annual Prevent assurance report. The Audit, Remuneration and
                Risk Committee (ARRC) receives Prevent risk updates as part of
                its risk management oversight mandate. All Prevent referrals are
                handled by the Prevent Lead in accordance with the College's
                Safeguarding Policy and, where appropriate, escalated to the
                London Borough of Tower Hamlets Channel panel or local police
                Prevent team.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-blue-50 border border-blue-100 rounded-xl p-5">
            <p className="text-[14px] text-blue-900 leading-relaxed">
              <strong className="font-bold">Prevent Policy document</strong> —
              The College's full written Prevent Policy, including the risk
              assessment and training log, is available on request. A published
              version will be linked here once finalised.
            </p>
            <Button
              asChild
              className="bg-watney-blue-primary hover:bg-blue-800 text-white shrink-0"
            >
              <Link href="/contact">Request a copy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Reporting Concerns */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute right-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>
        <div className="container mx-auto px-4 max-w-5xl relative">
          <motion.div
            className="mb-8 text-center z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
              Raising a concern
            </p>
            <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
              Reporting a{" "}
              <span className="text-watney-blue-primary">concern</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto">
              If you have a concern about a student's vulnerability to
              radicalisation, or about extremist content or behaviour
              encountered in connection with College activity, report it
              promptly. All reports are treated with care and in accordance with
              the College's Safeguarding and Confidentiality Policy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 relative z-20">
            {/* Internal Report */}
            <div className="bg-watney-blue-primary rounded-xl p-6 text-white shadow-sm">
              <h3 className="text-[15px] font-bold text-white mb-2">
                Internal report
              </h3>
              <p className="text-[14px] text-white/80 leading-relaxed mb-4">
                Speak to your tutor, the Safeguarding Team or contact the
                Prevent Lead directly. You may also submit a report through our
                Contact Us page.
              </p>
              <Link
                href="/contact"
                className="text-[14px] font-bold text-white hover:underline inline-flex items-center"
              >
                Go to Contact Us <span className="ml-1">→</span>
              </Link>
            </div>

            {/* External Support */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-[15px] font-bold text-red-700 mb-2">
                External support
              </h3>
              <p className="text-[14px] text-red-900/80 leading-relaxed mb-4">
                Contact the national Anti-Terrorist Hotline or your local police
                if the matter is urgent. Contact emergency services if there is
                an immediate risk to life.
              </p>
              <a
                href="tel:08007891321"
                className="text-[14px] font-bold text-red-700 hover:text-red-800"
              >
                Anti-Terrorist Hotline: 0800 789 321
              </a>
            </div>
          </div>
        </div>

        {/* Footer Strip */}
        <div className="  text-[13px] py-6 px-4">
          <div className="container mx-auto max-w-5xl text-center leading-relaxed">
            This statement is reviewed annually by the Board of Directors. Last
            reviewed: Academic Year 2024–25. Queries regarding Prevent
            compliance may be directed to the Prevent Lead via the{" "}
            <Link
              href="/contact"
              className="text-primary font-bold hover:underline"
            >
              Contact Us
            </Link>{" "}
            page. Watney College Limited, Company No. 12858207, UKPRN 10087811.
            Registered address: Focal House, London Borough of Tower Hamlets.
          </div>
        </div>
      </section>
    </div>
  );
}
