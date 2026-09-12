'use client';

import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import LoginForm from '@/components/auth/login-form';
import AuthShell from '@/components/auth/auth-shell';
import { getRoleHomePath } from '@/components/auth/roles';
import { BlinkingDots } from '@/components/blinking-dots';

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect');
  const user = useSelector((state: any) => state.auth.user);

  // Already logged in - nothing to do here.
  useEffect(() => {
    if (user) {
      router.replace(redirectTo || getRoleHomePath(user.role));
    }
  }, [user, redirectTo, router]);

  if (user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BlinkingDots size="large" color="bg-watney" />
      </div>
    );
  }

  const signUpHref = redirectTo
    ? `/signup?redirect=${encodeURIComponent(redirectTo)}`
    : '/signup';

  return (
    <AuthShell
      eyebrow="Welcome back"
      headline="Sign in to your application"
      blurb="Pick up where you left off, upload the documents we still need and follow your offer - all in one place."
      title="Applicant sign in"
      subtitle="Use the email address and password you registered with."
      footer={
        <>
          <p>
            Don&apos;t have an account?{' '}
            <Link
              href={signUpHref}
              className="font-medium text-watney hover:underline"
            >
              Create one
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/forgot-password"
              className="text-black hover:underline"
            >
              Forgot your password?
            </Link>
          </p>
          {/* Agents authenticate on their own unlisted route - never link to
              it from a public page, just say the login lives elsewhere. */}
         
        </>
      }
    >
      <LoginForm role="applicant" />
    </AuthShell>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
