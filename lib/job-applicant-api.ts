import axiosInstance from '@/lib/axios';
import { normalizeApplicant, toUtcDatePayload } from '@/lib/applicant-api';

/**
 * Job applicants have their own collection on the API, separate from student
 * applicants and from Users. The career form reads and writes the signed-in
 * applicant's record through `/job-applicants/:id`, one step at a time, and
 * each job they apply for is a row on `/application-job`.
 */
export const JOB_APPLICANTS_ENDPOINT = '/job-applicants';
export const JOB_APPLICATIONS_ENDPOINT = '/application-job';

export const getCareerApplicationPath = (slug: string, jobId: string) =>
  `/jobs/${slug}/${jobId}/career-application`;

/** Dates on the career form that come back from the API as ISO strings. */
const DATE_FIELDS = ['dateOfBirth', 'availableFromDate'];

export const normalizeJobApplicant = (data: any) => {
  const normalized = normalizeApplicant(data);
  DATE_FIELDS.forEach((field) => {
    if (normalized[field]) {
      const parsed = new Date(normalized[field]);
      if (!isNaN(parsed.getTime())) normalized[field] = parsed;
    }
  });
  return normalized;
};

export const fetchJobApplicant = async (jobApplicantId: string) => {
  const response = await axiosInstance.get(
    `${JOB_APPLICANTS_ENDPOINT}/${jobApplicantId}`
  );
  return normalizeJobApplicant(response?.data?.data || {});
};

export const updateJobApplicant = async (
  jobApplicantId: string,
  payload: Record<string, any>
) => {
  const response = await axiosInstance.patch(
    `${JOB_APPLICANTS_ENDPOINT}/${jobApplicantId}`,
    toUtcDatePayload(payload)
  );
  return normalizeJobApplicant(response?.data?.data || {});
};

/**
 * Opens the application for a job. The API reads the applicant off the
 * token. Applying twice is reported back rather than thrown, so reopening the
 * form for a job already applied for is a no-op instead of an error.
 */
export const createJobApplication = async (
  jobId: string
): Promise<{ created: boolean; duplicate: boolean; data?: any }> => {
  try {
    const response = await axiosInstance.post(JOB_APPLICATIONS_ENDPOINT, {
      jobId
    });
    return { created: true, duplicate: false, data: response?.data?.data };
  } catch (error: any) {
    const message: string = error?.response?.data?.message || '';
    if (/already applied/i.test(message)) {
      return { created: false, duplicate: true };
    }
    throw error;
  }
};

export interface JobPortalApplication {
  _id: string;
  status?: 'applied' | 'recruit' | 'rejected';
  createdAt?: string;
  updatedAt?: string;
  jobId?:
    | {
        _id: string;
        jobTitle?: string;
        slug?: string;
        type?: string;
        location?: string;
        workType?: string;
        applicationDeadline?: string;
      }
    | string;
}

/** Every job the signed-in applicant has applied for, newest first. */
export const fetchMyJobApplications = async (): Promise<
  JobPortalApplication[]
> => {
  const response = await axiosInstance.get(
    `${JOB_APPLICATIONS_ENDPOINT}/my-applications`
  );
  const data = response?.data?.data;
  return Array.isArray(data) ? data : data?.result || [];
};
