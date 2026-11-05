'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookAIcon, CalendarDays, Check, Loader2, MoveLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ContactDetails } from '@/components/application/application-form-shell';

export interface ReapplyCourse {
  _id: string;
  name: string;
}

interface ReapplyFormProps {
  applicantName?: string;
  formData: {
    studentType: string;
    termName: string;
    courseName: string;
    courseId: string;
  };
  courses: ReapplyCourse[];
  handleCourseChange: (value: string) => void;
  /** A course came in on the URL - it is fixed, not a choice. */
  isPreselectedCourse: boolean;
  /** Creates the application. Resolves true when it was accepted. */
  onConfirm: () => Promise<boolean>;
  isSubmitting: boolean;
}

/**
 * An applicant who has already completed their profile does not fill the
 * eleven step form again - they only pick the course, confirm, and a new
 * application row is opened against the profile they already have.
 */
export default function ReapplyForm({
  applicantName,
  formData,
  courses,
  handleCourseChange,
  isPreselectedCourse,
  onConfirm,
  isSubmitting
}: ReapplyFormProps) {
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canApply = !!formData.courseId && !!formData.courseName;

  const handleConfirm = async () => {
    const ok = await onConfirm();
    if (ok) {
      setConfirmOpen(false);
      setSubmitted(true);
    }
  };

  // The same thank you card the eleven step form ends on - a reapplication is
  // still an application, so it is not told apart here.
  if (submitted) {
    return (
      <div className="mt-8 flex items-center justify-center px-4">
        <Card className="w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-xl">
          <div className="h-1.5 w-full bg-watney" />
          <div className="flex flex-col items-center gap-6 px-8 py-12 text-center md:px-14 md:py-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-watney ring-8 ring-watney/10">
              <Check size={40} className="text-white" strokeWidth={3} />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
                Application Submitted Successfully
              </CardTitle>
              <CardDescription className="mt-3 text-base leading-relaxed text-gray-600">
                <ContactDetails />
              </CardDescription>
            </div>
            <Button
              onClick={() => router.push('/')}
              className="mt-2 w-full rounded-lg bg-watney px-12 py-3 text-base font-semibold text-white transition hover:bg-watney/90 sm:w-auto"
            >
              Done
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white p-2">
      <Button
        onClick={() => router.back()}
        className="absolute right-4 top-4 bg-watney text-white transition-colors hover:bg-watney/90 md:right-8 md:top-8"
      >
        <MoveLeft className="mr-2 h-5 w-5" /> Back To Course
      </Button>

      <div className="container flex w-full flex-col items-center justify-center">
        <Card className="w-full max-w-xl rounded-2xl border border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">
              Apply for another course
            </CardTitle>
            <CardDescription>
              {applicantName ? `${applicantName}, your` : 'Your'} application
              details are already complete, so this is all we need.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Course */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-black">
                Course
              </label>
              {isPreselectedCourse ? (
                <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3">
                  <BookAIcon className="h-4 w-4 shrink-0 text-watney" />
                  <span className="text-sm font-medium text-black">
                    {formData.courseName}
                  </span>
                </div>
              ) : (
                <Select
                  value={formData.courseName}
                  onValueChange={handleCourseChange}
                >
                  <SelectTrigger className="relative flex w-full items-center rounded-lg border border-gray-300 bg-white py-4 pl-10 pr-3 text-sm text-black focus:ring-2 focus:ring-watney">
                    <BookAIcon
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-watney"
                      size={16}
                    />
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course._id} value={course.name}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Term - always follows the course, never chosen separately */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-black">
                Intake
              </label>
              <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3">
                <CalendarDays className="h-4 w-4 shrink-0 text-watney" />
                <span className="text-sm font-medium text-black">
                  {formData.termName || 'To be confirmed'}
                </span>
              </div>
            </div>

            <Button
              type="button"
              onClick={() => setConfirmOpen(true)}
              disabled={!canApply || isSubmitting}
              className="w-full bg-watney text-white hover:bg-watney/90 disabled:opacity-50"
            >
              Apply for this course
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Confirmation */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm your application</DialogTitle>
            <DialogDescription>
              We will submit a new application using the details already on
              your profile.
            </DialogDescription>
          </DialogHeader>

          <dl className="space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-black">Course</dt>
              <dd className="text-right font-medium text-black">
                {formData.courseName}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-black">Intake</dt>
              <dd className="text-right font-medium text-black">
                {formData.termName || 'To be confirmed'}
              </dd>
            </div>
          </dl>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              onClick={() => setConfirmOpen(false)}
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={isSubmitting}
              className="w-full gap-2 bg-watney text-white hover:bg-watney/90 sm:w-auto"
            >
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? 'Submitting...' : 'Confirm and submit'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
