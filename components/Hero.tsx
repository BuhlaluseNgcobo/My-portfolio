
import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const fullTitle = PERSONAL_INFO.title;
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedTitle((prev) => fullTitle.slice(0, index + 1));
      index++;
      if (index > fullTitle.length) {
        clearInterval(intervalId);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, [fullTitle]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const openLinkInNewTab = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const isResumeAvailable = PERSONAL_INFO.resumeUrl && PERSONAL_INFO.resumeUrl !== '#';

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-80 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-60 animate-blob mix-blend-multiply"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-highlight/20 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000 mix-blend-multiply"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-secondary/80 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-4000 mix-blend-multiply"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
                <div className="animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 tracking-tight">
                    {PERSONAL_INFO.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-highlight mb-6 h-16 md:h-auto">
                    {displayedTitle}
                    <span className="animate-pulse">|</span>
                    </h2>
                </div>
                
                <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                {PERSONAL_INFO.brandingStatement}
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <a
                    href="#projects"
                    onClick={handleScrollToProjects}
                    className="bg-accent hover:brightness-95 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg text-center hover:shadow-xl hover:shadow-accent/40"
                >
                    View My Work
                </a>
                <button
                    onClick={() => openLinkInNewTab(PERSONAL_INFO.resumeUrl)}
                    disabled={!isResumeAvailable}
                    className="bg-secondary hover:bg-opacity-80 text-text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-accent/10 hover:shadow-xl"
                >
                    View Resume
                </button>
                </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative group">
                    <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-highlight to-accent rounded-full opacity-30 blur group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
                    <img
                        src={PERSONAL_INFO.profileImage}
                        alt={`Professional headshot of ${PERSONAL_INFO.name}`}
                        className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-accent shadow-2xl animate-float hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
