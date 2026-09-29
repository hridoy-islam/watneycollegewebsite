'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch } from 'react-redux';
import { CheckCircle2, Eye, EyeOff, Loader2 } from 'lucide-react';
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
import { resetPassword } from '@/redux/features/authSlice';
import type { AppDispatch } from '@/redux/store';
import {
  RESET_ACCOUNT_KEY,
  clearResetStorage
} from '@/lib/reset-password-storage';

const formSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Please confirm your new password')
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export default function NewPasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [account, setAccount] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isDone, setIsDone] = useState(false);

  // The OTP step parks the validated account here. Without it there is no
  // proof the code was ever entered, so start over.
  useEffect(() => {
    const stored = localStorage.getItem(RESET_ACCOUNT_KEY);
    if (!stored) {
      router.replace('/forgot-password');
      return;
    }
    try {
      setAccount(JSON.parse(stored));
    } catch {
      router.replace('/forgot-password');
    }
  }, [router]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { password: '', confirmPassword: '' }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!account?._id) return;

    setIsLoading(true);
    setError('');

    const result: any = await dispatch(
      resetPassword({
        userId: account._id,
        password: values.password,
        token: account.token,
        ...(account.role === 'applicant' ? { role: 'applicant' } : {})
      })
    );

    if (result?.error) {
      setError(
        typeof result.payload === 'string'
          ? result.payload
          : 'We could not change your password. Please try again.'
      );
      setIsLoading(false);
      return;
    }

    clearResetStorage();
    setIsDone(true);
    setIsLoading(false);
  };

  const loginHref = account?.role === 'applicant' ? '/login' : '/agent-login';

  return (
    <AuthShell
      eyebrow="Security"
      headline="Set a new password"
      blurb="Choose a password you have not used before. You will use it every time you sign in."
      title={isDone ? 'Password changed' : 'Create a new password'}
      subtitle={
        isDone
          ? undefined
          : 'Enter your new password twice so we know it is right.'
      }
      footer={
        isDone ? undefined : (
          <Link href={loginHref} className="text-black hover:underline">
            &larr; Back to sign in
          </Link>
        )
      }
    >
      {isDone ? (
        <div className="space-y-5 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <p className="text-sm text-black">
            Your password has been updated. You can now sign in with your new
            password.
          </p>
          <Button
            onClick={() => router.push(loginHref)}
            className="w-full bg-watney text-white hover:bg-watney/90"
          >
            Sign in now
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password*</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={isLoading}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:text-black disabled:opacity-50"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password*</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <p className="text-sm font-medium text-red-600">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 bg-watney text-white hover:bg-watney/90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                'Change password'
              )}
            </Button>
          </form>
        </Form>
      )}
    </AuthShell>
  );
}
