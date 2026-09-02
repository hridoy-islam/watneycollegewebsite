"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge } from '@/components/ui/badge';
import { Briefcase, ChevronRight } from 'lucide-react';
import { Separator } from '@radix-ui/react-select';
import { DataTablePagination } from '@/components/data-table-pagination';

export default function JobPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const fetchData = async (page: number, limit: number) => {
    try {
      setInitialLoading(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        params: { page, limit, status: 1 },
      });
      const data = res.data?.data;
      if (data && Array.isArray(data.result)) {
        setJobs(data.result);
        setTotalPages(data.meta?.totalPage || 1);
      } else if (Array.isArray(data)) {
        setJobs(data);
        setTotalPages(1);
      }
    } catch (e) {
      console.error('Failed to fetch jobs', e);
      setJobs([]);
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, entriesPerPage);
  }, [currentPage, entriesPerPage]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-ocean-breeze z-10">
        <div className="container mx-auto px-4 relative z-20 text-center">
          <Briefcase className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            Explore <span className="text-watney-blue-primary">Career Opportunities</span>
          </h1>
          <p className="mb-12 text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl">
            Join our team of passionate professionals dedicated to making a lasting impact.
            Discover roles that challenge, inspire, and empower you to grow in a supportive environment.
          </p>
        </div>
      </section>

      {/* Pattern Layer */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute left-[248px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center rotate-0" />
        <div className="absolute right-[248px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center rotate-180" />
      </div>

      {/* Jobs Listing */}
      <div className="relative z-30 rounded-lg overflow-hidden space-y-4 container py-8">
        {initialLoading ? (
          <div className="text-center text-slate-500 py-12">Loading...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center text-slate-500 py-12">No jobs available at the moment.</div>
        ) : (
          <>
            {jobs.map((job: any, index: number) => (
              <div key={job._id || job.id || index} className="bg-white shadow-md rounded-md border border-gray-300">
                <Link href={`/jobs/${job.slug || job.slug}`}>
                  <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {job.jobTitle || job.title}
                          </h2>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            {job.type || 'Permanent'}
                          </Badge>
                        </div>

                        {job.designationId?.title && (
                          <p className="text-sm text-slate-500 mb-1">{job.designationId.title}</p>
                        )}

                        <div className="text-slate-600 mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: job.jobDetail || job.description || job.detail || '' }} />
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
                {index < jobs.length - 1 && <Separator />}
              </div>
            ))}
            {totalPages > 1 && (
              <div className="flex items-center justify-end gap-2 pt-4">
                <DataTablePagination
                  pageSize={entriesPerPage}
                  setPageSize={setEntriesPerPage}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
