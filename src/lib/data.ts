// All portfolio data centralized here
export const personalInfo = {
  name: "Raja M",
  roles: ["AI Engineer", "Full Stack Developer", "AI Product Builder", "Problem Solver", "Innovator", "Builder", "Entrepreneur"],
  tagline: "Building Intelligent Software That Solves Real Business Problems.",
  bio: "I'm an AI Engineer and Full Stack Developer passionate about building production-quality software that merges Artificial Intelligence with intuitive user experiences. Currently pursuing B.Tech in AI & Data Science at Suguna College of Engineering, I architect intelligent systems that solve real-world problems at scale.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "rajam4658m@gmail.com",
  phone: "+91 8610830037",
  github: "https://github.com/Raja4658",
  linkedin: "https://linkedin.com/in/raja-m-0129622a9",
  githubUsername: "Raja4658",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
};

export const stats = [
  { value: 10, suffix: "+", label: "Projects Built", icon: "Rocket" },
  { value: 20, suffix: "+", label: "Technologies", icon: "Cpu" },
  { value: 500, suffix: "+", label: "GitHub Commits", icon: "GitCommit" },
  { value: 20, suffix: "+", label: "Repositories", icon: "FolderGit2" },
  { value: 5, suffix: "+", label: "Certificates", icon: "Award" },
];

export const education = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "Suguna College of Engineering",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 – 2027",
    description: "Specializing in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Full Stack AI application development.",
    grade: "Active Student",
  },
];

export const skills = [
  {
    category: "Programming",
    icon: "Code2",
    color: "#4F46E5",
    items: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    color: "#00E5FF",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#22C55E",
    items: ["Node.js", "Firebase", "PostgreSQL", "Prisma"],
  },
  {
    category: "AI & ML",
    icon: "Brain",
    color: "#A855F7",
    items: ["Machine Learning", "OpenAI", "Gemini", "Prompt Engineering", "Computer Vision"],
  },
  {
    category: "DevOps & Deployment",
    icon: "Cloud",
    color: "#F59E0B",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Docker"],
  },
];

