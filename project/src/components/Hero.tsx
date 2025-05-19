import React from 'react';
import { ArrowDown, Github, Linkedin, Facebook } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Hero: React.FC = () => {
  const { name, title, bio, avatar, socialLinks } = portfolioData.personal;

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'facebook':
        return <Facebook size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-600">{name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
                {bio}
              </p>
              
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 animate-slideIn"
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                    aria-label={link.platform}
                  >
                    {renderSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform transition duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg transform rotate-3 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 animate-fadeIn"
                style={{ animationDelay: '0.8s' }}
              >
                <span className="font-bold">Let's build something amazing.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#about" 
          aria-label="Scroll down"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;