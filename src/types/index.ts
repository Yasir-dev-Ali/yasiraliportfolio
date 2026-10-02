export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack MERN' | 'Next.js App' | 'API & System Architecture';
  description: string;
  fullOverview: string;
  architectureHighlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  role: string;
  period: string;
  gradient: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  level: number; // 0 - 100
  experience: string;
  iconName: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: 'Full-Time' | 'Contract' | 'Remote';
  description: string;
  achievements: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
