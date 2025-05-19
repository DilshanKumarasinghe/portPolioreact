import React, { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import portfolioData from '../data/portfolioData';
import { type Skill } from '../types';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { skills } = portfolioData;
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'language', label: 'Languages' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'tool', label: 'Tools' },
    { id: 'soft', label: 'Soft Skills' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`h-2 w-5 rounded-sm ${
              i < level ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="My technical and professional capabilities"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Card className="text-center">
      <h4 className="font-medium mb-2">{skill.name}</h4>
      <div className="flex justify-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`h-2 w-5 rounded-sm transition-all duration-300 ${
              i < skill.level ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </Card>
  );
};

export default Skills;