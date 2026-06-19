"use client";

import { useEffect, useRef, useState } from 'react';
import { StepsIndicator } from './components/steps-indicator';
import { formSteps } from './components/form-steps';
import { PersonalDetailsStep } from './components/personal-details-step';
import { AddressStep } from './components/address-step';
import { EducationStep } from './components/education-step';
import { EmploymentStep } from './components/employment-step';
import { ComplianceStep } from './components/compliance-step';
import { DocumentsStep } from './components/documents-step';
import { TermsSubmitStep } from './components/terms-submit-step';
import { ReviewModal } from './components/review-modal';
import { Button } from '@/components/ui/button';
import { AlertCircle, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { EmergencyContact } from './components/emergencyContact';
import axiosInstance from '@/lib/axios';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '@/redux/store';

import {
  validateStep,
  findFirstIncompleteStep
} from '@/utils/form-validation-utils';
import { updateUserProfile } from '@/redux/features/profileSlice';
import { updateAuthIsCompleted } from '@/redux/features/authSlice';
import { FundingInformation } from './components/fundingInformation';
import { EthnicityStep } from './components/EthnicityStep';
import { RefereeDetailsStep } from './components/referee-details-step';
import { useRouter } from 'next/navigation';

const APPLICATION_FORM_KEY = 'home_student_application_data';

export default function HomeStudentApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [fetchData, setFetchData] = useState<any>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const { toast } = useToast();
  const [parsedResume, setParsedResume] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(true);
  const [courseSubmitted, setCourseSubmitted] = useState(false);

  const nameMatch = parsedResume?.match(
    /\b([A-Z][a-z]+(?:\s[A-Z][a-z]+)*)\s([A-Z][a-z]+)\b/
  );
  const emailMatch = parsedResume?.match(
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
  );

  const phoneMatch = parsedResume?.match(
    /\+?\d{1,4}[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{6,10}/
  );

  const dobMatch = parsedResume?.match(
    /(?:\b(?:[A-Za-z]+\s)?\d{1,2}[,\s]?\s?\d{4}\b|\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b)/
  );
  const passportIdMatch = parsedResume?.match(/\b([A-Za-z0-9]{6,10})\b/);
  const expiryDateMatch = parsedResume?.match(
    /\b(?:[A-Za-z]+\s)?\d{1,2}[,\s]?\s?\d{4}\b|\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/
  );
  const maritalStatusMatch = parsedResume?.match(
    /\b(Single|Married|Divorced|Widowed|Separated)\b/
  );
  const ethnicityMatch = parsedResume?.match(
    /\b(Caucasian|Asian|Hispanic|Black|Latino|Middle Eastern|Native American|Pacific Islander|African|European|South Asian|...)\b/
  );
  const nationalityMatch = parsedResume?.match(
    /\b(American|Bangladeshi|Canadian|British|Australian|Indian|Pakistani|Chinese|Japanese|French|German|Spanish|Russian|Brazilian|Mexican|Italian|...)\b/
  );
  const countryOfBirthMatch = parsedResume?.match(/\bBorn\s([A-Za-z\s]+)\b/);
  const addressLine1Match = parsedResume?.match(/^(.*\d{1,5}.*)$/);
  const addressLine2Match = parsedResume?.match(
    /^(.*[A-Za-z0-9\s]*[A-Za-z]{2,})$/
  );
  const cityMatch = parsedResume?.match(
    /\b([A-Za-z\s]+(?:[A-Za-z]+))\b(?:,\s?)/
  );
  const postCodeMatch = parsedResume?.match(/\b\d{5}(?:[-\s]?\d{4})?\b/);
  const countryMatch = parsedResume?.match(/\b([A-Za-z\s]+)\b$/);
  const institutionMatch = parsedResume?.match(
    /(?:University|College|Institute|Academy|School|Campus)[A-Za-z\s]+/i
  );

  const phoneNumber = phoneMatch ? phoneMatch[0] : '';
  const passportId = passportIdMatch ? passportIdMatch[0] : '';
  const email = emailMatch ? emailMatch[0] : null;
  const addressLine1 = addressLine1Match ? addressLine1Match[0] : '';
  const addressLine2 = addressLine2Match ? addressLine2Match[0] : '';
  const city = cityMatch ? cityMatch[1] : '';
  const postCode = postCodeMatch ? postCodeMatch[0] : '';
  const country = countryMatch ? countryMatch[1] : '';
  const academicInstitution = institutionMatch ? institutionMatch[0] : '';
  const { user } = useSelector((state: any) => state.auth);

  const personalDetailsData = {
    passportNumber: passportIdMatch ? passportIdMatch[0] : '',
    expiryDate: expiryDateMatch ? expiryDateMatch[0] : '',
    maritalStatus: maritalStatusMatch ? maritalStatusMatch[0] : '',
    nationality: nationalityMatch ? nationalityMatch[0] : '',
    ethnicity: ethnicityMatch ? ethnicityMatch[0] : '',
    countryOfBirth: countryOfBirthMatch ? countryOfBirthMatch[1] : ''
  };

  const addressData = {
    residentialAddressLine1: addressLine1,
    residentialAddressLine2: addressLine2,
    residentialCity: city,
    residentialPostCode: postCode,
    residentialCountry: country
  };

  const savedStudentType = localStorage.getItem('studentType');
  const savedCourseId = localStorage.getItem('courseId');
  const savedTermId = localStorage.getItem('termId');
const courseSubmitCalled = useRef(false);
  useEffect(() => {
    setFormData((prev: any) => {
      const updated = {
        ...prev,
        studentType: savedStudentType
      };
      localStorage.setItem(APPLICATION_FORM_KEY, JSON.stringify(updated));
      return updated;
    });
  }, [savedCourseId, savedStudentType, savedTermId]);

  const fetchedData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/users/${user._id}`);
      const userData = response.data.data;

      const localStoredDataRaw = localStorage.getItem(APPLICATION_FORM_KEY);
      const localStoredData = localStoredDataRaw ? JSON.parse(localStoredDataRaw) : {};

      setFetchData((prev: any) => ({
        ...prev,
        ...userData,
        studentType: userData.studentType || savedStudentType
      }));

      setFormData((prev: any) => ({
        ...prev,
        ...userData,
        ...localStoredData,
        studentType: userData.studentType || savedStudentType,
        courseDetailsData: {
          ...(prev.courseDetailsData || {}),
          ...(userData.courseDetailsData || {}),
          ...(localStoredData.courseDetailsData || {}),
          course: savedCourseId || '',
          intake: savedTermId || ''
        }
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  useEffect(() => {
    if (Object.keys(fetchData).length === 0) return;

    const localStoredDataRaw = localStorage.getItem(APPLICATION_FORM_KEY);
    const localStoredData = localStoredDataRaw ? JSON.parse(localStoredDataRaw) : {};
    const validationAggregate = { ...fetchData, ...localStoredData };

    const firstIncompleteStep = findFirstIncompleteStep(validationAggregate);

    if (firstIncompleteStep !== -1 && currentStep !== firstIncompleteStep) {
      setCurrentStep(firstIncompleteStep);
    }
  }, [fetchData]);

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const markStepAsCompleted = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps((prev) => [...prev, stepId]);
    }
  };

  const saveToLocalStorage = (data: any) => {
    setFormData((prev: any) => {
      const updated = { ...prev, ...data };
      localStorage.setItem(APPLICATION_FORM_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const handlePersonalDetailsSave = (data: any) => {
    saveToLocalStorage(data);
  };

  const isStepValid = validateStep(1, fetchData);

  const handlePersonalDetailsSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(1);
    setCurrentStep(2);
  };

  const handleAddressSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(2);
    setCurrentStep(3);
  };

  const handleEmergencySaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(3);
    setCurrentStep(4);
  };

  const handleEducationSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(4);
    setCurrentStep(5);
  };

  const handleEmploymentSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(5);
    setCurrentStep(6);
  };

  const handleComplianceSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(6);
    setCurrentStep(7);
  };

  const handleEthnicitySaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(7);
    setCurrentStep(8);
  };

  const handleRefereeSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(8);
    setCurrentStep(9);
  };

  const handleDocumentsSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(9);
    setCurrentStep(10);
  };

  const handleDocumentSave = (data: any) => {
    saveToLocalStorage(data);
  };

  const handleFundingInformationSaveAndContinue = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(10);
    setCurrentStep(11);
  };

  const handleTermsSave = (data: any) => {
    saveToLocalStorage(data);
    markStepAsCompleted(11);
    handleSubmit();
  };

  const navigate = useRouter();

  const handleDashboardRedirect = () => {
    if (user?.role === 'admin') {
      navigate.push('/');
    } else if (user?.role === 'student') {
      navigate.push('/');
    }
  };

  const handleReviewClick = () => {
    setReviewModalOpen(true);
  };

const submitApplicationCourse = async () => {
  if (courseSubmitCalled.current) return;       
  if (savedCourseId && savedTermId && user?._id) {
    courseSubmitCalled.current = true;           
    try {
      await axiosInstance.post('/application-course', {
        courseId: savedCourseId,
        intakeId: savedTermId,
        studentId: user._id
      });
      localStorage.removeItem('termId');
      localStorage.removeItem('courseId');
      localStorage.removeItem('studentType');
      localStorage.removeItem('courseId');
      localStorage.removeItem('slug');
      localStorage.removeItem(APPLICATION_FORM_KEY);
      setCourseSubmitted(true);
    } catch (err: any) {
      courseSubmitCalled.current = false;         
      console.error('Error submitting application course:', err);
      toast({
        title: err.response?.data?.message || 'Application failed.',
        className: 'bg-destructive text-white border-none'
      });
      localStorage.removeItem('studentType');
      localStorage.removeItem('courseId');
      localStorage.removeItem('slug');
      localStorage.removeItem('termId');
      localStorage.removeItem(APPLICATION_FORM_KEY);
    }
  }
};

  useEffect(() => {
    submitApplicationCourse();
  }, []);

  const handleSubmit = async () => {
    try {
      const localStoredDataRaw = localStorage.getItem(APPLICATION_FORM_KEY);
      const localStoredData = localStoredDataRaw ? JSON.parse(localStoredDataRaw) : {};
      const finalizedData = { ...formData, ...localStoredData };

      await dispatch(
        updateUserProfile({
          userId: user._id,
          profileData: {
            ...finalizedData,
            studentId: user._id,
           isCompleted: true,
            isValided:true
          }
        })
      );

      dispatch(updateAuthIsCompleted(true));

      localStorage.removeItem('studentType');
      localStorage.removeItem('courseId');
      localStorage.removeItem('slug');
      localStorage.removeItem('termId');
      localStorage.removeItem(APPLICATION_FORM_KEY);

      toast({
        description: 'Application saved successfully.'
      });
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message || 'Something went wrong.',
        className: 'destructive border-none text-white'
      });
    }

    setFormSubmitted(true);
  };

  const renderStep = () => {
    const stepValue =
      typeof currentStep === 'object' ? currentStep.step : currentStep;
    const subStep = typeof currentStep === 'object' ? currentStep.subStep : 1;

    switch (stepValue) {
      case 1:
        return (
          <PersonalDetailsStep
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handlePersonalDetailsSaveAndContinue}
            onSave={handlePersonalDetailsSave}
            setCurrentStep={setCurrentStep}
            loading={loading}
          />
        );

      case 2:
        return (
          <AddressStep
            defaultValues={{
              ...fetchData,
              ...formData
            }}
            onSaveAndContinue={handleAddressSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );

      case 3:
        return (
          <EmergencyContact
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handleEmergencySaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );

      case 4:
        return (
          <EducationStep
            defaultValues={{
              ...fetchData,
              ...formData
            }}
            onSaveAndContinue={handleEducationSaveAndContinue}
            setCurrentStep={setCurrentStep}
            setCurrentSubStep={subStep}
          />
        );

      case 5:
        return (
          <EmploymentStep
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handleEmploymentSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );

      case 6:
        return (
          <ComplianceStep
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handleComplianceSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );

      case 7:
        return (
          <EthnicityStep
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handleEthnicitySaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );

      case 8:
        return (
          <RefereeDetailsStep
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handleRefereeSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );

      case 9:
        return (
          <DocumentsStep
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handleDocumentsSaveAndContinue}
            setCurrentStep={setCurrentStep}
            onSave={handleDocumentSave}
          />
        );
      case 10:
        return (
          <FundingInformation
            defaultValues={{ ...fetchData, ...formData }}
            onSaveAndContinue={handleFundingInformationSaveAndContinue}
            setCurrentStep={setCurrentStep}
          />
        );

      case 11:
        return (
          <TermsSubmitStep
            defaultValues={{ ...fetchData, ...formData }}
            onSave={handleTermsSave}
            onReview={handleReviewClick}
            onSubmit={handleSubmit}
            setCurrentStep={setCurrentStep}
            onSaveAndContinue={handleTermsSave}
          />
        );

      default:
        return (
          <div className="rounded-lg bg-gray-50 p-8 text-center">
            <h2 className="mb-4 text-xl font-semibold">Step Not Found</h2>
            <p className="mb-4 text-gray-600">
              This step is not implemented yet.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentStep((prev) =>
                    typeof prev === 'object'
                      ? prev.step - 1
                      : Math.max(1, prev - 1)
                  )
                }
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  markStepAsCompleted(stepValue);
                  setCurrentStep((prev) =>
                    typeof prev === 'object'
                      ? { step: prev.step + 1, subStep: 1 }
                      : Math.min(formSteps.length, prev + 1)
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
    const isCourseSubmission = courseSubmitted;

    return (
      <div className="flex items-center justify-center px-4">
        <Card className="rounded-lg border bg-watney/90 p-14 shadow-lg md:p-24">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-full bg-white p-8">
              <Check size={84} className="text-watney" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-white md:text-2xl">
                {isCourseSubmission
                  ? 'Application Submitted Successfully'
                  : 'Great job! You’ve completed your profile.'}
              </CardTitle>
              <CardDescription className="mt-2 text-base leading-relaxed text-white">
                <div className="mt-2 w-full rounded-md text-center text-base text-white">
                  {isCourseSubmission && (
                    <p>
                      If you have any questions or need help with your
                      application, please don’t hesitate to contact us:
                    </p>
                  )}
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
            <Button
              onClick={handleDashboardRedirect}
              className="mt-4 w-full rounded-sm bg-white px-12 py-3 text-lg font-semibold text-watney transition hover:bg-white sm:w-auto"
            >
              Done
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className=" w-full container mx-auto py-16">
      <Card className="md:p-4">
        {renderStep()}
        <ReviewModal
          open={reviewModalOpen}
          onClose={() => setReviewModalOpen(false)}
          formData={formData}
        />
      </Card>
    </div>
  );
}