'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  FileText,
  Hash,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlinkingDots } from '@/components/blinking-dots';
import { EmptyState } from '@/components/dashboard/empty-state';
import { fetchApplicant } from '@/lib/applicant-api';
import {
  applicantName,
  fetchApplicantApplications,
  formatDate,
  getStatusStyle,
  hasOffer,
  type PortalApplication
} from '@/lib/portal';

/**
 * One applicant, open for the agent to read.
 *
 * The tabs are filled by the applicant's **own** application form - home or
 * international, chosen from `studentType` - so the fields and the values are
 * the ones that student answered, not a second set written for this page.
 *
 * The agent reads; they do not write. This page holds no save handler and
 * never calls `updateApplicant`, so the record cannot be changed from here
 * even if a step were to find its way past the disabled fieldset.
 */

// This route owns its steps outright - nothing here reaches into the public
// application form, so the two can move apart without breaking each other.
const ApplicantEditor = dynamic(
  () => import('./components/applicant-editor').then((m) => m.ApplicantEditor),
  { ssr: false, loading: () => <Loading /> }
);

function Loading() {
  return (
    <div className="flex justify-center py-20">
      <BlinkingDots size="large" color="bg-watney" />
    </div>
  );
}

/** Where the offer for one application has got to. */
const offerLabel = (application: PortalApplication) => {
  if (!hasOffer(application)) return 'Not issued';
  if (application.offerStatus === 'accepted') return 'Accepted';
  if (application.offerStatus === 'rejected') return 'Declined';
  return 'Awaiting response';
};

export default function AgentApplicantDetailPage() {
  const router = useRouter();
  const params = useParams();
  const applicantId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const [applicant, setApplicant] = useState<any>(null);
  const [applications, setApplications] = useState<PortalApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!applicantId) return;
    let cancelled = false;

    (async () => {
      try {
        const [record, courses] = await Promise.all([
          fetchApplicant(applicantId),
          fetchApplicantApplications(applicantId).catch(() => [])
        ]);

        if (!cancelled) {
          setApplicant(record);
          setApplications(courses);
        }
      } catch (error) {
        console.error('Could not load this applicant:', error);
        if (!cancelled) setLoadFailed(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [applicantId]);

  if (loading) return <Loading />;

  if (loadFailed || !applicant?._id) {
    return (
      <div className="space-y-5">
        <Button onClick={() => router.push('/agent/applicants')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to applicants
        </Button>
        <EmptyState
          title="We could not load this applicant"
          description="They may have been removed, or the connection dropped. Please try again."
        />
      </div>
    );
  }

  const name = applicantName(applicant);
  const isInternational = applicant.studentType === 'international';

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-watney">
            Applicant
          </p>
          <h1 className="mt-1 truncate text-2xl font-semibold tracking-tight text-black">
            {name}
          </h1>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-black">
            {applicant.email && (
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" />
                {applicant.email}
              </span>
            )}
            {applicant.phone && (
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                {applicant.phone}
              </span>
            )}
            <span className="rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs font-medium text-black">
              {isInternational ? 'Overseas' : 'Home Student'}
            </span>
            {!applicant.isCompleted && (
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                Form unfinished
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={() => router.push('/agent/applicants')}
          className="shrink-0 self-start shadow-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to applicants
        </Button>
      </div>

      <ApplicantEditor
        applicant={applicant}
        courses={<CoursesTab applications={applications} />}
      />
    </div>
  );
}

/** The application courses this applicant holds, one card each. */
function CoursesTab({
  applications
}: {
  applications: PortalApplication[];
}) {
  if (applications.length === 0) {
    return (
      <EmptyState
        title="No applications yet"
        description="Courses this applicant applies for will be listed here."
      />
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {applications.map((application) => {
        const status = getStatusStyle(application.status);
        const course: any = application.courseId;
        const intake: any = application.intakeId;

        return (
          <article
            key={application._id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* The accent picks up the status, so a card reads at a glance. */}
            <div
              className={`h-1 w-full ${
                application.status === 'enrolled'
                  ? 'bg-emerald-500'
                  : application.status === 'rejected'
                    ? 'bg-red-400'
                    : application.status === 'cancelled'
                      ? 'bg-gray-300'
                      : 'bg-watney'
              }`}
            />

            <div className="flex items-start justify-between gap-3 px-5 pt-4">
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold leading-snug text-black">
                  {course?.name || 'Course'}
                </h3>
                {course?.courseCode && (
                  <span className="mt-1 inline-block rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] font-medium text-black">
                    {course.courseCode}
                  </span>
                )}
              </div>

              <span
                className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${status.className}`}
              >
                {status.label}
              </span>
            </div>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-4">
              <Detail
                label="Intake"
                value={intake?.termName || 'Not set'}
                icon={<CalendarDays className="h-3.5 w-3.5" />}
              />
              <Detail
                label="Reference"
                value={application.refId || '-'}
                icon={<Hash className="h-3.5 w-3.5" />}
                mono
              />
              <Detail
                label="Applied"
                value={formatDate(application.createdAt)}
                icon={<Clock className="h-3.5 w-3.5" />}
              />
              <Detail
                label="Offer"
                value={offerLabel(application)}
                icon={<FileText className="h-3.5 w-3.5" />}
              />
            </dl>
          </article>
        );
      })}
    </div>
  );
}

function Detail({
  label,
  value,
  icon,
  mono = false
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="min-w-0">
      <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-black">
        {icon}
        {label}
      </dt>
      <dd
        className={`mt-0.5 truncate text-sm font-medium text-black ${
          mono ? 'font-mono' : ''
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
