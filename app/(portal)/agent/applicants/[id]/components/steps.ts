'use client';

import type { ComponentType } from 'react';

import { PersonalDetailsStep as HomePersonalDetailsStep } from './home/personal-details-step';
import { AddressStep as HomeAddressStep } from './home/address-step';
import { EmergencyContact as HomeEmergencyContact } from './home/emergencyContact';
import { EducationStep as HomeEducationStep } from './home/education-step';
import { EmploymentStep as HomeEmploymentStep } from './home/employment-step';
import { ComplianceStep as HomeComplianceStep } from './home/compliance-step';
import { EthnicityStep as HomeEthnicityStep } from './home/EthnicityStep';
import { RefereeDetailsStep as HomeRefereeDetailsStep } from './home/referee-details-step';
import { DocumentsStep as HomeDocumentsStep } from './home/documents-step';
import { FundingInformation as HomeFundingInformation } from './home/fundingInformation';
import { TermsSubmitStep as HomeTermsSubmitStep } from './home/terms-submit-step';

import { PersonalDetailsStep as IntlPersonalDetailsStep } from './international/personal-details-step';
import { AddressStep as IntlAddressStep } from './international/address-step';
import { EmergencyContact as IntlEmergencyContact } from './international/emergencyContact';
import { EducationStep as IntlEducationStep } from './international/education-step';
import { EmploymentStep as IntlEmploymentStep } from './international/employment-step';
import { ComplianceStep as IntlComplianceStep } from './international/compliance-step';
import { EthnicityStep as IntlEthnicityStep } from './international/EthnicityStep';
import { RefereeDetailsStep as IntlRefereeDetailsStep } from './international/referee-details-step';
import { DocumentsStep as IntlDocumentsStep } from './international/documents-step';
import { FundingInformation as IntlFundingInformation } from './international/fundingInformation';
import { TermsSubmitStep as IntlTermsSubmitStep } from './international/terms-submit-step';

/**
 * The steps this editor owns.
 *
 * They are the agent's own copies, under this route - not the ones the public
 * application form renders. The questions started identical, but the two are
 * free to move apart: an editor has no step to go "next" to, so each of these
 * ends in a Save for its own tab.
 */
export interface ApplicantEditorSteps {
  PersonalDetailsStep: ComponentType<any>;
  AddressStep: ComponentType<any>;
  EmergencyContact: ComponentType<any>;
  EducationStep: ComponentType<any>;
  EmploymentStep: ComponentType<any>;
  ComplianceStep: ComponentType<any>;
  EthnicityStep: ComponentType<any>;
  RefereeDetailsStep: ComponentType<any>;
  DocumentsStep: ComponentType<any>;
  FundingInformation: ComponentType<any>;
  TermsSubmitStep: ComponentType<any>;
}

export const HOME_EDITOR_STEPS: ApplicantEditorSteps = {
  PersonalDetailsStep: HomePersonalDetailsStep,
  AddressStep: HomeAddressStep,
  EmergencyContact: HomeEmergencyContact,
  EducationStep: HomeEducationStep,
  EmploymentStep: HomeEmploymentStep,
  ComplianceStep: HomeComplianceStep,
  EthnicityStep: HomeEthnicityStep,
  RefereeDetailsStep: HomeRefereeDetailsStep,
  DocumentsStep: HomeDocumentsStep,
  FundingInformation: HomeFundingInformation,
  TermsSubmitStep: HomeTermsSubmitStep
};

export const INTERNATIONAL_EDITOR_STEPS: ApplicantEditorSteps = {
  PersonalDetailsStep: IntlPersonalDetailsStep,
  AddressStep: IntlAddressStep,
  EmergencyContact: IntlEmergencyContact,
  EducationStep: IntlEducationStep,
  EmploymentStep: IntlEmploymentStep,
  ComplianceStep: IntlComplianceStep,
  EthnicityStep: IntlEthnicityStep,
  RefereeDetailsStep: IntlRefereeDetailsStep,
  DocumentsStep: IntlDocumentsStep,
  FundingInformation: IntlFundingInformation,
  TermsSubmitStep: IntlTermsSubmitStep
};
