export const siteConfig = {
  name: "Haider",
  title: "Full Stack Developer & AI Integrator",
  description:
    "Full-stack developer with expertise in MERN/Next.js stack and AI integration. Built 3+ production-ready applications with focus on real-time systems, scalability, and modern web architectures.",
  url: "https://linkedin.com/in/haidersince2002",
  links: {
    github: "https://github.com/haidersince2002",
    linkedin: "https://linkedin.com/in/haidersince2002",
    email: "haiderrali4544@gmail.com",
  },
};

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Initiated Projects",
    period: "2024 — Present",
    description:
      "Building and shipping full-stack web applications independently, focusing on AI integration, real-time features, and the MERN stack.",
    highlights: [
      "Built Promptly AI — an AI-powered content creation platform with article and image generation features",
      "Developed ChatConnect — a real-time messaging app with WebSocket support and online/offline presence",
      "Created SmartFi.AI — an AI-powered financial insights platform using Gemini API for spending analysis",
    ],
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "Gemini API"],
  },
  {
    role: "B.Tech Computer Science (Data Science & AI)",
    company: "Shri Ramswaroop Memorial University, Lucknow",
    period: "Sep 2022 — Jun 2026",
    description:
      "Pursuing a degree in Computer Science with specialization in Data Science and Artificial Intelligence. CGPA: 7.60/10.",
    highlights: [
      "Relevant coursework: Data Structures, Algorithms, Database Management, Machine Learning",
      "IBM Data Analytics Certification — SPSS Modeller & Watson Studio",
      "IBM Data Analytics Certification — IBM Cognos",
    ],
    technologies: ["Python", "Java", "C", "Machine Learning", "Data Structures", "Algorithms"],
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  category: "fullstack" | "ai" | "frontend";
}

export const projects: Project[] = [
  {
    title: "Promptly AI",
    description:
      "AI-powered content creation platform with article and image generation capabilities.",
    longDescription:
      "A SaaS-style AI platform that helps users generate articles and images using AI. Features a clean, modern UI with a dark theme and intuitive workflow for content creation.",
    image: "/projects/promptly.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://promptly-ai-zeta.vercel.app/",
    githubUrl: "https://github.com/haidersince2002/promptly-ai",
    highlights: [
      "AI-powered article and image generation",
      "Modern SaaS-style UI with dark theme",
      "Full-stack architecture with client-server setup",
    ],
    category: "ai",
  },
  {
    title: "SmartFi.AI",
    description:
      "AI-powered financial insights platform for transaction analysis and spending tracking.",
    longDescription:
      "A financial intelligence platform that uses Gemini API for AI-powered receipt extraction, budget monitoring, spending analytics, and personalized insights with automated reports.",
    image: "/projects/smartfi.jpg",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Clerk Auth",
      "Gemini API",
    ],
    liveUrl: "http://smartfi-psi.vercel.app",
    githubUrl: "#",
    highlights: [
      "AI receipt extraction using Gemini API",
      "Budget monitoring and spending analytics",
      "Personalized insights and automated reports",
    ],
    category: "ai",
  },
  {
    title: "ChatConnect",
    description:
      "Real-time messaging application with WebSocket support for instant communication.",
    longDescription:
      "A full-featured real-time messaging application built with the MERN stack and Socket.io. Supports instant messaging, media sharing, online/offline presence indicators, JWT authentication, and message notifications.",
    image: "/projects/chatconnect.jpg",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "React.js",
      "Zustand",
      "Tailwind CSS",
      "DaisyUI",
    ],
    liveUrl: "https://chat-connect-vert.vercel.app",
    githubUrl: "#",
    highlights: [
      "Real-time messaging with WebSocket (Socket.io)",
      "Online/offline presence tracking and media sharing",
      "JWT authentication with message notifications",
    ],
    category: "fullstack",
  },
  {
    title: "URL Shortener Platform",
    description:
      "Full-stack URL shortening service with analytics dashboard and QR code generation.",
    longDescription:
      "A complete URL management platform featuring custom short URLs, a click analytics dashboard, link management, secure authentication, and QR code generation. Built with a MERN stack architecture and modern state management.",
    image: "/projects/urlshortener.jpg",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Redux Toolkit",
      "JWT",
      "Tailwind CSS",
      "NanoID",
    ],
    githubUrl: "#",
    highlights: [
      "Custom short URLs with click analytics dashboard",
      "QR code generation for every shortened link",
      "Secure authentication and link management system",
    ],
    category: "fullstack",
  },
];

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "💻",
    skills: [
      "JavaScript",
      "Python",
      "Java",
      "C",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "Redux Toolkit",
      "Responsive Design",
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "RESTful APIs",
      "Socket.io",
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "🚀",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "AWS",
      "Vercel",
      "JWT",
      "Linux",
      "Windows",
    ],
  },
];
