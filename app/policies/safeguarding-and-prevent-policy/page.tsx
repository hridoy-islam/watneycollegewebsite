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
  Heart,
  School,
  ShieldCheck,
  Globe,
  Phone,
  Mail,
} from "lucide-react";

export default function SafeguardingPreventPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Safeguarding and{" "}
              <span className="text-watney-blue-primary">Prevent Policy</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Watney College is fully committed to safeguarding and promoting
              the welfare of all learners, staff and visitors, and to fulfilling
              its statutory Prevent Duty under the Counter-Terrorism and
              Security Act 2015.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Commitment, scope and key principles */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
               
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Commitment, scope and key principles
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      The College recognises its responsibility to create and
                      maintain a safe, supportive and inclusive environment,
                      particularly for vulnerable adults and young learners.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      This policy applies to:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "All staff, visiting lecturers and volunteers",
                        "All enrolled students (UK and international)",
                        "Contractors, agency workers and external service providers",
                        "Learners on placement or work-based learning programmes",
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
                      Key principles
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Safeguarding is everyone's responsibility · The welfare of
                      the learner is paramount · All individuals have the right
                      to feel safe and be protected from abuse, neglect,
                      exploitation or harm · Concerns will be acted upon
                      promptly and effectively · All concerns will be handled in
                      line with GDPR and confidentiality guidelines.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Types of abuse
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Physical · Emotional or psychological · Sexual · Neglect
                      and acts of omission · Financial or material ·
                      Discriminatory · Radicalisation and extremism (Prevent
                      Duty)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Roles, safe recruitment and reporting concerns - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
               
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Roles, safe recruitment and reporting concerns
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Designated Safeguarding Lead (DSL)
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Email: info@watneycollege.co.uk · Phone: 02080046463
                        <br />
                        Responsible for leading safeguarding practice,
                        coordinating responses and reporting to external agencies
                        as needed. Deputy DSLs may be appointed for operational
                        coverage.
                      </p>
                    </div>
                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                      <h3 className="font-semibold text-teal-800 mb-2">
                        Safe recruitment
                      </h3>
                      <p className="text-sm text-teal-700 leading-relaxed">
                        Enhanced DBS checks for all staff in regulated activities
                        · Reference checks and ID verification · Safeguarding
                        training as part of staff induction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="font-semibold text-gray-800">
                    Reporting a safeguarding concern:
                  </div>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                      </div>
                      <span className="text-gray-700">
                        Immediate concerns should be reported to the DSL or
                        Deputy DSL in person or via the Safeguarding Report Form
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                      </div>
                      <span className="text-gray-700">
                        If a learner is at immediate risk, contact emergency
                        services (999) before informing the DSL
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                      </div>
                      <span className="text-gray-700">
                        All concerns will be documented, acted on confidentially,
                        and appropriate referrals may be made to local
                        safeguarding boards or social services
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <div className="font-semibold text-gray-800">
                      All staff and volunteers are expected to:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Complete safeguarding training",
                        "Report concerns immediately to the DSL",
                        "Treat all learners with respect and sensitivity",
                        "Promote safe, inclusive learning environments",
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
              </div>
            </div>
          </div>

          {/* Section 3: Prevent Duty, online safety and training */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
    
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Prevent Duty, online safety and training
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Prevent Duty
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Watney College complies with the Prevent Duty
                        (Counter-Terrorism and Security Act 2015). The College
                        promotes British values, identifies learners at risk of
                        radicalisation, and refers concerns to the Channel
                        programme where necessary.
                      </p>
                    </div>
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Online safety
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The College promotes safe and responsible use of
                        technology. Misuse of ICT systems, cyberbullying and
                        exposure to harmful content are addressed through
                        digital literacy sessions, acceptable use policies and IT
                        monitoring.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Student support
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Access to pastoral support through the Student Support Team
                      · Counselling referrals where needed · Safeguarding
                      signposting displayed across the campus and VLE (Klaspad).
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Training requirements
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      All staff undergo annual safeguarding refresher training,
                      Prevent training, and induction on safeguarding procedures.
                      Training records are maintained securely by HR.
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    This policy is reviewed annually or in response to legislative
                    changes. The DSL is responsible for initiating reviews and
                    ensuring compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Safeguarding Governance Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Safeguarding governance and{" "}
                  <span className="text-watney-blue-primary">contacts</span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Role
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Responsibility
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Designated Safeguarding Lead (DSL)",
                          "Lead safeguarding practice, coordinate responses, report to external agencies",
                        ],
                        [
                          "Deputy DSL(s)",
                          "Operational coverage where required",
                        ],
                        [
                          "All staff and volunteers",
                          "Report concerns immediately, complete annual training",
                        ],
                        [
                          "Board of Directors",
                          "Strategic oversight and ultimate accountability for safeguarding arrangements",
                        ],
                        [
                          "Local safeguarding boards / social services",
                          "External referral where appropriate",
                        ],
                        [
                          "Emergency services (999)",
                          "Immediate risk to life — contact before informing DSL",
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
                <span className="font-medium text-gray-700">November 2026</span>
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Safeguarding and Prevent Policy (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}