export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'language' | 'framework' | 'tool' | 'soft';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
    resume: string;
    socialLinks: SocialLink[];
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}