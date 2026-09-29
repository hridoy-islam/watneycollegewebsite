'use client';

import Image from 'next/image';
import Link from 'next/link';

interface AuthShellProps {
  /** Small line above the headline, e.g. "CREATE YOUR ACCOUNT". */
  eyebrow: string;
  headline: string;
  blurb: string;
  /** Card heading + sub heading on the form side. */
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  /** Rendered under the form - the "back to login" / "create account" links. */
  footer?: React.ReactNode;
  /** Wider card for the multi column sign up form. */
  wide?: boolean;
}

/**
 * The split screen used by every auth page: college branding over a photo on
 * the left, the form in a card on the right. Ported from the University
 * Management auth screens onto Watney's palette.
 */
export function AuthShell({
  eyebrow,
  headline,
  blurb,
  title,
  subtitle,
  children,
  footer,
  wide = false
}: AuthShellProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col lg:flex-row">
      {/* Brand side */}
      <div className="relative flex min-h-[240px] w-full items-center overflow-hidden lg:min-h-screen lg:w-1/2">
        <Image
          src="/student.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-watney/65" />

        <div className="relative z-10 w-full px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
          <Link href="/" className=" md:-ml-4 inline-flex items-center">
            <Image
              src="/watney-white.png"
              alt="Watney College"
              width={190}
              height={54}
              className="h-28 w-auto object-contain "
            />
          </Link>

          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              {headline}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white">
              {blurb}
            </p>
          </div>
        </div>
      </div>

      {/* Form side */}
      <div className="flex w-full flex-1 items-center justify-center bg-gray-50 px-4 py-10 sm:px-8 lg:w-1/2 lg:py-16">
        <div className={`w-full ${wide ? 'max-w-3xl' : 'max-w-md'}`}>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-1.5 text-sm text-gray-600">{subtitle}</p>
              )}
            </div>

            {children}

            {footer && (
              <div className="mt-6 border-t border-gray-100 pt-5 text-center text-sm text-gray-600">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthShell;
