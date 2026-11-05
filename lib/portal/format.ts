/**
 * A populated `applicantId` carries the name in pieces; older records only
 * have `name`. Falls back to the email so a row is never blank.
 */
export const applicantName = (applicant: any): string => {
  if (!applicant || typeof applicant !== 'object') return 'Applicant';

  const composed = [applicant.title, applicant.firstName, applicant.lastName]
    .filter(Boolean)
    .join(' ')
    .trim();

  return composed || applicant.name || applicant.email || 'Applicant';
};
