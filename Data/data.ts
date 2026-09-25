// ===== PERSONAL INFO =====
export const BaseInfo = {
  name: "Baljeet Singh",
  position: "Senior Software Engineer",
  tagline: "Architecting high-performance systems that scale",
  description:
    "4+ years building production-grade web applications. Specialized in full-stack development, system architecture, and performance optimization. Led teams, mentored engineers, and shipped products used by 100k+ users.",
  profilePic: "/images/hero.png",
};

// ===== ABOUT SECTION =====
export const aboutInfo = {
  title: "Full-Stack Engineer | System Design | Technical Leadership",
  description:
    "With 4+ years of professional experience, I specialize in building scalable, high-performance web applications. I approach engineering with an ownership mindset—architecting systems that not only work but scale, optimizing for performance and reliability, and mentoring teams to deliver excellence.",
  yearsExp: "4+",
  appsShipped: "4",
  usersServed: "100k+",
  performanceWins: "40%",
};

// ===== CORE EXPERTISE (Previously Services) =====
export const expertiseData = [
  {
    id: 1,
    title: "Full-Stack Product Engineering",
    description: "Building end-to-end web applications from architecture to deployment. I own the entire product lifecycle.",
    icon: "/images/s1.png",
    impact: "Reduced time-to-market, improved code quality, fewer production incidents",
  },
  {
    id: 2,
    title: "System Architecture & Design",
    description: "Designing systems from first principles that handle scale and complexity. Evaluating trade-offs and choosing appropriate patterns.",
    icon: "/images/s2.png",
    impact: "40% reduction in API latency, ability to scale to 100k+ concurrent users",
  },
  {
    id: 3,
    title: "Performance Engineering & Optimization",
    description: "Making applications fast at all layers. I've reduced API response times by 60% and improved web performance by 40%.",
    icon: "/images/s3.png",
    impact: "8% improvement in conversion rates, 12% improvement in user retention, cost savings on infrastructure",
  },
  {
    id: 4,
    title: "API Architecture & Design",
    description: "Building robust, scalable RESTful APIs that are intuitive, maintainable, and perform at scale.",
    icon: "/images/s4.png",
    impact: "Faster integration for partners, reduced support tickets, scalable architecture",
  },
  {
    id: 5,
    title: "Database Design & Optimization",
    description: "Schema design, indexing, and query performance. I've improved query performance by 60% through strategic optimizations.",
    icon: "/images/s5.png",
    impact: "Faster queries, reduced database costs, ability to serve more users",
  },
  {
    id: 6,
    title: "Technical Leadership & Mentorship",
    description: "Mentoring junior engineers, establishing code quality standards, and guiding architectural decisions. I've mentored 3+ engineers.",
    icon: "/images/s6.png",
    impact: "Better code quality, faster team onboarding, reduced technical debt, improved team morale",
  },
  {
    id: 7,
    title: "Frontend Performance & UX",
    description: "Building high-performance React applications optimized for user experience and conversion.",
    icon: "/images/s7.png",
    impact: "Faster page loads, reduced bounce rates, improved user satisfaction, higher conversions",
  },
  {
    id: 8,
    title: "Cloud Architecture & DevOps",
    description: "Managing deployment pipelines, cloud infrastructure, monitoring, and alerting. Ensuring systems are reliable and scale efficiently.",
    icon: "/images/s8.png",
    impact: "Faster deployments, reduced downtime, better visibility into system health, cost optimization",
  },
];

