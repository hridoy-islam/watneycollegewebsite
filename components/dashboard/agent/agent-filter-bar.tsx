'use client';

/**
 * The filter bar the agent lists share.
 *
 * Filters are held in two copies: what is typed (`draft`) and what was last
 * submitted (`applied`). Only the applied copy reaches the API, so a
 * half-chosen filter never fires a request and Search always does something
 * visible. The first load is the one exception - `applied` starts empty, so
 * the list arrives populated rather than asking to be searched for.
 */
import { useCallback, useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { RotateCcw, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import axiosInstance from '@/lib/axios';
import { fetchAgentCourses } from '@/lib/portal';

export interface Option {
  value: string;
  label: string;
}

export interface AgentListFilters {
  searchTerm: string;
  course: Option | null;
  year: Option | null;
  term: Option | null;
  group: Option | null;
  status: Option | null;
}

export const emptyAgentFilters: AgentListFilters = {
  searchTerm: '',
  course: null,
  year: null,
  term: null,
  group: null,
  status: null
};

export const selectStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: '34px',
    height: '34px',
    fontSize: '12px'
  }),
  valueContainer: (base: any) => ({ ...base, height: '34px', padding: '0 8px' }),
  indicatorsContainer: (base: any) => ({ ...base, height: '34px' }),
  singleValue: (base: any) => ({ ...base, fontSize: '12px' }),
  input: (base: any) => ({ ...base, fontSize: '12px', margin: 0 }),
  menu: (base: any) => ({ ...base, fontSize: '12px', zIndex: 9999 }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
  option: (base: any) => ({ ...base, fontSize: '12px' }),
  placeholder: (base: any) => ({ ...base, fontSize: '12px' })
};

/** A course as the filters name it: the course, then the intake it runs in. */
const courseLabel = (course: any) => {
  const intake =
    typeof course?.intakeId === 'object'
      ? course.intakeId?.termName || course.intakeId?.name
      : '';
  return intake ? `${course.name} - ${intake}` : course?.name || '';
};

interface CourseTerm {
  _id: string;
  name?: string;
  year?: string;
  order?: number;
}

/**
 * The options an agent may filter by.
 *
 * Only the agent's own courses - they cannot place, or be paid on, anything
 * else - and the terms of whichever course is chosen. The year list is derived
 * from those terms rather than hard coded, so a two year course never offers
 * five years of nothing.
 */
