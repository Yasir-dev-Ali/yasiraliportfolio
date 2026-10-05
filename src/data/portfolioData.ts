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
  content: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
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
    skills: "HTML, CSS, Sass, JavaScript, TypeScript, React, Redux, Next.js 15, Material UI, Tailwind CSS, Framer Motion",
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
    content: [
      {
        heading: "Start with the slowest user journey",
        paragraphs: [
          "Performance work is most effective when it starts with a real request, not a guess. Measure a user journey from the browser through the API and database, and record where time is spent. A slow page might be waiting on a large JavaScript bundle, an API call, an inefficient query, or several of these at once.",
          "Use browser performance tools and server-side timings to establish a baseline before changing code. Track percentiles as well as averages: a healthy average can hide requests that are painfully slow for a meaningful share of users.",
        ],
      },
      {
        heading: "Keep API work focused",
        paragraphs: [
          "A React screen should not need to fetch an entire record when it only displays a name, status, and thumbnail. Shape API responses around the screen's needs, paginate collections, and avoid serial requests when independent data can be loaded together.",
          "On the server, validate input at the boundary and keep route handlers predictable. Clear response shapes make it easier to cache safely and help the frontend avoid extra transformation work.",
        ],
        points: [
          "Return only the fields the current view needs.",
          "Paginate large collections and make sorting explicit.",
          "Parallelize independent requests where dependencies allow it.",
        ],
      },
      {
        heading: "Make database queries do less",
        paragraphs: [
          "Inspect query plans before adding indexes. An index can speed up a common filter or sort, but it also adds storage and makes writes more expensive. Choose indexes from observed query patterns, then confirm they are being used.",
          "For MongoDB, project only required fields and be alert to repeated per-item lookups. For relational databases, check join conditions and constraints as well as indexes. In both cases, pagination should have a stable ordering so that results do not jump between requests.",
        ],
      },
      {
        heading: "Cache with a clear freshness rule",
        paragraphs: [
          "Caching can reduce repeated work, but only when the application knows how stale a value may be. Cache public, slowly changing data first; define expiration or invalidation behavior before caching user-specific responses. A cache without a freshness rule can make the application faster and less correct at the same time.",
          "After each change, compare the same metrics against the baseline and verify the user journey still behaves correctly. Small measured improvements are easier to keep than a large rewrite whose impact is unclear.",
        ],
      },
    ],
  },
  {
    id: "blog-2",
    tag: "Next.js",
    date: "February 15, 2026",
    readTime: "3 min read",
    title: "Best Practices for Secure Next.js 15 Deployments",
    description: "Exploring Server Actions, authentication middleware, and CSP headers for modern web apps.",
    slug: "nextjs-15-security",
    content: [
      {
        heading: "Treat every boundary as untrusted",
        paragraphs: [
          "A polished interface is not an authorization layer. Validate incoming data on the server, and check the current user's identity and permissions inside every operation that reads or changes protected data. Hiding a button or protecting a page route is useful for the experience, but it does not secure the underlying action.",
          "Keep secrets in server-only environment variables. Values exposed to browser bundles should be treated as public, even when their names look internal.",
        ],
      },
      {
        heading: "Authorize mutations on the server",
        paragraphs: [
          "Server Actions and route handlers are callable entry points. Parse and validate their inputs, establish the user's session, and verify resource-level access before performing a mutation. Prefer an allow-list of accepted fields so a request cannot update properties the UI never intended to expose.",
          "Return only what the client needs. Avoid sending session tokens, internal error details, or full database records to a component that only needs a small status value.",
        ],
        points: [
          "Validate shape, type, and allowed values at the server boundary.",
          "Check authorization for the specific record being accessed.",
          "Use generic client-facing errors and keep diagnostics in server logs.",
        ],
      },
      {
        heading: "Use middleware as a gate, not the whole lock",
        paragraphs: [
          "Middleware is useful for broad routing decisions, such as redirecting users without a session away from a dashboard. It should not be the only place where permission is checked. Data operations need their own authorization because they can be reached through other paths and can evolve independently of the page layout.",
          "Make session expiry and refresh behavior explicit. Test unauthenticated requests, expired sessions, and users who are signed in but lack the required role.",
        ],
      },
      {
        heading: "Add browser protections deliberately",
        paragraphs: [
          "A Content Security Policy can reduce the impact of cross-site scripting by limiting which scripts and resources the browser may load. Start by inventorying the resources the application actually uses, then adopt a restrictive policy that fits them. Nonces or hashes can help avoid relying on broad unsafe script allowances.",
          "Security headers complement input validation, output escaping, dependency updates, and careful cookie settings; none of them replaces those controls. Revisit the deployed response headers and logs after each production change to ensure the policy is active and not silently weakened.",
        ],
      },
    ],
  },
  {
    id: "blog-3",
    tag: "Databases",
    date: "January 20, 2026",
    readTime: "5 min read",
    title: "Balancing MySQL & MongoDB in Enterprise Portals",
    description: "When to use ACID relational tables versus flexible document aggregations.",
    slug: "mysql-vs-mongodb-architecture",
    content: [
      {
        heading: "Choose around the shape of the data",
        paragraphs: [
          "The choice between MySQL and MongoDB is not a contest between old and new. It is a decision about the data's relationships, consistency requirements, and access patterns. A relational model is a natural fit when records depend on clear relationships and the application benefits from constraints and joins.",
          "A document model can be convenient when a record is commonly read as a cohesive unit and its structure varies in meaningful ways. Flexibility still needs discipline: documents benefit from validation, versioning decisions, and limits on unbounded nested arrays.",
        ],
      },
      {
        heading: "Model the workflows, not just the screens",
        paragraphs: [
          "List the important reads and writes before choosing a schema. Consider how a user creates, edits, searches, and reports on the data, and how those operations behave when two changes happen at once. The best schema makes the important workflows understandable and keeps correctness close to the data.",
          "For MySQL, use transactions when several related changes must succeed together, and define foreign keys and unique constraints for invariants the database can enforce. For MongoDB, use atomic updates where possible and transactions when a workflow truly spans multiple documents.",
        ],
      },
      {
        heading: "Use a database per need only when it earns its cost",
        paragraphs: [
          "Some systems use both databases, but operating two persistence layers adds deployment, monitoring, backup, and consistency work. A second database is justified when a concrete access pattern or domain requirement cannot be served well by the primary store, not simply because both technologies are familiar.",
        ],
        points: [
          "Document the source of truth for each piece of data.",
          "Plan how updates move between stores and how failures are repaired.",
          "Measure the operational cost alongside query performance.",
        ],
      },
      {
        heading: "Let evidence guide the final decision",
        paragraphs: [
          "Prototype the highest-risk workflows with realistic data volumes. Check query plans, transaction behavior, migration effort, and the team's ability to operate the chosen system. Benchmarks are useful only when they reflect the application's actual reads and writes.",
          "For many enterprise portals, one well-modeled relational database is enough. For others, a document store better matches the domain. Keep the architecture as simple as the requirements allow, and revisit the decision when the workload provides evidence that it should change.",
        ],
      },
    ],
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
