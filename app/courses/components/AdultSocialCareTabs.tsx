// app/components/AdultSocialCareTabs.tsx
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
      {/* <p className="text-gray-600 mb-4 italic">{termSubtitle}</p> */}
 
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

export default function AdultSocialCareTabs() {
  return (
    <>
      {/* === Overview Tab === */}
      <TabsContent value="overview" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Programme Overview
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Level 2 Adult Social Care Certificate is designed to improve
            portability and reduce the need for repeat training and assessment
            when individuals move roles. Skills for Care was commissioned by the
            Department of Health and Social Care (DHSC) to develop a
            specification for this qualification, based on the existing Care
            Certificate standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The NQual Level 2 Adult Social Care Certificate qualification is
            supported by Skills for Care and the Department of Health and Social
            Care. This qualification is guided by the Skills for Care &
            Development Assessment Principles and Additional Assessment
            Principles Guidance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Designed for new entrants or existing workers in adult social care
            roles, providing foundational competence in person-centred care and
            safeguarding. This qualification ensures foundational competence in
            person-centred care, safeguarding, communication, health and safety,
            and legal responsibilities — serving as a nationally recognised
            benchmark for care practice.
          </p>
          <p className="text-gray-700 leading-relaxed pt-5">
            <span className="font-semibold">Assessment:</span> Portfolio of
            evidence, internally assessed and verified. No written examinations.
            Assessed against NQual qualification standards regulated by Ofqual.
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Portfolio Assessment",
                "Care Certificate Standards",
                "Person-Centred Values",
                "Safeguarding Adults & Children",
                "Health & Safety in Care",
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
          <h3 className="text-2xl font-bold text-gray-900 ">
            Programme Information
          </h3>

          <p className="mb-4">
            This course includes the following units and assessments:
          </p>

          <ul className="space-y-3">
            {[
              "Understand Own Role",
              "Personal Development",
              "Duty of Care",
              "Equality, Diversity, Inclusion and Human Rights",
              "Work in a Person-Centred Way",
              "Communication",
              "Privacy and Dignity",
              "Nutrition and Hydration",
              "Awareness of Mental Health and Dementia",
              "Adult Safeguarding",
              "Safeguarding Children",
              "Health, Safety and Principles of Basic Life Support",
              "Handling Information",
              "Infection Prevention and Control (IPC)",
              "An Awareness of Learning Disability and Autism",
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

      {/* === Career Tab (Programme Structure) === */}
      <TabsContent value="career" className="space-y-4">
        <TermTable
          termTitle="(Weeks 1-7, 01/04/2026 - 20/05/2026)"
          termSubtitle="Mandatory Units — Foundation and Core Knowledge Phase"
          rows={[
            {
              week: "1",
              unit: "Understand Own Role",
              code: "D/651/1130",
              credits: 2,
              glh: 16,
            },
            {
              week: "2",
              unit: "Personal Development",
              code: "F/651/1131",
              credits: 3,
              glh: 24,
            },
            {
              week: "3",
              unit: "Duty of Care",
              code: "H/651/1132",
              credits: 2,
              glh: 16,
            },
            {
              week: "4",
              unit: "Equality, Diversity, Inclusion and Human Rights",
              code: "J/651/1133",
              credits: 2,
              glh: 16,
            },
            {
              week: "5",
              unit: "Work in a Person-Centred Way",
              code: "K/651/1134",
              credits: 3,
              glh: 24,
            },
            {
              week: "6",
              unit: "6a Adult Safeguarding",
              code: "Y/651/1139",
              credits: 3,
              glh: 24,
            },
            {
              week: "6",
              unit: "6b Safeguarding Children",
              code: "F/651/1140",
              credits: 1,
              glh: 8,
             
            },
            {
              week: "7",
              unit: "Nutrition and Hydration",
              code: "R/651/1137",
              credits: 2,
              glh: 16,
            },
          ]}
          totalCredits={18}
          totalGLH={144}
          
        />


        <TermTable
    termTitle="(Weeks 8-13, 15/06/2026 - 21/07/2026)"
    termSubtitle="Mandatory Units — Advanced and Specialist Knowledge Phase"
    rows={[
      {
        week: "8",
        unit: "8a Communication",
        code: "L/651/1135",
        credits: 3,
        glh: 24,
      },
      {
        week: "8",
        unit: "8b Handling Information",
        code: "J/651/1142",
        credits: 1,
        glh: 8,
      },
      {
        week: "9",
        unit: "Privacy and Dignity",
        code: "M/651/1136",
        credits: 3,
        glh: 24,
      },
      {
        week: "10",
        unit: "Awareness of Mental Health and Dementia",
        code: "T/651/1138",
        credits: 3,
        glh: 24,
      },
      {
        week: "11",
        unit: "Health, Safety, and Principles of Basic Life Support",
        code: "H/651/1141",
        credits: 3,
        glh: 24,
      },
      {
        week: "12",
        unit: "Infection Prevention and Control (IPC)",
        code: "K/651/1143",
        credits: 2,
        glh: 16,
      },
      {
        week: "13",
        unit: "An Awareness of Learning Disability and Autism",
        code: "L/651/1144",
        credits: 3,
        glh: 24,
      },
    ]}
    totalCredits={18}
    totalGLH={144}
  />
      </TabsContent>
    </>
  );
}