'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { Loader2 } from 'lucide-react';
import AuthShell from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { BlinkingDots } from '@/components/blinking-dots';
import { requestOtp } from '@/redux/features/authSlice';
import type { AppDispatch } from '@/redux/store';
import { RESET_EMAIL_KEY, RESET_ROLE_KEY } from '@/lib/reset-password-storage';

const formSchema = z.object({
  email: z.string().email('Enter a valid email address')
});

function ForgotPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Applicants live in their own collection, so the OTP lookup needs to know
  // which store to search. Agents and staff are Users - no role is sent.
  const role = searchParams.get('role') === 'agent' ? '' : 'applicant';

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setError('');

    const email = values.email.toLowerCase();
    const result: any = await dispatch(
      requestOtp({ email, ...(role ? { role } : {}) })
    );

    if (result?.error) {
      setError(
        typeof result.payload === 'string'
          ? result.payload
          : 'We could not send the code. Please try again.'
      );
      setIsLoading(false);
      return;
    }

    localStorage.setItem(RESET_EMAIL_KEY, email);
    localStorage.setItem(RESET_ROLE_KEY, role);
    router.push('/otp');
  };

  return (
    <AuthShell
      eyebrow="Reset your password"
      headline="Secure and easy access"
      blurb="Enter the email address on your account and we will send you a six step - four digit - code to set a new password."
      title="Forgot password?"
      subtitle="We will email you a verification code."
      footer={
        <Link
          href={role ? '/login' : '/agent-login'}
          className="text-black hover:underline"
        >
          &larr; Back to sign in
        </Link>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address*</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <Button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 bg-watney text-white hover:bg-watney/90"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending code...
              </>
            ) : (
              'Send reset code'
            )}
          </Button>
        </form>
      </Form>
    </AuthShell>
  );
}

export default function ForgotPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      }
    >
      <ForgotPasswordContent />
    </Suspense>
  );
}
