'use client';

/**
 * The agent's own counters.
 *
 * Counted by `/applicants/agent/:id/stats` rather than in the browser: the
 * agent is recorded on the applicant and on the student User, never on the
 * application, so asking the application list for `?agentId=` filtered on a
 * field that does not exist and every counter came back nought.
 *
 * The counts come off the same slice definitions the applicant list narrows
 * by, so a counter and the list it opens cannot disagree - and five integers
 * no longer cost the whole applicant list to render.
 */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { BlinkingDots } from '@/components/blinking-dots';
import { EmptyState } from '@/components/dashboard/empty-state';
import { StatCard } from '@/components/dashboard/agent/stat-card';
import { buildAgentStats } from '@/components/dashboard/agent/agent-stats';
import {
  fetchAgentApplicantStats,
  type AgentApplicantStats
} from '@/lib/portal';

export default function AgentDashboardPage() {
  const agent = useSelector((state: any) => state.auth.user);
  const agentId = agent?._id;

  const [counts, setCounts] = useState<AgentApplicantStats>({
    all: 0,
    new: 0,
    'offer-received': 0,
    'offer-accepted': 0,
    enrolled: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!agentId) return;
    let cancelled = false;

    (async () => {
      try {
        const result = await fetchAgentApplicantStats(agentId);
        if (!cancelled) setCounts(result);
      } catch (error) {
        console.error('Could not load your applicant counts:', error);
        if (!cancelled) setLoadFailed(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [agentId]);

  const stats = buildAgentStats(counts);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-black">
          Agent Dashboard
        </h1>
        <p className="mt-1 text-sm text-black">
          The applicants you referred and how far each application has got.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      ) : loadFailed ? (
        <EmptyState
          title="We could not load your applicants"
          description="Please refresh the page and try again in a moment."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      )}
    </div>
  );
}
