import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import portfolioData from '../data/portfolioData';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { projects } = portfolioData;
  
  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    ...allTags.map(tag => ({ id: tag.toLowerCase(), label: tag }))
  ];
  
  const filteredProjects = 
    activeFilter === 'all' ? projects :
    activeFilter === 'featured' ? projects.filter(project => project.featured) :
    projects.filter(project => 
      project.tags.some(tag => tag.toLowerCase() === activeFilter)
    );

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A selection of my recent work and personal projects"
    >
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeFilter === filter.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink?: string;
    codeLink?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex gap-3">
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="View demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.codeLink && (
              <a 
                href={project.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white p-2 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="View code"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs font-medium py-1 px-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium py-1 px-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;