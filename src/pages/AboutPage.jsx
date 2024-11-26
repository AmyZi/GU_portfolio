import React, { useState } from 'react';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import Education from '../components/sections/Education';
import NavigationButtons from '../components/layout/NavigationButtons';
import PageFlipper from '../components/layout/PageFlipLayout';

const AboutPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);

  const handlePageTransition = (newPage, direction) => {
    setIsFlipping(true);
    setFlipDirection(direction);
    
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsFlipping(false);
    }, 700);
  };

  const handleNavigateToSkillsSection = () => {
    handlePageTransition(3, 'next');
  };

  const handleNavigateToEducationSection = () => {
    handlePageTransition(2, 'next');
  };

  const handleNavigateToAboutSection = () => {
    handlePageTransition(1, 'prev');
  };

  const handleNavigatePrev = () => {
    if (currentPage > 1) {
      handlePageTransition(currentPage - 1, 'prev');
    }
  };

  const handleNavigateNext = () => {
    if (currentPage < 3) {
      handlePageTransition(currentPage + 1, 'next');
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 overflow-hidden">
      <div className="page-content container mx-auto">
        <PageFlipper isFlipping={isFlipping} direction={flipDirection}>
          {currentPage === 1 && (
            <div className="backface-hidden">
              <AboutSection
                onNavigateToSkillsSection={handleNavigateToEducationSection}
              />
            </div>
          )}
          {currentPage === 2 && (
            <div className="backface-hidden">
              <Education
                onNavigateToSkillsSection={handleNavigateToSkillsSection}
                onNavigateToAboutSection={handleNavigateToAboutSection}
              />
            </div>
          )}
          {currentPage === 3 && (
            <div className="backface-hidden">
              <SkillsSection
                onNavigateToAboutSection={handleNavigateToEducationSection}
              />
            </div>
          )}
        </PageFlipper>
        <NavigationButtons
          prev="/"
          onPrevClick={handleNavigatePrev}
          next="/study"
          onNextClick={handleNavigateNext}
        />
      </div>
    </div>
  );
};

export default AboutPage;