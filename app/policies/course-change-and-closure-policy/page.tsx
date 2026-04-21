"use client";

import {
  FileText,
  Download,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Clock,
  Shield,
  Building2,
  Users,
  GraduationCap,
  BookOpen,
  AlertTriangle,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";

export default function CourseChangeClosurePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20   flex items-center justify-center mx-auto mb-6 ">
              <Clock className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Course Change And{" "}
              <span className="text-watney-blue-primary">Closure Policy</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              The formal framework through which Watney College manages
              significant course changes and course closures, safeguarding
              students' academic interests and ensuring compliance with OfS
              requirements.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Categories of course change */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className=" text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Categories of course change
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Course changes are classified as either minor or major,
                      with different governance requirements applying to each.
                    </p>
                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mt-4">
                      <h3 className="font-semibold text-teal-800 mb-2">
                        Minor changes
                      </h3>
                      <p className="text-sm text-teal-700 leading-relaxed">
                        Changes that do not materially affect learning outcomes,
                        mode of delivery, award, or overall student experience —
                        such as updates to reading materials, minor assessment
                        refinements, or timetable adjustments. Approved through
                        normal academic governance.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Major changes
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Changes that may materially affect students, including:
                      significant amendments to learning outcomes, changes to
                      assessment strategy, change of awarding or validating
                      body, substantial changes to mode of delivery, relocation
                      of delivery site, or structural curriculum redesign.
                    </p>
                    <p className="text-sm text-amber-700 leading-relaxed mt-3">
                      Major changes require formal approval by the Academic
                      Board and must be reported to the Board of Governors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Course closure - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className=" text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Course closure
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Grounds for closure may include
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Low recruitment · Financial sustainability concerns ·
                        Termination or non-renewal of validation arrangements ·
                        Regulatory intervention · Quality concerns · Strategic
                        realignment.
                      </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <h3 className="font-semibold text-amber-800 mb-2">
                        Formal impact assessment required
                      </h3>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Prior to any closure decision, an impact assessment must
                        consider academic standards, financial sustainability,
                        student numbers, equality implications, reputational
                        risk and regulatory compliance. Closure of a course with
                        enrolled students requires approval by the Board of
                        Governors.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <p className="text-gray-600 leading-relaxed">
                      The College is committed to avoiding closure of a course
                      with enrolled students wherever reasonably practicable,
                      and will always act in a transparent, proportionate and
                      timely manner. Academic interests and welfare of enrolled
                      students take precedence over strategic or commercial
                      considerations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Student protection measures */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className=" text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Student protection measures
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Where a major course change or closure is approved, the
                      College will implement appropriate student protection
                      measures.
                    </p>
                    <ul className="space-y-4 mt-6">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Teach-out:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            A structured arrangement enabling enrolled students
                            to complete their programme within the originally
                            agreed timeframe, with continued access to teaching,
                            supervision, assessment and learning resources.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Transfer:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            If teach-out is not feasible, students will be
                            offered transfer to a suitable alternative programme
                            within the College, or facilitated transfer to a
                            comparable programme at another provider.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Academic guidance:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Individual academic guidance to support informed
                            decision-making; academic records and transcripts
                            issued promptly.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Fee protection:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Students will not be required to incur additional
                            tuition fee costs as a direct consequence of
                            institutional closure or change decisions.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Student communication
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Written notification will explain the nature of the change
                      or closure, the reasons for the decision, available
                      options, timelines, and support mechanisms. Students will
                      be given the opportunity to raise concerns before final
                      arrangements are implemented.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Validation changes
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      In the event of termination or non-renewal of a validation
                      agreement, the College will seek alternative validation
                      arrangements. If this cannot be secured within a
                      reasonable timeframe, teach-out or transfer arrangements
                      will apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Governance and{" "}
                  <span className="text-watney-blue-primary">Oversight</span>
                </h2>
              </div>

              {/* Modern Table Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Decision Type
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Approving Body
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Oversight Body
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Minor course change",
                          "Academic governance process",
                          "Academic Board",
                        ],
                        [
                          "Major course change",
                          "Academic Board",
                          "Board of Governors",
                        ],
                        [
                          "Course closure",
                          "Board of Governors",
                          "Board of Governors",
                        ],
                        [
                          "Teach-out monitoring",
                          "Academic Board",
                          "Academic Board",
                        ],
                        [
                          "Student transfer arrangements",
                          "Academic Board",
                          "Board of Governors",
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
                            <span className="text-sm font-medium text-slate-600 italic">
                              {row[1]}
                            </span>
                          </td>
                          <td className="py-5 px-8">
                            <span className="inline-flex items-center text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-200 group-hover:bg-white group-hover:border-blue-200 transition-all">
                              {row[2]}
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
                <span className="font-medium text-gray-700">1.2</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">November 2026</span>
              </p>
              <a
                download="Course Changes and Closures Policy.pdf"
                href="/3.8 Course Changes and Closures Policy.pdf"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Course Change and Closure Policy (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
