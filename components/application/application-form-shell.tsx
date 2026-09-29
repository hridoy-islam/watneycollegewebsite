'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode
} from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { BlinkingDots } from '@/components/blinking-dots';
import { fetchApplicant, updateApplicant } from '@/lib/applicant-api';
import { ApplicationProgress } from './application-progress';
import { ApplicantSubjectProvider } from './applicant-subject';

/**
 * The eleven step application form, minus the steps themselves.
 *
 * Home and international students answer different questions, so each has its
 * own set of step components - but the shell around them (loading the record,
 * saving a step, the progress bar, the review, the submit and the thank you
 * card) is the same, and lives here so an agent filling the form in on
 * someone's behalf gets exactly the form the applicant would have got.
 */

export const APPLICATION_STEPS = [
  'Personal Details',
  'Address',
  'Emergency Contact',
  'Education',
  'Employment',
  'Compliance',
  'Equality',
  'Referees',
  'Documents',
  'Funding',
  'Terms & Submit'
];

const TOTAL_STEPS = APPLICATION_STEPS.length;

/**
 * The loaded record, with the caller's seeds filling in only what it has no
 * answer for - so an agent's pre-filled referral shows on an applicant who
 * never named one, and is left alone on an applicant who did.
 */
const withSeeds = (applicant: any, seeds?: Record<string, any>) => {
  if (!seeds) return applicant;

  const merged = { ...applicant };

  Object.entries(seeds).forEach(([key, value]) => {
    const held = merged[key];
    const isEmpty =
      held === undefined ||
      held === null ||
      held === '' ||
      (Array.isArray(held) && held.length === 0);

    if (isEmpty) merged[key] = value;
  });

  return merged;
};

/** The eleven steps plus the review, in the variant the caller is rendering. */
export interface ApplicationStepComponents {
  PersonalDetailsStep: ComponentType<any>;
  AddressStep: ComponentType<any>;
  EmergencyContact: ComponentType<any>;
  EducationStep: ComponentType<any>;
  EmploymentStep: ComponentType<any>;
  ComplianceStep: ComponentType<any>;
  EthnicityStep: ComponentType<any>;
  RefereeDetailsStep: ComponentType<any>;
  DocumentsStep: ComponentType<any>;
  FundingInformation: ComponentType<any>;
  TermsSubmitStep: ComponentType<any>;
  ReviewStep: ComponentType<any>;
}

/** What every caller of a variant form has to provide. */
export interface ApplicationFormProps {
  /**
   * The applicant whose record every step is saved to. Leave it out to fill
   * the form in as a draft: nothing is written until submit, which is how an
   * agent fills the form in for someone who has no account yet.
   */
  applicantId?: string;
  /** The course being applied for - the API reads the intake off it. */
  courseId: string;
  /**
   * What the caller already knows about the applicant. It seeds a draft, and
   * fills the gaps in a loaded record - the record always wins where it has an
   * answer of its own.
   */
  initialData?: Record<string, any>;
  /**
   * Submits the finished application. With a record behind the form the
   * profile has already been saved and only the application row is left to
   * open; a draft arrives here whole, to be written in one go.
   */
  submitApplication: (args: {
    applicantId?: string;
    courseId: string;
    formData: Record<string, any>;
  }) => Promise<void>;
  /**
   * The loaded record answers the other variant's questions - the public pages
   * bounce to the right URL, the agent form already knows which it opened.
   * Called with `undefined` when the record has no student type at all.
   */
  onStudentTypeMismatch?: (studentType?: string) => void;
  /** The button under the thank you card. */
  onDone: () => void;
  doneLabel?: string;
  successTitle?: string;
  successDescription?: ReactNode;
  /** Wraps the card - the public pages and the portal frame it differently. */
  containerClassName?: string;
}

interface ApplicationFormShellProps extends ApplicationFormProps {
  variant: 'home' | 'international';
  steps: ApplicationStepComponents;
}

