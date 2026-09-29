"use client";

import type React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, Eye, EyeOff, Loader2 } from 'lucide-react'; // Added Loader2 for the spinner
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
import axiosInstance from '@/lib/axios';
import ReactSelect, { SingleValue } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { nationalities } from '@/types';

type OptionType = {
  value: string;
  label: string;
};

const registrationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  firstName: z.string().min(1, 'First name is required').max(50),
  initial: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required').max(50),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  nationality: z.string().min(1, 'Nationality is required'),
  dateOfBirth: z
    .date({ message: 'Date of birth is required' })
    .nullable()
    .refine((date) => date !== null, {
      message: 'Date of birth is required'
    }),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

const defaultRegistrationValues = {
  title: '',
  firstName: '',
  initial: '',
  lastName: '',
  phone: '',
  nationality: '',
  dateOfBirth: null as Date | null,
  email: '',
  password: ''
};

interface RegistrationFormProps {
  /** Called once the applicant account has been created. */
  onSuccess?: () => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const { toast } = useToast();

  // Initialize form with React Hook Form + Zod validation
  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: defaultRegistrationValues
  });

  const onSubmit = async (values: z.infer<typeof registrationSchema>) => {
    const email = values.email.toLocaleLowerCase();
    const inputDate = values.dateOfBirth;

    try {
      setIsLoading(true); // Start loading state
      await axiosInstance.post('/auth/signup', {
        ...values,
        name: `${values.title} ${values.firstName} ${values.initial} ${values.lastName}`,
        title: values.title,
        firstName: values.firstName,
        initial: values.initial,
        email,
        lastName: values.lastName,
        nationality: values.nationality,
        dateOfBirth: new Date(
          Date.UTC(
            inputDate!.getFullYear(),
            inputDate!.getMonth(),
            inputDate!.getDate()
          )
        ).toISOString(),
        role: 'applicant',
        isValided: true,
        authorized: true
      });

      // The applicant logs in with their new credentials before continuing -
      // registration never signs them in on its own.
      toast({
        title: 'Account created',
        description:
          'Please log in with your new username and password to continue.'
      });

      form.reset();

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      toast({
        title: err.response?.data?.message || 'Please try again later.',
        // description: err.response?.data?.message || 'Please try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false); // Stop loading state regardless of outcome
    }
  };

  const nationalityOptions = nationalities.map((nation) => ({
    value: nation,
    label: nation
  }));
  const titleOptions = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr', 'Prof'].map((title) => ({
    value: title,
    label: title
  }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mt-1">
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Title <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <ReactSelect
                    options={titleOptions}
                    isDisabled={isLoading} // Disable during load
                    value={titleOptions.find(
                      (opt) => opt.value === field.value
                    )}
                    onChange={(option: SingleValue<OptionType>) =>
                      field.onChange(option?.value)
                    }
                    placeholder="Select title"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />

          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Middle Name (Optional) */}
          <FormField
            control={form.control}
            name="initial"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle Name</FormLabel>
                <FormControl>
                  <Input placeholder="(Optional)" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nationality */}
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem className="mt-1">
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Nationality <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <ReactSelect
                    options={nationalityOptions}
                    isDisabled={isLoading} // Disable during load
                    value={nationalityOptions.find(
                      (opt) => opt.value === field.value
                    )}
                    onChange={(option: SingleValue<OptionType>) =>
                      field.onChange(option?.value)
                    }
                    placeholder="Select nationality"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />

          {/* Date of Birth */}
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Date of Birth <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    onBlur={field.onBlur}
                    disabled={isLoading}
                    maxDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    wrapperClassName="w-full"
                    popperClassName="z-[1001]"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600" />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password *</FormLabel>
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
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <FormMessage />
              <p className="text-xs text-gray-500">
                Password must be at least 6 characters
              </p>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-watney text-white hover:bg-watney/90 flex items-center justify-center gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            'Create Account'
          )}
        </Button>
      </form>
    </Form>
  );
}