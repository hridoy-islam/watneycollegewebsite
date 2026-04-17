"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  Shield,
  AlertTriangle,
  Users,
  Eye,
  Lock,
  Scale,
  Briefcase,
  AlertCircle,
  Megaphone,
  FileCheck,
} from "lucide-react";

export default function WhistleblowingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Megaphone className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Whistleblowing{" "}
              <span className="text-watney-blue-primary">
                (Protected Disclosure) Policy
              </span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Watney College is committed to maintaining the highest standards
              of integrity, academic probity, financial transparency and
              regulatory compliance. This policy establishes safe, independent
              mechanisms for raising concerns in the public interest.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Commitment, scope and what constitutes whistleblowing */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 1–4
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Commitment, scope and what constitutes whistleblowing
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      The College recognises that effective governance requires
                      safe and independent mechanisms for raising concerns. The
                      College will not tolerate retaliation against any person
                      who raises a concern in good faith.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      This policy applies to:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "All employees (all categories)",
                        "Consultants, contractors and agency staff",
                        "Governors and Board members",
                        "Volunteers",
                        "Students where concerns relate to institutional wrongdoing",
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
                      Legal framework
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Public Interest Disclosure Act 1998 · Employment Rights
                      Act 1996 · Data Protection Act 2018
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      What counts as whistleblowing
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      A disclosure the individual reasonably believes is in the
                      public interest and tends to show: criminal offence ·
                      financial malpractice · regulatory breach · academic
                      standards compromise · health and safety risk · data
                      protection breach · abuse of authority · concealment of
                      wrongdoing.{" "}
                      <strong className="font-semibold">
                        Proof is not required — reasonable belief is sufficient.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Governance, protection and confidentiality - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 6–8
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Governance, protection and confidentiality
                  </h2>
                  <div className="space-y-4">
                    <div className="font-semibold text-gray-800">
                      Governance accountability:
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Board of Directors
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — ultimate accountability for effective internal
                            control systems including whistleblowing
                            arrangements
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Audit & Risk Committee
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — monitors effectiveness, receives anonymised summary
                            reports, reviews systemic risks, ensures independence
                            of investigations
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Principal
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — operational implementation and ensuring disclosures
                            are acknowledged and investigated
                          </span>
                        </div>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      Where the allegation concerns senior leadership or the
                      Board, the Chair may appoint an independent external
                      investigator.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Protection from detriment
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      No individual will suffer dismissal, disciplinary action,
                      harassment, disadvantage or loss of opportunity as a
                      result of raising a concern in good faith. Retaliation
                      will be treated as gross misconduct.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Confidentiality
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Disclosures will be handled confidentially so far as
                      reasonably practicable. All personal data is processed in
                      accordance with the College's Data Protection Policy.
                      Anonymous disclosures may be considered but may limit the
                      College's ability to investigate effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Procedure for raising and investigating concerns */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Section 9
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Procedure for raising and investigating concerns
                  </h2>
                  <div className="space-y-4">
                    <div className="font-semibold text-gray-800">
                      Concerns may be raised through:
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Line management (where appropriate)",
                        "The Principal",
                        "The Chair of the Audit & Risk Committee",
                        "The Chair of the Board of Directors",
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      Anonymous disclosures will be accepted.
                    </p>

                    <div className="mt-6 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                          <span className="text-watney-blue-primary font-bold text-sm">
                            1
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">
                            Initial assessment
                          </div>
                          <p className="text-sm text-gray-600">
                            All disclosures acknowledged promptly. Assessed to
                            determine policy scope, immediate protective action
                            needed, and whether external referral is necessary.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                          <span className="text-watney-blue-primary font-bold text-sm">
                            2
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">
                            Investigation
                          </div>
                          <p className="text-sm text-gray-600">
                            Independent investigating officer appointed. Gathers
                            evidence, conducts interviews, produces written
                            findings. External referral to auditors, regulators
                            or law enforcement where appropriate.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                          <span className="text-watney-blue-primary font-bold text-sm">
                            3
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">
                            Outcome
                          </div>
                          <p className="text-sm text-gray-600">
                            Outcomes may include disciplinary action, regulatory
                            notification, process improvement or no further
                            action. Whistleblower informed of outcome subject to
                            confidentiality constraints.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      External disclosure
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Nothing in this policy prevents individuals from making a
                      protected disclosure to a prescribed regulator under UK
                      law where appropriate.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Malicious disclosures
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Malicious or knowingly false disclosures may result in
                      disciplinary action.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Monitoring
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The Audit & Risk Committee receives periodic reports on
                      the number and nature of disclosures, status and outcomes,
                      and emerging risk themes. This policy is reviewed annually
                      and approved by the Board of Directors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reporting Routes Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Reporting routes and{" "}
                  <span className="text-watney-blue-primary">escalation</span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Concern relates to
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Report to
                        </th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "General operational concerns",
                          "Line manager or Principal",
                        ],
                        [
                          "Principal or senior leadership",
                          "Chair of Audit & Risk Committee",
                        ],
                        [
                          "Board-level concerns",
                          "Chair of the Board of Directors (independent investigator may be appointed)",
                        ],
                        [
                          "Regulatory breach (external)",
                          "Prescribed regulator under UK law",
                        ],
                        [
                          "Risk and systemic themes",
                          "Audit & Risk Committee (periodic reporting)",
                        ],
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="group hover:bg-blue-50/40 transition-colors duration-150"
                        >
                          <td className="py-5 px-8">
                            <span className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
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
                <span className="font-medium text-gray-700">
                  5 November 2025
                </span>{" "}
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
                Download the full Whistleblowing (Protected Disclosure) Policy
                (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}