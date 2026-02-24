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
  ShieldAlert
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// --- Org Chart Helper Components ---
const OrgNode = ({ title }: { title: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 15 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-[140px] sm:w-[160px]"
  >
    <Card className="relative z-10 h-full flex flex-col items-center justify-center bg-white border-[3px] border-watney rounded-xl shadow-[5px_5px_0px_0px_#009dff] hover:shadow-[7px_7px_0px_0px_#009dff] hover:-translate-y-0.5 transition-all duration-300 min-h-[76px] cursor-default overflow-hidden">
      <CardContent className="p-3 sm:p-4 text-center text-xs sm:text-[13px] font-bold text-slate-800 leading-snug flex items-center justify-center h-full w-full">
        {title}
      </CardContent>
    </Card>
  </motion.div>
);

const VLine = ({ h = "h-8 sm:h-10" }: { h?: string }) => (
  <div className={`w-[3px] bg-watney ${h} mx-auto relative z-0`} />
);

const HLine = ({ w = "w-full" }: { w?: string }) => (
  <div className={`h-[3px] bg-watney ${w} mx-auto relative z-0`} />
);

// --- Vertical Flow Helper Components ---
const FlowNode = ({ title, type = "default" }: { title: string, type?: "board" | "exec" | "ops" }) => {
  const bgColors = {
    board: "bg-slate-800 text-white border-slate-800",
    exec: "bg-watney-blue-primary text-white border-watney-blue-primary",
    ops: "bg-white text-slate-800 border-gray-200 shadow-sm",
    default: "bg-white text-slate-800 border-gray-200"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`px-6 py-4 rounded-xl border-2 text-center font-bold text-sm sm:text-base w-64 ${bgColors[type]}`}
    >
      {title}
    </motion.div>
  );
};

