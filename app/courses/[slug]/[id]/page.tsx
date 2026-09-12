"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "@/lib/axios";
import ApplicationForm from "./components/application-form";
import CourseSelectionForm from "./components/course-selection-form";
import ReapplyForm from "./components/reapply-form";
import { BlinkingDots } from "@/components/blinking-dots";
import { useToast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import {
  createApplicationCourse,
  fetchApplicant,
  getApplicationPath,
  toId,
  updateApplicant,
} from "@/lib/applicant-api";

export interface Course {
  _id: string;
  name: string;
  intakeId?: Term;
}

export interface Term {
  _id: string;
  termName: string;
}

function CourseRegistration() {
  const [formData, setFormData] = useState({
    studentType: "",
    termName: "",
    courseName: "",
    courseId: "",
  });
  const [courses, setCourses] = useState<Course[]>([]);
  const [startDates, setStartDates] = useState<Term[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  // A completed applicant applying again - they only confirm the course.
  const [applicant, setApplicant] = useState<any>(null);

  const { slug, id: courseIdFromUrl } = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const user = useSelector((state: any) => state.auth.user);
  const userId = user?._id;
  // The applicant lookup is cached as a promise rather than a "done" flag:
  // React re-runs effects on mount in development, and a flag made the second
  // run skip the fetch while the first run's result was discarded as stale -
  // which left `applicant` null and showed a completed applicant the student
  // type form. Reusing the promise means every run gets the same answer.
  const applicantRequestRef = useRef<{
    userId: string;
    promise: Promise<any>;
  } | null>(null);
  const redirectStartedRef = useRef(false);
  // Nothing is rendered for a logged in applicant until this is true.
  const [applicantChecked, setApplicantChecked] = useState(false);

  const slugValue = Array.isArray(slug) ? slug[0] : slug || "";
  const courseIdValue = Array.isArray(courseIdFromUrl)
    ? courseIdFromUrl[0]
    : courseIdFromUrl || "";

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const [termsRes, coursesRes] = await Promise.all([
          axiosInstance.get("/terms?status=1&limit=all"),
          axiosInstance.get("/courses?status=active&limit=all"),
        ]);

        setStartDates(termsRes?.data?.data?.result || []);
        const fetchedCourses = coursesRes?.data?.data?.result || [];
        setCourses(fetchedCourses);

        // If there's a course ID in the URL, find and set that course
        if (courseIdValue) {
          const selectedCourse = fetchedCourses.find(
            (course: any) => String(course._id) === String(courseIdValue),
          );
          if (selectedCourse) {
            setFormData((prev) => ({
              ...prev,
              courseName: selectedCourse.name,
              courseId: selectedCourse._id,
              termName: selectedCourse.intakeId?.termName || "",
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchInitialData();
  }, [courseIdValue]);

  const resolveTermId = useCallback(() => {
    const selectedCourse = courses.find(
      (course) => String(course._id) === String(courseIdValue),
    );
    const courseTermId = toId(selectedCourse?.intakeId);
    if (courseTermId) return courseTermId;

    const selectedTerm = startDates.find(
      (term) => term.termName === formData.termName,
    );
    return selectedTerm?._id || "";
  }, [courses, startDates, courseIdValue, formData.termName]);

  // Once logged in, the applicant skips straight to their application whenever
  // a student type is already stored on their record.
  useEffect(() => {
    if (!userId || isLoading) return;

    let cancelled = false;

    if (applicantRequestRef.current?.userId !== userId) {
      applicantRequestRef.current = { userId, promise: fetchApplicant(userId) };
    }
    const request = applicantRequestRef.current;

    (async () => {
      try {
        const applicant = await request.promise;
        if (cancelled) return;

        setApplicant(applicant);
        setApplicantChecked(true);

        // Already completed an application - they re-apply from here rather
        // than walking the eleven step form a second time.
        if (applicant?.isCompleted) return;

        if (!applicant?.studentType) return;

        // The effect re-runs as the course data settles - only redirect once.
        if (redirectStartedRef.current) return;
        redirectStartedRef.current = true;

        setRedirecting(true);

        // Keep the stored course in sync when applying from another course page.
        const storedCourseId = toId(applicant.courseId);
        if (courseIdValue && storedCourseId !== courseIdValue) {
          const termId = resolveTermId();
          await updateApplicant(userId, {
            courseId: courseIdValue,
            ...(termId ? { intakeId: termId } : {}),
          });
        }

        router.replace(
          getApplicationPath(slugValue, courseIdValue, applicant.studentType),
        );
      } catch (error) {
        console.error("Error loading applicant profile:", error);
        // Drop the failed request so a remount can try again.
        if (applicantRequestRef.current === request) {
          applicantRequestRef.current = null;
        }
        redirectStartedRef.current = false;
        if (!cancelled) {
          setRedirecting(false);
          setApplicantChecked(true);
          toast({
            title: "Unable to load your application",
            description: "Please refresh the page and try again.",
            variant: "destructive",
          });
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [
    userId,
    isLoading,
    courseIdValue,
    slugValue,
    resolveTermId,
    router,
    toast,
  ]);

  const handleCourseChange = (value: string) => {
    const selectedCourse = courses.find((course) => course.name === value);
    setFormData((prev) => ({
      ...prev,
      courseName: value,
      courseId: selectedCourse?._id || "",
      termName: selectedCourse?.intakeId?.termName || prev.termName,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) return;

    const selectedCourse = courses.find(
      (course) => course.name === formData.courseName,
    );
    const courseId = selectedCourse?._id || courseIdValue;
    const termId = toId(selectedCourse?.intakeId) || resolveTermId();

    if (!courseId || !formData.studentType) return;

    try {
      setIsSubmitting(true);

      // Everything is stored on the applicant record - no localStorage.
      await updateApplicant(userId, {
        studentType: formData.studentType,
        courseId,
        ...(termId ? { intakeId: termId } : {}),
        applicationStep: 1,
      });

      router.push(getApplicationPath(slugValue, courseId, formData.studentType));
    } catch (error: any) {
      console.error("Error saving course selection:", error);
      toast({
        title: "Could not save your selection",
        description:
          error?.response?.data?.message || "Please try again in a moment.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  /**
   * Re-apply: no student type to pick and no form to walk - the profile is
   * already complete, so this only opens a new application row.
   */
  const handleReapply = async () => {
    const selectedCourse = courses.find(
      (course) => course.name === formData.courseName,
    );
    const courseId = selectedCourse?._id || formData.courseId || courseIdValue;

    if (!userId || !courseId) return false;

    try {
      setIsSubmitting(true);
      const { duplicate } = await createApplicationCourse({
        applicantId: userId,
        courseId,
      });

      if (duplicate) {
        toast({
          title: "You have already applied for this course",
          description: "Check your dashboard for the application you have.",
          variant: "destructive",
        });
        return false;
      }

      return true;
    } catch (error: any) {
      console.error("Error submitting the application:", error);
      toast({
        title: "Could not submit your application",
        description:
          error?.response?.data?.message || "Please try again in a moment.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPreselectedCourse = Boolean(
    !isLoading &&
      courseIdValue &&
      courses.find((course) => course._id === courseIdValue),
  );

  // A logged in applicant waits on the profile lookup - rendering the student
  // type form first would let a completed applicant submit it and be dropped
  // back into the eleven step form.
  if (isLoading || redirecting || (userId && !applicantChecked)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-2">
        <BlinkingDots size="large" color="bg-watney" />
      </div>
    );
  }

  // Not logged in yet - the applicant logs in or creates an account first.
  if (!userId) {
    return (
      <div className="container mx-auto">
        <ApplicationForm formData={formData} onBack={() => router.back()} />
      </div>
    );
  }

  // Logged in and already completed - course and intake, then confirm.
  if (applicant?.isCompleted) {
    return (
      <div className="container mx-auto">
        <ReapplyForm
          applicantName={applicant?.firstName || applicant?.name}
          formData={formData}
          courses={courses}
          handleCourseChange={handleCourseChange}
          isPreselectedCourse={isPreselectedCourse}
          onConfirm={handleReapply}
          isSubmitting={isSubmitting}
        />
      </div>
    );
  }

  // Logged in without a student type - pick the course details first.
  return (
    <div className="container mx-auto">
      <CourseSelectionForm
        formData={formData}
        setFormData={setFormData}
        courses={courses}
        startDates={startDates}
        handleCourseChange={handleCourseChange}
        handleSubmit={handleSubmit}
        courseIdFromUrl={courseIdValue}
        isPreselectedCourse={isPreselectedCourse}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default CourseRegistration;
