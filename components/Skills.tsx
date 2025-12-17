
import React, { useEffect, useRef, useState } from 'react';
// Fix: The 'Skill' type is exported from '../types', not '../constants'.
import { SKILL_CATEGORIES } from '../constants';
import { Skill } from '../types';

const SkillIcon: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
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
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center justify-center gap-3 text-center group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                <skill.icon className="w-8 h-8 text-text-secondary group-hover:text-white" />
            </div>
            <span className="font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">{skill.name}</span>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-highlight">
                Technical Skills & Competencies
            </h2>
            <div className="space-y-12">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.title} className="bg-secondary p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-text-primary mb-6">{category.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                            {category.skills.map((skill, index) => (
                                <SkillIcon key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;