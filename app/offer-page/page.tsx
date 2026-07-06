"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  GraduationCap, 
  Calendar, 
  User, 
  BookOpen, 
  Tag,
  Phone,
  Hash,
  Globe,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── Types ────────────────────────────────────────────────────────────────────
type PageState = "loading" | "invalid" | "expired" | "ready" | "confirmed" | "rejected";
type ActionType = "accept" | "reject";

interface OfferDetails {
  applicantId: string;
  offerType: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantDob: string;
  studentType: string;
  refId: string;
  intake: string;
  courseName: string;
}

// ─── Confirmation Modal ───────────────────────────────────────────────────────
function ConfirmModal({
  offerType,
  actionType,
  details,
  onConfirm,
  onCancel,
  confirming,
}: {
  offerType: string;
  actionType: ActionType;
  details: OfferDetails;
  onConfirm: () => void;
  onCancel: () => void;
  confirming: boolean;
}) {
  const isAccept = actionType === "accept";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.22 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Modal Header */}
          <div className={isAccept ? "bg-primary px-6 py-5" : "bg-red-600 px-6 py-5"}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                {isAccept ? (
                  <GraduationCap className="w-5 h-5 text-white" />
                ) : (
                  <XCircle className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {isAccept ? "Confirm Your Offer" : "Reject Offer"}
                </h3>
                <p className="text-white/80 text-sm">
                  {isAccept ? "Please review before accepting" : "Are you sure you want to proceed?"}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              You are about to{" "}
              {isAccept ? (
                <>
                  accept a <span className="font-semibold text-primary capitalize">{offerType}</span> offer
                </>
              ) : (
                <>
                  <span className="font-semibold text-red-600">reject</span> the offer
                </>
              )}{" "}
              for the following:
            </p>

            <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Course</span>
                <span className="font-medium text-gray-800 text-right">{details.courseName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Intake</span>
                <span className="font-medium text-gray-800 text-right">{details.intake}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Applicant</span>
                <span className="font-medium text-gray-800 text-right">{details.applicantName}</span>
              </div>
            </div>

            {isAccept && offerType === "conditional" && (
              <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  This is a <strong>conditional offer</strong>. Acceptance is subject to meeting
                  the specified conditions outlined by the institution.
                </span>
              </div>
            )}

            <p className="text-xs">
              This action cannot be undone. Once confirmed, the offer status will be updated.
            </p>
          </div>

          {/* Modal Footer */}
          <div className="px-6 pb-6 flex gap-3">
            <Button
              variant="outline"
              className="flex-1 bg-black text-white hover:bg-black/90 hover:text-white"
              onClick={onCancel}
              disabled={confirming}
            >
              Go Back
            </Button>
            <Button
              className={`flex-1 text-white ${
                isAccept ? "bg-primary hover:bg-primary/90" : "bg-red-600 hover:bg-red-700"
              }`}
              onClick={onConfirm}
              disabled={confirming}
            >
              {confirming ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Processing…
                </span>
              ) : isAccept ? (
                "Accept Offer"
              ) : (
                "Reject Offer"
              )}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function OfferLetterPage() {
  const searchParams = useSearchParams();

  const [pageState, setPageState] = useState<PageState>("loading");
  const [details, setDetails] = useState<OfferDetails | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState<ActionType>("accept");
  const [confirming, setConfirming] = useState(false);

useEffect(() => {
  const init = async () => {
    // Backend emits params in this exact order (see createEmailIntoDB):
    // name, email, dob, intake, courseName, applicantId, offerType, token
    const rawKeys = Array.from(searchParams.keys());

    const [
      rawName,
      rawEmail,
      rawDob,
      rawIntake,
      rawCourseName,
      rawApplicantId,
      rawOfferType,
      rawToken,
    ] = rawKeys;

    // formatForUrl() replaced spaces with '-' before encoding, so reverse that
    // for free-text fields only — NOT for dob (DD-MM-YYYY) or IDs/tokens.
    const decodeText = (val?: string) =>
      val ? decodeURIComponent(val).replace(/-/g, " ").trim() : "";
    const decodeRaw = (val?: string) => (val ? decodeURIComponent(val) : "");

    const applicantId = decodeRaw(rawApplicantId);
    const rawLetterType = decodeRaw(rawOfferType);

    if (!applicantId || !rawLetterType || !rawToken) {
      setPageState("invalid");
      return;
    }

    try {
      const [appRes] = await Promise.all([
        axiosInstance.get(`/applicants/${applicantId}`),
      ]);

      const apiData = appRes.data?.data;

      if (!apiData) {
        setPageState("invalid");
        return;
      }

      if (apiData.offerType) {
        setPageState("expired");
        return;
      }

      const formattedDob = apiData?.dateOfBirth
        ? new Date(apiData.dateOfBirth).toLocaleDateString("en-GB")
        : "N/A";

      const fullName = [apiData?.title, apiData?.firstName, apiData?.lastName]
        .filter(Boolean)
        .join(" ");

      const fetchedEmail = apiData?.email || "N/A";

      const parsed: OfferDetails = {
        applicantId,
        offerType: rawLetterType.toLowerCase(),
        applicantName: fullName,
        applicantEmail: fetchedEmail,
        applicantPhone: apiData?.phone || "N/A",
        applicantDob: formattedDob,
        studentType: apiData?.studentType?.toUpperCase() || "N/A",
        refId: apiData.refId || "N/A",
        intake: apiData.intakeId?.termName || "N/A",
        courseName: apiData.courseId?.name || "N/A",
      };

      setDetails(parsed);
      setPageState("ready");
    } catch (err) {
      console.error("Error verifying offer link:", err);
      setPageState("invalid");
    }
  };

  init();
}, [searchParams]);

  const handleConfirm = async () => {
    if (!details) return;
    setConfirming(true);
    try {
      const payloadOfferType = actionType === "accept" ? details.offerType : "reject";
      await axiosInstance.patch(
        `/applicants/${details.applicantId}`,
        { offerType: payloadOfferType }
      );
      setShowModal(false);
      setPageState(actionType === "accept" ? "confirmed" : "rejected");
    } catch (err) {
      console.error("Failed to process offer:", err);
    } finally {
      setConfirming(false);
    }
  };

  // ── Loading ──
  if (pageState === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Verifying your offer link…</p>
        </div>
      </div>
    );
  }

  // ── Invalid ──
  if (pageState === "invalid") {
    return (
      <StatusScreen
        icon={<XCircle className="w-12 h-12 text-red-500" />}
        title="Invalid Link"
        description="This offer link is invalid. Please check your email for the correct link or contact Watney College for assistance."
        accent="border-red-200 bg-red-50"
      />
    );
  }

  // ── Expired ──
  if (pageState === "expired") {
    return (
      <StatusScreen
        icon={<AlertTriangle className="w-12 h-12 text-amber-500" />}
        title="Offer Already Processed"
        description="This offer link has already been used. If you believe this is an error, please contact Watney College directly."
        accent="border-amber-200 bg-amber-50"
      />
    );
  }

  // ── Confirmed ──
  if (pageState === "confirmed" && details) {
    return (
      <StatusScreen
        icon={<CheckCircle className="w-12 h-12 text-green-500" />}
        title="Offer Accepted!"
        description={`Congratulations, ${details.applicantName}! Your ${details.offerType} offer for ${details.courseName} has been confirmed. Watney College will be in touch with your next steps.`}
        accent="border-green-200 bg-green-50"
      />
    );
  }

  // ── Rejected ──
  if (pageState === "rejected" && details) {
    return (
      <StatusScreen
        icon={<XCircle className="w-12 h-12 text-red-500" />}
        title="Offer Rejected"
        description={`You have chosen to reject the offer for ${details.courseName}. If you change your mind or believe this was a mistake, please contact Watney College immediately.`}
        accent="border-red-200 bg-red-50"
      />
    );
  }

  // ── Ready — Main offer page ──
  if (pageState === "ready" && details) {
    const isConditional = details.offerType === "conditional";

    return (
      <>
        {showModal && (
          <ConfirmModal
            offerType={details.offerType}
            actionType={actionType}
            details={details}
            onConfirm={handleConfirm}
            onCancel={() => setShowModal(false)}
            confirming={confirming}
          />
        )}

        <div className="min-h-screen bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
            {/* Offer Banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={`border-2 border-gray-300 shadow-none`}>
                <CardHeader className={`bg-watney/5 rounded-t-xl pb-4`}>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center `}>
                        <GraduationCap className={`w-6 h-6`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Watney College</p>
                        <CardTitle className="text-xl">Offer of Admission</CardTitle>
                      </div>
                    </div>
                    <Badge className={`capitalize text-sm px-3 py-1`}>
                      {details.offerType} Offer
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-5 pb-6">
                  <p className="leading-relaxed">
                    Dear <span className="font-semibold text-gray-900">{details.applicantName}</span>,
                    <br /><br />
                    We are pleased to offer you a place at <strong>Watney College</strong> for the programme
                    detailed below. Please review your offer carefully and confirm your acceptance or rejection using the
                    buttons at the bottom of this page.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Comprehensive Offer Details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="shadow-none border border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-gray-700">Offer Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-0 divide-y divide-gray-100">
                  {[
                    { icon: User, label: "Applicant Name", value: details.applicantName },
                    { icon: Mail, label: "Email", value: details.applicantEmail },
                    { icon: Phone, label: "Phone", value: details.applicantPhone },
                    { icon: Calendar, label: "Date of Birth", value: details.applicantDob },
                    { icon: BookOpen, label: "Programme", value: details.courseName },
                    { icon: Calendar, label: "Intake", value: details.intake },
                    {
                      icon: Tag,
                      label: "Offer Type",
                      value: (
                        <span className="capitalize font-semibold">
                          {details.offerType}
                        </span>
                      ),
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4 py-3">
                      <div className="w-8 h-8 bg-primary/8 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 flex justify-between items-center gap-2 min-w-0">
                        <span className="text-sm text-gray-500 shrink-0">{label}</span>
                        <span className="text-sm text-gray-800 font-medium text-right break-words">{value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {isConditional && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-800 space-y-1">
                    <p className="font-semibold">This is a Conditional Offer</p>
                    <p>
                      Your place is offered subject to meeting the conditions specified by Watney College.
                      Please ensure all required documents and conditions are fulfilled before your enrolment date.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-end gap-4 pt-2"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-red-200 text-red-600 bg-red-600 hover:bg-red-500  px-8"
                onClick={() => {
                  setActionType("reject");
                  setShowModal(true);
                }}
              >
                Reject Offer
              </Button>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8"
                onClick={() => {
                  setActionType("accept");
                  setShowModal(true);
                }}
              >
                Accept Offer
              </Button>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return null;
}

// ─── Reusable status screen ───────────────────────────────────────────────────
function StatusScreen({
  icon,
  title,
  description,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl"
      >
        <Card className={`border-2 shadow-none text-center ${accent}`}>
          <CardHeader className="pb-2 pt-8">
            <div className="flex justify-center mb-4">
              <img src="/watney.png" alt="Watney College" className="h-14" />
            </div>
            <div className="flex justify-center mb-4">{icon}</div>
            <CardTitle className="text-2xl font-bold text-gray-900">{title}</CardTitle>
          </CardHeader>
          <CardContent className="pb-8 px-8">
            <p className="leading-relaxed">{description}</p>
            <p className="mt-6 text-sm">
              Need help?{" "}
              <a href="mailto:info@watneycollege.co.uk" className="text-primary underline underline-offset-2">
                info@watneycollege.co.uk
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}