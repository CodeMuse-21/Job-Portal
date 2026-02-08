export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  remote: boolean;
  logo: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    salary: "$80,000 - $100,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Develop user-facing features using React and TypeScript."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSys",
    location: "San Francisco, CA",
    salary: "$90,000 - $120,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Build scalable backend services with Node.js."
  },
  // Add more jobs to reach 50+
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Austin, TX",
    salary: "$70,000 - $90,000",
    experience: "1-3 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Create intuitive user interfaces and experiences."
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    salary: "$100,000 - $130,000",
    experience: "4-6 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Manage infrastructure and deployment pipelines."
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "AI Labs",
    location: "Boston, MA",
    salary: "$110,000 - $140,000",
    experience: "3-5 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Analyze data and build machine learning models."
  },
  // Continue adding more jobs...
  {
    id: 6,
    title: "Product Manager",
    company: "Innovate Inc",
    location: "Chicago, IL",
    salary: "$120,000 - $150,000",
    experience: "5+ years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Lead product development and strategy."
  },
  {
    id: 7,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Los Angeles, CA",
    salary: "$85,000 - $110,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Develop mobile apps for iOS and Android."
  },
  {
    id: 8,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Washington, DC",
    salary: "$95,000 - $125,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Protect systems from cyber threats."
  },
  {
    id: 9,
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Denver, CO",
    salary: "$75,000 - $95,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Ensure software quality through testing."
  },
  {
    id: 10,
    title: "Marketing Specialist",
    company: "BrandBoost",
    location: "Miami, FL",
    salary: "$60,000 - $80,000",
    experience: "1-3 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Develop marketing campaigns and strategies."
  },
  {
    id: 11,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Phoenix, AZ",
    salary: "$85,000 - $115,000",
    experience: "3-5 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Build end-to-end web applications."
  },
  {
    id: 12,
    title: "Database Administrator",
    company: "DataGuard",
    location: "Dallas, TX",
    salary: "$90,000 - $120,000",
    experience: "4-6 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Manage and optimize database systems."
  },
  {
    id: 13,
    title: "Machine Learning Engineer",
    company: "ML Innovators",
    location: "Portland, OR",
    salary: "$130,000 - $160,000",
    experience: "4-6 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Develop and deploy ML models."
  },
  {
    id: 14,
    title: "Technical Writer",
    company: "DocuTech",
    location: "Nashville, TN",
    salary: "$65,000 - $85,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Create technical documentation and guides."
  },
  {
    id: 15,
    title: "Network Engineer",
    company: "NetConnect",
    location: "Atlanta, GA",
    salary: "$95,000 - $125,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Design and maintain network infrastructure."
  },
  {
    id: 16,
    title: "Business Analyst",
    company: "BizInsights",
    location: "Minneapolis, MN",
    salary: "$75,000 - $100,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Analyze business requirements and processes."
  },
  {
    id: 17,
    title: "Game Developer",
    company: "GameStudio",
    location: "Austin, TX",
    salary: "$80,000 - $110,000",
    experience: "2-4 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Create engaging video games."
  },
  {
    id: 18,
    title: "Cloud Architect",
    company: "CloudMasters",
    location: "Seattle, WA",
    salary: "$140,000 - $180,000",
    experience: "5+ years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Design cloud infrastructure solutions."
  },
  {
    id: 19,
    title: "SEO Specialist",
    company: "SearchBoost",
    location: "Orlando, FL",
    salary: "$55,000 - $75,000",
    experience: "1-3 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Optimize websites for search engines."
  },
  {
    id: 20,
    title: "Blockchain Developer",
    company: "CryptoTech",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Develop blockchain-based applications."
  },
  {
    id: 21,
    title: "Software Architect",
    company: "ArchSoft",
    location: "Boston, MA",
    salary: "$150,000 - $200,000",
    experience: "7+ years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Design software architecture and systems."
  },
  {
    id: 22,
    title: "Content Creator",
    company: "MediaHub",
    location: "Los Angeles, CA",
    salary: "$50,000 - $70,000",
    experience: "1-3 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Create engaging content for digital platforms."
  },
  {
    id: 23,
    title: "IT Support Specialist",
    company: "TechHelp",
    location: "Houston, TX",
    salary: "$45,000 - $65,000",
    experience: "1-3 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Provide technical support to users."
  },
  {
    id: 24,
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Chicago, IL",
    salary: "$70,000 - $90,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Analyze data to provide business insights."
  },
  {
    id: 25,
    title: "Embedded Systems Engineer",
    company: "IoT Solutions",
    location: "Detroit, MI",
    salary: "$85,000 - $115,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Develop embedded systems and IoT devices."
  },
  {
    id: 26,
    title: "UX Researcher",
    company: "UserFocus",
    location: "San Diego, CA",
    salary: "$80,000 - $105,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Conduct user research and usability studies."
  },
  {
    id: 27,
    title: "Systems Administrator",
    company: "SysAdmin Inc",
    location: "Denver, CO",
    salary: "$75,000 - $100,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Manage and maintain IT systems."
  },
  {
    id: 28,
    title: "AR/VR Developer",
    company: "Immersive Tech",
    location: "Austin, TX",
    salary: "$90,000 - $120,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Create augmented and virtual reality experiences."
  },
  {
    id: 29,
    title: "Compliance Officer",
    company: "Regulate Corp",
    location: "Washington, DC",
    salary: "$85,000 - $110,000",
    experience: "4-6 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Ensure regulatory compliance."
  },
  {
    id: 30,
    title: "E-commerce Specialist",
    company: "ShopOnline",
    location: "New York, NY",
    salary: "$65,000 - $85,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Manage online retail operations."
  },
  {
    id: 31,
    title: "API Developer",
    company: "ConnectAPI",
    location: "San Francisco, CA",
    salary: "$95,000 - $125,000",
    experience: "3-5 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Design and develop APIs."
  },
  {
    id: 32,
    title: "Scrum Master",
    company: "Agile Teams",
    location: "Seattle, WA",
    salary: "$90,000 - $115,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Facilitate agile development processes."
  },
  {
    id: 33,
    title: "Graphic Designer",
    company: "Creative Studio",
    location: "Los Angeles, CA",
    salary: "$55,000 - $75,000",
    experience: "1-3 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Create visual designs and graphics."
  },
  {
    id: 34,
    title: "Security Engineer",
    company: "SafeGuard",
    location: "Boston, MA",
    salary: "$110,000 - $140,000",
    experience: "4-6 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Implement security measures and protocols."
  },
  {
    id: 35,
    title: "Performance Tester",
    company: "SpeedTest",
    location: "Austin, TX",
    salary: "$80,000 - $105,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Test application performance and scalability."
  },
  {
    id: 36,
    title: "DevSecOps Engineer",
    company: "SecureDev",
    location: "Denver, CO",
    salary: "$115,000 - $145,000",
    experience: "4-6 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Integrate security into development processes."
  },
  {
    id: 37,
    title: "Technical Recruiter",
    company: "TalentHunt",
    location: "Chicago, IL",
    salary: "$60,000 - $80,000",
    experience: "2-4 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Recruit technical talent for organizations."
  },
  {
    id: 38,
    title: "Site Reliability Engineer",
    company: "Reliable Systems",
    location: "Portland, OR",
    salary: "$120,000 - $150,000",
    experience: "4-6 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Ensure system reliability and uptime."
  },
  {
    id: 39,
    title: "Data Engineer",
    company: "DataFlow",
    location: "San Jose, CA",
    salary: "$105,000 - $135,000",
    experience: "3-5 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Build data pipelines and infrastructure."
  },
  {
    id: 40,
    title: "Product Designer",
    company: "DesignThink",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    experience: "3-5 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Design user-centered products."
  },
  {
    id: 41,
    title: "Infrastructure Engineer",
    company: "InfraBuild",
    location: "Seattle, WA",
    salary: "$100,000 - $130,000",
    experience: "4-6 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Manage and scale infrastructure."
  },
  {
    id: 42,
    title: "Copywriter",
    company: "WordCraft",
    location: "Miami, FL",
    salary: "$50,000 - $70,000",
    experience: "1-3 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Write compelling copy and content."
  },
  {
    id: 43,
    title: "Microservices Architect",
    company: "MicroArch",
    location: "San Francisco, CA",
    salary: "$140,000 - $180,000",
    experience: "6+ years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Design microservices architectures."
  },
  {
    id: 44,
    title: "Customer Success Manager",
    company: "SuccessCo",
    location: "Austin, TX",
    salary: "$70,000 - $90,000",
    experience: "2-4 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Ensure customer satisfaction and success."
  },
  {
    id: 45,
    title: "AI/ML Researcher",
    company: "AI Research Lab",
    location: "Boston, MA",
    salary: "$130,000 - $170,000",
    experience: "5+ years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Research and develop AI/ML technologies."
  },
  {
    id: 46,
    title: "Frontend Architect",
    company: "WebArch",
    location: "Los Angeles, CA",
    salary: "$125,000 - $155,000",
    experience: "5+ years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Architect frontend systems and frameworks."
  },
  {
    id: 47,
    title: "Database Developer",
    company: "DB Experts",
    location: "Dallas, TX",
    salary: "$85,000 - $110,000",
    experience: "3-5 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Develop and optimize databases."
  },
  {
    id: 48,
    title: "Quality Assurance Lead",
    company: "QA Leaders",
    location: "Phoenix, AZ",
    salary: "$95,000 - $125,000",
    experience: "4-6 years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Lead QA teams and processes."
  },
  {
    id: 49,
    title: "Digital Marketing Manager",
    company: "DigitalBoost",
    location: "Orlando, FL",
    salary: "$75,000 - $100,000",
    experience: "3-5 years",
    remote: true,
    logo: "https://via.placeholder.com/50",
    description: "Manage digital marketing campaigns."
  },
  {
    id: 50,
    title: "Software Engineering Manager",
    company: "EngManage",
    location: "San Diego, CA",
    salary: "$150,000 - $200,000",
    experience: "7+ years",
    remote: false,
    logo: "https://via.placeholder.com/50",
    description: "Lead software engineering teams."
  }
];
