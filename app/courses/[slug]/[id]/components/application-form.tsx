'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { LogIn, MoveLeft, UserPlus } from 'lucide-react';

interface ApplicationFormProps {
  formData: {
    studentType: string;
    termName: string;
    courseName: string;
    courseId: string;
  };
  onBack: () => void;
}

/**
 * Shown on a course page to an applicant who is not signed in. Sign in and
 * sign up are full pages now - no dialog - and both carry a redirect back to
 * this course so the application resumes where it left off.
 */

export default function ApplicationForm({
  formData,
  onBack
}: ApplicationFormProps) {
  const pathname = usePathname() || '/courses';
  const redirect = encodeURIComponent(pathname);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="space-y-8 px-4 py-8">
        {/* Course Details Card - Top Section */}
        <Card className="border border-gray-200 shadow-md">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle>Selected Course Details</CardTitle>
              <CardDescription>
                Sign in or create an account to continue with your application
              </CardDescription>
            </div>
            <Button
              variant="outline"
              onClick={onBack}
              className="h-8 bg-watney text-white hover:bg-watney/90 hover:text-white"
            >
              <MoveLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Name</TableHead>
                  <TableHead>Term</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    {formData.courseName || 'Not selected'}
                  </TableCell>
                  <TableCell>{formData.termName || 'Not selected'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Sign in / sign up */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border border-gray-200 shadow-md">
            <CardHeader className="rounded-t-lg bg-watney text-white">
              <CardTitle className="text-lg">
                I already have an account
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-6 p-6">
              <p className="text-sm text-black">
                Sign in with the email address and password you registered with
                and we will take you straight back to this application.
              </p>
              <div className="space-y-3">
                <Link href={`/login?redirect=${redirect}`} className="block">
                  <Button className="w-full gap-2 bg-watney text-white hover:bg-watney/90">
                    <LogIn className="h-4 w-4" />
                    Sign in
                  </Button>
                </Link>
                <p className="text-center text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-black hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-md">
            <CardHeader className="rounded-t-lg bg-watney text-white">
              <CardTitle className="text-lg">I am a new user</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-6 p-6">
              <p className="text-sm text-black">
                You will be asked to create a username (your email address) and
                a password. Please make a note of both - you will need them to
                log back in to your application.
              </p>
              <Link href={`/signup?redirect=${redirect}`} className="block">
                <Button className="w-full gap-2 bg-watney text-white hover:bg-watney/90">
                  <UserPlus className="h-4 w-4" />
                  Create an account
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