// ===== FEATURED CASE STUDIES (Previously Projects) =====
export const caseStudyData = [
  {
    id: 1,
    title: "Royal Matrimonial - Scalable SaaS Platform",
    image: "/images/p2.png",
    url: "https://royalmatrimonial.com/",
    role: "Senior Full-Stack Engineer & Tech Lead",
    duration: "12 months (Feb 2023 - Mar 2025)",
    users: "100k+",
    impact: "10x user growth, 62% performance improvement, mentored 3 engineers",
    problem: "High-volume user registrations, real-time messaging, scaling to handle concurrent traffic spikes",
    solution: "Redesigned from monolithic to microservices architecture with intelligent caching",
    keyMetrics: {
      apiLatency: "800ms → 300ms (62% improvement)",
      queryPerformance: "2.5s → 100ms (94% improvement)",
      bundleSize: "450KB → 270KB (40% reduction)",
      conversion: "+8%",
      retention: "+12%",
      cost: "-$15k/month",
      uptime: "99.9%",
    },
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "WebSockets"],
    githubUrl:"https://github.com/BaljeetGunghas?tab=repositories",
  },
  {
    id: 2,
    title: "GoMechanic - On-demand Auto Services",
    image: "/images/p9.png",
    url: "https://www.gomechanic.in/",
    role: "Full-Stack Engineer",
    duration: "5 months (Oct 2022 - Feb 2023)",
    users: "50k+ daily active",
    impact: "20+ pages built, 35% performance improvement, mobile engagement +25%",
    problem: "Outdated UI affecting user experience, slow page loads on mobile",
    solution: "Rebuilt 20+ customer-facing pages with performance optimization",
    keyMetrics: {
      pageLoad: "4.2s → 2.7s (35% improvement)",
      mobileEngagement: "+25%",
      supportTickets: "-18%",
      lighthouse: "95+",
    },
    techStack: ["React", "TypeScript", "HTML/CSS", "Bootstrap", "Node.js"],
    githubUrl:"https://github.com/BaljeetGunghas?tab=repositories",
  },
  {
    id: 3,
    title: "Safarmentor - Automotive Marketplace",
    image: "/images/p8.png",
    url: "https://www.safarmentor.com/",
    role: "Frontend Engineer",
    duration: "5 months (Jun 2022 - Oct 2022)",
    users: "30k+ users",
    impact: "15+ pages built, 30% user engagement improvement, UX optimization",
    problem: "Low conversion rates on key user flows, unclear CTAs",
    solution: "UX audit, form flow optimization, reduced friction points",
    keyMetrics: {
      engagement: "+30%",
      usability: "9.2/10",
      maintenanceDebt: "-25%",
    },
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
    githubUrl:"https://github.com/BaljeetGunghas?tab=repositories",
  },
  {
    id: 4,
    title: "Edustoke - Educational Content Platform",
    image: "/images/p10.png",
    url: "https://www.edustoke.com/",
    role: "Full-Stack Engineer",
    duration: "4 months (Mar 2022 - Jun 2022)",
    users: "100k+ students",
    impact: "40+ pages built, 40% mobile engagement improvement, development velocity +25%",
    problem: "Slow performance on 3G networks, managing 40+ pages with consistent quality",
    solution: "CSS/SASS optimization, component library, improved Git workflow",
    keyMetrics: {
      mobileEngagement: "+40%",
      mergeConflicts: "-20%",
      devVelocity: "+25%",
    },
    techStack: ["HTML", "CSS", "SCSS", "JavaScript", "Figma", "Git"],
    githubUrl:"https://github.com/BaljeetGunghas?tab=repositories",
  },
];

