'use client';

import { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

/** `null` means no form around us - fall back to whoever is signed in. */
const ApplicantSubjectContext = createContext<{
  applicantId?: string;
} | null>(null);

/**
 * Names the applicant an application form is being filled in for.
 *
 * The public forms fill it in for whoever is signed in. An agent fills it in
 * for someone else, so every upload and every re-read inside a step has to
 * land on that applicant rather than on the agent driving the form - and for
 * an applicant who does not exist yet, on nobody at all: `applicantId` is
 * undefined until the record is created on submit.
 */
export function ApplicantSubjectProvider({
  applicantId,
  children
}: {
  applicantId?: string;
  children: React.ReactNode;
}) {
  return (
    <ApplicantSubjectContext.Provider value={{ applicantId }}>
      {children}
    </ApplicantSubjectContext.Provider>
  );
}

/**
 * The applicant whose record the surrounding step reads and writes, or
 * `undefined` while the form has no record behind it yet.
 */
export function useApplicantId(): string | undefined {
  const subject = useContext(ApplicantSubjectContext);
  const user = useSelector((state: any) => state.auth.user);
  return subject ? subject.applicantId : user?._id;
}

export default ApplicantSubjectProvider;
