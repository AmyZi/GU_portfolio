import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Education = ({ onNavigateToSkillsSection, onNavigateToAboutSection }) => (
  <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/20 py-16">
    {/* Up Arrow at Top */}
    <div 
      className="flex justify-center mb-12 text-primary-400 hover:text-primary-600 
        transition-colors duration-300 group cursor-pointer"
      onClick={onNavigateToAboutSection}
      role="button"
      aria-label="Back to about section"
    >
      <ChevronUp 
        size={48} 
        className="animate-bounce group-hover:scale-110 transition-transform"
      />
    </div>

    {/* Main Content */}
    <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-[1px] bg-primary-200"></div>
            <h2 className="text-4xl font-bold text-primary-800">Education</h2>
            <div className="w-16 h-[1px] bg-primary-200"></div>
            </div>
        </div>
      <div className="space-y-8">
        <div className="border-l-4 border-primary-500 pl-4 hover:border-primary-600 transition-colors">
          <h3 className="text-xl font-semibold text-primary-700">
            International Master Information Technologies and Learning
          </h3>
          <p className="text-neutral-600">Gothenburg University, 2024 - Present</p>
        </div>
        <div className="border-l-4 border-primary-500 pl-4 hover:border-primary-600 transition-colors">
          <h3 className="text-xl font-semibold text-primary-700">
            Diploma - Frontend Software Engineering
          </h3>
          <p className="text-neutral-600">ALX(Holberton School), 2023 - 2024</p>
        </div>
        <div className="border-l-4 border-primary-500 pl-4 hover:border-primary-600 transition-colors">
          <h3 className="text-xl font-semibold text-primary-700">
            B.Ed English
          </h3>
          <p className="text-neutral-600">Nasarawa State University, 2013 - 2017</p>
        </div>
      </div>
    </div>

    {/* Down Arrow at Bottom */}
    <div 
      className="flex justify-center mt-20 text-primary-400 hover:text-primary-600 
        transition-colors duration-300 group cursor-pointer"
      onClick={onNavigateToSkillsSection}
      role="button"
      aria-label="View skills section"
    >
      <ChevronDown 
        size={48} 
        className="animate-bounce group-hover:scale-110 transition-transform"
      />
    </div>
  </div>
);

export default Education;