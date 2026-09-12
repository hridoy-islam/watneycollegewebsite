'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import {
  ArrowLeft,
  BookOpen,
  Check,
  CircleAlert,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Search,
  Sparkles
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { BlinkingDots } from '@/components/blinking-dots';
import { updateApplicant } from '@/lib/applicant-api';
import {
  applicantName,
  fetchAgentCourses,
  fetchAgentProfile,
  getStatusStyle,
  lookupApplicantByEmail,
  submitAgentApplication,
  type AgentCourse,
  type ApplicantLookup
} from '@/lib/portal';

/**
 * An agent applying on someone's behalf.
 *
 * The course and the student type are chosen first, because they decide which
 * form the applicant would have been given. Then the email settles how much
 * form there is left to fill in:
 *
 * | The email | What the agent does |
 * | --- | --- |
 * | already has a **complete** applicant | confirms them against the course - no form |
 * | already has an **unfinished** applicant | finishes their form, saved to their record |
 * | is new | fills the form in as a draft, written on submit |
 *
 * Only the last of those creates an account, and only that one sends a welcome
 * mail. The application mails are the same ones every application sends.
 */

// Only the chosen variant is ever loaded - each is a large form.
const HomeApplicationForm = dynamic(
  () =>
    import(
      '@/app/courses/[slug]/[id]/homestudent-application/home-application-form'
    ).then((m) => m.HomeApplicationForm),
  { ssr: false, loading: () => <FormLoading /> }
);

const InternationalApplicationForm = dynamic(
  () =>
    import(
      '@/app/courses/[slug]/[id]/internationalstudent-application/international-application-form'
    ).then((m) => m.InternationalApplicationForm),
  { ssr: false, loading: () => <FormLoading /> }
);

function FormLoading() {
  return (
    <div className="flex justify-center py-20">
      <BlinkingDots size="large" color="bg-watney" />
    </div>
  );
}

/** The same two options the public course page offers. */
const STUDENT_TYPES = [
  { label: 'Home Student', value: 'eu' },
  { label: 'Overseas', value: 'international' }
];

const STAGE_STEPS = ['Course & applicant', 'Application', 'Submitted'];

/** What has to be answered before we can go looking for the applicant. */
const detailsSchema = z.object({
  courseId: z.string().min(1, { message: 'Please select a course' }),
  studentType: z
    .string()
    .min(1, { message: 'Please select a student type' }),
  email: z
    .string()
    .min(1, { message: 'Applicant email is required' })
    .email({ message: 'Please enter a valid email address' })
});

type DetailsData = z.infer<typeof detailsSchema>;

const initialsOf = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'A';

type Stage = 'details' | 'confirm' | 'form' | 'done';

