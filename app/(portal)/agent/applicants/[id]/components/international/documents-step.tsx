import { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Trash2,
  FileText,
  ExternalLink,
  Upload,
  CheckCircle2,
  Circle,
  Camera,
  IdCard,
  Home,
  KeyRound,
  Briefcase,
  ShieldCheck,
  Wallet,
  Receipt,
  type LucideIcon
} from 'lucide-react';
import { ImageUploader } from './document-uploader';
import { useApplicantId } from '@/components/application/applicant-subject';
import { z } from 'zod';

// Zod validation schema
export const documentSchema = z.object({
  image: z.string().optional(),
  passport: z
    .array(z.string())
    .nonempty({ message: 'Passport/visa copy is required' }),
  proofOfAddress: z
    .array(z.string())
    .nonempty({ message: 'Proof of address is required' }),
  shareCodeDoc: z
    .array(z.string())
    .nonempty({ message: 'Share code is required' }),
  workExperience: z
    .array(z.string())
    .nonempty({ message: 'Work experience is required' }),
  dbsDocument: z.array(z.string()).nonempty({ message: 'DBS is required' }),
  bankStatement: z.array(z.string()).optional(),
  paySlip: z.array(z.string()).optional()
});

export type DocumentFile = z.infer<typeof documentSchema>;

/** The optional uploads can be skipped - every one of these has to be there. */
const REQUIRED_FIELDS = [
  'passport',
  'proofOfAddress',
  'shareCodeDoc',
  'workExperience',
  'dbsDocument'
] as const;

interface DocumentsStepProps {
  defaultValues?: Partial<DocumentFile>;
  onSaveAndContinue: (data: DocumentFile) => void;
  setCurrentStep: (step: number) => void;
  onSave: (data: DocumentFile) => void;
}

type DocumentTypeConfig = {
  id: keyof DocumentFile;
  label: string;
  required: boolean;
  instructions: string;
  formats: string;
  uploadLabel?: string;
  icon: LucideIcon;
};

