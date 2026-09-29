'use client';

/**
 * The offer letter, and the applicant's answer to it.
 *
 * It lives inside the applicant dashboard - `/dashboard/offer-letter/[id]` -
 * so it inherits the portal shell and its login guard. It used to be a public
 * page whose URL carried the applicant's name, email and date of birth in the
 * query string; anyone holding that link could read them and answer on the
 * applicant's behalf.
 *
 * What it renders is the letter itself - letterhead, reference, addressee,
 * body, a schedule of the programme and a signature block - so the applicant
 * reads the same document on screen as they get when they print it.
 */

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  CircleSlash,
  Clock,
  Mail,
  MapPin,
  Phone,
  Printer
} from 'lucide-react';

import { fetchMyOffer, respondToOffer } from '@/lib/portal';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { BlinkingDots } from '@/components/blinking-dots';

// ─── Types ───────────────────────────────────────────────────────────────────

type PageState =
  | 'loading'
  | 'missing'
  | 'forbidden'
  | 'no-offer'
  | 'ready'
  | 'failed';

type ActionType = 'accept' | 'decline';

const COLLEGE = {
  name: 'Watney College',
  address: '80-83 Long Lane, London, EC1A 9ET',
  email: 'admissions@watneycollege.co.uk',
  phone: '+44 (0) 20 4577 1400'
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const formatDate = (value?: string | null, fallback = 'To be confirmed') => {
  if (!value) return fallback;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime())
    ? fallback
    : parsed.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
};

const fullName = (person: any) =>
  [person?.title, person?.firstName, person?.initial, person?.lastName]
    .filter(Boolean)
    .join(' ') ||
  person?.name ||
  'Applicant';

// ─── Letter chrome ───────────────────────────────────────────────────────────

function Letterhead() {
  return (
    <div className="flex flex-col gap-4 border-b-2 border-watney px-8 py-6 sm:flex-row sm:items-center sm:justify-between print:px-0">
      <img src="/watney.png" alt={COLLEGE.name} className="h-12 w-auto" />
      <div className="text-xs leading-relaxed text-gray-700 sm:text-right">
        <p className="flex items-center gap-1.5 sm:justify-end">
          <MapPin className="h-3 w-3 shrink-0" />
          {COLLEGE.address}
        </p>
        <p className="flex items-center gap-1.5 sm:justify-end">
          <Mail className="h-3 w-3 shrink-0" />
          {COLLEGE.email}
        </p>
        <p className="flex items-center gap-1.5 sm:justify-end">
          <Phone className="h-3 w-3 shrink-0" />
          {COLLEGE.phone}
        </p>
      </div>
    </div>
  );
}

/** One row of the programme schedule. */
function ScheduleRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-gray-200 last:border-0">
      <th
        scope="row"
        className="w-1/3 bg-gray-50 px-4 py-3 text-left align-top text-xs font-semibold uppercase tracking-wide text-gray-700"
      >
        {label}
      </th>
      <td className="px-4 py-3 align-top text-sm font-medium text-gray-900">
        {value}
      </td>
    </tr>
  );
}

/** The banner stating how the offer stands, above the letter. */
function ResponseBanner({ offerStatus, respondedAt }: any) {
  if (offerStatus === 'accepted') {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
        <div className="text-sm text-emerald-900">
          <p className="font-semibold">You accepted this offer</p>
          <p className="mt-0.5 text-emerald-800">
            Accepted on {formatDate(respondedAt, 'an earlier date')}. Admissions
            will be in touch with your enrolment and induction details.
          </p>
        </div>
      </div>
    );
  }

  if (offerStatus === 'rejected') {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
        <CircleSlash className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
        <div className="text-sm text-red-900">
          <p className="font-semibold">You declined this offer</p>
          <p className="mt-0.5 text-red-800">
            Declined on {formatDate(respondedAt, 'an earlier date')}. If this was
            a mistake, contact admissions as soon as you can.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 print:hidden">
      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
      <div className="text-sm text-amber-900">
        <p className="font-semibold">Awaiting your response</p>
        <p className="mt-0.5 text-amber-800">
          Read the letter below, then accept or decline at the bottom of the
          page. Your answer is recorded against this application only.
        </p>
      </div>
    </div>
  );
}

