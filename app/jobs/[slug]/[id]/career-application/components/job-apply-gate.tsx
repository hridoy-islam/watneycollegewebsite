'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, CalendarDays, LogIn, MapPin, MoveLeft, UserPlus } from 'lucide-react';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { DetailTile } from '@/components/dashboard/detail-tile';

interface JobApplyGateProps {
  job: any;
  onBack: () => void;
}

/**
 * Shown on a job's application page to someone who is not signed in - the
 * job counterpart of the course page's sign in / sign up choice. Both links
 * carry a redirect back here so the application starts once they are in, and
 * sign up arrives with the job applicant account pre-selected.
 */
export default function JobApplyGate({ job, onBack }: JobApplyGateProps) {
  const pathname = usePathname() || '/jobs';
  const redirect = encodeURIComponent(pathname);

  const deadline = job?.applicationDeadline
    ? moment(job.applicationDeadline).format('DD-MM-YYYY')
    : '';

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="space-y-8 px-4 py-8">
        <Card className="border border-gray-200 shadow-md">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle>{job?.jobTitle || 'Job application'}</CardTitle>
              <CardDescription>
                Sign in or create a job applicant account to apply for this
                role
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
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <DetailTile
                icon={Briefcase}
                label="Job type"
                value={job?.type || '-'}
              />
              <DetailTile
                icon={MapPin}
                label="Location"
                value={job?.location || '-'}
              />
              <DetailTile
                icon={CalendarDays}
                label="Closing date"
                value={deadline || '-'}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border border-gray-200 shadow-md">
            <CardHeader className="rounded-t-lg bg-watney text-white">
              <CardTitle className="text-lg">I already have an account</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-6 p-6">
              <p className="text-sm text-black">
                Sign in with the email address and password you registered with
                and we will take you straight back to this application. If you
                started it before, you will pick up from where you left off.
              </p>
              <div className="space-y-3">
                <Link href={`/login?redirect=${redirect}`} className="block">
                  <Button className="w-full gap-2 bg-watney text-white hover:bg-watney/90">
                    <LogIn className="h-4 w-4" />
                    Sign in
                  </Button>
                </Link>
                <p className="text-center text-sm">
                  <Link href="/forgot-password" className="text-black hover:underline">
                    Forgot your password?
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-md">
            <CardHeader className="rounded-t-lg bg-watney text-white">
              <CardTitle className="text-lg">I am a new applicant</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-6 p-6">
              <p className="text-sm text-black">
                Create a job applicant account with your email address and a
                password. We will email you a code to verify the address, then
                you can sign in and complete your application.
              </p>
              <Link href={`/signup?type=job&redirect=${redirect}`} className="block">
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
