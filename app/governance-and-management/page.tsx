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
  Eye,
  Shield,
  User,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

const Tree = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.Tree),
  { ssr: false },
);

const TreeNode = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.TreeNode),
  { ssr: false },
);
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
        ${isGolden ? "text-black" : "text-black"}`}
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
    name: "Dr S Alam",
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
    name: "Farhana Akter",
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

// 2. Reusable Node components for cleaner code
const RootNode = ({ title }: { title: string }) => (
  <div className="relative inline-block">
    <div
      className="inline-flex flex-col items-center justify-center px-6 py-4 shadow-md min-w-[240px] relative z-20"
      style={{
        backgroundColor: "#0D2B55",
        color: "#ffffff",
        borderRadius: "8px",
      }}
    >
      <span className="font-bold text-[16px]">{title}</span>
    </div>
  </div>
);

const ChildNode = ({
  title,
  bgColor,
  textColor,
  borderColor = "transparent",
}: {
  title: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
}) => (
  <div className="relative inline-block">
    <div
      className="inline-flex flex-col items-center justify-center px-4 py-3 shadow-sm min-w-[150px] relative z-20 max-w-[160px]"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: "8px",
        border: `1px solid ${borderColor}`,
      }}
    >
      <span className="font-bold text-[14px] p-2 text-center leading-snug ">
        {title}
      </span>
    </div>
  </div>
);

// Functional Structure chart: mirrors "5.2. Functional Structure.pdf".
// Drawn as one SVG so connectors stay aligned to the boxes at every width.
const FS_NAVY = "#0b1b4d";
const FS_RED = "#e5262b";
const FS_BLUE = "#0b5fff";
const FS_GREEN = "#0b8a6f";
const FS_CRIMSON = "#d6004f";
const FS_PURPLE = "#5b1a9e";

const FS_ROW2_TOP = 277;
const FS_ROW2_BOTTOM = 393;
const FS_ROW3_TOP = 483;
const FS_BOX_HEIGHT = 116;
const FS_ICON_RADIUS = 30;

const functionalNodes: {
  x: number;
  width: number;
  top: number;
  color: string;
  icon: LucideIcon;
  solidIcon?: boolean;
  lines: string[];
}[] = [
  { x: 30, width: 188, top: FS_ROW2_TOP, color: FS_BLUE, icon: Eye, lines: ["College Oversight", "Board"] },
  { x: 263, width: 190, top: FS_ROW2_TOP, color: FS_GREEN, icon: GraduationCap, lines: ["Academic Board"] },
  { x: 498, width: 216, top: FS_ROW2_TOP, color: FS_CRIMSON, icon: Shield, solidIcon: true, lines: ["Audit, Risk &", "Remuneration Committee"] },
  { x: 748, width: 184, top: FS_ROW2_TOP, color: FS_PURPLE, icon: User, solidIcon: true, lines: ["Principal's", "Executive Group"] },
  { x: 60, width: 172, top: FS_ROW3_TOP, color: FS_GREEN, icon: Award, lines: ["Quality Assurance", "Committee"] },
  { x: 270, width: 176, top: FS_ROW3_TOP, color: FS_GREEN, icon: BarChart3, lines: ["Assessment &", "Progression Board"] },
  { x: 483, width: 170, top: FS_ROW3_TOP, color: FS_GREEN, icon: BookOpen, lines: ["Programme", "Committee"] },
  { x: 742, width: 196, top: FS_ROW3_TOP, color: FS_PURPLE, icon: Users, solidIcon: true, lines: ["Student Engagement &", "WBL Committee"] },
];

const FsArrowUp = ({ x, y }: { x: number; y: number }) => (
  <polygon
    points={`${x},${y} ${x - 6},${y + 11} ${x + 6},${y + 11}`}
    fill={FS_NAVY}
  />
);

// White box whose top border opens around the icon sitting on it
const FsBox = ({
  x,
  y,
  width,
  height,
  color,
  gap,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  gap: number;
}) => {
  const r = 12;
  const cx = x + width / 2;
  const right = x + width;
  const bottom = y + height;
  return (
    <>
      <rect x={x} y={y} width={width} height={height} rx={r} fill="#ffffff" />
      <path
        d={`M${cx + gap} ${y} H${right - r} A${r} ${r} 0 0 1 ${right} ${y + r} V${bottom - r} A${r} ${r} 0 0 1 ${right - r} ${bottom} H${x + r} A${r} ${r} 0 0 1 ${x} ${bottom - r} V${y + r} A${r} ${r} 0 0 1 ${x + r} ${y} H${cx - gap}`}
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
    </>
  );
};

const FsIcon = ({
  cx,
  cy,
  color,
  icon: Icon,
  solid = false,
  radius = FS_ICON_RADIUS,
}: {
  cx: number;
  cy: number;
  color: string;
  icon: LucideIcon;
  solid?: boolean;
  radius?: number;
}) => {
  const size = radius * 1.1;
  return (
    <>
      <circle cx={cx} cy={cy} r={radius} fill={color} />
      <Icon
        x={cx - size / 2}
        y={cy - size / 2}
        width={size}
        height={size}
        color="#ffffff"
        fill={solid ? "#ffffff" : "none"}
        strokeWidth={2.2}
      />
    </>
  );
};

const FunctionalStructureChart = () => (
  <svg
    viewBox="0 0 960 620"
    role="img"
    aria-labelledby="functional-structure-title"
    className="w-full min-w-[760px] max-w-[1040px] mx-auto h-auto"
  >
    <title id="functional-structure-title">
      Functional structure: the College Oversight Board, Academic Board, Audit,
      Risk and Remuneration Committee and Principal's Executive Group report to
      the Board of Directors. The Quality Assurance Committee, Assessment and
      Progression Board and Programme Committee report to the Academic Board.
      The Student Engagement and WBL Committee reports to the Principal's
      Executive Group. Information flows both ways between the Board of
      Directors and the four bodies reporting to it, and between those bodies.
    </title>

    {/* Legend */}
    <rect x={23} y={24} width={224} height={143} rx={10} fill="#ffffff" stroke={FS_NAVY} strokeWidth={2} />
    <line x1={37} y1={49} x2={107} y2={49} stroke={FS_NAVY} strokeWidth={2} />
    <text x={122} y={51} fontSize={14} fontWeight={700} fill={FS_NAVY}>Solid Line</text>
    <text x={122} y={70} fontSize={12} fill={FS_NAVY}>(One Way)</text>
    <text x={122} y={87} fontSize={12} fill={FS_NAVY}>Reporting Relationship</text>
    <line x1={37} y1={115} x2={107} y2={115} stroke={FS_RED} strokeWidth={2.5} strokeDasharray="2 3" />
    <text x={122} y={117} fontSize={14} fontWeight={700} fill={FS_NAVY}>Dotted Line</text>
    <text x={122} y={136} fontSize={12} fill={FS_NAVY}>(Both way)</text>
    <text x={122} y={153} fontSize={12} fill={FS_NAVY}>Flow of Information</text>

    {/* Dotted: two-way flow of information */}
    <g fill="none" stroke={FS_RED} strokeWidth={2.5} strokeDasharray="2 3">
      <path d="M522 167 V223" />
      <path d={`M170 ${FS_ROW2_TOP} V223 H798 V${FS_ROW2_TOP}`} />
      <path d="M218 332 H263" />
      <path d="M453 332 H498" />
      <path d="M714 332 H748" />
    </g>

    {/* Solid: reporting lines to the Board of Directors */}
    <g fill="none" stroke={FS_NAVY} strokeWidth={2}>
      <path d="M124 201 H840" />
      <path d="M490 201 V170" />
      <path d={`M124 201 V${FS_ROW2_TOP - 37}`} />
      <path d={`M358 201 V${FS_ROW2_TOP - 37}`} />
      <path d={`M606 201 V${FS_ROW2_TOP - 37}`} />
      <path d={`M840 201 V${FS_ROW2_TOP - 37}`} />
    </g>
    <FsArrowUp x={490} y={168} />
    <FsArrowUp x={124} y={202} />
    <FsArrowUp x={358} y={202} />
    <FsArrowUp x={606} y={202} />
    <FsArrowUp x={840} y={202} />

    {/* Solid: committees reporting to Academic Board and Principal's Executive Group */}
    <g fill="none" stroke={FS_NAVY} strokeWidth={2}>
      <path d={`M358 ${FS_ROW2_BOTTOM + 2} V${FS_ROW3_TOP - 37}`} />
      <path d="M146 425 H568" />
      <path d={`M146 425 V${FS_ROW3_TOP - 37}`} />
      <path d={`M568 425 V${FS_ROW3_TOP - 37}`} />
      <path d={`M840 ${FS_ROW2_BOTTOM + 2} V${FS_ROW3_TOP - 37}`} />
    </g>
    <FsArrowUp x={358} y={FS_ROW2_BOTTOM + 1} />
    <FsArrowUp x={358} y={426} />
    <FsArrowUp x={146} y={426} />
    <FsArrowUp x={568} y={426} />
    <FsArrowUp x={840} y={FS_ROW2_BOTTOM + 1} />

    {/* Board of Directors */}
    <FsBox x={326} y={64} width={328} height={103} color={FS_BLUE} gap={39} />
    <FsIcon cx={490} cy={64} color={FS_BLUE} icon={Users} solid radius={32} />
    <text x={490} y={124} textAnchor="middle" fontSize={30} fontWeight={800} fill={FS_NAVY}>
      Board of Directors
    </text>

    {/* Committees */}
    {functionalNodes.map((node) => {
      const cx = node.x + node.width / 2;
      const firstLine = node.top + (node.lines.length === 1 ? 74 : 62);
      return (
        <g key={node.lines.join(" ")}>
          <FsBox
            x={node.x}
            y={node.top}
            width={node.width}
            height={FS_BOX_HEIGHT}
            color={node.color}
            gap={FS_ICON_RADIUS + 7}
          />
          <FsIcon
            cx={cx}
            cy={node.top}
            color={node.color}
            icon={node.icon}
            solid={node.solidIcon}
          />
          <text textAnchor="middle" fontSize={15} fontWeight={700} fill={FS_NAVY}>
            {node.lines.map((line, index) => (
              <tspan key={line} x={cx} y={firstLine + index * 23}>
                {line}
              </tspan>
            ))}
          </text>
        </g>
      );
    })}
  </svg>
);

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
                className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Watney College operates a transparent and accountable governance
                framework with a clear separation between strategic oversight
                and executive management.
              </motion.p>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    Board of{" "}
                    <span className="text-watney-blue-primary">Directors</span>
                  </h2>
                  <p className="text-lg text-black mx-auto leading-relaxed max-w-5xl">
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
                        <td className="p-6 font-bold text-black whitespace-nowrap">
                          {director.name}
                        </td>
                        <td className="p-6 text-black whitespace-nowrap">
                          {director.role}
                        </td>
                        <td className="p-6 text-black italic max-w-md">
                          {director.expertise}
                        </td>
                        <td className="p-6 text-center">
                          <span
                            className={`px-4 py-1.5 rounded-full text-xs font-bold border ${
                              director.type === "Executive"
                                ? "bg-blue-50 text-watney-blue-primary border-blue-100"
                                : "bg-slate-50 text-black border-slate-200"
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                  Functional{" "}
                  <span className="text-watney-blue-primary">Structure</span>
                </h2>
                {/* <p className="text-lg text-black mx-auto leading-relaxed max-w-5xl">
                  Solid lines show one-way reporting relationships. Dotted
                  lines show the two-way flow of information.
                </p> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-x-auto relative z-20"
              >
                <FunctionalStructureChart />
              </motion.div>
            </div>
          </section>

          {/* SECTION: Organogram (Vertical Flow) */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute -left-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-0 opacity-50"></div>
            <div className="absolute -right-96 top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none z-0 opacity-50"></div>
            <motion.div
              className="mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Organogram
              </h2>
              <p className="text-lg text-black mx-auto leading-relaxed max-w-5xl">
                Full staffing hierarchy from Board of Directors through to
                academic delivery roles.
              </p>
            </motion.div>
            <div className="w-full overflow-x-auto custom-scrollbar">
              <div className="min-w-max flex flex-col items-center w-full mx-auto org-chart-dotted scale-75">
                <Tree
                  lineWidth={"2px"}
                  lineColor={"#93BDD4"}
                  lineHeight={"80px"}
                  nodePadding={"5px"}
                  lineStyle="dashed"
                  label={<RootNode title="Board of Directors" />}
                >
                  {/* PRINCIPAL (Top Tier) */}
                  <TreeNode
                    label={
                      <ChildNode
                        title="Principal"
                        bgColor="#0D2B55"
                        textColor="#ffffff"
                      />
                    }
                  >
                    {/* 1. MARKETING */}
                    <TreeNode
                      label={
                        <ChildNode
                          title="Head of Marketing"
                          bgColor="#1B6CA8"
                          textColor="#ffffff"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <ChildNode
                            title="Marketing Officer"
                            bgColor="#EBF5FB"
                            textColor="#0D2B55"
                            borderColor="#93BDD4"
                          />
                        }
                      />
                    </TreeNode>

                    {/* 2. ADMIN & REGISTRY */}
                    <TreeNode
                      label={
                        <ChildNode
                          title="Head of Admin & Registry"
                          bgColor="#1B6CA8"
                          textColor="#ffffff"
                        />
                      }
                    >
                      <TreeNode
                      
                        label={
                          <ChildNode
                            title="Administrator"
                            bgColor="#EBF5FB"
                            textColor="#0D2B55"
                            borderColor="#93BDD4"
                           
                          />
                        }
                      />
                      <TreeNode
                        label={
                          <ChildNode
                            title={`Student Engagement\nOfficer`}
                            bgColor="#EBF5FB"
                            textColor="#0D2B55"
                            borderColor="#93BDD4"
                          />
                        }
                      />
                    </TreeNode>

                    {/* 3. FINANCE */}
                    <TreeNode
                      label={
                        <ChildNode
                          title="Head of Finance"
                          bgColor="#1B6CA8"
                          textColor="#ffffff"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <ChildNode
                            title={`Accounts\nAdministrator`}
                            bgColor="#EBF5FB"
                            textColor="#0D2B55"
                            borderColor="#93BDD4"
                          />
                        }
                      />
                    </TreeNode>

                    {/* 4. HR */}
                    <TreeNode
                      label={
                        <ChildNode
                          title={`Head of Human\nResources`}
                          bgColor="#1B6CA8"
                          textColor="#ffffff"
                        />
                      }
                    />

                    {/* 5. ACADEMIC */}
                    <TreeNode
                      label={
                        <ChildNode
                          title="Head of Academic"
                          bgColor="#1B6CA8"
                          textColor="#ffffff"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <ChildNode
                            title="Programme Leader"
                            bgColor="#D6EAF8"
                            textColor="#0D2B55"
                            borderColor="#93BDD4"
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <ChildNode
                              title="Personal Tutor"
                              bgColor="#D6EAF8"
                              textColor="#0D2B55"
                              borderColor="#93BDD4"
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChildNode
                              title="Lecturer"
                              bgColor="#D6EAF8"
                              textColor="#0D2B55"
                              borderColor="#93BDD4"
                            />
                          }
                        />
                        <TreeNode
                          label={
                            <ChildNode
                              title="Assessors"
                              bgColor="#D6EAF8"
                              textColor="#0D2B55"
                              borderColor="#93BDD4"
                            />
                          }
                        />
                      </TreeNode>
                    </TreeNode>

                    {/* 6. QA */}
                    <TreeNode
                      label={
                        <ChildNode
                          title={`Head of Quality\nAssurance`}
                          bgColor="#1B6CA8"
                          textColor="#ffffff"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <ChildNode
                            title="Internal Verifier"
                            bgColor="#EBF5FB"
                            textColor="#0D2B55"
                            borderColor="#93BDD4"
                          />
                        }
                      />
                    </TreeNode>
                  </TreeNode>
                </Tree>
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
                <p className="text-black text-base leading-relaxed max-w-3xl mx-auto">
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
                            <p className="text-xs text-black mb-2">
                              <span className="font-medium">Reports to:</span>{" "}
                              {committee.reportsTo}
                              {committee.note && (
                                <span className="block text-[11px] text-black mt-0.5">
                                  ({committee.note})
                                </span>
                              )}
                            </p>
                            <p className="text-sm text-black leading-relaxed">
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
                <p className="text-black text-base leading-relaxed max-w-3xl mx-auto">
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
                        className="flex items-center gap-3 "
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
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
                    <h3 className="text-2xl font-bold text-black">
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
                        className="flex items-center gap-3 text-black"
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
                <p className="text-black text-base leading-relaxed max-w-3xl mx-auto">
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
                        <th className="text-left py-4 px-4 text-sm font-bold uppercase tracking-wider text-black">
                          Document
                        </th>
                        <th className="text-left py-4 px-4 text-sm font-bold uppercase tracking-wider text-black">
                          Year
                        </th>
                        <th className="text-right py-4 px-4 text-sm font-bold uppercase tracking-wider text-black">
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
                              <span className="text-sm font-medium text-black">
                                Audited Financial Accounts
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm text-black">
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
                  <p className="text-xs text-black">
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
                    <h4 className="text-lg font-bold text-black mb-2">
                      Accountability Statement
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
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
