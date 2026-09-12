'use client';

import ProtectedRoute from '@/components/auth/protected-route';
import PlaceholderPage from '@/components/dashboard/placeholder-page';
import { APPLICANT_ROLES } from '@/components/auth/roles';

export default function StudentProfilePage() {
  return (
    <ProtectedRoute roles={APPLICANT_ROLES}>
      <PlaceholderPage
        title="Profile"
        description="Your personal details, contact information and documents."
      />
    </ProtectedRoute>
  );
}
