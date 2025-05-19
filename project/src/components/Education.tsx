import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { GraduationCap, Award, CalendarDays } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  return (
    <Section
      id="education"
      title="Education & Certifications"
      subtitle="My academic background and professional certifications"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-blue-600" size={24} />
            Academic Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <div className="mb-3">
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CalendarDays size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.description}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Award className="mr-2 text-blue-600" size={24} />
            Professional Certifications
          </h3>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <div className="mb-1">
                  <h4 className="text-lg font-bold">{cert.name}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CalendarDays size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                  >
                    View Certificate →
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;