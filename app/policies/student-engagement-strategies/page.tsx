"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  Users,
  Target,
  Megaphone,
  BookOpen,
  HeartHandshake,
  BarChart3,
  Calendar,
  Shield,
  GraduationCap,
  Briefcase,
  Globe,
  Award,
} from "lucide-react";

export default function StudentEngagementStrategyPage() {
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
              Student Engagement{" "}
              <span className="text-watney-blue-primary">Strategy 2025–26</span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              A structured framework through which Watney College ensures that
              student voice informs academic development, quality assurance,
              programme delivery and the overall strategic direction of the
              College.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Strategic objectives */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                 
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Strategic objectives
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Watney College seeks to achieve the following strategic
                      objectives through this engagement strategy.
                    </p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <span className="text-gray-700">
                          Strengthen the role of student voice in shaping
                          programme delivery and academic development
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <span className="text-gray-700">
                          Establish effective and representative student
                          participation structures
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <span className="text-gray-700">
                          Promote partnership working between students and staff
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <span className="text-gray-700">
                          Ensure inclusive engagement for all student groups,
                          including mature and part-time learners
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                      </div>
                      <span className="text-gray-700">
                        Support student participation in quality assurance and
                        enhancement activities
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                      </div>
                      <span className="text-gray-700">
                        Improve communication of institutional responses to
                        student feedback
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                      </div>
                      <span className="text-gray-700">
                        Strengthen student engagement within work-based learning
                        environments
                      </span>
                    </li>
                  </ul>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Alignment
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This strategy aligns with the College's Business Plan
                      2026–2031, the UK Quality Code for Higher Education, and
                      the institutional governance framework. External reference:
                      UKSCQA / UKQC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Student representation and three strategic themes - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                 
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Student representation and the three strategic themes
                  </h2>
                  <div className="space-y-4">
                    <div className="font-semibold text-gray-800 mb-2">
                      Student representation structure
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Course representatives
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — elected within each programme cohort to represent
                            peer views
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Lead student representative
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — primary liaison between students and governance
                            structures
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Committee participation
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — Student Engagement & WBL Committee, Programme
                            Committees, Academic Board
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Theme 1 — Student voice and representation
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Maintain an effective student representative system ·
                      Provide structured training for representatives · Close the
                      feedback loop by communicating outcomes.
                    </p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Theme 2 — Staff participation
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Provide staff development sessions on student engagement ·
                      Encourage integration of student feedback in programme
                      development · Promote collaborative problem-solving.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Theme 3 — Work-based learning engagement
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Collect structured feedback from placement students ·
                      Integrate employer and student feedback into programme
                      review · Monitor placement experiences in healthcare
                      programmes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Governance, monitoring and inclusion */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                 
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Governance, monitoring and inclusion
                  </h2>
                  <div className="space-y-4">
                    <div className="font-semibold text-gray-800 mb-2">
                      Governance oversight structure:
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Student Engagement & WBL Committee
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — primary oversight of strategy implementation and
                            placement engagement
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Quality Assurance Committee
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — reviews student feedback in relation to programme
                            monitoring
                          </span>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-watney-blue-primary" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Academic Board
                          </span>
                          <span className="text-gray-600">
                            {" "}
                            — ensures engagement outcomes inform academic
                            strategy and quality standards
                          </span>
                        </div>
                      </li>
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
                            — receives institutional summaries on engagement
                            outcomes
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Monitoring and evaluation
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Implementation monitored through: internal student
                      experience surveys, programme evaluation feedback, student
                      representative reports, committee monitoring reports, and
                      annual quality review processes.
                    </p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Equality, diversity and inclusion
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Engagement activities ensure inclusion of mature learners,
                      part-time learners, students with disabilities, and
                      students from diverse backgrounds. Participation levels
                      are monitored to ensure activities remain accessible to
                      all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Performance Indicators Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Key Performance{" "}
                  <span className="text-watney-blue-primary">Indicators</span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Theme
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Key Performance Indicators
                        </th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Student voice and representation",
                          "Representative coverage across all cohorts · Participation in training · Student satisfaction indicators · Evidence of actions taken on feedback",
                        ],
                        [
                          "Staff participation",
                          "Staff training participation · Programme-level actions from student feedback · Student satisfaction with staff communication and support",
                        ],
                        [
                          "Work-based learning engagement",
                          "Student participation in placement feedback · Employer engagement in programme review · Programme adjustments based on placement feedback",
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
                <span className="font-medium text-gray-700">November 2026</span>
              </p>
              <a
                href="/2.5.11. Student Engagement Strategy 2026.pdf"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Student Engagement Strategy (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}