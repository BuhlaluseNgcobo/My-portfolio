
import React, { useEffect, useRef, useState } from 'react';
import { CERTIFICATIONS } from '../constants';
import { ExternalLinkIcon } from './icons/SocialIcons';

const Certifications: React.FC = () => {
    const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        CERTIFICATIONS.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleIndices((prev) => {
                                    if (prev.includes(index)) return prev;
                                    return [...prev, index];
                                });
                            }, index * 100);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="certifications" className="py-24" ref={sectionRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-highlight">
                Certifications & Credentials
            </h2>
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CERTIFICATIONS.map((cert, index) => (
                    <a 
                        key={index}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group bg-secondary p-6 rounded-xl shadow-lg hover:shadow-accent/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col border border-transparent hover:border-accent/30 ${
                            visibleIndices.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                           <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                                <cert.icon className="w-8 h-8 text-accent group-hover:text-highlight transition-colors"/>
                           </div>
                           <ExternalLinkIcon className="w-5 h-5 text-text-secondary group-hover:text-highlight transition-colors opacity-50 group-hover:opacity-100 transform group-hover:rotate-45 duration-300"/>
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-1 flex-grow group-hover:text-highlight transition-colors">{cert.name}</h3>
                        <p className="font-semibold text-text-secondary mb-2">{cert.issuer}</p>
                        <p className="text-sm text-text-secondary mt-auto opacity-80">{cert.date}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
