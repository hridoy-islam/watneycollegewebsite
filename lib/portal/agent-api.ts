import axiosInstance from '@/lib/axios';
import { toUtcDatePayload } from '@/lib/applicant-api';
import type { PortalApplication } from './api';

/**
 * The agent side of the portal: the courses an agent may apply on, the
 * applicants sitting under them, and applying on someone's behalf.
 */

export interface AgentCourse {
  _id: string;
  courseId?: {
    _id: string;
    name?: string;
    courseCode?: string;
    duration?: string;
    intakeId?: { _id: string; termName?: string };
    awardingBodyId?: { _id: string; name?: string };
  };
}

/**
 * The only courses an agent is allowed to place an application on, or be paid
 * on: their own assignments, active on both sides.
 *
 * `/agent-courses/agent/:id` is the scoped read - it is authenticated and
 * resolves the agent off the request, and it drops assignments whose course was
 * switched off afterwards. This used to call `/agent-courses?agentId=`, which
 * is the admin's unauthenticated view of every agent filtered by a query
 * parameter the caller supplies - so it both trusted the client for scoping and
 * offered courses that were no longer open.
 */
export const fetchAgentCourses = async (
  agentId: string
): Promise<AgentCourse[]> => {
  const response = await axiosInstance.get(`/agent-courses/agent/${agentId}`);
  const data = response?.data?.data;
  return Array.isArray(data) ? data : data?.result || [];
};

/**
 * The agent's own account, for the code the application form fills in on their
 * behalf. `GET /users/:id` is scoped to self for an agent.
 */
export const fetchAgentProfile = async (agentId: string) => {
  const response = await axiosInstance.get(`/users/${agentId}`, {
    params: { fields: 'name,email,role,agentCode' }
  });
  return response?.data?.data;
};

export interface AgentApplicant {
  _id: string;
  name?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  studentType?: string;
  isCompleted?: boolean;
  createdAt?: string;
  applications: PortalApplication[];
}

/** The agent's applicants, each carrying the status of every course applied for. */
export const fetchAgentApplicants = async (
  agentId: string,
  params: Record<string, unknown> = {}
): Promise<{ result: AgentApplicant[]; meta?: any }> => {
  const response = await axiosInstance.get(`/applicants/agent/${agentId}`, {
    params: { limit: 'all', ...params }
  });
  const data = response?.data?.data;
  return { result: data?.result || [], meta: data?.meta };
};

export interface AgentApplicantStats {
  all: number;
  new: number;
  'offer-received': number;
  'offer-accepted': number;
  enrolled: number;
}

/**
 * The five agent dashboard counters, counted server side off the same slice
 * definitions the applicant list narrows by - so a counter and the list it
 * opens cannot disagree, and the dashboard no longer loads every applicant
 * just to render five integers.
 */
export const fetchAgentApplicantStats = async (
  agentId: string
): Promise<AgentApplicantStats> => {
  const response = await axiosInstance.get(`/applicants/agent/${agentId}/stats`);
  const data = response?.data?.data || {};

  return {
    all: data.all || 0,
    new: data.new || 0,
    'offer-received': data['offer-received'] || 0,
    'offer-accepted': data['offer-accepted'] || 0,
    enrolled: data.enrolled || 0
  };
};

export interface ApplicantLookup {
  exists: boolean;
  applicant: AgentApplicant | null;
  applications: PortalApplication[];
  appliedCourseIds: string[];
  /** The applicant still owes the eleven step form. */
  profileRequired: boolean;
}

/**
 * Does this email already have an applicant account?
 *
 * This is what spares an existing applicant from being typed in again: an
 * account that is already complete only has to be confirmed against a course.
 */
export const lookupApplicantByEmail = async (
  email: string
): Promise<ApplicantLookup> => {
  const response = await axiosInstance.get('/applicants/lookup', {
    params: { email }
  });
  return response?.data?.data;
};

export interface AgentApplicationResult {
  application?: any;
  applicant?: any;
  /** The account was minted by this call, so the welcome mail went with it. */
  applicantCreated: boolean;
  profileRequired: boolean;
}

/**
 * Applies on behalf of an applicant.
 *
 * Send `applicantId` for someone the college already knows - nothing else is
 * needed - or `applicant` for someone new, holding everything the form
 * collected. The account, the application row and the mails are all opened by
 * this one call.
 */
export const submitAgentApplication = async (payload: {
  courseId: string;
  applicantId?: string;
  applicant?: Record<string, any>;
}): Promise<AgentApplicationResult> => {
  const response = await axiosInstance.post(
    '/application-course/agent-apply',
    toUtcDatePayload(payload)
  );
  return response?.data?.data;
};

/* ------------------------------------------------------------------ */
/* Remit                                                               */
/* ------------------------------------------------------------------ */

export interface AgentRemitTerm {
  courseTermId: string;
  termName: string;
  year?: string;
  order?: number;
  invoiceDate?: string;
  status: 'due' | 'paid';
  paidDate?: string;
  isRemitted?: boolean;
  /** Resolved server side from the agent's rate card; null when unrated. */
  amount: number | null;
}

