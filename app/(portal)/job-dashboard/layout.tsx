'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import PortalShell from '@/components/dashboard/portal-nav';
import { JOB_APPLICANT_NAV } from '@/components/dashboard/nav-items';
import { JOB_APPLICANT_ROLES } from '@/components/auth/roles';

/**
 * The job applicant portal - separate from the student applicant portal at
 * `/dashboard`, which job applicant accounts cannot open (and vice versa).
 */
export default function JobApplicantPortalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute roles={JOB_APPLICANT_ROLES}>
      <PortalShell portalName="Job Applicant Portal" navItems={JOB_APPLICANT_NAV}>
        {children}
      </PortalShell>
    </ProtectedRoute>
  );
}
