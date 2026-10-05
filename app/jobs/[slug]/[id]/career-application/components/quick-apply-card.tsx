'use client';

import Link from 'next/link';
import moment from 'moment';
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuickApplyCardProps {
  job: any;
  /** The applicant's saved profile - what will be sent with the application. */
  profile: any;
  alreadyApplied: boolean;
  submitting: boolean;
  onSubmit: () => void;
}

function Fact({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value?: string;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

/**
 * Applying for another job with a profile that is already complete. Nothing
 * needs filling in again, so the page is a confirmation: the role, the
 * profile that will be sent with it, and the submit button.
 */
export default function QuickApplyCard({
  job,
  profile,
  alreadyApplied,
  submitting,
  onSubmit
}: QuickApplyCardProps) {
  const jobDetail: string = job?.jobDetail || job?.description || '';

  const deadline = job?.applicationDeadline
    ? moment(job.applicationDeadline).format('DD MMM YYYY')
    : undefined;

  const name =
    profile?.name ||
    [profile?.title, profile?.firstName, profile?.lastName]
      .filter(Boolean)
      .join(' ');

  const initials =
    [profile?.firstName, profile?.lastName]
      .filter(Boolean)
      .map((part: string) => part[0])
      .join('')
      .toUpperCase() || 'A';

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
        {/* Role */}
        <div className="bg-watney px-6 py-8 sm:px-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
            <Briefcase className="h-3.5 w-3.5" />
            {alreadyApplied ? 'Application received' : 'Quick apply'}
          </span>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {job?.jobTitle || 'Job application'}
          </h1>
          {jobDetail && (
            // The job description from the admin's rich text editor - the
            // same HTML the jobs list renders. Tailwind's reset strips list
            // and heading styles, so they are put back for the white-on-brand
            // header.
            <div
              className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90 [&_a]:underline [&_h1]:mb-2 [&_h1]:mt-4 [&_h1]:text-lg [&_h1]:font-semibold [&_h1]:text-white [&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mb-1.5 [&_h3]:mt-4 [&_h3]:font-semibold [&_h3]:text-white [&_li]:mb-1 [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: jobDetail }}
            />
          )}

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Fact icon={Briefcase} label="Contract" value={job?.type} />
            <Fact icon={MapPin} label="Location" value={job?.location} />
            <Fact icon={Clock} label="Hours" value={job?.hours} />
            <Fact icon={CalendarDays} label="Closing date" value={deadline} />
          </div>
        </div>

        {/* Who is applying */}
        <div className="px-6 py-8 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-watney">
                Applying as
              </p>
              <h2 className="mt-1 text-lg font-semibold text-black">
                {alreadyApplied
                  ? 'You have already applied for this role'
                  : 'Your saved profile will be submitted'}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              <ShieldCheck className="h-3.5 w-3.5" />
              Profile complete
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-5 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 sm:flex-row sm:items-center">
            {profile?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.image}
                alt={name || 'Applicant'}
                className="h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-white"
              />
            ) : (
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-watney text-lg font-semibold text-white ring-4 ring-white">
                {initials}
              </span>
            )}

            <div className="min-w-0 flex-1">
              <p className="truncate text-base font-semibold text-black">
                {name || '-'}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {profile?.email && (
                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs text-black">
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{profile.email}</span>
                  </span>
                )}
                {profile?.phone && (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs text-black">
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    {profile.phone}
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-black">
            {alreadyApplied
              ? 'Our HR team has your application and will be in touch. You can follow its progress from your dashboard.'
              : 'There is nothing to fill in again - we will send the details from your completed profile with this application.'}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-4 border-t border-gray-200 bg-gray-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="text-xs text-black">
            {alreadyApplied
              ? 'Thank you for your interest in Watney College.'
              : 'By submitting, you confirm the details in your profile are accurate and up to date.'}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/job-dashboard">
              <Button variant="outline" className="h-11 w-full  px-6 sm:w-auto">
                Go to dashboard
              </Button>
            </Link>
            {!alreadyApplied && (
              <Button
                onClick={onSubmit}
                disabled={submitting}
                className="h-11 gap-2 bg-watney px-6 text-white hover:bg-watney/90"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
                {submitting ? 'Submitting...' : 'Submit application'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