export function ApplicationFormShell({
  variant,
  steps,
  applicantId,
  courseId,
  initialData,
  submitApplication,
  onStudentTypeMismatch,
  onDone,
  doneLabel = 'Done',
  successTitle = 'Application Submitted Successfully',
  successDescription,
  containerClassName = 'w-full container mx-auto py-16'
}: ApplicationFormShellProps) {
  const [currentStep, setCurrentStep] = useState<any>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<any>(initialData || {});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [loading, setLoading] = useState<boolean>(!!applicantId);
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const { toast } = useToast();

  const courseSubmitCalled = useRef(false);

  // A draft holds every answer here until submit, and submitting reads the
  // latest of them from outside the render that started it.
  const formDataRef = useRef<any>(initialData || {});
  formDataRef.current = formData;

  // Load the applicant record - this is the single source of truth. A draft
  // has none, so the form starts on whatever the caller seeded it with.
  useEffect(() => {
    if (!applicantId) return;

    let cancelled = false;

    (async () => {
      try {
        const applicant = await fetchApplicant(applicantId);
        if (cancelled) return;

        // The public pages bounce a record that belongs on the other form.
        // The agent form opened the variant it had just set, so it passes no
        // handler and nothing is checked.
        if (onStudentTypeMismatch) {
          const isInternational = applicant?.studentType === 'international';
          const wantsInternational = variant === 'international';

          if (!applicant?.studentType || isInternational !== wantsInternational) {
            onStudentTypeMismatch(applicant?.studentType);
            return;
          }
        }

        setFormData(withSeeds(applicant, initialData));
        setCompletedSteps(
          Array.isArray(applicant.completedSteps) ? applicant.completedSteps : []
        );
        setCurrentStep(
          Math.min(Math.max(applicant.applicationStep || 1, 1), TOTAL_STEPS)
        );
      } catch (error) {
        console.error('Error loading applicant data:', error);
        if (!cancelled) {
          toast({
            title: 'Unable to load the application',
            description: 'Please refresh the page and try again.',
            className: 'bg-destructive text-white border-none'
          });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
    // `onStudentTypeMismatch` and `initialData` are fresh on every render of
    // the caller - re-running on their identity would loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicantId, variant, toast]);

  // Leaving the final step drops the form back below 100%.
  useEffect(() => {
    const step =
      typeof currentStep === 'object' ? currentStep.step : currentStep;
    if (step !== TOTAL_STEPS) setIsReadyToSubmit(false);
  }, [currentStep]);

  /**
   * Persist a step to the applicant record. Every "Save & Continue" hits the
   * backend - nothing is cached in localStorage.
   */
  const saveStep = useCallback(
    async (data: any, stepId?: number, nextStep?: number) => {
      const nextCompleted =
        stepId && !completedSteps.includes(stepId)
          ? [...completedSteps, stepId]
          : completedSteps;

      const payload: any = { ...data };
      if (stepId) {
        payload.completedSteps = nextCompleted;
        payload.applicationStep = nextStep || stepId;
      }

      // A draft has no record to write to - the answers are kept here and
      // sent as one payload when the form is submitted.
      if (!applicantId) {
        setFormData((prev: any) => ({ ...prev, ...payload }));
        setCompletedSteps(nextCompleted);
        if (nextStep) setCurrentStep(nextStep);
        return true;
      }

      try {
        const updated = await updateApplicant(applicantId, payload);
        setFormData((prev: any) => ({ ...prev, ...data, ...updated }));
        setCompletedSteps(nextCompleted);
        if (nextStep) setCurrentStep(nextStep);
        return true;
      } catch (error: any) {
        console.error('Error saving application step:', error);
        toast({
          title:
            error?.response?.data?.message || 'Could not save these details.',
          description: 'Please check your connection and try again.',
          className: 'bg-destructive text-white border-none'
        });
        return false;
      }
    },
    [applicantId, completedSteps, toast]
  );

  const handleStepClick = (stepId: number) => setCurrentStep(stepId);

  // Accepting the declarations unlocks the review - submitting happens there.
  const handleTermsSave = async (data: any) => {
    const saved = await saveStep(data, 11, 11);
    if (saved) setShowReview(true);
  };

  // ...or the form is submitted straight from the terms step.
  const handleTermsSubmit = async (data: any) => {
    const saved = await saveStep(data, 11, 11);
    if (saved) await submitApplicationCourse(data);
  };

  const submitApplicationCourse = async (latestData: any = {}) => {
    if (courseSubmitCalled.current) return;

    if (!courseId) {
      toast({
        title: 'Course details are missing.',
        description: 'Please select the course again before submitting.',
        className: 'bg-destructive text-white border-none'
      });
      return;
    }

    courseSubmitCalled.current = true;

    // Everything the form has collected, plus the flags that mark the profile
    // finished. A completed profile is what releases the application emails.
    const finalData = {
      ...formDataRef.current,
      ...latestData,
      applicationSubmitted: true,
      isCompleted: true,
      courseId,
      authorized: true,
      isValided: true
    };

    try {
      // The profile first - the API only mails the applicant once the record
      // is complete, so this has to land before the application row does. A
      // draft has no record yet: it is created by `submitApplication` below,
      // from `formData`, in the same call that opens the application.
      if (applicantId) {
        await updateApplicant(applicantId, {
          applicationSubmitted: true,
          isCompleted: true,
          courseId,
          authorized: true,
          isValided: true
        });
      }

      // Then the application itself. Without this row there is nothing for
      // the applicant dashboard, the offer letter or the agent portal to read.
      await submitApplication({ applicantId, courseId, formData: finalData });

      setFormSubmitted(true);
      toast({ description: 'Application submitted successfully.' });
    } catch (error: any) {
      courseSubmitCalled.current = false;
      console.error('Error submitting application course:', error);
      toast({
        title: error?.response?.data?.message || 'Application failed.',
        className: 'bg-destructive text-white border-none'
      });
    }
  };

  const renderStep = () => {
    // The unlocked review takes over the whole step area before submitting.
    if (showReview) {
      return (
        <steps.ReviewStep
          formData={formData}
          onBack={() => setShowReview(false)}
          onSubmit={submitApplicationCourse}
        />
      );
    }

    const stepValue =
      typeof currentStep === 'object' ? currentStep.step : currentStep;
    const subStep = typeof currentStep === 'object' ? currentStep.subStep : 1;

    switch (stepValue) {
      case 1:
        return (
          <steps.PersonalDetailsStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 1, 2)}
            onSave={(data: any) => saveStep(data)}
            setCurrentStep={setCurrentStep}
            loading={loading}
          />
        );

      case 2:
        return (
          <steps.AddressStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 2, 3)}
            setCurrentStep={setCurrentStep}
          />
        );

      case 3:
        return (
          <steps.EmergencyContact
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 3, 4)}
            setCurrentStep={setCurrentStep}
          />
        );

      case 4:
        return (
          <steps.EducationStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 4, 5)}
            setCurrentStep={setCurrentStep}
            setCurrentSubStep={subStep}
          />
        );

      case 5:
        return (
          <steps.EmploymentStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 5, 6)}
            setCurrentStep={setCurrentStep}
          />
        );

      case 6:
        return (
          <steps.ComplianceStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 6, 7)}
            setCurrentStep={setCurrentStep}
          />
        );

      case 7:
        return (
          <steps.EthnicityStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 7, 8)}
            setCurrentStep={setCurrentStep}
          />
        );

      case 8:
        return (
          <steps.RefereeDetailsStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 8, 9)}
            setCurrentStep={setCurrentStep}
          />
        );

      case 9:
        return (
          <steps.DocumentsStep
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 9, 10)}
            setCurrentStep={setCurrentStep}
            onSave={(data: any) => saveStep(data)}
          />
        );

      case 10:
        return (
          <steps.FundingInformation
            defaultValues={formData}
            onSaveAndContinue={(data: any) => saveStep(data, 10, 11)}
            setCurrentStep={setCurrentStep}
          />
        );

      case 11:
        return (
          <steps.TermsSubmitStep
            defaultValues={formData}
            setCurrentStep={setCurrentStep}
            onSaveAndContinue={handleTermsSave}
            onSubmitApplication={handleTermsSubmit}
            onReadyChange={setIsReadyToSubmit}
          />
        );

      default:
        return (
          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <h2 className="mb-4 text-xl font-semibold">Step Not Found</h2>
            <p className="mb-4 text-gray-600">
              This step is not implemented yet.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentStep((prev: any) =>
                    typeof prev === 'object'
                      ? prev.step - 1
                      : Math.max(1, prev - 1)
                  )
                }
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  handleStepClick(Math.min(TOTAL_STEPS, stepValue + 1))
                }
              >
                Save & Continue
              </Button>
            </div>
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-2">
        <BlinkingDots size="large" color="bg-watney" />
      </div>
    );
  }

  if (formSubmitted) {
    return (
      <div className="mt-8 flex items-center justify-center px-4">
        <Card className="w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-xl">
          <div className="h-1.5 w-full bg-watney" />
          <div className="flex flex-col items-center gap-6 px-8 py-12 text-center md:px-14 md:py-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-watney ring-8 ring-watney/10">
              <Check size={40} className="text-white" strokeWidth={3} />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
                {successTitle}
              </CardTitle>
              <CardDescription className="mt-3 text-base leading-relaxed text-gray-600">
                {successDescription || <ContactDetails />}
              </CardDescription>
            </div>
            <Button
              onClick={onDone}
              className="mt-2 w-full rounded-lg bg-watney px-12 py-3 text-base font-semibold text-white transition hover:bg-watney/90 sm:w-auto"
            >
              {doneLabel}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <ApplicantSubjectProvider applicantId={applicantId}>
      <div className={containerClassName}>
        <Card className="md:p-4">
          <div className="px-2 pt-4 md:px-4 md:pt-2">
            <ApplicationProgress
              steps={APPLICATION_STEPS}
              currentStep={
                typeof currentStep === 'object' ? currentStep.step : currentStep
              }
              completedSteps={completedSteps}
              isReadyToSubmit={isReadyToSubmit}
            />
          </div>

          {renderStep()}
        </Card>
      </div>
    </ApplicantSubjectProvider>
  );
}

/** The admissions contacts under the thank you card. */
export function ContactDetails() {
  return (
    <div className="mt-2 w-full text-center text-base text-gray-600">
      <p>
        If you have any questions or need help with the application, please
        don&rsquo;t hesitate to contact us:
      </p>
      <ul className="mt-5 list-none space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-left">
        <li className="flex items-center gap-2.5 text-gray-700">
          📧 <strong className="text-gray-900">Email:</strong>{' '}
          <a
            href="mailto:admissions@watneycollege.ac.uk"
            className="text-watney underline underline-offset-2"
          >
            admissions@watneycollege.ac.uk
          </a>
        </li>
        <li className="flex items-center gap-2.5 text-gray-700">
          ☎ <strong className="text-gray-900">Phone:</strong> +44 (0)20 1234
          5678
        </li>
      </ul>
    </div>
  );
}

export default ApplicationFormShell;
