import type { Metadata } from 'next';

// Private, one-off links - keep them out of search results.
export const metadata: Metadata = {
  title: 'Reference Form | Watney College',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: { index: false, follow: false, noarchive: true, nosnippet: true }
  }
};

export default function RefereeLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
