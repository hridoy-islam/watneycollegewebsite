'use client';

import { useMemo, useState } from 'react';
import { Lock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ApplicantSubjectProvider } from '@/components/application/applicant-subject';
import {
  HOME_EDITOR_STEPS,
  INTERNATIONAL_EDITOR_STEPS,
  type ApplicantEditorSteps
} from './steps';

/**
 * An applicant's record, laid out for the agent to read.
 *
 * Agents do not edit applicants - the applicant owns their own form and the
 * college owns the decisions on it - so every step here renders as it would
 * for the applicant, then is sealed: the `<fieldset disabled>` takes every
 * native control out of play, and `wc-readonly` in app/globals.css closes the
 * gap left by the widgets that are not native controls (react-select and the
 * date pickers open from a div, which a disabled fieldset does not reach).
 *
 * Nothing here can write. There is no save handler to call and no endpoint
 * behind one, so a step that still ends in its own Save button ends in a
 * disabled one.
 *
 * Which set of steps is used comes from the applicant's `studentType`: a home
 * student is shown the home questions, an overseas student the international
 * ones.
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
  /** The record being read - passed straight to every step. */
  applicant: any;
  /** Rendered as the last tab - the applicant's application courses. */
  courses?: React.ReactNode;
}

export function ApplicantEditor({
  applicant,
  courses
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
   * The steps call this on submit, so it has to exist - but it is the end of
   * the line rather than a way through to the API. A step cannot reach it
   * while the fieldset below is disabled; it returns `false` so that if one
   * ever does, the step is told the write did not happen rather than showing
   * the applicant a success it never got.
   */
  const noSave = async () => false;

  const StepComponent = activeSection ? (steps[activeSection.step] as any) : null;

  const stepBody = StepComponent ? (
    <div className="space-y-4">
      {/* Said once, plainly: a greyed-out form with no explanation reads as a
          page that failed to load rather than one that is doing its job. */}
      <p className="flex items-start gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-black">
        <Lock className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          This is a read-only view of the applicant&apos;s form. Changes have to
          be made by the applicant themselves, or by the admissions team.
        </span>
      </p>

      {/* `disabled` covers every native control in the step - inputs,
          textareas, checkboxes, and the Save button each step still carries.
          `wc-readonly` covers the rest. `min-w-0` because a fieldset will not
          shrink below its content's intrinsic width on its own, which would
          break the layout. */}
      <fieldset disabled className="wc-readonly m-0 min-w-0 border-0 p-0">
        <StepComponent
          defaultValues={applicant}
          onSaveAndContinue={noSave}
          onSave={noSave}
          onSubmitApplication={noSave}
          // The steps kept the prop; nothing in this editor navigates.
          setCurrentStep={() => {}}
          setCurrentSubStep={1}
          loading={false}
        />
      </fieldset>
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
