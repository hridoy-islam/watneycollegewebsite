'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlinkingDots } from '@/components/blinking-dots';
import { EmptyState } from '@/components/dashboard/empty-state';
import { ApplicationCard } from '@/components/dashboard/applicant/application-card';
import { PendingAssessmentBanner } from '@/components/dashboard/applicant/pending-assessment-banner';
import { usePortalApplications } from '@/components/dashboard/use-portal-applications';
import { fetchApplicantApplications } from '@/lib/portal';
import type { PortalApplication } from '@/lib/portal';
import { fetchApplicant, getApplicationPath, toId } from '@/lib/applicant-api';
import { useEffect, useState } from 'react';

export default function ApplicantDashboardPage() {
  const { user, applications, isLoading, loadFailed } = usePortalApplications(
    fetchApplicantApplications
  );

  const firstName =  user?.name ;

  // Read from the record rather than the token: the token's flags are only as
  // fresh as the last login.
  const [profile, setProfile] = useState<{
    isCompleted: boolean;
    studentType?: string;
  } | null>(null);

  useEffect(() => {
    if (!user?._id) return;
    fetchApplicant(user._id)
      .then((applicant) =>
        setProfile({
          isCompleted: Boolean(applicant?.isCompleted),
          studentType: applicant?.studentType
        })
      )
      .catch((error) => {
        console.error('Could not load the applicant profile:', error);
        setProfile({ isCompleted: Boolean(user?.isCompleted) });
      });
  }, [user?._id, user?.isCompleted]);

  /**
   * Where "Complete the application" goes - the form for that course, or the
   * course page to pick a student type if none is stored yet. Nothing while
   * the profile is complete (or still loading).
   */
  const getCompleteHref = (application: PortalApplication) => {
    if (!profile || profile.isCompleted) return undefined;
    const courseId = toId(application.courseId);
    if (!courseId) return undefined;
    const slug =
      (typeof application.courseId === 'object' && application.courseId?.slug) ||
      'apply';
    return profile.studentType
      ? getApplicationPath(slug, courseId, profile.studentType)
      : `/courses/${slug}/${courseId}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            Welcome back, {firstName}
          </h1>
          <p className="mt-1 text-sm text-black">
            Your course applications and where each one has got to.
          </p>
        </div>
        <Link href="/courses">
          <Button className="w-full gap-1.5 bg-watney text-white hover:bg-watney/90 sm:w-auto">
            <Plus className="h-4 w-4" />
            Apply for a course
          </Button>
        </Link>
      </div>

      <PendingAssessmentBanner />

      {isLoading || !profile ? (
        <div className="flex justify-center py-16">
          <BlinkingDots size="large" color="bg-watney" />
        </div>
      ) : loadFailed ? (
        <EmptyState
          title="We could not load your applications"
          description="Please refresh the page and try again in a moment."
        />
      ) : applications.length === 0 ? (
        <EmptyState
          title="No applications yet"
          description="Once you apply for a course it will show up here with its status."
          action={
            <Link href="/courses">
              <Button className="mt-4 bg-watney text-white hover:bg-watney/90">
                Browse courses
              </Button>
            </Link>
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {applications.map((application) => (
            <ApplicationCard
              key={application._id}
              application={application}
              completeHref={getCompleteHref(application)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
