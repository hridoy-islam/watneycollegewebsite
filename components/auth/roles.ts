/**
 * Roles that own the applicant side of the site. `student` is kept alongside
 * `applicant` because accounts created before the applicant role existed still
 * carry it.
 */
export const APPLICANT_ROLES = ['applicant', 'student'];
/** People who signed up to apply for jobs. They have their own portal. */
export const JOB_APPLICANT_ROLES = ['jobApplicant'];
export const AGENT_ROLES = ['agent'];

export const isApplicant = (role?: string) =>
  !!role && APPLICANT_ROLES.includes(role);

export const isJobApplicant = (role?: string) =>
  !!role && JOB_APPLICANT_ROLES.includes(role);

/** Accounts made on the website's own sign-up page - verified by email. */
export const isWebsiteAccount = (role?: string) =>
  isApplicant(role) || isJobApplicant(role);

export const isAgent = (role?: string) => !!role && AGENT_ROLES.includes(role);

/** Where a user lands after logging in. */
export const getRoleHomePath = (role?: string) => {
  if (isAgent(role)) return '/agent/dashboard';
  if (isJobApplicant(role)) return '/job-dashboard';
  if (isApplicant(role)) return '/dashboard';
  return '/';
};
