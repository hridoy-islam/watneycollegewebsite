"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  Shield,
  Lock,
  Eye,
  Trash2,
  RefreshCw,
  AlertCircle,
  Database,
  Users,
  FileCheck,
} from "lucide-react";

export default function DataProtectionPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Data Protection <span className="text-watney-blue-primary">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Watney College is committed to protecting the privacy and security
              of personal data in compliance with the UK GDPR and the Data
              Protection Act 2018. This policy sets out the principles, rights
              and responsibilities governing all data processing at the College.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Principles and lawful basis for processing */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 1–4
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Principles and lawful basis for processing
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      The College recognises its responsibility in ensuring the
                      confidentiality, integrity and security of personal data.
                      This policy applies to all staff, students and third parties
                      who process personal data on behalf of Watney College.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      Personal data will be:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Processed lawfully, fairly and transparently",
                        "Collected for specific, legitimate purposes only",
                        "Adequate, relevant and limited to what is necessary",
                        "Kept accurate and up to date",
                        "Not retained longer than necessary",
                        "Processed in a secure manner",
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
                      Lawful basis for processing
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Consent · Contractual necessity (e.g. student enrolment or
                      employment) · Legal obligation · Legitimate interests ·
                      Vital interests · Public task. Processing will only occur
                      where a valid lawful basis exists under UK GDPR.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Types of data covered
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Personal Identifiable Information (PII) including names,
                      addresses and contact details · Special Category Data
                      including health data and religious beliefs · Student
                      academic records, enrolment details and performance data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Your rights and data security - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 6–9
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Your rights and data security
                  </h2>
                  <div className="font-semibold text-gray-800 mb-3">
                    Under UK GDPR, individuals have the right to:
                  </div>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Access",
                        desc: "request a copy of personal data held",
                      },
                      {
                        title: "Rectification",
                        desc: "request corrections to inaccurate data",
                      },
                      {
                        title: "Erasure",
                        desc: "request deletion, subject to conditions",
                      },
                      {
                        title: "Restrict processing",
                        desc: "block further processing in certain circumstances",
                      },
                      {
                        title: "Data portability",
                        desc: "receive data in a machine-readable format",
                      },
                      {
                        title: "Object",
                        desc: "object to processing in certain situations",
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
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Data security measures
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Secure physical and electronic storage · Strong access
                      controls (staff access only what is necessary) · Regular
                      staff training on data protection · Encryption of sensitive
                      data where appropriate.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Third-party processors
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Where personal data is shared with third parties such as
                      awarding bodies, quality agencies or IT support providers,
                      appropriate data processing agreements are in place to
                      ensure GDPR compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Data Protection Officer, breach reporting and responsibilities */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 10–12
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Data Protection Officer, breach reporting and responsibilities
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Data Protection Officer (DPO)
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The College has appointed a DPO responsible for overseeing
                        data protection compliance and monitoring adherence to UK
                        GDPR. Contact the DPO at: info@watneycollege.co.uk or +44
                        (0) 2080046463.
                      </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <h3 className="font-semibold text-amber-800 mb-2">
                        Breach reporting
                      </h3>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Where a data breach could result in harm to individuals,
                        the College will notify the relevant supervisory authority
                        and affected individuals within{" "}
                        <strong className="font-semibold">72 hours</strong>, as
                        required under UK GDPR. All suspected breaches must be
                        reported immediately to the DPO.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="font-semibold text-gray-800">
                    All staff and students who handle personal data must:
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Be familiar with and follow this policy and relevant guidelines",
                      "Ensure personal data is stored securely and used appropriately",
                      "Report any suspected data breaches immediately to the DPO",
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Data will be retained in accordance with the College's data
                    retention schedule and securely deleted or anonymised when no
                    longer required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal and Regulatory Framework Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Legal and{" "}
                  <span className="text-watney-blue-primary">
                    regulatory framework
                  </span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Legislation / guidance
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Relevance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "UK General Data Protection Regulation (UK GDPR)",
                          "Primary data protection framework",
                        ],
                        [
                          "Data Protection Act 2018",
                          "UK implementation of GDPR obligations",
                        ],
                        [
                          "ICO Guide to the General Data Protection Regulation",
                          "Regulatory guidance on compliance",
                        ],
                        [
                          "GDPR (EU) 2016/679",
                          "EU origin regulation informing UK framework",
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
                <span className="font-medium text-gray-700">1.2</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">November 2026</span>
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Data Protection Policy (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}