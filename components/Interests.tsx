
import React, { useEffect, useRef, useState } from 'react';
import { INTERESTS } from '../constants';

const Interests: React.FC = () => {
    const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        INTERESTS.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleIndices((prev) => {
                                    if (prev.includes(index)) return prev;
                                    return [...prev, index];
                                });
                            }, index * 200);
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
        <section id="interests" className="py-24 bg-secondary/20" ref={sectionRef}>
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-highlight mb-4">
                        Points of Interest
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Beyond the code and data, here are the areas where I channel my passion and curiosity.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {INTERESTS.map((interest, index) => (
                        <div 
                            key={index}
                            className={`bg-primary p-8 rounded-2xl shadow-lg border border-secondary transition-all duration-700 transform flex items-start gap-6 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 ${
                                visibleIndices.includes(index) 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="p-4 bg-secondary rounded-xl text-accent flex-shrink-0">
                                <interest.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">{interest.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{interest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;
