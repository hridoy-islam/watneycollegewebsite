"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { ProfilePictureStep } from './components/profile-picture-step';
import { PersonalDetailsStep } from './components/personal-details-step';
import { DisabilityInfoStep } from './components/disability-info-step';
import { ApplicationDetailsStep } from './components/application-details-step';
import { ReviewStep } from './components/review-step';
import { RefereeDetailsStep } from './components/referee-details-step';
import { DocumentStep } from './components/DocumentStep';
import { EducationStep } from './components/education-step';
import { EmploymentStep } from './components/employment-step';
import { Button } from '@/components/ui/button';
import { Briefcase, Check, Loader2, LogOut } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import axiosInstance from '@/lib/axios';
import type { TCareer } from '@/types/career';
import { EmergencyContact } from './components/emergencyContact';
import CareerResumeUpload from './uploadResume/index';
import { ApplicationPreview } from './components/application-preview';
import JobApplyGate from './components/job-apply-gate';
import QuickApplyCard from './components/quick-apply-card';
import { BlinkingDots } from '@/components/blinking-dots';
import VerifyEmail from '@/components/auth/verify-email';
import { isJobApplicant } from '@/components/auth/roles';
import { logout, updateAuthIsCompleted } from '@/redux/features/authSlice';
import {
  createJobApplication,
  fetchJobApplicant,
  updateJobApplicant
} from '@/lib/job-applicant-api';

// Define form steps for career application
const careerFormSteps = [
  { id: 1, label: 'Upload Resume' },
  { id: 2, label: 'Profile Picture' },
  { id: 3, label: 'Personal Details' },
  { id: 4, label: 'Application Details' },
  { id: 5, label: 'Education' },
  { id: 6, label: 'Employment' },
  { id: 7, label: 'Disability Info' },
  { id: 8, label: 'Emergency Contact' },
  { id: 9, label: 'Referee Details' },
  { id: 10, label: 'Documents' },
  { id: 11, label: 'Consent & Permissions' },
  { id: 12, label: 'Preview & Submit' }
];

const TOTAL_STEPS = careerFormSteps.length;

/**
 * Keys that belong to the account, not to a form step. The steps spread their
 * default values back into what they submit, so these are dropped before a
 * step is saved - the API refuses most of them from an applicant anyway.
 */
const NON_FORM_KEYS = [
  '_id',
  '__v',
  'id',
  'createdAt',
  'updatedAt',
  'role',
  'email',
  'password',
  'userId',
  'isDeleted',
  'authorized',
  'isValided',
  'isCompleted',
  'otp',
  'otpExpiry',
  'isUsed',
  'applicationStep',
  'completedSteps',
  'applicationSubmitted'
];

const stepPayload = (data: any) => {
  const payload = { ...(data || {}) };
  NON_FORM_KEYS.forEach((key) => delete payload[key]);
  return payload;
};

/**
 * The career application, for a signed-in job applicant.
 *
 * Works like the student application form: the applicant's own record on the
 * API is the single source of truth, every "Save & Continue" writes the step
 * to it, and coming back later - from this page or the dashboard - resumes on
 * the step they reached. The application row for this job is opened as soon
 * as they start, so the dashboard can show it as incomplete; HR only sees it,
 * and the confirmation mails only go out, once the form is submitted.
 */
