'use client';

import { useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '@/components/auth/protected-route';
import { createApplicationCourse } from '@/lib/applicant-api';
import { updateAuthIsCompleted } from '@/redux/features/authSlice';
import { HomeApplicationForm } from './home-application-form';

function HomeStudentApplication() {
  const router = useRouter();
  const { slug, id: courseIdFromUrl } = useParams();

  const slugValue = Array.isArray(slug) ? slug[0] : slug || '';
  const courseIdValue = Array.isArray(courseIdFromUrl)
    ? courseIdFromUrl[0]
    : courseIdFromUrl || '';

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const applicantId = user?._id;

  /**
   * A record with no student type has not picked one yet, and an international
   * one belongs on the other form - both go back through the course page.
   */
  const handleStudentTypeMismatch = useCallback(
    (studentType?: string) => {
      const base = `/courses/${slugValue}/${courseIdValue}`;
      router.replace(
        studentType === 'international'
          ? `${base}/internationalstudent-application`
          : base
      );
    },
    [router, slugValue, courseIdValue]
  );

  if (!applicantId) return null;

  return (
    <HomeApplicationForm
      applicantId={applicantId}
      // The course applied for is the [id] segment of the URL this form is
      // being filled in on. The intake is not needed - the API reads it off
      // the course.
      courseId={courseIdValue}
      // The public form always has a record behind it, so only the
      // application row is left to open.
      submitApplication={async ({ courseId: id }) => {
        await createApplicationCourse({ applicantId, courseId: id });
        // The profile is complete now - the dashboard opens up.
        dispatch(updateAuthIsCompleted(true));
      }}
      onStudentTypeMismatch={handleStudentTypeMismatch}
      onDone={() => router.push('/dashboard')}
      doneLabel="Go to dashboard"
    />
  );
}

/** Only a logged in applicant can open the application form. */
export default function HomeStudentApplicationPage() {
  return (
    <ProtectedRoute>
      <HomeStudentApplication />
    </ProtectedRoute>
  );
}
