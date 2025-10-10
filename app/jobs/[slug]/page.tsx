import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getJobBySlug, getSuggestedJobs, jobs } from '@/lib/jobData';
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
    Building2,
    Clock
} from 'lucide-react';
import moment from 'moment';

export function generateStaticParams() {
    return jobs.map((job) => ({
        slug: job.slug,
    }));
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
    const job = getJobBySlug(params.slug);

    if (!job) {
        notFound();
    }

    const suggestedJobs = getSuggestedJobs(job.id);

    return (
        <div className="min-h-screen ">
            <div className="container  py-8 space-y-4">
                <Link href="/jobs">
                    <Button className=" group-hover:bg-primary group-hover:text-white/80 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Jobs
                    </Button>
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card className="border-slate-200">
                        
<CardHeader className="space-y-4">
  {/* Job Title */}
  <div className="flex flex-row flex-wrap gap-2 items-center">
    {job.title && (
      <h2 className="text-2xl font-semibold text-slate-800">{job.title}</h2>
    )}

    {job.type && (
      <Badge
        variant="secondary"
        className="bg-blue-100 text-blue-800 hover:bg-blue-100"
      >
        {job.type}
      </Badge>
    )}
  </div>

  {/* Job Details */}

    <div className="grid sm:grid-cols-2 gap-4">
      {/* Salary */}
      {job.salary && (
        <div className="flex items-center text-slate-600">
          <DollarSign className="w-5 h-5 mr-2 text-slate-400" />
          {job.salary}
        </div>
      )}

      {/* Posting Date */}
      {job.postedDate && (
        <div className="flex items-center text-slate-600">
          <Calendar className="w-5 h-5 mr-2 text-slate-400" />
          Posting Date: {moment(job.postedDate).format("DD-MM-YYYY")}
        </div>
      )}

      {/* Deadline */}
      {job.deadline && (
        <div className="flex items-center text-slate-600">
          <Briefcase className="w-5 h-5 mr-2 text-slate-400" />
          Closing Date: {moment(job.deadline).format("DD-MM-YYYY")}
        </div>
      )}

      {/* Hours */}
      {job.hours && (
        <div className="flex items-center text-slate-600">
          <Clock className="w-5 h-5 mr-2 text-slate-400" />
          Hours: {job.hours}
        </div>
      )}

      {/* Location */}
      {job.location && (
        <div className="flex items-center text-slate-600">
          <MapPin className="w-5 h-5 mr-2 text-slate-400" />
          {job.location}
        </div>
      )}

      {/* Remote Working */}
      {job.remoteWorking && (
        <div className="flex items-center text-slate-600">
          <Briefcase className="w-5 h-5 mr-2 text-slate-400" />
          {job.remoteWorking}
        </div>
      )}

      {/* Company */}
      {job.company && (
        <div className="flex items-center text-slate-600">
          <Building2 className="w-5 h-5 mr-2 text-slate-400" />
          {job.company}
        </div>
      )}
    </div>
  

  {/* Apply Button */}
  {job.link && (
    <Button asChild className="py-5 text-lg">
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </Button>
  )}
</CardHeader>


                            <CardContent className="space-y-8">
                                {/* Job Description */}
                                <section>
                                    <h3 className="text-2xl font-semibold mb-3 text-slate-900">Job Description</h3>
                                    <p className="text-slate-700 leading-relaxed">{job.description}</p>
                                </section>

                                {/* Responsibilities */}
                                {job.responsibilities?.length > 0 && (
                                    <section>
                                        <h3 className="text-2xl font-semibold mb-3 text-slate-900">Responsibilities</h3>
                                        <ul className="space-y-3">
                                            {job.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-700">{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Requirements */}
                                {job.requirements?.length > 0 && (
                                    <section>
                                        <h3 className="text-2xl font-semibold mb-3 text-slate-900">Requirements</h3>
                                        <ul className="space-y-3">
                                            {job.requirements.map((requirement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-700">{requirement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Benefits */}
                                {job.benefits?.length > 0 && (
                                    <section>
                                        <h3 className="text-2xl font-semibold mb-3 text-slate-900">Benefits</h3>
                                        <ul className="space-y-3">
                                            {job.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 mr-3 text-slate-600 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-700">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                )}

                                {/* Final Call-to-Action */}
                                <div className="p-6 text-center space-y-4">
                                    
                                    <Button asChild className="px-8">
                                        <a
                                            href={job.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Apply Now
                                        </a>
                                    </Button>

                                </div>
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
                                    suggestedJobs.map((suggestedJob) => (
                                        <Link key={suggestedJob.id} href={`/jobs/${suggestedJob.slug}`}>
                                            <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                                                <h4 className="font-semibold text-slate-900 mb-2 hover:text-blue-600">
                                                    {suggestedJob.title}
                                                </h4>

                                                <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800 text-xs">
                                                    {suggestedJob.type}
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
