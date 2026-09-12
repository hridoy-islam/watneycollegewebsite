import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, Hash } from 'lucide-react';
import { DetailTile } from '@/components/dashboard/detail-tile';
import {
  formatDate,
  getCourseName,
  getIntakeName,
  getStatusStyle,
  hasOffer,
  type PortalApplication
} from '@/lib/portal';

/** One course application on the applicant dashboard. */
export function ApplicationCard({
  application
}: {
  application: PortalApplication;
}) {
  const status = getStatusStyle(application.status);
  const intake = getIntakeName(application);
  const offerIssued = hasOffer(application);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-gray-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-watney/20 bg-watney/10 text-watney">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-gray-900">
              {getCourseName(application)}
            </h2>
            <p className="mt-0.5 text-xs text-gray-500">
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
        <DetailTile
          icon={Hash}
          label="Reference"
          value={application.refId || '-'}
        />
        <DetailTile
          icon={CalendarDays}
          label="Intake"
          value={intake || 'To be confirmed'}
        />
      </div>

      {/*
        Only an application the college has actually made an offer on gets the
        offer row. `offerStatus` is no answer to that - it is 'pending' from
        the moment the application is created - so the offer itself
        (`offerType`, via `hasOffer`) is what decides.
      */}
      {offerIssued ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 py-3">
          <p className="text-xs font-semibold">
            {!application.offerStatus || application.offerStatus === 'pending'
              ? 'An offer letter has been issued for this application.'
              : `Responded ${formatDate(application.offerRespondedAt)}`}
          </p>
          <Link
            href={`/dashboard/offer-letter/${application._id}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-watney px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-watney/90"
          >
            {!application.offerStatus || application.offerStatus === 'pending'
              ? 'View & respond'
              : 'View offer letter'}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : (
        <div className="border-t border-gray-100 py-3">
          <p className="text-xs text-gray-500">
            No offer letter has been issued yet.
          </p>
        </div>
      )}
    </div>
  );
}

export default ApplicationCard;
