"use client";
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  MapPin,
  DollarSign,
  Calendar,
  CheckCircle2,
  ArrowLeft,
  Clock
} from 'lucide-react';
import moment from 'moment';
import { BlinkingDots } from '@/components/blinking-dots';

export default function JobDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();

  const [job, setJob] = useState<any>(null);
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
        const data = res.data?.data;
        let result: any[] = [];
        if (data && Array.isArray(data.result)) {
          result = data.result;
        } else if (Array.isArray(data)) {
          result = data;
        }
        setAllJobs(result);
        const found = result.find((j: any) => j.slug === slug);
        setJob(found || null);
      } catch (e) {
        console.error('Failed to fetch job', e);
        setJob(null);
        setAllJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [slug]);

  const suggestedJobs = allJobs
    .filter((j: any) => j._id !== job?._id && j.slug !== slug)
    .slice(0, 3);

  if (loading) {
    return <div className="container py-8 text-center">
      <BlinkingDots/>
    </div>;
  }

  if (!job) {
    return (
      <div className="container py-8 text-center">
        <h2 className="text-xl font-semibold">Job not found</h2>
        <Button onClick={() => router.push('/jobs')} className="mt-4">Back to Jobs</Button>
      </div>
    );
  }

  const title = job.jobTitle || job.title || '';
  const description = job.jobDetail || job.description || '';
  const jobId = job._id || job.id || job.jobId || '';
  const type = job.type || 'Permanent';
  const salary = job.salary || '';
  const postedDate = job.createdAt ? new Date(job.createdAt) : (job.postedDate ? new Date(job.postedDate) : null);
  const deadline = job.applicationDeadline ? new Date(job.applicationDeadline) : (job.deadline ? new Date(job.deadline) : null);
  const hours = job.hours || '';
  const location = job.location || '';
  const remoteWorking = job.remoteWorking || '';
  const designationTitle = job.designationId?.title || job.designationId || '';
  const responsibilities = job.responsibilities || [];
  const requirements = job.requirements || [];
  const benefits = job.benefits || [];

  return (
    <div className="min-h-screen">
      <div className="container py-8 space-y-4">
        <Link href="/jobs">
          <Button className="group-hover:bg-primary group-hover:text-white/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-3">
          <div className="lg:col-span-2">
            <Card className="border-slate-200">
              <CardHeader className="space-y-4">
                {/* Job Title */}
                <div className="flex flex-row flex-wrap gap-2 items-center">
                  {title && (
                    <h2 className="text-2xl font-semibold text-slate-800">{title}</h2>
                  )}
                  {type && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-100"
                    >
                      {type}
                    </Badge>
                  )}
                </div>

                {/* Job Details */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {salary && (
                    <div className="flex items-center text-slate-600">
                      <DollarSign className="w-5 h-5 mr-2 text-slate-400" />
                      {salary}
                    </div>
                  )}

                  {postedDate && (
                    <div className="flex items-center text-slate-600">
                      <Calendar className="w-5 h-5 mr-2 text-slate-400" />
                      Posting Date: {moment(postedDate).format("DD-MM-YYYY")}
                    </div>
                  )}

                  {deadline && (
                    <div className="flex items-center text-slate-600">
                      <Briefcase className="w-5 h-5 mr-2 text-slate-400" />
                      Closing Date: {moment(deadline).format("DD-MM-YYYY")}
                    </div>
                  )}

                  {hours && (
                    <div className="flex items-center text-slate-600">
                      <Clock className="w-5 h-5 mr-2 text-slate-400" />
                      Hours: {hours}
                    </div>
                  )}

                  {location && (
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-5 h-5 mr-2 text-slate-400" />
                      Location: {location}
                    </div>
                  )}

                  {remoteWorking && (
                    <div className="flex items-start text-slate-600">
                      <Briefcase className="w-6 h-6 mr-2 text-slate-400" />
                      Remote Working: {remoteWorking}
                    </div>
                  )}

                  {designationTitle && (
                    <div className="flex items-center text-slate-600">
                      <Briefcase className="w-5 h-5 mr-2 text-slate-400" />
                      Designation: {designationTitle}
                    </div>
                  )}
                </div>

                {/* Apply Button */}
                {jobId && (
                  <Button onClick={() => router.push(`/jobs/${slug}/${jobId}/career-application`)} className="py-5 text-lg">
                    Apply Now
                  </Button>
                )}
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Job Description */}
                <section>
                  <h3 className="text-2xl font-semibold mb-3 text-slate-900">Job Description</h3>
                  <div className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
                </section>

                {/* Responsibilities */}
                {responsibilities.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-900">Responsibilities</h3>
                    <ul className="space-y-3">
                      {responsibilities.map((responsibility: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Requirements */}
                {requirements.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-900">Requirements</h3>
                    <ul className="space-y-3">
                      {requirements.map((requirement: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Benefits */}
                {benefits.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-semibold mb-3 text-slate-900">Benefits</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 mr-3 text-slate-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Final Call-to-Action */}
                {jobId && (
                  <div className="p-6 text-center space-y-4">
                    <Button onClick={() => router.push(`/jobs/${slug}/${jobId}/career-application`)} className="px-8">
                      Apply Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-slate-200 sticky top-28">
              <CardHeader>
                <CardTitle className="text-xl">Suggested Jobs</CardTitle>
                <CardDescription>Similar positions you might be interested in</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col">
                {suggestedJobs.length > 0 ? (
                  suggestedJobs.map((suggestedJob: any) => (
                    <Link key={suggestedJob._id || suggestedJob.id} href={`/jobs/${suggestedJob.slug}`}>
                      <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                        <h4 className="font-semibold text-slate-900 mb-2 hover:text-blue-600">
                          {suggestedJob.jobTitle || suggestedJob.title}
                        </h4>
                        <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800 text-xs">
                          {suggestedJob.type || 'Permanent'}
                        </Badge>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-slate-500 text-sm">No similar jobs available at the moment.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
