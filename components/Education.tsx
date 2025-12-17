
import React, { useEffect, useRef, useState } from 'react';
import { EDUCATION } from '../constants';

const EducationItem: React.FC<{ edu: any; index: number }> = ({ edu, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div 
            ref={ref}
            className={`bg-secondary p-8 rounded-xl shadow-lg mb-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl border-l-4 border-highlight ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="flex justify-between items-start flex-wrap">
                <div className='mb-2'>
                    <h3 className="text-2xl font-bold text-text-primary">{edu.institution}</h3>
                    <p className="text-lg font-semibold text-highlight">{edu.degree}</p>
                </div>
                <p className="text-text-secondary font-medium text-right flex-shrink-0 ml-4 bg-primary/50 px-3 py-1 rounded-full">{edu.duration}</p>
            </div>
            {edu.description && (
                <p className="mt-4 text-text-secondary leading-relaxed">{edu.description}</p>
            )}
        </div>
    );
};

const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 bg-primary relative overflow-hidden">
             {/* Subtle background decoration */}
             <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-highlight/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-highlight relative z-10">
                Education
            </h2>
            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                {EDUCATION.map((edu, index) => (
                    <EducationItem key={index} edu={edu} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Education;
