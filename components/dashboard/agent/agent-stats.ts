import {
  FilePlus2,
  FileText,
  GraduationCap,
  ThumbsUp,
  Users
} from 'lucide-react';
import type { AgentApplicantStats } from '@/lib/portal';
import type { AgentStat } from './stat-card';
import { AGENT_APPLICANT_FILTERS } from './applicant-filters';

/**
 * The agent dashboard counters.
 *
 * The numbers are counted server side, off the same slice definitions the
 * applicant list narrows by, so a counter that says 4 opens a list of 4. This
 * file only decides how they are labelled and which list each one links to.
 */
export const buildAgentStats = (counts: AgentApplicantStats): AgentStat[] => [
  {
    label: 'Total Students',
    helper: 'Applicants referred by you',
    value: counts.all,
    icon: Users,
    filter: AGENT_APPLICANT_FILTERS.all.key
  },
  {
    label: 'New Applications',
    helper: 'Applied, no offer issued yet',
    value: counts.new,
    icon: FilePlus2,
    filter: AGENT_APPLICANT_FILTERS.new.key
  },
  {
    label: 'Offer Received',
    helper: 'Holding an offer letter',
    value: counts['offer-received'],
    icon: FileText,
    filter: AGENT_APPLICANT_FILTERS['offer-received'].key
  },
  {
    label: 'Offer Accepted',
    helper: 'Accepted an offer made to them',
    value: counts['offer-accepted'],
    icon: ThumbsUp,
    filter: AGENT_APPLICANT_FILTERS['offer-accepted'].key
  },
  {
    label: 'Enrolled Students',
    helper: 'Now studying at Watney',
    value: counts.enrolled,
    icon: GraduationCap,
    filter: AGENT_APPLICANT_FILTERS.enrolled.key
  }
];
