import React, { useState, FormEvent } from 'react';
import { Mail, MapPin, Linkedin, Github, Facebook } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import portfolioData from '../data/portfolioData';
import { supabase } from '../lib/supabaseClient';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const { email, location, socialLinks } = portfolioData.personal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData]);

      if (error) throw error;

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

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
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Get in touch for collaborations or opportunities"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex flex-col lg:flex-row max-w-4xl mx-auto gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out through the form or via my contact details.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <MapPin className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">{location}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Mail className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a 
                  href={`mailto:${email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h4 className="font-medium mb-4">Connect with me</h4>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Subject of your message"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Your message"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? (
                <>Sending<span className="animate-pulse">...</span></>
              ) : (
                'Send Message'
              )}
            </Button>
            
            {formStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 mt-2">
                Your message has been sent successfully!
              </p>
            )}
            
            {formStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 mt-2">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;