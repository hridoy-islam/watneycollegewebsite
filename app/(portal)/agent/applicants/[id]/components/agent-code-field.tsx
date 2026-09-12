'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import axiosInstance from '@/lib/axios';

type LookupStatus = 'idle' | 'loading' | 'found' | 'not-found' | 'error';

interface AgentCodeFieldProps {
  /** The compliance step's react-hook-form instance. */
  form: any;
}

/**
 * Shown when the applicant heard about us through an agent. The code is looked
 * up once typing stops; a matching agent's `_id` is written to `agentId` so it
 * is submitted with the rest of the step.
 */
export function AgentCodeField({ form }: AgentCodeFieldProps) {
  const hearAboutUs = form.watch('hearAboutUs');
  const applicantAgentCode = form.watch('applicantAgentCode');
  const isAgentReferral = hearAboutUs === 'agent';

  const [status, setStatus] = useState<LookupStatus>('idle');
  const [agent, setAgent] = useState<any>(null);

  useEffect(() => {
    // Not an agent referral - drop anything that was entered earlier.
    if (!isAgentReferral) {
      setStatus('idle');
      setAgent(null);
      if (form.getValues('applicantAgentCode')) {
        form.setValue('applicantAgentCode', '');
      }
      if (form.getValues('agentId')) form.setValue('agentId', '');
      return;
    }

    const code = (applicantAgentCode || '').trim();

    if (!code) {
      setStatus('idle');
      setAgent(null);
      if (form.getValues('agentId')) form.setValue('agentId', '');
      return;
    }

    setStatus('loading');
    let cancelled = false;

    // Wait until the applicant has finished typing the code.
    const timer = setTimeout(async () => {
      try {
        const response = await axiosInstance.get('/users', {
          params: { role: 'agent', agentCode: code, limit: 'all' }
        });
        if (cancelled) return;

        const foundAgent = response?.data?.data?.result?.[0];

        if (foundAgent?._id) {
          setAgent(foundAgent);
          setStatus('found');
          form.setValue('agentId', foundAgent._id, { shouldValidate: true });
        } else {
          setAgent(null);
          setStatus('not-found');
          form.setValue('agentId', '', { shouldValidate: true });
        }
      } catch (error) {
        if (cancelled) return;
        console.error('Agent code lookup failed:', error);
        setAgent(null);
        setStatus('error');
        form.setValue('agentId', '', { shouldValidate: true });
      }
    }, 1000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [applicantAgentCode, isAgentReferral, form]);

  if (!isAgentReferral) return null;


  return (
    <FormField
      control={form.control}
      name="applicantAgentCode"
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <FormLabel>
            Agent Code <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                value={field.value || ''}
                placeholder="Enter the code your agent gave you."
                className="!placeholder:text-black pr-10 placeholder:text-xs placeholder:text-black"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                {status === 'loading' && (
                  <Loader2 className="h-4 w-4 animate-spin text-black" />
                )}
                {status === 'found' && (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                )}
                {(status === 'not-found' || status === 'error') && (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
              </span>
            </div>
          </FormControl>

          {status === 'loading' && (
            <p className="mt-1 text-xs text-black">Checking agent code...</p>
          )}
          {status === 'found' && (
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-green-600">
              <CheckCircle2 className="h-3 w-3" />
              Agent verified
            </p>
          )}
          {status === 'not-found' && (
            <p className="mt-1 text-xs font-medium text-red-600">
              No agent found with this code. Please check it with your agent.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-1 text-xs font-medium text-red-600">
              Could not verify the agent code. Please try again.
            </p>
          )}
          {status === 'idle' && (
            <p className="mt-1 text-xs text-black">Example: WCAG1024</p>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default AgentCodeField;
