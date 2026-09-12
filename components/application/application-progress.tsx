'use client';

import { Check } from 'lucide-react';

interface ApplicationProgressProps {
  /** Ordered labels, one per step. */
  steps: string[];
  /** 1-based index of the step being filled in. */
  currentStep: number;
  completedSteps: number[];
  /** The final step is filled in and ready to submit - the form is 100% done. */
  isReadyToSubmit?: boolean;
}

export function ApplicationProgress({
  steps,
  currentStep,
  completedSteps,
  isReadyToSubmit = false
}: ApplicationProgressProps) {
  const total = steps.length;

  const completed = Array.from(new Set(completedSteps)).filter(
    (step) => step >= 1 && step <= total
  );

  const percent = isReadyToSubmit
    ? 100
    : Math.min(100, Math.round((completed.length / total) * 100));

  const activeStep = Math.min(Math.max(currentStep, 1), total);
  const isComplete = percent === 100;
  const isDone = (step: number) => completed.includes(step) || isComplete;

  // The rail is inset by half a circle, so the fill lands exactly on the
  // centre of the furthest completed circle.
  const railFill = isComplete
    ? 100
    : total > 1
      ? (Math.max(completed.length - 1, 0) / (total - 1)) * 100
      : 0;

  const fillGradient = isComplete
    ? 'bg-gradient-to-r from-emerald-500 to-green-600'
    : 'bg-gradient-to-r from-watney to-blue-600';

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-gradient-to-b from-white to-slate-50/80 px-4 py-3 shadow-[0_1px_2px_rgba(16,24,40,0.05)] backdrop-blur-sm md:gap-6 md:px-5">
      {/* Phones keep a plain bar - eleven circles do not fit. */}
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100 shadow-inner sm:hidden">
        <div
          className={`h-full rounded-full transition-[width] duration-700 ease-out ${fillGradient}`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Application progress: step ${activeStep} of ${total}`}
        className="relative hidden flex-1 sm:block"
      >
        {/* One continuous rail behind the circles. */}
        <div className="absolute left-3 right-3 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gray-100">
          <div
            className={`h-full rounded-full transition-[width] duration-700 ease-out ${fillGradient}`}
            style={{ width: `${railFill}%` }}
          />
        </div>

        <ol className="relative flex items-center justify-between">
          {steps.map((label, index) => {
            const step = index + 1;
            const done = isDone(step);
            const active = step === activeStep && !done;

            return (
              <li key={label} title={label} className="flex">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold tabular-nums ring-4 ring-white transition-all duration-300 ${
                    done
                      ? `${
                          isComplete ? 'bg-green-600' : 'bg-watney'
                        } text-white shadow-[0_1px_3px_rgba(16,24,40,0.2)]`
                      : active
                        ? 'scale-110 border-2 border-watney bg-white text-watney shadow-[0_0_0_7px_hsl(var(--watney)/0.14)]'
                        : 'border border-gray-200 bg-white text-gray-400'
                  }`}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : step}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <span
        className={`flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-sm font-bold tracking-tight tabular-nums transition-colors ${
          isComplete
            ? 'bg-green-50 text-green-700'
            : 'bg-slate-100/80 text-gray-900'
        }`}
      >
        {isComplete && <Check className="h-3.5 w-3.5" />}
        {percent}
        <span className="text-xs font-semibold opacity-50">%</span>
      </span>
    </div>
  );
}

export default ApplicationProgress;
