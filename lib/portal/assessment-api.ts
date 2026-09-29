import axiosInstance from '@/lib/axios';

/**
 * The applicant's admission assessments. The API never sends the answer key
 * or the score here, and only sends the questions once an attempt is started.
 */

export type AssessmentStatus = 'assigned' | 'in-progress' | 'submitted';

export interface AssessmentOption {
  _id: string;
  text: string;
}

export interface AssessmentQuestion {
  _id: string;
  sectionId?: string;
  question: string;
  marks: number;
  options: AssessmentOption[];
}

/** A section of the paper: a title, an optional passage, and its questions. */
export interface AssessmentSection {
  _id: string;
  title: string;
  passage?: string;
  questions: AssessmentQuestion[];
}

export interface MyAssessment {
  _id: string;
  status: AssessmentStatus;
  title: string;
  duration: number;
  totalMarks: number;
  questionCount: number;
  dueDate?: string;
  startedAt?: string;
  submittedAt?: string;
  createdAt?: string;
  deadline?: string;
  serverNow?: string;
  sections?: AssessmentSection[];
  questions?: AssessmentQuestion[];
  savedAnswers?: { questionId: string; selectedOptions: string[] }[];
}

export type AnswerPayload = { questionId: string; selectedOptions: string[] }[];

export const fetchMyAssessments = async (): Promise<MyAssessment[]> => {
  const res = await axiosInstance.get('/applicant-assessments/my');
  return res?.data?.data || [];
};

export const fetchMyAssessment = async (id: string): Promise<MyAssessment> => {
  const res = await axiosInstance.get(`/applicant-assessments/my/${id}`);
  return res?.data?.data;
};

export const startMyAssessment = async (id: string): Promise<MyAssessment> => {
  const res = await axiosInstance.post(`/applicant-assessments/my/${id}/start`);
  return res?.data?.data;
};

export const saveMyAnswers = async (id: string, answers: AnswerPayload) => {
  await axiosInstance.patch(`/applicant-assessments/my/${id}/answers`, { answers });
};

export const submitMyAssessment = async (
  id: string,
  answers: AnswerPayload
): Promise<MyAssessment> => {
  const res = await axiosInstance.post(`/applicant-assessments/my/${id}/submit`, {
    answers
  });
  return res?.data?.data;
};

/**
 * Submits while the page is closing. A normal request is cancelled when the
 * page unloads; a `keepalive` fetch is allowed to finish, so the answers still
 * reach the server when the applicant closes or reloads the tab.
 */
export const submitMyAssessmentOnLeave = (id: string, answers: AnswerPayload) => {
  let token: string | null = null;
  try {
    const raw = localStorage.getItem('watney');
    token = raw ? JSON.parse(raw) : null;
  } catch {
    /* no token - the cookie may still be enough */
  }
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/applicant-assessments/my/${id}/submit`, {
    method: 'POST',
    keepalive: true,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ answers })
  }).catch(() => {
    /* the page is going away; the server's timer closes the attempt anyway */
  });
};

export const ASSESSMENT_STATUS_LABEL: Record<AssessmentStatus, string> = {
  assigned: 'Not started',
  'in-progress': 'In progress',
  submitted: 'Submitted'
};

export const ASSESSMENT_STATUS_BADGE: Record<AssessmentStatus, string> = {
  assigned: 'bg-amber-100 text-amber-900',
  'in-progress': 'bg-blue-100 text-blue-900',
  submitted: 'bg-emerald-100 text-emerald-900'
};

export const apiMessage = (error: any, fallback: string) =>
  error?.response?.data?.message || fallback;
