'use client';

/**
 * The offer letter from the public link in the offer letter email.
 *
 * No sign in: the token in the URL is what identifies the offer, and it is
 * random and replaced every time the offer letter is sent again, so the URL
 * says nothing about the applicant and cannot be guessed. The same offer can
 * still be answered from the applicant dashboard
 * (`/dashboard/offer-letter/[id]`).
 */

import { useParams } from 'next/navigation';
import { OfferLetterView } from '@/components/dashboard/applicant/offer-letter-view';

export default function OfferResponsePage() {
  const params = useParams();
  const token = Array.isArray(params?.token) ? params.token[0] : params?.token;

  return <OfferLetterView token={token || ''} />;
}
