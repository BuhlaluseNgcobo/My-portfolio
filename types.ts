
// Fix: Import React to make React types available in this file.
import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveDemoUrl: string;
  githubRepoUrl: string;
  documentationUrl: string;
  isCapstone?: boolean;
  demoVideoUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string[];
    logo?: string;
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
    description?: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialUrl: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    image?: string;
}

export interface Publication {
    title: string;
    publisher: string;
    date: string;
    url: string;
    description?: string;
}

export interface Interest {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
