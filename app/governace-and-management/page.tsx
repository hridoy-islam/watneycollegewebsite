"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Info, Network, Building2 } from "lucide-react";

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
// -----------------------------------

export default function GovernanceAndManagementPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute right-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-180 z-10"></div>
        <div className="absolute left-[300px] top-0 w-full h-full bg-[url('/pattern/p7.png')] bg-cover bg-center pointer-events-none rotate-0 z-10"></div>

        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-breeze overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Network className="w-16 h-16 text-watney-blue-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-6  uppercase">
              Governance and <span className="text-watney-blue-primary">Management</span>
            </h1>
            <p className="text-lg  max-w-3xl mx-auto leading-relaxed">
              Watney College is committed to maintaining transparent, accountable, and effective 
              leadership to guide our academic excellence and institutional strategy.
            </p>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                Our Organizational Structure
              </h2>
              <p className="text-lg  max-w-2xl mx-auto">
                An overview of our committees, boards, and executive management hierarchy.
              </p>
            </motion.div>

            {/* Mobile scroll instruction */}
            <div className="md:hidden text-center text-sm font-medium text-slate-500 mb-6 animate-pulse">
              ← Swipe horizontally to view full chart →
            </div>

            {/* Scrollable Org Chart Wrapper */}
            <div className="w-full overflow-x-auto pb-12 custom-scrollbar relative z-20">
              {/* Added min-w-[1200px] right here so it forces the x-scroll on mobile */}
              <div className="min-w-[1200px] pt-4 flex flex-col items-center">
                
                {/* Level 1 */}
                <OrgNode title={<>Board of<br />Directors</>} />
                <VLine h="h-10" />
                
                {/* Level 2 Connector - Spans 80% to hit the centers of the adjusted columns */}
                <HLine w="w-[80%]" />

                {/* Level 2 Main Branches */}
                <div className="flex w-full justify-between">
                  
                  {/* Branch 1: College Oversight (20% width) */}
                  <div className="w-[20%] flex flex-col items-center">
                    <VLine h="h-10" />
                    <OrgNode title={<>College Oversight<br />Board</>} />
                  </div>

                  {/* Branch 2: Academic Board (30% width to allow siblings to space out) */}
                  <div className="w-[30%] flex flex-col items-center">
                    <VLine h="h-10" />
                    <OrgNode title={<>Academic<br />Board</>} />
                    
                    <VLine h="h-10" />
                    <OrgNode title={<>Quality Assurance<br />Committee</>} />
                    
                    <VLine h="h-10" />
                    <HLine w="w-1/2" />
                    <div className="flex w-full">
                      <div className="w-1/2 flex flex-col items-center px-2">
                        <VLine h="h-10" />
                        <OrgNode title={<>Assessment &<br />Progression Board</>} />
                      </div>
                      <div className="w-1/2 flex flex-col items-center px-2">
                        <VLine h="h-10" />
                        <OrgNode title={<>Programme<br />Committee</>} />
                      </div>
                    </div>
                  </div>

                  {/* Branch 3: Principals Executive Group (30% width to allow siblings to space out) */}
                  <div className="w-[30%] flex flex-col items-center">
                    <VLine h="h-10" />
                    <OrgNode title={<>Principals<br />Executive<br />Group</>} />
                    
                    <VLine h="h-10" />
                    <HLine w="w-1/2" />
                    <div className="flex w-full">
                      <div className="w-1/2 flex flex-col items-center px-2">
                        <VLine h="h-10" />
                        <OrgNode title={<>Student<br />Engagement &<br />WBL</>} />
                      </div>
                      <div className="w-1/2 flex flex-col items-center px-2">
                        <VLine h="h-10" />
                        <OrgNode title={<>All Staff<br />Meeting</>} />
                      </div>
                    </div>
                  </div>

                  {/* Branch 4: Audit, Remuneration and Risk Committee (20% width) */}
                  <div className="w-[20%] flex flex-col items-center">
                    <VLine h="h-10" />
                    <OrgNode title={<>Audit,<br />Remuneration and<br />Risk Committee</>} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}