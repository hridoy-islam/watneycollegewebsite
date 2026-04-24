// app/components/GeneralEnglishTabs.tsx
"use client";

import { TabsContent } from "@/components/ui/tabs";

export default function GeneralEnglishTabs() {
  return (
    <>
      {/* === Overview Tab === */}
      <TabsContent value="overview" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Programme Overview
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The General English Programme (B1–C1) is designed to support learners in developing independent and effective communication skills in English across social, academic, and professional contexts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At these levels, the programme focuses on:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
            <li>Expanding fluency and accuracy in spoken and written communication</li>
            <li>Developing the ability to understand and produce more complex texts</li>
            <li>Strengthening critical thinking, discussion, and argumentation skills</li>
            <li>Improving confidence in real-world and workplace communication</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            The programme is aligned with the Common European Framework of Reference for Languages (CEFR), ensuring structured progression from intermediate to advanced proficiency.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Assessment
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <div>
                <span>Continuous assessment through:</span>
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Speaking activities and discussions</li>
                  <li>Listening and reading tasks</li>
                  <li>Written assignments</li>
                  <li>Weekly or periodic progress tests</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Informal and formal feedback provided regularly</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Progress measured against CEFR descriptors for B1–C1</span>
            </li>
          </ul>
        </div>
      </TabsContent>

      {/* === Curriculum Tab (Programme Information) === */}
      <TabsContent value="curriculum" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Programme Information
          </h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Levels Covered:</strong> B1 (Intermediate), B2 (Upper-Intermediate), C1 (Advanced)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Guided Learning Hours (GLH):</strong> 60–120 hours per level</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Duration:</strong> 6 months</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Mode of Delivery:</strong> Face-to-face</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Initial Assessment and Placement
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Learners complete a placement assessment to determine whether they enter at B1, B2, or C1. This ensures:
          </p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Appropriate level placement</span></li>
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Targeted support for language development</span></li>
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Clear progression tracking</span></li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Progression
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Learners may progress:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>From B1 → B2 → C1 in line with CEFR levels</span></li>
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>To exam preparation courses such as IELTS or Cambridge English Qualifications</span></li>
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Into academic study, professional training, or workplace roles requiring advanced English</span></li>
          </ul>
        </div>
      </TabsContent>

      {/* === Requirements Tab === */}
      <TabsContent value="requirements" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Entry Requirements
          </h3>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Minimum age: 18</span></li>
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Completion of an initial assessment to confirm placement at B1 level or above</span></li>
            <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Ability to communicate in English at an intermediate level</span></li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            International Students:
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Must meet the minimum English language requirement (B1 or above), demonstrated through initial assessment or recognised qualifications such as IELTS or Cambridge English Qualifications</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Must hold a valid visa or immigration status permitting study in the UK, in accordance with UK Visas and Immigration (UKVI) requirements</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Required to provide valid identification and relevant visa documentation prior to enrolment (Right to Study checks will be carried out where applicable)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Must comply with attendance and engagement requirements, particularly where these form part of visa conditions</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>The centre will advise applicants on study requirements; however, it remains the learner’s responsibility to ensure compliance with UK immigration regulations</span>
            </li>
          </ul>
        </div>
      </TabsContent>

      {/* === Career Tab (Programme Structure) === */}
      <TabsContent value="career" className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Programme Structure
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The General English Programme (B1–C1) is structured to provide a balanced and progressive development of language skills across all core areas. The programme is typically delivered in levels (B1, B2, C1), with each level building on prior knowledge and increasing in complexity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Each level is organised into themed units covering real-life, academic, and professional contexts. A typical structure includes:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-900 block mb-1">Core Language Skills:</span>
              <span className="text-gray-700">Integrated development of speaking, listening, reading, and writing</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-900 block mb-1">Language Systems:</span>
              <span className="text-gray-700">Focus on grammar, vocabulary, and pronunciation to improve accuracy and range</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-900 block mb-1">Functional Communication:</span>
              <span className="text-gray-700">Practical use of English for everyday situations, workplace communication, and problem-solving</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-900 block mb-1">Skills Development:</span>
              <span className="text-gray-700">Activities designed to build fluency, confidence, and interaction skills, including discussions, role plays, and presentations</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-900 block mb-1">Reading and Listening Practice:</span>
              <span className="text-gray-700">Exposure to authentic and semi-authentic materials to develop comprehension and critical understanding</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-900 block mb-1">Writing Development:</span>
              <span className="text-gray-700">Structured tasks ranging from emails and reports to essays and formal writing (progressively more advanced at B2–C1)</span>
            </li>
            <li className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-gray-900 block mb-1">Independent Learning:</span>
              <span className="text-gray-700">Guided self-study, homework, and use of digital resources to reinforce classroom learning</span>
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Delivery Format
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Lessons are delivered on a regular schedule (depending on course intensity)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Each session combines input, practice, and feedback</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>Tutorial and feedback sessions are integrated to monitor progress and provide individual support</span>
            </li>
          </ul>
        </div>
      </TabsContent>
    </>
  );
}