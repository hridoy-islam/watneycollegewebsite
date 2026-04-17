"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  Shield,
  AlertTriangle,
  Gavel,
  Scale,
  Users,
  Eye,
  Lock,
  Briefcase,
  AlertCircle,
} from "lucide-react";

export default function AntiBriberyAntiCorruptionPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Gavel className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Anti-Bribery and{" "}
              <span className="text-watney-blue-primary">
                Anti-Corruption Policy
              </span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Watney College adopts a zero-tolerance approach to bribery and
              corruption in all forms. This policy sets out our legal
              obligations, prohibited conduct, reporting mechanisms and
              governance arrangements.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Commitment, scope and definitions */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 1–4
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Commitment, scope and definitions
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Watney College is committed to conducting all academic,
                      financial and commercial activities with integrity,
                      transparency and accountability. Failure to prevent bribery
                      is a criminal offence under UK law.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      This policy applies to:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Board members and committee members",
                        "All employees and consultants",
                        "Agents and recruitment partners",
                        "Suppliers and contractors",
                        "Students acting in an official or representative capacity",
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
                      Bribery Act 2010 · Public Interest Disclosure Act 1998 ·
                      Employment Rights Act 1996 · Data Protection Act 2018
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      What counts as an improper advantage
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Cash payments · Gifts · Hospitality beyond reasonable
                      proportion · Commission payments · Facilitation payments ·
                      Undisclosed referral incentives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Prohibited conduct - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Section 5
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Prohibited conduct
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      It is strictly prohibited to offer or accept any bribe,
                      make facilitation payments, or provide inducements to
                      awarding body representatives, students, agents or
                      regulators.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      No employee or representative may authorise any payment or
                      benefit intended to improperly influence:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Admissions decisions",
                        "Assessment outcomes",
                        "Validation or accreditation processes",
                        "Regulatory inspections",
                        "Procurement decisions",
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
                      Gifts and hospitality
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Proportionate hospitality may be permitted only where it is
                      reasonable and modest, properly recorded, and not linked to
                      decision-making. All gifts and hospitality require prior
                      written approval from the Principal. A central register is
                      maintained by the Finance Office and reviewed by the Audit,
                      Remuneration & Risk Committee.
                    </p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Due diligence
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Proportionate due diligence is conducted on agents,
                      overseas recruitment partners, suppliers and contractors.
                      All contracts include anti-bribery clauses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Governance, reporting and investigation */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 7–9
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Governance, reporting and investigation
                  </h2>
                  <div className="font-semibold text-gray-800 mb-3">
                    Governance accountability:
                  </div>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Board of Directors",
                        desc: "ultimate accountability for adequate procedures",
                      },
                      {
                        title: "Audit, Remuneration & Risk Committee",
                        desc: "monitors controls, reviews whistleblowing reports, oversees investigations",
                      },
                      {
                        title: "Academic Board",
                        desc: "protects academic integrity from corrupt influence",
                      },
                      {
                        title: "Principal",
                        desc: "operational implementation and prompt investigation",
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
                      Raising a concern
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Concerns may be raised via line manager, Principal, Chair of
                      ARRC, or Chair of the Board. This policy operates alongside
                      the Whistleblowing (Protected Disclosure) Policy.
                      Individuals raising concerns in good faith are protected
                      from detriment.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Consequences of breach
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Confirmed breaches may result in disciplinary proceedings,
                      termination of employment or contract, referral to law
                      enforcement, and revocation of academic awards where
                      applicable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Escalation Framework Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Risk{" "}
                  <span className="text-watney-blue-primary">
                    escalation framework
                  </span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Risk level
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Responsible body
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Programme-level concerns",
                          "Quality Assurance Committee",
                        ],
                        [
                          "Institutional academic integrity risk",
                          "Academic Board",
                        ],
                        [
                          "Material regulatory or reputational risk",
                          "College Oversight Board",
                        ],
                        [
                          "Financial / compliance risk",
                          "Audit, Remuneration & Risk Committee",
                        ],
                        ["Ultimate accountability", "Board of Directors"],
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
                Download the full Anti-Bribery and Anti-Corruption Policy (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}