export default function AgentNewApplicationPage() {
  const router = useRouter();
  const { toast } = useToast();
  const agent = useSelector((state: any) => state.auth.user);
  const agentId = agent?._id;

  const [courses, setCourses] = useState<AgentCourse[]>([]);
  const [agentCode, setAgentCode] = useState('');
  const [loadingCourses, setLoadingCourses] = useState(true);

  // Both start undefined rather than empty: nothing has been chosen yet, and
  // the selects show their placeholder until something is.
  const [courseId, setCourseId] = useState<string | undefined>();
  const [studentType, setStudentType] = useState<string | undefined>();
  const [email, setEmail] = useState('');

  // The first stage is a real form: zod decides what is required, and the
  // messages land under the field that is missing rather than in a toast.
  const form = useForm<DetailsData>({
    resolver: zodResolver(detailsSchema),
    defaultValues: { courseId: '', studentType: '', email: '' }
  });

  const [stage, setStage] = useState<Stage>('details');
  const [checking, setChecking] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [lookup, setLookup] = useState<ApplicantLookup | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string>('');

  useEffect(() => {
    if (!agentId) return;
    let cancelled = false;

    (async () => {
      try {
        // The code travels with the courses: it is what the form pre-fills as
        // the referral, and the agent should never have to type their own.
        const [result, profile] = await Promise.all([
          fetchAgentCourses(agentId),
          fetchAgentProfile(agentId).catch(() => null)
        ]);

        if (!cancelled) {
          setCourses(result);
          setAgentCode(profile?.agentCode || '');
        }
      } catch (error) {
        console.error('Could not load your courses:', error);
        if (!cancelled) {
          toast({
            title: 'Could not load your courses',
            description: 'Please refresh the page and try again.',
            variant: 'destructive'
          });
        }
      } finally {
        if (!cancelled) setLoadingCourses(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [agentId, toast]);

  // While the first stage is open the choice lives in the form, so the panel
  // under the course select follows what is picked there.
  const pickedCourseId = form.watch('courseId') || courseId;

  const selectedCourse = useMemo(
    () => courses.find((course) => course.courseId?._id === pickedCourseId),
    [courses, pickedCourseId]
  );

  const courseNameOf = (id: string) =>
    courses.find((course) => course.courseId?._id === id)?.courseId?.name || '';

  const courseName = selectedCourse?.courseId?.name || '';
  const courseCode = selectedCourse?.courseId?.courseCode || '';
  const intakeName = selectedCourse?.courseId?.intakeId?.termName || '';
  const awardingBody = selectedCourse?.courseId?.awardingBodyId?.name || '';

  /**
   * The student type to show. An applicant who already told the college what
   * they are is reported as that; otherwise it is the agent's pick, which is
   * undefined until they make one.
   */
  const studentTypeLabel = (value?: string) =>
    STUDENT_TYPES.find((type) => type.value === value)?.label || '';

  /**
   * The variant the form opens in. An applicant who already told the college
   * what they are keeps that answer - the agent's choice only fills a gap.
   */
  const formVariant = lookup?.applicant?.studentType || studentType || 'eu';

  /**
   * The referral, pre-filled. An applicant an agent puts through was referred
   * by that agent, so the compliance step opens on "Agent" with the code
   * already in it rather than asking. Without the code there is nothing to
   * pre-fill - the step validates one against a real agent - so the agent
   * answers it themselves, and the API still records the referral on submit.
   */
  const referral = agentCode
    ? { hearAboutUs: 'agent', applicantAgentCode: agentCode, agentId }
    : {};

  /** Only reached once the schema is satisfied. */
  const handleContinue = async (data: DetailsData) => {
    const { courseId, studentType } = data;
    const email = data.email.trim();

    // The later stages read these off the page rather than the form.
    setCourseId(courseId);
    setStudentType(studentType);
    setEmail(email);

    setChecking(true);

    try {
      const result = await lookupApplicantByEmail(email);
      setLookup(result);

      if (result.exists && result.appliedCourseIds?.includes(courseId)) {
        toast({
          title: 'Already applied',
          description: `${applicantName(result.applicant)} already has an application for ${courseNameOf(courseId)}.`,
          variant: 'destructive'
        });
        return;
      }

      // A complete applicant is only confirmed - there is no form to fill.
      if (result.exists && !result.profileRequired) {
        setStage('confirm');
        return;
      }

      // An unfinished applicant has a record to save into. Their student type
      // is set from the agent's choice only when they have none of their own.
      if (result.exists && result.applicant && !result.applicant.studentType) {
        await updateApplicant(result.applicant._id, { studentType });
      }

      setStage('form');
    } catch (error: any) {
      console.error('Could not check that email:', error);
      toast({
        title: 'Could not check that email address',
        description:
          error?.response?.data?.message || 'Please try again in a moment.',
        variant: 'destructive'
      });
    } finally {
      setChecking(false);
    }
  };

  /** The confirm path: an existing applicant against a new course. */
  const handleConfirm = async () => {
    if (!lookup?.applicant) return;

    setSubmitting(true);

    try {
      const result = await submitAgentApplication({
        courseId,
        applicantId: lookup.applicant._id,
        // The email goes along with the id: it is what the API takes as proof
        // that this applicant was handed to the agent, not guessed at.
        applicant: { email: email.trim() }
      });
      setSubmittedRef(result?.application?.refId || '');
      setStage('done');
    } catch (error: any) {
      console.error('Could not submit the application:', error);
      toast({
        title: 'Could not submit the application',
        description:
          error?.response?.data?.message || 'Please try again in a moment.',
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * The form path. An existing record has been saved step by step and only
   * needs the application row; a draft is sent whole, and the account, the
   * application and the welcome mail all follow from it.
   */
  const handleFormSubmit = async ({
    applicantId,
    courseId: submittedCourseId,
    formData
  }: {
    applicantId?: string;
    courseId: string;
    formData: Record<string, any>;
  }) => {
    const result = await submitAgentApplication(
      applicantId
        ? {
            courseId: submittedCourseId,
            applicantId,
            applicant: { email: email.trim() }
          }
        : {
            courseId: submittedCourseId,
            applicant: {
              ...formData,
              email: email.trim(),
              // Set by the time the form can be submitted - Continue requires it.
              studentType
            }
          }
    );
    setSubmittedRef(result?.application?.refId || '');
  };

  const backToApplicants = () => router.push('/agent/applicants');

  const activeStep =
    stage === 'details' ? 1 : stage === 'done' ? 3 : 2;

  if (loadingCourses) {
    return <FormLoading />;
  }

  // ---------------------------------------------------------------- done
  if (stage === 'done') {
    return (
      <Shell
        title="Application submitted"
        subtitle="The applicant has been notified by email."
        activeStep={activeStep}
        onBack={backToApplicants}
        backLabel="Back to applicants"
      >
        <SubmittedCard
          applicant={applicantName(lookup?.applicant)}
          course={courseName}
          intake={intakeName}
          reference={submittedRef}
          onDone={backToApplicants}
        />
      </Shell>
    );
  }

  // ---------------------------------------------------------------- form
  if (stage === 'form') {
    const ApplicationForm =
      formVariant === 'international'
        ? InternationalApplicationForm
        : HomeApplicationForm;

    return (
      <Shell
        title={
          lookup?.exists
            ? `Finish ${applicantName(lookup.applicant)}'s application`
            : 'New applicant'
        }
        subtitle={
          lookup?.exists
            ? 'This applicant has an account but never finished their form. Every step is saved to their record as you go.'
            : 'Nothing is saved until you submit - the account and the application are created together.'
        }
        activeStep={activeStep}
        onBack={() => setStage('details')}
        summary={
          <SummaryBar
            course={courseName}
            code={courseCode}
            intake={intakeName}
            studentType={studentTypeLabel(formVariant)}
            email={email.trim()}
          />
        }
      >
        <ApplicationForm
          applicantId={lookup?.applicant?._id}
          courseId={courseId}
          initialData={
            lookup?.exists
              ? // An existing record keeps every answer it already has - the
                // referral only fills a gap.
                referral
              : { email: email.trim(), studentType, courseId, ...referral }
          }
          submitApplication={handleFormSubmit}
          onDone={backToApplicants}
          doneLabel="Back to applicants"
          successDescription={
            <span className="text-base text-black">
              The applicant has been sent their account details and the
              application confirmation.
            </span>
          }
          containerClassName="w-full"
        />
      </Shell>
    );
  }

  // ------------------------------------------------------------- confirm
  if (stage === 'confirm' && lookup?.applicant) {
    const name = applicantName(lookup.applicant);

    return (
      <Shell
        title="Confirm this applicant"
        subtitle="Their application form is already complete, so there is nothing to fill in again."
        activeStep={activeStep}
        onBack={() => setStage('details')}
      >
        <div className="mx-auto max-w-3xl space-y-5">
          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 px-6 py-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-watney/10 text-sm font-semibold text-watney">
                {initialsOf(name)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-semibold text-black">
                  {name}
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 truncate text-sm text-black">
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  {lookup.applicant.email}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                <Check className="h-3.5 w-3.5" />
                Profile complete
              </span>
            </div>

            {/* The course being submitted is the point of this screen, so it
                is the one thing the card leads on. */}
            <div className="px-6 py-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-black">
                Applying for
              </p>

              <div className="mt-3 rounded-xl border border-watney/20 bg-watney/5 px-5 py-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-lg font-semibold leading-snug text-black">
                      {courseName}
                    </p>
                    {awardingBody && (
                      <p className="mt-0.5 text-sm text-black">
                        {awardingBody}
                      </p>
                    )}
                  </div>
                  {courseCode && (
                    <span className="shrink-0 rounded-md border border-watney/20 bg-white px-2 py-1 text-xs font-semibold text-watney">
                      {courseCode}
                    </span>
                  )}
                </div>

                <dl className="mt-4 grid gap-4 border-t border-watney/15 pt-4 sm:grid-cols-2">
                  <PanelMeta label="Intake" value={intakeName || '-'} />
                  <PanelMeta
                    label="Student type"
                    value={
                      studentTypeLabel(
                        lookup.applicant.studentType || studentType
                      ) || 'Not stated'
                    }
                  />
                </dl>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-gray-100 bg-gray-50/70 px-6 py-4">
              <Button
                variant="ghost"
                onClick={() => setStage('details')}
                className=""
              >
                Change course
              </Button>
              <Button
                onClick={handleConfirm}
                disabled={submitting}
                className="min-w-[11rem] bg-watney text-white shadow-sm hover:bg-watney/90"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Submit application
                  </>
                )}
              </Button>
            </div>
          </section>

          {/* Reference only, and clearly separate: what this applicant already
              holds has nothing to do with the course being submitted, and
              reading as part of the same card made the two easy to confuse. */}
          {lookup.applications.length > 0 && (
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60">
              <div className="border-b border-gray-200 px-6 py-4">
                <p className="text-sm font-medium text-black">
                  Other applications on this account
                </p>
               
              </div>
              <ul className="divide-y divide-gray-200">
                {lookup.applications.map((application) => {
                  const status = getStatusStyle(application.status);
                  const course: any = application.courseId;
                  const intake: any = application.intakeId;
                  return (
                    <li
                      key={application._id}
                      className="flex items-center justify-between gap-3 px-6 py-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-black">
                          {course?.name || 'Course'}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-black">
                          {intake?.termName || 'Intake not set'}
                          {application.refId ? ` - ${application.refId}` : ''}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${status.className}`}
                      >
                        {status.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
        </div>
      </Shell>
    );
  }

  // ------------------------------------------------------------- details
  return (
    <Shell
      title="New application"
      subtitle="Choose the course and student type, then tell us who is applying."
      activeStep={activeStep}
      onBack={backToApplicants}
      backLabel="Back to applicants"
    >
      <div className="mx-auto max-w-3xl">
        {courses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
            <CircleAlert className="mx-auto h-8 w-8 text-black" />
            <p className="mt-3 font-medium text-black">
              No courses assigned yet
            </p>
            <p className="mt-1 text-sm text-black">
              Please contact the college before placing an application.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleContinue)}
              noValidate
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="space-y-6 px-6 py-6 md:px-8 md:py-7">
                <FormField
                  control={form.control}
                  name="courseId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-black">
                        Course <span className="text-red-500">*</span>
                      </FormLabel>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-watney">
                          <BookOpen className="h-4 w-4" />
                        </span>
                        <Select
                          value={field.value || undefined}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 pl-10">
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {courses.map((assignment) => (
                              <SelectItem
                                key={assignment._id}
                                value={assignment.courseId?._id || ''}
                              >
                                {assignment.courseId?.name}
                                {assignment.courseId?.intakeId?.termName
                                  ? ` - ${assignment.courseId.intakeId.termName}`
                                  : ''}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <FormDescription className="text-xs text-black">
                        Only the courses assigned to you can be applied for.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedCourse && (
                  <div className="grid gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
                    <Tile label="Course code" value={courseCode || '-'} />
                    <Tile label="Intake" value={intakeName || '-'} />
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="studentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-black">
                        Student type <span className="text-red-500">*</span>
                      </FormLabel>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-watney">
                          <MapPin className="h-4 w-4" />
                        </span>
                        {/* Undefined until it is picked, so the placeholder is
                            what shows rather than an empty field. */}
                        <Select
                          value={field.value || undefined}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-11 pl-10">
                              <SelectValue placeholder="Select student type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {STUDENT_TYPES.map(({ label, value }) => (
                              <SelectItem key={value} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <FormDescription className="text-xs text-black">
                        This decides which application form a new applicant is
                        given.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-black">
                        Applicant email <span className="text-red-500">*</span>
                      </FormLabel>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-watney">
                          <Mail className="h-4 w-4" />
                        </span>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="name@example.com"
                            className="h-11 pl-10"
                          />
                        </FormControl>
                      </div>
                      <FormDescription className="text-xs text-black">
                        An email we already hold only needs confirming - there
                        is no form to fill in twice.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50/70 px-6 py-4 md:px-8">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={backToApplicants}
                  className="text-black hover:text-black"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={checking}
                  className="min-w-[9rem] bg-watney text-white shadow-sm hover:bg-watney/90"
                >
                  {checking ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Checking
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Continue
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </Shell>
  );
}

/** Page frame: heading, the back button, and the three step markers. */
function Shell({
  title,
  subtitle,
  activeStep,
  onBack,
  backLabel = 'Back',
  summary,
  children
}: {
  title: string;
  subtitle: string;
  activeStep: number;
  onBack: () => void;
  backLabel?: string;
  summary?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-watney">
            Agent portal
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-black">
            {title}
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-black">
            {subtitle}
          </p>
        </div>
        <Button onClick={onBack} className="shrink-0 self-start shadow-sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {backLabel}
        </Button>
      </div>


      {summary}

      {children}
    </div>
  );
}



/** What has been chosen so far, carried across the later stages. */
/**
 * The course being applied for, held in view while the agent walks the form.
 * It leads on the course - that is what is being submitted - and carries the
 * rest beside it as labelled columns.
 */
function SummaryBar({
  course,
  code,
  intake,
  studentType,
  email
}: {
  course: string;
  code?: string;
  intake?: string;
  studentType?: string;
  email?: string;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-watney/10 text-watney">
            <GraduationCap className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-black">
              Applying for
            </p>
            <p className="mt-0.5 flex items-center gap-2 text-sm font-semibold text-black">
              <span className="truncate">{course || 'Course'}</span>
              {code && (
                <span className="shrink-0 rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] font-medium text-black">
                  {code}
                </span>
              )}
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-gray-100 pt-4 sm:grid-cols-3 lg:flex lg:items-center lg:gap-0 lg:divide-x lg:divide-gray-200 lg:border-0 lg:pt-0">
          {intake && <Meta label="Intake" value={intake} />}
          {studentType && <Meta label="Student type" value={studentType} />}
          {email && <Meta label="Applicant" value={email} />}
        </dl>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 lg:px-5 lg:first:pl-0 lg:last:pr-0">
      <dt className="text-[11px] uppercase tracking-wide text-black">
        {label}
      </dt>
      <dd className="mt-0.5 truncate text-sm font-medium text-black">
        {value}
      </dd>
    </div>
  );
}

/** A labelled value inside the "Applying for" panel. */
function PanelMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-wide text-black">
        {label}
      </dt>
      <dd className="mt-0.5 truncate text-sm font-medium text-black">
        {value}
      </dd>
    </div>
  );
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white px-4 py-3">
      <p className="text-[11px] uppercase tracking-wide text-black">
        {label}
      </p>
      <p className="mt-0.5 truncate text-sm font-medium text-black">
        {value}
      </p>
    </div>
  );
}

function SubmittedCard({
  applicant,
  course,
  intake,
  reference,
  onDone
}: {
  applicant: string;
  course: string;
  intake?: string;
  reference?: string;
  onDone: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="h-1.5 w-full bg-watney" />
      <div className="flex flex-col items-center gap-5 px-8 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-watney ring-8 ring-watney/10">
          <Check size={30} className="text-white" strokeWidth={3} />
        </div>
        <div>
          <p className="text-xl font-semibold text-black">
            Application submitted
          </p>
          <p className="mt-2 text-sm leading-relaxed text-black">
            <span className="font-medium text-black">{applicant}</span> has
            been applied to {course}
            {intake ? ` for ${intake}` : ''}.
          </p>
        </div>

        {reference && (
          <div className="w-full rounded-xl border border-gray-100 bg-gray-50 px-5 py-3">
            <p className="text-[11px] uppercase tracking-wide text-black">
              Reference
            </p>
            <p className="mt-0.5 font-mono text-sm font-medium text-black">
              {reference}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end border-t border-gray-100 bg-gray-50/70 px-6 py-4">
        <Button
          onClick={onDone}
          className="bg-watney text-white shadow-sm hover:bg-watney/90"
        >
          Back to applicants
        </Button>
      </div>
    </div>
  );
}
