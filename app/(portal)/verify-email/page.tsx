'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import VerifyEmail from '@/components/auth/verify-email';
import { getRoleHomePath, isWebsiteAccount } from '@/components/auth/roles';
import { BlinkingDots } from '@/components/blinking-dots';

const loader = (
  <div className="flex min-h-screen items-center justify-center">
    <BlinkingDots size="large" color="bg-watney" />
  </div>
);

/**
 * Where an applicant or job applicant lands after logging in with an email
 * address they have not confirmed yet. The portal stays shut until they do:
 * verifying swaps the stored user for one with `isValided: true`, and this
 * page then forwards them to their dashboard (or wherever they were heading).
 */
function VerifyEmailPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect');
  const user = useSelector((state: any) => state.auth.user);

  const needsVerifying =
    !!user && isWebsiteAccount(user.role) && user.isValided === false;

  useEffect(() => {
    if (!user) {
      router.replace('/login');
      return;
    }
    if (!needsVerifying) {
      router.replace(redirectTo || getRoleHomePath(user.role));
    }
  }, [user, needsVerifying, redirectTo, router]);

  if (!needsVerifying) return loader;

  return <VerifyEmail user={user} />;
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={loader}>
      <VerifyEmailPageContent />
    </Suspense>
  );
}
