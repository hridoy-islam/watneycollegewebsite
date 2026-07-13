"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ProfilePictureStep } from './components/profile-picture-step';
import { PersonalDetailsStep } from './components/personal-details-step';
import { DisabilityInfoStep } from './components/disability-info-step';
import { ApplicationDetailsStep } from './components/application-details-step';
import { ReviewStep } from './components/review-step';
import { RefereeDetailsStep } from './components/referee-details-step';
import { DocumentStep } from './components/DocumentStep';
import { EducationStep } from './components/education-step';
import { EmploymentStep } from './components/employment-step';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import axiosInstance from '@/lib/axios';
import type { TCareer } from '@/types/career';
import { EmergencyContact } from './components/emergencyContact';
import { ApplicationPreview } from './components/application-preview';
// Define form steps for career application
const careerFormSteps = [
  { id: 1, label: 'Profile Picture' },
  { id: 2, label: 'Personal Details' },
  { id: 3, label: 'Application Details' },
  { id: 4, label: 'Education' },
  { id: 5, label: 'Employment' },
  { id: 6, label: 'Disability Info' },
  { id: 7, label: 'Emergency Contact' },
  { id: 8, label: 'Referee Details' },
  { id: 9, label: 'Documents' },
  { id: 10, label: 'Consent & Permissions' },
  { id: 11, label: 'Preview & Submit' }
];

export default function CareerApplicationForm() {
  const params = useParams();
  const id = params?.id as string;

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<Partial<TCareer>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('career_form_data');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to restore form data', e);
        }
      }
    }
    return {};
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useRouter();
  const [parsedResume, setParsedResume] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      localStorage.setItem('applicationId', id);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentStep]);

  useEffect(() => {
    localStorage.setItem('career_form_data', JSON.stringify(formData));
  }, [formData]);



  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const markStepAsCompleted = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps((prev) => [...prev, stepId]);
    }
  };

  const handleProfilePictureSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(1);
    setCurrentStep(2);
  };

  const handlePersonalDetailsSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(2);
    setCurrentStep(3);
  };

  const handleApplicationDetailsSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(3);
    setCurrentStep(4);
  };

  const handleEducationSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(4);
    setCurrentStep(5);
  };

  const handleEmploymentSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(5);
    setCurrentStep(6);
  };

  const handleDisabilityInfoSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(6);
    setCurrentStep(7);
  };

  const handleEmergencySaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(7);
    setCurrentStep(8);
  };

  const handleRefereeDetailsSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(8);
    setCurrentStep(9);
  };

  const handleDocumentSave = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleDocumentsSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(9);
    setCurrentStep(10);
  };

  const handleDashboardRedirect = () => {
   
      navigate.push('/');
    
  };

  const handleConsentSaveAndContinue = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    markStepAsCompleted(10);
    setCurrentStep(11);
  };

  const handleSubmit = async (declarationData: any) => {
    setSubmitting(true);
    try {
      const appId = localStorage.getItem('applicationId');

      const response = await axiosInstance.post('/auth/signup', {
        ...formData,
        ...declarationData,
        isCompleted: true,
        authorized: true,
        password:'WC123456',
        role:'applicant'
      });

      const userId = response.data?._id || response.data?.data?._id;

      if (appId && userId) {
        await axiosInstance.post('/application-job', {
          jobId: appId,
          applicantId: userId
        });
      }

      localStorage.removeItem('applicationId');
      localStorage.removeItem('career_form_data');

      // toast({
      //   description: 'Career application submitted successfully.'
      // });
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message || 'Something went wrong.',
        className: 'destructive border-none text-white'
      });
      setSubmitting(false);
      return;
    }

    setFormSubmitted(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProfilePictureStep
            defaultValues={formData}
            onSaveAndContinue={handleProfilePictureSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <PersonalDetailsStep
            defaultValues={formData}
            onSaveAndContinue={handlePersonalDetailsSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return (
          <ApplicationDetailsStep
            defaultValues={formData}
            onSaveAndContinue={handleApplicationDetailsSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 4:
        return (
          <EducationStep
            defaultValues={formData}
            onSaveAndContinue={handleEducationSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 5:
        return (
          <EmploymentStep
            defaultValues={formData}
            onSaveAndContinue={handleEmploymentSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 6:
        return (
          <DisabilityInfoStep
            defaultValues={formData}
            onSaveAndContinue={handleDisabilityInfoSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 7:
        return (
          <EmergencyContact
            defaultValues={formData}
            onSaveAndContinue={handleEmergencySaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 8:
        return (
          <RefereeDetailsStep
            defaultValues={formData}
            onSaveAndContinue={handleRefereeDetailsSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 9:
        return (
          <DocumentStep
            defaultValues={formData}
            onSaveAndContinue={handleDocumentsSaveAndContinue}
            setCurrentStep={setCurrentStep}
             onSave={handleDocumentSave}
          />
        );
      case 10:
        return (
          <ReviewStep
            defaultValues={formData}
            formData={formData}
            onSaveAndContinue={handleConsentSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 11:
        return (
          <ApplicationPreview
            defaultValues={formData}
            onSubmit={handleSubmit}
            setCurrentStep={setCurrentStep}
            submitting={submitting}
          />
        );
      default:
        return (
          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <h2 className="mb-4 text-xl font-semibold">Step {currentStep}</h2>
            <p className="mb-4 text-gray-600">
              This step is not implemented yet.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  markStepAsCompleted(currentStep);
                  setCurrentStep((prev) =>
                    Math.min(careerFormSteps.length, prev + 1)
                  );
                }}
              >
                Save & Continue
              </Button>
            </div>
          </div>
        );
    }
  };

  if (formSubmitted) {
    return (
      <div className="flex min-h-[calc(100vh-150px)] items-center justify-center">
        <Card className="rounded-lg border border-gray-100 bg-watney/90 p-24 my-8 shadow-lg">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-full bg-white p-8">
              <Check size={84} className="text-watney" />
            </div>
            <div className="flex items-center gap-4 text-center">
              <div>
                <CardTitle className="text-2xl font-semibold text-white">
                  Career Application Submitted Successfully
                </CardTitle>
                <CardDescription className="mt-2 text-base leading-relaxed text-white">
                  Thank you for your submission. Our team has received your
                  career application and will get back to you shortly. Stay
                  tuned!
                  {/* Support Section */}
                  <div className=" mt-2 w-full rounded-md text-center text-base text-white ">
                    <p>
                      If you have any questions or need help with your
                      application, please don’t hesitate to contact us:
                    </p>
                    <ul className="mt-3 list-none space-y-2">
                      <li>
                        📧 <strong>Email:</strong>{' '}
                        <a
                          href="mailto:admissions@watneycollege.ac.uk"
                          className="underline"
                        >
                          admissions@watneycollege.ac.uk
                        </a>
                      </li>
                      <li>
                        ☎ <strong>Phone:</strong> +44 (0)20 1234 5678
                      </li>
                    </ul>
                  </div>
                </CardDescription>
              </div>
            </div>

            <Button
              onClick={handleDashboardRedirect}
              className="mt-4 w-full rounded-sm bg-white px-6 py-3 text-base font-semibold text-watney transition hover:bg-white sm:w-auto"
            >
              Done
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className=" container mx-auto">
      {/* <h1 className="text-2xl font-bold text-center mb-8">Career Application</h1> */}
      {/* <StepIndicator currentStep={currentStep} totalSteps={totalSteps} /> */}
      <div className="">{renderStep()}</div>
    </div>
  );
}

