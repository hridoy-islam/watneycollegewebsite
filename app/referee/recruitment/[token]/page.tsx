'use client';

/**
 * The reference form a referee reaches from the email HR sends them:
 * /referee/recruitment/<token>. No account is needed - the token in the link
 * opens one request, and the API accepts a single submission for it.
 */

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Trash2 } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CustomDatePicker } from '@/components/CustomDatePicker';
import { BlinkingDots } from '@/components/blinking-dots';
import { SignaturePad } from './signature-pad';

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

const RATINGS = [
  { value: 'very_good', label: 'Very Good' },
  { value: 'good', label: 'Good' },
  { value: 'poor', label: 'Poor' }
] as const;

const rating = z.enum(['very_good', 'good', 'poor'], { message: 'Please select an option' });

const CHARACTERISTICS = [
  { name: 'qualityOrganization', label: 'Quality and organisation of work' },
  { name: 'courteousPolite', label: 'Courteous and polite' },
  { name: 'willingnessFollowPolicies', label: 'Willingness to follow policies' },
  { name: 'integrityTrust', label: 'Integrity and trust' },
  {
    name: 'attitudeEqualOpportunities',
    label: 'Attitude towards equal opportunities, i.e. sex, race, religion, age'
  },
  { name: 'emotionalControl', label: 'Emotional control' },
  { name: 'proactiveApproach', label: 'Pro-active approach to work' },
  { name: 'respectTeam', label: 'Respect to and from team' },
  { name: 'empathyClients', label: 'Empathy towards service users / clients' },
  { name: 'attitudesCriticism', label: 'Attitude towards criticism' },
  { name: 'groomingAppearance', label: 'Grooming and appearance' },
  { name: 'attendancePunctuality', label: 'Attendance / punctuality' }
] as const;

const referenceSchema = z
  .object({
    howLongKnown: z.string().trim().min(1, { message: 'This field is required' }),
    employmentFrom: z.date({ message: 'Employment start date is required' }),
    employmentTill: z.date({ message: 'Employment end date is required' }),
    reasonForLeaving: z.string().optional(),
    qualityOrganization: rating,
    courteousPolite: rating,
    willingnessFollowPolicies: rating,
    integrityTrust: rating,
    attitudeEqualOpportunities: rating,
    emotionalControl: rating,
    proactiveApproach: rating,
    respectTeam: rating,
    empathyClients: rating,
    attitudesCriticism: rating,
    groomingAppearance: rating,
    attendancePunctuality: rating,
    unsuitableReason: z.string().optional(),
    wouldReemploy: z.enum(['yes', 'no'], { message: 'Please select an option' }),
    noReemployReason: z.string().optional(),
    suitabilityOpinion: z.string().trim().min(1, { message: 'This field is required' }),
    refereeName: z.string().trim().min(1, { message: 'This field is required' }),
    refereePosition: z.string().trim().min(1, { message: 'This field is required' }),
    signature: z.string().min(1, { message: 'Please sign before submitting' })
  })
  .refine((d) => d.wouldReemploy !== 'no' || !!d.noReemployReason?.trim(), {
    message: 'Please provide a reason',
    path: ['noReemployReason']
  })
  .refine((d) => !d.employmentFrom || !d.employmentTill || d.employmentTill >= d.employmentFrom, {
    message: 'End date cannot be before the start date',
    path: ['employmentTill']
  });

type ReferenceFormData = z.infer<typeof referenceSchema>;

interface FormContext {
  status: 'pending' | 'submitted';
  applicantName?: string;
  positionApplied?: string;
  relationship?: string;
  refereeName?: string;
}

type PageState = 'loading' | 'form' | 'already' | 'invalid' | 'thanks';

function StatusCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center  px-4 py-12 sm:px-6">
      <Card className="w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-6 text-center shadow-none sm:p-8">
        <CardHeader>
          <CardTitle className="mb-2 text-3xl font-bold text-watney sm:text-4xl">{title}</CardTitle>
          <CardDescription className="text-base text-black sm:text-lg">{children}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default function RefereeRecruitmentPage() {
  const params = useParams<{ token: string }>();
  const token = String(params?.token || '');

  const [state, setState] = useState<PageState>('loading');
  const [context, setContext] = useState<FormContext | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [clearSignal, setClearSignal] = useState(0);

  const form = useForm<ReferenceFormData>({
    resolver: zodResolver(referenceSchema),
    defaultValues: {
      howLongKnown: '',
      reasonForLeaving: '',
      unsuitableReason: '',
      noReemployReason: '',
      suitabilityOpinion: '',
      refereeName: '',
      refereePosition: '',
      signature: ''
    }
  });

  useEffect(() => {
    if (!token) {
      setState('invalid');
      return;
    }
    api
      .get(`/job-applicant-reference/token/${encodeURIComponent(token)}`)
      .then((res) => {
        const data: FormContext = res.data?.data;
        if (data?.status === 'submitted') {
          setState('already');
          return;
        }
        setContext(data);
        if (data?.refereeName) form.setValue('refereeName', data.refereeName);
        setState('form');
      })
      .catch(() => setState('invalid'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Stable, so the signature pad does not reset on every render.
  const handleSignature = useCallback(
    (dataUrl: string) =>
      form.setValue('signature', dataUrl, { shouldValidate: form.formState.isSubmitted }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onSubmit = async (data: ReferenceFormData) => {
    setSubmitting(true);
    setSubmitError('');
    try {
      await api.post(`/job-applicant-reference/token/${encodeURIComponent(token)}`, {
        ...data,
        employmentFrom: data.employmentFrom.toISOString(),
        employmentTill: data.employmentTill.toISOString()
      });
      setState('thanks');
      window.scrollTo({ top: 0 });
    } catch (error: any) {
      if (error?.response?.status === 409) {
        setState('already');
        return;
      }
      setSubmitError(
        error?.response?.data?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (state === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <BlinkingDots size="large" color="bg-watney" />
      </div>
    );
  }

  if (state === 'invalid') {
    return (
      <StatusCard title="Link Not Valid">
        This reference link is not valid. Please check you opened the full link from your
        email, or contact Watney College.
      </StatusCard>
    );
  }

  if (state === 'already') {
    return (
      <StatusCard title="Form Already Submitted">
        This reference has already been submitted and cannot be submitted again.
      </StatusCard>
    );
  }

  if (state === 'thanks') {
    return (
      <StatusCard title="Thank You!">
        Your reference has been submitted successfully. Thank you for taking the time to
        complete it.
      </StatusCard>
    );
  }

  const wouldReemploy = form.watch('wouldReemploy');
  const signature = form.watch('signature');

  return (
    <div className="bg-gray-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">

        <Card className="border border-gray-300 bg-white">
          <CardHeader>
            <CardTitle className="text-xl">Reference Questionnaire</CardTitle>
            <CardDescription>
              Fields marked <span className="text-red-500">*</span> are required. The form can
              be submitted once.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-100 p-4 text-center md:grid-cols-3">
                  <div>
                    <p className="text-sm font-semibold sm:text-base">Name of applicant</p>
                    <p>{context?.applicantName || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold sm:text-base">Position applied for</p>
                    <p>{context?.positionApplied || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold sm:text-base">Relationship to applicant</p>
                    <p>{context?.relationship || '-'}</p>
                  </div>
                </div>

                {/* === Employment === */}
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="howLongKnown"
                    render={({ field }) => (
                      <FormItem className="md:max-w-md">
                        <FormLabel>
                          How long have you known the applicant?{' '}
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="e.g. 2 years" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4 border-t pt-4">
                    <h3 className="font-semibold">Employment Period</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="employmentFrom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              When did the applicant start the job?{' '}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <CustomDatePicker
                                selected={field.value || null}
                                onChange={(date) => field.onChange(date ?? undefined)}
                                placeholder="DD/MM/YYYY"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="employmentTill"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              When did the applicant leave the job?{' '}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <CustomDatePicker
                                selected={field.value || null}
                                onChange={(date) => field.onChange(date ?? undefined)}
                                placeholder="DD/MM/YYYY"
                              />
                            </FormControl>
                            <FormDescription>
                              If they still work there, choose today&apos;s date.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="reasonForLeaving"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for leaving</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={3} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* === General ability / characteristics === */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-lg font-semibold">
                    Applicant&apos;s general ability / characteristics
                  </h3>
                  <div className="divide-y rounded-lg border">
                    {CHARACTERISTICS.map((c, index) => (
                      <FormField
                        key={c.name}
                        control={form.control}
                        name={c.name}
                        render={({ field }) => (
                          <FormItem className="flex flex-col gap-3 space-y-0 p-3 md:flex-row md:items-center md:justify-between md:gap-6">
                            <div className="flex-1">
                              <FormLabel className="font-medium">
                                {index + 1}. {c.label} <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormMessage />
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                              {RATINGS.map((option) => (
                                <div key={option.value} className="flex items-center gap-2">
                                  <Checkbox
                                    id={`${c.name}-${option.value}`}
                                    checked={field.value === option.value}
                                    onCheckedChange={(checked) =>
                                      checked && field.onChange(option.value)
                                    }
                                  />
                                  <Label
                                    htmlFor={`${c.name}-${option.value}`}
                                    className="font-normal"
                                  >
                                    {option.label}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* === Final questions === */}
                <div className="space-y-4 border-t pt-6">
                  <FormField
                    control={form.control}
                    name="unsuitableReason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Do you know of any reason(s), including health, which would make this
                          applicant unsuitable for employment?
                        </FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="wouldReemploy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Would you re-employ this applicant? <span className="text-red-500">*</span>
                        </FormLabel>
                        <div className="flex gap-6">
                          {(['yes', 'no'] as const).map((value) => (
                            <div key={value} className="flex items-center gap-2">
                              <Checkbox
                                id={`reemploy-${value}`}
                                checked={field.value === value}
                                onCheckedChange={(checked) => checked && field.onChange(value)}
                              />
                              <Label htmlFor={`reemploy-${value}`} className="capitalize">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {wouldReemploy === 'no' && (
                    <FormField
                      control={form.control}
                      name="noReemployReason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            If &apos;No&apos;, please state the reason{' '}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={3} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="suitabilityOpinion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Please give your opinion of the applicant&apos;s suitability for the
                          post applied for <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* === Referee details === */}
                <div className="space-y-4 border-t pt-6">
                  <div>
                    <h3 className="text-lg font-semibold">Your Details</h3>
                    <p className="text-sm text-muted-foreground">
                      Please check your details and correct them if needed.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="refereeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="refereePosition"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Position <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g. HR Manager" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* === Signature === */}
                <div className="space-y-3 border-t pt-6">
                  <h3 className="text-lg font-semibold">
                    Signature <span className="text-red-500">*</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sign in the box below to confirm the information provided is accurate.
                  </p>
                  <FormField
                    control={form.control}
                    name="signature"
                    render={() => (
                      <FormItem>
                        <div className="w-full max-w-md">
                          <SignaturePad onChange={handleSignature} clearSignal={clearSignal} />
                        </div>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          disabled={!signature}
                          onClick={() => setClearSignal((n) => n + 1)}
                        >
                          <Trash2 className="mr-1 h-3 w-3" />
                          Clear
                        </Button>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {submitError && (
                  <p className="rounded-md bg-red-50 p-3 text-sm text-red-600">{submitError}</p>
                )}

                <div className="flex w-full justify-end">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-watney text-white hover:bg-watney/90 max-md:w-full"
                  >
                    {submitting ? 'Submitting...' : 'Submit Reference'}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
