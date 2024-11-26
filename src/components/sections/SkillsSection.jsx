import React from 'react';
import { Code, Terminal, Wrench, ChevronUp } from 'lucide-react';

const SkillsSection = ({ onNavigateToAboutSection }) => {
  const skillsData = [
    {
      title: "Front End",
      icon: Code,
      skills: [
        "HTML",
        "CSS & Sass",
        "JavaScript",
        "Tailwind",
        "React & Redux"
      ]
    },
    {
      title: "Back End",
      icon: Terminal,
      skills: [
        "Node",
        "Express",
        "MongoDB"
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        "VS Code",
        "Git & Github",
        "Yarn",
        "Content Management Systems",
        "TypeScript"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50/20 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Up Arrow */}
        <div 
          className="flex justify-center mb-12 text-primary-400 hover:text-primary-600 
            transition-colors duration-300 group"
          onClick={onNavigateToAboutSection}
          role="button"
          aria-label="Back to about section"
        >
          <ChevronUp 
            size={48} 
            className="animate-bounce cursor-pointer group-hover:scale-110 transition-transform"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[1px] bg-primary-200"></div>
            <h2 className="text-4xl font-bold text-primary-800 tracking-wider">
              My Skills
            </h2>
            <div className="w-16 h-[1px] bg-primary-200"></div>
          </div>
          <p className="text-neutral-600 text-lg">
            Technical competencies <span role="img" aria-label="brain">🧠</span> 
            in many areas with a key proficiency in the MERN stack 
            <span role="img" aria-label="computer">💻</span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-24">
          {skillsData.map((category) => (
            <div key={category.title} className="group">
              <div className="flex justify-center mb-8">
                <category.icon 
                  className="w-16 h-16 text-primary-500 group-hover:text-primary-600 
                    transition-colors duration-300 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl mb-10 text-center font-semibold text-primary-700">
                {category.title}
              </h3>
              <ul className="space-y-6">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-neutral-600 hover:text-primary-700 
                      transition-colors duration-300 text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;