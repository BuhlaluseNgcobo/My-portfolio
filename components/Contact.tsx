
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, LocationIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    if (isCopied) return;
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-highlight">
        Get In Touch
      </h2>
      <p className="text-text-secondary max-w-xl mx-auto mb-10">
        I'm currently seeking new opportunities and am open to collaboration. Whether you have a question or just want to say hi, my inbox is always open.
      </p>
      
      {/* Email Display and Copy Button */}
      <div className="bg-secondary inline-flex items-center p-2 rounded-full shadow-inner mb-6">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="px-4 font-mono text-text-primary hover:text-highlight transition-colors duration-300">{PERSONAL_INFO.email}</a>
        <button
          onClick={handleCopyEmail}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 w-20 ${
            isCopied
              ? 'bg-green-500 text-white'
              : 'bg-accent text-white hover:brightness-95'
          }`}
          aria-label="Copy email to clipboard"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Location Display */}
      <div className="flex items-center justify-center gap-2 text-text-secondary mb-10">
          <LocationIcon className="w-5 h-5 text-accent" />
          <span className="font-medium">{PERSONAL_INFO.location}</span>
      </div>
      
      <div className="flex justify-center items-center gap-8 mb-12">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-highlight transition-transform duration-300 transform hover:scale-125" aria-label="GitHub Profile">
          <GitHubIcon className="w-10 h-10" />
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-highlight transition-transform duration-300 transform hover:scale-125" aria-label="LinkedIn Profile">
          <LinkedInIcon className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
