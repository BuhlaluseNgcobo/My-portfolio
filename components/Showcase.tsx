
import React from 'react';
import { PROJECTS, SHOWCASE } from '../constants';
import { ExternalLinkIcon, GitHubIcon, DocumentIcon } from './icons/SocialIcons';
import { PresentationIcon, TargetIcon } from './icons/TechIcons';

const Showcase: React.FC = () => {
    const capstone = PROJECTS.find(p => p.isCapstone);

    return (
        <section id="showcase" className="py-24 bg-gradient-to-b from-primary to-secondary/30">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-highlight mb-4">
                        {SHOWCASE.title}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        {SHOWCASE.description}
                    </p>
                </div>

                {/* Presentation Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Video Placeholder */}
                    <div className="bg-black/80 rounded-2xl aspect-video flex items-center justify-center shadow-2xl border border-secondary relative overflow-hidden group">
                        {SHOWCASE.videoUrl && SHOWCASE.videoUrl !== '#' ? (
                             <iframe 
                                src={SHOWCASE.videoUrl} 
                                title="Showcase Presentation"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                             ></iframe>
                        ) : (
                            <div className="text-center p-6">
                                <PresentationIcon className="w-16 h-16 text-accent mx-auto mb-4 opacity-80" />
                                <h3 className="text-xl font-bold text-white mb-2">Presentation Coming Soon</h3>
                                <p className="text-gray-400">A full 10-minute video walkthrough will be available here.</p>
                            </div>
                        )}
                    </div>

                    {/* Agenda & Links */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-text-primary mb-6">In This Presentation</h3>
                        <ul className="space-y-6 mb-8">
                            {SHOWCASE.topics.map((topic, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="bg-secondary p-2 rounded-lg mt-1">
                                        <div className="w-2 h-2 bg-highlight rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text-primary">{topic.title}</h4>
                                        <p className="text-text-secondary text-sm">{topic.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                         {/* Future Goals Highlight */}
                         <div className="bg-secondary/50 p-6 rounded-xl border border-highlight/20 mb-8">
                            <div className="flex items-center gap-2 mb-3">
                                <TargetIcon className="w-5 h-5 text-accent" />
                                <h4 className="font-bold text-text-primary">Future Learning & Development</h4>
                            </div>
                            <ul className="grid grid-cols-1 gap-2">
                                {SHOWCASE.futureGoals.map((goal, i) => (
                                    <li key={i} className="text-text-secondary text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                        {goal}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                             <a 
                                href={SHOWCASE.videoUrl} 
                                className={`flex items-center gap-2 bg-highlight hover:brightness-95 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg ${SHOWCASE.videoUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={(e) => SHOWCASE.videoUrl === '#' && e.preventDefault()}
                            >
                                <PresentationIcon className="w-5 h-5" />
                                Watch Video
                            </a>
                             <a 
                                href={SHOWCASE.slidesUrl} 
                                className={`flex items-center gap-2 bg-secondary hover:bg-opacity-80 border border-text-secondary/20 text-text-primary font-bold py-3 px-6 rounded-full transition-all shadow-lg ${SHOWCASE.slidesUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={(e) => SHOWCASE.slidesUrl === '#' && e.preventDefault()}
                            >
                                <DocumentIcon className="w-5 h-5" />
                                View Slides
                            </a>
                        </div>
                    </div>
                </div>

                {/* Capstone Highlight */}
                {capstone && (
                    <div className="bg-gradient-to-br from-secondary to-primary border border-highlight/20 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <div>
                                    <div className="inline-block bg-highlight text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md mb-2">
                                        Capstone Project
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary">{capstone.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {capstone.tags.map((tag) => (
                                        <span key={tag} className="bg-primary border border-accent/20 text-accent font-semibold px-3 py-1 rounded-full shadow-sm">
                                        {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        
                            <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                {capstone.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {capstone.liveDemoUrl && capstone.liveDemoUrl !== '#' && (
                                    <a 
                                        href={capstone.liveDemoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-accent hover:brightness-95 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
                                    >
                                        <ExternalLinkIcon className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                )}
                                {capstone.githubRepoUrl && capstone.githubRepoUrl !== '#' && (
                                    <a 
                                        href={capstone.githubRepoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-secondary hover:bg-opacity-80 border border-text-secondary/20 text-text-primary font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
                                    >
                                        <GitHubIcon className="w-5 h-5" />
                                        GitHub
                                    </a>
                                )}
                                {capstone.documentationUrl && capstone.documentationUrl !== '#' && (
                                    <a 
                                        href={capstone.documentationUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-text-secondary hover:text-highlight font-bold py-3 px-4 transition-colors"
                                    >
                                        <DocumentIcon className="w-5 h-5" />
                                        Docs
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Showcase;
