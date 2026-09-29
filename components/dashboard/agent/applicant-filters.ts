/**
 * The slices of the agent's applicant list that the dashboard counters stand
 * for - their keys and how they are labelled on screen.
 *
 * What each slice *means* lives server side, in `AGENT_APPLICANT_SLICES`: both
 * the counters and the list are resolved from that one definition, so a
 * counter that says 4 opens a list of 4. There used to be a second copy of the
 * matching here, which is what let the two drift apart.
 *
 * The keys are the `?filter=` values the dashboard links with and the `slice`
 * the list sends back up, so they must stay in step with the server's.
 */
export type AgentApplicantFilterKey =
  | 'all'
  | 'new'
  | 'offer-received'
  | 'offer-accepted'
  | 'enrolled';

interface AgentApplicantFilter {
  key: AgentApplicantFilterKey;
  /** Shown as the heading once the list is narrowed. */
  label: string;
}

export const AGENT_APPLICANT_FILTERS: Record<
  AgentApplicantFilterKey,
  AgentApplicantFilter
> = {
  all: { key: 'all', label: 'All applicants' },
  new: { key: 'new', label: 'New applications' },
  'offer-received': { key: 'offer-received', label: 'Offer received' },
  'offer-accepted': { key: 'offer-accepted', label: 'Offer accepted' },
  enrolled: { key: 'enrolled', label: 'Enrolled students' }
};

export const isAgentApplicantFilterKey = (
  value?: string | null
): value is AgentApplicantFilterKey =>
  !!value &&
  Object.prototype.hasOwnProperty.call(AGENT_APPLICANT_FILTERS, value);
