'use client';

import { BlinkingDots } from '@/components/blinking-dots';
import { EmptyState } from '@/components/dashboard/empty-state';
import { OfferCard } from '@/components/dashboard/applicant/offer-card';
import { usePortalApplications } from '@/components/dashboard/use-portal-applications';
import { fetchApplicantApplications, hasOffer } from '@/lib/portal';

export default function OfferLetterPage() {
  const { applications, isLoading, loadFailed } = usePortalApplications(
    fetchApplicantApplications
  );

  const offers = applications.filter(hasOffer);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          Offer Letter
        </h1>
        <p className="mt-1 text-sm text-black">
          Every offer the college has issued on your applications.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      ) : loadFailed ? (
        <EmptyState
          title="We could not load your offers"
          description="Please refresh the page and try again in a moment."
        />
      ) : offers.length === 0 ? (
        <EmptyState
          title="No offer letters yet"
          description="When the admissions team issues an offer on one of your applications it will appear here."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {offers.map((application) => (
            <OfferCard key={application._id} application={application} />
          ))}
        </div>
      )}
    </div>
  );
}
