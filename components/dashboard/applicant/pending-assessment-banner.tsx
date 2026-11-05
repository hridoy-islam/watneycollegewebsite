'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchMyAssessments, type MyAssessment } from '@/lib/portal';

/**
 * Tells the applicant, on their dashboard, that an assessment is waiting, and
 * is the way into it - the portal has no Assessments page in its nav. Each
 * notice opens its own assessment and goes once that assessment is submitted.
 * Renders nothing when there is none, or when the list cannot be read.
 */
export function PendingAssessmentBanner() {
  const [pending, setPending] = useState<MyAssessment[]>([]);

  useEffect(() => {
    fetchMyAssessments()
      .then((items) => setPending(items.filter((a) => a.status !== 'submitted')))
      .catch(() => setPending([]));
  }, []);

  if (!pending.length) return null;

  return (
    <div className="space-y-3">
      {pending.map((assessment) => (
        <div
          key={assessment._id}
          className="flex flex-col gap-3 rounded-xl border border-watney/30 bg-watney/5 p-4 sm:flex-row sm:items-center"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-watney text-white">
            <ClipboardCheck className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-black">
              You have an assessment to complete: {assessment.title}
            </p>
            <p className="text-sm text-black">
              The admissions team needs this to continue with your application.
            </p>
          </div>
          <Link href={`/dashboard/assessments/${assessment._id}`}>
            <Button>
              {assessment.status === 'in-progress' ? 'Continue' : 'Start assessment'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PendingAssessmentBanner;
