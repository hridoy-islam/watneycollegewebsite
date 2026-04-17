"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Scale,
  Users,
  FileCheck,
  MessageSquare,
  Shield,
  Eye,
  Clock,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

export default function ComplaintPolicyProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Complaint Policy{" "}
              <span className="text-watney-blue-primary">and Process</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              The formal framework through which complaints concerning Watney
              College's services, conduct, administration or academic provision
              may be raised, investigated and resolved fairly, transparently and
              in a timely manner.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Scope, principles and who can complain */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 1–3
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Scope, principles and who can complain
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      This policy applies to current and former students,
                      applicants, parents and sponsors, employers, agents,
                      visitors, members of the public, and contractors.
                      Complaints, when handled effectively, contribute to
                      institutional transparency, accountability, quality
                      enhancement and regulatory compliance.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      This policy covers dissatisfaction relating to:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Service delivery standards and administrative processes",
                        "Institutional conduct and behaviour of staff or students",
                        "Facilities and resources",
                        "Equality and inclusion matters",
                        "Failure to follow published policies",
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Principles
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Fairness and impartiality · Independence of review ·
                      Transparency of process · Timeliness · Confidentiality ·
                      Protection from victimisation · Proportionality of outcome
                      · Clear governance oversight.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      This policy does not apply to
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Academic judgment · Assessment marks (unless procedural
                      irregularity alleged) · Employment grievances · Protected
                      disclosures. These are redirected to the appropriate
                      procedure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Three-stage complaints procedure - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Section 6
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Three-stage complaints procedure
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Stage 1 — Informal resolution
                        </div>
                        <p className="text-sm text-gray-600">
                          Complainants are encouraged to seek informal resolution
                          within 10 working days. The College will attempt to
                          resolve matters promptly at local level. A summary note
                          is retained for monitoring.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Stage 2 — Formal investigation
                        </div>
                        <p className="text-sm text-gray-600">
                          Formal complaint submitted in writing. Acknowledged
                          within 5 working days. Investigation normally concludes
                          within 20 working days. Outcome letter includes
                          findings, rationale, decision, actions and review
                          rights.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Stage 3 — Final internal review
                        </div>
                        <p className="text-sm text-gray-600">
                          Requested within 10 working days on grounds of
                          procedural irregularity, conflict of interest, new
                          material evidence, or disproportionate outcome. Panel
                          decision is the Final Internal Stage. A Completion of
                          Procedures letter is issued.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Admissibility
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Complaints are normally admissible where submitted within
                      20 working days of the matter arising, within defined
                      scope, not previously concluded, and with sufficient
                      information provided. The College may decline complaints
                      that are vexatious, frivolous, repetitive without new
                      evidence, or abusive in tone.
                    </p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      External escalation
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Following completion of internal procedures, students and
                      former students may seek independent external review via
                      the Office of the Independent Adjudicator for Higher
                      Education (OIA) at www.oiahe.org.uk. The OIA review must
                      normally be submitted within 12 months of the Completion
                      of Procedures letter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Remedies, safeguarding referrals and monitoring */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 9–10
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Remedies, safeguarding referrals and monitoring
                  </h2>
                  <div className="font-semibold text-gray-800 mb-3">
                    Where a complaint is upheld, remedies may include:
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Formal apology",
                      "Procedural correction",
                      "Service improvement",
                      "Policy revision",
                      "Training measures",
                      "Other proportionate redress",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Financial remedies align with the Tuition Fee Refund and
                    Compensation Policy.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Safeguarding and serious matters
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Where a complaint raises safeguarding or criminal concerns,
                      it may be referred immediately to the Safeguarding Lead,
                      disciplinary procedures, or appropriate external
                      authorities. Such referrals do not remove the College's
                      obligation to complete a complaints review where
                      appropriate.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Monitoring
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The Quality Assurance Committee reports on volume, nature,
                      resolution timelines and trends. Annual analysis is
                      reviewed by the Academic Board. Systemic or regulatory risk
                      is escalated to the College Oversight Board. The Board of
                      Directors retains ultimate accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Governance Reporting Line Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Governance{" "}
                  <span className="text-watney-blue-primary">
                    Reporting Line
                  </span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Level
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Body
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Role
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        {
                          level: "Operational",
                          body: "Complaints Officer",
                          role: "Day-to-day handling and investigation",
                        },
                        {
                          level: "Quality oversight",
                          body: "Quality Assurance Committee",
                          role: "Monitoring trends and systemic issues",
                        },
                        {
                          level: "Academic oversight",
                          body: "Academic Board",
                          role: "Annual analysis and quality enhancement",
                        },
                        {
                          level: "Strategic oversight",
                          body: "College Oversight Board",
                          role: "Regulatory and reputational risk escalation",
                        },
                        {
                          level: "Ultimate accountability",
                          body: "Board of Directors",
                          role: "Final governance responsibility",
                        },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="group hover:bg-blue-50/40 transition-colors duration-150"
                        >
                          <td className="py-5 px-8">
                            <span className="text-base font-bold text-slate-800 group-hover:text-watney-blue-primary transition-colors">
                              {row.level}
                            </span>
                          </td>
                          <td className="py-5 px-8">
                            <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-200 group-hover:bg-white group-hover:border-blue-200 transition-all">
                              {row.body}
                            </span>
                          </td>
                          <td className="py-5 px-8">
                            <span className="text-sm font-medium text-slate-600">
                              {row.role}
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
                <span className="font-medium text-gray-700">
                  5 November 2025
                </span>{" "}
                &nbsp;·&nbsp; Version:{" "}
                <span className="font-medium text-gray-700">1.2</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">November 2026</span>
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Complaint Policy and Process (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}