export const techOrbit = [
  { name: "Python", emoji: "🐍", color: "#3776AB" },
  { name: "React", emoji: "⚛️", color: "#61DAFB" },
  { name: "Next.js", emoji: "▲", color: "#ffffff" },
  { name: "Node.js", emoji: "🟢", color: "#68A063" },
  { name: "Firebase", emoji: "🔥", color: "#FFCA28" },
  { name: "Docker", emoji: "🐳", color: "#2496ED" },
  { name: "GitHub", emoji: "🐙", color: "#ffffff" },
  { name: "OpenAI", emoji: "🤖", color: "#00A67E" },
  { name: "Gemini", emoji: "💎", color: "#8B5CF6" },
  { name: "PostgreSQL", emoji: "🐘", color: "#336791" },
  { name: "Tailwind", emoji: "🌊", color: "#38BDF8" },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Smart College Management System",
    subtitle: "Next-gen campus intelligence platform",
    description: "A comprehensive AI-powered platform that transforms college administration with intelligent dashboards for students, faculty, and administrators — featuring predictive analytics, real-time attendance, and performance forecasting.",
    problem: "Traditional college management systems are fragmented, slow, and lack intelligence — making administration, attendance tracking, and performance monitoring extremely manual and error-prone.",
    solution: "Built an integrated AI platform with role-based dashboards powered by machine learning models that predict student performance, automate attendance, and generate actionable analytics reports.",
    features: [
      "Student & Faculty & Admin Dashboards",
      "AI-Powered Performance Prediction",
      "Smart Attendance System",
      "Real-time Analytics & Reports",
      "Role-based Authentication",
      "Automated Notifications",
    ],
    architecture: "Next.js 14 frontend → Firebase Auth & Firestore → PostgreSQL (analytics) → Python ML API → Prisma ORM",
    tech: ["Next.js", "TypeScript", "Firebase", "PostgreSQL", "Prisma", "Python", "Machine Learning"],
    color: "#4F46E5",
    gradient: "from-indigo-600/20 to-purple-600/20",
    icon: "GraduationCap",
    liveDemo: "#",
    github: "https://github.com/Raja4658",
  },
  {
    id: 2,
    title: "AI Business Ecosystem Platform",
    subtitle: "Your AI-first business command center",
    description: "A futuristic all-in-one business intelligence platform powered by AI — combining business planning, analytics, CRM, finance, inventory, marketing, and forecasting into a single, beautiful interface.",
    problem: "Small and medium businesses struggle to access enterprise-level AI tools. Existing solutions are expensive, fragmented, and require technical expertise to operate.",
    solution: "Built an integrated AI ecosystem where every business function is powered by a dedicated AI agent — from planning and forecasting to marketing and document generation.",
    features: [
      "AI Business Planning & Strategy",
      "AI Consultant Chatbot",
      "Advanced Analytics Dashboard",
      "Marketing AI Campaigns",
      "Finance & Budget AI",
      "Inventory Management AI",
      "CRM & Sales Forecasting",
      "Document Generator",
      "Business Health Score",
    ],
    architecture: "Next.js frontend → Gemini AI APIs → Firebase backend → Real-time dashboards → PDF generation",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Firebase", "Framer Motion", "Recharts", "Prisma"],
    color: "#00E5FF",
    gradient: "from-cyan-600/20 to-blue-600/20",
    icon: "Building2",
    liveDemo: "#",
    github: "https://github.com/Raja4658",
  },
  {
    id: 3,
    title: "HealthWorker Bridge",
    subtitle: "Connecting healthcare workers & patients",
    description: "A comprehensive healthcare management platform connecting Primary Health Centers (PHCs), healthcare workers, and patients — enabling risk monitoring, patient tracking, and streamlined healthcare delivery in rural areas.",
    problem: "Rural healthcare suffers from poor coordination between PHCs, healthcare workers, and patients — leading to missed follow-ups, unmonitored high-risk patients, and inefficient resource allocation.",
    solution: "Built a unified platform with role-specific dashboards for PHC staff, healthcare workers, and patients — with real-time risk monitoring, alerts, and patient journey tracking.",
    features: [
      "Healthcare Worker Dashboard",
      "Patient Management System",
      "PHC Coordination Portal",
      "Real-time Risk Monitoring",
      "Automated Alerts",
      "Patient History Tracking",
    ],
    architecture: "React frontend → Firebase Realtime DB → Node.js API → Risk scoring algorithm → SMS notifications",
    tech: ["React", "Firebase", "Node.js", "TypeScript", "Tailwind CSS"],
    color: "#22C55E",
    gradient: "from-green-600/20 to-emerald-600/20",
    icon: "Heart",
    liveDemo: "#",
    github: "https://github.com/Raja4658",
  },
  {
    id: 4,
    title: "StreamVault — OTT Platform",
    subtitle: "Netflix-style streaming experience",
    description: "A feature-rich OTT streaming website with a premium Netflix-inspired UI — featuring categorized movie/series libraries, intelligent search, responsive design, and a stunning dark-mode interface.",
    problem: "Building a polished, scalable OTT UI with seamless content discovery, search, and categorization from scratch requires mastering complex state management and responsive design.",
    solution: "Engineered a full-featured streaming frontend with TMDB API integration, custom category filters, search with debouncing, hero carousels, and a fully responsive card grid system.",
    features: [
      "Movie & Series Catalog",
      "Smart Search with Debounce",
      "Category Filters & Genres",
      "Responsive Hero Carousel",
      "Watchlist Management",
      "Premium Dark UI",
    ],
    architecture: "React SPA → TMDB API → Custom hooks → Context state management → Responsive CSS Grid",
    tech: ["React", "JavaScript", "TMDB API", "CSS3", "Framer Motion"],
    color: "#F59E0B",
    gradient: "from-amber-600/20 to-red-600/20",
    icon: "Play",
    liveDemo: "#",
    github: "https://github.com/Raja4658",
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Started Programming",
    description: "Began my journey with Python and Java, falling in love with the art of building software.",
    icon: "Code2",
    color: "#4F46E5",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description: "Mastered Next.js, Node.js, Firebase, and PostgreSQL — shipping complete web applications.",
    icon: "Server",
    color: "#00E5FF",
  },
  {
    year: "2025",
    title: "React Ecosystem",
    description: "Deep-dived into React, TypeScript, Framer Motion, and modern frontend architecture.",
    icon: "Monitor",
    color: "#22C55E",
  },
  {
    year: "2026",
    title: "Artificial Intelligence",
    description: "Explored Machine Learning, OpenAI, Gemini APIs, Prompt Engineering, and Computer Vision.",
    icon: "Brain",
    color: "#A855F7",
  },
  {
    year: "2026",
    title: "Built AI Products",
    description: "Shipped 4+ production AI applications — Smart College System, AI Business Platform, HealthWorker Bridge.",
    icon: "Rocket",
    color: "#F59E0B",
  },
  {
    year: "2027",
    title: "AI Software Engineer",
    description: "Target: Join a top-tier AI company, shipping intelligent products used by millions.",
    icon: "Star",
    color: "#00E5FF",
    isFuture: true,
  },
];

