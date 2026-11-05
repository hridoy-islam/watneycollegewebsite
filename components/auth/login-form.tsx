'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/components/ui/use-toast';
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
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';
import { loginUser } from '@/redux/features/authSlice';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

interface LoginFormProps {
  /**
   * Which account store to authenticate against. Applicants live in their own
   * collection, so the apply flow passes `"applicant"`; staff logins leave it
   * off and are looked up as Users.
   */
  role?: string;
}

export default function LoginForm({ role }: LoginFormProps = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleLoginSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const normalizedData = {
        ...values,
        email: values.email.toLowerCase(),
        ...(role ? { role } : {})
      };

      const response = await dispatch(loginUser(normalizedData));
      const result: any = response.payload;

      if (!result?.success) {
        toast({
          title: 'Authentication Failed',
          description:
            result?.message ||
            'Please check your email and password and try again.',
          variant: 'destructive'
        });
        setIsLoading(false);
        return;
      }

      // Login was successful - keep the button in its loading state while the
      // page reacts to the user landing in redux and redirects.
      toast({
        title: 'Login Successful',
        description: 'You have been logged in successfully.'
      });
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: 'Login Error',
        description:
          'Something went wrong during the login process. Please try again later.',
        variant: 'destructive'
      });
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLoginSubmit)}
        className="space-y-4"
      >
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Password*</FormLabel>
              </div>
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
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
        <Button
          type="submit"
          className="flex w-full items-center justify-center gap-2 bg-watney text-white hover:bg-watney/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            'Log in'
          )}
        </Button>
      </form>
    </Form>
  );
}
