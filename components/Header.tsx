
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-text-secondary hover:text-highlight transition-colors duration-300 font-medium px-3 py-2 rounded-md text-sm"
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage. Default to dark mode.
    if (localStorage.theme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certs' },
    { href: '#interests', label: 'Interests' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-primary/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-secondary/10 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-end h-20">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center space-x-1">
                {navLinks.map(link => (
                <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
                ))}
            </nav>
            {/* Theme Toggle Button */}
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-secondary transition-colors text-text-secondary hover:text-highlight focus:outline-none"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-secondary transition-colors text-text-secondary hover:text-highlight focus:outline-none"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary pb-4 transition-colors duration-300">
          <nav className="flex flex-col items-center space-y-2 pt-2">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