export const certificates = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Coursera / Andrew Ng",
    date: "2025",
    color: "#4F46E5",
    icon: "Brain",
  },
  {
    id: 2,
    title: "Google AI Essentials",
    issuer: "Google",
    date: "2025",
    color: "#00E5FF",
    icon: "Cpu",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2025",
    color: "#22C55E",
    icon: "Monitor",
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    date: "2024",
    color: "#A855F7",
    icon: "Code2",
  },
  {
    id: 5,
    title: "Firebase & Cloud Development",
    issuer: "Google Firebase",
    date: "2025",
    color: "#F59E0B",
    icon: "Cloud",
  },
];

export const testimonials = [
  {
    name: "Dr. Priya Lakshmi",
    role: "Professor, AI & Data Science",
    institution: "Suguna College of Engineering",
    quote: "Raja demonstrates exceptional problem-solving skills and a remarkable ability to bridge theoretical AI concepts with practical, production-ready implementations. His projects reflect a level of maturity that is rare at this stage.",
    avatar: "PL",
    color: "#4F46E5",
  },
  {
    name: "Arjun Krishnan",
    role: "Senior Developer",
    institution: "Tech Startup, Bangalore",
    quote: "Working with Raja on the AI Business Platform was impressive. He architected a complex multi-agent system with clean code, proper documentation, and shipped it faster than most experienced developers I've worked with.",
    avatar: "AK",
    color: "#00E5FF",
  },
  {
    name: "Meera Sundaram",
    role: "Project Collaborator",
    institution: "HealthWorker Bridge Team",
    quote: "Raja's passion for building impactful technology is genuine. The HealthWorker Bridge app he built addresses real healthcare gaps — it's thoughtful, well-designed, and technically excellent.",
    avatar: "MS",
    color: "#22C55E",
  },
];

export const blogs = [
  {
    title: "Building an AI-Powered SaaS with Next.js 15 and Gemini",
    excerpt: "A complete guide to architecting production-ready AI applications using Next.js App Router, Gemini APIs, and Firebase.",
    date: "Jan 2026",
    readTime: "8 min read",
    tags: ["AI", "Next.js", "Gemini"],
    color: "#4F46E5",
  },
  {
    title: "The Future of AI Engineering: What I Learned Building 4 AI Products",
    excerpt: "Key lessons from shipping real AI products — from prompt engineering to multi-agent architectures and scalable backends.",
    date: "Dec 2025",
    readTime: "6 min read",
    tags: ["AI", "Product", "Engineering"],
    color: "#00E5FF",
  },
  {
    title: "Why React + Firebase is Still Unbeatable for MVPs in 2026",
    excerpt: "A practical breakdown of why React + Firebase remains the fastest stack for shipping production-quality MVPs.",
    date: "Nov 2025",
    readTime: "5 min read",
    tags: ["React", "Firebase", "MVP"],
    color: "#22C55E",
  },
];

export const aiSystemPrompt = `You are Raja M's personal AI assistant embedded in his portfolio website. Your role is to answer questions about Raja professionally and impressively.

ABOUT RAJA M:
- Name: Raja M
- Location: Coimbatore, Tamil Nadu, India
- Role: AI Engineer | Full Stack Developer | AI Product Builder
- Education: B.Tech in Artificial Intelligence and Data Science at Suguna College of Engineering (2023–2027)
- Career Goal: Become a top-tier AI Engineer building impactful AI products at companies like Google DeepMind, OpenAI, Microsoft, or a cutting-edge AI startup.

SKILLS:
- Programming: Python, Java, JavaScript, TypeScript
- Frontend: React, Next.js, HTML5, CSS3, Tailwind CSS, Framer Motion
- Backend: Node.js, Firebase, PostgreSQL, Prisma
- AI & ML: Machine Learning, OpenAI API, Gemini API, Prompt Engineering, Computer Vision
- DevOps: Git, GitHub, Vercel, Netlify, Docker

PROJECTS:
1. AI-Powered Smart College Management System - Next.js, Firebase, PostgreSQL, ML-based performance prediction
2. AI Business Ecosystem Platform - Full business intelligence with AI agents for planning, analytics, CRM, finance
3. HealthWorker Bridge - Healthcare coordination platform connecting PHCs, workers, and patients
4. StreamVault OTT Platform - Netflix-style streaming website with TMDB API

EXPERIENCE: 
- Started programming in 2024, built 10+ projects across AI, web, and mobile
- Self-taught Full Stack Developer and AI Engineer
- Active on GitHub with 500+ commits across 20+ repositories

CONTACT:
- Email: rajam4658m@gmail.com
- Phone: +91 8610830037
- GitHub: https://github.com/Raja4658
- LinkedIn: https://linkedin.com/in/raja-m-0129622a9

Be professional, enthusiastic about AI/tech, and always highlight Raja's unique strengths. Keep answers concise but impactful. If asked something outside Raja's profile, politely redirect to relevant topics.`;