/** A full page message - not signed in for this offer, no offer, and so on. */
function Notice({
  icon,
  title,
  description,
  action
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <img src="/watney.png" alt={COLLEGE.name} className="mx-auto h-10" />
        <div className="mt-6 flex justify-center">{icon}</div>
        <h1 className="mt-4 text-lg font-semibold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          {description}
        </p>
        {action && <div className="mt-6">{action}</div>}
        <p className="mt-6 text-xs text-gray-600">
          Need help?{' '}
          <a
            href={`mailto:${COLLEGE.email}`}
            className="font-medium text-watney hover:underline"
          >
            {COLLEGE.email}
          </a>
        </p>
      </div>
    </div>
  );
}

// ─── The letter ──────────────────────────────────────────────────────────────

export function OfferLetterView({ applicationId }: { applicationId: string }) {
  const user = useSelector((state: any) => state.auth.user);

  const [state, setState] = useState<PageState>('loading');
  const [application, setApplication] = useState<any>(null);
  const [confirming, setConfirming] = useState(false);
  const [action, setAction] = useState<ActionType>('accept');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [responseError, setResponseError] = useState('');

  const load = useCallback(async () => {
    if (!applicationId) {
      setState('missing');
      return;
    }

    try {
      // The endpoint is authenticated and checks that the signed in account is
      // the one the offer was made to, so an offer belonging to someone else
      // comes back as "not found" rather than as data we then have to hide.
      const data = await fetchMyOffer(applicationId);

      if (!data) {
        setState('missing');
        return;
      }

      setApplication(data);

      // A rejection is recorded as an offer type but is not an offer letter.
      if (!data.offerType || data.offerType === 'reject') {
        setState('no-offer');
        return;
      }

      setState('ready');
    } catch (error: any) {
      const status = error?.response?.status;
      if (status === 404) {
        setState('forbidden');
        return;
      }
      console.error('Could not load the offer:', error);
      setState('failed');
    }
  }, [applicationId]);

  useEffect(() => {
    load();
  }, [load]);

  const respond = async () => {
    setConfirming(true);
    try {
      const updated = await respondToOffer(
        applicationId,
        action === 'accept' ? 'accepted' : 'rejected'
      );
      setDialogOpen(false);
      // The API hands back the offer as it now stands, so the banner and the
      // hidden decision panel follow without a second round trip.
      if (updated) setApplication(updated);
      else await load();
    } catch (error: any) {
      console.error('Could not record your response:', error);
      setResponseError(
        error?.response?.data?.message ||
          'We could not record your response. Please try again.'
      );
    } finally {
      setConfirming(false);
    }
  };

  // ── States other than the letter ──

  if (state === 'loading') {
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <BlinkingDots size="large" color="bg-watney" />
        <p className="text-sm text-gray-700">Loading your offer letter...</p>
      </div>
    );
  }

  if (state === 'missing') {
    return (
      <Notice
        icon={<AlertTriangle className="h-10 w-10 text-amber-500" />}
        title="We could not find that offer"
        description="The link does not point at an offer we hold. Open your Offer Letter page to see every offer on your applications."
        action={
          <Link href="/dashboard/offer-letter">
            <Button className="w-full bg-watney text-white hover:bg-watney/90">
              Go to my offer letters
            </Button>
          </Link>
        }
      />
    );
  }

  if (state === 'forbidden') {
    return (
      <Notice
        icon={<CircleSlash className="h-10 w-10 text-red-500" />}
        title="We could not open that offer"
        description={`You are signed in as ${user?.email}. Either that offer does not exist, or it was made to a different applicant. Check your Offer Letter page for the offers on your own applications.`}
        action={
          <Link href="/dashboard">
            <Button className="w-full bg-watney text-white hover:bg-watney/90">
              Back to my dashboard
            </Button>
          </Link>
        }
      />
    );
  }

  if (state === 'failed') {
    return (
      <Notice
        icon={<AlertTriangle className="h-10 w-10 text-amber-500" />}
        title="Something went wrong"
        description="We could not load your offer letter just now. Please refresh the page and try again in a moment."
      />
    );
  }

  if (state === 'no-offer') {
    return (
      <Notice
        icon={<Clock className="h-10 w-10 text-amber-500" />}
        title="No offer has been issued yet"
        description="Your application is still with the admissions team. As soon as they issue an offer it will appear on your Offer Letter page and we will email you."
        action={
          <Link href="/dashboard/offer-letter">
            <Button className="w-full bg-watney text-white hover:bg-watney/90">
              Go to my offer letters
            </Button>
          </Link>
        }
      />
    );
  }

  // ── The letter ──

  const applicant = application.applicantId || application.studentId || {};
  const course = application.courseId || {};
  const intake = application.intakeId || course.intakeId || {};
  const awardingBody = course.awardingBodyId || {};

  const conditional = application.offerType === 'conditional';
  const answered =
    application.offerStatus === 'accepted' ||
    application.offerStatus === 'rejected';

  const applicantAddress = [
    applicant.residentialAddressLine1 || applicant.postalAddressLine1,
    applicant.residentialAddressLine2 || applicant.postalAddressLine2,
    applicant.residentialCity || applicant.postalCity,
    applicant.residentialPostCode || applicant.postalPostCode,
    applicant.residentialCountry || applicant.postalCountry
  ].filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl space-y-4 print:max-w-none">
        {/* Toolbar - screen only */}
        <div className="flex items-center justify-between print:hidden">
          <Link
            href="/dashboard/offer-letter"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-watney"
          >
            <ArrowLeft className="h-4 w-4" />
            My offer letters
          </Link>
          {/* <Button
            variant="outline"
            size="sm"
            onClick={() => window.print()}
            className="gap-1.5"
          >
            <Printer className="h-4 w-4" />
            Print / save as PDF
          </Button> */}
        </div>

        <ResponseBanner
          offerStatus={application.offerStatus}
          respondedAt={application.offerRespondedAt}
        />

        {/* The letter itself */}
        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm print:rounded-none print:border-0 print:shadow-none">
          <Letterhead />

          <div className="space-y-6 px-8 py-8 text-sm leading-relaxed text-gray-900 print:px-0">
            {/* Reference and date */}
            <div className="flex flex-wrap justify-between gap-4 text-xs text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">
                  Our reference:
                </span>{' '}
                {application.refId || '—'}
              </p>
              <p>
                <span className="font-semibold text-gray-900">Date:</span>{' '}
                {formatDate(application.updatedAt || application.createdAt)}
              </p>
            </div>

            {/* Addressee */}
            <address className="not-italic">
              <p className="font-semibold text-gray-900">
                {fullName(applicant)}
              </p>
              {applicantAddress.map((line) => (
                <p key={line} className="text-gray-800">
                  {line}
                </p>
              ))}
              {applicant.email && (
                <p className="mt-1 text-gray-700">{applicant.email}</p>
              )}
            </address>

            {/* Subject */}
            <h1 className="border-y border-gray-200 py-3 text-base font-bold uppercase tracking-wide text-gray-900">
              {conditional ? 'Conditional' : 'Unconditional'} offer of a place —{' '}
              {course.name || 'your programme'}
            </h1>

            {/* Body */}
            <div className="space-y-4">
              <p>Dear {applicant.firstName || fullName(applicant)},</p>

              <p>
                Thank you for applying to {COLLEGE.name}. Following a review of
                your application, I am pleased to confirm that we are able to
                offer you a{conditional ? '' : 'n'}{' '}
                <strong>
                  {conditional ? 'conditional' : 'unconditional'} offer
                </strong>{' '}
                of a place on the programme set out below.
              </p>

              {conditional ? (
                <p>
                  This offer is conditional. Your place is held for you, but it
                  is confirmed only once you have met the outstanding conditions
                  — normally the verification of your qualifications, identity
                  and right to study documents. Our admissions team will write
                  to you separately setting out exactly what is outstanding, and
                  will confirm your place in writing once everything is in
                  order.
                </p>
              ) : (
                <p>
                  This offer is unconditional. You have met the entry
                  requirements for the programme in full, and no further
                  conditions apply. All that remains is for you to accept, after
                  which we will send you your enrolment and induction details.
                </p>
              )}
            </div>

            {/* Programme schedule */}
            <section>
              <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-700">
                Details of your offer
              </h2>
              <table className="w-full border-collapse overflow-hidden rounded-lg border border-gray-200">
                <tbody>
                  <ScheduleRow
                    label="Applicant"
                    value={fullName(applicant)}
                  />
                  <ScheduleRow
                    label="Date of birth"
                    value={formatDate(applicant.dateOfBirth, '—')}
                  />
                  <ScheduleRow
                    label="Application reference"
                    value={application.refId || '—'}
                  />
                  <ScheduleRow
                    label="Programme"
                    value={course.name || 'To be confirmed'}
                  />
                  {course.courseCode && (
                    <ScheduleRow
                      label="Course code"
                      value={course.courseCode}
                    />
                  )}
                  <ScheduleRow
                    label="Intake"
                    value={intake.termName || 'To be confirmed'}
                  />
                  {course.duration && (
                    <ScheduleRow label="Duration" value={course.duration} />
                  )}
                  {awardingBody.name && (
                    <ScheduleRow
                      label="Awarding body"
                      value={awardingBody.name}
                    />
                  )}
                  <ScheduleRow
                    label="Type of offer"
                    value={conditional ? 'Conditional' : 'Unconditional'}
                  />
                  {/* <ScheduleRow
                    label="Mode of study"
                    value="Full time, on campus"
                  /> */}
                </tbody>
              </table>
            </section>

            {/* Next steps */}
            <section>
              <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-700">
                What happens next
              </h2>
              <ol className="list-outside list-decimal space-y-1.5 pl-5 text-gray-800">
                <li>
                  Read this letter in full and keep a copy for your records —
                  you can print it or save it as a PDF from this page.
                </li>
                <li>
                  Record your decision using the buttons at the bottom of this
                  page. Your answer reaches admissions immediately.
                </li>
                {conditional && (
                  <li>
                    Send us anything still outstanding so we can move your offer
                    from conditional to confirmed.
                  </li>
                )}
                <li>
                  Once you have accepted, we will email your enrolment
                  instructions, fee schedule and induction dates.
                </li>
              </ol>
            </section>

            <p>
              If anything in this letter is unclear, or your circumstances have
              changed since you applied, please contact the admissions team at{' '}
              <a
                href={`mailto:${COLLEGE.email}`}
                className="font-medium text-watney hover:underline"
              >
                {COLLEGE.email}
              </a>{' '}
              quoting your reference above. We look forward to welcoming you.
            </p>

            {/* Signature */}
            <div className="pt-2">
              <p>Yours sincerely,</p>
              <p className="mt-6 font-semibold text-gray-900">
                Admissions Office
              </p>
              <p className="text-gray-700">{COLLEGE.name}</p>
            </div>

            <p className="border-t border-gray-200 pt-4 text-[11px] leading-relaxed text-gray-600">
              This offer is made on the basis of the information supplied in
              your application and is subject to {COLLEGE.name}&apos;s terms and
              conditions, admissions policy and academic regulations. The
              college reserves the right to withdraw an offer where information
              provided is found to be incomplete or inaccurate.
            </p>
          </div>
        </article>

        {/* Decision */}
        {!answered && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm print:hidden">
            <h2 className="text-sm font-semibold text-gray-900">
              Your decision
            </h2>
            <p className="mt-1 text-sm text-gray-700">
              Let us know whether you wish to take up this place. This applies
              to <strong>{course.name}</strong> only — any other application you
              hold is unaffected.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800 sm:w-auto"
                onClick={() => {
                  setAction('decline');
                  setDialogOpen(true);
                }}
              >
                Decline offer
              </Button>
              <Button
                className="bg-watney text-white hover:bg-watney/90 sm:w-auto sm:px-10"
                onClick={() => {
                  setAction('accept');
                  setDialogOpen(true);
                }}
              >
                Accept offer
              </Button>
            </div>
          </div>
      )}

      {/* Confirmation */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {action === 'accept' ? 'Accept this offer?' : 'Decline this offer?'}
            </DialogTitle>
            <DialogDescription className="pt-1">
              {action === 'accept' ? (
                <>
                  You are accepting your{' '}
                  {conditional ? 'conditional' : 'unconditional'} offer for{' '}
                  <strong className="text-gray-900">{course.name}</strong>
                  {intake.termName ? `, ${intake.termName}` : ''}.
                </>
              ) : (
                <>
                  You are declining your offer for{' '}
                  <strong className="text-gray-900">{course.name}</strong>. Your
                  place will be released to another applicant.
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {action === 'accept' && conditional && (
            <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Accepting a conditional offer does not confirm your place. It is
                confirmed once the outstanding conditions have been met.
              </span>
            </div>
          )}

          <p className="text-xs text-gray-700">
            Your answer is recorded straight away and cannot be changed from
            this page. If you need to change it later, contact admissions.
          </p>

          {responseError && (
            <p className="text-xs font-medium text-red-600">{responseError}</p>
          )}

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              disabled={confirming}
            >
              Go back
            </Button>
            <Button
              className={
                action === 'accept'
                  ? 'bg-watney text-white hover:bg-watney/90'
                  : 'bg-red-600 text-white hover:bg-red-700'
              }
              onClick={respond}
              disabled={confirming}
            >
              {confirming
                ? 'Recording...'
                : action === 'accept'
                  ? 'Yes, accept my offer'
                  : 'Yes, decline'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default OfferLetterView;
