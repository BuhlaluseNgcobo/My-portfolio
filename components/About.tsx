
import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
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
    <section id="about" className="py-24">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-highlight text-center md:text-left">About Me</h2>
            <div className="bg-secondary/30 p-8 rounded-2xl backdrop-blur-sm border border-secondary">
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                    {PERSONAL_INFO.bio}
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-text-primary text-center md:text-left">Career Objectives</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                    {PERSONAL_INFO.careerObjectives}
                </p>
            </div>
      </div>
    </section>
  );
};

export default About;
