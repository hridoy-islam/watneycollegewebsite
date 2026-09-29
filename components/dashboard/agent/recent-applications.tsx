import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  applicantName,
  formatDate,
  getCourseName,
  getStatusStyle,
  type PortalApplication
} from '@/lib/portal';

/** The latest applications made under the agent's code. */
export function RecentApplications({
  applications
}: {
  applications: PortalApplication[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Recent applications
          </h2>
          <p className="text-xs text-gray-500">
            The latest applications made under your agent code.
          </p>
        </div>
        <Link href="/agent/applicants">
          <Button size="sm" className="border-gray-300">
            View all
          </Button>
        </Link>
      </div>

      {applications.length === 0 ? (
        <p className="px-5 py-10 text-center text-sm text-gray-500">
          No applications have been made under your agent code yet.
        </p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {applications.map((application) => {
            const status = getStatusStyle(application.status);
            return (
              <li
                key={application._id}
                className="flex flex-col gap-2 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {applicantName(application.applicantId)}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {getCourseName(application)} ·{' '}
                    {formatDate(application.createdAt)}
                  </p>
                </div>
                <span
                  className={`w-fit shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${status.className}`}
                >
                  {status.label}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default RecentApplications;
