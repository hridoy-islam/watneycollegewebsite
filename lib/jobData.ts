export interface Job {
  id: string;
  slug: string;
  title: string;
  type: string; // e.g., "Permanent"
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  deadline: string;
  link: string;

  // 🆕 Additional fields for detailed job info
  hours: string;
  location: string;
  remoteWorking: string;
  // company: string;
}


export const jobs: Job[] = [
  // {
  //   id: "2",
  //   slug: "senior-frontend-developer",
  //   title: "Senior Frontend Developer",
  //   type: "Full-time",
  //   salary: "$120,000 - $160,000",
  //   description: "We are seeking an experienced Senior Frontend Developer to join our dynamic team. You will be responsible for building scalable, responsive web applications using modern JavaScript frameworks and best practices.",
  //   responsibilities: [
  //     "Develop and maintain high-quality web applications using React, Next.js, and TypeScript",
  //     "Collaborate with designers and backend developers to implement new features",
  //     "Optimize applications for maximum speed and scalability",
  //     "Mentor junior developers and conduct code reviews",
  //     "Participate in architectural decisions and technical planning"
  //   ],
  //   requirements: [
  //     "5+ years of experience in frontend development",
  //     "Expert knowledge of React, Next.js, and TypeScript",
  //     "Strong understanding of HTML5, CSS3, and modern CSS frameworks",
  //     "Experience with state management libraries (Redux, Zustand, etc.)",
  //     "Excellent problem-solving skills and attention to detail",
  //     "Bachelor's degree in Computer Science or equivalent experience"
  //   ],
  //   benefits: [
  //     "Competitive salary and equity package",
  //     "Health, dental, and vision insurance",
  //     "401(k) matching",
  //     "Flexible work arrangements",
  //     "Professional development budget",
  //     "Unlimited PTO"
  //   ],
  //   postedDate: "2024-10-01",
  //   deadline: "2024-10-01",
  // },

  {
   id: "1",
    slug: "health-and-social-care-teacher",
    title: "Health & Social Care Teacher",
    type: "Permanent",
    salary: "", // Not specified
    description:
      "Watney College is a dynamic higher education provider offering flexible, student-focused learning. We foster diversity, personal development, and academic achievement, ensuring students benefit from innovation and choice in their education.\n\nThe teaching role involves designing and delivering engaging lessons, developing learning materials, and ensuring students meet learning outcomes. Teaching can be face-to-face or online, with a focus on interactive learning, assessment, and academic support.",
    responsibilities: [
      "Deliver lectures, seminars, and tutorials, maintaining accurate attendance records",
      "Use WCSMS (VLE), MS Teams, and digital tools to enhance learning",
      "Develop and update teaching materials, ensuring content aligns with module specifications",
      "Engage students in sessions and encourage active participation",
      "Suggest improvements to enhance the student academic experience",
      "Set and assess coursework, ensuring 90%+ submission rates",
      "Provide timely, constructive feedback on assessments",
      "Participate in moderation and standardisation meetings",
      "Identify and report academic misconduct where necessary",
      "Address student engagement and performance issues, referring them to specialist services as needed",
      "Support students with Learning Support Plans, ensuring progress is monitored",
      "Provide pastoral care and signpost students to appropriate resources",
      "Submit module evaluation reports and contribute to programme reviews",
      "Participate in Programme Committee meetings to improve teaching quality",
      "Engage in academic governance and accreditation processes",
      "Coordinate with support staff and academic colleagues to enhance student learning",
      "Manage module design, delivery, and assessment methods",
      "Support student recruitment, marketing, and academic interviews",
      "Address quality concerns, escalating serious issues when necessary"
    ],
    requirements: [
      "Strong understanding of HE quality assurance and validation",
      "Ability to engage and inspire students using varied teaching methods",
      "Subject expertise with experience in teaching and curriculum development",
      "Excellent communication, collaboration, and problem-solving skills",
      "Strong digital proficiency for teaching and assessment",
      "Master’s degree in a relevant field",
      "Fellowship of Advance HE (or willingness to obtain within 12 months)",
      "Experience in technology-enhanced learning and curriculum development",
      "Commitment to continuous improvement and high-performance culture",
      "DBS check required as part of the application process"
    ],
    benefits: ["Hybrid working – work remotely up to 2 days per week"],
    postedDate: "2025-10-09",
    deadline: "2025-12-31",
    link: "https://app.watneycollege.co.uk/jobs/apply/690f54d56e863e83bc69b6da",

    // 🆕 New fields
    hours: "Part time",
    location: "80-82 Nelson Street, London, E1 2DY",
    remoteWorking: "Hybrid - work remotely up to 2 days per week",
    // company: "WATNEY COLLEGE LIMITED"
  },
  {
   id: "2",
    slug: "teacher-business-management",
    title: "Teacher - Business Management",
    type: "Permanent",
    salary: "", // Not specified
    description:
      "Watney College is a dynamic higher education provider offering flexible, student-focused learning. We foster diversity, personal development, and academic achievement, ensuring students benefit from innovation and choice in their education.\n\nThe teaching role involves designing and delivering engaging lessons, developing learning materials, and ensuring students meet learning outcomes. Teaching can be face-to-face or online, with a focus on interactive learning, assessment, and academic support.",
    responsibilities: [
      "Deliver lectures, seminars, and tutorials, maintaining accurate attendance records",
      "Use WCSMS (VLE), MS Teams, and digital tools to enhance learning",
      "Develop and update teaching materials, ensuring content aligns with module specifications",
      "Engage students in sessions and encourage active participation",
      "Suggest improvements to enhance the student academic experience",
      "Set and assess coursework, ensuring 90%+ submission rates",
      "Provide timely, constructive feedback on assessments",
      "Participate in moderation and standardisation meetings",
      "Identify and report academic misconduct where necessary",
      "Address student engagement and performance issues, referring them to specialist services as needed",
      "Support students with Learning Support Plans, ensuring progress is monitored",
      "Provide pastoral care and signpost students to appropriate resources",
      "Submit module evaluation reports and contribute to programme reviews",
      "Participate in Programme Committee meetings to improve teaching quality",
      "Engage in academic governance and accreditation processes",
      "Coordinate with support staff and academic colleagues to enhance student learning",
      "Manage module design, delivery, and assessment methods",
      "Support student recruitment, marketing, and academic interviews",
      "Address quality concerns, escalating serious issues when necessary"
    ],
    requirements: [
      "Strong understanding of HE quality assurance and validation",
      "Ability to engage and inspire students using varied teaching methods",
      "Subject expertise with experience in teaching and curriculum development",
      "Excellent communication, collaboration, and problem-solving skills",
      "Strong digital proficiency for teaching and assessment",
      "Master’s degree in a relevant field",
      "Fellowship of Advance HE (or willingness to obtain within 12 months)",
      "Experience in technology-enhanced learning and curriculum development",
      "Commitment to continuous improvement and high-performance culture",
      "DBS check required as part of the application process"
    ],
    benefits: ["Hybrid working – work remotely up to 2 days per week"],
    postedDate: "2025-10-09",
    deadline: "2025-11-08",
    link: "https://app.watneycollege.co.uk/jobs/apply/68e7dd8a7bf87c65695a62ea",

    // 🆕 New fields
    hours: "Part time",
    location: "80-82 Nelson Street, London, E1 2DY",
    remoteWorking: "Hybrid - work remotely up to 2 days per week",
    // company: "WATNEY COLLEGE LIMITED"
  },{
  "id": "3",
  "slug": "admin-and-marketing-executive",
  "title": "Admin and Marketing Executive",
  "type": "Part-Time",
  "salary": "", 
  "description": "Watney College is a London-based higher education provider delivering nationally recognised qualifications in health and social care, alongside other vocational and professional programmes. We are committed to accessible, high-quality education, strong student support, and close partnerships with employers across the healthcare sector.\n\nAs the College continues to grow, the Admin and Marketing Executive role supports both operational and marketing functions. The position combines office administration, student and applicant coordination, and marketing support, providing an opportunity to contribute to the smooth running of the College while supporting student recruitment activities.",
  "responsibilities": [
    "Manage day-to-day administrative operations, including correspondence, diary management, meeting coordination, and general office support.",
    "Maintain accurate student and applicant records, filing systems, and documentation in accordance with data protection and confidentiality requirements.",
    "Provide administrative support for finance-related activities, including invoicing, purchase orders, expense monitoring, and supplier liaison.",
    "Coordinate internal and external meetings, prepare agendas, take accurate minutes, and monitor follow-up actions.",
    "Support the student admissions and enrolment process, including processing applications, preparing enrolment documentation, and setting up student accounts.",
    "Assist in the planning and delivery of marketing and student recruitment campaigns across paid, organic, email, and social media channels.",
    "Maintain marketing calendars, campaign schedules, and project tracking systems.",
    "Liaise with internal teams and external partners to ensure recruitment materials and course information are accurate.",
    "Assist with the setup, monitoring, and optimisation of digital marketing campaigns across Google Ads, Meta, and LinkedIn.",
    "Help organise open days, information sessions, and student recruitment events.",
    "Draft, schedule, and publish engaging content across social media, email marketing platforms, and the College website.",
    "Maintain a consistent and professional brand identity across all marketing communications and promotional materials.",
    "Ensure website content and course information remain accurate, relevant, and up to date.",
    "Act as a professional first point of contact for prospective students, applicants, and partners.",
    "Coordinate communication between applicants, students, employer partners, and internal teams to ensure an excellent applicant experience.",
    "Build and maintain positive relationships with students, partners, and stakeholders.",
    "Produce regular reports on enquiries, student recruitment activity, and marketing campaign performance.",
    "Maintain CRM systems and contact databases, ensuring information is accurate, complete, and up to date.",
    "Monitor application pipelines, key deadlines, project milestones, and performance indicators.",
    "Identify and escalate issues where appropriate while contributing to the continuous improvement of administrative and recruitment processes."
  ],
  "requirements": [
    "Degree-level qualification in business, administration, marketing, communications, or related discipline, or equivalent relevant professional experience.",
    "Excellent organisational and time management skills with the ability to manage multiple priorities and deadlines.",
    "Strong written and verbal communication skills with a professional approach.",
    "Proficiency in Microsoft Office and/or Google Workspace.",
    "Experience with social media platforms, email marketing systems, or CRM software is advantageous.",
    "An understanding of, or genuine interest in, the higher education, further education, or healthcare training sector.",
    "Proactive, reliable, highly organised, with excellent attention to detail.",
    "Ability to work independently while contributing effectively within a collaborative team environment."
  ],
  "benefits": [
    "Opportunity to shape and develop the role as the College continues to grow.",
    "Exposure to a broad range of higher education operations, student admissions, marketing, and recruitment.",
    "Opportunity to work closely with the College's senior management team in a supportive environment.",
    "Ongoing professional development and opportunities for increased responsibility and career progression.",
    "Flexible part-time working arrangements with salary and benefits calculated on a pro rata basis."
  ],
  "postedDate": "2026-06-09",
  "deadline": "2026-12-31",
  "link": "https://app.watneycollege.co.uk/jobs/apply/6a3aada6af946e5c9db69bdf",
  "hours": "Part time",
  "location": "London (Whitechapel)",
  "remoteWorking": "Flexible part-time working arrangements"
},
  {
    id: "4",
    slug: "external-member",
    title: "External Member",
    type: "Part-Time",
    salary: "",
    description:
      "Watney College is a growing independent college in East London committed to delivering high-quality further and higher education. We offer a range of professional and vocational qualifications accredited by recognised awarding bodies such as Nqual, ATHE and OTHM. We are working towards partnerships with UK universities and registration with the Office for Students (OfS), aiming to establish ourselves as a trusted higher education provider.\n\nWe are seeking an External Member to provide independent external scrutiny, specialist advice and constructive challenge to the College Oversight Board (COB), Audit, Remuneration and Risk Committee (ARRC), Board of Directors (BoD) or other designated committees.",
    responsibilities: [
      "Provide independent external scrutiny, specialist advice and constructive challenge to the College Oversight Board, Audit, Remuneration and Risk Committee, Board of Directors or other committees to which they are appointed.",
      "Attend scheduled committee meetings, review papers in advance and contribute to discussions in a professional, objective and evidence-based manner.",
      "Review reports, policies, action trackers, risk registers, audit evidence, quality assurance records, student experience information and performance data submitted for governance consideration.",
      "Support the College Oversight Board by contributing to oversight of learner experience, academic quality, student outcomes, complaints, progression, support arrangements and institutional improvement.",
      "Support the Audit, Remuneration and Risk Committee by reviewing risk management, internal controls, audit findings, compliance evidence, financial sustainability, remuneration matters and mitigation actions where required.",
      "Support the Board of Directors by providing external perspective on strategic priorities, governance effectiveness, regulatory readiness, institutional sustainability and accountability.",
      "Question whether reports and recommendations are sufficiently evidenced, proportionate, risk-aware and aligned with relevant terms of reference, College policies and regulatory expectations.",
      "Contribute to preparations for OfS registration, awarding organisation activity, partner review, external audit, internal review, quality monitoring and other regulatory or assurance activity where relevant to their expertise.",
      "Assist in monitoring completion of agreed actions, recommendations and matters arising from committee discussions where these relate to the External Member role.",
      "Promote high standards of integrity, safeguarding, equality, diversity, inclusion, confidentiality, data protection and public accountability within College governance.",
      "Declare any actual, potential or perceived conflicts of interest and withdraw from discussions where required under College procedures.",
      "Operate within the advisory and assurance remit of the appointment, maintaining a clear distinction between external governance contribution and operational management.",
      "Undertake other proportionate committee-related duties agreed by the relevant Chair, Principal or Board of Directors in line with the role of an External Member."
    ],
    requirements: [
  "The post holder must have good interpersonal, organisational and communication skills in English.",
  "Should have appropriate professional knowledge, sector experience or specialist expertise relevant to governance, education, quality assurance, finance, audit, risk, safeguarding, compliance, student experience or organisational leadership.",
  "Must have relevant experience of working in an advisory, audit, governance, senior management, professional or external assurance role.",
  "Should understand the role of externality, independent scrutiny and constructive challenge within a committee or board environment.",
  "Must understand the advisory nature of the External Member role and the need to operate within agreed terms of reference, reporting arrangements and delegated authority.",
  "Able to review committee papers, policies, risk registers, financial information, quality assurance reports, action plans and performance data, identifying key issues and assurance gaps.",
  "Should be confident in asking relevant questions and providing proportionate challenge in a professional, balanced and constructive manner.",
  "Able to contribute to discussions relating to learner outcomes, academic quality, student experience, financial sustainability, risk management, safeguarding and regulatory readiness.",
  "Should understand the importance of confidentiality, data protection, safeguarding, equality, impartiality, professional boundaries and conflict of interest declarations within an education setting.",
  "Must be reliable, objective and able to work constructively with the Chair, directors, non-executive members, senior managers, academic staff, administrative staff and other committee members.",
  "Able to act independently and in the best interests of the College while respecting the distinction between governance oversight, advisory input and operational management.",
  "Should demonstrate integrity, discretion, impartiality, sound judgement and the ability to handle sensitive College matters appropriately.",
  "Must be able to attend meetings regularly, review documents in advance, provide timely comments and contribute to agreed follow-up work where required.",
  "The post holder must not have any unspent criminal convictions as per the Rehabilitation of Offenders Act 1974, subject to the nature of the appointment and relevant legal requirements.",
  "Must be able to travel and attend College meetings, external meetings or training where required for College business."
],
    benefits: [
      "Opportunity to contribute to the strategic direction and governance of a growing educational institution.",
      "Professional development and exposure to higher education governance, regulatory and quality assurance processes."
    ],
    postedDate: "2026-07-30",
    deadline: "2026-12-31",
    link: "https://app.watneycollege.co.uk/jobs/apply/6a6b15c4af946e5c9db8f641",
    hours: "As per committee meeting and advisory requirements",
    location: "80-82 Nelson Street, London, E1 2DY",
    remoteWorking: ""
  },
 {
    id: "5",
    slug: "lecturer-assessor-it-ai",
    title: "Lecturer & Assessor — IT / AI",
    type: "Permanent",
   salary: "£40,000 annual (prorata basis) — Negotiable",
    description:
      "About Watney College\nWatney College is a growing independent college in East London delivering further and higher education. We currently hold accreditation with ESB, Highfield and Focus Awards, and are working towards Office for Students (OfS) registration and university partnerships as we expand into higher education, including delivery of ATHE Level 3 qualifications.\n\nThe Role\nWe're looking for a Lecturer & Assessor to deliver high-quality teaching and assessment on our AI & Automation Practitioner apprenticeship (Level 4), working closely with the Programme Leader to plan, teach and assess against the programme specification.",
    responsibilities: [
      "Deliver lectures and learning aligned with the Programme Leader's module specification",
      "Prepare lesson plans, schemes of work and assessment materials to programme deadlines",
      "Run personal tutoring and report weekly outcomes to the Programme Leader",
      "Plan and deliver formative and summative assessments on schedule",
      "Assess learner work for authenticity, validity and sufficiency against assessment criteria, and provide timely, constructive feedback",
      "Handle late submissions, resubmissions and mitigating circumstances per UK HEI guidance",
      "Take part in internal verification and quality assurance, acting on Internal Verifier feedback",
      "Support annual programme monitoring and review with the Programme Leader and Head of Academic",
      "Attend Programme Committee and Standardisation meetings, and follow up on agreed actions",
      "Collect student feedback forms and submit them to the College Oversight Board",
      "Support PSRB visits (OfS, Pearson, partner HEIs/FECs), including outside usual teaching hours where needed",
      "Maintain your own CPD and attend College training",
      "Take on other academic duties as reasonably assigned by the Programme Leader or Head of Academic"
    ],
   requirements: [
      "Strong interpersonal, organisational and communication skills",
      "Good numeracy skills",
      "An undergraduate degree in Computer Science (or closely related), plus relevant training for your subject area",
      "Familiarity with AI/automation tools and concepts (e.g. low-/no-code platforms, prompt engineering, workflow automation) relevant to teaching this programme",
      "A completed assessor qualification (Level 3, 4 or 5)",
      "A teaching qualification appropriate to your discipline (e.g. PCE, PGCE, or Level 5 DET) — or working towards the next level",
      "Flexibility to support urgent QAA, awarding body, HEI or FEC visit requirements",
      "No unspent convictions under the Rehabilitation of Offenders Act 1974"
    ],
    benefits: [
      "Be part of a growing, ambitious college at a pivotal stage of its development",
      "Help shape the College's direction and student outcomes",
      "A collaborative, inclusive working environment",
      "Genuine professional development and leadership opportunities"
    ],
    postedDate: "2026-07-30",
    deadline: "2026-12-31",
    link: "https://app.watneycollege.co.uk/jobs/apply/6a6b14e7af946e5c9db8f63a",
    hours: "As per requirement – full time/ part time adjustments",
    location: "80-82 Nelson Street, London, E1 2DY",
    remoteWorking: "Hybrid"
}
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find(job => job.slug === slug);
}

export function getSuggestedJobs(currentJobId: string, limit: number = 3): Job[] {
  return jobs.filter(job => job.id !== currentJobId).slice(0, limit);
}