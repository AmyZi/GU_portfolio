import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = ({ 
  prev, 
  next, 
  isLastSlide,
  prevLabel = "Previous",
  nextLabel = "Next",
}) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    document.querySelector('.page-content')?.classList.add('flip-out');
    
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <div className="flex justify-between mt-8">
      {prev && (
        <button
          onClick={() => handleNavigation(prev)}
          className="flex items-center space-x-2 px-6 py-3 rounded-lg
            bg-primary-500 text-white
            hover:bg-primary-600 
            transition-all duration-300 ease-in-out
            shadow-md hover:shadow-lg
            group"
        >
          <span className="font-medium text-lg">←</span>
          <span className="font-medium">{prevLabel}</span>
        </button>
      )}
      {next && (
        <button
          onClick={() => handleNavigation(next)}
          className="flex items-center space-x-2 px-6 py-3 rounded-lg
            bg-primary-500 text-white
            hover:bg-primary-600
            transition-all duration-300 ease-in-out
            shadow-md hover:shadow-lg
            ml-auto
            group"
        >
          <span className="font-medium">
            {isLastSlide ? 'Back to Home' : nextLabel}
          </span>
          <span className="font-bold text-xl group-hover:translate-x-1 transition-transform inline-block">
            →
          </span>
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;