export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  liveUrl: string;
  previewImage: string;
  imageAlt: string;
  frontendTech: string[];
  backendTech: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlightTech: string[];
  icon: string;
}

export interface ResumeItem {
  period: string;
  institutionOrTopic: string;
  detail: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  accomplishments: string[];
}

export interface BlogPost {
  id: string;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  slug: string;
}

export const personalInfo = {
  name: "Yasir Ali",
  brandName: "Yasir.dev",
  title: "Full Stack Developer",
  roleTag: "Full Stack Developer | React.js, Node.js, TypeScript, REST APIs",
  experienceYears: "2+",
  tagline: "Building and shipping end-to-end production web applications with React.js, Next.js, Node.js, and REST APIs.",
  bio: "Full Stack Developer with 2 years of professional experience building and shipping production web applications end-to-end: responsive React.js and Next.js interfaces, Node.js and Express REST APIs, database design, and secure authentication with role-based access control. Experienced with MongoDB, PostgreSQL, and MySQL, and cross-functional Agile teams.",
  email: "yaseenyasir786110@gmail.com",
  phone: "+92 310 3578419",
  whatsapp: "https://wa.me/923103578419",
  location: "Karachi, Sindh, Pakistan",
  profileImage: "/Yasirpic.jpg",
  availability: "Available for Full-time Roles & Contracts",
  github: "https://github.com/Yasir-dev-Ali",
  linkedin: "https://linkedin.com/in/yasiryaseen",
};

export const statsData = [
  { value: "2+", label: "Years of Experience", icon: "ri-shape-line" },
  { value: "18+", label: "Projects Completed", icon: "ri-computer-line" },
  { value: "15+", label: "Satisfied Clients", icon: "ri-service-line" },
  { value: "99%+", label: "Code Quality & SLA", icon: "ri-award-line" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-app",
    title: "Web & App Development",
    description: "Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Next.js 15.",
    highlightTech: ["HTML", "CSS", "JavaScript", "React", "Next.js 15"],
    icon: "code",
  },
  {
    id: "database",
    title: "Database Management",
    description: "Designing and managing high-speed databases with SQL and NoSQL technologies such as MySQL, PostgreSQL, and MongoDB.",
    highlightTech: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    icon: "database",
  },
  {
    id: "api-dev",
    title: "API Development & Microservices",
    description: "Creating and integrating RESTful APIs to enable smooth, secure communication between front-end and back-end systems.",
    highlightTech: ["RESTful APIs", "Node.js", "Express.js", "JWT"],
    icon: "cpu",
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Improving the speed and performance of web applications to provide a better user experience. Work with Node.js, Express, and Next.js SSR.",
    highlightTech: ["Node.js", "Express", "Next.js SSR", "Redis"],
    icon: "zap",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description: "Developing scalable and secure payment solutions for e-commerce platforms tailored to your business needs.",
    highlightTech: ["Stripe API", "Webhooks", "E-commerce", "MERN"],
    icon: "cart",
  },
  {
    id: "realtime",
    title: "Real-Time Collaboration",
    description: "Building low-latency real-time applications with WebSockets, instant messaging, and collaborative canvases.",
    highlightTech: ["Socket.io", "WebSockets", "State Sync", "TypeScript"],
    icon: "radio",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "collingwood-press",
    title: "The Collingwood Press",
    tagline: "Book publishing, from manuscript to marketplace",
    description: "An author-focused publishing website presenting editing, cover design, publishing, marketing, and reader services.",
    category: "Publishing Website",
    liveUrl: "https://www.thecollingwoodpress.com/",
    previewImage: "/projects/collingwood-press.png",
    imageAlt: "The Collingwood Press website homepage",
    frontendTech: ["React.js", "Next.js"],
    backendTech: ["Not publicly documented"],
  },
  {
    id: "graphic-grids",
    title: "Graphic Grids Studio",
    tagline: "Build a brand people remember",
    description: "A creative studio website showcasing branding, web design, campaign graphics, and selected visual work.",
    category: "Creative Studio",
    liveUrl: "https://graphicgrids.com/",
    previewImage: "/projects/graphic-grids.png",
    imageAlt: "Graphic Grids Studio website homepage",
    frontendTech: ["Astro.js"],
    backendTech: ["Not publicly documented"],
  },
  {
    id: "make-my-hashtag",
    title: "MakeMyHashtag",
    tagline: "Turn a search into a shareable hashtag",
    description: "A focused hashtag tool with a simple search flow and before-and-after examples for social content.",
    category: "Hashtag Tool",
    liveUrl: "https://makemyhashtag-frontend.vercel.app/",
    previewImage: "/projects/make-my-hashtag.png",
    imageAlt: "MakeMyHashtag tool homepage",
    frontendTech: ["Next.js", "Tailwind CSS"],
    backendTech: ["API integration; server stack not documented"],
  },
  {
    id: "author-landing-page",
    title: "Slow Signal",
    tagline: "A field guide to thinking clearly in a loud world",
    description: "An editorial landing page introducing a book about attention, focus, and staying thoughtful in a noisy world.",
    category: "Author Landing Page",
    liveUrl: "https://authorlandingpage.vercel.app/",
    previewImage: "/projects/author-landing-page.png",
    imageAlt: "Slow Signal author landing page",
    frontendTech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    backendTech: ["Next.js API route"],
  },
];

