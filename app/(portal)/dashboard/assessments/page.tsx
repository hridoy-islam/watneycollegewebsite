'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  ListChecks,
  Trophy
} from 'lucide-react';
import { BlinkingDots } from '@/components/blinking-dots';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/dashboard/empty-state';
import {
  ASSESSMENT_STATUS_BADGE,
  ASSESSMENT_STATUS_LABEL,
  fetchMyAssessments,
  type MyAssessment
} from '@/lib/portal';

const fmt = (value?: string) =>
  value ? moment(value).format('DD MMM YYYY, HH:mm') : '';

const actionLabel = (a: MyAssessment) =>
  a.status === 'assigned'
    ? 'Start assessment'
    : a.status === 'in-progress'
      ? 'Continue assessment'
      : 'View';

export default function AssessmentsPage() {
  const [items, setItems] = useState<MyAssessment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    fetchMyAssessments()
      .then(setItems)
      .catch(() => setLoadFailed(true))
      .finally(() => setIsLoading(false));
  }, []);

  const pending = items.filter((a) => a.status !== 'submitted').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          Assessments
        </h1>
        <p className="mt-1 text-sm text-black">
          Admission assessments the college has asked you to complete.
          {pending > 0 &&
            ` You have ${pending} waiting to be completed.`}
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      ) : loadFailed ? (
        <EmptyState
          title="We could not load your assessments"
          description="Please refresh the page and try again in a moment."
        />
      ) : items.length === 0 ? (
        <EmptyState
          title="No assessments yet"
          description="When the admissions team asks you to complete an assessment it will appear here, and we will email you too."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {items.map((a) => {
            const done = a.status === 'submitted';
            return (
              <div
                key={a._id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors hover:border-watney/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-watney/20 bg-watney/10 text-watney">
                      {done ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <ClipboardCheck className="h-5 w-5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold text-black">
                        {a.title}
                      </p>
                      <p className="text-xs text-black">
                        Assigned {fmt(a.createdAt)}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${ASSESSMENT_STATUS_BADGE[a.status]}`}
                  >
                    {ASSESSMENT_STATUS_LABEL[a.status]}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: ListChecks, label: 'Questions', value: a.questionCount },
                    { icon: Clock, label: 'Minutes', value: a.duration },
                    { icon: Trophy, label: 'Marks', value: a.totalMarks }
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-lg bg-gray-50 px-3 py-2.5">
                      <Icon className="mb-1 h-4 w-4 text-watney" />
                      <p className="text-lg font-semibold text-black">{value}</p>
                      <p className="text-xs text-black">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-1 flex-wrap items-end justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-xs text-black">
                    {done ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Submitted {fmt(a.submittedAt)}
                      </>
                    ) : a.dueDate ? (
                      <>
                        <CalendarClock className="h-3.5 w-3.5" />
                        Complete by {a.dueDate && moment(a.dueDate).format('DD MMM YYYY')}
                      </>
                    ) : null}
                  </p>
                  <Link href={`/dashboard/assessments/${a._id}`}>
                    <Button>
                      {actionLabel(a)}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
