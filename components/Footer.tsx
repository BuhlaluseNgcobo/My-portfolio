
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { DocumentIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadHtml = () => {
    const htmlContent = document.documentElement.outerHTML;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // Remove scripts that require the build environment or React hydration
    const scripts = doc.querySelectorAll('script');
    scripts.forEach(script => {
        // Remove the main entry point, import maps, and React CDNs
        if (script.src.includes('index.tsx') || script.type === 'importmap' || script.src.includes('aistudiocdn')) {
            script.remove();
        }
    });

    // Force animated elements to be visible in the static export
    // This handles elements that use intersection observers for fade-ins
    const animatedElements = doc.querySelectorAll('.opacity-0');
    animatedElements.forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-10', 'translate-y-20', 'translate-x-10', '-translate-x-10', 'scale-0');
        el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
    });

    // Remove the export button itself from the exported file
    const downloadBtn = doc.getElementById('download-portfolio-btn');
    if (downloadBtn) downloadBtn.remove();

    // Create and trigger download
    const serialized = `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;
    const blob = new Blob([serialized], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-secondary/50 border-t border-secondary">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col items-center gap-4 text-center text-text-secondary">
        <div>
            <p>&copy; {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.</p>
            <p className="text-sm mt-1">Designed & Built by {PERSONAL_INFO.name}</p>
        </div>
        
        <button 
            id="download-portfolio-btn"
            onClick={handleDownloadHtml}
            className="flex items-center gap-2 text-sm bg-primary border border-secondary hover:border-accent hover:text-highlight px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
            title="Download a static HTML version of this portfolio"
        >
            <DocumentIcon className="w-4 h-4" />
            Export Portfolio as HTML
        </button>
      </div>
    </footer>
  );
};

export default Footer;
