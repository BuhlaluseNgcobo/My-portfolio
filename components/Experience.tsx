
import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE } from '../constants';

const ExperienceItem: React.FC<{ job: any; index: number }> = ({ job, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const isEven = index % 2 === 0;

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
        <div ref={ref} className="relative z-10">
            <div className={`flex items-center ${isEven ? 'flex-row-reverse' : ''} w-full`}>
                    <div className="w-1/2 p-4">
                    <div 
                        className={`p-6 bg-secondary rounded-lg shadow-xl border-l-4 border-accent transition-all duration-700 transform ${
                            isVisible 
                                ? 'opacity-100 translate-x-0' 
                                : `opacity-0 ${isEven ? 'translate-x-10' : '-translate-x-10'}`
                        }`}
                    >
                            <h3 className="text-xl font-bold text-text-primary mb-1">{job.role}</h3>
                            <p className="text-lg font-semibold text-highlight mb-2">{job.company}</p>
                            <p className="text-sm text-text-secondary mb-4 italic">{job.duration}</p>
                        <ul className="list-disc list-inside text-text-secondary space-y-2">
                            {job.description.map((point: string, i: number) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 p-4"></div>
            </div>
            <div 
                className={`w-6 h-6 bg-accent rounded-full absolute z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transform border-4 border-primary shadow-lg transition-all duration-500 delay-300 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
            ></div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-highlight">
                Work Experience
            </h2>
            <div className="relative container mx-auto px-6 flex flex-col space-y-8">
                <div className="absolute z-0 w-1 h-full bg-secondary shadow-md inset-0 left-1/2 -translate-x-1/2 rounded-full"></div>
                {EXPERIENCE.map((job, index) => (
                    <ExperienceItem key={index} job={job} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
