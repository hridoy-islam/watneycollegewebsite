'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { CheckCircle2, LogIn } from 'lucide-react';
import AuthShell from '@/components/auth/auth-shell';
import RegistrationForm, {
  type ApplicantType
} from '@/components/auth/registration-form';
import VerifyEmail from '@/components/auth/verify-email';
import { getRoleHomePath } from '@/components/auth/roles';
import { BlinkingDots } from '@/components/blinking-dots';
import { Button } from '@/components/ui/button';

/**
 * Sign up is three screens: create the account, confirm the email address
 * with the code the API just sent, then a thank you that points to sign in.
 * Registration never signs anyone in - they log in with the credentials they
 * chose, which keeps the redirect back to the course or job intact.
 */
type SignUpStep = 'create' | 'verify' | 'done';

const STEP_COPY: Record<SignUpStep, { title: string; subtitle: string }> = {
  create: {
    title: 'Create an account',
    subtitle:
      'Enter your details below to get started. Once registered, sign in to continue your application.'
  },
  verify: {
    title: 'Verify your email',
    subtitle: 'One last step before you can sign in.'
  },
  done: {
    title: 'You are all set',
    subtitle: 'Your account is ready to use.'
  }
};

const STEPS: { id: SignUpStep; label: string }[] = [
  { id: 'create', label: 'Create account' },
  { id: 'verify', label: 'Verify email' },
  { id: 'done', label: 'Sign in' }
];

function SignUpProgress({ step }: { step: SignUpStep }) {
  const current = STEPS.findIndex((item) => item.id === step);

  return (
    <ol className="mb-6 flex items-center gap-2" aria-label="Sign up progress">
      {STEPS.map((item, index) => {
        const reached = index <= current;
        return (
          <li key={item.id} className="flex flex-1 items-center gap-2">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                reached ? 'bg-watney text-white' : 'bg-gray-200 text-gray-600'
              }`}
              aria-current={index === current ? 'step' : undefined}
            >
              {index + 1}
            </span>
            <span
              className={`hidden text-xs font-medium sm:inline ${
                reached ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              {item.label}
            </span>
            {index < STEPS.length - 1 && (
              <span
                className={`h-px flex-1 ${
                  index < current ? 'bg-watney' : 'bg-gray-200'
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

function SignUpPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect');
  const user = useSelector((state: any) => state.auth.user);

  const [step, setStep] = useState<SignUpStep>('create');
  const [account, setAccount] = useState<{
    email: string;
    role: ApplicantType;
  } | null>(null);

  // Arriving from a job's "Apply" button pre-selects the job applicant
  // account and a course page pre-selects student; `?type=job|student` does
  // the same from anywhere else. The person can still change it.
  const typeParam = searchParams.get('type');
  const defaultApplicantType: ApplicantType | undefined =
    typeParam === 'job' || redirectTo?.startsWith('/jobs/')
      ? 'jobApplicant'
      : typeParam === 'student' || redirectTo?.startsWith('/courses/')
        ? 'applicant'
        : undefined;

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

  const isJobAccount =
    (account?.role || defaultApplicantType) === 'jobApplicant';

  return (
    <AuthShell
      // Every step uses the wide card - squeezed into the narrow one, the code
      // boxes and the thank you message wrapped awkwardly.
      wide
      eyebrow="Start your application"
      headline="Create your Watney College account"
      blurb="Please make a note of your email address and password. You will need these credentials to log back in and complete your application."
      title={STEP_COPY[step].title}
      subtitle={STEP_COPY[step].subtitle}
      footer={
        step === 'create' ? (
          <p>
            Already have an account?{' '}
            <Link
              href={loginHref}
              className="font-medium text-watney hover:underline"
            >
              Sign in
            </Link>
          </p>
        ) : undefined
      }
    >
      {/* <SignUpProgress step={step} /> */}

      {step === 'create' && (
        <RegistrationForm
          defaultApplicantType={defaultApplicantType}
          onSuccess={(created) => {
            setAccount(created);
            setStep('verify');
          }}
        />
      )}

      {step === 'verify' && account && (
        <VerifyEmail user={account} onVerified={() => setStep('done')} />
      )}

      {step === 'done' && (
        <div className="flex flex-col items-center space-y-4 py-4 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-watney/10 text-watney">
            <CheckCircle2 className="h-9 w-9" />
          </span>
          <h2 className="text-xl font-semibold text-gray-900">
            Thank you for verifying your email
          </h2>
          <p className="max-w-xl text-sm text-gray-700">
            Your account for{' '}
            <span className="font-semibold text-gray-900">
              {account?.email}
            </span>{' '}
            has been verified. Sign in with your email address and password to
            continue your {isJobAccount ? 'job' : 'course'} application.
          </p>
          <Link href={loginHref} className="w-full max-w-sm">
            <Button className="w-full gap-2 bg-watney text-white hover:bg-watney/90">
              <LogIn className="h-4 w-4" />
              Go to sign in
            </Button>
          </Link>
        </div>
      )}
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
