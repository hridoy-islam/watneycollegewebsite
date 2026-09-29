'use client';

import { useEffect, useRef } from 'react';
import { notFound, usePathname, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { BlinkingDots } from '@/components/blinking-dots';

interface ProtectedRouteProps {
  children: React.ReactNode;
  /** When given, only these roles may open the route. */
  roles?: string[];
}

/**
 * Guards a route behind a logged in user.
 *
 * Someone signed out is sent to the login page carrying where they were
 * heading, so they land on it once they are in. That matters because portal
 * URLs are handed out: an offer letter is mailed as a link to
 * `/dashboard/offer-letter/<id>`, and an applicant whose session has expired -
 * or who bookmarked the letter - would otherwise be met with the not found
 * page rather than a way in.
 *
 * The wrong *role* is a different thing and still gets not found: it is not a
 * mistake another sign in would fix.
 *
 * The whole app renders inside a PersistGate, so redux has already been
 * rehydrated by the time this runs on the client - a missing user here really
 * does mean signed out.
 */
export function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const user = useSelector((state: any) => state.auth.user);
  const router = useRouter();
  const pathname = usePathname();
  const hadUser = useRef(false);

  if (user) hadUser.current = true;

  useEffect(() => {
    if (user) return;

    // Logging out from inside a protected page sends the user home rather than
    // bouncing them into a login form they did not ask for.
    if (hadUser.current) {
      router.replace('/');
      return;
    }

    router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
  }, [user, pathname, router]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <BlinkingDots size="large" color="bg-watney" />
      </div>
    );
  }

  if (roles && !roles.includes(user.role)) notFound();

  return <>{children}</>;
}

export default ProtectedRoute;
