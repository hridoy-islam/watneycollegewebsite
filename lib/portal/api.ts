import axiosInstance from '@/lib/axios';

/**
 * Reads for the logged in portals. An application lives on
 * `ApplicationCourse` - one row per course + intake an applicant applied to -
 * and carries the course, the intake, the application status and, once the
 * college issues one, the offer.
 */

export interface PortalApplication {
  _id: string;
  refId?: string;
  status?: 'applied' | 'cancelled' | 'rejected' | 'enrolled';
  offerType?: 'conditional' | 'unconditional' | 'reject';
  offerStatus?: 'pending' | 'accepted' | 'rejected';
  offerRespondedAt?: string;
  seen?: boolean;
  createdAt?: string;
  updatedAt?: string;
  courseId?: { _id: string; name?: string; courseCode?: string } | string;
  intakeId?: { _id: string; termName?: string } | string;
  applicantId?: any;
  agentId?: any;
}

/** Every application belonging to one applicant. */
export const fetchApplicantApplications = async (
  applicantId: string
): Promise<PortalApplication[]> => {
  const response = await axiosInstance.get(
    `/application-course/applicant/${applicantId}`
  );
  const data = response?.data?.data;
  return Array.isArray(data) ? data : data?.result || [];
};

/*
 * There is no `fetchAgentApplications`. The agent is recorded on the applicant
 * and on the student User, never on the application, so `/application-course`
 * has nothing to filter by - asking it for `?agentId=` matched a field that
 * does not exist and quietly returned nothing. Read `fetchAgentApplicants`
 * instead, which scopes on the applicant, and flatten `.applications` if a
 * flat list is what is wanted.
 */

/**
 * One offer letter, read as the applicant it was made to.
 *
 * `/application-course/offer/:id` is authenticated and checks ownership, so a
 * leaked link is worth nothing on its own - unlike the public offer URL this
 * replaced, which carried the applicant's details in the query string.
 */
export const fetchMyOffer = async (applicationId: string) => {
  const response = await axiosInstance.get(
    `/application-course/offer/${applicationId}`
  );
  return response?.data?.data;
};

/** The applicant's answer to that offer. Only ever set once. */
export const respondToOffer = async (
  applicationId: string,
  response: 'accepted' | 'rejected'
) => {
  const result = await axiosInstance.patch(
    `/application-course/offer/${applicationId}`,
    { response }
  );
  return result?.data?.data;
};

export const getCourseName = (application: PortalApplication) => {
  const course = application?.courseId;
  return (typeof course === 'object' && course?.name) || 'Course';
};

export const getIntakeName = (application: PortalApplication) => {
  const intake = application?.intakeId;
  return (typeof intake === 'object' && intake?.termName) || '';
};

/** True once the college has issued an offer (a rejection is not an offer). */
export const hasOffer = (application: PortalApplication) =>
  !!application.offerType && application.offerType !== 'reject';

export const isOfferAccepted = (application: PortalApplication) =>
  hasOffer(application) && application.offerStatus === 'accepted';

export const isEnrolled = (application: PortalApplication) =>
  application.status === 'enrolled';

/** Colour + label for an application status pill. */
export const statusStyles: Record<string, { label: string; className: string }> =
  {
    applied: {
      label: 'Applied',
      className: 'border-blue-200 bg-blue-50 text-blue-700'
    },
    enrolled: {
      label: 'Enrolled',
      className: 'border-emerald-200 bg-emerald-50 text-emerald-700'
    },
    rejected: {
      label: 'Rejected',
      className: 'border-red-200 bg-red-50 text-red-700'
    },
    cancelled: {
      label: 'Cancelled',
      className: 'border-gray-200 bg-gray-50 text-gray-600'
    }
  };

export const getStatusStyle = (status?: string) =>
  statusStyles[status || 'applied'] || statusStyles.applied;

export const formatDate = (value?: string) => {
  if (!value) return '-';
  const parsed = new Date(value);
  return isNaN(parsed.getTime())
    ? '-'
    : parsed.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
};
