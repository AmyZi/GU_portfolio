import React from 'react';
import { ChevronDown } from 'lucide-react';
import meInClass from '../../assets/meInClass.png';

const AboutSection = ({ onNavigateToSkillsSection }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/20">
      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-3xl text-center mb-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-[1px] bg-primary-200"></div>
              <h1 className="text-5xl font-bold text-neutral-800">Who am I?</h1>
              <div className="w-16 h-[1px] bg-primary-200"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-neutral-600">
            <p className="leading-relaxed">
              I am an educator turned software developer, with four years of experience teaching as a public school teacher under Nigeria's Universal Basic Education Commission (UBEC). My journey into technology began unexpectedly at JSS Galadima, where I stepped in as a computer studies teacher. This role sparked my passion for technology and set me on a self-directed learning path in software development.
            </p>
            <p className="leading-relaxed">
              Leveraging my firsthand experience in Nigeria's education system, my future goal is to create customized software solutions that address the specific needs of Nigerian schools, which is also my area of research interest. I combine my educational expertise with growing technical skills to bridge the gap between technology and classroom needs.
            </p>
            <p className="leading-relaxed">
              My unique perspective as both an educator and technology enthusiast positions me to develop practical, user-friendly applications that can enhance the Nigerian educational experience.
            </p>
          </div>
        </div>

        {/* Down Arrow */}
        <div
          className="mt-12 cursor-pointer group"
          onClick={onNavigateToSkillsSection}
          role="button"
          aria-label="View skills section"
        >
          <ChevronDown 
            size={48} 
            className="text-primary-400 group-hover:text-primary-600 
              transform group-hover:scale-110 transition-all duration-300
              animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;