export function DocumentsStep({
  defaultValues,
  onSaveAndContinue,
  setCurrentStep,
  onSave
}: DocumentsStepProps) {
  const [documents, setDocuments] = useState<DocumentFile>({
    image: defaultValues?.image ?? '',
    passport: defaultValues?.passport ?? [],
    proofOfAddress: defaultValues?.proofOfAddress ?? [],
    shareCodeDoc: defaultValues?.shareCodeDoc ?? [],
    workExperience: defaultValues?.workExperience ?? [],
    dbsDocument: defaultValues?.dbsDocument ?? [],
    bankStatement: defaultValues?.bankStatement ?? [],
    paySlip: defaultValues?.paySlip ?? []
  });

  // Ref to always have the latest documents
  const documentsRef = useRef<DocumentFile>(documents);
  useEffect(() => {
    documentsRef.current = documents;
  }, [documents]);

  const [uploadState, setUploadState] = useState<{
    isOpen: boolean;
    field: keyof Omit<DocumentFile, 'image'> | 'image' | null;
  }>({
    isOpen: false,
    field: null
  });

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  // The applicant the form is being filled in for - the one signed in, the one
  // an agent picked, or nobody yet while an agent drafts a new applicant.
  const applicantId = useApplicantId();

  const handleRemoveFile = (field: keyof DocumentFile, fileName: string) => {
    // Removals are persisted for the same reason uploads are - what the step
    // shows and what the applicant record holds must not drift apart.
    const nextDocuments: DocumentFile =
      field === 'image'
        ? { ...documentsRef.current, image: '' }
        : {
            ...documentsRef.current,
            [field]: (
              documentsRef.current[field as keyof DocumentFile] as string[]
            ).filter((file) => file !== fileName)
          };

    setDocuments(nextDocuments);
    documentsRef.current = nextDocuments;
    onSave(nextDocuments);
  };

  const handleBack = () => {
    setCurrentStep(8);
  };

  const handleSubmit = () => {
    const validationResult = documentSchema.safeParse(documents);
    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        errors[String(issue.path[0])] = issue.message;
      });
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});
    onSaveAndContinue(documents);
  };

  const hasFile = (id: keyof DocumentFile) =>
    id === 'image'
      ? !!documents.image
      : Array.isArray(documents[id]) && (documents[id] as string[]).length > 0;

  const requiredDoneCount = REQUIRED_FIELDS.filter((field) =>
    hasFile(field)
  ).length;
  const allDocumentsUploaded = requiredDoneCount === REQUIRED_FIELDS.length;
  const progressPercent = Math.round(
    (requiredDoneCount / REQUIRED_FIELDS.length) * 100
  );

  const renderUploadedFiles = (field: keyof DocumentFile) => {
    if (field === 'image') {
      const fileUrl = documents.image;
      if (fileUrl) {
        const fileName = decodeURIComponent(
          fileUrl.split('/').pop() || 'Photograph'
        );
        return (
          <div className="mt-4 space-y-2">
            <FileRow
              fileName={fileName}
              fileUrl={fileUrl}
              onRemove={() => handleRemoveFile(field, fileUrl)}
            />
          </div>
        );
      }
      return null;
    }

    const value = documents[field];
    if (Array.isArray(value) && value.length > 0) {
      return (
        <div className="mt-4 space-y-2">
          {value.map((fileUrl, index) => {
            const fileName = decodeURIComponent(
              fileUrl.split('/').pop() || `File-${index}`
            );
            return (
              <FileRow
                key={`${fileUrl}-${index}`}
                fileName={fileName}
                fileUrl={fileUrl}
                onRemove={() => handleRemoveFile(field, fileUrl)}
              />
            );
          })}
        </div>
      );
    }
    return null;
  };

  const openImageUploader = (field: keyof DocumentFile) => {
    setUploadState({ isOpen: true, field });
  };

  const handleUploadComplete = (uploadResponse: any) => {
    const { field } = uploadState;
    if (!field || !uploadResponse?.success || !uploadResponse.data?.fileUrl) {
      setUploadState({ isOpen: false, field: null });
      return;
    }

    const fileUrl = uploadResponse.data.fileUrl;

    // Build the next state by hand rather than reading it back off the ref in
    // a timeout - the ref only catches up in an effect, so the save could go
    // out with the document that was there before this upload.
    const nextDocuments: DocumentFile =
      field === 'image'
        ? { ...documentsRef.current, image: fileUrl }
        : {
            ...documentsRef.current,
            [field]: [
              ...(documentsRef.current[field as keyof DocumentFile] as string[]),
              fileUrl
            ]
          };

    setDocuments(nextDocuments);
    documentsRef.current = nextDocuments;

    // Every upload is written straight to the applicant record, so a file is
    // never lost by leaving the step without pressing Continue.
    onSave(nextDocuments);

    setUploadState({ isOpen: false, field: null });
  };

  const documentTypes: DocumentTypeConfig[] = [
    {
      id: 'image',
      label: 'Photograph',
      required: false,
      instructions: 'A recent, formal photo of yourself for your student record.',
      formats: 'JPG, PNG, PDF',
      uploadLabel: 'Optional',
      icon: Camera
    },
    {
      id: 'passport',
      label: 'Passport / visa copy',
      required: true,
      instructions:
        'A clear copy of your passport and, if you have one, your visa.',
      formats: 'PDF, JPG, PNG',
      uploadLabel: 'Multiple files allowed',
      icon: IdCard
    },
    {
      id: 'proofOfAddress',
      label: 'Proof of address',
      required: true,
      instructions:
        'Covering the last 3 years — utility bills, bank statements or council tax.',
      formats: 'PDF, JPG, PNG',
      uploadLabel: 'Multiple files allowed',
      icon: Home
    },
    {
      id: 'shareCodeDoc',
      label: 'Share code',
      required: true,
      instructions: 'Your right-to-work share code document (e.g. UKVI share code).',
      formats: 'PDF, JPG, PNG',
      icon: KeyRound
    },
    {
      id: 'bankStatement',
      label: 'Bank statement',
      required: false,
      instructions: 'A recent bank statement from the last 3 months.',
      formats: 'PDF, JPG, PNG',
      uploadLabel: 'Optional',
      icon: Wallet
    },
    {
      id: 'workExperience',
      label: 'Work experience',
      required: true,
      instructions: 'Documents evidencing your relevant work experience.',
      formats: 'PDF, JPG, PNG',
      uploadLabel: 'Multiple files allowed',
      icon: Briefcase
    },
    {
      id: 'dbsDocument',
      label: 'DBS',
      required: true,
      instructions: 'Your DBS certificate or DBS check result.',
      formats: 'PDF, JPG, PNG',
      icon: ShieldCheck
    },
    {
      id: 'paySlip',
      label: 'Pay slip',
      required: false,
      instructions: 'Your most recent pay slips.',
      formats: 'PDF, JPG, PNG',
      uploadLabel: 'Optional',
      icon: Receipt
    }
  ];

  const requiredDocs = documentTypes.filter((d) => d.required);
  const optionalDocs = documentTypes.filter((d) => !d.required);

  return (
    <div className="w-full">
      <Card className="border-0 shadow-none">
        {/* Header Section */}
        <CardHeader>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
                Document upload
              </h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-black sm:text-base">
               Please upload all required documents to complete your application.
              </p>
            </div>

            {/* Checklist: required vs optional, with live status */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <ChecklistColumn
                  title="Required"
                  helper="Needed to submit your application"
                  items={requiredDocs}
                  hasFile={hasFile}
                />
                <ChecklistColumn
                  title="Optional"
                  helper="Add if applicable to you"
                  items={optionalDocs}
                  hasFile={hasFile}
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-gray-200 bg-gray-50 px-4 py-3 sm:px-5">
                <p className="text-xs font-medium text-black sm:text-sm">
                  {requiredDoneCount} of {REQUIRED_FIELDS.length} required
                  documents added
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-200 sm:w-32">
                    <div
                      className="h-full rounded-full bg-watney transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                      role="progressbar"
                      aria-valuenow={progressPercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span
                    className={`shrink-0 text-xs font-medium ${
                      allDocumentsUploaded ? 'text-emerald-700' : 'text-black'
                    }`}
                  >
                    {allDocumentsUploaded ? 'Complete' : `${progressPercent}%`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        {/* Upload Sections */}
        <CardContent className="p-5 pt-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {documentTypes.map(
              ({ id, label, required, instructions, formats, icon: Icon, uploadLabel }) => {
                const error = validationErrors[id];
                const uploaded = hasFile(id);

                return (
                  <div
                    key={id}
                    className={`rounded-xl border p-4 transition-colors sm:p-5 ${
                      error
                        ? 'border-red-300 bg-white'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${
                          error
                            ? 'border-red-200 bg-red-50 text-red-600'
                            : uploaded
                              ? 'border-watney/20 bg-watney/10 text-watney'
                              : 'border-gray-200 bg-gray-50 text-black'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold text-black sm:text-[15px]">
                            {label}
                          </h3>
                          <span
                            className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${
                              required
                                ? 'border-gray-200 text-red-600'
                                : 'border-gray-200 text-black'
                            }`}
                          >
                            {required ? 'Required' : 'Optional'}
                          </span>
                          {uploaded && (
                            <CheckCircle2 className="h-4 w-4 text-watney" />
                          )}
                        </div>

                        <p className="mt-1 text-xs leading-relaxed text-black sm:text-sm">
                          {instructions}
                        </p>
                        <p className="mt-1.5 text-xs text-black">
                          {formats}
                          {uploadLabel ? ` · ${uploadLabel}` : ''}
                        </p>

                        {error && (
                          <p className="mt-2 text-xs font-medium text-red-600">
                            {error}
                          </p>
                        )}

                        <Button
                          type="button"
                          size="sm"
                          onClick={() => openImageUploader(id)}
                          className="mt-3 gap-1.5 border-gray-300"
                        >
                          <Upload className="h-3.5 w-3.5" />
                          Upload
                        </Button>

                        {renderUploadedFiles(id)}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
            
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!allDocumentsUploaded}
              className="w-full justify-center bg-watney text-white hover:bg-watney/90 disabled:opacity-50 sm:w-auto"
            >
              Continue
            </Button>
          </div>

          {/* Image Uploader Modal */}
          <ImageUploader
            open={uploadState.isOpen}
            onOpenChange={(isOpen) =>
              setUploadState((prev) => ({ ...prev, isOpen }))
            }
            onUploadComplete={handleUploadComplete}
            entityId={applicantId}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function ChecklistColumn({
  title,
  helper,
  items,
  hasFile
}: {
  title: string;
  helper: string;
  items: DocumentTypeConfig[];
  hasFile: (id: keyof DocumentFile) => boolean;
}) {
  return (
    <div className="bg-white p-4 sm:p-5">
      <div className="mb-3">
        <p className="text-sm font-semibold text-black">{title}</p>
        <p className="text-xs text-black">{helper}</p>
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => {
          const done = hasFile(item.id);
          return (
            <li key={item.id} className="flex items-center gap-2.5 text-sm">
              {done ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-watney" />
              ) : (
                <Circle className="h-4 w-4 shrink-0 text-black" />
              )}
              <span className={done ? 'text-black line-through' : 'text-black'}>
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FileRow({
  fileName,
  fileUrl,
  onRemove
}: {
  fileName: string;
  fileUrl: string;
  onRemove: () => void;
}) {
  return (
    <div className="group flex items-center justify-between gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center gap-2 text-xs font-medium text-black hover:text-watney sm:text-sm"
      >
        <FileText className="h-3.5 w-3.5 shrink-0 text-black" />
        <span className="truncate">{fileName}</span>
        <ExternalLink className="h-3 w-3 shrink-0 text-black" />
      </a>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${fileName}`}
        className="shrink-0 rounded-md p-1 text-black opacity-70 transition-opacity hover:bg-red-50 hover:text-red-500 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <Trash2 className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}