export default function GovernanceAndManagementPage() {
  return (
    <>
    {/* Base wrapper set to relative with a very light background color */}
    <div className="min-h-screen  text-black relative overflow-hidden">
      
      {/* Main Content Wrapper */}
      <div className=" overflow-hidden">

        {/* SECTION 0: Hero Section */}
        <section className="relative pt-24 pb-16 bg-ocean-breeze overflow-hidden ">
          <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0"></div>
          <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0"></div>
          
          <div className="container mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center p-4  rounded-2xl  mb-8"
            >
              <Network className="w-12 h-12 text-watney-blue-primary" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight"
            >
              Governance and <span className="text-watney-blue-primary">Management</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Watney College is committed to maintaining transparent, accountable, and effective 
              leadership to guide our academic excellence and institutional strategy.
            </motion.p>
          </div>
        </section>

        {/* SECTION 1: Intro */}
        <section className="relative py-24 z-10 overflow-hidden bg-slate-50">
  {/* Background Patterns */}
  <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 opacity-40 z-0"></div>
  <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none opacity-40 z-0"></div>
  
  <div className="container mx-auto relative z-10 px-4 md:px-6">
   
<div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Governance And Management</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-watney to-transparent mx-auto rounded-full"></div>
              </motion.div>
            </div>
    <div className=" gap-12 items-center">
      {/* Strategic Pillars */}
     

      {/* Main Content */}
      <div className="">
        <div className="  p-8 md:p-12 rounded-2xl shadow-xl border border-blue-200">
         
          <p className="text-lg  leading-relaxed mb-6">
            Watney College operates a robust governance framework designed to 
            <strong> protect academic standards</strong>, safeguard student interests, 
            and ensure regulatory compliance.
          </p>
          <p className="text-lg  leading-relaxed">
            Our structure clearly separates strategic oversight from executive management, ensuring independence, transparency, and effective institutional leadership.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* SECTION 2: Governance Philosophy */}
        <section className="relative py-24  overflow-hidden">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Governance Philosophy</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-watney to-transparent mx-auto rounded-full"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: GraduationCap,
                  title: "Academic Integrity",
                  desc: "Independent oversight of academic standards and institutional quality."
                },
                {
                  icon: ShieldCheck,
                  title: "Regulatory Compliance",
                  desc: "Clear accountability perfectly aligned with strict national requirements."
                },
                {
                  icon: TrendingUp,
                  title: "Risk & Sustainability",
                  desc: "Proactive financial, strategic, and operational risk governance."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="group relative bg-white/90 backdrop-blur p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-md transition-transform duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-blue-100">
                      <item.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Main Organizational Structure Chart */}
   {/* SECTION 3: Functional Structure (Strategic View) */}
        <section className="relative py-24  overflow-hidden z-10">
          {/* Background Patterns */}
          <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0"></div>
          <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0"></div>
          
          <div className="container mx-auto relative z-10">
            <motion.div
              className="mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2  py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-watney-blue-primary text-xs font-bold tracking-widest uppercase">
                Strategic View
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Functional Structure</h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                A strategic governance model designed for clear hierarchy, effective delegation, and specialized oversight.
              </p>
            </motion.div>

            {/* Pyramid Container */}
            <div className="flex flex-col items-center w-full max-w-5xl mx-auto relative">
              
              {/* Decorative Pyramid Background Glow */}
              <div className="absolute top-10 w-full max-w-2xl h-[80%] bg-gradient-to-b from-watney-blue-primary/5 via-blue-200/10 to-transparent blur-3xl rounded-full z-0 pointer-events-none -translate-y-1/2 left-1/2 -translate-x-1/2"></div>

              {/* LAYER 1: Top (Dark Accent with Gold text) */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[90%] sm:w-64 bg-slate-900 text-white p-5 md:p-6 rounded-2xl shadow-2xl border-b-4 border-yellow-500 relative z-50 flex flex-col items-center justify-center text-center backdrop-blur-md"
              >
                <h3 className="font-black text-lg tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 drop-shadow-sm">
                  Board of Directors
                </h3>
              </motion.div>

              <div className="h-6 w-px bg-gradient-to-b from-slate-400 to-transparent relative z-40 my-1"></div>

              {/* LAYER 2: College Oversight Board */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-[95%] sm:w-80 bg-watney-blue-primary text-white p-5 rounded-2xl shadow-xl border border-blue-400 relative z-40 flex flex-col items-center justify-center text-center"
              >
                <h3 className="font-bold text-base md:text-lg tracking-wider uppercase">
                  College Oversight Board
                </h3>
              </motion.div>

              <div className="h-6 w-px bg-gradient-to-b from-blue-300 to-transparent relative z-30 my-1"></div>

              {/* LAYER 3: Academic Board */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full sm:w-[28rem] bg-white text-slate-900 p-5 rounded-2xl shadow-lg border-2 border-blue-100 relative z-30 flex flex-col items-center justify-center text-center hover:border-blue-300 transition-colors"
              >
                <h3 className="font-bold text-base md:text-lg tracking-wider uppercase text-blue-900">
                  Academic Board
                </h3>
              </motion.div>

              {/* Splitting Connector Lines */}
              <div className="flex w-full sm:w-[28rem] justify-around relative z-20 my-2">
                <div className="w-px h-6 bg-gradient-to-b from-blue-200 to-transparent -ml-16 sm:-ml-24"></div>
                <div className="w-px h-6 bg-gradient-to-b from-blue-200 to-transparent ml-16 sm:ml-24"></div>
              </div>

              {/* LAYER 4: Split horizontally (2 columns) */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-full sm:w-[38rem] grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-20"
              >
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all flex items-center justify-center text-center h-full group">
                  <h3 className="font-semibold text-sm md:text-base text-slate-700 group-hover:text-watney-blue-primary transition-colors">
                    Audit, Remuneration &<br/>Risk Committee
                  </h3>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all flex items-center justify-center text-center h-full group">
                  <h3 className="font-semibold text-sm md:text-base text-slate-700 group-hover:text-watney-blue-primary transition-colors">
                    Quality Assurance<br/>Committee
                  </h3>
                </div>
              </motion.div>

              <div className="flex w-full sm:w-[38rem] justify-around relative z-10 my-2">
                <div className="w-px h-6 bg-gradient-to-b from-slate-200 to-transparent -ml-20"></div>
                <div className="w-px h-6 bg-gradient-to-b from-slate-200 to-transparent"></div>
                <div className="w-px h-6 bg-gradient-to-b from-slate-200 to-transparent ml-20"></div>
              </div>

              {/* LAYER 5: Split horizontally (3 columns) */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-full sm:w-[50rem] grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10"
              >
                <div className="bg-slate-50/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-md transition-all flex items-center justify-center text-center h-full">
                  <h3 className="font-medium text-sm text-slate-600">
                    Student Engagement<br/>& WBL
                  </h3>
                </div>
                <div className="bg-slate-50/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-md transition-all flex items-center justify-center text-center h-full">
                  <h3 className="font-medium text-sm text-slate-600">
                    Assessment &<br/>Progression Board
                  </h3>
                </div>
                <div className="bg-slate-50/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-md transition-all flex items-center justify-center text-center h-full">
                  <h3 className="font-medium text-sm text-slate-600">
                    Programme<br/>Committee
                  </h3>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 4: Organogram (Vertical Flow) */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute -left-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0"></div>
          <div className="absolute -right-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">Organogram</h2>
                <p className="text-lg text-slate-700 font-medium max-w-4xl mx-auto">
                  Structured Authority Flow with Defined Accountability Layers
                </p>
              </motion.div>
            </div>

            {/* Mobile scroll instruction */}
            <div className="md:hidden text-center text-sm font-medium text-watney-blue-primary mb-6 animate-pulse flex items-center justify-center gap-2">
              <ArrowDown className="w-4 h-4 rotate-90" />
              Swipe horizontally to view flow
              <ArrowDown className="w-4 h-4 -rotate-90" />
            </div>

            <div className="w-full overflow-x-auto pb-12 relative z-20 custom-scrollbar">
              <div className="min-w-[900px] pt-8 flex flex-col items-center">
                
                {/* GOVERNANCE ZONE */}
                <div className="relative w-[85%] max-w-4xl border-2 border-slate-200/80 rounded-[2.5rem] p-8 flex flex-col items-center bg-slate-50/90 backdrop-blur shadow-sm">
                  <div className="absolute -top-4 left-10 bg-slate-800 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    Governance
                  </div>
                  <OrgNode title="BOARD" />
                  <VLine h="h-10" />
                  <OrgNode title={<>COLLEGE OVERSIGHT<br />BOARD</>} />
                  <VLine h="h-10" />
                  <OrgNode title={<>ACADEMIC<br />BOARD</>} />
                </div>

                <VLine h="h-12" />

                {/* EXECUTIVE ZONE */}
                <div className="relative w-[85%] max-w-4xl border-2 border-blue-200/80 rounded-[2.5rem] p-8 flex flex-col items-center bg-blue-50/80 backdrop-blur shadow-sm">
                  <div className="absolute -top-4 left-10 bg-watney-blue-primary text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    Executive
                  </div>
                  <OrgNode title="PRINCIPAL" />
                  <VLine h="h-10" />
                  <OrgNode title={<>PRINCIPALS<br />EXECUTIVE GROUP</>} />
                </div>

                <VLine h="h-12" />

                {/* OPERATIONS ZONE */}
                <div className="relative w-[85%] max-w-4xl border-2 border-slate-200/80 rounded-[2.5rem] p-8 pt-12 flex flex-col items-center bg-white/90 backdrop-blur shadow-sm">
                  <div className="absolute -top-4 left-10 bg-slate-500 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    Operations
                  </div>
                  
                  {/* Operations Branching (4 Columns) */}
                  <HLine w="w-[85%]" />
                  <div className="flex w-[85%] justify-between">
                    <div className="w-1/4 flex flex-col items-center px-2">
                      <VLine h="h-10" />
                      <OrgNode title={<>Academic<br />Delivery</>} />
                    </div>
                    
                    <div className="w-1/4 flex flex-col items-center px-2">
                      <VLine h="h-10" />
                      <OrgNode title={<>Student<br />Services</>} />
                    </div>
                    
                    <div className="w-1/4 flex flex-col items-center px-2">
                      <VLine h="h-10" />
                      <OrgNode title="Finance" />
                    </div>
                    
                    <div className="w-1/4 flex flex-col items-center px-2">
                      <VLine h="h-10" />
                      <OrgNode title="Administration" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Governance vs Management Split Panel */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Governance vs Management</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-watney to-transparent mx-auto rounded-full"></div>
              </motion.div>
            </div>
            <div className="mx-auto bg-white/90 rounded-3xl shadow-xl overflow-hidden border border-blue-100 flex flex-col md:flex-row">
              
              {/* Left Panel: Governance */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 p-10 md:p-14 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden"
              >
                {/* Decorative background icon */}
                <Scale className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-700 opacity-20" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white/10 rounded-xl ">
                      <Scale className="w-8 h-8 text-blue-300" />
                    </div>
                    <h3 className="text-3xl font-bold">Governance</h3>
                  </div>
                  <ul className="space-y-6">
                    {["Strategy", "Oversight", "Scrutiny", "Policy approval"].map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-4 text-lg text-slate-200 group"
                      >
                        <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="hidden md:block w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400 z-10 relative"></div>

              {/* Right Panel: Executive Management */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 p-10 md:p-14 bg-white/50 relative overflow-hidden"
              >
                <Briefcase className="absolute -bottom-10 -right-10 w-64 h-64 text-blue-50 opacity-30 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      <Briefcase className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">Executive Management</h3>
                  </div>
                  <ul className="space-y-6">
                    {["Implementation", "Operational delivery", "Staffing", "Student services"].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-4 text-lg text-slate-700 group"
                      >
                        <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 6: Conclusion / Safeguarding Integrity */}
        <section className="relative py-20 overflow-hidden">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Accountability Statement</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-watney to-transparent mx-auto rounded-full"></div>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto bg-gradient-to-br from-blue-50/90 via-white/90 to-blue-50/90 border-2 border-blue-200 rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl pointer-events-none z-0" />
              <div className="relative z-10">
                <ShieldAlert className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <p className="text-xl md:text-2xl font-semibold text-slate-900 leading-relaxed text-balance mb-6">
                 Watney College maintains a clear separation between governance and executive management. Governance bodies do not manage day-to-day operations, and executive management does not override academic or governance decisions.
                </p>
                <div className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 px-8 py-3 rounded-full text-sm font-bold text-blue-700 shadow-md border border-blue-200">
                  This structure safeguards institutional integrity
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