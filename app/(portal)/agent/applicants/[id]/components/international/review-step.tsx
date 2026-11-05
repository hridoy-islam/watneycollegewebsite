import { useEffect, useState } from 'react';
import axiosInstance from '@/lib/axios';
import React from 'react';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import { useApplicantId } from '@/components/application/applicant-subject';
import { fetchApplicant, toId } from '@/lib/applicant-api';

interface ReviewStepProps {
  formData: any;
  /** Back to the terms step. */
  onBack: () => void;
  /** Fires the actual submission. */
  onSubmit: () => Promise<void> | void;
}

export function ReviewStep({ formData, onBack, onSubmit }: ReviewStepProps) {
  const [submitting, setSubmitting] = useState(false);
  const [courseName, setCourseName] = useState<string>('');
  const [termName, setTermName] = useState<string>('');
  const [fetchData, setFetchData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // The applicant the form is being filled in for - the one signed in, the one
  // an agent picked, or nobody yet while an agent drafts a new applicant.
  const applicantId = useApplicantId();

  const courseId = toId(formData?.courseId);
  const intakeId = toId(formData?.intakeId);

  // Pull the saved applicant record plus the course/intake names once.
  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        if (applicantId) {
          setFetchData(await fetchApplicant(applicantId));
        }

        if (courseId) {
          const courseResponse = await axiosInstance.get(
            `/courses/${courseId}`
          );
          setCourseName(courseResponse.data.data.name || '');
        }
        if (intakeId) {
          const termResponse = await axiosInstance.get(`/terms/${intakeId}`);
          setTermName(termResponse.data.data.termName || '');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [courseId, intakeId, applicantId]);

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await onSubmit();
    } finally {
      setSubmitting(false);
    }
  };

