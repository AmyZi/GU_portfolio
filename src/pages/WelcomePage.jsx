import React from 'react';
import NavigationButtons from '../components/layout/NavigationButtons';
import PurplePortImg from '../assets/PurplePort.jpg';
import { Github, Linkedin } from 'lucide-react';

const WelcomePage = () => {
  return (
    <div className="page-content h-screen flex flex-col bg-gradient-to-br from-primary-50 via-white to-accent-50/20 relative">
      {/* Social Icons */}
      <div className="fixed left-6 bottom-0 flex flex-col items-center">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://github.com/AmyZi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-neutral-900 transform hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-neutral-900 transform hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <div className="w-[1px] h-24 bg-neutral-300"></div>
          <div className="h-8"></div>
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-8">
          <div className="relative">
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden
              ring-4 ring-white shadow-lg
              transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src={PurplePortImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-neutral-800">
              Hi and Welcome!
            </h2>

            <p className="text-xl text-neutral-600">
              Graduate student at Gothenburg University | Frontend Web Developer
            </p>
          </div>

          <div className="pt-8">
            <NavigationButtons 
              next="/about" 
              nextLabel="About Me"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;