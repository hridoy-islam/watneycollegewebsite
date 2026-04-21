"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Users,
  GraduationCap,
  Calendar,
  AlertCircle,
  AlertTriangle,
  BookOpen,
  Briefcase,
  CreditCard,
  FileCheck,
  HeartHandshake,
  Megaphone,
  PieChart,
  RefreshCw,
  Scale,
  ShieldAlert,
  Lock,
  CheckCircle2,
  ChevronRight,
  Download,
  Award,
  ClipboardList,
  Gavel,
  Heart,
  BarChart3,
  ExternalLink,
} from "lucide-react";

export default function AcademicRegulationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-watney-blue/20">
              <FileText className="w-10 h-10 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Academic{" "}
              <span className="text-watney-blue-primary">Regulations</span>
            </h1>
            <p className="text-lg text-gray-800 mx-auto leading-relaxed max-w-3xl">
              The binding academic framework of Watney College, governing
              standards, assessment, misconduct, appeals and governance.
              Approved by the Academic Board.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Status, governance and admissions */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className=" text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Status, governance and admissions
                  </h2>
                  <div className="space-y-4 text-gray-800 leading-relaxed">
                    <p>
                      These Academic Regulations constitute the binding academic
                      framework of Watney College. Authority for academic
                      standards is delegated by the Board of Directors to the
                      Academic Board under the College's Functional Structure.
                    </p>
                    <p>
                      No body other than the Academic Board may amend academic
                      standards. Where awarding organisation regulations
                      conflict with College regulations, the awarding
                      organisation's requirements shall prevail.
                    </p>
                    <div className="pt-2">
                      <div className="font-medium text-gray-800 mb-3">
                        Governance reporting line:
                      </div>
                      <ul className="space-y-2">
                        {[
                          "Programme Committee → Academic Board",
                          "Quality Assurance Committee → Academic Board",
                          "Assessment & Progression Board → Academic Board (delegated authority)",
                          "Academic Board → College Oversight Board → Board of Directors",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <ChevronRight className="w-4 h-4 text-watney-blue-primary flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Admissions governance
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Admissions criteria must align with awarding body
                      requirements, published entry standards, and the Equality
                      Act 2010. The College may withdraw an offer or terminate
                      registration where fraud, misrepresentation or omitted
                      material information is identified.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Credit and award framework
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      The College operates under awarding body specifications
                      and does not hold degree awarding powers. Where the
                      awarding body specifies Pass/Fail, no other classification
                      may be applied. The College shall not introduce any
                      independent classification framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Assessment and progression - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className=" text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Assessment and progression
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Assessment requirements
                      </h3>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        All assessments must align with learning outcomes, use
                        published criteria, undergo internal verification, and
                        be externally quality assured where required.
                        Reassessment is permitted only under awarding body
                        rules. Only the Assessment & Progression Board may
                        ratify awards.
                      </p>
                    </div>
                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                      <h3 className="font-semibold text-teal-800 mb-2">
                        Assessment & Progression Board quorum
                      </h3>
                      <p className="text-sm text-teal-700 leading-relaxed">
                        Chair or nominee · Minimum two academic members ·
                        Quality assurance representative.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="font-medium text-gray-800 mb-3">
                      A student shall progress where:
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Required credits have been achieved",
                        "No outstanding misconduct findings",
                        "Attendance requirements have been met",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 mb-3">
                      A student may be required to withdraw for:
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Academic failure beyond permitted reassessment",
                        "Serious academic misconduct",
                        "Fraud or misrepresentation",
                        "Failure to engage with studies",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Misconduct, fitness to study and appeals */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className=" text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Misconduct, fitness to study and appeals
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <h3 className="font-semibold text-amber-800 mb-2">
                        Academic misconduct includes
                      </h3>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Plagiarism · Contract cheating · Fabrication · Collusion
                        · Unauthorised AI misuse · Impersonation. Penalties are
                        proportionate and consistent. Severe cases may result in
                        termination of registration.
                      </p>
                    </div>
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Fitness to study
                      </h3>
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Proceedings may be initiated where a student's health
                        significantly impairs academic engagement, behaviour
                        poses risk to others, or support measures have been
                        exhausted. Outcomes: support plan, temporary suspension,
                        or withdrawal.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-800 mb-3">
                    Appeals may be submitted on grounds of:
                  </div>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Procedural irregularity",
                      "Bias",
                      "New material evidence not previously available",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-watney-blue-primary" />
                        <span className="text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-6">
                    <p className="text-gray-800 text-sm">
                      Appeals must be submitted within{" "}
                      <span className="font-semibold">10 working days</span> of
                      the decision. The Appeal Panel comprises an Independent
                      Chair, an academic member not previously involved, and a
                      quality assurance representative.{" "}
                      <span className="font-semibold">
                        {" "}
                        Academic judgment is not subject to appeal.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Escalation Table Section */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Academic Risk{" "}
                  <span className="text-watney-blue-primary">
                    Escalation Framework
                  </span>
                </h2>
              </div>

              {/* Modern Table Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-200">
                      <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                        Risk Level
                      </th>
                      <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                        Responsible Body
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Programme-level risk", "Quality Assurance Committee"],
                      ["Institutional academic risk", "Academic Board"],
                      ["Material regulatory risk", "College Oversight Board"],
                      [
                        "Financial / compliance risk",
                        "Audit, Remuneration & Risk Committee",
                      ],
                      ["Ultimate accountability", "Board of Directors"],
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="group hover:bg-blue-50/30 transition-colors duration-150"
                      >
                        <td className="py-5 px-8">
                          <span className="text-base font-semibold text-slate-800 group-hover:text-watney-blue-primary transition-colors">
                            {row[0]}
                          </span>
                        </td>
                        <td className="py-5 px-8">
                          <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-800 transition-all">
                            {row[1]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Footer / Download Section */}
          <div className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center">
              <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-watney-blue-primary" />
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Last reviewed:{" "}
                <span className="font-medium text-gray-700">November 2025</span>{" "}
                &nbsp;·&nbsp; Version:{" "}
                <span className="font-medium text-gray-700">1.2</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">November 2026</span>
              </p>
              <a
                download="Academic Regulations.pdf"
                href="/2.5.15. Academic Regulations.pdf"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Academic Regulations (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}