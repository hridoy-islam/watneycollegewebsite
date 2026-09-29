import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import type { AgentApplicantFilterKey } from './applicant-filters';

export interface AgentStat {
  label: string;
  /** One line saying what the number actually counts. */
  helper: string;
  value: number;
  icon: LucideIcon;
  /** The slice of the applicant list this counter stands for. */
  filter?: AgentApplicantFilterKey;
}

/**
 * One counter on the agent dashboard.
 *
 * A counter is a question - "which four?" - so it opens the applicant list
 * narrowed to exactly what it counted. A real link rather than an onClick, so
 * it can be opened in a new tab and reached from the keyboard like any other.
 */
export function StatCard({
  label,
  helper,
  value,
  icon: Icon,
  filter
}: AgentStat) {
  const body = (
    <>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-watney/20 bg-watney/10 text-watney">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
        {value}
      </p>
      <p className="mt-1 text-xs text-gray-500">{helper}</p>
    </>
  );

  const shell =
    'block rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm';

  if (!filter) {
    return <div className={shell}>{body}</div>;
  }

  return (
    <Link
      href={`/agent/applicants?filter=${filter}`}
      className={`${shell} transition-colors hover:border-watney/40 hover:bg-watney/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-watney/40`}
    >
      {body}
    </Link>
  );
}

export default StatCard;