export function useAgentFilterOptions(
  agentId?: string,
  courseId?: string,
  termId?: string
) {
  const [courseOptions, setCourseOptions] = useState<Option[]>([]);
  const [terms, setTerms] = useState<CourseTerm[]>([]);
  const [groupOptions, setGroupOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (!agentId) return;
    let cancelled = false;

    (async () => {
      try {
        const result = await fetchAgentCourses(agentId);
        if (cancelled) return;

        setCourseOptions(
          result
            .map((item: any) => item.courseId)
            .filter(Boolean)
            .map((course: any) => ({
              value: course._id,
              label: courseLabel(course)
            }))
        );
      } catch (error) {
        console.error('Could not load course filter options:', error);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [agentId]);

  useEffect(() => {
    if (!courseId) {
      setTerms([]);
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        // Every term of the course, whatever its status: a term switched
        // inactive after the fact still has remits and payments against it,
        // and filtering it out would hide rows that plainly exist.
        const response = await axiosInstance.get('/course-term', {
          params: { courseId, limit: 'all' }
        });
        if (cancelled) return;
        setTerms(response?.data?.data?.result || []);
      } catch (error) {
        console.error('Could not load course terms:', error);
        if (!cancelled) setTerms([]);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [courseId]);

  // Groups hang off the term, not the course, so there is nothing to offer
  // until a term is chosen.
  useEffect(() => {
    if (!termId) {
      setGroupOptions([]);
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const response = await axiosInstance.get('/course-group', {
          params: { termId, limit: 'all' }
        });
        if (cancelled) return;

        setGroupOptions(
          (response?.data?.data?.result || []).map((group: any) => ({
            value: group._id,
            label: group.name || 'Group'
          }))
        );
      } catch (error) {
        console.error('Could not load course groups:', error);
        if (!cancelled) setGroupOptions([]);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [termId]);

  const yearOptions = useMemo(() => {
    const seen = new Set<string>();
    return terms
      .map((term) => term.year)
      .filter((year): year is string => {
        if (!year || seen.has(year)) return false;
        seen.add(year);
        return true;
      })
      .map((year) => ({
        value: year,
        label: year.charAt(0).toUpperCase() + year.slice(1)
      }));
  }, [terms]);

  /** The terms of the chosen course, narrowed to a year once one is picked. */
  const termOptionsFor = useCallback(
    (year?: string | null) =>
      terms
        .filter((term) => !year || term.year === year)
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((term) => ({ value: term._id, label: term.name || 'Term' })),
    [terms]
  );

  return { courseOptions, yearOptions, termOptionsFor, groupOptions };
}

export function AgentFilterBar({
  value,
  onChange,
  onSearch,
  onReset,
  loading,
  courseOptions,
  yearOptions,
  termOptions,
  groupOptions,
  statusOptions,
  searchPlaceholder = 'Search',
  show = {}
}: {
  value: AgentListFilters;
  onChange: (next: AgentListFilters) => void;
  onSearch: () => void;
  onReset: () => void;
  loading?: boolean;
  courseOptions: Option[];
  yearOptions?: Option[];
  termOptions?: Option[];
  groupOptions?: Option[];
  statusOptions?: Option[];
  searchPlaceholder?: string;
  show?: {
    year?: boolean;
    term?: boolean;
    group?: boolean;
    status?: boolean;
  };
}) {
  const set = <K extends keyof AgentListFilters>(
    key: K,
    next: AgentListFilters[K]
  ) => onChange({ ...value, [key]: next });

  // Each of these narrows the one below it, so changing one strands whatever
  // was chosen under the old value - the narrower fields are cleared with it.
  const setCourse = (option: Option | null) =>
    onChange({ ...value, course: option, year: null, term: null, group: null });

  const setYear = (option: Option | null) =>
    onChange({ ...value, year: option, term: null, group: null });

  const setTerm = (option: Option | null) =>
    onChange({ ...value, term: option, group: null });

  const hasFilters =
    !!value.searchTerm.trim() ||
    !!value.course ||
    !!value.year ||
    !!value.term ||
    !!value.group ||
    !!value.status;

  const portal = typeof document !== 'undefined' ? document.body : undefined;

  return (
    <div className="border-b border-gray-100 ">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-1">
          <Label className="text-[11px] font-semibold uppercase tracking-wide text-black">
            Search
          </Label>
          <input
            type="text"
            value={value.searchTerm}
            onChange={(event) => set('searchTerm', event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && onSearch()}
            placeholder={searchPlaceholder}
            className="h-[34px] w-full rounded-md border border-gray-300 px-3 text-xs text-black placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-watney"
          />
        </div>

        <div className="space-y-1">
          <Label className="text-[11px] font-semibold uppercase tracking-wide text-black">
            Course
          </Label>
          <Select
            options={courseOptions}
            value={value.course}
            onChange={(option) => setCourse(option as Option)}
            placeholder="All courses"
            isClearable
            styles={selectStyles}
            menuPortalTarget={portal}
          />
        </div>

        {show.year && (
          <div className="space-y-1">
            <Label className="text-[11px] font-semibold uppercase tracking-wide text-black">
              Year
            </Label>
            <Select
              options={yearOptions || []}
              value={value.year}
              onChange={(option) => setYear(option as Option)}
              placeholder="All years"
              isClearable
              isDisabled={!value.course}
              styles={selectStyles}
              menuPortalTarget={portal}
            />
          </div>
        )}

        {show.term && (
          <div className="space-y-1">
            <Label className="text-[11px] font-semibold uppercase tracking-wide text-black">
              Course Term
            </Label>
            <Select
              options={termOptions || []}
              value={value.term}
              onChange={(option) => setTerm(option as Option)}
              placeholder="All terms"
              isClearable
              isDisabled={!value.course}
              styles={selectStyles}
              menuPortalTarget={portal}
            />
          </div>
        )}

        {show.group && (
          <div className="space-y-1">
            <Label className="text-[11px] font-semibold uppercase tracking-wide text-black">
              Group
            </Label>
            <Select
              options={groupOptions || []}
              value={value.group}
              onChange={(option) => set('group', option as Option)}
              placeholder="All groups"
              isClearable
              isDisabled={!value.term}
              styles={selectStyles}
              menuPortalTarget={portal}
            />
          </div>
        )}

        {show.status && (
          <div className="space-y-1">
            <Label className="text-[11px] font-semibold uppercase tracking-wide text-black">
              Status
            </Label>
            <Select
              options={statusOptions || []}
              value={value.status}
              onChange={(option) => set('status', option as Option)}
              placeholder="All statuses"
              isClearable
              styles={selectStyles}
              menuPortalTarget={portal}
            />
          </div>
        )}

        <div className="flex items-end gap-2">
          <Button
            size="sm"
            onClick={onSearch}
            disabled={loading}
            className="h-[34px] flex-1 gap-1.5 bg-watney text-xs font-semibold text-white hover:bg-watney/90"
          >
            <Search className="h-3.5 w-3.5" />
            {loading ? 'Searching…' : 'Search'}
          </Button>

          {hasFilters && (
            <Button
              size="sm"
              variant="outline"
              onClick={onReset}
              className="h-[34px] gap-1 whitespace-nowrap text-xs"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
