import type { Metadata } from 'next';

/**
 * The public offer page is personal to one applicant: kept out of search
 * engines, and the link itself is never passed on as a referrer to anything
 * the page links out to.
 */
export const metadata: Metadata = {
  title: 'Your Offer | Watney College',
  robots: { index: false, follow: false },
  referrer: 'no-referrer'
};

export default function OfferResponseLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[60vh] bg-gray-50 px-4 py-8 sm:py-12">
      {children}
    </main>
  );
}
