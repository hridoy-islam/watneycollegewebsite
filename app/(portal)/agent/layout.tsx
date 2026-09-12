'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import PortalShell from '@/components/dashboard/portal-nav';
import { AGENT_NAV } from '@/components/dashboard/nav-items';
import { AGENT_ROLES } from '@/components/auth/roles';

export default function AgentPortalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute roles={AGENT_ROLES}>
      <PortalShell portalName="Agent Portal" navItems={AGENT_NAV}>
        {children}
      </PortalShell>
    </ProtectedRoute>
  );
}
