import React from 'react';
import { Heart } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Footer: React.FC = () => {
  const { name } = portfolioData.personal;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold">
              {name.split(' ')[0]}<span className="text-blue-500">.</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0 md:mr-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
            
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} {name}. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;