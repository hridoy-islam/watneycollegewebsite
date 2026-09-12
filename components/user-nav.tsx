'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown, LayoutDashboard, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Providers } from '@/app/providers';
import { logout } from '@/redux/features/authSlice';
import type { AppDispatch } from '@/redux/store';
import { isAgent, isApplicant } from '@/components/auth/roles';

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

interface UserNavProps {
  /** Renders the menu inline instead of as a dropdown (mobile drawer). */
  inline?: boolean;
  onNavigate?: () => void;
}

function UserNavContent({ inline = false, onNavigate }: UserNavProps) {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close the dropdown on an outside click or Escape.
  useEffect(() => {
    if (!open) return;

    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  // Never keep the menu open across a navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    setOpen(false);
    onNavigate?.();
    dispatch(logout());
    router.push('/');
  };

  if (!user) {
    return (
      <Link href="/login" onClick={onNavigate}>
        <Button
          className={`bg-watney text-white hover:bg-watney/90 ${
            inline ? 'w-full' : ''
          }`}
        >
          Login
        </Button>
      </Link>
    );
  }

  const menuLinks = isAgent(user.role)
    ? [
        { name: 'Dashboard', path: '/agent/dashboard', icon: LayoutDashboard },
        // { name: 'Agent Profile', path: '/agent/profile', icon: User }
      ]
    : isApplicant(user.role)
      ? [
          { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
          // { name: 'Profile', path: '/profile', icon: User }
        ]
      : [];

  const links = (
    <>
      {menuLinks.map(({ name, path, icon: Icon }) => (
        <Link
          key={path}
          href={path}
          onClick={() => {
            setOpen(false);
            onNavigate?.();
          }}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-watney"
        >
          <Icon className="h-4 w-4" />
          {name}
        </Link>
      ))}

      <div className="my-1 border-t border-gray-200" />

      <button
        type="button"
        onClick={handleLogout}
        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </>
  );

  const account = (
    <div className="flex items-center gap-3 px-3 py-2">
      <Avatar className="h-9 w-9 border border-gray-200">
        {user.image ? <AvatarImage src={user.image} alt={user.name} /> : null}
        <AvatarFallback className="bg-watney text-sm font-semibold text-white">
          {getInitials(user)}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-gray-900">
          {user.name || 'My account'}
        </p>
        <p className="truncate text-xs text-gray-500">{user.email}</p>
      </div>
    </div>
  );

  if (inline) {
    return (
      <div className="rounded-lg border border-gray-200">
        {account}
        <div className="border-t border-gray-200 p-1">{links}</div>
      </div>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="User menu"
        className="flex items-center gap-1 rounded-full border border-gray-200 p-0.5 transition-colors hover:border-watney focus:outline-none focus-visible:ring-2 focus-visible:ring-watney"
      >
        <Avatar className="h-10 w-10">
          {user.image ? <AvatarImage src={user.image} alt={user.name} /> : null}
          <AvatarFallback className="bg-watney text-sm font-semibold text-white">
            {getInitials(user)}
          </AvatarFallback>
        </Avatar>
        <ChevronDown
          className={`mr-1 h-4 w-4 text-gray-500 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-[100000] mt-2 w-64 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {account}
          <div className="border-t border-gray-200 p-1">{links}</div>
        </div>
      )}
    </div>
  );
}

/**
 * The header sits outside the app-wide Providers so the marketing nav still
 * renders on the server - this island brings redux to just the user menu.
 */
export default function UserNav(props: UserNavProps) {
  return (
    <Providers>
      <UserNavContent {...props} />
    </Providers>
  );
}
