import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { title: "Home", path: "/", index: 0 },
    { title: "About", path: "/about", index: 1 },
    { title: "Study", path: "/study", index: 2 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isCurrentPath = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="bg-primary-800 h-[12vh] fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div 
            className="text-primary-100 text-xl font-bold cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Amina Idris-Abah
          </div>

          {isMobile ? (
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          ) : (
            <div className="flex items-center">
              {navLinks.map((item, index) => (
                <React.Fragment key={item.title}>
                  <button
                    className={`
                      text-primary-200 hover:text-primary-100 transition-colors
                      relative py-2 px-4
                      ${isCurrentPath(item.path) ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white' : ''}
                    `}
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.title}
                  </button>
                  {index < navLinks.length - 1 && (
                    <div className="h-6 border-l border-white/50 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && isMobile && (
        <div className="absolute top-[12vh] left-0 w-full bg-primary shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.title}
                className={`
                  text-white hover:text-gray-300 w-full text-center py-2
                  transition-colors duration-300 relative
                  ${isCurrentPath(item.path) ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-0.5 after:bg-white' : ''}
                `}
                onClick={() => handleNavigation(item.path)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;