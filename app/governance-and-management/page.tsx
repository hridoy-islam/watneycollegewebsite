"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  ArrowDown,
  Scale,
  Briefcase,
  CheckCircle2,
  ShieldAlert,
  FileText,
  Users,
  BookOpen,
  Award,
  Calendar,
  MessageSquare,
  Building2,
  Download,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from 'next/dynamic'

const Tree = dynamic(
  () => import('react-organizational-chart').then(mod => mod.Tree),
  { ssr: false }
)

const TreeNode = dynamic(
  () => import('react-organizational-chart').then(mod => mod.TreeNode),
  { ssr: false }
)
const OrgNode = ({
  title,
  subtitle,
  isGolden = false,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  isGolden?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 15 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-[140px] sm:w-[160px] mx-auto relative z-10"
  >
    <div
      className={`h-full flex flex-col items-center justify-center border-[3px] rounded-xl transition-all duration-300 min-h-[76px] cursor-default overflow-hidden
        ${
          isGolden
            ? "bg-gradient-to-b from-[#FFD700] via-[#FDB931] to-[#D4AF37] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]"
            : "bg-white border-watney shadow-[5px_5px_0px_0px_#009dff] hover:shadow-[7px_7px_0px_0px_#009dff]"
        } hover:-translate-y-0.5`}
    >
      <div
        className={`p-2 flex flex-col sm:p-3 text-center text-xs sm:text-[13px] font-bold leading-snug items-center justify-center h-full w-full
        ${isGolden ? "text-black" : "text-slate-800"}`}
      >
        {title}
      </div>
    </div>
  </motion.div>
);

const VLine = ({ h = "h-8 sm:h-10" }: { h?: string }) => (
  <div className={`relative mx-auto w-8 ${h} z-0 pointer-events-none`}>
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] h-full bg-watney" />
    <div className="absolute left-[calc(50%+8px)] -top-1 h-full border-l-[3.5px] border-dashed border-watney">
      <div className="absolute -bottom-[5px] -right-[5px] text-[16px] text-watney leading-none">
        ▼
      </div>
    </div>
  </div>
);

const directors = [
  {
    name: "Kishour Zadid",
    role: "Chair of the Board",
    expertise: "IT Systems and Digital Infrastructure",
    type: "Executive",
  },
  {
    name: "Dr Atm Shafiul Alam",
    role: "Principal",
    expertise: "Electronic Engineering and Computer Science",
    type: "Executive",
  },
  {
    name: "Kamal Pervez",
    role: "Director",
    expertise: "Finance and Accounting",
    type: "Executive",
  },
  {
    name: "Syed Jahedul Islam",
    role: "Director",
    expertise: "Academic Leadership and Commerce",
    type: "Executive",
  },
  {
    name: "Farhama Akter",
    role: "Director",
    expertise: "Accounting and Healthcare Sector Operations",
    type: "Executive",
  },
  {
    name: "Tahamidul Mamur",
    role: "Director and Company Secretary",
    expertise: "Admissions and Marketing Strategy",
    type: "Executive",
  },
  {
    name: "Carolina Ursachi",
    role: "Non-Executive Director",
    expertise: "Economics, Independent Oversight and Governance",
    type: "Non-Executive",
  },
  {
    name: "Sanjeeda Sarmin Badhon",
    role: "Non-Executive Director",
    expertise: "Pharmaceutical",
    type: "Non-Executive",
  },
];

