'use client';

/**
 * The old public offer link, kept only to forward it on.
 *
 * The offer letter lives inside the applicant dashboard now
 * (`/dashboard/offer-letter/[id]`), behind the portal's login guard. Mails
 * already in people's inboxes still point here, in two shapes:
 *
 *   /offer-page?application=<id>                        the last shape
 *   /offer-page?<name>&<email>&<dob>&…&<id>&<type>&…     the original
 *
 * The original carried the applicant's name, email address and date of birth
 * in the query string, which is most of why this route no longer serves
 * anything. Both are read for the application id and forwarded; anyone not
 * signed in is picked up by the dashboard's own guard on arrival.
 */

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { BlinkingDots } from '@/components/blinking-dots';

/** The application id, whichever shape the old link used. */
const readApplicationId = (params: URLSearchParams) => {
  const named = params.get('application') || params.get('id');
  if (named) return named;

  // The original link had eight unnamed parameters with the id sixth.
  const legacy = Array.from(params.keys())[5];
  const decoded = legacy ? decodeURIComponent(legacy) : '';
  return /^[a-f\d]{24}$/i.test(decoded) ? decoded : '';
};

function OfferPageRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = readApplicationId(new URLSearchParams(searchParams.toString()));

    // Without a usable id there is nothing to open, so send them to the list -
    // every offer they hold is on it.
    router.replace(id ? `/dashboard/offer-letter/${id}` : '/dashboard/offer-letter');
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <BlinkingDots size="large" color="bg-watney" />
        <p className="text-sm text-black">Taking you to your offer letter...</p>
      </div>
    </div>
  );
}

export default function OfferPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      }
    >
      <OfferPageRedirect />
    </Suspense>
  );
}
