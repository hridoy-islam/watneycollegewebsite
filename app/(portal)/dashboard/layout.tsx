'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import PortalShell from '@/components/dashboard/portal-nav';
import { APPLICANT_NAV } from '@/components/dashboard/nav-items';
import { APPLICANT_ROLES } from '@/components/auth/roles';

export default function ApplicantPortalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute roles={APPLICANT_ROLES}>
      <PortalShell portalName="Applicant Portal" navItems={APPLICANT_NAV}>
        {children}
      </PortalShell>
    </ProtectedRoute>
  );
}
