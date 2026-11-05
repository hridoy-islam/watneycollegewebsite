'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  MapPin,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlinkingDots } from '@/components/blinking-dots';
import { EmptyState } from '@/components/dashboard/empty-state';
import { DetailTile } from '@/components/dashboard/detail-tile';
import { formatDate } from '@/lib/portal';
import {
  fetchJobApplicant,
  fetchMyJobApplications,
  getCareerApplicationPath,
  type JobPortalApplication
} from '@/lib/job-applicant-api';

const STATUS_STYLES: Record<string, { label: string; className: string }> = {
  incomplete: {
    label: 'Incomplete',
    className: 'border-amber-200 bg-amber-50 text-amber-700'
  },
  applied: {
    label: 'Under review',
    className: 'border-blue-200 bg-blue-50 text-blue-700'
  },
  recruit: {
    label: 'Recruited',
    className: 'border-green-200 bg-green-50 text-green-700'
  },
  rejected: {
    label: 'Rejected',
    className: 'border-red-200 bg-red-50 text-red-700'
  }
};

const jobOf = (application: JobPortalApplication) =>
  typeof application.jobId === 'object' ? application.jobId : undefined;

function JobApplicationCard({
  application,
  completeHref,
  resumeStep
}: {
  application: JobPortalApplication;
  /** Set while the career form is unfinished - links back into it. */
  completeHref?: string;
  resumeStep?: number;
}) {
  const job = jobOf(application);
  const status = completeHref
    ? STATUS_STYLES.incomplete
    : STATUS_STYLES[application.status || 'applied'] || STATUS_STYLES.applied;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-gray-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-watney/20 bg-watney/10 text-watney">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-gray-900">
              {job?.jobTitle || 'Job'}
            </h2>
            <p className="mt-0.5 text-xs text-black">
              Applied {formatDate(application.createdAt)}
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <DetailTile icon={MapPin} label="Location" value={job?.location || '-'} />
        <DetailTile
          icon={CalendarDays}
          label="Closing date"
          value={formatDate(job?.applicationDeadline)}
        />
      </div>

      <div className="mt-1 border-t border-gray-100 py-3">
        {completeHref ? (
          <div className="flex flex-wrap items-center justify-end gap-3">
           
            <Link
              href={completeHref}
              className="inline-flex items-center gap-1.5 rounded-md bg-watney px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-watney/90"
            >
              Complete the application
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : (
          <p className="text-xs text-black">
            {application.status === 'recruit'
              ? 'Congratulations - our HR team will be in touch about next steps.'
              : application.status === 'rejected'
                ? 'Thank you for your interest. This application was not taken forward.'
                : 'Our HR team is reviewing your application.'}
          </p>
        )}
      </div>
    </div>
  );
}

export default function JobApplicantDashboardPage() {
  const user = useSelector((state: any) => state.auth.user);

  const [applications, setApplications] = useState<JobPortalApplication[]>([]);
  // Read from the record rather than the token: the token's flags are only as
  // fresh as the last login.
  const [profile, setProfile] = useState<{
    isCompleted: boolean;
    applicationStep?: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!user?._id) return;
    let cancelled = false;

    Promise.all([fetchMyJobApplications(), fetchJobApplicant(user._id)])
      .then(([rows, applicant]) => {
        if (cancelled) return;
        setApplications(rows);
        setProfile({
          isCompleted: Boolean(applicant?.isCompleted),
          applicationStep: applicant?.applicationStep
        });
      })
      .catch((error) => {
        console.error('Could not load job applications:', error);
        if (!cancelled) setLoadFailed(true);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [user?._id]);

  /**
   * While the career form is unfinished, every application links back into it
   * - the form resumes on the step the applicant reached, whichever job it was
   * opened from.
   */
  const getCompleteHref = (application: JobPortalApplication) => {
    if (!profile || profile.isCompleted) return undefined;
    const job = jobOf(application);
    if (!job?._id) return undefined;
    return getCareerApplicationPath(job.slug || 'apply', job._id);
  };

  const firstIncomplete =
    profile && !profile.isCompleted
      ? applications.find((application) => getCompleteHref(application))
      : undefined;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            Welcome back, {user?.name}
          </h1>
          <p className="mt-1 text-sm text-black">
            Your job applications and where each one has got to.
          </p>
        </div>
        <Link href="/jobs">
          <Button className="w-full gap-1.5 bg-watney text-white hover:bg-watney/90 sm:w-auto">
            <Search className="h-4 w-4" />
            Browse jobs
          </Button>
        </Link>
      </div>

      {firstIncomplete && (
        <div className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-amber-800">
              Finish your application form
            </p>
            <p className="mt-0.5 text-xs text-amber-700">
              HR will not see your applications until the form is submitted.
              
            </p>
          </div>
          <Link href={getCompleteHref(firstIncomplete)!}>
            <Button className="w-full gap-1.5 bg-watney text-white hover:bg-watney/90 sm:w-auto">
              Continue application
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center py-16">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      ) : loadFailed ? (
        <EmptyState
          title="We could not load your applications"
          description="Please refresh the page and try again in a moment."
        />
      ) : applications.length === 0 ? (
        <EmptyState
          title="No job applications yet"
          description="Once you apply for a job it will show up here with its status."
          action={
            <Link href="/jobs">
              <Button className="mt-4 bg-watney text-white hover:bg-watney/90">
                Browse jobs
              </Button>
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {applications.map((application) => (
            <JobApplicationCard
              key={application._id}
              application={application}
              completeHref={getCompleteHref(application)}
              resumeStep={profile?.applicationStep}
            />
          ))}
        </div>
      )}
    </div>
  );
}
