import moment from 'moment';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import React from 'react';

function formatDate(date: Date | string | undefined) {
  if (!date) return 'Not provided';
  return moment(date).format('DD/MM/YYYY');
}

function formatValue(value: any): string {
  if (value === null || value === undefined || value === '') return 'Not provided';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (value instanceof Date || moment(value, moment.ISO_8601, true).isValid()) return moment(value).format('DD/MM/YYYY');
  if (Array.isArray(value)) {
    if (value.length === 0) return 'None';
    if (value[0] instanceof File) return `${value.length} file(s) uploaded`;
    return value.join(', ');
  }
  if (value instanceof File) return 'File uploaded';
  if (typeof value === 'object') return JSON.stringify(value, null, 2);
  const str = String(value);
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatFieldName(name: string) {
  if (name === 'canWorkInUK') return 'Can Work In UK';
  return name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()).trim();
}

function renderSection(title: string, data: any, showTitle = true) {
  if (!data) return null;

  const rows = Object.entries(data).map(([key, value]) => {
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string' && value[0].startsWith('http')) {
      return [
        formatFieldName(key),
        <div key={key} className="flex flex-col gap-1">
          {value.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Document</a>
          ))}
        </div>
      ];
    }
    if (typeof value === 'string' && value.startsWith('http')) {
      return [
        formatFieldName(key),
        <a key={key} href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Document</a>
      ];
    }
    return [formatFieldName(key), formatValue(value)];
  });

  return (
    <div className="mb-6">
      {showTitle && <h3 className="mb-2 text-sm md:text-lg font-semibold">{title}</h3>}
      <div className="rounded-md border border-gray-200 p-1 md:p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            {rows.map(([label, value], index) => (
              <tr key={index}>
                <td className="break-words px-2 md:px-6 py-4 text-sm font-medium text-gray-900">{label}</td>
                <td className="break-words px-2 md:px-6 py-4 text-sm text-gray-500">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ApplicationPreview({
  defaultValues,
  onSubmit,
  setCurrentStep,
  submitting
}: {
  defaultValues: any;
  onSubmit: (data: any) => void;
  setCurrentStep: (step: number) => void;
  submitting?: boolean;
}) {
  const handleBack = () => setCurrentStep(10);

  const summaryConsent = {
    declarationCorrectUpload: defaultValues.declarationCorrectUpload,
    declarationContactReferee: defaultValues.declarationContactReferee,
    criminalConviction: defaultValues.criminalConviction,
    criminalConvictionDetails: defaultValues.criminalConvictionDetails,
    appliedBefore: defaultValues.appliedBefore,
    termsAccepted: defaultValues.termsAccepted,
    dataProcessingAccepted: defaultValues.dataProcessingAccepted
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <h1 className="text-xl sm:text-2xl font-semibold">Application Preview</h1>
        <p className="text-gray-400 text-sm sm:text-base">Review all your information before submitting</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {renderSection('Personal Details', {
          title: defaultValues.title,
          firstName: defaultValues.firstName,
          initial: defaultValues.initial,
          lastName: defaultValues.lastName,
          dateOfBirth: defaultValues.dateOfBirth,
          // gender: defaultValues.gender,
          // maritalStatus: defaultValues.maritalStatus,
          nationality: defaultValues.nationality,
          shareCode: defaultValues.shareCode,
          nationalInsuranceNumber: defaultValues.nationalInsuranceNumber,
          postalAddressLine1: defaultValues.postalAddressLine1,
          postalAddressLine2: defaultValues.postalAddressLine2,
          postalCity: defaultValues.postalCity,
          postalPostCode: defaultValues.postalPostCode,
          postalCountry: defaultValues.postalCountry
        })}

        {renderSection('Emergency Contact Information', {
          emergencyFullName: defaultValues.emergencyFullName,
          emergencyContactNumber: defaultValues.emergencyContactNumber,
          emergencyEmail: defaultValues.emergencyEmail,
          emergencyRelationship: defaultValues.emergencyRelationship,
          emergencyAddress: defaultValues.emergencyAddress
        })}

        {renderSection('Application Details',
          Object.fromEntries(
            Object.entries({
              availableFromDate: defaultValues.availableFromDate,
              source: defaultValues.source,
              isStudent: defaultValues.isStudent,
              referralEmployee: defaultValues.source === 'referral' ? defaultValues.referralEmployee : undefined,
              isUnderStatePensionAge: defaultValues.isUnderStatePensionAge,
              isOver18: defaultValues.isOver18,
              isSubjectToImmigrationControl: defaultValues.isSubjectToImmigrationControl,
              canWorkInUK: defaultValues.canWorkInUK
            }).filter(([_, v]) => v !== undefined)
          )
        )}

        {renderSection('Availability', {
          monday: defaultValues.availability?.monday,
          tuesday: defaultValues.availability?.tuesday,
          wednesday: defaultValues.availability?.wednesday,
          thursday: defaultValues.availability?.thursday,
          friday: defaultValues.availability?.friday,
          saturday: defaultValues.availability?.saturday,
          sunday: defaultValues.availability?.sunday
        })}

        {Array.isArray(defaultValues.educationData) && defaultValues.educationData.map((education: any, index: number) => (
          <React.Fragment key={index}>
            {renderSection(`Education ${index + 1}`, {
              institution: education.institution,
              qualification: education.qualification,
              grade: education.grade,
              awardDate: education.awardDate,
              certificate: education.certificate
            })}
          </React.Fragment>
        ))}

        {renderSection('Current Employment', defaultValues.currentEmployment)}

        {defaultValues.previousEmployments && defaultValues.previousEmployments.length > 0 && (
          <div>
            <h3 className="mb-2 text-lg font-medium text-black">Previous Employment</h3>
            {defaultValues.previousEmployments.map((employment: any, index: number) => (
              <div key={index} className="mb-4 rounded-md border border-gray-200 bg-gray-50 p-4">
                {renderSection('', employment, false)}
              </div>
            ))}
          </div>
        )}

        {renderSection('Employment Gaps', {
          hasEmploymentGaps: defaultValues.hasEmploymentGaps,
          employmentGapsExplanation: defaultValues.employmentGapsExplanation
        })}

        {renderSection('Reference 1', defaultValues.referee1)}
        {renderSection('Reference 2', defaultValues.referee2)}

        {renderSection('Disability Information', {
          hasDisability: defaultValues.hasDisability,
          disabilityDetails: defaultValues.disabilityDetails,
          needsReasonableAdjustment: defaultValues.needsReasonableAdjustment,
          reasonableAdjustmentDetails: defaultValues.reasonableAdjustmentDetails
        })}

        {renderSection('Documents', {
          cvResume: defaultValues.cvResume,
          proofOfAddress: defaultValues.proofOfAddress,
          passport: defaultValues.passport,
          immigrationDocument: defaultValues.immigrationDocument,
          workExperience: defaultValues.workExperience,
          personalStatement: defaultValues.personalStatement
        })}

        {renderSection('Consent & Permissions', summaryConsent)}

        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={submitting}
            className="bg-watney text-white hover:bg-watney/90 w-full sm:w-auto"
          >
            Back
          </Button>
          <Button
            type="button"
            onClick={() => onSubmit(defaultValues)}
            disabled={submitting}
            className="bg-watney text-white hover:bg-watney/90 w-full sm:w-auto px-8 py-3 text-lg font-semibold"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