// Committee data
const committees = [
  {
    icon: Building2,
    title: "College Oversight Board",
    reportsTo: "Board of Directors",
    description:
      "Monitors institutional performance against KPIs, reviews student outcomes and risk registers, and escalates material concerns directly to the Board.",
  },
  {
    icon: GraduationCap,
    title: "Academic Board",
    reportsTo: "Board of Directors",
    description:
      "Senior academic authority responsible for academic standards, curriculum approval, assessment oversight and compliance with awarding body requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Audit, Remuneration and Risk Committee",
    reportsTo: "Board of Directors · Chaired by Non-Executive Director",
    description:
      "Provides independent oversight of financial sustainability, risk management, audit outcomes, business continuity and senior remuneration arrangements.",
  },
  {
    icon: Award,
    title: "Quality Assurance Committee",
    reportsTo: "Academic Board",
    description:
      "Oversees internal verification, assessment moderation and preparation for external quality review across all programmes.",
  },
  {
    icon: FileText,
    title: "Assessment and Progression Board",
    reportsTo: "Academic Board",
    description:
      "Exercises delegated authority from the Academic Board to ratify assessment outcomes, confirm progression decisions and approve awards.",
  },
  {
    icon: BookOpen,
    title: "Programme Committee",
    reportsTo: "Academic Board",
    description:
      "Monitors programme performance, curriculum relevance, employer alignment and student feedback at programme level.",
  },
  {
    icon: Users,
    title: "Student Engagement and WBL Committee",
    reportsTo: "Principal's Executive Group",
    description:
      "Oversees student representation, work-based learning arrangements and employer engagement. Academic matters escalated through established governance channels.",
  },
  {
    icon: Briefcase,
    title: "Principal's Executive Group",
    reportsTo: "Board of Directors",
    description:
      "Responsible for day-to-day operational management and implementation of strategy approved by the Board. Does not exercise governance authority.",
    note: "Accountable to",
  },
];

// Financial accounts data
const financialAccounts = [
  { year: "2022–23", file: "4.1.3. Audited Accounts 22-23.pdf" },
  { year: "2023–24", file: "4.1.2. Audited Accounts 23-24.pdf" },
  { year: "2024–25", file: "4.1.1. Audited Accounts 24-25.pdf" },


];





