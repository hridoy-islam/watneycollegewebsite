import Link from 'next/link';
import { jobs } from '@/lib/jobData';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, DollarSign, Building2, ChevronRight } from 'lucide-react';
import { Separator } from '@radix-ui/react-select';

export default function JobPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-breeze z-10">
        <div className="container mx-auto px-4 relative z-20 text-center">
          <Briefcase className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />

          <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            Explore{" "}
            <span className="text-watney-blue-primary">Career Opportunities</span>
          </h1>

          <p className="mb-12 text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl">
            Join our team of passionate professionals dedicated to making a lasting impact. 
            Discover roles that challenge, inspire, and empower you to grow in a supportive environment.
          </p>
        </div>
      </section>

      {/* Pattern Layer (above Hero but below Jobs) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute left-[248px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center rotate-0"></div>
        <div className="absolute right-[248px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center rotate-180"></div>
      </div>

      {/* Jobs Listing (above the pattern) */}
      <div className="relative z-30 rounded-lg overflow-hidden space-y-4 container py-8">
        {jobs.map((job, index) => (
          <div key={job.id} className="bg-white shadow-md rounded-md border border-gray-300">
            <Link href={`/jobs/${job.slug}`}>
              <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h2>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        {job.type}
                      </Badge>
                    </div>

                    <p className="text-slate-600 mb-4 line-clamp-2">{job.description}</p>

                    {/* <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1.5 text-slate-400" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1.5 text-slate-400" />
                        {job.category}
                      </div>
                    </div> */}
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-1" />
                </div>
              </div>
            </Link>
            {index < jobs.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </div>
  );
}

