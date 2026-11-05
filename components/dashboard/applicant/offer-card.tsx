import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CircleSlash,
  Clock,
  FileText,
  Hash
} from 'lucide-react';
import { DetailTile } from '@/components/dashboard/detail-tile';
import {
  formatDate,
  getCourseName,
  getIntakeName,
  type PortalApplication
} from '@/lib/portal';

/** How the applicant answered - or has yet to answer - the offer. */
const offerResponse = (application: PortalApplication) => {
  if (application.offerStatus === 'accepted') {
    return {
      label: 'Offer accepted',
      icon: BadgeCheck,
      className: 'border-emerald-200 bg-emerald-50 text-emerald-700'
    };
  }
  if (application.offerStatus === 'rejected') {
    return {
      label: 'Offer declined',
      icon: CircleSlash,
      className: 'border-red-200 bg-red-50 text-red-700'
    };
  }
  return {
    label: 'Awaiting your response',
    icon: Clock,
    className: 'border-amber-200 bg-amber-50 text-amber-700'
  };
};

/** One issued offer on the applicant's Offer Letter page. */
export function OfferCard({ application }: { application: PortalApplication }) {
  const response = offerResponse(application);
  const ResponseIcon = response.icon;
  const intake = getIntakeName(application);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-3 border-b border-gray-100 bg-gray-50 px-5 py-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-watney/20 bg-watney/10 text-watney">
            <FileText className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-gray-900">
              {getCourseName(application)}
            </h2>
            <p className="mt-0.5 text-xs capitalize text-gray-500">
              {application.offerType} offer
            </p>
          </div>
        </div>
        <span
          className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${response.className}`}
        >
          <ResponseIcon className="h-3.5 w-3.5" />
          {response.label}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-2">
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

      {/* The offer is read and answered inside the dashboard - there is no
          public link to it any more. */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 px-5 py-3">
        <p className="text-xs text-gray-600">
          {!application.offerStatus || application.offerStatus === 'pending'
            ? 'Open your offer letter to accept or decline.'
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
    </div>
  );
}

export default OfferCard;
