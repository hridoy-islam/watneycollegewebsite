'use client';

/**
 * One offer letter, inside the applicant dashboard.
 *
 * The portal layout above this route already wraps it in `ProtectedRoute` and
 * the portal shell, so the letter arrives signed in, with the dashboard nav
 * around it. The API it reads is authenticated and ownership checked as well,
 * so the guard is not the only thing standing between an offer and a stranger.
 */

import { useParams } from 'next/navigation';
import { OfferLetterView } from '@/components/dashboard/applicant/offer-letter-view';

export default function OfferLetterDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  return <OfferLetterView applicationId={id || ''} />;
}
