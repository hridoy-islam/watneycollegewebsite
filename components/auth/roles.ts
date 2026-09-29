/**
 * Roles that own the applicant side of the site. `student` is kept alongside
 * `applicant` because accounts created before the applicant role existed still
 * carry it.
 */
export const APPLICANT_ROLES = ['applicant', 'student'];
export const AGENT_ROLES = ['agent'];

export const isApplicant = (role?: string) =>
  !!role && APPLICANT_ROLES.includes(role);

export const isAgent = (role?: string) => !!role && AGENT_ROLES.includes(role);

/** Where a user lands after logging in. */
export const getRoleHomePath = (role?: string) => {
  if (isAgent(role)) return '/agent/dashboard';
  if (isApplicant(role)) return '/dashboard';
  return '/';
};
