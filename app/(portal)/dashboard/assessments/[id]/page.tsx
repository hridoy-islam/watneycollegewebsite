'use client';

/**
 * Sitting one admission assessment.
 *
 * Three states, all driven by the API's status:
 *   assigned     - the briefing: what it is, how long, and a Start button.
 *                  The questions have not been sent yet.
 *   in-progress  - the paper, a countdown and the answers. Answers are saved
 *                  as they are given. The applicant cannot leave mid-attempt:
 *                  a link or the back button asks first and submits on
 *                  confirm; logging out or closing the tab submits at once.
 *   submitted    - a receipt.
 *
 * The countdown is measured against the server's clock, not the browser's,
 * and when it reaches zero the answers are submitted automatically.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import moment from 'moment';
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Cloud,
  CloudOff,
  ListChecks,
  Loader2,
  PlayCircle,
  Send,
  Trophy
} from 'lucide-react';
import { BlinkingDots } from '@/components/blinking-dots';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import {
  apiMessage,
  fetchMyAssessment,
  saveMyAnswers,
  startMyAssessment,
  submitMyAssessment,
  submitMyAssessmentOnLeave,
  setLeaveGuard,
  type AnswerPayload,
  type MyAssessment
} from '@/lib/portal';

type Answers = Record<string, string[]>;

const formatClock = (ms: number) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};

const toPayload = (answers: Answers): AnswerPayload =>
  Object.entries(answers).map(([questionId, selectedOptions]) => ({
    questionId,
    selectedOptions
  }));

function Html({ html, className }: { html?: string; className?: string }) {
  if (!html) return null;
  return (
    <div
      className={cn('assessment-html', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function TakeAssessmentPage() {
  const params = useParams();
  const router = useRouter();
  const id = String(params?.id || '');

  const [data, setData] = useState<MyAssessment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [answers, setAnswers] = useState<Answers>({});
  const [confirmStart, setConfirmStart] = useState(false);
  const [starting, setStarting] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  // Where the applicant tried to go mid-attempt: a path, or 'back'.
  const [leaveTarget, setLeaveTarget] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);
  // Set once the attempt is being closed, so the guards stand down.
  const released = useRef(false);

  // Server time minus browser time, so the countdown follows the server.
  const clockOffset = useRef(0);
  const [now, setNow] = useState(Date.now());
  const autoSubmitted = useRef(false);
  const answersRef = useRef<Answers>({});
  answersRef.current = answers;

  const applyData = useCallback((next: MyAssessment) => {
    if (next?.serverNow) {
      clockOffset.current = new Date(next.serverNow).getTime() - Date.now();
    }
    setData(next);
    if (next?.status === 'in-progress') {
      const restored: Answers = {};
      next.savedAnswers?.forEach((a) => {
        restored[String(a.questionId)] = a.selectedOptions.map(String);
      });
      setAnswers(restored);
    }
  }, []);

  useEffect(() => {
    if (!id) return;
    fetchMyAssessment(id)
      .then(applyData)
      .catch((e) => setError(apiMessage(e, 'We could not load this assessment.')))
      .finally(() => setLoading(false));
  }, [id, applyData]);

  const inProgress = data?.status === 'in-progress';
  const deadline = data?.deadline ? new Date(data.deadline).getTime() : 0;
  const remaining = inProgress ? deadline - (now + clockOffset.current) : 0;

  // Tick once a second while the clock is running.
  useEffect(() => {
    if (!inProgress) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [inProgress]);

  // ─── No leaving mid-attempt ────────────────────────────────────────────────
  // Closing or reloading the tab submits the answers as the page goes.
  useEffect(() => {
    if (!inProgress) return;
    const submitOnExit = () => {
      if (released.current) return;
      released.current = true;
      submitMyAssessmentOnLeave(id, toPayload(answersRef.current));
    };
    window.addEventListener('pagehide', submitOnExit);
    return () => window.removeEventListener('pagehide', submitOnExit);
  }, [inProgress, id]);

  // Links anywhere on the page (the portal menu included): ask first. Caught
  // in the capture phase so the router never sees the click.
  useEffect(() => {
    if (!inProgress) return;
    const onClick = (e: MouseEvent) => {
      if (released.current || e.defaultPrevented || e.button !== 0) return;
      const link = (e.target as HTMLElement | null)?.closest?.('a[href]') as
        | HTMLAnchorElement
        | null;
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // in-page anchors
      e.preventDefault();
      e.stopPropagation();
      setLeaveTarget(url.pathname + url.search + url.hash);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [inProgress]);

  // Logging out submits first - the logout clears the token the submit needs.
  useEffect(() => {
    if (!inProgress) return;
    setLeaveGuard(async (proceed) => {
      if (!released.current) {
        released.current = true;
        try {
          await submitMyAssessment(id, toPayload(answersRef.current));
        } catch {
          /* already closed, or offline - log out regardless */
        }
      }
      proceed();
    });
    return () => setLeaveGuard(null);
  }, [inProgress, id]);

  // The back button: keep an extra history entry to step back onto, and ask.
  useEffect(() => {
    if (!inProgress) return;
    window.history.pushState({ assessmentGuard: true }, '', window.location.href);
    const onPop = () => {
      if (released.current) return;
      window.history.pushState({ assessmentGuard: true }, '', window.location.href);
      setLeaveTarget('back');
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [inProgress]);

  // ─── Saving as they go ─────────────────────────────────────────────────────
  const dirty = useRef(false);
  useEffect(() => {
    if (!inProgress || !dirty.current) return;
    setSaveState('saving');
    const timer = setTimeout(() => {
      saveMyAnswers(id, toPayload(answers))
        .then(() => setSaveState('saved'))
        .catch(() => setSaveState('error'));
    }, 800);
    return () => clearTimeout(timer);
  }, [answers, id, inProgress]);

  const choose = (questionId: string, optionId: string) => {
    dirty.current = true;
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      const next = current.includes(optionId)
        ? current.filter((o) => o !== optionId)
        : [...current, optionId];
      return { ...prev, [questionId]: next };
    });
  };

  // ─── Start / submit ────────────────────────────────────────────────────────
  const handleStart = async () => {
    setStarting(true);
    try {
      applyData(await startMyAssessment(id));
      setConfirmStart(false);
      window.scrollTo({ top: 0 });
    } catch (e) {
      setError(apiMessage(e, 'We could not start the assessment.'));
      setConfirmStart(false);
    } finally {
      setStarting(false);
    }
  };

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
    setSubmitError('');
    try {
      const result = await submitMyAssessment(id, toPayload(answersRef.current));
      applyData(result);
      setConfirmSubmit(false);
      window.scrollTo({ top: 0 });
    } catch (e) {
      // Already closed (by the timer on the server, say) - show where it stands.
      try {
        const latest = await fetchMyAssessment(id);
        if (latest?.status === 'submitted') {
          applyData(latest);
          setConfirmSubmit(false);
          return;
        }
      } catch {
        /* fall through to the message */
      }
      setSubmitError(apiMessage(e, 'We could not submit your answers. Please try again.'));
    } finally {
      setSubmitting(false);
    }
  }, [id, applyData]);

  // Confirmed leaving: submit, then go where they were heading.
  const submitAndLeave = async () => {
    if (!leaveTarget) return;
    setLeaving(true);
    released.current = true;
    try {
      await submitMyAssessment(id, toPayload(answersRef.current));
    } catch {
      // Already closed, or the network failed - the server's timer will close
      // the attempt with the answers saved so far.
    }
    if (leaveTarget === 'back') window.history.go(-2);
    else router.push(leaveTarget);
  };

  // Time up: submit whatever has been answered.
  useEffect(() => {
    if (inProgress && deadline && remaining <= 0 && !autoSubmitted.current) {
      autoSubmitted.current = true;
      handleSubmit();
    }
  }, [inProgress, deadline, remaining, handleSubmit]);

  const questions = data?.questions || [];
  const answeredCount = useMemo(
    () => questions.filter((q) => (answers[q._id] || []).length > 0).length,
    [questions, answers]
  );
  const unanswered = questions.length - answeredCount;

  // ─── Render ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <BlinkingDots size="large" color="bg-watney" />
      </div>
    );
  }

  const back = (
    <Link
      href="/dashboard"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:underline"
    >
      <ArrowLeft className="h-4 w-4" /> Back to dashboard
    </Link>
  );

  if (error || !data) {
    return (
      <div className="space-y-4">
        {back}
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <AlertTriangle className="mx-auto mb-2 h-8 w-8 text-red-600" />
          <p className="font-medium text-black">{error || 'Assessment not found.'}</p>
        </div>
      </div>
    );
  }

  // Submitted
  if (data.status === 'submitted') {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        {back}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-9 w-9 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-semibold text-black">Assessment submitted</h1>
          <p className="mt-2 text-black">
            Thank you. Your answers to <strong>{data.title}</strong> have been
            received and the admissions team has been notified. They will be in
            touch about the next step of your application.
          </p>
          {data.submittedAt && (
            <p className="mt-4 text-sm text-black">
              Submitted {moment(data.submittedAt).format('DD MMM YYYY [at] HH:mm')}
            </p>
          )}
          <Link href="/dashboard" className="mt-6 inline-block">
            <Button>Back to dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Briefing
  if (data.status === 'assigned') {
    const overdue = data.dueDate && moment().isAfter(data.dueDate);
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        {back}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="bg-watney px-6 py-7 text-white sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Admission assessment
            </p>
            <h1 className="mt-1 text-2xl font-semibold">{data.title}</h1>
          </div>
          <div className="space-y-6 p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: ListChecks, label: 'Questions', value: data.questionCount },
                { icon: Clock, label: 'Minutes', value: data.duration },
                { icon: Trophy, label: 'Total marks', value: data.totalMarks }
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-gray-200 p-4 text-center">
                  <Icon className="mx-auto mb-1 h-5 w-5 text-watney" />
                  <p className="text-2xl font-semibold text-black">{value}</p>
                  <p className="text-xs text-black">{label}</p>
                </div>
              ))}
            </div>

          

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-black">
                <AlertTriangle className="h-4 w-4 text-amber-600" /> Before you start
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-black">
                <li>You have {data.duration} minutes once you press Start, and the timer cannot be paused.</li>
                <li>Your answers are saved as you go. Once you start, leaving the page, logging out, or closing or reloading the tab submits your answers.</li>
                <li>When the time runs out your answers are submitted automatically.</li>
                <li>A question can have more than one correct answer - select every option that applies.</li>
              </ul>
            </div>

            {data.dueDate && (
              <p className={cn('text-sm', overdue ? 'font-medium text-red-700' : 'text-black')}>
                {overdue ? 'The deadline passed on ' : 'Please complete by '}
                {moment(data.dueDate).format('DD MMM YYYY')}.
              </p>
            )}

            <Button
              onClick={() => setConfirmStart(true)}
              disabled={!!overdue}
              className="w-full sm:w-auto"
            >
              <PlayCircle className="h-5 w-5" /> Start assessment
            </Button>
          </div>
        </div>

        <Dialog open={confirmStart} onOpenChange={setConfirmStart}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-black">Start the assessment now?</DialogTitle>
              <DialogDescription className="text-black">
                The {data.duration}-minute timer starts as soon as you continue and
                cannot be paused.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button onClick={() => setConfirmStart(false)} disabled={starting}>
                Not yet
              </Button>
              <Button onClick={handleStart} disabled={starting}>
                {starting && <Loader2 className="h-4 w-4 animate-spin" />}
                Start now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // In progress
  const lowTime = remaining < 5 * 60 * 1000;

  // The paper as the admin built it: sections, each with a title, an optional
  // paragraph and its questions. Questions are numbered straight through.
  const sections = data.sections?.length
    ? data.sections
    : [{ _id: 'all', title: '', passage: '', questions }];
  const numberOf = new Map(questions.map((q, i) => [q._id, i + 1]));

  return (
    <div className="space-y-5">
      {/* Sticky bar: title, clock, progress, submit */}
      <div className="sticky top-0 z-30 -mx-4 border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-base font-semibold text-black">{data.title}</p>
            <div className="mt-1 flex items-center gap-3">
              <div className="h-1.5 w-40 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-watney transition-all"
                  style={{ width: `${questions.length ? (answeredCount / questions.length) * 100 : 0}%` }}
                />
              </div>
              <span className="text-xs text-black">
                {answeredCount}/{questions.length} answered
              </span>
              <span className="hidden items-center gap-1 text-xs text-black sm:flex">
                {saveState === 'saving' ? (
                  <><Loader2 className="h-3 w-3 animate-spin" /> Saving…</>
                ) : saveState === 'saved' ? (
                  <><Cloud className="h-3 w-3" /> Saved</>
                ) : saveState === 'error' ? (
                  <><CloudOff className="h-3 w-3 text-red-600" /> Not saved</>
                ) : null}
              </span>
            </div>
          </div>
          <div
            className={cn(
              'flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-lg font-semibold tabular-nums',
              lowTime ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-black'
            )}
            aria-live="polite"
          >
            <Clock className="h-5 w-5" />
            {formatClock(remaining)}
          </div>
          <Button onClick={() => setConfirmSubmit(true)} disabled={submitting}>
            <Send className="h-4 w-4" /> Submit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_240px]">
        <div className="min-w-0 space-y-4">
          {sections.map((section, sectionIndex) => (
            <section
              key={section._id}
              className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm"
            >
              {(section.title || sections.length > 1) && (
                <div className="border-b border-gray-200 bg-gray-50 px-5 py-3">
                  {sections.length > 1 && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-black">
                      Section {sectionIndex + 1}
                    </p>
                  )}
                  {section.title && (
                    <h2 className="text-base font-semibold text-black">{section.title}</h2>
                  )}
                </div>
              )}

              <div className="space-y-4 p-5">
                {section.passage && (
                  <div className="rounded-lg bg-gray-50 p-4">
                    <Html html={section.passage} />
                  </div>
                )}

                {section.questions.map((q) => {
                  const number = numberOf.get(q._id) ?? 0;
                  const selected = answers[q._id] || [];

                  return (
                    <div
                      key={q._id}
                      id={`q-${number}`}
                      className={cn(
                        'scroll-mt-28 rounded-lg border p-4 transition-colors',
                        selected.length ? 'border-watney/40' : 'border-gray-200'
                      )}
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div className="flex min-w-0 gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-watney text-xs font-bold text-white">
                            {number}
                          </span>
                          <Html html={q.question} className="min-w-0 flex-1 pt-0.5" />
                        </div>
                        <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-black">
                          {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
                        </span>
                      </div>

                      <p className="mb-2 text-xs font-medium text-black">
                        Select all that apply
                      </p>

                      <div className="space-y-2">
                        {q.options.map((o, oi) => {
                          const checked = selected.includes(o._id);
                          return (
                            <label
                              key={o._id}
                              className={cn(
                                'flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors',
                                checked ? 'border-watney bg-watney/5' : 'border-gray-200 hover:bg-gray-50'
                              )}
                            >
                              <Checkbox
                                checked={checked}
                                onCheckedChange={() => choose(q._id, o._id)}
                                className="h-5 w-5 border-gray-400 shadow-none"
                              />
                              <span className="text-sm font-semibold text-black">
                                {String.fromCharCode(65 + oi)}.
                              </span>
                              <span className="text-sm text-black">{o.text}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <div className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-black">
              You have answered {answeredCount} of {questions.length} questions.
            </p>
            <Button onClick={() => setConfirmSubmit(true)} disabled={submitting}>
              <Send className="h-4 w-4" /> Submit assessment
            </Button>
          </div>
        </div>

        {/* Question navigator */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="mb-3 text-sm font-semibold text-black">Questions</p>
            <div className="space-y-3">
              {sections.map((section, sectionIndex) => (
                <div key={section._id}>
                  {sections.length > 1 && (
                    <p className="mb-1.5 truncate text-xs font-medium text-black">
                      {section.title || `Section ${sectionIndex + 1}`}
                    </p>
                  )}
                  <div className="grid grid-cols-5 gap-2">
                    {section.questions.map((q) => {
                      const number = numberOf.get(q._id) ?? 0;
                      const done = (answers[q._id] || []).length > 0;
                      return (
                        <a
                          key={q._id}
                          href={`#q-${number}`}
                          className={cn(
                            'flex h-9 items-center justify-center rounded-md border text-xs font-semibold transition-colors',
                            done
                              ? 'border-watney bg-watney text-white'
                              : 'border-gray-300 text-black hover:bg-gray-50'
                          )}
                        >
                          {number}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1.5 text-xs text-black">
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-watney" /> Answered
              </p>
              <p className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm border border-gray-300" /> Not answered
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Trying to leave mid-attempt */}
      <AlertDialog
        open={!!leaveTarget}
        onOpenChange={(o) => !o && !leaving && setLeaveTarget(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-black">
              <AlertTriangle className="h-5 w-5 text-amber-600" /> Leave the assessment?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-black">
              If you leave this page your answers will be submitted now and you
              will not be able to come back to the assessment. You have answered{' '}
              {answeredCount} of {questions.length} questions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={leaving}>Stay and continue</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                submitAndLeave();
              }}
              disabled={leaving}
            >
              {leaving && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit and leave
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={confirmSubmit} onOpenChange={(o) => !submitting && setConfirmSubmit(o)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-black">Submit your answers?</DialogTitle>
            <DialogDescription className="text-black">
              {unanswered > 0
                ? `You have ${unanswered} unanswered ${unanswered === 1 ? 'question' : 'questions'}. `
                : 'You have answered every question. '}
              Once submitted you cannot change your answers.
            </DialogDescription>
          </DialogHeader>
          {submitError && <p className="text-sm text-red-700">{submitError}</p>}
          <DialogFooter className="gap-2">
            <Button onClick={() => setConfirmSubmit(false)} disabled={submitting}>
              Keep working
            </Button>
            <Button onClick={handleSubmit} disabled={submitting}>
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Time-up overlay while the automatic submit is on its way */}
      {remaining <= 0 && submitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <Loader2 className="mx-auto mb-2 h-6 w-6 animate-spin text-watney" />
            <p className="font-medium text-black">Time is up - submitting your answers…</p>
          </div>
        </div>
      )}
      {remaining <= 0 && !submitting && submitError && (
        <div className="fixed inset-x-4 bottom-4 z-50 rounded-xl border border-red-200 bg-white p-4 shadow-lg sm:left-auto sm:w-96">
          <p className="text-sm text-black">{submitError}</p>
          <Button onClick={handleSubmit} className="mt-3 w-full">
            Try again
          </Button>
        </div>
      )}
    </div>
  );
}
