// app/components/AdultCareDiplomaTabs.tsx
"use client";

import { Book, ExternalLink, Users, Award, Calendar, Clock, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";

// Reusable Term Table Component
const TermTable = ({
  termTitle,
  termSubtitle,
  outcomes,
  rows,
  totalCredits,
  totalGLH,
  conditionUnits,
}: {
  termTitle: string;
  termSubtitle: string;
  outcomes: string[];
  rows: { week: string; unit: string; title: string; credits: number; glh: number }[];
  totalCredits: number;
  totalGLH: number;
  conditionUnits?: { title: string; code: string; credits: number; glh: number }[];
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-3">{termTitle}</h4>
      <p className="text-gray-600 mb-4 italic">{termSubtitle}</p>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-left font-semibold">Week</th>
              <th className="border p-2 text-left font-semibold">Title</th>
              <th className="border p-2 text-left font-semibold">Unit</th>
              <th className="border p-2 text-center font-semibold">Credits</th>
              <th className="border p-2 text-center font-semibold">GLH</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border p-2">{row.week}</td>
                <td className="border p-2 font-mono text-xs">{row.unit}</td>
                <td className="border p-2">{row.title}</td>
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

      {/* Condition-Specific Units (Only for Term 3) */}
      {conditionUnits && (
        <div className="mt-4 p-4 bg-yellow-50 rounded-md">
          <h5 className="font-semibold text-gray-800 mb-2">
            Condition-Specific Awareness Units (Integrated throughout Term 3):
          </h5>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {conditionUnits.map((unit, idx) => (
              <li key={idx}>
                <strong>{unit.title}</strong> | {unit.code} | {unit.credits} credits | {unit.glh} GLH
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <h5 className="font-semibold text-gray-800 mb-2">Key Learning Outcomes:</h5>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          {outcomes.map((outcome, idx) => (
            <li key={idx}>{outcome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Component
export default function AdultCareDiplomaTabs() {
  return (
    <>
      {/* === Overview Tab === */}
      <TabsContent value="overview" className="space-y-6">
        <div className="">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Programme Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nqual Level 4 Diploma in Adult Care is designed to provide learners with knowledge and skills relating to care practices. It will provide individuals with the chance to develop knowledge and gain skills to seek employment or progression onto higher level qualifications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The purpose of this qualification is to prepare individuals for progression in the care sector. The units specified within this document cover a variety of areas and topics relevant to the sector, including leadership and management in health care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This qualification is supported by Skills for Care and developed using the Development Assessment Principles. This qualification is approved by Skills for Care.
          </p>
        </div>
      </TabsContent>

      {/* === Curriculum Tab (Programme Information) === */}
      <TabsContent value="curriculum" className="space-y-6">
        <div className="">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Programme Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Qualification Code:</strong> 610/2969/5
            </div>
            <div>
              <strong>UK Credits:</strong> 70
            </div>
            <div>
              <strong>Total Quality Time (TQT):</strong> 700
            </div>
            <div>
              <strong>RQF Level:</strong> 4
            </div>
            <div>
              <strong>Duration:</strong> 09 Calendar Months (Full Time) / 18 Calendar Months (Part Time)
            </div>
            <div>
              <strong>Mode of Delivery:</strong> Full Time / Part Time / Blended
            </div>
          </div>
        </div>
      </TabsContent>

      {/* === Requirements Tab === */}
      <TabsContent value="requirements" className="space-y-6">
        <div className="">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Entry Requirements</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Learners should have or be working towards a minimum of level 2 in literacy and numeracy or equivalent.</li>
            <li>Minimum age 18</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">RPL / RPEL and Attainment</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Learners with a minimum of three years of experience at a sub-decision-making level will be considered for entry.</li>
            <li>Credit transfer may be granted to students who have completed a Level 4 qualification in the same discipline from other Ofqual-recognised awarding organisations.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">Progression</h4>
          <p className="text-gray-700">Level 5 Diploma in Leadership and Management in Adult Care Services</p>
        </div>
      </TabsContent>

      {/* === Career Tab (Programme Structure) === */}
      <TabsContent value="career" className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">Programme Structure</h3>

        <TermTable
          termTitle="Term 1 (Weeks 1-12): Foundation and Professional Practice"
          termSubtitle="Mandatory Units - Core Foundation"
          outcomes={[
            "Establish professional practice foundations",
            "Develop communication and documentation skills",
            "Understand inclusive practice and health and safety leadership",
            "Create personal development plans and reflective practice",
          ]}
          rows={[
            { week: "1-2", unit: "K/650/7851", title: "Personal Development in Adult Social Care Settings", credits: 4, glh: 32 },
            { week: "3-4", unit: "Y/650/7856", title: "Professional Practice in Adult Care Settings", credits: 3, glh: 24 },
            { week: "5-6", unit: "L/650/7852", title: "Lead Inclusive Practice in Adult Care Settings", credits: 3, glh: 24 },
            { week: "7-8", unit: "M/650/7853", title: "Lead Health and Safety in Adult Care Settings", credits: 3, glh: 24 },
            { week: "9-10", unit: "D/650/7849", title: "Lead Communication in Adult Care Settings", credits: 4, glh: 32 },
            { week: "11-12", unit: "J/650/7850", title: "Develop, Maintain and Use Records and Reports", credits: 3, glh: 24 },
          ]}
          totalCredits={20}
          totalGLH={160}
        />

        <TermTable
          termTitle="Term 2 (Weeks 13-24): Assessment, Planning and Partnerships"
          termSubtitle="Mandatory Units - Assessment and Partnership Phase"
          outcomes={[
            "Master person-centred assessment and planning",
            "Develop partnership working skills across agencies",
            "Understand personalisation principles and implementation",
            "Implement comprehensive safeguarding procedures",
          ]}
          rows={[
            { week: "13-14", unit: "R/650/7854", title: "Facilitate Person-Centred Assessments to Support Well-Being", credits: 2, glh: 16 },
            { week: "15-16", unit: "T/650/7855", title: "Facilitate Support Planning to Ensure Positive Outcomes", credits: 3, glh: 24 },
            { week: "17-19", unit: "A/650/7857", title: "Working in Partnership with Others", credits: 4, glh: 32 },
            { week: "20-22", unit: "D/650/7858", title: "Understand Personalisation in Care and Support Services", credits: 4, glh: 32 },
            { week: "23", unit: "F/650/7859", title: "Understand Safeguarding and Protection in Adult Care Settings", credits: 2, glh: 16 },
            { week: "24", unit: "K/650/7860", title: "Safeguarding Children and Young People in Adult Care Sector", credits: 2, glh: 16 },
          ]}
          totalCredits={17}
          totalGLH={136}
        />

        <TermTable
          termTitle="Term 3 (Weeks 25-36): Leadership, Management and Specialisation"
          termSubtitle="Optional Units - Leadership and Specialisation"
          outcomes={[
            "Develop advanced leadership and team management skills",
            "Implement change management and innovation strategies",
            "Master quality assurance and regulatory compliance",
            "Design effective staff induction and development programs",
          ]}
          rows={[
            { week: "25-27", unit: "T/650/7837", title: "Leadership in Care Settings", credits: 5, glh: 40 },
            { week: "28-30", unit: "L/650/7870", title: "Managing Change and Innovation", credits: 5, glh: 40 },
            { week: "31-32", unit: "H/650/7840", title: "Quality Assurance and Quality Improvement in Care Settings", credits: 5, glh: 40 },
            { week: "33-34", unit: "Y/650/7838", title: "Adult Care Regulation and Inspection", credits: 5, glh: 40 },
            { week: "35-36", unit: "H/650/7869", title: "Manage Inductions in Adult Care", credits: 5, glh: 40 },
          ]}
          totalCredits={33}
          totalGLH={264}
          conditionUnits={[
            { title: "Dementia Awareness", code: "D/650/7820", credits: 4, glh: 32 },
            { title: "Stroke Awareness", code: "H/650/7822", credits: 4, glh: 32 },
          ]}
        />
      </TabsContent>
    </>
  );
}