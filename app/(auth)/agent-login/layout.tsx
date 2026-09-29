import type { Metadata } from 'next';

/**
 * The agent login is unlisted - it is never linked from the site and search
 * engines are told to leave it alone.
 */
export const metadata: Metadata = {
  title: 'Agent Login',
  robots: { index: false, follow: false }
};

export default function AgentLoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
