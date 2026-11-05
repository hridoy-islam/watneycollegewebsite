'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import PlaceholderPage from '@/components/dashboard/placeholder-page';
import { AGENT_ROLES } from '@/components/auth/roles';

export default function AgentProfilePage() {
  return (
    <ProtectedRoute roles={AGENT_ROLES}>
      <PlaceholderPage
        title="Agent Profile"
        description="Your agency details, contact person and bank information."
      />
    </ProtectedRoute>
  );
}
