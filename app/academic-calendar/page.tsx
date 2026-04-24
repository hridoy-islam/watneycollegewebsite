"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function AcademicCalendarPage() {
  return (
    <div className="min-h-screen bg-white">
       <div className="relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute right-20 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
      <div className="absolute left-20 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

      {/* Hero Section */}
      <section className="relative bg-ocean-breeze py-16">
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="w-16 h-16 bg-watney-blue-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-watney-blue-primary" />
            </div>
            <h1 className="text-5xl lg:text-6xl text-black font-bold mb-4">
              Academic{" "}
              <span className="text-watney-blue-primary">Calendar</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-watney-blue-primary/10 border border-watney-blue-primary/20 rounded-full px-4 py-1.5 text-xs text-watney-blue-primary font-medium">
                Watney College
              </span>
              <span className="bg-watney-blue-primary/10 border border-watney-blue-primary/20 rounded-full px-4 py-1.5 text-xs text-watney-blue-primary font-medium">
                Three active cohorts
              </span>
              <span className="bg-watney-blue-primary/10 border border-watney-blue-primary/20 rounded-full px-4 py-1.5 text-xs text-watney-blue-primary font-medium">
                UKPRN: 10087811
              </span>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-end gap-4 mb-8">
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm bg-[#378ADD]"></div>
                <span className="text-xs text-gray-600">Teaching</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm bg-[#1D9E75]"></div>
                <span className="text-xs text-gray-600">Assessment & IV</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm bg-[#BA7517]"></div>
                <span className="text-xs text-gray-600">Resubmission</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-sm bg-[#B4B2A9]"></div>
                <span className="text-xs text-gray-600">Recess</span>
              </div>
            </div>
          </div>

          {/* Cohort 1: Level 4 Diploma */}
          <div className="mb-10">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 mb-4">
              <div className="w-1 h-11 rounded-sm bg-[#378ADD]"></div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Level 4 Diploma in Adult Care
                </div>
                <div className="text-xs text-gray-800mt-0.5">
                  September 2025 intake · Wed / Fri / Sun delivery · Work
                  placement integrated
                </div>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#E6F1FB] text-[#0C447C] whitespace-nowrap">
                  28 teaching weeks
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#E6F1FB] text-[#0C447C] whitespace-nowrap">
                  70 credits · 560 GLH
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              {/* Gantt Rows */}
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 1
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "54%", background: "#B5D4F4" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#042C53]">
                      03 Sep – 19 Oct 2025 · Wks 1–7
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "54%", width: "12%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#04342C]">
                      Assess
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "66%", width: "11%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Recess
                </span>
                <div className="flex-1 h-8 bg-transparent relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden rounded-md"
                    style={{ left: 0, width: "100%", background: "#D3D1C7" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#444441]">
                      20 Oct – 25 Nov 2025 · Christmas recess (5 weeks)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 2
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "62%", background: "#B5D4F4" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#042C53]">
                      26 Nov 2025 – 30 Jan 2026 · Wks 8–15
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "62%", width: "14%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#04342C]">
                      Assess
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "76%", width: "13%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 3
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "60%", background: "#B5D4F4" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#042C53]">
                      25 Feb – 03 Apr 2026 · Wks 16–21
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "60%", width: "13%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#04342C]">
                      Assess
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "73%", width: "12%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Recess
                </span>
                <div className="flex-1 h-8 bg-transparent relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden rounded-md"
                    style={{ left: 0, width: "100%", background: "#D3D1C7" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#444441]">
                      04 Apr – 28 Apr 2026 · Easter recess (4 weeks)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 4
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "55%", background: "#B5D4F4" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#042C53]">
                      29 Apr – 14 Jun 2026 · Wks 22–28
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "55%", width: "15%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#04342C]">
                      Assess
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "70%", width: "15%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub
                    </span>
                  </div>
                </div>
              </div>

              {/* Assessment Cards */}
              <div className="mt-4">
                <div className="text-[10px] font-medium uppercase tracking-wider text-gray-800mb-2">
                  Assessment & results — Level 4
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {[
                    {
                      term: "Term 1",
                      color: "#185FA5",
                      items: [
                        { label: "Submission", value: "06 Nov 2025" },
                        { label: "Results", value: "11 Dec 2025" },
                        { label: "Resub by", value: "21 Dec 2025" },
                        { label: "Resub result", value: "—" },
                      ],
                    },
                    {
                      term: "Term 2",
                      color: "#185FA5",
                      items: [
                        { label: "Submission", value: "10 Feb 2026" },
                        { label: "Results", value: "23 Feb 2026" },
                        { label: "Resub by", value: "28 Feb 2026" },
                        { label: "Resub result", value: "05 Mar 2026" },
                      ],
                    },
                    {
                      term: "Term 3",
                      color: "#185FA5",
                      items: [
                        { label: "Submission", value: "14 Apr 2026" },
                        { label: "Results", value: "27 Apr 2026" },
                        { label: "Resub by", value: "01 May 2026" },
                        { label: "Resub result", value: "08 May 2026" },
                      ],
                    },
                    {
                      term: "Term 4",
                      color: "#185FA5",
                      items: [
                        { label: "Submission", value: "26 Jun 2026" },
                        { label: "Results", value: "13 Jul 2026" },
                        { label: "Resub by", value: "19 Jul 2026" },
                        { label: "Resub result", value: "30 Jul 2026" },
                      ],
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-lg p-2.5"
                    >
                      <div
                        className="text-[10px] font-medium uppercase tracking-wide mb-1.5"
                        style={{ color: card.color }}
                      >
                        {card.term}
                      </div>
                      {card.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-0.5 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-xs text-gray-600">
                            {item.label}
                          </span>
                          <span className="text-xs font-medium text-gray-900">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="text-[10.5px] text-gray-800mt-2">
                  T1 formative submission 20–26 Oct · Formative feedback 27–31
                  Oct · IV precedes all results
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-8" />

          {/* Cohort 2: Level 2 November */}
          <div className="mb-10">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 mb-4">
              <div className="w-1 h-11 rounded-sm bg-[#1D9E75]"></div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  NQual Level 2 Adult Social Care Certificate
                </div>
                <div className="text-xs text-gray-800mt-0.5">
                  November 2025 intake · Batches A & B · Mon / Wed / Fri
                  delivery
                </div>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#E1F5EE] text-[#085041] whitespace-nowrap">
                  13 teaching weeks
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#E1F5EE] text-[#085041] whitespace-nowrap">
                  36 credits · 288 GLH
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 1
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "52%", background: "#9FE1CB" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#04342C]">
                      03 Nov – 19 Dec 2025 · Wks 1–7
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "52%", width: "18%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#E1F5EE]">
                      Assess/IV
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "70%", width: "20%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub → 23 Feb
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 2
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "58%", background: "#9FE1CB" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#04342C]">
                      19 Jan – 28 Feb 2026 · Wks 8–13
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "58%", width: "18%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#E1F5EE]">
                      Assess/IV
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "76%", width: "18%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub → 27 Apr
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-[10px] font-medium uppercase tracking-wider text-gray-800mb-2">
                  Assessment & results — Level 2 (Nov 2025)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    {
                      term: "Term 1",
                      color: "#0F6E56",
                      items: [
                        { label: "Submission", value: "05 Jan 2026" },
                        { label: "Results", value: "28 Jan 2026" },
                        { label: "Resub by", value: "05 Feb 2026" },
                        { label: "Resub result", value: "23 Feb 2026" },
                      ],
                    },
                    {
                      term: "Term 2",
                      color: "#0F6E56",
                      items: [
                        { label: "Submission", value: "07 Mar 2026" },
                        { label: "Results", value: "06 Apr 2026" },
                        { label: "Resub by", value: "10 Apr 2026" },
                        { label: "Resub result", value: "27 Apr 2026" },
                      ],
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-lg p-2.5"
                    >
                      <div
                        className="text-[10px] font-medium uppercase tracking-wide mb-1.5"
                        style={{ color: card.color }}
                      >
                        {card.term}
                      </div>
                      {card.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-0.5 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-xs text-gray-600">
                            {item.label}
                          </span>
                          <span className="text-xs font-medium text-gray-900">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="text-[10.5px] text-gray-800mt-2">
                  Batches A & B taught in separate slots · Shared Wednesday work
                  placement · Induction: 03 Nov 2025 · T1 results corrected from
                  erroneous 2023 typo
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-8" />

          {/* Cohort 3: Level 2 March/April */}
          <div className="mb-10">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 mb-4">
              <div className="w-1 h-11 rounded-sm bg-[#7F77DD]"></div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  NQual Level 2 Adult Social Care Certificate
                </div>
                <div className="text-xs text-gray-800mt-0.5">
                  March / April 2026 intake · Batches A & B · Mon / Wed / Thu
                  delivery
                </div>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#EEEDFE] text-[#3C3489] whitespace-nowrap">
                  13 teaching weeks
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#EEEDFE] text-[#3C3489] whitespace-nowrap">
                  36 credits · 288 GLH
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 1
                </span>
                <div className="flex-1 h-8 bg-transparent relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden rounded-md"
                    style={{ left: 0, width: "100%", background: "#CECBF6" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#26215C]">
                      01 Apr – 20 May 2026 · Wks 1–7 · Adjusted Week 1 (Easter)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  T1 assess
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "58%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#E1F5EE]">
                      31 May – 22 Jun 2026 · Submission → IV → Results
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "58%", width: "22%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub → 06 Jul
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  Term 2
                </span>
                <div className="flex-1 h-8 bg-transparent relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden rounded-md"
                    style={{ left: 0, width: "100%", background: "#CECBF6" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#26215C]">
                      15 Jun – 23 Jul 2026 · Wks 8–13
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs text-gray-800w-12 text-right shrink-0">
                  T2 assess
                </span>
                <div className="flex-1 h-8 rounded-md bg-white border border-gray-200 relative overflow-hidden">
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: 0, width: "58%", background: "#1D9E75" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#E1F5EE]">
                      24 Jul – 17 Aug 2026 · Submission → IV → Results
                    </span>
                  </div>
                  <div
                    className="absolute h-full flex items-center justify-center overflow-hidden"
                    style={{ left: "58%", width: "24%", background: "#EF9F27" }}
                  >
                    <span className="text-[10px] font-medium px-1.5 whitespace-nowrap overflow-hidden text-ellipsis text-[#412402]">
                      Resub → 31 Aug
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-[10px] font-medium uppercase tracking-wider text-gray-800mb-2">
                  Assessment & results — Level 2 (Mar 2026)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    {
                      term: "Term 1",
                      color: "#534AB7",
                      items: [
                        { label: "Submission", value: "31 May 2026" },
                        { label: "Results", value: "23 Jun 2026" },
                        { label: "Resub by", value: "28 Jun 2026" },
                        { label: "Resub result", value: "06 Jul 2026" },
                      ],
                    },
                    {
                      term: "Term 2",
                      color: "#534AB7",
                      items: [
                        { label: "Submission", value: "24 Jul 2026" },
                        { label: "Results", value: "17 Aug 2026" },
                        { label: "Resub by", value: "21 Aug 2026" },
                        { label: "Resub result", value: "31 Aug 2026" },
                      ],
                    },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-lg p-2.5"
                    >
                      <div
                        className="text-[10px] font-medium uppercase tracking-wide mb-1.5"
                        style={{ color: card.color }}
                      >
                        {card.term}
                      </div>
                      {card.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center py-0.5 border-b border-gray-100 last:border-0"
                        >
                          <span className="text-xs text-gray-600">
                            {item.label}
                          </span>
                          <span className="text-xs font-medium text-gray-900">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="text-[10.5px] text-gray-800mt-2">
                  Induction: 01 Apr 2026 (joint) · T2 submission corrected to 24
                  Jul (post teaching end 23 Jul) · Easter Week 1 is adjusted
                  short week
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-8" />

          {/* Key Dates Section */}
          <div className="bg-gray-50 rounded-xl p-4 z-20 relative"  >
            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-800mb-2.5 z-20">
              Key institutional dates — all cohorts
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 z-20">
              {[
                {
                  color: "#378ADD",
                  date: "03 Sep 2025",
                  label: "L4 induction (Wednesday)",
                },
                {
                  color: "#1D9E75",
                  date: "03 Nov 2025",
                  label: "L2 Nov induction (Tuesday)",
                },
                {
                  color: "#B4B2A9",
                  date: "20 Oct – 25 Nov 2025",
                  label: "L4 Christmas recess (5 wks)",
                },
                {
                  color: "#7F77DD",
                  date: "01 Apr 2026",
                  label: "L2 Mar/Apr induction (Wednesday)",
                },
                {
                  color: "#B4B2A9",
                  date: "04 Apr – 28 Apr 2026",
                  label: "L4 Easter recess (4 wks)",
                },
                {
                  color: "#1D9E75",
                  date: "27 Apr 2026",
                  label: "L2 Nov cohort closes",
                },
                {
                  color: "#378ADD",
                  date: "30 Jul 2026",
                  label: "L4 programme closes",
                },
                {
                  color: "#7F77DD",
                  date: "31 Aug 2026",
                  label: "L2 Mar cohort closes",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1"
                    style={{ background: item.color }}
                  ></div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    <strong className="text-gray-900 font-medium block">
                      {item.date}
                    </strong>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-[10.5px] text-gray-800mt-4 pt-3 border-t border-gray-200 leading-relaxed z-20">
              Bank holidays within recess / non-teaching periods: Good Friday 03
              Apr · Easter Monday 06 Apr · Early May BH 04 May · Spring BH 25
              May 2026. All dates sourced from 8 uploaded curriculum plans.
              Three corrections applied: (1) L2 Mar T2 submission → 24 Jul; (2)
              L2 Nov T1 results → 28 Jan 2026; (3) Easter Week 1 note added. IV
              = Internal Verification.
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
