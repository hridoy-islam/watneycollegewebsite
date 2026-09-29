'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlinkingDots } from '@/components/blinking-dots';
import { DataTablePagination } from '@/components/data-table-pagination';
import { EmptyState } from '@/components/dashboard/empty-state';
import { ApplicantList } from '@/components/dashboard/agent/applicant-list';
import { fetchAgentApplicants, type AgentApplicant } from '@/lib/portal';
import {
  AGENT_APPLICANT_FILTERS,
  isAgentApplicantFilterKey
} from '@/components/dashboard/agent/applicant-filters';
import {
  AgentFilterBar,
  emptyAgentFilters,
  useAgentFilterOptions,
  type AgentListFilters,
  type Option
} from '@/components/dashboard/agent/agent-filter-bar';

/** The statuses an application can be read in. */
const statusOptions: Option[] = [
  { value: 'applied', label: 'Applied' },
  { value: 'enrolled', label: 'Enrolled' },
  { value: 'rejected', label: 'Rejected' },
  { value: 'cancelled', label: 'Cancelled' }
];

/**
 * Every applicant under the agent - by their agent code or because the agent
 * applied for them - each carrying the status of every course they applied
 * for.
 */
export default function AgentApplicantsPage() {
  const agent = useSelector((state: any) => state.auth.user);
  const agentId = agent?._id;

  // The dashboard counters link in here with `?filter=` so a number opens the
  // very applicants it counted. Held in the URL rather than in state, so the
  // narrowed list can be shared and survives a refresh.
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams?.get('filter');
  const activeFilter = isAgentApplicantFilterKey(filterParam)
    ? filterParam
    : 'all';
  const activeFilterLabel = AGENT_APPLICANT_FILTERS[activeFilter].label;

  const [applicants, setApplicants] = useState<AgentApplicant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  // What is typed, and what was last submitted. Only the applied copy reaches
  // the API, so nothing is fetched until Search is pressed - bar the first
  // load, which runs on the empty set.
  const [draft, setDraft] = useState<AgentListFilters>(emptyAgentFilters);
  const [applied, setApplied] = useState<AgentListFilters>(emptyAgentFilters);

  const { courseOptions } = useAgentFilterOptions(agentId);

  const [pageSize, setPageSize] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!agentId) return;
    let cancelled = false;

    (async () => {
      setIsLoading(true);
      try {
        const params: Record<string, unknown> = {
          page: currentPage,
          limit: pageSize
        };

        if (applied.searchTerm.trim())
          params.searchTerm = applied.searchTerm.trim();
        if (applied.course) params.courseId = applied.course.value;
        if (applied.status) params.status = applied.status.value;
        // The slice the dashboard counters link in with, resolved server side
        // so it narrows the whole list rather than the page on screen.
        if (activeFilter !== 'all') params.slice = activeFilter;

        const { result, meta } = await fetchAgentApplicants(agentId, params);
        if (cancelled) return;
        setApplicants(result);
        setTotalPages(meta?.totalPage || 1);
        setTotal(meta?.total || 0);
        setLoadFailed(false);
      } catch (error) {
        console.error('Could not load your applicants:', error);
        if (!cancelled) setLoadFailed(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [agentId, applied, activeFilter, currentPage, pageSize]);

  const runSearch = () => {
    setApplied(draft);
    setCurrentPage(1);
  };

  const resetSearch = () => {
    setDraft(emptyAgentFilters);
    setApplied(emptyAgentFilters);
    setCurrentPage(1);
  };

  // A narrower slice, or a bigger page, can leave the reader past the end.
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, pageSize]);

  const hasFilters =
    !!applied.searchTerm.trim() ||
    !!applied.course ||
    !!applied.status ||
    activeFilter !== 'all';

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            Applicant Management
          </h1>
          

          {activeFilter !== 'all' && (
            <button
              type="button"
              onClick={() => router.push('/agent/applicants')}
              className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-watney/30 bg-watney/10 px-3 py-1 text-xs font-medium text-watney transition-colors hover:bg-watney/20"
            >
              {activeFilterLabel}
              <X className="h-3 w-3" />
              <span className="sr-only">Clear filter</span>
            </button>
          )}
        </div>

        <Button
          asChild
          className="shrink-0 bg-watney text-white hover:bg-watney/90"
        >
          <Link href="/agent/applicants/new">
            <Plus className="mr-2 h-4 w-4" />
            New application
          </Link>
        </Button>
      </div>

      <div className="overflow-hidden ">
        <AgentFilterBar
          value={draft}
          onChange={setDraft}
          onSearch={runSearch}
          onReset={resetSearch}
          loading={isLoading}
          courseOptions={courseOptions}
          statusOptions={statusOptions}
          searchPlaceholder="Name, email or phone"
          show={{ status: true }}
        />
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
      ) : applicants.length === 0 ? (
        <EmptyState
          title={hasFilters ? 'Nothing matches that search' : 'No applicants yet'}
          description={
            hasFilters
              ? 'Try a different name, course or status.'
              : 'Applicants who use your agent code, and anyone you apply for, will be listed here.'
          }
        />
      ) : (
        <div className="space-y-4">
          <ApplicantList applicants={applicants} />

          {/* Nothing to page through until there is more than one page. */}
          {totalPages > 1 && (
            <DataTablePagination
              pageSize={pageSize}
              setPageSize={setPageSize}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
}
