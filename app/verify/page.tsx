"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle, Download } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function VerifyPage() {
  const [studentId, setStudentId] = useState("");
  const [verificationData, setVerificationData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setVerificationData(null);
    setError("");
    setLoading(true);

    try {
      const trimmedId = studentId.trim();
      if (!trimmedId) throw new Error("Please enter a valid Student ID.");

      const response = await axios.get(
        `https://watney.taskplanner.co.uk/api/verification/student/${encodeURIComponent(
          trimmedId
        )}`,
        {
          headers: {
            "x-student-token": "wc4928301746",
          },
        }
      );

      setVerificationData(response.data.data);
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) setError("Student ID not found.");
        else if (err.response?.status === 401)
          setError("Unauthorized access. Please contact support.");
        else setError(`An error occurred: ${err.message}`);
      } else setError(`${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (documentUrl: string) => {
    window.open(documentUrl, "_blank");
  };

  // Helper: check file type
  const getFileType = (url: string) => {
    const ext = url.split(".").pop()?.toLowerCase();
    if (!ext) return "unknown";
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (ext === "pdf") return "pdf";
    return "other";
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute right-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        <section className="bg-ocean-breeze py-16 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-20 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FileText className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                Applicant{" "}
                <span className="text-watney-blue-primary">Validity Check</span>
              </h1>
            </motion.div>
          </div>

          {/* Verification Input Section */}
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
            <div className="flex gap-3">
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter Your Passport Number"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-watney-blue-primary focus:border-watney-blue-primary transition-all"
              />
              <Button
                onClick={handleVerify}
                disabled={loading}
                className={`px-8 py-3 text-white btn-watney-primary rounded-lg font-medium h-12 transition-all ${
                  loading
                    ? "opacity-70 cursor-not-allowed bg-watney-blue-primary"
                    : "hover:btn-watney-primary/90"
                }`}
              >
                {loading ? "Verifying..." : "Verify"}
              </Button>
            </div>

            {/* Error Message */}
          </div>
        </section>

        {error && (
          <div className="mt-6 w-full flex justify-center">
            <div className=" p-3 bg-red-50 border border-red-300 text-red-700 rounded-lg flex items-center justify-center md:w-[40%] ">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          </div>
        )}
        {!verificationData&&(
          <section className="py-48 bg-white mt-16"></section>
        )}

        {/* Verification Result Section */}
        {verificationData && (
          <section className="py-20 bg-white mt-16">
            <div className="container mx-auto px-6">
              {verificationData.documents &&
              verificationData.documents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 z-50">
                  {verificationData.documents.map(
                    (docUrl: string, index: number) => {
                      const type = getFileType(docUrl);
                      return (
                        <div key={index} className="flex flex-col items-center z-50">
                          {type === "image" ? (
                            <img
                              src={docUrl}
                              alt={`Document ${index + 1}`}
                              className="w-full h-[500px] object-contain rounded-md mb-4"
                            />
                          ) : type === "pdf" ? (
                            <iframe
                              src={`https://docs.google.com/gview?url=${encodeURIComponent(
                                docUrl
                              )}&embedded=true`}
                              title={`PDF Document ${index + 1}`}
                              className="w-full h-[700px] rounded-md mb-4"
                            />
                          ) : (
                            <div className="w-full h-64 flex items-center justify-center text-gray-500 border border-dashed rounded-lg mb-4">
                              <p>Preview not available</p>
                            </div>
                          )}

                          <button
                            onClick={() => handleDownload(docUrl)}
                            className="flex items-center gap-2 px-5 py-2 bg-watney-blue-primary text-white text-sm rounded-md hover:bg-watney-blue-primary/90 transition-all"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                // ✅ Section with minimum height when no documents are found
                <div className="flex flex-col items-center justify-center min-h-[500px] text-gray-500">
                  <p className="text-lg">
                    No documents available for this student.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