export default function CareerApplicationForm() {
  const { id } = useParams();
  const jobId = (Array.isArray(id) ? id[0] : id) || '';

  const user = useSelector((state: any) => state.auth.user);
  const applicantId: string | undefined = isJobApplicant(user?.role)
    ? user?._id
    : undefined;
  const dispatch = useDispatch();

  const [job, setJob] = useState<any>(null);
  const [jobLoading, setJobLoading] = useState(true);

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<Partial<TCareer> & Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  // A completed applicant only confirms - they do not walk the form again.
  const [profileComplete, setProfileComplete] = useState(false);
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useRouter();
  const [parsedResume, setParsedResume] = useState<string | null>(null);

  // React re-runs effects on mount in development; the applicant load is
  // cached as a promise so both runs share one request.
  const loadRef = useRef<{ key: string; promise: Promise<any> } | null>(null);

  useEffect(() => {
    if (!jobId) return;
    axiosInstance
      .get(`/jobs/${jobId}`)
      .then((res) => setJob(res?.data?.data || null))
      .catch((error) => console.error('Failed to load job', error))
      .finally(() => setJobLoading(false));
  }, [jobId]);

  useEffect(() => {
    if (!applicantId || !jobId || user?.isValided === false) return;

    let cancelled = false;
    const key = `${applicantId}:${jobId}`;

    if (loadRef.current?.key !== key) {
      loadRef.current = {
        key,
        promise: (async () => {
          const applicant = await fetchJobApplicant(applicantId);
          // Opened straight away for an unfinished profile, so the dashboard
          // lists it as incomplete. A finished profile confirms first.
          if (!applicant?.isCompleted) await createJobApplication(jobId);
          return applicant;
        })()
      };
    }
    const request = loadRef.current;

    request.promise
      .then((applicant) => {
        if (cancelled) return;
        setFormData(applicant);
        setCompletedSteps(
          Array.isArray(applicant.completedSteps) ? applicant.completedSteps : []
        );
        setCurrentStep(
          Math.min(Math.max(applicant.applicationStep || 1, 1), TOTAL_STEPS)
        );
        setProfileComplete(Boolean(applicant.isCompleted));
      })
      .catch((error) => {
        console.error('Error loading the job applicant:', error);
        if (loadRef.current === request) loadRef.current = null;
        if (!cancelled) {
          toast({
            title: 'Unable to load your application',
            description:
              error?.response?.data?.message || 'Please refresh the page and try again.',
            className: 'bg-destructive text-white border-none'
          });
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [applicantId, jobId, user?.isValided, toast]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentStep]);

  /**
   * Persist a step to the applicant record and move on. Nothing is kept in
   * localStorage - closing the tab loses nothing that was saved.
   */
  const saveStep = useCallback(
    async (data: any, stepId?: number, nextStep?: number) => {
      if (!applicantId) return false;

      const nextCompleted =
        stepId && !completedSteps.includes(stepId)
          ? [...completedSteps, stepId]
          : completedSteps;

      const payload: any = stepPayload(data);
      if (stepId) {
        payload.completedSteps = nextCompleted;
        payload.applicationStep = nextStep || stepId;
      }

      try {
        const updated = await updateJobApplicant(applicantId, payload);
        setFormData((prev) => ({ ...prev, ...data, ...updated }));
        setCompletedSteps(nextCompleted);
        if (nextStep) setCurrentStep(nextStep);
        return true;
      } catch (error: any) {
        console.error('Error saving application step:', error);
        toast({
          title: error?.response?.data?.message || 'Could not save these details.',
          description: 'Please check your connection and try again.',
          className: 'bg-destructive text-white border-none'
        });
        return false;
      }
    },
    [applicantId, completedSteps, toast]
  );

  const saveAndGo = (stepId: number) => (data: any) =>
    saveStep(data, stepId, stepId + 1);

  // The review step can submit directly: save its declarations, then submit
  // without stopping at the preview.
  const handleReviewSubmit = async (data: any) => {
    setSubmitting(true);
    const saved = await saveStep(data, 11);
    if (!saved) {
      setSubmitting(false);
      return;
    }
    await submitApplication([11]);
  };

  // Uploads on the documents step are saved as they happen, without moving on.
  const handleDocumentSave = (data: any) => {
    saveStep(data);
  };

  const handleSubmit = () => submitApplication();

  /**
   * Marks the application finished. `alsoCompleted` carries a step saved in
   * the same click - the review step submits straight after saving itself,
   * before `completedSteps` state has caught up.
   */
  const submitApplication = async (alsoCompleted: number[] = []) => {
    if (!applicantId) return;
    setSubmitting(true);
    try {
      // Opened when the form was started - except for a profile that was
      // already complete and came here through "Review my details". Applying
      // twice is a no-op, so this is safe either way.
      await createJobApplication(jobId);

      // Every step is already on the record - submitting only marks it
      // finished, which is what releases the application to HR and sends the
      // confirmation mails.
      await updateJobApplicant(applicantId, {
        isCompleted: true,
        applicationSubmitted: true,
        applicationStep: TOTAL_STEPS,
        completedSteps: Array.from(
          new Set([...completedSteps, ...alsoCompleted, TOTAL_STEPS])
        )
      });
      dispatch(updateAuthIsCompleted(true));
      setFormSubmitted(true);
    } catch (error: any) {
      toast({
        title:
          error?.response?.data?.message || error?.message || 'Something went wrong.',
        className: 'bg-destructive text-white border-none'
      });
    } finally {
      setSubmitting(false);
    }
  };

  /** A completed applicant applying for another job - one click. */
  const handleConfirmApplication = async () => {
    setSubmitting(true);
    try {
      const { duplicate } = await createJobApplication(jobId);
      if (duplicate) {
        setAlreadyApplied(true);
        return;
      }
      setFormSubmitted(true);
    } catch (error: any) {
      toast({
        title:
          error?.response?.data?.message || 'Could not submit your application.',
        className: 'bg-destructive text-white border-none'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CareerResumeUpload
            onContinue={(parsedText, fileUrl) => {
              setParsedResume(parsedText || null);
              saveStep({ cvResume: fileUrl || formData.cvResume || '' }, 1, 2);
            }}
            onSkip={() => {
              setParsedResume(null);
              saveStep({}, 1, 2);
            }}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <ProfilePictureStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(2)}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return (
          <PersonalDetailsStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(3)}
            setCurrentStep={setCurrentStep}
            parsedResume={parsedResume}
          />
        );
      case 4:
        return (
          <ApplicationDetailsStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(4)}
            setCurrentStep={setCurrentStep}
          />
        );
      case 5:
        return (
          <EducationStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(5)}
            setCurrentStep={setCurrentStep}
          />
        );
      case 6:
        return (
          <EmploymentStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(6)}
            setCurrentStep={setCurrentStep}
          />
        );
      case 7:
        return (
          <DisabilityInfoStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(7)}
            setCurrentStep={setCurrentStep}
          />
        );
      case 8:
        return (
          <EmergencyContact
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(8)}
            setCurrentStep={setCurrentStep}
          />
        );
      case 9:
        return (
          <RefereeDetailsStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(9)}
            setCurrentStep={setCurrentStep}
          />
        );
      case 10:
        return (
          <DocumentStep
            defaultValues={formData}
            onSaveAndContinue={saveAndGo(10)}
            setCurrentStep={setCurrentStep}
            onSave={handleDocumentSave}
          />
        );
      case 11:
        return (
          <ReviewStep
            defaultValues={formData}
            formData={formData}
            onSaveAndContinue={saveAndGo(11)}
            setCurrentStep={setCurrentStep}
            onSubmitApplication={handleReviewSubmit}
            submitting={submitting}
          />
        );
      case 12:
        return (
          <ApplicationPreview
            defaultValues={formData}
            onSubmit={handleSubmit}
            setCurrentStep={setCurrentStep}
            submitting={submitting}
          />
        );
      default:
        return null;
    }
  };

  const fullPageLoader = (
    <div className="flex min-h-screen items-center justify-center bg-white p-2">
      <BlinkingDots size="large" color="bg-watney" />
    </div>
  );

  // Not signed in - sign in or create a job applicant account first.
  if (!user) {
    if (jobLoading) return fullPageLoader;
    return (
      <div className="container mx-auto">
        <JobApplyGate job={job} onBack={() => navigate.back()} />
      </div>
    );
  }

  // Signed in with a student applicant (or staff) account. Job applications
  // belong to job applicant accounts, which have their own sign up.
  if (!applicantId) {
    return (
      <div className="flex min-h-[calc(100vh-150px)] items-center justify-center px-4">
        <Card className="w-full max-w-xl space-y-4 border border-gray-200 p-8 text-center shadow-md">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-watney/10 text-watney">
            <Briefcase className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl">A job applicant account is needed</CardTitle>
          <CardDescription className="text-sm text-black">
            You are signed in as {user?.email}, which is not a job applicant
            account. Log out, then sign in or create a job applicant account to
            apply for this role.
          </CardDescription>
          <Button
            onClick={() => dispatch(logout())}
            className="mx-auto flex gap-2 bg-watney text-white hover:bg-watney/90"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </Card>
      </div>
    );
  }

  // An unverified applicant confirms their email before any of the form.
  if (user?.isValided === false) {
    return <VerifyEmail user={user} />;
  }

  if (loading) return fullPageLoader;

  if (formSubmitted) {
    return (
      <div className="flex min-h-[calc(100vh-150px)] items-center justify-center">
        <Card className="rounded-lg border border-gray-100 bg-watney/90 p-24 my-8 shadow-lg">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-full bg-white p-8">
              <Check size={84} className="text-watney" />
            </div>
            <div className="flex items-center gap-4 text-center">
              <div>
                <CardTitle className="text-2xl font-semibold text-white">
                  Career Application Submitted Successfully
                </CardTitle>
                <CardDescription className="mt-2 text-base leading-relaxed text-white">
                  Thank you for applying{job?.jobTitle ? ` for ${job.jobTitle}` : ''}.
                  Our team has received your career application and will get
                  back to you shortly. You can follow it from your dashboard.
                  <div className=" mt-2 w-full rounded-md text-center text-base text-white ">
                    <p>
                      If you have any questions or need help with your
                      application, please don’t hesitate to contact us:
                    </p>
                    <ul className="mt-3 list-none space-y-2">
                      <li>
                        📧 <strong>Email:</strong>{' '}
                        <a
                          href="mailto:admissions@watneycollege.ac.uk"
                          className="underline"
                        >
                          admissions@watneycollege.ac.uk
                        </a>
                      </li>
                      <li>
                        ☎ <strong>Phone:</strong> +44 (0)20 1234 5678
                      </li>
                    </ul>
                  </div>
                </CardDescription>
              </div>
            </div>

            <Button
              onClick={() => navigate.push('/job-dashboard')}
              className="mt-4 w-full rounded-sm bg-white px-6 py-3 text-base font-semibold text-watney transition hover:bg-white sm:w-auto"
            >
              Go to dashboard
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // Profile already complete from an earlier application - confirm this job.
  if (profileComplete) {
    return (
      <QuickApplyCard
        job={job}
        profile={formData}
        alreadyApplied={alreadyApplied}
        submitting={submitting}
        onSubmit={handleConfirmApplication}
      />
    );
  }

  return (
    <div className=" container mx-auto">
      <div className="">{renderStep()}</div>
    </div>
  );
}
