"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  Shield,
  AlertCircle,
  Users,
  Eye,
  FileCheck,
  Globe,
  PenTool,
  Megaphone,
  BookOpen,
  Calendar,
} from "lucide-react";

export default function InformationAccuracyCompletenessPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <FileCheck className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Information Accuracy{" "}
              <span className="text-watney-blue-primary">
                and Completeness Policy
              </span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Ensuring that all information published by Watney College is
              accurate, complete, transparent, reliable and not misleading —
              enabling prospective and current students to make fully informed
              decisions.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Purpose, scope and principles */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Sections 1–4
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Purpose, scope and principles
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      This policy aligns with the expectations of regulatory
                      bodies regarding transparency, consumer protection and
                      regulatory compliance. It covers all information published
                      in digital or printed form, including prospectuses,
                      programme specifications, student regulations, marketing
                      materials, website content, social media, and information
                      relating to fees, entry requirements, awarding arrangements
                      and regulatory status.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      All published information must be:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Accurate, complete, clear and capable of being relied upon",
                        "Presented in accessible language",
                        "Not omitting material facts that could influence student decisions",
                        "Accurate in representing regulatory status, validation arrangements and academic awards",
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
                      Regulatory framework
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Data Protection Act 2018 · Consumer protection law as
                      interpreted by the CMA · Regulatory requirements of OfS and
                      awarding bodies.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Course information must accurately state
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Award title · Validation or awarding body · Mode of
                      delivery · Duration · Entry requirements · Assessment
                      methods · Tuition fees and additional mandatory costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Responsibilities - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Section 5
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {[
                      {
                        title: "Board of Directors",
                        desc: "ultimate oversight of institutional integrity and transparency",
                      },
                      {
                        title: "Principal",
                        desc: "ensures effective systems and controls are in place",
                      },
                      {
                        title: "Director of Studies",
                        desc: "verifies academic content before publication and ensures consistency with approved documentation",
                      },
                      {
                        title: "Programme Leaders",
                        desc: "reviews course-specific information annually and confirms accuracy before publication",
                      },
                      {
                        title: "Marketing and Communications",
                        desc: "ensures only approved and verified information is published",
                      },
                      {
                        title: "All staff",
                        desc: "must report any inaccurate or potentially misleading information immediately to their line manager",
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
                      Approval requirements
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      All core academic and regulatory documents must state a
                      version number, date of approval, approving body and review
                      date. Academic regulations and policies must be approved by
                      the Academic Committee and, where required, by the Board of
                      Directors prior to publication.
                    </p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Marketing materials
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Marketing materials relating to validated programmes must
                      accurately reflect approved documentation and, where
                      required, receive validation partner approval prior to
                      publication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Website accuracy */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-sm font-semibold text-watney-blue-primary uppercase tracking-wider mb-2">
                    Section 6
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Website accuracy
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      The College website is the primary and authoritative source
                      of information for prospective and current students.
                      Website accuracy is critical for regulatory compliance and
                      consumer protection.
                    </p>
                    <ul className="space-y-2 mt-4">
                      {[
                        "All HE course information must reflect formally approved programme specifications and current institutional policies",
                        "Website content on regulatory status must accurately describe the College's current status",
                        "Content must not imply regulatory approval, degree awarding powers or partnership arrangements not formally in place",
                        "Each course page is subject to an annual formal review prior to the recruitment cycle",
                        "The College periodically audits website content to verify alignment with approved documentation",
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
                      In-year updates
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Where material changes are required during the academic
                      year, updates must be approved by the Head of Academic or
                      designated academic lead before publication.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Significant errors
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Where significant errors are identified on the website,
                      corrections will be made promptly and, where appropriate,
                      affected students or applicants will be notified. The
                      College maintains version control records for key web-based
                      academic and regulatory documents.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Changes to published information
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Where changes materially affect enrolled students, they are
                      managed in accordance with the Course Changes and Closure
                      Policy. Significant corrections are documented and retained
                      for audit purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring and Review Responsibilities Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Monitoring and review{" "}
                  <span className="text-watney-blue-primary">
                    responsibilities
                  </span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Function
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Responsibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Academic departments",
                          "Review course information annually before each recruitment cycle",
                        ],
                        [
                          "Marketing and Communications",
                          "Publish only approved, verified information",
                        ],
                        [
                          "Academic Committee",
                          "Periodic assurance on compliance with this policy",
                        ],
                        [
                          "Board of Governors",
                          "Annual policy review as part of governance oversight",
                        ],
                        [
                          "Head of Academic",
                          "Approve in-year material updates before publication",
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
                <span className="font-medium text-gray-700">
                  5 November 2025
                </span>{" "}
                &nbsp;·&nbsp; Version:{" "}
                <span className="font-medium text-gray-700">1.2</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">
                  5 November 2026
                </span>
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Information Accuracy and Completeness Policy
                (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}