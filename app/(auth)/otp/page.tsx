'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { Loader2 } from 'lucide-react';
import AuthShell from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { requestOtp, validateRequestOtp } from '@/redux/features/authSlice';
import type { AppDispatch } from '@/redux/store';
import {
  RESET_ACCOUNT_KEY,
  RESET_EMAIL_KEY,
  RESET_ROLE_KEY
} from '@/lib/reset-password-storage';

const OTP_LENGTH = 4;
const RESEND_SECONDS = 30;

export default function OtpPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // The email was stored by the forgot password step; without it there is
  // nothing to verify against.
  useEffect(() => {
    const storedEmail = localStorage.getItem(RESET_EMAIL_KEY);
    if (!storedEmail) {
      router.replace('/forgot-password');
      return;
    }
    setEmail(storedEmail);
    setRole(localStorage.getItem(RESET_ROLE_KEY) || '');
  }, [router]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const setDigit = (index: number, value: string) => {
    setOtp((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    setDigit(index, digit);
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
    if (otp.some((digit) => !digit)) return;

    setIsVerifying(true);
    setError('');

    const result: any = await dispatch(
      validateRequestOtp({
        email,
        otp: otp.join(''),
        ...(role ? { role } : {})
      })
    );

    const resetToken = result?.payload?.data?.resetToken;

    if (!result?.payload?.success || !resetToken) {
      setError('That code was not right. Please check it and try again.');
      setIsVerifying(false);
      return;
    }

    localStorage.setItem(
      RESET_ACCOUNT_KEY,
      JSON.stringify({ ...(jwtDecode(resetToken) as object), token: resetToken })
    );
    router.push('/new-password');
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    setError('');
    setCooldown(RESEND_SECONDS);
    await dispatch(requestOtp({ email, ...(role ? { role } : {}) }));
  };

  return (
    <AuthShell
      eyebrow="Verification"
      headline="Enter your code"
      blurb={`We sent a ${OTP_LENGTH} digit code to ${email || 'your email address'}. It is valid for 10 minutes.`}
      title="Verify your code"
      subtitle="Type the code from the email we just sent you."
      footer={
        <button
          type="button"
          onClick={() => router.push('/forgot-password')}
          className="text-black hover:underline"
        >
          &larr; Use a different email
        </button>
      }
    >
      <form onSubmit={handleVerify} className="space-y-5">
        <div className="flex justify-center gap-3">
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
              className="h-14 w-12 rounded-lg border border-gray-300 bg-white text-center text-2xl font-semibold text-black shadow-sm outline-none transition-colors focus:border-watney focus:ring-2 focus:ring-watney/30 disabled:opacity-60 sm:w-14"
            />
          ))}
        </div>

        {error && (
          <p className="text-center text-sm font-medium text-red-600">{error}</p>
        )}

        <Button
          type="submit"
          disabled={isVerifying || otp.some((digit) => !digit)}
          className="flex w-full items-center justify-center gap-2 bg-watney text-white hover:bg-watney/90 disabled:opacity-50"
        >
          {isVerifying ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            'Verify code'
          )}
        </Button>

        <p className="text-center text-sm text-black">
          Didn&apos;t get the code?{' '}
          <button
            type="button"
            onClick={handleResend}
            disabled={cooldown > 0}
            className="font-medium text-watney hover:underline disabled:text-black disabled:no-underline"
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend code'}
          </button>
        </p>
      </form>
    </AuthShell>
  );
}