// ===== PROFESSIONAL EXPERIENCE =====
interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  metrics: { [key: string]: string };
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'NIIT',
    role: 'Senior Full-Stack Developer',
    duration: 'Jun 2025 – Present',
    description: 'Developing modern web applications with AI/GenAI integration using MERN stack. Working on multiple projects leveraging Claude AI and cutting-edge technologies.',
    achievements: [
      'Integrated Claude AI and GenAI capabilities into web applications',
      'Worked on 12+ projects and 5+ individual assignments',
      'Built full-stack applications using MERN stack (MongoDB, Express, React, Node.js)',
      'Implemented AI-powered features for enhanced user experience',
      'Collaborated with cross-functional teams on innovative solutions',
      'Developed and maintained scalable backend systems',
      'Created responsive and performant frontend interfaces',
    ],
    metrics: {
      'Projects': '12+',
      'Individual Work': '5+',
      'Stack': 'MERN',
      'AI Integration': 'Claude & GenAI',
      'Tech Focus': 'Full-Stack Development',
    },
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Claude AI', 'GenAI', 'JavaScript', 'TypeScript', 'REST APIs'],
  },
  {
    company: 'Royalmatrimonial',
    role: 'Senior Full-Stack Engineer & Tech Lead',
    duration: 'Feb 2023 – Apr 2025',
    description: 'Led full-stack development and technical decisions for a high-growth matrimonial SaaS platform serving 100k+ users.',
    achievements: [
      'Led architecture redesign from monolithic to microservices → enabled 10x user growth',
      'Implemented multi-layer caching strategy reducing API latency by 62% (800ms → 300ms)',
      'Optimized database queries by 94% through strategic indexing and denormalization',
      'Designed real-time messaging system using WebSockets handling 50k+ concurrent connections',
      'Mentored 3 junior engineers through code reviews and pair programming',
      'Established code quality standards and automated CI/CD pipeline → 30% reduction in bugs',
      'Achieved 99.9% uptime across all production services',
    ],
    metrics: {
      'Users Served': '100k+',
      'API Latency Improvement': '62%',
      'Query Performance': '94% faster',
      'Conversion Rate Increase': '8%',
      'User Retention': '+12%',
      'Infrastructure Cost Savings': '$15k/month',
      'Deployment Frequency': '2/week → 10/week',
      'Production Incidents': '-50%',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    company: 'GoMechanic',
    role: 'Full-Stack Engineer',
    duration: 'Oct 2022 – Feb 2023',
    description: 'Built customer-facing web pages and optimized frontend performance for on-demand automotive services platform.',
    achievements: [
      'Built and deployed 20+ customer-facing web pages from Figma designs',
      'Optimized frontend performance reducing page load time by 35%',
      'Implemented mobile-first responsive design increasing mobile engagement by 25%',
      'Integrated third-party APIs using Postman and Node.js backend',
      'Collaborated with design and product teams to ensure pixel-perfect implementations',
      'Reduced customer support tickets by 18% through better UX',
    ],
    metrics: {
      'Pages Built': '20+',
      'Page Load Time': '35% improvement',
      'Mobile Engagement': '+25%',
      'Support Tickets': '-18%',
      'Lighthouse Score': '95+',
    },
    technologies: ['React', 'TypeScript', 'HTML/CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'Postman'],
  },
  {
    company: 'FareGarage',
    role: 'Frontend Engineer',
    duration: 'Jun 2022 – Oct 2022',
    description: 'Led frontend development focusing on user experience optimization and responsive design.',
    achievements: [
      'Built and maintained 15+ web pages for customer and merchant portals',
      'Conducted UX audit identifying friction points in user flows',
      'Optimized user interactions improving engagement by 30%',
      'Established CSS guidelines and code review standards',
      'Ensured responsive design across all devices (mobile-first approach)',
      'Reduced code maintenance issues by 25% through better standards',
    ],
    metrics: {
      'Pages Built': '15+',
      'User Engagement': '+30%',
      'Mobile Usability Score': '9.2/10',
      'Maintenance Issues': '-25%',
    },
    technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Bootstrap', 'Git', 'Figma'],
  },
  {
    company: 'Edustoke',
    role: 'Full-Stack Engineer',
    duration: 'Mar 2022 – Jun 2022',
    description: 'Built and optimized pages for educational content delivery platform serving 100k+ students.',
    achievements: [
      'Created 40+ web pages from Figma designs using HTML, CSS, SASS',
      'Optimized performance for low-bandwidth users improving mobile engagement by 40%',
      'Implemented component library and design system reducing development time',
      'Established Git workflow standards reducing merge conflicts by 20%',
      'Managed large-scale page development maintaining consistent quality',
      'Improved team development velocity by 25% through better processes',
    ],
    metrics: {
      'Pages Built': '40+',
      'Mobile Engagement': '+40%',
      'Merge Conflicts': '-20%',
      'Development Velocity': '+25%',
    },
    technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Figma', 'Git/GitHub'],
  },
];

// ===== SKILLS DATA (Redesigned - No Percentages) =====
export const frontendSkills = [
  { id: 1, title: "React", proficiency: "Expert", years: "4+" },
  { id: 2, title: "TypeScript", proficiency: "Expert", years: "3+" },
  { id: 3, title: "Next.js", proficiency: "Advanced", years: "2+" },
  { id: 4, title: "Tailwind CSS", proficiency: "Advanced", years: "2+" },
  { id: 5, title: "HTML5/CSS3", proficiency: "Expert", years: "4+" },
  { id: 6, title: "JavaScript", proficiency: "Expert", years: "4+" },
];

export const backendSkills = [
  { id: 1, title: "Node.js", proficiency: "Advanced", years: "3+" },
  { id: 2, title: "Express", proficiency: "Advanced", years: "3+" },
  { id: 3, title: "REST APIs", proficiency: "Expert", years: "3+" },
  { id: 4, title: "System Design", proficiency: "Advanced", years: "2+" },
  { id: 5, title: "Authentication", proficiency: "Advanced", years: "2+" },
];

export const databaseSkills = [
  { id: 1, title: "PostgreSQL", proficiency: "Advanced", years: "3+" },
  { id: 2, title: "MongoDB", proficiency: "Intermediate", years: "2+" },
  { id: 3, title: "Redis", proficiency: "Advanced", years: "2+" },
  { id: 4, title: "Query Optimization", proficiency: "Expert", years: "2+" },
  { id: 5, title: "Database Design", proficiency: "Advanced", years: "2+" },
];

export const devopsSkills = [
  { id: 1, title: "AWS", proficiency: "Advanced", years: "2+" },
  { id: 2, title: "Docker", proficiency: "Intermediate", years: "1+" },
  { id: 3, title: "CI/CD", proficiency: "Advanced", years: "2+" },
  { id: 4, title: "GitHub Actions", proficiency: "Advanced", years: "1+" },
  { id: 5, title: "Monitoring", proficiency: "Intermediate", years: "1+" },
];

export const contactData = {
  phone: "+91-8685070017",
  email: "baljeetgunghas5@gmail.com",
  address: "New Delhi, India",
  linkdin: 'https://www.linkedin.com/in/dev-baljeet-gunghas-b6698421b/',
  github: 'https://github.com/BaljeetGunghas',
  instagram: 'https://www.instagram.com/baljeet_gunghas2/',
  calendly: 'https://calendly.com/baljeetgunghas5', // Add your calendly link
};

// ===== SYSTEM DESIGN PRINCIPLES =====
export const systemDesignHighlights = [
  {
    title: "Multi-Layer Caching Strategy",
    description: "Browser cache, CDN, Redis application cache, and database query caching",
    impact: "62% API latency reduction",
    project: "Royal Matrimonial",
  },
  {
    title: "Database Query Optimization",
    description: "Strategic indexing, denormalization, and query refactoring",
    impact: "94% faster queries (2.5s → 100ms)",
    project: "Royal Matrimonial",
  },
  {
    title: "Microservices Architecture",
    description: "Transitioned from monolithic to service-oriented for independent scaling",
    impact: "Enabled 10x user growth, 50% fewer incidents",
    project: "Royal Matrimonial",
  },
  {
    title: "Real-time WebSocket System",
    description: "Designed WebSocket architecture with message queue and persistence",
    impact: "<100ms message delivery, 50k+ concurrent connections",
    project: "Royal Matrimonial",
  },
];

// ===== PERFORMANCE WINS =====
export const performanceWins = [
  {
    category: "API Performance",
    metric: "API Response Time",
    before: "800ms",
    after: "300ms",
    improvement: "62%",
    impact: "8% conversion rate improvement",
  },
  {
    category: "Database",
    metric: "Query Performance",
    before: "2.5s",
    after: "100ms",
    improvement: "94%",
    impact: "Better user experience, reduced database load",
  },
  {
    category: "Frontend",
    metric: "Bundle Size",
    before: "450KB",
    after: "270KB",
    improvement: "40%",
    impact: "66% faster page load time",
  },
  {
    category: "Frontend",
    metric: "Page Load Time",
    before: "3.5s",
    after: "1.2s",
    improvement: "66%",
    impact: "Reduced bounce rate, improved engagement",
  },
  {
    category: "Cost",
    metric: "Infrastructure Costs",
    before: "Baseline",
    after: "$15k/month savings",
    improvement: "Cost Optimized",
    impact: "Significant cost reduction through optimization",
  },
];

// ===== TECHNICAL LEADERSHIP =====
export const leadershipHighlights = [
  {
    title: "Mentorship",
    description: "Mentored 3+ junior engineers through structured code reviews and pair programming",
    impact: "One junior promoted to mid-level within 12 months",
  },
  {
    title: "Code Quality Standards",
    description: "Established code review process, testing standards (90%+ coverage), and performance budgets",
    impact: "30% reduction in production bugs, 20% improvement in team velocity",
  },
  {
    title: "Architecture Design",
    description: "Led technical design reviews for system redesigns and critical features",
    impact: "Better-informed technical decisions, team alignment on architecture",
  },
  {
    title: "Knowledge Sharing",
    description: "Documented architecture decisions, created runbooks, conducted tech talks",
    impact: "Improved team knowledge, faster onboarding, reduced operational issues",
  },
];

// ===== STATS FOR HOMEPAGE =====
export const homeStats = {
  yearsExperience: "4+",
  appsShipped: "4",
  usersServed: "100k+",
  performanceImprovement: "62%",
};
