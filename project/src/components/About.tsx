import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { Code, Server, Users, Award } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const About: React.FC = () => {
  const { name } = portfolioData.personal;
  
  const highlights = [
    {
      icon: <Code size={24} className="text-blue-600" />,
      title: 'Frontend Development',
      description: 'Building responsive and intuitive user interfaces with modern frameworks and best practices.'
    },
    {
      icon: <Server size={24} className="text-blue-600" />,
      title: 'Backend Development',
      description: 'Designing robust APIs and server-side applications with scalability in mind.'
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: 'Team Collaboration',
      description: 'Working effectively in agile teams, mentoring junior developers, and leading technical initiatives.'
    },
    {
      icon: <Award size={24} className="text-blue-600" />,
      title: 'Problem Solving',
      description: 'Applying analytical thinking to solve complex technical challenges and optimize performance.'
    }
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about me and what I do"
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Who am I?</h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I am {name}, a passionate software engineer dedicated to creating exceptional digital experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p>
              My journey in software development began during my university years, where I discovered my love for problem-solving and building applications. Since then, I've worked on various projects ranging from e-commerce platforms to data visualization tools, always striving to enhance user experience and system performance.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through tech blogs and community meetups.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-4 inline-block">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold mb-3">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;