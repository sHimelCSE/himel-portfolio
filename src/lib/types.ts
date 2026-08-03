export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  availability: string;
  resumeUrl: string;
  logoUrl?: string;
  heroImageUrl?: string;
  stats: {
    projects: string;
    liquid: string;
    figma: string;
  };
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export type ProjectCategory = "advanced" | "other";

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ProjectCategory;
  imageUrl?: string;
  password?: string;
  passwordNote?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities?: string[];
}

export interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  location: string;
  gpa: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface AboutContent {
  professionalSummary: string;
  careerHistory: TimelineItem[];
  education: EducationItem[];
  skillGroups: SkillGroup[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  subject: string;
  budget?: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface ContentStore {
  site: SiteConfig;
  navLinks: NavLink[];
  services: Service[];
  projects: Project[];
  blogPosts: BlogPost[];
  blogCategories: string[];
  about: AboutContent;
  messages: ContactMessage[];
}

export type ContentSection = keyof Omit<ContentStore, "messages">;
