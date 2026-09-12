'use client';

import { useMemo, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ApplicantSubjectProvider } from '@/components/application/applicant-subject';
import {
  HOME_EDITOR_STEPS,
  INTERNATIONAL_EDITOR_STEPS,
  type ApplicantEditorSteps
} from './steps';

/**
 * An applicant's record, open for the agent to edit.
 *
 * Each tab is one of the steps this route owns, and each ends in its own Save
 * - a tab is saved on its own, and nothing is carried between them. Which set
 * of steps is used comes from the applicant's `studentType`: a home student is
 * asked the home questions, an overseas student the international ones.
 */

interface Section {
  tab: string;
  /** Shown in a tab's own nav when it holds more than one section. */
  label: string;
  step: keyof ApplicantEditorSteps;
}

const SECTIONS: Section[] = [
  { tab: 'personal', label: 'Personal details', step: 'PersonalDetailsStep' },
  { tab: 'personal', label: 'Address', step: 'AddressStep' },
  { tab: 'personal', label: 'Emergency contact', step: 'EmergencyContact' },
  { tab: 'personal', label: 'Employment', step: 'EmploymentStep' },
  { tab: 'personal', label: 'Referees', step: 'RefereeDetailsStep' },
  { tab: 'personal', label: 'Funding', step: 'FundingInformation' },
  { tab: 'education', label: 'Education', step: 'EducationStep' },
  { tab: 'ethnicity', label: 'Equality & diversity', step: 'EthnicityStep' },
  { tab: 'additional', label: 'Additional information', step: 'ComplianceStep' },
  { tab: 'documents', label: 'Documents', step: 'DocumentsStep' },
  { tab: 'terms', label: 'Terms', step: 'TermsSubmitStep' }
];

const TABS = [
  { key: 'personal', label: 'Personal information' },
  { key: 'education', label: 'Education' },
  { key: 'ethnicity', label: 'Ethnicity' },
  { key: 'additional', label: 'Additional Information' },
  { key: 'documents', label: 'Documents' },
  { key: 'terms', label: 'Terms' }
];

export interface ApplicantEditorProps {
  /** The record being edited - passed straight to every step. */
  applicant: any;
  /** Saves one tab. Resolves once the record has been written. */
  onSave: (data: Record<string, any>) => Promise<boolean>;
  /** Rendered as the last tab - the applicant's application courses. */
  courses?: React.ReactNode;
  saving?: boolean;
}

export function ApplicantEditor({
  applicant,
  onSave,
  courses,
  saving = false
}: ApplicantEditorProps) {
  const [tab, setTab] = useState('personal');
  const [sectionIndex, setSectionIndex] = useState(0);

  const steps =
    applicant?.studentType === 'international'
      ? INTERNATIONAL_EDITOR_STEPS
      : HOME_EDITOR_STEPS;

  const sectionsInTab = useMemo(
    () => SECTIONS.filter((section) => section.tab === tab),
    [tab]
  );

  const activeSection = SECTIONS[sectionIndex];

  const handleTabChange = (nextTab: string) => {
    setTab(nextTab);
    const first = SECTIONS.findIndex((section) => section.tab === nextTab);
    if (first >= 0) setSectionIndex(first);
  };

  /**
   * A step's Save. It writes and stays put - there is nowhere to advance to,
   * and the agent may well want to carry on editing what they just saved.
   */
  const handleSave = async (data: Record<string, any>) => onSave(data);

  const StepComponent = activeSection ? (steps[activeSection.step] as any) : null;

  const stepBody = StepComponent ? (
    <div className="relative">
      {saving && (
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-white/60">
          <Loader2 className="h-6 w-6 animate-spin text-watney" />
        </div>
      )}
      <StepComponent
        defaultValues={applicant}
        onSaveAndContinue={handleSave}
        onSave={handleSave}
        onSubmitApplication={handleSave}
        // The steps kept the prop; nothing in this editor navigates.
        setCurrentStep={() => {}}
        setCurrentSubStep={1}
        loading={false}
      />
    </div>
  ) : null;

  const tabClass =
    'rounded-lg px-4 py-2 text-sm data-[state=active]:bg-white data-[state=active]:text-watney data-[state=active]:shadow-sm';

  return (
    <ApplicantSubjectProvider applicantId={applicant?._id}>
      <Tabs value={tab} onValueChange={handleTabChange} className="space-y-5">
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-xl bg-gray-100/80 p-1">
          {TABS.map(({ key, label }) => (
            <TabsTrigger key={key} value={key} className={tabClass}>
              {label}
            </TabsTrigger>
          ))}
          {courses && (
            <TabsTrigger value="courses" className={tabClass}>
              Course
            </TabsTrigger>
          )}
        </TabsList>

        {TABS.map(({ key }) => (
          <TabsContent key={key} value={key} className="mt-0 space-y-4">
            {sectionsInTab.length > 1 && (
              <nav className="flex flex-wrap gap-2">
                {sectionsInTab.map((section) => {
                  const index = SECTIONS.indexOf(section);
                  const active = index === sectionIndex;

                  return (
                    <button
                      key={section.label}
                      type="button"
                      onClick={() => setSectionIndex(index)}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        active
                          ? 'border-watney bg-watney text-white'
                          : 'border-gray-200 bg-white text-black hover:border-gray-300 hover:text-black'
                      }`}
                    >
                      {section.label}
                    </button>
                  );
                })}
              </nav>
            )}

            {stepBody}
          </TabsContent>
        ))}

        {courses && (
          <TabsContent value="courses" className="mt-0">
            {courses}
          </TabsContent>
        )}
      </Tabs>
    </ApplicantSubjectProvider>
  );
}

export default ApplicantEditor;
