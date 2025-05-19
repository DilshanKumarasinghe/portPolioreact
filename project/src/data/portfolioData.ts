import { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  personal: {
    name: 'Anjana Dilshan',
    title: 'Software Engineer',
    bio: 'Turning innovative ideas into elegant solutions. Specialized in building scalable web applications with modern technologies and best practices.',
    tagline: 'Building digital experiences that matter',
    email: 'anjanadil.blog@gmail.com',
    location: 'Kandy, Sri Lanka',
    avatar: 'https://github.com/DiliMaster/myp/blob/main/procircle.png?raw=true',
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com/DiliMaster',
        icon: 'github',
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anjana-dili',
        icon: 'linkedin',
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/share/15j67aCYo4/',
        icon: 'facebook',
      },
    ],
  },
  skills: [
    { name: 'Java', level: 5, category: 'language' },
    { name: 'JavaScript', level: 4, category: 'language' },
    { name: 'PHP', level: 4, category: 'language' },
    { name: 'SQL', level: 4, category: 'language' },
    { name: 'Spring Boot', level: 5, category: 'framework' },
    { name: 'React', level: 4, category: 'framework' },
    { name: 'Next.js', level: 4, category: 'framework' },
    { name: 'Node.js', level: 4, category: 'framework' },
    { name: 'MySQL', level: 4, category: 'tool' },
    { name: 'Git', level: 4, category: 'tool' },
    { name: 'Problem Solving', level: 5, category: 'soft' },
    { name: 'Team Leadership', level: 4, category: 'soft' },
    { name: 'Communication', level: 4, category: 'soft' },
  ],
  projects: [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Spring Boot and React. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Spring Boot', 'React', 'MySQL', 'Docker'],
      demoLink: 'https://demo.example.com',
      codeLink: 'https://github.com/DiliMaster/ecommerce',
      featured: true,
    },
    {
      id: 'project-2',
      title: 'Task Management System',
      description: 'A collaborative task management system with real-time updates, team workspaces, and progress tracking.',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
      demoLink: 'https://demo.example.com',
      codeLink: 'https://github.com/DiliMaster/task-manager',
      featured: true,
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      description: 'A modern weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'Weather API'],
      demoLink: 'https://demo.example.com',
      codeLink: 'https://github.com/DiliMaster/weather-app',
      featured: false,
    },
  ],
  experience: [
    {
      company: 'Tech Solutions Ltd',
      position: 'Senior Software Engineer',
      period: '2021 - Present',
      description: 'Leading development of enterprise applications using Spring Boot and React.',
      achievements: [
        'Led a team of 5 developers in delivering a major e-commerce platform',
        'Improved system performance by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL']
    },
    {
      company: 'Digital Innovations',
      position: 'Software Engineer',
      period: '2019 - 2021',
      description: 'Full-stack development of web applications',
      achievements: [
        'Developed and maintained multiple client projects',
        'Mentored junior developers',
        'Introduced automated testing improving code quality'
      ],
      technologies: ['JavaScript', 'Node.js', 'React', 'MongoDB']
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Open University of Sri Lanka',
      period: '2019 - 2025',
      description: 'Specialized in Software Engineering and Modern Web Technologies',
    },
  ],
  certifications: [
    {
      name: 'Web Design Certification',
      issuer: 'university of moratuwa open learning platform',
      verificationcode: 'Rm5jUkmWIE',
      link : 'https://github.com/DiliMaster/webceti/blob/main/Web_Design_for_Beginners_E-Certificate.pdf',
    }
  ],
};

export default portfolioData;