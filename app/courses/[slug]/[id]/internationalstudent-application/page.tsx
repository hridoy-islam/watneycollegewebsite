'use client';

import { useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import ProtectedRoute from '@/components/auth/protected-route';
import { createApplicationCourse } from '@/lib/applicant-api';
import { InternationalApplicationForm } from './international-application-form';

function InternationalStudentApplication() {
  const router = useRouter();
  const { slug, id: courseIdFromUrl } = useParams();

  const slugValue = Array.isArray(slug) ? slug[0] : slug || '';
  const courseIdValue = Array.isArray(courseIdFromUrl)
    ? courseIdFromUrl[0]
    : courseIdFromUrl || '';

  const user = useSelector((state: any) => state.auth.user);
  const applicantId = user?._id;

  /**
   * A record with no student type has not picked one yet, and a home one
   * belongs on the other form - both go back through the course page.
   */
  const handleStudentTypeMismatch = useCallback(
    (studentType?: string) => {
      const base = `/courses/${slugValue}/${courseIdValue}`;
      router.replace(
        studentType ? `${base}/homestudent-application` : base
      );
    },
    [router, slugValue, courseIdValue]
  );

  if (!applicantId) return null;

  return (
    <InternationalApplicationForm
      applicantId={applicantId}
      // The course applied for is the [id] segment of the URL this form is
      // being filled in on. The intake is not needed - the API reads it off
      // the course.
      courseId={courseIdValue}
      // The public form always has a record behind it, so only the
      // application row is left to open.
      submitApplication={async ({ courseId: id }) => {
        await createApplicationCourse({ applicantId, courseId: id });
      }}
      onStudentTypeMismatch={handleStudentTypeMismatch}
      onDone={() => router.push('/')}
    />
  );
}

/** Only a logged in applicant can open the application form. */
export default function InternationalStudentApplicationPage() {
  return (
    <ProtectedRoute>
      <InternationalStudentApplication />
    </ProtectedRoute>
  );
}
