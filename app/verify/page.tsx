"use client";

import { motion } from "framer-motion";
import {
  FileText,
  AlertCircle,
  Download,
  CheckCircle2,
  XCircle,
  File,
  X,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// The exact documents you want to check for
const REQUIRED_CATEGORIES = [
  "Offer letters",
  "Certificates & qualifications",
  "Admission correspondence",
];

export default function VerifyPage() {
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [verificationData, setVerificationData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // State for the document preview modal (Updated to handle multiple URLs)
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    urls: string[];
    currentIndex: number;
    title: string;
  }>({
    isOpen: false,
    urls: [],
    currentIndex: 0,
    title: "",
  });

  const handleVerify = async () => {
    setVerificationData(null);
    setError(false);
    setLoading(true);

    try {
      const trimmedLastName = lastName.trim();

      if (!trimmedLastName || !dob) {
        throw new Error("Missing fields");
      }

      const dd = String(dob.getDate()).padStart(2, "0");
      const mm = String(dob.getMonth() + 1).padStart(2, "0");
      const yyyy = dob.getFullYear();
      const formattedDob = `${dd}/${mm}/${yyyy}`;

      const response = await axios.get(
        `https://watney.taskplanner.co.uk/api/verification/student`,
        {
          params: {
            lastName: trimmedLastName,
            dob: formattedDob,
          },
          headers: {
            "x-student-token": "wc4928301746",
          },
        },
      );

      setVerificationData(response.data.data);
    } catch (err: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (documentUrl: string) => {
    window.open(documentUrl, "_blank");
  };

  const getFileType = (url: string) => {
    if (!url) return "unknown";
    const ext = url.split(".").pop()?.toLowerCase();
    if (!ext) return "unknown";
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (ext === "pdf") return "pdf";
    return "other";
  };

  const openPreview = (urls: string[], title: string) => {
    setPreviewModal({
      isOpen: true,
      urls,
      currentIndex: 0,
      title,
    });
  };

  const closePreview = () => {
    setPreviewModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNextFile = () => {
    setPreviewModal((prev) => ({
      ...prev,
      currentIndex: Math.min(prev.currentIndex + 1, prev.urls.length - 1),
    }));
  };

  const handlePrevFile = () => {
    setPreviewModal((prev) => ({
      ...prev,
      currentIndex: Math.max(prev.currentIndex - 1, 0),
    }));
  };

  // Smart matcher: Looks through the API documents to find a match for the specific category
  const findDocumentForCategory = (category: string) => {
    if (!verificationData?.documents) return null;

    return verificationData.documents.find((doc: any) => {
      const name = (
        typeof doc === "string" ? doc : doc.fileName
      )?.toLowerCase();
      if (!name) return false;

      if (category === "Offer letters" && name.includes("offer")) return true;
      if (
        category === "Certificates & qualifications" &&
        (name.includes("certificate") || name.includes("qualification"))
      )
        return true;
      if (category === "Admission correspondence" && name.includes("admission"))
        return true;

      return name === category.toLowerCase();
    });
  };

  // Helper to extract ALL file URLs from the matched document
  const getFileUrlsFromDoc = (doc: any): string[] => {
    if (!doc) return [];
    if (typeof doc === "string") return [doc]; // If the doc is just a string URL
    if (doc.files && Array.isArray(doc.files)) return doc.files; // Return all files array
    return [];
  };

  // Dynamically determine the current file to show in the modal
  const currentPreviewUrl = previewModal.urls[previewModal.currentIndex];
  const currentPreviewType = getFileType(currentPreviewUrl);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Background Patterns */}
      <div className="relative flex-grow overflow-hidden">
        <div className="absolute right-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10 opacity-40"></div>
        <div className="absolute left-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10 opacity-40"></div>
      </div>

      <section className="relative py-20 bg-ocean-breeze overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <File className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Applicant{" "}
            <span className="text-watney-blue-primary">Validity Check</span>
          </h1>
        </div>
      </section>

      <section className="py-16 overflow-hidden relative z-20 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl transition-all duration-500 ease-in-out">
          <div className="flex flex-col space-y-12">

            {!verificationData && <>
               <div className="w-full max-w-xl mx-auto">
              <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 text-left relative z-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Run a verification check
                </h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900">
                      Applicant surname *
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-watney-blue-primary focus:border-watney-blue-primary transition-all bg-gray-50/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-900">
                      Date of birth (DD/MM/YYYY)*
                    </label>
                    <div className="relative w-full">
                      <DatePicker
                        selected={dob}
                        onChange={(date) => setDob(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        wrapperClassName="w-full"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-watney-blue-primary focus:border-watney-blue-primary transition-all bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleVerify}
                    disabled={loading}
                    className={`w-full py-4 text-white rounded-lg font-medium h-12 transition-all bg-watney-blue-primary hover:bg-watney-blue-primary/90 shadow-md ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Verifying..." : "Verify applicant"}
                  </Button>
                </div>
              </div>

              {/* Updated Error Display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 bg-red-50 border border-red-200 text-red-800 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3 font-semibold text-red-900">
                    <AlertCircle className="w-5 h-5" />
                    Please check the following:
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 ml-2 text-sm text-red-800/90">
                    <li>Check the spelling of the surname</li>
                    <li>Ensure the date of birth is in DD/MM/YYYY format</li>
                    <li>Confirm the details directly with the applicant</li>
                  </ul>
                </motion.div>
              )}
            </div></>}
            {/* Form Input */}
         

            {/* Results Display */}
            {verificationData && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full items-center flex justify-center"
              >
                <div className="w-[50vw] bg-white  rounded-2xl shadow-xl border border-gray-100 p-8 mb-8 items-center">
                  <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {verificationData?.name || lastName}'s Valid record exists
                    </h3>
                  </div>

                  <div className="flex flex-col space-y-2">
                    {(() => {
                      // 1. Get names of extra documents from API not in our "Required" list
                      const extraDocs = verificationData.documents.filter(
                        (doc: any) =>
                          !REQUIRED_CATEGORIES.some(
                            (req) =>
                              req.toLowerCase() === doc.fileName?.toLowerCase(),
                          ),
                      );

                      // 2. Combine the standard 3 categories with any extra ones found
                      const allCategoriesToShow = [
                        ...REQUIRED_CATEGORIES,
                        ...extraDocs.map((d: any) => d.fileName),
                      ];

                      return allCategoriesToShow.map((categoryName, idx) => {
                        const matchedDoc =
                          findDocumentForCategory(categoryName);
                        const fileUrls = getFileUrlsFromDoc(matchedDoc);
                        const isRecognised = fileUrls.length > 0;

                        return (
                          <div
                            key={idx}
                            className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-300 last:border-0 gap-4"
                          >
                            <span className="font-medium text-gray-800 md:w-1/2">
                              {categoryName}
                            </span>

                            <div className="flex items-center gap-4 md:w-1/2 md:justify-end">
                              {isRecognised ? (
                                <>
                                  <span className="text-green-700 font-semibold text-sm bg-green-50 px-2.5 py-1 rounded-md border border-green-100">
                                    Recognised
                                  </span>
                                  <button
                                    onClick={() =>
                                      openPreview(fileUrls, categoryName)
                                    }
                                    className="flex items-center gap-1.5 text-sm font-bold text-watney-blue-primary hover:text-blue-800 transition-colors bg-blue-50/50 hover:bg-blue-50 px-3 py-1.5 rounded-md"
                                  >
                                    <File className="w-4 h-4" />
                                    Document 
                                  </button>
                                </>
                              ) : (
                                <div className="flex items-center gap-1.5 shrink-0">
                                  <span className="text-red-700 font-semibold text-sm bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                                    Not Recognised
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8 relative z-20 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
            For formal verification requests, contact{" "}
            <a
              href="mailto:admissions@watneycollege.co.uk"
              className="text-watney-blue-primary hover:underline font-medium"
            >
              admissions@watneycollege.co.uk
            </a>{" "}
            with the applicant's full name and any reference number.
            <br className="hidden md:block" />
            <span className="block mt-2">
              All verification checks are recorded and processed in accordance
              with data protection requirements.
            </span>
          </p>
        </div>
      </footer>

      {/* DOCUMENT PREVIEW MODAL */}
      {previewModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-4  mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[80vh] flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-watney-blue-primary" />
                <h3 className="font-bold text-lg text-gray-900">
                  {previewModal.title}
                </h3>
              </div>
              <button
                onClick={closePreview}
                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Multi-File Navigation (Only shows if there are multiple files) */}
            {previewModal.urls.length > 1 && (
              <div className="flex items-center justify-between px-5 py-3 bg-gray-100 border-b border-gray-200">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevFile}
                  disabled={previewModal.currentIndex === 0}
                  className="gap-1 bg-white"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </Button>
                <span className="text-sm font-medium text-gray-600">
                  File {previewModal.currentIndex + 1} of{" "}
                  {previewModal.urls.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextFile}
                  disabled={
                    previewModal.currentIndex === previewModal.urls.length - 1
                  }
                  className="gap-1 bg-white"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Modal Body (Preview Area) */}
            <div className="flex-grow overflow-auto bg-gray-100 p-4 flex items-center justify-center min-h-[400px]">
              {currentPreviewType === "image" ? (
                <img
                  src={currentPreviewUrl}
                  alt={`${previewModal.title} - ${previewModal.currentIndex + 1}`}
                  className="max-w-full max-h-[60vh] object-contain rounded-md shadow-sm"
                />
              ) : currentPreviewType === "pdf" ? (
                <iframe
                  src={`https://docs.google.com/gview?url=${encodeURIComponent(
                    currentPreviewUrl,
                  )}&embedded=true`}
                  title={`${previewModal.title} - ${previewModal.currentIndex + 1}`}
                  className="w-full h-[60vh] bg-white rounded-md shadow-sm"
                />
              ) : (
                <div className="text-gray-500 text-center">
                  <File className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p>Preview not available for this file type.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-gray-100 flex justify-end bg-white">
              <button
                onClick={() => handleDownload(currentPreviewUrl)}
                className="flex items-center gap-2 px-6 py-2.5 bg-watney-blue-primary text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download File
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
