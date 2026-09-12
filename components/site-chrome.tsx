'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Routes that render without the marketing chrome: the logged in portals get
 * a side nav instead of the top navbar, and the auth screens are full bleed.
 */
const BARE_ROUTES = [
  '/dashboard',
  '/agent',
  '/agent-login',
  '/login',
  '/signup',
  '/forgot-password',
  '/otp',
  '/new-password'
];

const isBareRoute = (pathname: string) =>
  BARE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';

  if (isBareRoute(pathname)) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">{children}</div>
      <Footer />
    </>
  );
}

export default SiteChrome;
