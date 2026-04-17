"use client";

import {
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  Scale,
  Users,
  FileCheck,
  CreditCard,
  Clock,
  Globe,
  DollarSign,
  Receipt,
  Briefcase,
  AlertTriangle,
} from "lucide-react";

export default function TuitionFeeRefundCompensationPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute right-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[280px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto relative text-center">
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Receipt className="w-20 h-20 text-watney-blue-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Tuition Fee Refund &amp;{" "}
              <span className="text-watney-blue-primary">
                Compensation Policy
              </span>
            </h1>
            <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-3xl">
              Watney College is committed to transparency in all financial
              matters. This policy sets out tuition fee obligations, refund
              entitlements and the compensation framework, in alignment with CMA
              guidance and OfS regulatory requirements.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-20">
          {/* Section 1: Scope, fees and payment options */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Scope, fees and payment options
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      This policy applies to all students, including self-funded
                      individuals and those sponsored by employers or recognised
                      organisations. Tuition fees are specified for each programme
                      and mode of study and are subject to change in line with OfS
                      regulatory guidelines. Any fee adjustments will be
                      communicated promptly.
                    </p>
                    <p className="font-semibold text-gray-800">
                      Tuition fees must be paid in British pounds (GBP). Students
                      are responsible for the full fee payment upon registration
                      unless they have secured funding through the Student Loans
                      Company (SLC) or an authorised sponsor.
                    </p>
                    <ul className="space-y-2 mt-4">
                      {[
                        "Students may pay in full or through an agreed instalment plan with an initial deposit",
                        "Sponsored students must provide written confirmation of sponsor liability for the full fee",
                        "Enrolment is confirmed only after payment or sponsor authorisation is received",
                        "International students must pay full fees upon issuance of the CAS",
                        "Late payment may result in restricted access to College facilities and referral to a credit collection agency",
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
                      Competition and Markets Authority (CMA) guidance · Office
                      for Students (OfS) requirements. This policy reflects best
                      practice in higher education financial management and
                      consumer protection obligations.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Bursaries
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Watney College does not currently provide bursaries or
                      financial aid packages. The College continuously evaluates
                      its financial support options and may introduce bursary
                      schemes in future as part of its commitment to enhancing
                      student access and affordability.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Currency and payment
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      All tuition fees must be paid in GBP. Refunds will be issued
                      using the original payment method in compliance with
                      anti-money laundering regulations. Requests for refunds to
                      third-party accounts will not be accepted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Refund schedule - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Refund schedule
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Self-funded students are entitled to refunds in cases of
                      overpayment, withdrawal, visa refusal or changes in mode of
                      study, provided they comply with the statutory 14-day right
                      to cancel from the date of registration.
                    </p>
                    {/* Custom Refund Table */}
                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-watney-blue-light/50 border-b-2 border-watney-blue/30">
                            <th className="text-left py-3 px-3 text-watney-blue-primary font-semibold text-xs uppercase tracking-wider">
                              Student category
                            </th>
                            <th className="text-left py-3 px-3 text-watney-blue-primary font-semibold text-xs uppercase tracking-wider">
                              Withdrawal timing
                            </th>
                            <th className="text-left py-3 px-3 text-watney-blue-primary font-semibold text-xs uppercase tracking-wider">
                              Fee liability
                            </th>
                            <th className="text-left py-3 px-3 text-watney-blue-primary font-semibold text-xs uppercase tracking-wider">
                              Refund
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {/* Self-funded rows */}
                          <tr className="bg-white">
                            <td
                              rowSpan={4}
                              className="py-3 px-3 font-semibold text-gray-800 align-top"
                            >
                              Self-funded (Home / EU UG — full &amp; part-time)
                            </td>
                            <td className="py-3 px-3 text-gray-600">
                              Within 14 days of start
                            </td>
                            <td className="py-3 px-3 text-gray-600">0%</td>
                            <td className="py-3 px-3 text-teal-700 font-medium">
                              Full refund
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-3 px-3 text-gray-600">Week 3</td>
                            <td className="py-3 px-3 text-gray-600">25%</td>
                            <td className="py-3 px-3 text-amber-700 font-medium">
                              75% refund
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-3 px-3 text-gray-600">
                              Weeks 4–6
                            </td>
                            <td className="py-3 px-3 text-gray-600">50%</td>
                            <td className="py-3 px-3 text-amber-700 font-medium">
                              50% refund
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-3 px-3 text-gray-600">
                              Week 7 onwards
                            </td>
                            <td className="py-3 px-3 text-gray-600">100%</td>
                            <td className="py-3 px-3 text-red-600 font-medium">
                              No refund
                            </td>
                          </tr>
                          {/* International rows */}
                          <tr className="bg-white">
                            <td className="py-3 px-3 font-semibold text-gray-800">
                              International UG
                            </td>
                            <td className="py-3 px-3 text-gray-600">
                              Before enrolment
                            </td>
                            <td className="py-3 px-3 text-gray-600">10%</td>
                            <td className="py-3 px-3 text-amber-700 font-medium">
                              90% refund
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="py-3 px-3 font-semibold text-gray-800">
                              International UG
                            </td>
                            <td className="py-3 px-3 text-gray-600">
                              After enrolment
                            </td>
                            <td className="py-3 px-3 text-gray-600">100%</td>
                            <td className="py-3 px-3 text-red-600 font-medium">
                              No refund
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Visa refusal
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      International students refused a visa may apply for a refund,
                      minus any non-refundable administrative fees. Supporting
                      documentation (visa refusal letter) is required.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Withdrawal conditions
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Students withdrawing from a programme must formally notify
                      the College in writing. Refunds are calculated from the date
                      formal notification is received. Any outstanding tuition fee
                      debts will be deducted from the refund amount before
                      processing.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">
                      Dispute resolution
                    </h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      Students who disagree with a refund decision may submit a
                      complaint through the College's Complaints Policy. The
                      process is designed to provide an equitable resolution
                      within a 2–4 week timeframe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Compensation policy and decision-making framework - reverse layout */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="md:order-2">
                
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    Compensation policy and decision-making framework
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Where students' continuation of study is disrupted by
                      circumstances attributable to the College, compensation for
                      additional costs incurred may be considered. The College
                      will always seek to mitigate disruption through alternative
                      arrangements before compensation is assessed.
                    </p>
                    <div className="font-semibold text-gray-800 mt-4">
                      Circumstances in which compensation may be considered:
                    </div>
                    <ul className="space-y-2 mt-2">
                      {[
                        "Closure or suspension of a programme of study",
                        "Relocation of teaching facilities",
                        "Significant interruption to teaching delivery",
                        "Institutional closure or provider market exit",
                        "Loss of awarding body arrangements affecting programme delivery",
                        "Requirement to transfer to another provider to complete the programme",
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
                <div className="space-y-6 md:order-1">
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Eligible costs
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Additional travel costs from relocation · Additional
                      accommodation costs where relocation is required ·
                      Administrative costs associated with transfer to another
                      institution · Reasonable relocation costs · Tuition fee
                      differences arising from continuation arrangements.
                    </p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-red-800 mb-2">
                      Costs not eligible for compensation
                    </h3>
                    <p className="text-sm text-red-700 leading-relaxed">
                      Inconvenience or personal distress · Loss of earnings or
                      employment opportunities · Speculative financial losses ·
                      Costs not directly linked to the disruption experienced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: How to apply for a refund or compensation - with alt background */}
          <div className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>

                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    How to apply for a refund or compensation
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Complete the Refund Compensation Request Form
                        </div>
                        <p className="text-sm text-gray-600">
                          Submit to the Finance Department by email. Include
                          student details, reason for request, payment details and
                          bank information for refund processing.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Acknowledgement
                        </div>
                        <p className="text-sm text-gray-600">
                          The College will acknowledge receipt of the application
                          within <strong className="font-semibold">5 working days</strong>.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Decision
                        </div>
                        <p className="text-sm text-gray-600">
                          A decision will be provided within{" "}
                          <strong className="font-semibold">15 working days</strong>.
                          Students receive written notification including the
                          decision, amount approved (if applicable) and reasons.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-watney-blue-light/50 border border-watney-blue/30 flex items-center justify-center">
                        <span className="text-watney-blue-primary font-bold text-sm">4</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Review right
                        </div>
                        <p className="text-sm text-gray-600">
                          Students dissatisfied with the compensation outcome may
                          request a review through the College Complaints Policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Evidence requirements
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Claims must be supported by objective evidence, which may
                      include: receipts or invoices · travel documentation ·
                      accommodation agreements · payment confirmations or bank
                      statements · documentation relating to programme transfer.
                      Claims submitted without sufficient supporting evidence may
                      not be considered.
                    </p>
                  </div>
                  <div className="bg-watney-blue-light/30 border border-watney-blue/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Assessment criteria
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The College will consider: whether disruption was caused by
                      circumstances within its control · whether additional
                      financial costs were directly incurred · whether reasonable
                      mitigation was offered · whether costs claimed are reasonable
                      and proportionate · whether the student took reasonable steps
                      to minimise impact.
                    </p>
                  </div>
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                    <h3 className="font-semibold text-teal-800 mb-2">
                      Decision authority
                    </h3>
                    <p className="text-sm text-teal-700 leading-relaxed">
                      Compensation claims are assessed by the Finance Department
                      in consultation with Academic Administration. Final approval
                      rests with the Director of Studies. Claims indicating wider
                      institutional risk may be reported to the Academic Board.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund and Compensation Summary Table - Modern slate style */}
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Refund and compensation{" "}
                  <span className="text-watney-blue-primary">at a glance</span>
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-200">
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Situation
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Entitlement
                        </th>
                        <th className="py-5 px-8 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-800">
                          Timeframe
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        [
                          "Withdrawal within 14 days (self-funded)",
                          "Full refund",
                          "Immediate on request",
                        ],
                        ["Withdrawal at week 3", "75% refund", "From formal notification date"],
                        ["Withdrawal weeks 4–6", "50% refund", "From formal notification date"],
                        ["Withdrawal week 7 onwards", "No refund", "N/A"],
                        [
                          "International student — before enrolment",
                          "90% refund",
                          "From formal notification date",
                        ],
                        [
                          "Visa refusal (international)",
                          "Refund minus admin fees",
                          "On submission of visa refusal letter",
                        ],
                        [
                          "Programme disruption / closure",
                          "Compensation considered (evidenced costs)",
                          "Decision within 15 working days",
                        ],
                        [
                          "Transfer to another provider",
                          "Compensation for fees paid for disrupted period",
                          "Subject to evidence and Director of Studies approval",
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
                          <td className="py-5 px-8">
                            <span className="text-sm font-medium text-slate-600">
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
                <span className="font-medium text-gray-700">
                  20 November 2025
                </span>{" "}
                &nbsp;·&nbsp; Version:{" "}
                <span className="font-medium text-gray-700">1.2</span>{" "}
                &nbsp;·&nbsp; Next review:{" "}
                <span className="font-medium text-gray-700">November 2026</span>{" "}
                &nbsp;·&nbsp; Approved by:{" "}
                <span className="font-medium text-gray-700">Academic Board</span>
              </p>
              <a
                href="/3.3 Tuition Refund & Compensation Policy.pdf"
                className="inline-flex items-center gap-2 bg-watney-blue-primary hover:bg-watney-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download the full Tuition Fee Refund &amp; Compensation Policy
                (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}