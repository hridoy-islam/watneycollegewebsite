'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, Menu, X, type LucideIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { logout } from '@/redux/features/authSlice';
import type { AppDispatch } from '@/redux/store';

export interface PortalNavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface PortalShellProps {
  /** Sits under the logo - "Applicant Portal" / "Agent Portal". */
  portalName: string;
  navItems: PortalNavItem[];
  children: React.ReactNode;
}

const getInitials = (user: any) => {
  const source = user?.name || user?.email || '';
  const initials = source
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part: string) => part[0])
    .join('');
  return initials.toUpperCase() || 'U';
};

/**
 * Layout for the logged in areas: a side nav and nothing else - the marketing
 * header and footer are suppressed for these routes by `SiteChrome`.
 */
export function PortalNav({
  portalName,
  navItems,
  children
}: PortalShellProps) {
  const pathname = usePathname() || '';
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: any) => state.auth.user);
  const [mobileOpen, setMobileOpen] = useState(false);

  // A navigation always closes the mobile drawer.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  const sidebar = (
    <div className="flex h-full flex-col bg-watney text-white">
      {/* Brand */}
      <div className="flex items-center justify-between gap-3 border-b border-white/15 px-5 py-5">
        <Link href="/" className="min-w-0 ">
          <Image
            src="/watney-white.png"
            alt="Watney College"
            width={170}
            height={48}
            className="h-24 w-auto object-contain"
          />
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
            {portalName}
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="rounded-md p-1 text-white/80 hover:bg-white/10 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {/* No active state - the page itself says where you are. The only
            feedback here is the hover. */}
        {navItems.map(({ name, path, icon: Icon }) => (
          <Link
            key={path}
            href={path}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white hover:text-watney"
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{name}</span>
          </Link>
        ))}
      </nav>

      {/* Account */}
      <div className="border-t border-white/15 p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <Avatar className="h-9 w-9 border border-white/25">
            {user?.image ? (
              <AvatarImage src={user.image} alt={user?.name || ''} />
            ) : null}
            <AvatarFallback className="bg-white/15 text-sm font-semibold text-white">
              {getInitials(user)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              {user?.name || 'My account'}
            </p>
            <p className="truncate text-xs text-white/70">{user?.email}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop side nav */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 lg:block">
        {sidebar}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-64">{sidebar}</aside>
        </div>
      )}

      <div className="lg:pl-64">
        {/* Mobile menu bar - the only thing that ever sits on top, and only
            because the side nav is off canvas on small screens. */}
        <div className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-md p-1.5 text-gray-600 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Image
            src="/watney.png"
            alt="Watney College"
            width={140}
            height={40}
            className="h-7 w-auto object-contain"
          />
        </div>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default PortalNav;
