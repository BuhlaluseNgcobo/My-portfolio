
import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Display all projects including Capstone
  const displayedProjects = PROJECTS;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation for all items with a stagger
            displayedProjects.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleIndices((prev) => {
                        if (prev.includes(index)) return prev;
                        return [...prev, index];
                    });
                }, index * 200); // 200ms stagger delay
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [displayedProjects.length]); // Add dependency on length

  return (
    <section id="projects" className="py-24" ref={sectionRef}>
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-highlight mb-4">
          Featured Projects
        </h2>
        <p className="text-text-secondary text-lg">
            Detailed documentation for each project is available in its GitHub repository.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
        {displayedProjects.map((project, index) => (
          <div 
            key={index}
            className={`transition-all duration-700 transform ${
                visibleIndices.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
