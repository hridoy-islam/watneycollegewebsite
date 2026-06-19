import { useEffect, useState } from 'react';
import axiosInstance from '@/lib/axios';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { nationalities } from '@/types';

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  formData: any;
  userId?: string;
}

export function ReviewModal({
  open,
  onClose,
  formData,
  userId
}: ReviewModalProps) {
  const [courseName, setCourseName] = useState<string>('');
  const [termName, setTermName] = useState<string>('');
  const [fetchData, setFetchData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useSelector((state: any) => state.auth);
  const [localData, setLocalData] = useState<any>({});

  // Fetch user data and course/term names when the modal opens
  useEffect(() => {
    if (open) {
      // Get data from localStorage
      const raw = localStorage.getItem('home_student_application_data');
      setLocalData(raw ? JSON.parse(raw) : {});

      const fetchDataAsync = async () => {
        setLoading(true);
        try {
          // Fetch user data if userId is provided
          if (user._id) {
            const userResponse = await axiosInstance.get(`/users/${user._id}`);
            setFetchData(userResponse.data.data);
          }

          // Fetch course and term names from formData
          if (formData?.courseDetailsData) {
            if (formData.courseDetailsData.course) {
              const courseResponse = await axiosInstance.get(
                `/courses/${formData.courseDetailsData.course}`
              );
              setCourseName(courseResponse.data.data.name || '');
            }
            if (formData.courseDetailsData.intake) {
              const termResponse = await axiosInstance.get(
                `/terms/${formData.courseDetailsData.intake}`
              );
              setTermName(termResponse.data.data.termName || '');
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchDataAsync();
    }
  }, [open, formData?.courseDetailsData, userId]);

  // Reset data when modal closes
  useEffect(() => {
    if (!open) {
      setCourseName('');
      setTermName('');
      setFetchData(null);
      setLocalData({});
    }
  }, [open]);

  // Helper to get the data value with proper merging
  const getDataValue = (key: string, subKey?: string) => {
    const getNestedValue = (obj: any, key: string, subKey?: string) => {
      if (!obj) return undefined;
      if (subKey) return obj[key]?.[subKey];
      return obj[key];
    };

    // Try each source and return the first one that has actual content
    const sources = [fetchData, formData, localData];
    
    for (const source of sources) {
      const value = getNestedValue(source, key, subKey);
      
      // Skip undefined/null
      if (value === undefined || value === null) continue;
      
      // Skip empty arrays (but return them if no other source has data)
      if (Array.isArray(value) && value.length === 0) continue;
      
      // Skip empty strings
      if (typeof value === 'string' && value.trim() === '') continue;
      
      return value;
    }
    
    // If we get here, return the first available value even if empty
    for (const source of sources) {
      const value = getNestedValue(source, key, subKey);
      if (value !== undefined && value !== null) return value;
    }
    
    return undefined;
  };

  // Helper to format field names
  const formatFieldName = (name: string) => {
    return name
      .replace(/(?<!^)([A-Z])(?=[a-z])/g, ' $1')
      .replace(/(?<=[a-z])([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  // Helper to check if value is a URL
  const isUrl = (value: any): boolean => {
    return typeof value === 'string' && /^https?:\/\//.test(value);
  };

  // Helper to render document links
  const renderDocumentLinks = (value: any): React.ReactNode | null => {
    // Handle arrays
    if (Array.isArray(value)) {
      if (value.length === 0) return 'No documents uploaded';
      
      const urls = value.filter(item => isUrl(item));
      const nonUrls = value.filter(item => !isUrl(item));
      
      if (urls.length > 0) {
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
            {nonUrls.length > 0 && (
              <span className="text-gray-500">{nonUrls.length} file(s) uploaded</span>
            )}
          </div>
        );
      }
      
      if (value[0] instanceof File) return `${value.length} file(s) uploaded`;
      return value.join(', ');
    }

    // Handle single URL string
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

    return null;
  };

  // Helper to format values
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

    // Check for document links first
    const documentLinks = renderDocumentLinks(value);
    if (documentLinks !== null) {
      return documentLinks;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) return 'None';
      if (value[0] instanceof File) return `${value.length} file(s) uploaded`;
      return value.join(', ');
    }
    if (value instanceof File) {
      return 'File uploaded';
    }
    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2);
    }
    
    // Convert to string and capitalize first letter
    const str = String(value).trim();

    if (key === 'studentType') {
      return str.toLowerCase() === 'eu' ? 'Home Student' : 'International';
    }

    // Check if it's an email and return lowercase
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(str)) {
      return str.toLowerCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Generic render section function
  const renderSection = (title: string, data: any, showTitle = true) => {
    if (!data || Object.keys(data).length === 0) return null;

    const rows = Object.entries(data)
      .filter(([_, value]) => value !== undefined && value !== null)
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
                  <td className="break-words px-2 md:px-6 py-4 text-sm font-medium text-gray-900 w-1/3">
                    {label as string}
                  </td>
                  <td className="break-words px-2 md:px-6 py-4 text-sm text-gray-500 w-2/3">
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
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Loading...</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center py-8">
            <p>Loading application data...</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="flex h-[80vh] max-w-4xl flex-col gap-0 overflow-hidden mt-8">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-bold">
            Application Summary
          </DialogTitle>
        </DialogHeader>
        <div
          className="flex-1 overflow-y-auto p-6"
          style={{ maxHeight: 'calc(80vh - 120px)' }}
        >
          <div className="space-y-6">
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
              nationality: getDataValue('nationality'),
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
            {formData?.courseDetailsData?.course &&
            formData?.courseDetailsData?.intake
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
                    ),
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
                  <p className="text-sm text-gray-500">
                    No previous employment records found.
                  </p>
                )}
              </div>
            )}

            {/* Compliance */}
            {renderSection('Additional Information', {
              immigrationStatus: getDataValue('immigrationStatus'),
              niNumber: getDataValue('niNumber'),
              ltrCode: getDataValue('ltrCode'),
              hearAboutUs: getDataValue('hearAboutUs'),
              disability: getDataValue('disability'),
              ...(getDataValue('disability') === 'Yes' && {
                disabilityDetails: getDataValue('disabilityDetails')
              }),
              studentFinance: getDataValue('studentFinance'),
            })}

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

            {/* Documents - Updated with proper data handling */}
            {renderSection('Documents', {
              passport: getDataValue('passport'),
              bankStatement: getDataValue('bankStatement'),
              workExperience: getDataValue('workExperience'),
              personalStatement: getDataValue('personalStatement'),
              proofOfAddress: getDataValue('proofOfAddress'),
              photoId: getDataValue('photoId'),
              photograph: getDataValue('image') || 'Not Provided',
              englishCertificate: getDataValue('englishQualification', 'englishCertificate')
            })}
          </div>
        </div>
        <div className="flex justify-end p-4">
          <Button
            onClick={onClose}
            className="bg-watney text-white hover:bg-watney/90"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}