export default function GovernanceAndManagementPage() {
  return (
    <>
      <div className="min-h-screen text-black relative overflow-hidden">
        <div className="overflow-hidden">
          {/* SECTION 0: Hero Section */}
          <section className="relative pt-24 pb-16 bg-ocean-breeze overflow-hidden">
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0"></div>

            <div className="container mx-auto relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center p-4 rounded-2xl mb-8"
              >
                <Network className="w-12 h-12 text-watney-blue-primary" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight"
              >
                Governance and{" "}
                <span className="text-watney-blue-primary">Management</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Watney College operates a transparent and accountable governance
                framework with a clear separation between strategic oversight
                and executive management.
              </motion.p>
            </div>
          </section>

          {/* OPTION 1: Clean Card with Icon (Recommended) */}
          <section className="relative py-8 bg-white z-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 rounded-2xl p-6 border border-blue-100 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-watney-blue-primary/10 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-watney-blue-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-watney-blue-primary bg-watney-blue-primary/10 px-3 py-1 rounded-full">
                        Regulatory Status
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        UKPRN: 10087811
                      </span>
                      <span className="text-xs text-gray-500 font-mono">
                        Company No: 12858207
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      Watney College is a UK-registered private company limited
                      by shares, incorporated in England and Wales. The College
                      has applied for registration with the Office for Students
                      (OfS).
                      <span className="font-semibold text-amber-600 block sm:inline sm:ml-1">
                        We are not yet a registered higher education provider.
                      </span>
                      <span className="block text-gray-500 text-xs mt-2 italic">
                        This statement will be updated when registration is
                        confirmed.
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION: Board of Directors */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0"></div>

            <div className="container mx-auto relative z-10">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                    Board of{" "}
                    <span className="text-watney-blue-primary">Directors</span>
                  </h2>
                  <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-5xl">
                    The Board holds ultimate statutory and fiduciary
                    responsibility for the institution, including financial
                    sustainability, regulatory compliance, institutional
                    strategy and academic governance.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-slate-100"
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-6 font-bold uppercase tracking-wider text-sm">
                        Name
                      </th>
                      <th className="p-6 font-bold uppercase tracking-wider text-sm">
                        Role
                      </th>
                      <th className="p-6 font-bold uppercase tracking-wider text-sm">
                        Area of Expertise
                      </th>
                      <th className="p-6 font-bold uppercase tracking-wider text-sm text-center">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {directors.map((director, index) => (
                      <tr
                        key={index}
                        className="hover:bg-slate-50 transition-colors duration-200"
                      >
                        <td className="p-6 font-bold text-slate-900 whitespace-nowrap">
                          {director.name}
                        </td>
                        <td className="p-6 text-slate-600 whitespace-nowrap">
                          {director.role}
                        </td>
                        <td className="p-6 text-slate-500 italic max-w-md">
                          {director.expertise}
                        </td>
                        <td className="p-6 text-center">
                          <span
                            className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
                              director.type === "Executive"
                                ? "bg-blue-50 text-watney-blue-primary border-blue-100"
                                : "bg-slate-50 text-slate-600 border-slate-200"
                            }`}
                          >
                            {director.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>

          {/* SECTION: Functional Structure (Strategic View) */}
    <section className="relative py-24 bg-slate-50 overflow-hidden z-10">
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-50"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-50"></div>

            <div className="container mx-auto relative z-10">
              <motion.div
                className="mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                  Functional <span className="text-watney-blue-primary">Structure</span>
                </h2>
                 <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-5xl">
                   All relationships are two-way — authority is delegated downward and formal reports flow upward through the same channel. Dotted double-headed arrows represent this two-way delegation and reporting relationship.
                  </p>
              </motion.div>

              <div className="w-full overflow-x-auto pb-16 relative z-20">
                <div className="min-w-max flex flex-col items-center w-full mx-auto px-4 org-chart-wrapper">
                  
                 

                  <Tree
                    lineWidth={"2px"}
                    lineColor={"#1f5f8b"}
                    lineHeight={"50px"}
                    lineBorderRadius={"4px"}
                    lineStyle="dashed"
                    label={
                      <div className="relative inline-block ">
                        <div 
                          className="inline-flex flex-col items-center justify-center px-6 py-4 rounded-xl shadow-md min-w-[220px] relative z-20"
                          style={{ backgroundColor: '#0b2146', color: '#ffffff' }}
                        >
                          <span className="font-bold text-[16px]">Board of Directors</span>
                          <span className="text-[12px] mt-1 font-light opacity-90">Ultimate authority</span>
                        </div>
                      </div>
                    }
                  >
                    {/* College Oversight Board */}
                    <TreeNode
                      label={
                        <div className="relative inline-block">
                          <div 
                            className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm min-w-[160px] relative z-20"
                            style={{ backgroundColor: '#1a5275', color: '#ffffff' }}
                          >
                            <span className="font-normal text-[14px]">College Oversight</span>
                            <span className="font-bold text-[14px]">Board</span>
                          </div>
                        </div>
                      }
                    />

                    {/* Academic Board Flow */}
                    <TreeNode
                      label={
                        <div className="relative inline-block">
                          <div 
                            className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm min-w-[160px] relative z-20"
                            style={{ backgroundColor: '#1b6ca8', color: '#ffffff' }}
                          >
                            <span className="font-normal text-[14px]">Academic Board</span>
                            <span className="text-[14px] font-semibold mt-1 opacity-90">Standards · Quality</span>
                          </div>
                        </div>
                      }
                    >
                      {/* QA Committee Flow */}
                      <TreeNode
                        label={
                          <div className="relative inline-block">
                            <div 
                              className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm relative z-20"
                              style={{ backgroundColor: '#ebf4fa', color: '#1f5f8b', border: '1px solid #a1cbe8', minWidth: '160px' }}
                            >
                              <span className="font-bold text-[14px]">QA Committee</span>
                              <span className="text-[11px] mt-1">Teaching quality</span>
                            </div>
                          </div>
                        }
                      >
                        <TreeNode
                          label={
                            <div className="relative inline-block">
                              <div 
                                className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm relative z-20"
                                style={{ backgroundColor: '#ebf4fa', color: '#1f5f8b', border: '1px solid #a1cbe8', minWidth: '160px' }}
                              >
                                <span className="font-bold text-[13px]">Assessment &</span>
                                <span className="font-bold text-[13px]">Progression Board</span>
                              </div>
                            </div>
                          }
                        />
                        <TreeNode
                          label={
                            <div className="relative inline-block">
                              <div 
                                className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm relative z-20"
                                style={{ backgroundColor: '#ebf4fa', color: '#1f5f8b', border: '1px solid #a1cbe8', minWidth: '160px' }}
                              >
                                <span className="font-bold text-[13px]">Programme</span>
                                <span className="font-bold text-[13px]">Committee</span>
                              </div>
                            </div>
                          }
                        />
                      </TreeNode>
                    </TreeNode>

                    {/* Principal's Executive Group Flow */}
                    <TreeNode
                      label={
                        <div className="relative inline-block">
                          <div 
                            className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm min-w-[160px] relative z-20"
                            style={{ backgroundColor: '#1b6ca8', color: '#ffffff' }}
                          >
                            <span className="font-normal text-[14px]">Principal's Executive</span>
                            <span className="font-bold text-[14px]">Group (PEG)</span>
                          </div>
                        </div>
                      }
                    >
                      <TreeNode
                        label={
                          <div className="relative inline-block">
                            <div 
                              className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm relative z-20"
                              style={{ backgroundColor: '#d5e9f7', color: '#1f5f8b', border: '1px solid #a1cbe8', minWidth: '180px' }}
                            >
                              <span className="font-bold text-[13px]">Student Engagement</span>
                              <span className="font-bold text-[13px]">& WBL Committee</span>
                            </div>
                          </div>
                        }
                      />
                    </TreeNode>

                    {/* ARRC */}
                    <TreeNode
                      label={
                        <div className="relative inline-block">
                          <div 
                            className="inline-flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm min-w-[160px] relative z-20"
                            style={{ backgroundColor: '#1a5275', color: '#ffffff' }}
                          >
                            <span className="font-normal text-[14px]">ARRC</span>
                            <span className="text-[12px] font-bold mt-1 opacity-90">Audit · Risk · Rem.</span>
                          </div>
                        </div>
                      }
                    />
                  </Tree>

                  {/* Chart Legend matching the image */}
                  <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#0b2146' }}></div>
                      <span>Board</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#1a5275' }}></div>
                      <span>Governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#1b6ba8' }}></div>
                      <span>Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#d5e9f7', border: '1px solid #a1cbe8' }}></div>
                      <span>Student</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#ebf4fa', border: '1px solid #a1cbe8' }}></div>
                      <span>Sub-committees</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="flex items-center">
                        <div className="w-8 border-t-2 border-dashed" style={{ borderColor: '#1f5f8b' }}></div>
                      </div>
                      <span className="ml-1">Two-way delegation & reporting</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* SECTION: Organogram (Vertical Flow) */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute -left-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-50"></div>
            <div className="absolute -right-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-50"></div>

            <div className="mx-auto relative z-10">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
                    Organogram
                  </h2>
                  <p className="text-lg text-slate-700 font-medium mx-auto">
                    Structured Authority Flow with Defined Accountability Layers
                  </p>
                </motion.div>
              </div>

              <div className="container overflow-x-auto pb-12 relative z-20 custom-scrollbar">
                <div className="flex flex-col items-center relative">
                  <div className="relative">
                    <OrgNode title="BOARD OF DIRECTORS" isGolden={true} />
                  </div>

                  <div
                    className="relative w-full flex justify-center"
                    style={{ height: "60px" }}
                  >
                    <div className="w-[3px] bg-watney h-full pointer-events-none" />
                  </div>

                  <div className="relative">
                    <OrgNode title="PRINCIPAL" subtitle="Dr Atm Shafiul Alam" />
                  </div>

                  <div
                    className="relative w-full flex justify-center mb-8"
                    style={{ height: "40px" }}
                  >
                    <div className="w-[3px] bg-watney h-full pointer-events-none" />
                  </div>

                  <div
                    className="relative w-full"
                    style={{ marginBottom: "60px" }}
                  >
                    <div
                      className="absolute -top-8 left-0 right-0 h-[3px] bg-watney pointer-events-none"
                      style={{
                        width: "100%",
                        maxWidth: "962px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />

                    <div className="flex justify-center gap-8 mt-2.5 flex-wrap">
                      <div className="relative" style={{ marginTop: "0px" }}>
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode
                          title="HEAD OF MARKETING"
                          subtitle="Tahamidul Mamur"
                        />
                      </div>

                      <div className="relative" style={{ marginTop: "0px" }}>
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode
                          title="HEAD OF ADMIN AND REGISTRY"
                          subtitle="Dr. Rahman Hasan"
                        />
                      </div>

                      <div className="relative" style={{ marginTop: "0px" }}>
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode
                          title="HEAD OF FINANCE"
                          subtitle="Md Kamal Pervez"
                        />
                      </div>

                      <div className="relative" style={{ marginTop: "0px" }}>
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode
                          title="HEAD OF HUMAN RESOURCES"
                          subtitle="Bilkis Akter Mily"
                        />
                      </div>

                      <div className="relative" style={{ marginTop: "0px" }}>
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode
                          title="HEAD OF ACADEMIC"
                          subtitle="Syed Jahedul Islam"
                        />
                      </div>

                      <div className="relative" style={{ marginTop: "0px" }}>
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode
                          title="HEAD OF QUALITY ASSURANCE"
                          subtitle="Kishour Zadid"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative w-full">
                    <div className="flex justify-center gap-8 flex-wrap">
                      <div className="relative right-72 -mt-6">
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode title="MARKETING OFFICER" />
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="relative right-72 top-40 -mt-6">
                          <div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                            style={{ height: "190px", top: "-190px" }}
                          />
                          <OrgNode
                            title="ACADEMIC ADMINISTRATOR"
                            subtitle="Afruza Rahman"
                          />
                        </div>
                        <div className="relative right-24 top-16">
                          <div
                            className="absolute mt-16 right-44 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none rotate-90"
                            style={{ height: "40px", top: "-40px" }}
                          />
                          <OrgNode
                            title="STUDENT ENGAGEMENT OFFICER"
                            subtitle="ASM MOHOSIN ABDULLAH"
                          />
                        </div>
                      </div>

                      <div className="relative right-24 -mt-6">
                        <div
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                          style={{ height: "40px", top: "-40px" }}
                        />
                        <OrgNode
                          title="ACCOUNTS ADMINISTRATOR"
                          subtitle="M. Hasan"
                        />
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="relative -top-52 left-72">
                          <div
                            className="absolute top-0 right-80 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                            style={{ height: "40px", top: "-40px" }}
                          />
                          <OrgNode title="PROGRAMME LEADER" />
                        </div>
                        <div className="relative -top-0 left-32">
                          <div className="flex gap-4">
                            <div
                              className="absolute top-0 right-40 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none"
                              style={{ height: "270px", top: "-280px" }}
                            />
                            <div className="relative left-24 -mt-4">
                              <OrgNode title="PERSONAL TUTOR" />
                            </div>
                            <div className="relative left-28 -top-4">
                              <div
                                className="absolute mt-16 right-44 transform -translate-x-1/3 w-[3px] bg-watney pointer-events-none rotate-90"
                                style={{ height: "40px", top: "-40px" }}
                              />
                              <OrgNode title="ASSESSORS" />
                            </div>
                            <div className="relative left-32 -top-4">
                              <div
                                className="absolute mt-16 right-44 transform -translate-x-1/3 w-[3px] bg-watney pointer-events-none rotate-90"
                                style={{ height: "40px", top: "-40px" }}
                              />
                              <OrgNode title="LECTURER" />
                            </div>
                            <div className="relative left-36 -top-4">
                              <div
                                className="absolute mt-16 right-44 transform -translate-x-1/3 w-[3px] bg-watney pointer-events-none rotate-90"
                                style={{ height: "40px", top: "-40px" }}
                              />
                              <OrgNode title="INTERNAL VERIFIER" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== NEW SECTION 1: Our Committees ========== */}
          <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-50"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
                  Governance Framework
                </p>
                <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
                  Our{" "}
                  <span className="text-watney-blue-primary">Committees</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
                  Each committee operates under approved Terms of Reference and
                  submits formal reports through defined governance channels.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {committees.map((committee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                            <committee.icon className="w-5 h-5 text-watney-blue-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-black mb-1">
                              {committee.title}
                            </h3>
                            <p className="text-xs text-gray-500 mb-2">
                              <span className="font-medium">Reports to:</span>{" "}
                              {committee.reportsTo}
                              {committee.note && (
                                <span className="block text-[11px] text-gray-400 mt-0.5">
                                  ({committee.note})
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {committee.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ========== NEW SECTION 2: Governance vs Management ========== */}
          <section className="relative py-20 bg-gray-50 overflow-hidden">
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-30"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-30"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
                  Clear Separation
                </p>
                <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
                  Governance vs{" "}
                  <span className="text-watney-blue-primary">Management</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
                  Watney College maintains a clear separation between governance
                  and executive management. Governance bodies do not manage
                  day-to-day operations, and executive management does not
                  override academic or governance decisions.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Governance Panel */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-white/10 rounded-xl">
                      <Scale className="w-6 h-6 text-blue-300" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      Governance responsibilities
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Setting strategic direction",
                      "Oversight and scrutiny",
                      "Policy approval",
                      "Risk and audit assurance",
                      "Academic standards",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-200"
                      >
                        <CheckCircle2 className="w-5 h-5 text-watney-blue-primary shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Management Panel */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-blue-50 rounded-xl">
                      <Briefcase className="w-6 h-6 text-watney-blue-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Executive management responsibilities
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Day-to-day operations",
                      "Programme delivery",
                      "Staffing and resource management",
                      "Student services",
                      "Regulatory submissions",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-watney-blue-primary shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ========== NEW SECTION 3: Financial Transparency ========== */}
          <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-50"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs font-medium tracking-widest uppercase text-watney-blue-primary mb-2">
                  Public Accountability
                </p>
                <h2 className="text-4xl lg:text-5xl text-black font-bold mb-4">
                  Financial{" "}
                  <span className="text-watney-blue-primary">Transparency</span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
                  Audited financial accounts are published below in accordance
                  with our commitment to transparency and regulatory compliance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 text-sm font-bold uppercase tracking-wider text-gray-600">
                          Document
                        </th>
                        <th className="text-left py-4 px-4 text-sm font-bold uppercase tracking-wider text-gray-600">
                          Year
                        </th>
                        <th className="text-right py-4 px-4 text-sm font-bold uppercase tracking-wider text-gray-600">
                          Download
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {financialAccounts.map((account, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 last:border-0 hover:bg-gray-100/50 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-watney-blue-primary" />
                              <span className="text-sm font-medium text-gray-900">
                                Audited Financial Accounts
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm text-gray-600">
                              {account.year}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-watney-blue-primary border-watney-blue-primary hover:bg-watney-blue-primary hover:text-white transition-colors"
                              asChild
                            >
                              <Link
                                href={`/${account.file}`}
                                className="flex items-center gap-1.5"
                                target="_blank"
  rel="noopener noreferrer"
                              >
                                <Download className="w-3.5 h-3.5" />
                                Download PDF
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-xs text-gray-500">
                    Last reviewed: November 2025 · Next review: November 2026 ·
                    Approved by: Board of Directors
                  </p>
                </div>
              </motion.div>

              {/* Accountability Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-watney-blue-primary/10 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-6 h-6 text-watney-blue-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Accountability Statement
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The Board of Directors is the governing body of Watney
                      College and holds ultimate responsibility for the
                      College's strategic direction, financial sustainability,
                      and compliance with all regulatory requirements. The Board
                      operates in accordance with its Articles of Association
                      and is committed to the principles of good governance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
