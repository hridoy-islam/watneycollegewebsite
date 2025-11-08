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
      "Use VLEs, MS Teams, and digital tools to enhance learning",
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
      "Use VLEs, MS Teams, and digital tools to enhance learning",
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
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find(job => job.slug === slug);
}

export function getSuggestedJobs(currentJobId: string, limit: number = 3): Job[] {
  return jobs.filter(job => job.id !== currentJobId).slice(0, limit);
}