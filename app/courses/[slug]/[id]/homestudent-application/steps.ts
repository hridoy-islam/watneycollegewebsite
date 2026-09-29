'use client';

import type { ApplicationStepComponents } from '@/components/application/application-form-shell';
import { PersonalDetailsStep } from './components/personal-details-step';
import { AddressStep } from './components/address-step';
import { EmergencyContact } from './components/emergencyContact';
import { EducationStep } from './components/education-step';
import { EmploymentStep } from './components/employment-step';
import { ComplianceStep } from './components/compliance-step';
import { EthnicityStep } from './components/EthnicityStep';
import { RefereeDetailsStep } from './components/referee-details-step';
import { DocumentsStep } from './components/documents-step';
import { FundingInformation } from './components/fundingInformation';
import { TermsSubmitStep } from './components/terms-submit-step';
import { ReviewStep } from './components/review-step';

/**
 * The home student steps, in one place: the application form renders them in
 * order, the agent's applicant editor renders them in tabs.
 */
export const HOME_STEPS: ApplicationStepComponents = {
  PersonalDetailsStep,
  AddressStep,
  EmergencyContact,
  EducationStep,
  EmploymentStep,
  ComplianceStep,
  EthnicityStep,
  RefereeDetailsStep,
  DocumentsStep,
  FundingInformation,
  TermsSubmitStep,
  ReviewStep
};
