'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axios';
import { useSelector } from 'react-redux';

type CareerResumeUploadProps = {
  onContinue?: (parsedText?: string, fileUrl?: string) => void;
  onSkip?: () => void;
  setCurrentStep?: (step: number) => void;
};

const CareerResumeUpload: React.FC<CareerResumeUploadProps> = ({
  onContinue,
  onSkip,
  setCurrentStep
}) => {
  const [resume, setResume] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    setResume(null);
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      router.push('/dashboard/career-application');
    }
    if (setCurrentStep) setCurrentStep(2);
  };

  const handleContinue = async () => {
    if (!resume) {
      console.error('No resume file or user ID found');
      return;
    }
    
    setLoading(true);

    const formData = new FormData();
    formData.append('entityId', 'applicant'); // Replace with actual entity ID if needed
    formData.append('file_type', 'resumeDoc');
    formData.append('file', resume);

    try {
      console.log('Sending request to /documents...');
      const response = await axiosInstance.post('/documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 30000 // 30 second timeout
      });

      console.log('Upload response:', response.data);

      const textContent = response.data?.data?.fileContent;
      const fileUrl = response.data?.data?.fileUrl;

      if (!fileUrl) {
        throw new Error('No file URL in response');
      }

      
      if (onContinue) {
        onContinue(textContent, fileUrl);
      } else {
        router.push('/dashboard/career-application');
      }
      if (setCurrentStep) setCurrentStep(2);
    } catch (error: any) {
      console.error('Error uploading resume:', error);
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      // Show user-friendly error message
      alert('Failed to upload resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      // Validate file type
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (validTypes.includes(fileExtension)) {
        setResume(file);
      } else {
        alert('Please upload a PDF, DOC, or DOCX file');
      }
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-150px)] items-center justify-center">
      <div className="w-[500px] space-y-6 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="text-md text-start font-medium text-gray-800">
          Upload your resume to fill in your application details quickly and
          accurately automatically.
        </h2>

        {!resume ? (
          <label
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`block cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition hover:bg-gray-50 ${
              isDragging ? 'border-watney bg-blue-50' : 'border-gray-300'
            }`}
          >
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="space-y-1">
              <span className="text-gray-500">
                Drop your resume here or <span className="text-watney font-medium">browse</span>
              </span>
              <span className="block text-xs text-gray-400">
                Supports PDF, DOC, DOCX
              </span>
            </div>
          </label>
        ) : (
          <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50 p-4">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-watney"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12h6v1H9v-1zM9 9h6v1H9V9z" />
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h8.586a2 2 0 001.414-.586l3.414-3.414A2 2 0 0018 12.586V5a2 2 0 00-2-2H4zm0 2h12v7h-3a1 1 0 00-1 1v3H4V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs text-gray-700">{resume.name}</span>
            </div>
            <button
              onClick={handleRemove}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        )}

        <div className="space-y-2">
          <button
            onClick={handleContinue}
            disabled={!resume || loading}
            className="hover:bg-watney-dark flex w-full items-center justify-center gap-2 rounded-xl bg-watney px-4 py-2 font-medium text-white transition disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span>Uploading...</span>
              </>
            ) : (
              'Continue'
            )}
          </button>

          <button
            type="button"
            onClick={handleSkip}
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerResumeUpload;