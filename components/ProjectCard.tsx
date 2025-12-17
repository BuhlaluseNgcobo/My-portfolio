
import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon, DocumentIcon } from './icons/SocialIcons';
import { PresentationIcon } from './icons/TechIcons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, liveDemoUrl, githubRepoUrl, documentationUrl, isCapstone, demoVideoUrl } = project;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url === '#') {
        e.preventDefault();
    }
  };

  return (
    <div className={`group bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border border-transparent hover:border-accent/20 relative ${isCapstone ? 'ring-2 ring-highlight ring-offset-2 ring-offset-primary' : ''}`}>
      {isCapstone && (
        <div className="absolute top-0 right-0 bg-highlight text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md z-10 uppercase tracking-wider">
          Capstone Project
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow pt-10">
        <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-highlight transition-colors duration-300">{title}</h3>
        <p className="text-text-secondary mb-4 flex-grow leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="bg-primary border border-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-primary/50">
          {liveDemoUrl && liveDemoUrl !== '#' && (
            <a
                href={liveDemoUrl}
                target={liveDemoUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                onClick={(e) => handleLinkClick(e, liveDemoUrl)}
                className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors duration-300 font-medium group/link"
            >
                <ExternalLinkIcon className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                Live Demo
            </a>
          )}
          
          {demoVideoUrl && (
             <a
                href={demoVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors duration-300 font-medium group/link"
            >
                <PresentationIcon className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                Watch Video
            </a>
          )}

          {githubRepoUrl && githubRepoUrl !== '#' && (
            <a
                href={githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors duration-300 font-medium group/link"
            >
                <GitHubIcon className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                GitHub & Docs
            </a>
          )}
          
          {documentationUrl && documentationUrl !== '#' && (
           <a
            href={documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-highlight transition-colors duration-300 font-medium group/link"
          >
            <DocumentIcon className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
            Documentation
          </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
