'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Loader2, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import axiosInstance from '@/lib/axios';
import {
  logout,
  resendVerificationOtp,
  verifyEmail
} from '@/redux/features/authSlice';
import type { AppDispatch } from '@/redux/store';

const OTP_LENGTH = 4;
const RESEND_SECONDS = 30;

interface VerifyEmailProps {
  user: { email?: string; role?: string };
  /**
   * Set by the sign-up page, which shows this straight after the account is
   * created - before anyone has logged in. The code is checked without
   * signing the person in, nothing is wrapped around the form (the page
   * supplies its own card) and this is called once it is accepted.
   */
  onVerified?: () => void;
}

/**
 * Stands in for every applicant page until the email address is confirmed.
 *
 * Logging in with an unverified account already mails a code, so the resend
 * link starts on its cooldown rather than sending a second one straight away.
 * Verifying swaps the stored token for one with `isValided: true`, and the
 * page that rendered this one takes over from there.
 *
 * It is also the second screen of sign up (see `onVerified`), where the
 * code was mailed when the account was created.
 */
export default function VerifyEmail({ user, onVerified }: VerifyEmailProps) {
  const standalone = Boolean(onVerified);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [cooldown, setCooldown] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    setOtp((prev) => {
      const next = [...prev];
      next[index] = digit;
      return next;
    });
    if (digit && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const text = event.clipboardData.getData('text').replace(/\D/g, '');
    if (text.length !== OTP_LENGTH) return;
    event.preventDefault();
    setOtp(text.split(''));
    inputRefs.current[OTP_LENGTH - 1]?.focus();
  };

  const handleVerify = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isVerifying || otp.some((digit) => !digit) || !user?.email) return;

    setIsVerifying(true);
    setError('');

    const credentials = {
      email: user.email,
      otp: otp.join(''),
      ...(user.role ? { role: user.role } : {})
    };

    // From the sign-up page the account is only confirmed here - the person
    // signs in afterwards with the password they just chose.
    if (standalone) {
      try {
        await axiosInstance.patch('/auth/verifyemail', credentials);
        onVerified?.();
      } catch (err: any) {
        setError(
          err?.response?.data?.message ||
            'That code was not right. Please check it and try again.'
        );
        setIsVerifying(false);
      }
      return;
    }

    const result = await dispatch(
      verifyEmail(credentials)
    );

    if (verifyEmail.rejected.match(result)) {
      setError(
        result.payload || 'That code was not right. Please check it and try again.'
      );
      setIsVerifying(false);
      return;
    }

    toast({ description: 'Your email address has been verified.' });
  };

  const handleResend = async () => {
    if (cooldown > 0 || isResending || !user?.email) return;

    setIsResending(true);
    setError('');

    const credentials = {
      email: user.email,
      ...(user.role ? { role: user.role } : {})
    };

    if (standalone) {
      try {
        await axiosInstance.patch('/auth/resend-otp', credentials);
      } catch (err: any) {
        setIsResending(false);
        setError(
          err?.response?.data?.message ||
            'Could not resend the code. Please try again.'
        );
        return;
      }
      setIsResending(false);
    } else {
      const result = await dispatch(resendVerificationOtp(credentials));

      setIsResending(false);

      if (resendVerificationOtp.rejected.match(result)) {
        setError(result.payload || 'Could not resend the code. Please try again.');
        return;
      }
    }

    setOtp(Array(OTP_LENGTH).fill(''));
    setCooldown(RESEND_SECONDS);
    inputRefs.current[0]?.focus();
    toast({ description: `A new code has been sent to ${user.email}.` });
  };

  const handleLogout = () => {
    dispatch(logout());
    router.replace('/');
  };

  const verifyForm = (
    <form
      onSubmit={handleVerify}
      className="flex flex-col items-center space-y-4 text-center"
    >
      <h2 className="text-xl font-medium text-black">
        VERIFY YOUR EMAIL ADDRESS
      </h2>
      <p className="font-medium text-black">
        A verification code has been sent to <br />
        <span className="text-sm font-bold">{user?.email}</span>
      </p>
      <p className="text-sm text-black">
        Please check your inbox and enter the verification code below to
        verify your email address.
      </p>

      <div className="flex justify-center gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            value={digit}
            onChange={(event) => handleChange(index, event.target.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            onPaste={handlePaste}
            onFocus={(event) => event.target.select()}
            inputMode="numeric"
            maxLength={1}
            aria-label={`Digit ${index + 1}`}
            disabled={isVerifying}
            className="h-12 w-12 rounded-lg border border-gray-300 bg-white text-center text-xl font-medium text-black shadow-sm outline-none focus:border-watney focus:ring-2 focus:ring-watney/30 disabled:opacity-60 sm:h-14 sm:w-14 sm:text-2xl"
          />
        ))}
      </div>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <Button
        type="submit"
        disabled={isVerifying || otp.some((digit) => !digit)}
        className="mt-4 flex w-[200px] items-center justify-center gap-2 bg-watney text-white hover:bg-watney/90 disabled:opacity-50"
      >
        {isVerifying ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Verifying...
          </>
        ) : (
          'Verify OTP'
        )}
      </Button>

      <div className="mt-2 flex items-center justify-center gap-1 text-sm">
        <span className="text-black">Didn&apos;t receive the code?</span>
        <button
          type="button"
          onClick={handleResend}
          disabled={cooldown > 0 || isResending}
          className="flex items-center gap-1 font-semibold text-watney hover:underline disabled:cursor-not-allowed disabled:text-black disabled:no-underline disabled:opacity-70"
        >
          {isResending ? (
            <>
              <Loader2 className="h-3 w-3 animate-spin" />
              Sending...
            </>
          ) : cooldown > 0 ? (
            `Resend in ${cooldown}s`
          ) : (
            'Resend code'
          )}
        </button>
      </div>
    </form>
  );

  if (standalone) return verifyForm;

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-50 px-4">
      <Button
        onClick={handleLogout}
        className="absolute right-4 top-4 flex items-center gap-2 bg-watney text-white hover:bg-watney/90"
      >
        <LogOut className="h-4 w-4" />
        <span className="font-semibold">Log out</span>
      </Button>

      <Card className="w-full max-w-4xl border border-gray-200 p-8 shadow-lg sm:p-10">
        {verifyForm}
      </Card>
    </div>
  );
}
