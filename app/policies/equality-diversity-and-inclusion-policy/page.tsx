"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  Users,
  Heart,
  Scale,
  BookOpen,
  GraduationCap,
  Shield,
  Globe,
  AlertCircle,
} from "lucide-react";

export default function EqualityDiversityInclusionPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Equality, Diversity{" "}
              <span className="text-watney-blue-primary">and Inclusion Policy</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Watney College is committed to promoting equality of opportunity,
              valuing diversity and fostering an inclusive environment in which
              all individuals are treated with dignity and respect.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Commitment, scope and protected characteristics */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 1–5
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Commitment, scope and protected characteristics
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      The College does not tolerate discrimination, harassment or
                      victimisation in any form. Equality, diversity and
                      inclusion are embedded across academic provision, student
                      experience, governance and operational practices.
                    </p>
                    <p>
                      This policy is aligned with the Equality Act 2010 and
                      supports the College's regulatory obligations under the OfS
                      framework, particularly in relation to academic quality,
                      student outcomes and consumer protection.
                    </p>
                    <p className="font-semibold text-gray-800">
                      The policy applies to all students, staff, visitors and
                      external stakeholders across all College activities
                      including admissions, teaching, assessment, student support
                      and governance.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Protected characteristics
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Age · Disability · Gender reassignment · Marriage and civil
                      partnership · Pregnancy and maternity · Race (including
                      nationality and ethnicity) · Religion or belief · Sex ·
                      Sexual orientation.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">
                      No individual shall be disadvantaged on the basis of any of
                      these characteristics.
                    </p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Regulatory alignment
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Aligned with: Equality Act 2010 · OfS regulatory framework
                      · UK Quality Code for Higher Education · Awarding body
                      requirements (NQual, ATHE, OTHM, Focus Awards, ESB).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Responsibilities, admissions and learning - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 6–9
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Responsibilities, admissions and learning
                  </h2>
                  <div className="font-semibold text-gray-800 mb-3">
                    Governance and operational responsibilities:
                  </div>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Board of Directors",
                        desc: "overall accountability for equality legislation compliance and strategic oversight",
                      },
                      {
                        title: "Academic Board",
                        desc: "ensures curriculum design, assessment and student outcomes are inclusive and monitored across groups",
                      },
                      {
                        title: "Quality Assurance Committee",
                        desc: "oversees policy implementation within academic delivery and reviews relevant data",
                      },
                      {
                        title: "Senior Management Team",
                        desc: "operational implementation and staff training",
                      },
                      {
                        title: "All staff",
                        desc: "adopt inclusive practices and actively challenge discriminatory behaviour",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            {item.title}
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Admissions
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Admissions processes are conducted fairly, transparently
                      and consistently. Selection decisions are based on merit
                      and suitability. Reasonable adjustments are made where
                      necessary to ensure applicants are not disadvantaged.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Learning, teaching and assessment
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Teaching practices are inclusive and learning materials
                      accessible to all students. Assessment methods are fair and
                      appropriate, with reasonable adjustments implemented in
                      line with awarding organisation guidelines.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Student support
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Academic guidance, additional learning support, safeguarding
                      and wellbeing services are available to all students.
                      External support services are signposted where necessary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Complaints, monitoring and training */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 10–13
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Complaints, monitoring and training
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Complaints and reporting
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Concerns relating to discrimination, harassment or unfair
                        treatment are addressed through the College's Complaints
                        Policy. All reports are treated seriously, investigated
                        promptly, fairly and confidentially.
                      </p>
                    </div>
                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                      <h3 className="font-semibold text-teal-800 mb-2">
                        Monitoring
                      </h3>
                      <p className="text-sm text-teal-700 leading-relaxed">
                        Equality outcomes are monitored through analysis of
                        student recruitment, retention and achievement data,
                        alongside feedback from students and staff. Findings are
                        reviewed by the Quality Assurance Committee and Academic
                        Board, with escalation to the Board of Directors where
                        appropriate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="font-semibold text-gray-800">
                    Training and awareness
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    All staff receive appropriate training in equality, diversity
                    and inclusion as part of induction and ongoing professional
                    development. Awareness of responsibilities under this policy
                    is maintained across all levels of the organisation.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    This policy is reviewed annually to ensure continued
                    compliance with legal and regulatory requirements. Earlier
                    review may take place in response to changes in legislation,
                    regulatory expectations or institutional developments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Linked Policies Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Linked policies and{" "}
                  <span className="text-watney-blue-primary">
                    external references
                  </span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Document
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Relationship
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Access and Participation Statement",
                          "Underpins widening participation commitments",
                        ],
                        [
                          "Student Protection Plan",
                          "Aligns student welfare protections",
                        ],
                        [
                          "Safeguarding and Prevent Policy",
                          "Supports safe and inclusive environment",
                        ],
                        [
                          "Complaints Policy",
                          "Mechanism for raising discrimination concerns",
                        ],
                        [
                          "Admissions Policy",
                          "Ensures fair, non-discriminatory admissions practice",
                        ],
                        [
                          "Equality Act 2010",
                          "Primary legislative framework",
                        ],
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="group hover:bg-blue-50/40 transition-colors duration-150"
                        >
                          <td className="py-5 px-8">
                            <span className="text-base font-bold text-slate-800 group-hover:text-watney-blue-primary transition-colors">
                              {row[0]}
                            </span>
                          </td>
                          <td className="py-5 px-8">
                            <span className="inline-flex items-center text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-200 group-hover:bg-white group-hover:border-blue-200 transition-all">
                              {row[1]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Footer / Download Section */}
          <div className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center">
              <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-gray-500" />
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Last reviewed:{" "}
                <span className="font-medium text-gray-700">November 2025</span>{" "}
                &nbsp;·&nbsp; Version:{" "}
                <span className="font-medium text-gray-700">1.0</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">November 2026</span>
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Equality, Diversity and Inclusion Policy (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}