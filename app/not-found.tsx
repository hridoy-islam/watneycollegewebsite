import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center">
      <p className="text-7xl font-bold text-watney md:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-black md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-black">
        The page you are looking for does not exist, or you need to be logged in
        to view it.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/">
          <Button className="bg-watney text-white hover:bg-watney/90">
            Back to home
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Log in</Button>
        </Link>
      </div>
    </div>
  );
}
