'use client';

import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  applicantName,
  formatDate,
  getStatusStyle,
  type AgentApplicant,
  type PortalApplication
} from '@/lib/portal';

const courseName = (application: PortalApplication) => {
  const course: any = application.courseId;
  return (typeof course === 'object' && course?.name) || 'Course';
};

const intakeName = (application: PortalApplication) => {
  const intake: any = application.intakeId;
  return (typeof intake === 'object' && intake?.termName) || '';
};

/**
 * The agent's applicants. One row each, carrying the status of every course
 * that applicant applied for; the row opens their record.
 */
export function ApplicantList({
  applicants
}: {
  applicants: AgentApplicant[];
}) {
  const router = useRouter();

  const open = (id: string) => router.push(`/agent/applicants/${id}`);

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead>Applicant</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Applications</TableHead>
              <TableHead>Added</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {applicants.map((applicant) => (
              <TableRow
                key={applicant._id}
                onClick={() => open(applicant._id)}
                // A row is a link: keyboard users get the same thing.
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    open(applicant._id);
                  }
                }}
                className="cursor-pointer align-top focus:outline-none focus-visible:bg-gray-50"
              >
                <TableCell>
                  <p className="font-medium text-gray-900">
                    {applicantName(applicant)}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {applicant.email || '-'}
                  </p>
                  {!applicant.isCompleted && (
                    <span className="mt-1.5 inline-block rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                      Form unfinished
                    </span>
                  )}
                </TableCell>

                <TableCell className="text-gray-700">
                  {applicant.phone || '-'}
                </TableCell>

                <TableCell className="text-gray-700">
                  {applicant.studentType === 'international'
                    ? 'Overseas'
                    : applicant.studentType
                      ? 'Home Student'
                      : '-'}
                </TableCell>

                <TableCell className="align-top">
  {applicant.applications?.length ? (
    <div className="space-y-1">
      {applicant.applications.map((application) => {
        const status = getStatusStyle(application.status);
        const intake = intakeName(application);

        return (
          <div
            key={application._id}
            className="flex items-center gap-2 text-sm"
          >
            <span className="font-medium text-gray-800">
              {courseName(application)}
              {intake && (
                <>
                  <span className="mx-1 text-gray-400">-</span>
                  <span className="font-medium text-gray-800">
                    {intake}
                  </span>
                </>
              )}
            </span>

            <span
              className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${status.className}`}
            >
              {status.label}
            </span>
          </div>
        );
      })}
    </div>
  ) : (
    <span className="text-sm text-gray-400">
      No application
    </span>
  )}
</TableCell>

                <TableCell className="whitespace-nowrap text-gray-700">
                  {formatDate(applicant.createdAt)}
                </TableCell>

                <TableCell>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ApplicantList;