const getDataValue = (key: string, subKey?: string) => {
    // Helper to check if value is valid (not undefined/null and not empty array)
    const isValidValue = (value: any): boolean => {
      if (value === undefined || value === null) return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    };

    // Try fetchData first
    if (fetchData && fetchData[key] !== undefined) {
      const value = subKey ? fetchData[key]?.[subKey] : fetchData[key];
      if (isValidValue(value)) {
        return value;
      }
    }
    
    // Try formData second
    if (formData && formData[key] !== undefined) {
      const value = subKey ? formData[key]?.[subKey] : formData[key];
      if (isValidValue(value)) {
        return value;
      }
    }
    
    return undefined;
  };

  const formatFieldName = (name: string) => {
    return name
      .replace(/(?<!^)([A-Z])(?=[a-z])/g, ' $1')
      .replace(/(?<=[a-z])([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  // Helper function to check if a value is a URL string
  const isUrl = (value: any): boolean => {
    return typeof value === 'string' && /^https?:\/\//.test(value);
  };

  // Helper function to render links from any value
  const renderLinks = (value: any): React.ReactNode => {
    // If it's an array
    if (Array.isArray(value)) {
      if (value.length === 0) return 'No documents uploaded';
      
      // Check if array contains URLs
      const urls = value.filter(item => isUrl(item));
      const files = value.filter(item => item instanceof File || (typeof item === 'object' && item.name));
      
      return (
        <div className="flex flex-col gap-1">
          {urls.map((url, index) => (
            <a
              key={`url-${index}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              View Document {index + 1}
            </a>
          ))}
          {files.length > 0 && (
            <span className="text-black">{files.length} file(s) uploaded</span>
          )}
        </div>
      );
    }

    // If it's a single URL string
    if (isUrl(value)) {
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-all"
        >
          View Document
        </a>
      );
    }

    // If it's a File object
    if (value instanceof File) {
      return 'File uploaded';
    }

    // If it's not a link or file, return the formatted value
    return null;
  };

  const formatValue = (value: any, key?: string): React.ReactNode => {
    if (value === null || value === undefined || value === '') {
      return 'Not provided';
    }
    
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    
    if (
      value instanceof Date ||
      moment(value, moment.ISO_8601, true).isValid()
    ) {
      return moment(value).format('MM-DD-YYYY');
    }

    // Check for URLs first (both single URLs and arrays containing URLs)
    const linksContent = renderLinks(value);
    if (linksContent !== null) {
      return linksContent;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) return 'None';
      // Check for File objects
      if (value[0] instanceof File) return `${value.length} file(s) uploaded`;
      // For arrays of non-URL, non-File items
      return value.join(', ');
    }
    
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
    
    const str = String(value).trim();

    if (key === 'studentType') {
      return str.toLowerCase() === 'eu' ? 'Home Student' : 'International';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(str)) {
      return str.toLowerCase();
    }
    
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderSection = (title: string, data: any, showTitle = true) => {
    if (!data || Object.keys(data).length === 0) return null;

    const rows = Object.entries(data)
      .filter(([_, value]) => {
        // Keep the value if it exists (including empty arrays and false booleans)
        return value !== undefined && value !== null;
      })
      .map(([key, value]) => {
        const formattedValue = formatValue(value, key);
        return [formatFieldName(key), formattedValue];
      });

    if (rows.length === 0) return null;

    return (
      <div className="mb-6">
        {showTitle && <h3 className="mb-2 text-sm md:text-lg font-semibold">{title}</h3>}
        <div className="rounded-md border border-gray-200 p-1 md:p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {rows.map(([label, value], index) => (
                <tr key={index}>
                  <td className="break-words px-2 md:px-6 py-4 text-sm font-medium text-black w-1/3">
                    {label as string}
                  </td>
                  <td className="break-words px-2 md:px-6 py-4 text-sm text-black w-2/3">
                    {value as React.ReactNode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-sm text-black">Loading application data...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="px-2 pt-4 md:px-6">
        <h2 className="text-xl font-bold text-black sm:text-2xl">
          Review Your Application
        </h2>
        <p className="mt-1 text-sm text-black sm:text-base">
          Check every section below. Go back if anything needs changing - once
          you submit, the application is final.
        </p>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-2 md:p-6">
        <div className="space-y-4 sm:space-y-6">
            {/* Personal Details */}
            {renderSection('Personal Details', {
              title: getDataValue('title'),
              firstName: getDataValue('firstName'),
              lastName: getDataValue('lastName'),
              initial: getDataValue('initial'),
              gender: getDataValue('gender'),
              dateOfBirth: getDataValue('dateOfBirth'),
              email: getDataValue('email'),
              phone: getDataValue('phone'),
              ethnicity: getDataValue('ethnicity'),
              customEthnicity: getDataValue('customEthnicity'),
              nationality: getDataValue('nationality'),
              applicationLocation: getDataValue('applicationLocation'),
              studentType: getDataValue('studentType'),
              countryOfBirth: getDataValue('countryOfBirth'),
              maritalStatus: getDataValue('maritalStatus'),
              countryOfResidence: getDataValue('countryOfResidence')
            })}

            {/* Address */}
            {renderSection('Residential Address', {
              residentialAddressLine1:
                getDataValue('residentialAddress', 'line1') ||
                getDataValue('residentialAddressLine1'),
              residentialAddressLine2:
                getDataValue('residentialAddress', 'line2') ||
                getDataValue('residentialAddressLine2'),
              residentialCity:
                getDataValue('residentialAddress', 'city') ||
                getDataValue('residentialCity'),
              residentialPostCode:
                getDataValue('residentialAddress', 'postCode') ||
                getDataValue('residentialPostCode'),
              residentialCountry:
                getDataValue('residentialAddress', 'country') ||
                getDataValue('residentialCountry')
            })}

            {!getDataValue('sameAsResidential') &&
              renderSection('Postal Address', {
                postalAddressLine1:
                  getDataValue('postalAddress', 'line1') ||
                  getDataValue('postalAddressLine1'),
                postalAddressLine2:
                  getDataValue('postalAddress', 'line2') ||
                  getDataValue('postalAddressLine2'),
                postalCity:
                  getDataValue('postalAddress', 'city') ||
                  getDataValue('postalCity'),
                postalPostCode:
                  getDataValue('postalAddress', 'postCode') ||
                  getDataValue('postalPostCode'),
                postalCountry:
                  getDataValue('postalAddress', 'country') ||
                  getDataValue('postalCountry')
              })}

            {/* Course Details */}
            {courseId && intakeId
              ? renderSection('Course Details', {
                  course: courseName || 'N/A',
                  intake: termName || 'N/A'
                })
              : null}

            {/* Contact Information */}
            {renderSection('Contact Information', {
              emergencyFullName: getDataValue('emergencyFullName'),
              emergencyContactNumber: getDataValue('emergencyContactNumber'),
              emergencyEmail: getDataValue('emergencyEmail'),
              emergencyRelationship: getDataValue('emergencyRelationship'),
              emergencyAddress: getDataValue('emergencyAddress')
            })}

            {renderSection('English Language Test', {
              ...(getDataValue('englishQualification') && {
                englishTestType: (
                  getDataValue('englishQualification', 'englishTestType') || ''
                ).toUpperCase(),
                englishTestScore: getDataValue(
                  'englishQualification',
                  'englishTestScore'
                ),
                englishTestDate: getDataValue(
                  'englishQualification',
                  'englishTestDate'
                ),
                englishCertificate: getDataValue(
                  'englishQualification',
                  'englishCertificate'
                )
              })
            })}

            {/* Education Background */}
            {(getDataValue('educationData') || []).length > 0 &&
              getDataValue('educationData').map((entry: any, index: number) => (
                <React.Fragment key={`education-entry-${index}`}>
                  {renderSection(`Education Background #${index + 1}`, {
                    institution: entry.institution || '',
                    qualification: entry.qualification || '',
                    grade: entry.grade || '',
                    awardDate: entry.awardDate
                      ? new Date(entry.awardDate).toLocaleDateString()
                      : '',
                    certificate: entry.certificate
                  })}
                </React.Fragment>
              ))}

            {/* Employment */}
            {renderSection('Employment', {
              CurrentEmployment: getDataValue('isEmployed'),
              ...(getDataValue('isEmployed') === 'yes'
                ? {
                    employerName: getDataValue('currentEmployment', 'employer'),
                    jobTitle: getDataValue('currentEmployment', 'jobTitle'),
                    startDate: getDataValue('currentEmployment', 'startDate'),
                    employmentType: getDataValue(
                      'currentEmployment',
                      'employmentType'
                    )
                  }
                : {}),
              hasPreviousEmployment: getDataValue('hasPreviousEmployment')
            })}

            {getDataValue('hasPreviousEmployment') === 'yes' && (
              <div>
                {(getDataValue('previousEmployments') || []).length > 0 ? (
                  getDataValue('previousEmployments').map(
                    (emp: any, index: number) => (
                      <div
                        key={`prevEmp-${index}`}
                        className="mb-4 rounded-md border border-gray-200 bg-gray-50 p-4"
                      >
                        {renderSection(
                          `Previous Employment #${index + 1}`,
                          Object.fromEntries(
                            Object.entries(emp).filter(([key]) => key !== '_id')
                          ),
                          true
                        )}
                      </div>
                    )
                  )
                ) : (
                  <p className="text-sm text-black">
                    No previous employment records found.
                  </p>
                )}
              </div>
            )}

            {/* Compliance */}
            {(() => {
              const visaRefusal = getDataValue('visaRefusal') === 'yes';
              const disability = getDataValue('disability') === 'yes';
              return renderSection('Additional Information', {
                visaRequired: getDataValue('visaRequired'),
                enteredUKBefore: getDataValue('enteredUKBefore'),
                firstEnterDate: getDataValue('firstEnterDate'),
                completedUKCourse: getDataValue('completedUKCourse'),
                hearAboutUs: getDataValue('hearAboutUs'),
                visaRefusal: getDataValue('visaRefusal'),
                ...(visaRefusal && {
                  visaRefusalDetail: getDataValue('visaRefusalDetail')
                }),
                disability: getDataValue('disability'),
                ...(disability && {
                  disabilityDetails: getDataValue('disabilityDetails')
                })
              });
            })()}

            {/* Equality & Diversity */}
            {renderSection('Equality & Diversity', {
              ethnicityGroup: getDataValue('ethnicityGroup'),
              ethnicityValue: getDataValue('ethnicityValue'),
              ethnicityOther: getDataValue('ethnicityOther'),
              religion: getDataValue('religion'),
              sexualOrientation: getDataValue('sexualOrientation'),
              genderIdentitySameAtBirth: getDataValue(
                'genderIdentitySameAtBirth'
              )
            })}

            {/* Referees */}
            {['referee1', 'referee2'].map((refKey, index) =>
              getDataValue(refKey) ? (
                <React.Fragment key={refKey}>
                  {renderSection(`Referee #${index + 1}`, {
                    name: getDataValue(refKey, 'name'),
                    organisation: getDataValue(refKey, 'organisation'),
                    relationship: getDataValue(refKey, 'relationship'),
                    address: getDataValue(refKey, 'address'),
                    postCode: getDataValue(refKey, 'postCode'),
                    email: getDataValue(refKey, 'email'),
                    phone: getDataValue(refKey, 'phone')
                  })}
                </React.Fragment>
              ) : null
            )}

            {renderSection('Funding Information', {
              fundingType: getDataValue('fundingType'),
              ...(getDataValue('fundingType') === 'Bursary/Grant' && {
                grantDetails: getDataValue('grantDetails')
              }),
              ...(getDataValue('fundingType') === 'Employer-sponsored' && {
                fundingCompanyName: getDataValue('fundingCompanyName'),
                fundingContactPerson: getDataValue('fundingContactPerson'),
                fundingEmail: getDataValue('fundingEmail'),
                fundingPhoneNumber: getDataValue('fundingPhoneNumber')
              })
            })}

           
            {renderSection('Documents', {
              photograph: getDataValue('image') || 'Not Provided',
              passport: getDataValue('passport'),
              proofOfAddress: getDataValue('proofOfAddress'),
              shareCodeDoc: getDataValue('shareCodeDoc'),
              bankStatement: getDataValue('bankStatement'),
              workExperience: getDataValue('workExperience'),
              qualification: getDataValue('qualification'),
              dbsDocument: getDataValue('dbsDocument'),
              paySlip: getDataValue('paySlip')
            })}

            {/* Terms & Declaration */}
            {renderSection('Terms & Declaration', {
              criminalConviction: getDataValue('criminalConviction'),
              ...(getDataValue('criminalConviction') === true && {
                convictionDetails: getDataValue('convictionDetails')
              }),
              acceptTerms: getDataValue('acceptTerms'),
              acceptDataProcessing: getDataValue('acceptDataProcessing')
            })}
          </div>
        </div>

      <div className="flex flex-col gap-3 border-t p-4 sm:flex-row sm:justify-end md:px-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={submitting}
          className="w-full justify-center bg-watney text-white hover:bg-watney/90 sm:w-auto"
        >
          Back
        </Button>
        <Button
            data-step-save
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full justify-center bg-green-600 text-white hover:bg-green-700 sm:w-auto"
        >
          {submitting ? 'Saving...' : 'Save changes'}
        </Button>
      </div>
    </div>
  );
}