'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { PortalApplication } from '@/lib/portal';

/**
 * Loads the applications for whoever is signed in. Both portals do the same
 * thing with a different reader, so the loading / failed / cancelled handling
 * lives here rather than in four copies.
 */
export function usePortalApplications(
  load: (id: string) => Promise<PortalApplication[]>
) {
  const user = useSelector((state: any) => state.auth.user);
  const userId = user?._id;

  const [applications, setApplications] = useState<PortalApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!userId) return;
    let cancelled = false;

    (async () => {
      try {
        const result = await load(userId);
        if (!cancelled) setApplications(result);
      } catch (error) {
        console.error('Could not load applications:', error);
        if (!cancelled) setLoadFailed(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
    // `load` is a module level function - re-running on identity would loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return { user, applications, isLoading, loadFailed };
}
