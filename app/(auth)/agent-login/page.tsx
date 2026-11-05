'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { ShieldAlert } from 'lucide-react';
import LoginForm from '@/components/auth/login-form';
import AuthShell from '@/components/auth/auth-shell';
import { isAgent } from '@/components/auth/roles';
import { logout } from '@/redux/features/authSlice';
import type { AppDispatch } from '@/redux/store';
import { BlinkingDots } from '@/components/blinking-dots';

/**
 * The agent sign in. Agents are Users, so the form sends no role - but this
 * route is for agents only: anything else that authenticates here is signed
 * straight back out. Applicants have their own page at `/login`, and there is
 * no self sign-up for agents at all - the college issues the credentials.
 */
export default function AgentLoginPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: any) => state.auth.user);
  const [wrongAccount, setWrongAccount] = useState(false);

  useEffect(() => {
    if (!user) return;

    if (isAgent(user.role)) {
      setWrongAccount(false);
      router.replace('/agent/dashboard');
      return;
    }

    // Not an agent account - drop the session rather than leave someone
    // signed in on a page that is not theirs.
    dispatch(logout());
    setWrongAccount(true);
  }, [user, router, dispatch]);

  if (user && isAgent(user.role)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BlinkingDots size="large" color="bg-watney" />
      </div>
    );
  }

  return (
    <AuthShell
      eyebrow="Agent access"
      headline="Watney College agent portal"
      blurb="Sign in to track the applicants you have referred, the offers they have received and who has enrolled."
      title="Agent Login"
      subtitle="Use the credentials issued to your agency."
      footer={
        <>
          {/* <p className="text-xs text-black">
            Agent accounts are created by Watney College - there is no sign up
            here. Applying for a course? Sign in at{' '}
            <Link href="/login" className="text-watney hover:underline">
              the applicant login
            </Link>
            .
          </p> */}
          <p className="mt-3">
            <Link
              href="/forgot-password?role=agent"
              className="font-medium text-watney hover:underline"
            >
              Forgot your password?
            </Link>
            <span className="mx-2 text-black">|</span>
            <Link href="/" className="text-black hover:underline">
              Back to the website
            </Link>
          </p>
        </>
      }
    >
      {wrongAccount && (
        <div className="mb-4 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
          <p className="text-sm text-red-700">
            That account is not an agent account. This page is for Watney
            College agents only.
          </p>
        </div>
      )}

      <LoginForm />
    </AuthShell>
  );
}
