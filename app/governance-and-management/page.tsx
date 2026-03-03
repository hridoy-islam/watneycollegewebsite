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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";



const GovNode = ({
  label,
  abbr,
  cx,
  top,
  width = 190,
  badgeBg,
  badgeFg,
  boxBg,
  boxFg,
  border,
}: {
  label: string;
  abbr?: string;
  cx: number;
  top: number;
  width?: number;
  badgeBg?: string;
  badgeFg?: string;
  boxBg: string;
  boxFg: string;
  border?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    style={{
      position: "absolute",
      left: cx - width / 2,
      top,
      width,
      zIndex: 10,
    }}
  >
    {/* Badge (Optional) */}
    {abbr && badgeBg && badgeFg && (
      <div
        style={{
          position: "absolute",
          top: -22,
          left: "50%",
          transform: "translateX(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: badgeBg,
          color: badgeFg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 900,
          border: "2.5px solid #fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          zIndex: 20,
        }}
      >
        {abbr}
      </div>
    )}
    {/* Box */}
    <div
      style={{
        background: boxBg,
        color: boxFg,
        borderRadius: 10,
        padding: abbr ? "26px 14px 14px" : "14px",
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 14,
        fontWeight: 800,
        boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
        border: border ? `1.5px solid ${border}` : `2px solid ${boxBg}`,
        lineHeight: 1.35,
      }}
    >
      {label}
    </div>
  </motion.div>
);



// --- Org Chart Helper Components ---
const OrgNode = ({
  title,
  subtitle,
  isGolden = false, // New prop
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
        ${isGolden 
          ? "bg-gradient-to-b from-[#FFD700] via-[#FDB931] to-[#D4AF37] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]" 
          : "bg-white border-watney shadow-[5px_5px_0px_0px_#009dff] hover:shadow-[7px_7px_0px_0px_#009dff]"
        } hover:-translate-y-0.5`}
    >
      <div className={`p-2 flex flex-col sm:p-3 text-center text-xs sm:text-[13px] font-bold leading-snug items-center justify-center h-full w-full
        ${isGolden ? "text-black" : "text-slate-800"}`}
      >
        {title}
        {/* {subtitle && (
          <div className={`text-[10px] sm:text-xs font-medium mt-1 ${isGolden ? "text-black/80" : ""}`}>
            {subtitle}
          </div>
        )} */}
      </div>
    </div>
  </motion.div>
);

const VLine = ({ h = "h-8 sm:h-10" }: { h?: string }) => (
  <div className={`w-[3px] bg-watney ${h} mx-auto relative z-0 pointer-events-none`} />
);

const HLine = ({ w = "w-full" }: { w?: string }) => (
  <div className={`h-[3px] bg-watney ${w} mx-auto relative z-0 pointer-events-none`} />
);

// Magnetic lines that don't affect layout
const MagneticVLine = ({ height }: { height: number }) => (
  <div 
    className="absolute w-[3px] bg-watney pointer-events-none z-0" 
    style={{ height: `${height}px`, left: "50%", transform: "translateX(-50%)" }}
  />
);

const MagneticHLine = ({ width, top, left }: { width: number; top: number; left: number }) => (
  <div 
    className="absolute h-[3px] bg-watney pointer-events-none z-0" 
    style={{ width: `${width}px`, top: `${top}px`, left: `${left}px` }}
  />
);

// --- Vertical Flow Helper Components ---
const FlowNode = ({
  title,
  type = "default",
}: {
  title: string;
  type?: "board" | "exec" | "ops";
}) => {
  const bgColors = {
    board: "bg-slate-800 text-white border-slate-800",
    exec: "bg-watney-blue-primary text-white border-watney-blue-primary",
    ops: "bg-white text-slate-800 border-gray-200 shadow-sm",
    default: "bg-white text-slate-800 border-gray-200",
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
                Governance and{" "}
                <span className="text-watney-blue-primary">Management</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl  max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Watney College is committed to maintaining transparent,
                accountable, and effective leadership to guide our academic
                excellence and institutional strategy.
              </motion.p>
            </div>
          </section>

          {/* SECTION 1: Intro */}
          <section className="relative py-24  overflow-hidden bg-slate-50">
            {/* Background Patterns */}
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 opacity-40 z-0"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none opacity-40 z-0"></div>

            <div className="container mx-auto relative z-10 px-4 md:px-6">
              <div className=" gap-12 items-center">
                {/* Strategic Pillars */}

                {/* Main Content */}
                <div className="z-10">
                  <div className="  p-8 md:p-12 rounded-2xl shadow-xl border border-blue-200 bg-white">
                    <p className="text-lg  leading-relaxed mb-6">
                      Strategic Oversight. Academic Integrity. Institutional
                      Accountability. Watney College operates a robust
                      governance framework designed to protect academic
                      standards, safeguard student interests, and ensure
                      regulatory compliance. Our structure clearly separates
                      strategic oversight from executive management, ensuring
                      independence, transparency, and effective institutional
                      leadership.
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                    Governance Philosophy
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-watney to-transparent mx-auto rounded-full"></div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: GraduationCap,
                    title: "Academic Integrity",
                    desc: "Independent oversight of academic standards and institutional quality.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Regulatory Compliance",
                    desc: "Clear accountability perfectly aligned with strict national requirements.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Risk & Sustainability",
                    desc: "Proactive financial, strategic, and operational risk governance.",
                  },
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
                      <h3 className="text-xl font-bold mb-3 ">
                        {item.title}
                      </h3>
                      <p className=" leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: Functional Structure (Strategic View) */}
          <section className="relative py-24 overflow-hidden z-10">
            {/* Background Patterns */}
            <div className="absolute -left-72 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-50"></div>
            <div className="absolute -right-64 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-50"></div>

            <div className="container mx-auto relative z-10">
              {/* Heading */}
              <motion.div
                className="mx-auto text-center "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                  Functional Structure
                </h2>
                <p className="text-lg font-medium max-w-2xl mx-auto ">
                  A strategic governance model designed for clear hierarchy,
                  effective delegation, and specialized oversight.
                </p>
              </motion.div>

             

              {/* Mobile scroll hint */}
              <div className="xl:hidden text-center text-sm font-medium text-watney  animate-pulse flex items-center justify-center gap-2">
                <ArrowDown className="w-4 h-4 rotate-90" />
                Swipe horizontally to view structure
                <ArrowDown className="w-4 h-4 -rotate-90" />
              </div>

              {/* Chart scroll wrapper */}
              <div className="w-full overflow-x-auto custom-scrollbar pb-16 relative z-20">
                <div
                  style={{
                    minWidth: 1060,
                    position: "relative",
                    height: 740,
                    margin: "0 auto",
                    marginLeft:'60px'
                  }}
                >
                  {/* ── SVG LINES ── */}
                  <svg
                    width="1060"
                    height="740"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  >
                    <defs>
                      {/* Universal Markers - Automatically point in the path's direction */}
                      <marker id="arr-maroon" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#9C3B67" /></marker>
                      <marker id="arr-black" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#000" /></marker>
                      <marker id="arr-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#C81F4A" /></marker>
                      <marker id="arr-coral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#FF8A65" /></marker>
                      <marker id="arr-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#2E8B57" /></marker>
                      <marker id="arr-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#1E3A8A" /></marker>
                      <marker id="arr-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#7E22CE" /></marker>
                    </defs>

                    {/* --- MAROON SOLID LINES (BoD downward flows) --- */}
                    <path d="M 530 135 L 530 200" stroke="#9C3B67" strokeWidth="4" fill="none" />
                    <path d="M 530 200 L 530 135" stroke="none" fill="none" markerEnd="url(#arr-maroon)" /> {/* Up arrow to BoD */}
                    <path d="M 140 200 L 920 200" stroke="#9C3B67" strokeWidth="4" fill="none" />
                    <path d="M 140 200 L 140 255" stroke="#9C3B67" strokeWidth="4" fill="none" markerEnd="url(#arr-maroon)" />
                    <path d="M 920 200 L 920 255" stroke="#9C3B67" strokeWidth="4" fill="none" markerEnd="url(#arr-maroon)" />
                    <path d="M 400 200 L 400 260" stroke="#9C3B67" strokeWidth="4" fill="none" />
                    <path d="M 660 200 L 660 260" stroke="#9C3B67" strokeWidth="4" fill="none" />

                    {/* --- BLACK SOLID LINES (Upward to BoD) --- */}
                   <path 
  d="M 460 260 L 460 135" 
  stroke="#000" 
  strokeWidth="3" 
  strokeDasharray="8,6" 
  fill="none" 
  markerEnd="url(#arr-black)" 
/>
<path 
  d="M 600 260 L 600 135" 
  stroke="#000" 
  strokeWidth="3" 
  strokeDasharray="8,6" 
  fill="none" 
  markerEnd="url(#arr-black)" 
/>
                    {/* --- BLACK DASHED LINES (Information Flow Loops) --- */}
                    {/* Top Left Loop */}
                    <path d="M 410 80 L 180 80 L 180 280" stroke="#000" strokeWidth="3" strokeDasharray="10,8" fill="none" />
                    <path d="M 350 80 L 410 80" stroke="none" fill="none" markerEnd="url(#arr-black)" />
                    <path d="M 180 120 L 180 260" stroke="none" fill="none" markerEnd="url(#arr-black)" />
                    
                    {/* Top Right Loop */}
                    <path d="M 650 80 L 860 80 L 860 255" stroke="#000" strokeWidth="3" strokeDasharray="10,8" fill="none" />
                    <path d="M 710 80 L 650 80" stroke="none" fill="none" markerEnd="url(#arr-black)" />
                    <path d="M 860 10 L 860 260" stroke="none" fill="none" markerEnd="url(#arr-black)" />

                    {/* Middle Horizontal Dashed */}
                    <path d="M 190 230 L 850 230" stroke="#000" strokeWidth="3" strokeDasharray="10,8" fill="none" />
                    <path d="M 200 230 L 860 230" stroke="none" fill="none" markerEnd="url(#arr-black)" />
                    <path d="M 860 230 L 180 230" stroke="none" fill="none" markerEnd="url(#arr-black)" />

                    {/* --- RED SOLID LINES (SEG/PIMG to PEG) --- */}
                    <path d="M 0 430 L 250 430" stroke="#C81F4A" strokeWidth="4" fill="none" />
                    <path d="M 90 560 L 90 430" stroke="#C81F4A" strokeWidth="4" fill="none"  />
                    <path d="M 250 560 L 250 430" stroke="#C81F4A" strokeWidth="4" fill="none"  />
                    <path d="M 140 430 L 140 365" stroke="#C81F4A" strokeWidth="4" fill="none" markerEnd="url(#arr-red)" />

                    {/* --- CORAL/SALMON SOLID LINES (Specialist Reviews to ARRC/COB) --- */}
                    <path d="M 400 430 L 660 430" stroke="#FF8A65" strokeWidth="4" fill="none" />
                    <path d="M 530 560 L 530 430" stroke="#FF8A65" strokeWidth="4" fill="none" />
                    <path d="M 400 430 L 400 365" stroke="#FF8A65" strokeWidth="4" fill="none" markerEnd="url(#arr-coral)" />
                    <path d="M 660 430 L 660 365" stroke="#FF8A65" strokeWidth="4" fill="none" markerEnd="url(#arr-coral)" />

                    {/* --- GREEN SOLID LINE (QESC to AB) --- */}
                    <path d="M 920 560 L 920 365" stroke="#2E8B57" strokeWidth="4" fill="none" markerEnd="url(#arr-green)" />

                    {/* --- BLUE & PURPLE DASHED LINES --- */}
                    {/* Blue (ARRC <-> SR) */}
                    <path d="M 460 380 L 460 540" stroke="#1E3A8A" strokeWidth="3" strokeDasharray="8,6" fill="none" />
                    <path d="M 460 400 L 460 370" stroke="none" fill="none" markerEnd="url(#arr-blue)" />
                    <path d="M 460 520 L 460 550" stroke="none" fill="none" markerEnd="url(#arr-blue)" />

                    {/* Purple (COB <-> SR) */}
                    <path d="M 600 380 L 600 540" stroke="#7E22CE" strokeWidth="3" strokeDasharray="8,6" fill="none" />
                    <path d="M 600 400 L 600 370" stroke="none" fill="none" markerEnd="url(#arr-purple)" />
                    <path d="M 600 520 L 600 550" stroke="none" fill="none" markerEnd="url(#arr-purple)" />
                  </svg>

                  {/* ── BOXES ── */}

                  {/* Board of Directors */}
                  <GovNode
                    label="Board of Directors"
                    abbr="BoD"
                    cx={530}
                    top={30}
                    width={240}
                    badgeBg="#F1C4D1"
                    badgeFg="#9C3B67"
                    boxBg="#9C3B67"
                    boxFg="#fff"
                  />
                  {/* PEG */}
                  <GovNode
                    label="Principal's Executive Group"
                    abbr="PEG"
                    cx={140}
                    top={260}
                    width={210}
                    badgeBg="#F8D7DA"
                    badgeFg="#C81F4A"
                    boxBg="#C81F4A"
                    boxFg="#fff"
                  />
                  {/* ARRC */}
                  <GovNode
                    label="Audit, Remuneration & Risk Committee"
                    abbr="ARRC"
                    cx={400}
                    top={260}
                    width={210}
                    badgeBg="#D0E2FF"
                    badgeFg="#1E3A8A"
                    boxBg="#1E3A8A"
                    boxFg="#fff"
                  />
                  {/* COB */}
                  <GovNode
                    label="College Oversight Board"
                    abbr="COB"
                    cx={660}
                    top={260}
                    width={210}
                    badgeBg="#E8D8F8"
                    badgeFg="#7E22CE"
                    boxBg="#7E22CE"
                    boxFg="#fff"
                  />
                  {/* AB */}
                  <GovNode
                    label="Academic Board"
                    abbr="AB"
                    cx={920}
                    top={260}
                    width={210}
                    badgeBg="#C3F0CA"
                    badgeFg="#2E8B57"
                    boxBg="#2E8B57"
                    boxFg="#fff"
                  />
                  {/* SEG */}
                  <GovNode
                    label="Student Engagement Group"
                    abbr="SEG"
                    cx={55}
                    top={560}
                    width={180}
                    badgeBg="#FCE4EC"
                    badgeFg="#D81B60"
                    boxBg="#F48FB1"
                    boxFg="#880E4F"
                    border="#F06292"
                  />
                  {/* PIMG */}
                  <GovNode
                    label="Public Information Monitoring Group"
                    abbr="PIMG"
                    cx={250}
                    top={560}
                    width={180}
                    badgeBg="#FCE4EC"
                    badgeFg="#D81B60"
                    boxBg="#F48FB1"
                    boxFg="#880E4F"
                    border="#F06292"
                  />
                  {/* SR */}
                  <GovNode
                    label="Specialist Reviews"
                    cx={530}
                    top={560}
                    width={210}
                    boxBg="#FF8A65"
                    boxFg="#3E2723"
                    border="#FF7043"
                  />
                  {/* QESC */}
                  <GovNode
                    label="Quality & Enhancement Steering Committee"
                    abbr="QESC"
                    cx={920}
                    top={560}
                    width={210}
                    badgeBg="#DCEDC8"
                    badgeFg="#33691E"
                    boxBg="#9CCC65"
                    boxFg="#1B5E20"
                    border="#8BC34A"
                  />
                </div>
              </div>

               {/* KEY */}
              <div className="flex justify-center mb-10 -mt-16">
                <div className="inline-flex flex-col gap-3 bg-white border border-gray-200 rounded-xl shadow px-6 py-4">
                  <p className="font-black text-center text-slate-700 text-xs tracking-widest uppercase mb-1">
                    KEY
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center" style={{ width: 110 }}>
                      <div style={{ flex: 1, height: 3, background: "#1e293b" }} />
                      <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #1e293b" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Solid Line</p>
                      <p className="text-[11px] text-slate-500">Reporting Relationship</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center" style={{ width: 110 }}>
                      <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderRight: "10px solid #1e293b" }} />
                      <div style={{ flex: 1, height: 3, backgroundImage: "repeating-linear-gradient(to right,#1e293b 0,#1e293b 7px,transparent 7px,transparent 13px)" }} />
                      <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #1e293b" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Dashed Line</p>
                      <p className="text-[11px] text-slate-500">Flow of Information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: Organogram (Vertical Flow) */}
         <section className="relative py-24 overflow-hidden ">
  <div className="absolute -left-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-50"></div>
  <div className="absolute -right-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-50"></div>

  <div className="mx-auto relative z-10 ">
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4  tracking-tight">
          Organogram
        </h2>
        <p className="text-lg text-slate-700 font-medium mx-auto">
          Structured Authority Flow with Defined Accountability Layers
        </p>
      </motion.div>
    </div>

    <div className="container overflow-x-auto pb-12 relative z-20 custom-scrollbar">
      <div className="flex flex-col items-center   relative ">
        {/* LEVEL 0: BOARD OF DIRECTORS */}
        <div className="relative">
          <OrgNode title="BOARD OF DIRECTORS" isGolden={true} />
        </div>

        {/* Vertical line from Board to Principal */}
        <div className="relative w-full flex justify-center " style={{ height: "60px" }}>
          <div className="w-[3px] bg-watney h-full pointer-events-none" />
        </div>

        {/* LEVEL 1: PRINCIPAL */}
        <div className=" relative">
          <OrgNode title="PRINCIPAL" subtitle="Ruseel Kabir" />
        </div>

        {/* Vertical line from Principal to Level 2 */}
        <div className="relative w-full flex justify-center mb-8" style={{ height: "40px" }}>
          <div className="w-[3px] bg-watney h-full pointer-events-none" />
        </div>

        {/* LEVEL 2: 6 Department Heads */}
        <div className="relative w-full" style={{ marginBottom: "60px" }}>
          {/* Horizontal spine  all 6 nodes */}
          <div className="absolute -top-8 left-0 right-0 h-[3px] bg-watney pointer-events-none" style={{
            width: "100%",
            maxWidth: "962px",
            left: "50%",
            transform: "translateX(-50%)"
          }} />

          {/* 6 nodes grid */}
          <div className="flex justify-center gap-8 mt-2.5 flex-wrap">
            {/* Node 1 */}
            <div className="relative" style={{ marginTop: "0px" }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="HEAD OF MARKETING" subtitle="Tahamidul Mamur" />
            </div>

            {/* Node 2 */}
            <div className="relative" style={{ marginTop: "0px" }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="HEAD OF ADMIN AND REGISTRY" subtitle="Dr. Rahman Hasan" />
            </div>

            {/* Node 3 */}
            <div className="relative" style={{ marginTop: "0px" }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="HEAD OF FINANCE" subtitle="Md Kamal Pervez" />
            </div>

            {/* Node 4 */}
            <div className="relative" style={{ marginTop: "0px" }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="HEAD OF HUMAN RESOURCES" subtitle="Bilkis Akter Mily" />
            </div>

            {/* Node 5 */}
            <div className="relative" style={{ marginTop: "0px" }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="HEAD OF ACADEMIC" subtitle="Syed Jahedul Islam" />
            </div>

            {/* Node 6 */}
            <div className="relative" style={{ marginTop: "0px" }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="HEAD OF QUALITY ASSURANCE" subtitle="Kishour Zadid" />
            </div>
          </div>
        </div>

        {/* LEVEL 3: Sub-nodes for selected departments */}
        <div className="relative w-full" >
          <div className="flex justify-center gap-8 flex-wrap">
            {/* From Node 1 - Marketing Officer */}
            <div className="relative right-72 -mt-6"  >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="MARKETING OFFICER" />
            </div>

            {/* From Node 2 - Admin Officer */}
            <div className="flex flex-col gap-4">

              <div className="relative right-72 top-40 -mt-6">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "190px", top: "-190px" }} />
                <OrgNode title="ACADEMIC ADMINISTRATOR" subtitle="Afruza Rahman" />
              </div>
              <div className="relative right-24 top-16">
                <div className="absolute mt-16 right-44 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none rotate-90" style={{ height: "40px", top: "-40px" }} />
                <OrgNode title="STUDENT ENGAGEMENT OFFICER" subtitle="ASM MOHOSIN ABDULLAH" />
              </div>
            </div>

            {/* From Node 4 - Accounts Admin */}
            <div className="relative right-24 -mt-6">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
              <OrgNode title="ACCOUNTS ADMINISTRATOR" subtitle="M. Hasan" />
            </div>

            {/* From Node 5 - Programme & Team */}
            <div className="flex flex-col gap-4">
              <div className="relative   -top-52 left-72">
                <div className="absolute top-0 right-80 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "40px", top: "-40px" }} />
                <OrgNode title="PROGRAMME LEADER" />
              </div>
              <div className="relative -top-0 left-32">
                {/* Personal Tutor */}
                <div className="flex gap-4">

                  <div className="absolute top-0 right-40 transform -translate-x-1/2 w-[3px] bg-watney pointer-events-none" style={{ height: "270px", top: "-280px" }} />
                <div className="relative left-24 -mt-4">
                  <OrgNode title="PERSONAL TUTOR" />
                </div>
                {/* Assessors added beside Personal Tutor */}
                <div className="relative left-28 -top-4">
                  <div className="absolute mt-16 right-44  transform -translate-x-1/3 w-[3px] bg-watney pointer-events-none rotate-90" style={{ height: "40px", top: "-40px" }} />
                  <OrgNode title="ASSESSORS" />
                </div>
                {/* Lecturer */}
                <div className="relative left-32 -top-4">
                  <div className="absolute mt-16 right-44  transform -translate-x-1/3 w-[3px] bg-watney pointer-events-none rotate-90" style={{ height: "40px", top: "-40px" }} />
                  <OrgNode title="LECTURER" />
                </div>
                {/* Internal Verifier added beside Lecturer */}
                <div className="relative left-36 -top-4">
                  <div className="absolute mt-16 right-44  transform -translate-x-1/3 w-[3px] bg-watney pointer-events-none rotate-90" style={{ height: "40px", top: "-40px" }} />
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                    Governance vs Management
                  </h2>
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
                      {[
                        "Strategy",
                        "Oversight",
                        "Scrutiny",
                        "Policy approval",
                      ].map((item, i) => (
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
                      <h3 className="text-3xl font-bold ">
                        Executive Management
                      </h3>
                    </div>
                    <ul className="space-y-6">
                      {[
                        "Implementation",
                        "Operational delivery",
                        "Staffing",
                        "Student services",
                      ].map((item, i) => (
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                    Accountability Statement
                  </h2>
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
                  <p className="text-xl md:text-2xl font-semibold  leading-relaxed text-balance mb-6">
                    Watney College maintains a clear separation between
                    governance and executive management. Governance bodies do
                    not manage day-to-day operations, and executive management
                    does not override academic or governance decisions.
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
