// app/components/NQualLevel3DiplomaAdultCareTabs.tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";

const TermTable = ({
  termTitle,
  termSubtitle,
  rows,
  totalCredits,
  totalGLH,
}: {
  termTitle: string;
  termSubtitle: string;
  rows: { week: string; unit: string; code: string; credits: number; glh: number }[];
  totalCredits: number;
  totalGLH: number;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-3">{termTitle}</h4>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-left font-semibold">Week</th>
              <th className="border p-2 text-left font-semibold">Unit</th>
              <th className="border p-2 text-left font-semibold">Code</th>
              <th className="border p-2 text-center font-semibold">Credits</th>
              <th className="border p-2 text-center font-semibold">GLH</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border p-2 font-semibold">{row.week}</td>
                <td className="border p-2">{row.unit}</td>
                <td className="border p-2 font-mono text-xs">{row.code}</td>
                <td className="border p-2 text-center">{row.credits}</td>
                <td className="border p-2 text-center">{row.glh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 p-3 bg-blue-50 rounded-md text-sm font-medium">
        <strong>Term Total:</strong> {totalCredits} credits, {totalGLH} GLH
      </div>
    </div>
  );
};

export default function NQualLevel3DiplomaAdultCareTabs() {
   const unitsOverview = [
    { ref: "D/651/9601", title: "Ways of Working", level: 3, glh: 16, credits: 2 },
    { ref: "F/651/9602", title: "Safeguarding", level: 3, glh: 32, credits: 4 },
    { ref: "H/651/9603", title: "Mental Capacity and Restrictive Practice", level: 3, glh: 32, credits: 4 },
    { ref: "J/651/9604", title: "Duty of Care", level: 3, glh: 24, credits: 3 },
    { ref: "K/651/9605", title: "Effective Communication", level: 3, glh: 16, credits: 2 },
    { ref: "L/651/9606", title: "Handling Information", level: 3, glh: 16, credits: 2 },
    { ref: "M/651/9607", title: "Person-Centred Practice", level: 3, glh: 16, credits: 2 },
    { ref: "R/651/9608", title: "Choice and Independence", level: 3, glh: 16, credits: 2 },
    { ref: "T/651/9609", title: "Health and Well-Being", level: 3, glh: 24, credits: 3 },
    { ref: "D/651/9610", title: "Equality, Diversity, Inclusion and Human Rights", level: 3, glh: 32, credits: 4 },
    { ref: "F/651/9611", title: "Health and Safety (General)", level: 3, glh: 16, credits: 2 },
    { ref: "H/651/9612", title: "Infection Prevention and Control", level: 3, glh: 24, credits: 3 },
    { ref: "J/651/9613", title: "Health and Safety (Topics)", level: 3, glh: 16, credits: 2 },
    { ref: "K/651/9614", title: "Continuous Development", level: 3, glh: 16, credits: 2 },
    { ref: "L/651/9615", title: "Personal Well-Being", level: 3, glh: 16, credits: 2 },
  ];
 
  // ===== Term 1 =====
  const term1Mandatory = [
    { unit: "Ways of Working", code: "D/651/9601", credits: 2, glh: 16 },
    { unit: "Safeguarding", code: "F/651/9602", credits: 4, glh: 32 },
    { unit: "Mental Capacity and Restrictive Practice", code: "H/651/9603", credits: 4, glh: 32 },
    { unit: "Duty of Care", code: "J/651/9604", credits: 3, glh: 24 },
    { unit: "Effective Communication", code: "K/651/9605", credits: 2, glh: 16 },
    { unit: "Handling Information", code: "L/651/9606", credits: 2, glh: 16 },
    { unit: "Person-Centred Practice", code: "M/651/9607", credits: 2, glh: 16 },
  ];
  const term1Optional = [
    { unit: "Mental Health Awareness", code: "M/651/9616", credits: 4, glh: 32 },
    { unit: "Promoting Choice and Control Through Positive Risk-Taking", code: "K/651/9623", credits: 3, glh: 24 },
  ];
  const term1MandatoryGLH = term1Mandatory.reduce((s, r) => s + r.glh, 0); // 152
  const term1MandatoryCredits = term1Mandatory.reduce((s, r) => s + r.credits, 0); // 19
  const term1OptionalGLH = term1Optional.reduce((s, r) => s + r.glh, 0); // 56
  const term1OptionalCredits = term1Optional.reduce((s, r) => s + r.credits, 0); // 7
  const term1TotalGLH = term1MandatoryGLH + term1OptionalGLH; // 208
  const term1TotalCredits = term1MandatoryCredits + term1OptionalCredits; // 26
  const term1SixtyPercent = 125;
  const term1CP = 131;
 
  // ===== Term 2 =====
  const term2Mandatory = [
    { unit: "Choice and Independence", code: "R/651/9608", credits: 2, glh: 16 },
    { unit: "Health and Wellbeing", code: "T/651/9609", credits: 3, glh: 24 },
    { unit: "Equality, Diversity, Inclusion and Human Rights", code: "D/651/9610", credits: 4, glh: 32 },
    { unit: "Health and Safety (General)", code: "F/651/9611", credits: 2, glh: 16 },
    { unit: "Infection Prevention and Control", code: "H/651/9612", credits: 3, glh: 24 },
    { unit: "Health and Safety (Topics)", code: "J/651/9613", credits: 2, glh: 16 },
    { unit: "Continuous Development", code: "K/651/9614", credits: 2, glh: 16 },
    { unit: "Personal Wellbeing", code: "L/651/9615", credits: 2, glh: 16 },
  ];
  const term2Optional = [
    { unit: "Supporting Individuals with Nutrition and Hydration Needs", code: "D/651/9648", credits: 4, glh: 32 },
    { unit: "Understanding and Responding to Pain in Adult Care", code: "A/651/9629", credits: 4, glh: 32 },
    { unit: "Principles of Medication Administration", code: "K/651/9632", credits: 4, glh: 32 },
  ];
  const term2MandatoryGLH = term2Mandatory.reduce((s, r) => s + r.glh, 0); // 160
  const term2MandatoryCredits = term2Mandatory.reduce((s, r) => s + r.credits, 0); // 20
  const term2OptionalGLH = term2Optional.reduce((s, r) => s + r.glh, 0); // 96
  const term2OptionalCredits = term2Optional.reduce((s, r) => s + r.credits, 0); // 12
  const term2TotalGLH = term2MandatoryGLH + term2OptionalGLH; // 256
  const term2TotalCredits = term2MandatoryCredits + term2OptionalCredits; // 32
  const term2SixtyPercent = 153;
  const term2CP = 161;
  
  return (
    <>
      {/* === Overview Tab === */}
      <TabsContent value="overview" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Programme Overview
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Level 3 Adult Care Qualification is designed to develop the
            knowledge, skills, and behaviours required for competent practice in
            adult social care. It builds on existing care knowledge and prepares
            learners to take greater responsibility in delivering high-quality,
            person-centred care, supporting individuals with complex needs, and
            promoting independence and wellbeing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The qualification is suitable for experienced care workers, senior
            care workers, and those progressing into supervisory roles within
            adult social care settings. Learners develop competence in
            leadership, safeguarding, communication, health and safety, equality
            and diversity, person-centred practice, professional development,
            and supporting positive outcomes for individuals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Assessment:</span> Portfolio of
            evidence, workplace observations, professional discussions, witness
            testimonies, and knowledge evidence. Internally assessed and quality
            assured in accordance with the awarding organisation&apos;s
            requirements. No written examinations.
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Portfolio-Based Assessment",
                "Workplace Competence",
                "Person-Centred Practice",
                "Leadership & Professional Development",
                "Safeguarding Adults",
                "Health & Safety",
                "Equality, Diversity & Inclusion",
                "Communication & Partnership Working",
                "Promotes Independence & Wellbeing",
              ].map((tag, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TabsContent>

      {/* === Curriculum Tab (Programme Information) === */}
      <TabsContent value="curriculum" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Programme Information
          </h3>
          <p className="text-gray-700 mb-4">
            This course includes the following units and assessments:
          </p>

          <ul className="space-y-3">
            {[
              "Ways of Working",
              "Safeguarding",
              "Mental Capacity and Restrictive Practices",
              "Duty of Care",
              "Effective Communication",
              "Handling Information",
              "Person-Centred Practice",
              "Choice and Independence",
              "Health and Well-Being",
              "Equality, Diversity, Inclusion and Human Rights",
              "Health and Safety (General)",
              "Infection Prevention and Control",
              "Health and Safety (Topics)",
              "Continuous Development",
              "Personal Well-Being",
            ].map((item, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-800">{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      {/* === Requirements Tab === */}
      <TabsContent value="requirements" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Entry Requirements
          </h3>
          <ul className="space-y-2 text-gray-700">
            {[
              "No formal entry requirements.",
              "Applicants must be 16 or over and working in or seeking employment in adult social care.",
            ].map((req, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>

      <TabsContent value="career" className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Programme Structure
        </h3>
 
        {/* Units Overview */}
        {/* <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-3">Units Overview</h4>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-2 text-left font-semibold">Unit Reference</th>
                  <th className="border p-2 text-left font-semibold">Title</th>
                  <th className="border p-2 text-center font-semibold">Level</th>
                  <th className="border p-2 text-center font-semibold">GLH</th>
                  <th className="border p-2 text-center font-semibold">Credit Value</th>
                </tr>
              </thead>
              <tbody>
                {unitsOverview.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border p-2 font-mono text-xs">{row.ref}</td>
                    <td className="border p-2">{row.title}</td>
                    <td className="border p-2 text-center">{row.level}</td>
                    <td className="border p-2 text-center">{row.glh}</td>
                    <td className="border p-2 text-center">{row.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
 
        {/* Term 1 / Term 2 - Exact Spreadsheet Layout */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* ===== TERM 1 ===== */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Term 1</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2 text-left font-semibold">Mandatory Units</th>
                    <th className="border p-2 text-left font-semibold">Unit Reference</th>
                    <th className="border p-2 text-center font-semibold">GLH</th>
                    <th className="border p-2 text-center font-semibold">Credit Value</th>
                  </tr>
                </thead>
                <tbody>
                  {term1Mandatory.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border p-2">{row.unit}</td>
                      <td className="border p-2 font-mono text-xs">{row.code}</td>
                      <td className="border p-2 text-center">{row.glh}</td>
                      <td className="border p-2 text-center">{row.credits}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 font-semibold">
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center">{term1MandatoryGLH}</td>
                    <td className="border p-2 text-center">{term1MandatoryCredits}</td>
                  </tr>
 
                  <tr>
                    <td className="border-0 p-1" colSpan={4}></td>
                  </tr>
 
                  <tr className="bg-gray-50">
                    <td className="border p-2 font-semibold" colSpan={4}>Optional Units</td>
                  </tr>
                  {term1Optional.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border p-2">{row.unit}</td>
                      <td className="border p-2 font-mono text-xs">{row.code}</td>
                      <td className="border p-2 text-center">{row.glh}</td>
                      <td className="border p-2 text-center">{row.credits}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 font-semibold">
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center">{term1OptionalGLH}</td>
                    <td className="border p-2 text-center">{term1OptionalCredits}</td>
                  </tr>
 
                  <tr>
                    <td className="border-0 p-1" colSpan={4}></td>
                  </tr>
 
                  <tr className="font-bold">
                    <td className="border p-2"></td>
                    <td className="border p-2">Total:</td>
                    <td className="border p-2 text-center">{term1TotalGLH}</td>
                    <td className="border p-2 text-center">{term1TotalCredits}</td>
                  </tr>
                  <tr>
                    <td className="border p-2"></td>
                    <td className="border p-2">60%</td>
                    <td className="border p-2 text-center">{term1SixtyPercent}</td>
                    <td className="border p-2"></td>
                  </tr>
                  <tr>
                    <td className="border p-2"></td>
                    <td className="border p-2">CP 1</td>
                    <td className="border p-2 text-center">{term1CP}</td>
                    <td className="border p-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-sm font-bold text-gray-800">8 weeks</div>
          </div>
 
          {/* ===== TERM 2 ===== */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Term 2</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2 text-left font-semibold">Mandatory Units</th>
                    <th className="border p-2 text-left font-semibold">Unit Reference</th>
                    <th className="border p-2 text-center font-semibold">GLH</th>
                    <th className="border p-2 text-center font-semibold">Credit Value</th>
                  </tr>
                </thead>
                <tbody>
                  {term2Mandatory.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border p-2">{row.unit}</td>
                      <td className="border p-2 font-mono text-xs">{row.code}</td>
                      <td className="border p-2 text-center">{row.glh}</td>
                      <td className="border p-2 text-center">{row.credits}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 font-semibold">
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center">{term2MandatoryGLH}</td>
                    <td className="border p-2 text-center">{term2MandatoryCredits}</td>
                  </tr>
 
                  <tr>
                    <td className="border-0 p-1" colSpan={4}></td>
                  </tr>
 
                  <tr className="bg-gray-50">
                    <td className="border p-2 font-semibold" colSpan={4}>Optional Units</td>
                  </tr>
                  {term2Optional.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border p-2">{row.unit}</td>
                      <td className="border p-2 font-mono text-xs">{row.code}</td>
                      <td className="border p-2 text-center">{row.glh}</td>
                      <td className="border p-2 text-center">{row.credits}</td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50 font-semibold">
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center">{term2OptionalGLH}</td>
                    <td className="border p-2 text-center">{term2OptionalCredits}</td>
                  </tr>
 
                  <tr>
                    <td className="border-0 p-1" colSpan={4}></td>
                  </tr>
 
                  <tr className="font-bold">
                    <td className="border p-2"></td>
                    <td className="border p-2">Total:</td>
                    <td className="border p-2 text-center">{term2TotalGLH}</td>
                    <td className="border p-2 text-center">{term2TotalCredits}</td>
                  </tr>
                  <tr>
                    <td className="border p-2"></td>
                    <td className="border p-2">60%</td>
                    <td className="border p-2 text-center">{term2SixtyPercent}</td>
                    <td className="border p-2"></td>
                  </tr>
                  <tr>
                    <td className="border p-2"></td>
                    <td className="border p-2">CP 2</td>
                    <td className="border p-2 text-center">{term2CP}</td>
                    <td className="border p-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-sm font-bold text-gray-800">8 weeks</div>
          </div>
        </div>
      </TabsContent>
    </>
  );
}
