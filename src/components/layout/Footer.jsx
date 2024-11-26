import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-4 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left side - Copyright */}
          <p className="text-sm text-neutral-500">
            © {currentYear} Amina Idris-Abah
          </p>

          {/* Right side - Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="your-cv-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-600 transition-colors duration-300 flex items-center gap-1"
            >
              Resume <ExternalLink size={12} />
            </a>
            <span className="text-neutral-500">
              Built with React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;