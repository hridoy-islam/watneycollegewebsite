'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

/**
 * Shell for the dashboard/profile routes. The nav and the route guards are
 * live; the real content is still to come.
 */
export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="border border-gray-200 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 font-medium text-gray-900">
                {user?.name || '-'}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 font-medium text-gray-900">
                {user?.email || '-'}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Role</dt>
              <dd className="mt-1 font-medium capitalize text-gray-900">
                {user?.role || '-'}
              </dd>
            </div>
          </dl>

          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
            <p className="font-medium text-gray-700">Coming soon</p>
            <p className="mt-1 text-sm text-gray-500">
              This section is being built. In the meantime you can continue
              browsing courses.
            </p>
            <Link href="/courses">
              <Button className="mt-4 bg-watney text-white hover:bg-watney/90">
                Browse courses
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PlaceholderPage;
