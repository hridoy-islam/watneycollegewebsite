"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Users,
  BookOpen,
  Clock,
  Target,
  Eye,
  Scale,
  AlertCircle,
  Layers,
  Send,
  PenTool,
  FileCheck,
  RefreshCw,
  MessageCircle,
} from "lucide-react";

export default function StudentAssessmentFeedbackPage() {
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
              Student Assessment{" "}
              <span className="text-watney-blue-primary">Feedback Process</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Establishing how Watney College provides timely, constructive and
              transparent feedback on student assessments to support learning,
              maintain academic standards and ensure fairness and consistency.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Principles of effective feedback */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Principles of effective feedback
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Feedback provided to students at Watney College must meet
                      five core principles that together ensure fair,
                      transparent and developmentally useful assessment
                      practice.
                    </p>
                    <ul className="space-y-4 mt-6">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Timely:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Written feedback normally within 10–15 working days
                            of submission, unless awarding body requirements
                            specify otherwise.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <Target className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Constructive:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Clearly identifies strengths, areas for improvement,
                            and recommendations for future work.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <BookOpen className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Linked to learning outcomes:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Feedback must reference relevant learning outcomes
                            and published assessment criteria.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <Eye className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Accessible and understandable:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Written clearly and delivered through appropriate
                            channels such as the VLE or assessment feedback
                            forms.
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <Scale className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Consistent and fair:
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            Assessment decisions are subject to internal
                            verification and moderation procedures.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Formative feedback
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Provided during the learning process to help students
                      improve their work prior to final assessment. Examples:
                      draft feedback, tutorial discussions, classroom review
                      sessions, progress tests or mock assessments. Does not
                      normally contribute directly to final grades.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Summative feedback
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Provided after the final assessment submission. Confirms
                      the assessment criteria achieved, explains the reasoning
                      behind the assessment decision, and provides guidance for
                      future improvement. Subject to internal verification and,
                      where required, external moderation by awarding bodies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Assessment feedback workflow - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Assessment feedback workflow
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-full bg-watney-blue-primary/10 flex items-center justify-center">
                          <span className="text-watney-blue-primary font-bold text-sm">
                            1
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900">
                          Assessment submission
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 pl-10">
                        Students submit assessments according to the programme
                        assessment schedule.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-full bg-watney-blue-primary/10 flex items-center justify-center">
                          <span className="text-watney-blue-primary font-bold text-sm">
                            2
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900">
                          Assessment marking
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 pl-10">
                        The assessor evaluates the work against the published
                        assessment criteria.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-full bg-watney-blue-primary/10 flex items-center justify-center">
                          <span className="text-watney-blue-primary font-bold text-sm">
                            3
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900">
                          Internal verification
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 pl-10">
                        Where applicable, a sample of assessed work is reviewed
                        by an Internal Verifier to ensure fairness and
                        consistency.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-full bg-watney-blue-primary/10 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">
                          4
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Feedback preparation
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 pl-10">
                      Assessors complete the official assessment feedback form
                      or digital equivalent.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-full bg-watney-blue-primary/10 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">
                          5
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Feedback release
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 pl-10">
                      Feedback is provided to students through the designated
                      learning platform or assessment documentation.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-full bg-watney-blue-primary/10 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">
                          6
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        Student review and reflection
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 pl-10">
                      Students review feedback and may discuss it with tutors
                      during tutorials or academic support sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Monitoring, quality assurance and appeals */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Monitoring, quality assurance and appeals
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      The quality and timeliness of assessment feedback are
                      monitored through the College's academic governance
                      structure.
                    </p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-watney-blue-primary flex-shrink-0" />
                        <span className="text-gray-700">
                          <span className="font-semibold">
                            Programme Committees
                          </span>{" "}
                          — monitoring assessment delivery and student outcomes
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-watney-blue-primary flex-shrink-0" />
                        <span className="text-gray-700">
                          <span className="font-semibold">
                            Quality Assurance Committee
                          </span>{" "}
                          — reviewing quality of assessment processes
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-watney-blue-primary flex-shrink-0" />
                        <span className="text-gray-700">
                          <span className="font-semibold">
                            Assessment & Progression Board
                          </span>{" "}
                          — confirming final academic decisions
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-watney-blue-primary flex-shrink-0" />
                        <span className="text-gray-700">
                          <span className="font-semibold">Academic Board</span>{" "}
                          — maintaining oversight of academic standards
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Student access to feedback
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Students receive feedback through the Virtual Learning
                      Environment (VLE), official assessment feedback forms, and
                      tutorial discussions where appropriate. Students are
                      encouraged to review feedback carefully and use it to
                      improve subsequent work.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Appeals and clarification
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Students who believe an assessment decision is incorrect
                      may request clarification or pursue a formal appeal in
                      accordance with the Academic Appeals Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Linked Documents Table Section - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Linked Documents And{" "}
                  <span className="text-watney-blue-primary">
                    Regulatory Framework
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
                          Relevance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Academic Regulations",
                          "Overarching academic framework",
                        ],
                        [
                          "Assessment Policy",
                          "Detailed assessment requirements",
                        ],
                        [
                          "Academic Appeals Policy",
                          "Formal challenge to assessment decisions",
                        ],
                        [
                          "Academic Integrity and Misconduct Policy",
                          "Misconduct in assessment contexts",
                        ],
                        [
                          "Equality, Diversity and Inclusion Policy",
                          "Consistency and fairness obligations",
                        ],
                        [
                          "Internal Verification and Moderation Policy",
                          "Quality assurance of assessment",
                        ],
                        [
                          "UK Quality Code for Higher Education",
                          "External regulatory alignment",
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
                <span className="font-medium text-gray-700">2.0</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">November 2027</span>
              </p>
              <a
                href="/2.5.12 Student Assessment Feedback Process.pdf"
                download="Student Assessment Feedback Process.pdf"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Student Assessment Feedback Process (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}