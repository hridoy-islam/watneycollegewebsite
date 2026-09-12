import {
  FileText,
  LayoutDashboard,
  Receipt,
  Users,
  Wallet
} from 'lucide-react';
import type { PortalNavItem } from './portal-nav';

/** The applicant side nav. */
export const APPLICANT_NAV: PortalNavItem[] = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  // { name: 'Offer Letter', path: '/dashboard/offer-letter', icon: FileText }
];

/** The agent side nav. */
export const AGENT_NAV: PortalNavItem[] = [
  { name: 'Dashboard', path: '/agent/dashboard', icon: LayoutDashboard },
  { name: 'Applicant Management', path: '/agent/applicants', icon: Users },
  { name: 'Remit', path: '/agent/remit', icon: Receipt },
  { name: 'Student Fee', path: '/agent/student-fee', icon: Wallet }
];
