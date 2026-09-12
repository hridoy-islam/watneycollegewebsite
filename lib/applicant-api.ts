import axiosInstance from '@/lib/axios';

/**
 * Applicants have their own collection on the API - the website's "create
 * account" never mints a User - so everything about the application is read
 * and written through `/applicants/:id`, not `/users/:id`.
 * Nothing is kept in localStorage anymore - every "Save & Continue" /
 * "Submit" writes straight to the backend.
 */

/** Base path for the applicant record. */
export const APPLICANTS_ENDPOINT = '/applicants';

export const APPLICATION_PATHS = {
  international: 'internationalstudent-application',
  home: 'homestudent-application'
} as const;

export const getApplicationPath = (
  slug: string,
  courseId: string,
  studentType?: string
) =>
  `/courses/${slug}/${courseId}/${
    studentType === 'international'
      ? APPLICATION_PATHS.international
      : APPLICATION_PATHS.home
  }`;

export const fetchApplicant = async (applicantId: string) => {
  const response = await axiosInstance.get(
    `${APPLICANTS_ENDPOINT}/${applicantId}`
  );
  return normalizeApplicant(response?.data?.data || {});
};

export const updateApplicant = async (
  applicantId: string,
  payload: Record<string, any>
) => {
  const response = await axiosInstance.patch(
    `${APPLICANTS_ENDPOINT}/${applicantId}`,
    toUtcDatePayload(payload)
  );
  return normalizeApplicant(response?.data?.data || {});
};

/** One row per course + intake an applicant has applied to. */
export const APPLICATION_COURSE_ENDPOINT = '/application-course';

/**
 * Opens the application row for a course. This is what the applicant, agent
 * and admin sides all read, so submitting a form has to create one - the
 * applicant record on its own is only the profile behind it.
 *
 * Only the course is sent: the API reads the intake off the course itself and
 * ignores any intake in the payload. It refuses a second row for the same
 * course + intake, and that refusal is reported back rather than thrown, so a
 * repeated submit is a no-op instead of an error.
 */
export const createApplicationCourse = async (payload: {
  applicantId: string;
  courseId: string;
}): Promise<{ created: boolean; duplicate: boolean; data?: any }> => {
  try {
    const response = await axiosInstance.post(
      APPLICATION_COURSE_ENDPOINT,
      payload
    );
    return { created: true, duplicate: false, data: response?.data?.data };
  } catch (error: any) {
    const message: string = error?.response?.data?.message || '';
    if (/already applied/i.test(message)) {
      return { created: false, duplicate: true };
    }
    throw error;
  }
};

/**
 * Every date leaves the browser as UTC midnight of the day the applicant
 * picked, so a local timezone offset can never shift it to the previous day.
 */
export const toUtcIsoDate = (inputDate: Date) =>
  new Date(
    Date.UTC(
      inputDate!.getFullYear(),
      inputDate!.getMonth(),
      inputDate!.getDate()
    )
  ).toISOString();

/** Walks a payload (nested objects and arrays included) applying the above. */
export const toUtcDatePayload = (value: any): any => {
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? value : toUtcIsoDate(value);
  }

  if (Array.isArray(value)) return value.map(toUtcDatePayload);

  if (value && typeof value === 'object' && value.constructor === Object) {
    return Object.keys(value).reduce((acc: Record<string, any>, key) => {
      acc[key] = toUtcDatePayload(value[key]);
      return acc;
    }, {});
  }

  return value;
};

/** Mongo can return an ObjectId or a populated document - always want the id. */
export const toId = (value: any): string =>
  typeof value === 'object' && value !== null ? value._id || '' : value || '';

const toDate = (value: any) => {
  if (!value) return value;
  if (value instanceof Date) return value;
  const parsed = new Date(value);
  return isNaN(parsed.getTime()) ? value : parsed;
};

/**
 * The API returns dates as ISO strings, but the step forms validate them with
 * `z.date()` / feed them to the date pickers, so revive them on the way in.
 */
export const normalizeApplicant = (data: any) => {
  if (!data || typeof data !== 'object') return {};

  const normalized: any = { ...data };

  ['dateOfBirth', 'firstEnterDate', 'startDateInUK'].forEach((field) => {
    if (normalized[field]) normalized[field] = toDate(normalized[field]);
  });

  if (normalized.currentEmployment) {
    normalized.currentEmployment = {
      ...normalized.currentEmployment,
      startDate: toDate(normalized.currentEmployment.startDate),
      endDate: toDate(normalized.currentEmployment.endDate)
    };
  }

  if (Array.isArray(normalized.previousEmployments)) {
    normalized.previousEmployments = normalized.previousEmployments.map(
      (employment: any) => ({
        ...employment,
        startDate: toDate(employment?.startDate),
        endDate: toDate(employment?.endDate)
      })
    );
  }

  if (Array.isArray(normalized.educationData)) {
    normalized.educationData = normalized.educationData.map(
      (entry: any) => ({
        ...entry,
        awardDate: toDate(entry?.awardDate)
      })
    );
  }

  if (normalized.englishQualification) {
    normalized.englishQualification = {
      ...normalized.englishQualification,
      englishTestDate: toDate(normalized.englishQualification.englishTestDate)
    };
  }

  return normalized;
};