export const educationData: ResumeItem[] = [
  {
    period: "2021 - 2025",
    institutionOrTopic: "Indus University, Karachi",
    detail: "BSc in Software Engineering",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: 'Feb 2025 - Aug 2026',
    role: 'MERN Stack Developer',
    company: 'Maze Digital',
    accomplishments: [
      'Developed end-to-end features across the stack, integrating React.js and Next.js frontends with Node.js and Express REST APIs.',
      'Designed, built, and maintained RESTful APIs with secure JWT/OAuth authentication and role-based access control (RBAC).',
      'Designed and optimized MongoDB schemas for scalability, high availability, and efficient querying.',
      'Built reusable, responsive React.js components and custom hooks that improved UI consistency and interactivity.',
      'Collaborated with cross-functional teams to turn business requirements into clean, high-performing solutions, and resolved issues across the frontend and backend.',
    ],
  },
  {
    period: 'Jan 2024 - Dec 2024',
    role: 'Front-End Developer',
    company: 'TruSoft Technology',
    accomplishments: [
      'Developed and maintained responsive web applications with React.js and Next.js across multiple client projects.',
      'Worked closely with backend teams on API consumption and data flow to ensure smooth frontend-backend integration.',
      'Implemented Next.js routing and server-side rendering (SSR) to improve SEO and load performance, and optimized component rendering and page load times.',
    ],
  },
];

export const certificationData: ResumeItem[] = [
  {
    period: "Oct 2023 - Oct 2024",
    institutionOrTopic: "Hazza Institute of Technology, Karachi",
    detail: "MERN Stack Training",
  },
  {
    period: "Jul 2024 - Oct 2024",
    institutionOrTopic: "Decotech, Karachi",
    detail: "Back-End Development Training",
  },
];

export const skillsCategorized = [
  {
    label: "Front-End:",
    skills: "HTML, CSS, JavaScript, TypeScript, React, Next.js 15, Tailwind CSS, Framer Motion",
  },
  {
    label: "Back-End:",
    skills: "Node.js, Express, RESTful APIs, WebSockets, JWT Authentication, Zod Validation",
  },
  {
    label: "Databases:",
    skills: "MySQL, PostgreSQL, MongoDB, Mongoose, Redis Caching",
  },
  {
    label: "Tools & Platforms:",
    skills: "Git, GitHub, Docker, Postman, Vercel, Linux, CI/CD",
  },
  {
    label: "Others:",
    skills: "Clean Code, System Architecture, Agile / Scrum, Core Web Vitals, Responsive Design",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    tag: "Architecture",
    date: "March 28, 2026",
    readTime: "4 min read",
    title: "Optimizing Full Stack MERN Applications for Speed",
    description: "Architectural strategies for cutting API latency and optimizing database queries in production.",
    slug: "optimizing-mern-speed",
  },
  {
    id: "blog-2",
    tag: "Next.js",
    date: "February 15, 2026",
    readTime: "3 min read",
    title: "Best Practices for Secure Next.js 15 Deployments",
    description: "Exploring Server Actions, authentication middleware, and CSP headers for modern web apps.",
    slug: "nextjs-15-security",
  },
  {
    id: "blog-3",
    tag: "Databases",
    date: "January 20, 2026",
    readTime: "5 min read",
    title: "Balancing MySQL & MongoDB in Enterprise Portals",
    description: "When to use ACID relational tables versus flexible document aggregations.",
    slug: "mysql-vs-mongodb-architecture",
  },
];

export const navItems = [
  { label: "About me", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
