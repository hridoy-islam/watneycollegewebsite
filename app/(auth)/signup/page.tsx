'use client';

import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import AuthShell from '@/components/auth/auth-shell';
import RegistrationForm from '@/components/auth/registration-form';
import { getRoleHomePath } from '@/components/auth/roles';
import { BlinkingDots } from '@/components/blinking-dots';

function SignUpPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect');
  const user = useSelector((state: any) => state.auth.user);

  // Signed in already - there is nothing to register.
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

  const loginHref = redirectTo
    ? `/login?redirect=${encodeURIComponent(redirectTo)}`
    : '/login';

  return (
    <AuthShell
      wide
      eyebrow="Start your application"
      headline="Create your student account"
      blurb="Your email address is your username. Make a note of it and your password - you will need them to log back in and finish your application."
      title="Create an account"
      subtitle="Tell us who you are. You can complete the rest of the application after signing in."
      footer={
        <p>
          Already have an account?{' '}
          <Link
            href={loginHref}
            className="font-medium text-watney hover:underline"
          >
            Sign in
          </Link>
        </p>
      }
    >
      {/* Registration never signs the applicant in - they log in with the
          credentials they just chose, keeping the redirect intact. */}
      <RegistrationForm onSuccess={() => router.push(loginHref)} />
    </AuthShell>
  );
}

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      }
    >
      <SignUpPageContent />
    </Suspense>
  );
}