export interface AgentRemitRecord {
  _id: string;
  courseId?: {
    _id: string;
    name?: string;
    courseCode?: string;
    intakeId?: { _id: string; termName?: string };
  };
  studentId?: {
    _id: string;
    name?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  applicationCourseId?: {
    _id: string;
    refId?: string;
    status?: string;
    createdAt?: string;
  };
  terms: AgentRemitTerm[];
  totalDue: number;
  totalPaid: number;
  totalCommission: number;
  createdAt?: string;
}

export interface AgentRemitResponse {
  result: AgentRemitRecord[];
  summary: { totalDue: number; totalPaid: number; students: number };
}

/**
 * The agent's own remit schedule. Scoped server side - the id in the URL is a
 * convenience, not what grants access.
 */
export const fetchAgentRemits = async (
  agentId: string,
  params: Record<string, unknown> = {}
): Promise<AgentRemitResponse> => {
  const response = await axiosInstance.get(`/agent-remit/agent/${agentId}`, {
    params
  });
  const data = response?.data?.data;
  return {
    result: data?.result || [],
    summary: data?.summary || { totalDue: 0, totalPaid: 0, students: 0 }
  };
};

export interface AgentRemitListRecord {
  _id: string;
  courseId?: {
    _id: string;
    name?: string;
    courseCode?: string;
    intakeId?: { _id: string; termName?: string };
  };
  courseTermId?: { _id: string; name?: string; order?: number; year?: string };
  groupId?: { _id?: string; name?: string };
  termName?: string;
  year?: string;
  students: {
    applicationCourseId?: string;
    studentId?: {
      _id: string;
      name?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
    };
    amount: number;
    status?: 'due' | 'paid';
    paidDate?: string;
  }[];
  totalAmount?: number;
  adjustmentBalance?: number;
  totalBalance?: number;
  note?: string;
  status: 'due' | 'paid';
  paidDate?: string;
  createdAt?: string;
}

/**
 * The agent's own remittances - the same rows the accounts team raises, read
 * as the agent they were raised for. Scoped server side; the id in the URL is
 * a convenience, not what grants access.
 */
export const fetchAgentRemitList = async (
  agentId: string,
  params: Record<string, unknown> = {}
): Promise<{ result: AgentRemitListRecord[]; meta?: any }> => {
  const response = await axiosInstance.get(`/remit/agent/${agentId}`, {
    params
  });
  const data = response?.data?.data;
  return { result: data?.result || [], meta: data?.meta };
};

export interface AgentStudentFeeRecord {
  _id: string;
  refId?: string;
  tcid?: string;
  transactionDate?: string;
  transactionAmount?: number;
  transactionMethod?: { _id?: string; name?: string };
  studentId?: {
    _id: string;
    name?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  courseId?: {
    _id: string;
    name?: string;
    courseCode?: string;
    intakeId?: { _id: string; termName?: string };
  };
  courseTermId?: { _id: string; name?: string; year?: string; order?: number };
  groupId?: { _id?: string; name?: string };
  installmentOrder?: number;
  paymentStatus?: 'pending' | 'paid';
  createdAt?: string;
}

/**
 * The fee transactions of the agent's own students. Scoped server side from
 * the agent held on the student record, so this never asks by student.
 */
export const fetchAgentStudentFees = async (
  agentId: string,
  params: Record<string, unknown> = {}
): Promise<{ result: AgentStudentFeeRecord[]; meta?: any }> => {
  const response = await axiosInstance.get(`/student-fees/agent/${agentId}`, {
    params
  });
  const data = response?.data?.data;
  return { result: data?.result || [], meta: data?.meta };
};

/* ------------------------------------------------------------------ */
/* Student fees                                                        */
/* ------------------------------------------------------------------ */

export interface AccountInstallment {
  courseTermId?: { _id: string; name?: string; year?: string; order?: number } | string;
  termName?: string;
  year?: string;
  order?: number;
  installmentStartDate?: string;
  amount?: number;
  status?: 'Pending' | 'Partial' | 'Paid' | 'Overdue';
}

export interface AccountInvoice {
  invoiceId?: string;
  courseTermId?: { _id: string; name?: string; year?: string } | string;
  termName?: string;
  year?: string;
  paymentDate?: string;
  paymentMethod?: { _id: string; name?: string } | string;
  amount?: number;
}

export interface AgentStudentAccount {
  _id: string;
  studentId?: {
    _id: string;
    name?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  applicationCourseId?: {
    _id: string;
    refId?: string;
    status?: string;
    createdAt?: string;
    courseId?: { _id: string; name?: string; courseCode?: string };
    intakeId?: { _id: string; termName?: string };
  };
  totalFees: number;
  claimAmount: number;
  balanceDue: number;
  installments: AccountInstallment[];
  invoices: AccountInvoice[];
}

export interface AgentStudentAccountsResponse {
  result: AgentStudentAccount[];
  summary: {
    students: number;
    totalFees: number;
    totalPaid: number;
    totalDue: number;
  };
}

/** The fee accounts of the agent's own students, with full payment history. */
export const fetchAgentStudentAccounts = async (
  agentId: string,
  params: Record<string, unknown> = {}
): Promise<AgentStudentAccountsResponse> => {
  const response = await axiosInstance.get(
    `/enrolled-course-account/agent/${agentId}`,
    { params }
  );
  const data = response?.data?.data;
  return {
    result: data?.result || [],
    summary:
      data?.summary || {
        students: 0,
        totalFees: 0,
        totalPaid: 0,
        totalDue: 0
      }
  };
};

/** Course fees are billed in sterling, so that is what the portal shows. */
export const currency = (amount?: number | null) =>
  amount === null || amount === undefined
    ? '—'
    : new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
      }).format(Number(amount) || 0);
